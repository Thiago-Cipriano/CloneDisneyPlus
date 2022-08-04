import UserProfile from '../../JS/components/user-profile.js'
import BannerSliderItem from '../../JS/components/banner-slider-item.js'
import ControlSliderItem from '../../JS/components/control-slider-item.js'
import Collection from '../../JS/components/collection.js'
import MovieCarouselItem from '../../JS/components/movie-carousel-item.js'
import bannerSliderModule from '../../JS/modules/banner-slider.js'
import collectionModule from '../../JS/modules/collections.js'
import headerModule from '../../JS/modules/header.js'

const Home = (data) => {
    const userProfilesElement = document.querySelector('[data-usermenu="user-profiles"]')
    const controlsSliderElement = document.querySelector('[data-banner="controls"]')
    const bannerSliderElement = document.querySelector('[data-banner="slider"]')
    const collectionsElement = document.querySelector('[data-carousel="collections"]')
    const { banners, categories, movies, userProfiles } = data

    for (const profile of userProfiles) {
        userProfilesElement.innerHTML += UserProfile(profile)
    }

    for (const banner of banners) {
        bannerSliderElement.innerHTML += BannerSliderItem(banner)
        controlsSliderElement.innerHTML += ControlSliderItem()
    }

    for (const category of categories) {
        collectionsElement.innerHTML += Collection(category)
        const collectionElement = document.querySelector(`[data-id="${category.id}"]`)
        const movieCarouselListElement = collectionElement.querySelector('[data-carousel="list"]')
        const collectionMovies = movies.filter((movie) => movie.categories.includes(category.id))
        for (const movie of collectionMovies){
            movieCarouselListElement.innerHTML += MovieCarouselItem(movie)
        }
    }

    headerModule().init()
    bannerSliderModule().init()
    collectionModule().init()
}

export default Home