
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
        {/* Start Main Slider Two*/}
        <section className="main-slider main-slider-two">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                <div className="swiper-wrapper">
                    <SwiperSlide>
                    {/* Start Main Slider Two Single*/}
                    <div className="swiper-slide">
                        <div className="image-layer"
                            style={{ backgroundImage: ' url(assets/images/slides/slider-v2-img1.jpg)' }} ></div>
                        <div className="main-slider-two__bg"
                            style={{ backgroundImage: ' url(assets/images/slides/slider-v2-img2.jpg)' }} ></div>
                        <div className="auto-container">
                            <div className="main-slider-two__single">
                                <div className="main-slider-two__single-top">
                                    <div className="counter-box">
                                        <div className="number">
                                            <h2>01</h2>
                                        </div>
                                        <div className="border-box"></div>
                                    </div>
                                    <div className="text">
                                        <p>Mestib remove the politices project completed marketing <br/>
                                            reserch abusiness high level process consultations for <br/>
                                            business the best highest growths.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">Get In Touch</Link>
                                    </div>
                                </div>

                                <div className="main-slider-two__single-bottom">
                                    <div className="title-box">
                                        <h2>Digital <br/>
                                            Marketing</h2>
                                        <h3>Solutions</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider Two Single*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/* Start Main Slider Two Single*/}
                    <div className="swiper-slide">
                        <div className="image-layer"
                            style={{ backgroundImage: ' url(assets/images/slides/slider-v2-img3.jpg)' }} ></div>
                        <div className="main-slider-two__bg"
                            style={{ backgroundImage: ' url(assets/images/slides/slider-v2-img4.jpg)' }} ></div>
                        <div className="auto-container">
                            <div className="main-slider-two__single">
                                <div className="main-slider-two__single-top">
                                    <div className="counter-box">
                                        <div className="number">
                                            <h2>01</h2>
                                        </div>
                                        <div className="border-box"></div>
                                    </div>
                                    <div className="text">
                                        <p>Mestib remove the politices project completed marketing <br/>
                                            reserch abusiness high level process consultations for <br/>
                                            business the best highest growths.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">Get In Touch</Link>
                                    </div>
                                </div>

                                <div className="main-slider-two__single-bottom">
                                    <div className="title-box">
                                        <h2>Digital <br/>
                                            Marketing</h2>
                                        <h3>Solutions</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider Two Single*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/* Start Main Slider Two Single*/}
                    <div className="swiper-slide">
                        <div className="image-layer"
                            style={{ backgroundImage: ' url(assets/images/slides/slider-v2-img1.jpg)' }} ></div>
                        <div className="main-slider-two__bg"
                            style={{ backgroundImage: ' url(assets/images/slides/slider-v2-img2.jpg)' }} ></div>
                        <div className="auto-container">
                            <div className="main-slider-two__single">
                                <div className="main-slider-two__single-top">
                                    <div className="counter-box">
                                        <div className="number">
                                            <h2>01</h2>
                                        </div>
                                        <div className="border-box"></div>
                                    </div>
                                    <div className="text">
                                        <p>Mestib remove the politices project completed marketing <br/>
                                            reserch abusiness high level process consultations for <br/>
                                            business the best highest growths.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">Get In Touch</Link>
                                    </div>
                                </div>

                                <div className="main-slider-two__single-bottom">
                                    <div className="title-box">
                                        <h2>Digital <br/>
                                            Marketing</h2>
                                        <h3>Solutions</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider Two Single*/}
                    </SwiperSlide>
                </div>
            </Swiper>
        </section>
        {/* End Main Slider Two*/}
        </>
    )
}
