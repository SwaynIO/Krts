'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    }
}

export default function Awards() {
    return (
        <>

            {/* Start Awards One */}
            <section className="awards-one">
                <div className="container">
                    <div className="awards-one__box">
                        <div className="border-box2"></div>

                        <div className="sec-title tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <p className="tg-element-title">Achievements in Elegance</p>
                                <div className="border-box"></div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">Unveiling the Legacy</h2>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="awards-one__inner">
                                    <Swiper {...swiperOptions} className="awards-one__carousel">
                                        <SwiperSlide>
                                            {/* Start Awards One Single */}
                                            <div className="awards-one__single text-center">
                                                <div className="awards-one__single-top">
                                                    <div className="awards-one__single-icon">
                                                        <span className="icon-dribbble-1"></span>
                                                    </div>
                                                    <div className="awards-one__single-content">
                                                        <span>2020</span>
                                                        <h2>Mystery Artisan Award</h2>
                                                        <p>Elegance Society-</p>
                                                    </div>
                                                </div>

                                                <div className="awards-one__single-counter">
                                                    <h3>01</h3>
                                                </div>

                                                <div className="awards-one__single-bottom">
                                                    <div className="awards-one__single-content">
                                                        <span>2020</span>
                                                        <h2>Mystery Artisan Award</h2>
                                                        <p>Elegance Society-</p>
                                                    </div>
                                                    <div className="overlay-icon">
                                                        <span className="icon-dribbble-1"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Awards One Single */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Awards One Single */}
                                            <div className="awards-one__single text-center">
                                                <div className="awards-one__single-top">
                                                    <div className="awards-one__single-icon">
                                                        <span className="icon-medal"></span>
                                                    </div>
                                                    <div className="awards-one__single-content">
                                                        <span>2018</span>
                                                        <h2>Masterpiece of the Year</h2>
                                                        <p>Artisan Circle-</p>
                                                    </div>
                                                </div>

                                                <div className="awards-one__single-counter">
                                                    <h3>02</h3>
                                                </div>

                                                <div className="awards-one__single-bottom">
                                                    <div className="awards-one__single-content">
                                                        <span>2018</span>
                                                        <h2>Masterpiece of the Year</h2>
                                                        <p>Artisan Circle-</p>
                                                    </div>
                                                    <div className="overlay-icon">
                                                        <span className="icon-medal"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Awards One Single */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Awards One Single */}
                                            <div className="awards-one__single text-center">
                                                <div className="awards-one__single-top">
                                                    <div className="awards-one__single-icon">
                                                        <span className="icon-social"></span>
                                                    </div>
                                                    <div className="awards-one__single-content">
                                                        <span>2016</span>
                                                        <h2>Illusionary Art Prize</h2>
                                                        <p>Society of Vision-</p>
                                                    </div>
                                                </div>

                                                <div className="awards-one__single-counter">
                                                    <h3>03</h3>
                                                </div>

                                                <div className="awards-one__single-bottom">
                                                    <div className="awards-one__single-content">
                                                        <span>2016</span>
                                                        <h2>Illusionary Art Prize</h2>
                                                        <p>Society of Vision-</p>
                                                    </div>
                                                    <div className="overlay-icon">
                                                        <span className="icon-social"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Awards One Single */}
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Awards One */}

        </>
    )
}
