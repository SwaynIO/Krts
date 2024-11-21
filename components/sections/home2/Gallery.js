'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,    
    loop: true,
    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },
    // Pagination
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
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 4,
            
        },
    }



}

export default function Gallery() {
    return (
        <>
        {/* Start Gallery Two */}
        <section className="gallery-two">
            <div className="container">
                <div className="sec-title tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <p className="tg-element-title">latest projects</p>
                        <div className="border-box"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Our Working Gallery</h2>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="gallery-two__inner">
                            <Swiper {...swiperOptions} className="owl-carousel owl-theme thm-owl__carousel gallery-two__carousel">
                                <SwiperSlide>
                                {/* Start Gallery Two Single*/}
                                <div className="gallery-two__single">
                                    <div className="gallery-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/gallery/gallery-v2-img1.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Gallery Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Gallery Two Single*/}
                                <div className="gallery-two__single">
                                    <div className="gallery-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/gallery/gallery-v2-img2.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Gallery Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Gallery Two Single*/}
                                <div className="gallery-two__single">
                                    <div className="gallery-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/gallery/gallery-v2-img3.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Gallery Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Gallery Two Single*/}
                                <div className="gallery-two__single">
                                    <div className="gallery-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/gallery/gallery-v2-img4.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Gallery Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Gallery Two Single*/}
                                <div className="gallery-two__single">
                                    <div className="gallery-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/gallery/gallery-v2-img1.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Gallery Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Gallery Two Single*/}
                                <div className="gallery-two__single">
                                    <div className="gallery-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/gallery/gallery-v2-img2.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Gallery Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Gallery Two Single*/}
                                <div className="gallery-two__single">
                                    <div className="gallery-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/gallery/gallery-v2-img3.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Gallery Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Gallery Two Single*/}
                                <div className="gallery-two__single">
                                    <div className="gallery-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/gallery/gallery-v2-img4.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Gallery Two Single*/}
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Gallery Two */}
        </>
    )
}
