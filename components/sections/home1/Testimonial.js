'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 1 },
        991: { slidesPerView: 1 },
        1199: { slidesPerView: 1 },
        1350: { slidesPerView: 1 },
    },
}

export default function Testimonial() {
    return (
        <>
            {/* Start Testimonials One */}
            <section className="testimonials-one">
                <div className="container">
                    <div className="testimonials-one__top">
                        <div className="sec-title tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <p className="tg-element-title">Words of Elegance</p>
                                <div className="border-box"></div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">Reflections from Those Guided</h2>
                        </div>

                        <div className="btn-box">
                            <Link className="thm-btn" href="contact">
                                <span className="txt">Share Your Experience</span>
                                <span className="bdrl"></span>
                                <span className="bdrr"></span>
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="testimonials-one__inner">
                                <Swiper {...swiperOptions} className="testimonials-one__carousel">
                                    <SwiperSlide>
                                        {/* Start Testimonials One Single */}
                                        <div className="testimonials-one__single">
                                            <div className="left-content">
                                                <div className="icon-box">
                                                    <span className="icon-left-quote"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>Bess</p>
                                                    <span>The Visionary</span>
                                                </div>
                                            </div>

                                            <div className="right-content">
                                                <div className="text-box">
                                                    <p>"Krts. saw potential in me that I had overlooked. His elegant approach turned my ideas into reality. Working with him felt like unveiling a part of myself I never knew existed."</p>
                                                </div>

                                                <div className="rating-box">
                                                    <ul>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                    </ul>
                                                </div>
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/bess.png" alt="Bess" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonials One Single */}
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* Start Testimonials One Single */}
                                        <div className="testimonials-one__single">
                                            <div className="left-content">
                                                <div className="icon-box">
                                                    <span className="icon-left-quote"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>Zia</p>
                                                    <span>The Strategist</span>
                                                </div>
                                            </div>

                                            <div className="right-content">
                                                <div className="text-box">
                                                    <p>"The guidance of Krts. is unparalleled. His mysterious charm is only matched by his unwavering support and ability to transform the ordinary into the extraordinary."</p>
                                                </div>

                                                <div className="rating-box">
                                                    <ul>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                    </ul>
                                                </div>
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/zia.png" alt="Zia" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonials One Single */}
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* Start Testimonials One Single */}
                                        <div className="testimonials-one__single">
                                            <div className="left-content">
                                                <div className="icon-box">
                                                    <span className="icon-left-quote"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>Divine Darkness</p>
                                                    <span>The Eternal</span>
                                                </div>
                                            </div>

                                            <div className="right-content">
                                                <div className="text-box">
                                                    <p>"Krts. is not just a guide, but an enigma. His wisdom and presence have shaped not just my journey, but the way I view the world. He is a master of elegance and insight."</p>
                                                </div>

                                                <div className="rating-box">
                                                    <ul>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                        <li><span className="icon-pointed-star"></span></li>
                                                    </ul>
                                                </div>
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/divine_darkness.png" alt="Divine Darkness" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonials One Single */}
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Testimonials One */}
        </>
    )
}
