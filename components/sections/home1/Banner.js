'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    return (
        <>
            <section className="main-slider main-slider-one">
                <Swiper {...swiperOptions} className="swiper-container main-slider-one__carousel">
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            {/* Start Main Slider One*/}
                            <div className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slides/slider-v1-bg.jpg)' }}></div>
                                <div className="auto-container">
                                    <div className="main-slider-one__single">
                                        <div className="main-slider-one__img">
                                            <img src="assets/images/slides/slider-v1-img1.jpg" alt="Elegance in Motion" />
                                        </div>
                                        <div className="main-slider-one__content">
                                            <ul className="social-links">
                                                <li><Link href="#">Facebook</Link></li>
                                                <li><Link href="#">Twitter</Link></li>
                                                <li><Link href="#">Instagram</Link></li>
                                                <li><Link href="#">Behance</Link></li>
                                            </ul>

                                            <div className="title">
                                                <h2>
                                                    Elegance <br />
                                                    <span className="icon-right-arrow-1"></span> Redefined <br />
                                                    Every Moment
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Main Slider One*/}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* Start Main Slider One*/}
                            <div className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slides/slider-v1-bg.jpg)' }}></div>
                                <div className="auto-container">
                                    <div className="main-slider-one__single">
                                        <div className="main-slider-one__img">
                                            <img src="assets/images/slides/slider-v1-img2.jpg" alt="Shadows of Sophistication" />
                                        </div>
                                        <div className="main-slider-one__content">
                                            <ul className="social-links">
                                                <li><Link href="#">Facebook</Link></li>
                                                <li><Link href="#">Twitter</Link></li>
                                                <li><Link href="#">Instagram</Link></li>
                                                <li><Link href="#">Behance</Link></li>
                                            </ul>

                                            <div className="title">
                                                <h2>
                                                    Mastering <br />
                                                    <span className="icon-right-arrow-1"></span> Elegance <br />
                                                    and Mystery
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Main Slider One*/}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* Start Main Slider One*/}
                            <div className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slides/slider-v1-bg.jpg)' }}></div>
                                <div className="auto-container">
                                    <div className="main-slider-one__single">
                                        <div className="main-slider-one__img">
                                            <img src="assets/images/slides/slider-v1-img3.jpg" alt="The Art of Manipulation" />
                                        </div>
                                        <div className="main-slider-one__content">
                                            <ul className="social-links">
                                                <li><Link href="#">Facebook</Link></li>
                                                <li><Link href="#">Twitter</Link></li>
                                                <li><Link href="#">Instagram</Link></li>
                                                <li><Link href="#">Behance</Link></li>
                                            </ul>

                                            <div className="title">
                                                <h2>
                                                    The Art <br />
                                                    <span className="icon-right-arrow-1"></span> of Subtle <br />
                                                    Manipulation
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Main Slider One*/}
                        </SwiperSlide>
                    </div>
                    <div className="project-one__control-wrap">
                        <div className="swiper-counter">
                            <div id="current2">01</div>
                            <div id="total2"></div>
                        </div>
                    </div>

                    <div className="scroll-pagination">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </section>
        </>
    )
}
