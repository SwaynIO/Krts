'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
                            <p className="tg-element-title">we proud that</p>
                            <div className="border-box"></div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">Discover Our Awards</h2>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="awards-one__inner">
                                <Swiper {...swiperOptions} className="awards-one__carousel">
                                    <SwiperSlide>
                                    {/* Start Awards One Single*/}
                                    <div className="awards-one__single text-center">
                                        <div className="awards-one__single-top">
                                            <div className="awards-one__single-icon">
                                                <span className="icon-dribbble-1"></span>
                                            </div>
                                            <div className="awards-one__single-content">
                                                <span>2012-2023</span>
                                                <h2>Best Development Awards 2022</h2>
                                                <p>Dribble Awards-</p>
                                            </div>
                                        </div>

                                        <div className="awards-one__single-counter">
                                            <h3>01</h3>
                                        </div>

                                        <div className="awards-one__single-bottom">
                                            <div className="awards-one__single-content">
                                                <span>2012-2023</span>
                                                <h2>Best Development Awards 2022</h2>
                                                <p>Dribble Awards-</p>
                                            </div>
                                            <div className="overlay-icon">
                                                <span className="icon-dribbble-1"></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Awards One Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    {/* Start Awards One Single*/}
                                    <div className="awards-one__single text-center">
                                        <div className="awards-one__single-top">
                                            <div className="awards-one__single-icon">
                                                <span className="icon-medal"></span>
                                            </div>
                                            <div className="awards-one__single-content">
                                                <span>2015-2018</span>
                                                <h2>Mobile of the Month, July 2014</h2>
                                                <p>Awards Inc-</p>
                                            </div>
                                        </div>

                                        <div className="awards-one__single-counter">
                                            <h3>02</h3>
                                        </div>

                                        <div className="awards-one__single-bottom">
                                            <div className="awards-one__single-content">
                                                <span>2015-2018</span>
                                                <h2>Mobile of the Month, July 2014</h2>
                                                <p>Awards Inc-</p>
                                            </div>
                                            <div className="overlay-icon">
                                                <span className="icon-medal"></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Awards One Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    {/* Start Awards One Single*/}
                                    <div className="awards-one__single text-center">
                                        <div className="awards-one__single-top">
                                            <div className="awards-one__single-icon">
                                                <span className="icon-social"></span>
                                            </div>
                                            <div className="awards-one__single-content">
                                                <span>2012-2013</span>
                                                <h2>Year Best Interective Awards</h2>
                                                <p>Behance Award-</p>
                                            </div>
                                        </div>

                                        <div className="awards-one__single-counter">
                                            <h3>03</h3>
                                        </div>
                                        <div className="awards-one__single-bottom">
                                            <div className="awards-one__single-content">
                                                <span>2012-2013</span>
                                                <h2>Year Best Interective Awards</h2>
                                                <p>Behance Award-</p>
                                            </div>
                                            <div className="overlay-icon">
                                                <span className="icon-social"></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Awards One Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    {/* Start Awards One Single*/}
                                    <div className="awards-one__single text-center">
                                        <div className="awards-one__single-top">
                                            <div className="awards-one__single-icon">
                                                <span className="icon-dribbble-1"></span>
                                            </div>
                                            <div className="awards-one__single-content">
                                                <span>2012-2023</span>
                                                <h2>Best Development Awards 2022</h2>
                                                <p>Dribble Awards-</p>
                                            </div>
                                        </div>

                                        <div className="awards-one__single-counter">
                                            <h3>01</h3>
                                        </div>

                                        <div className="awards-one__single-bottom">
                                            <div className="awards-one__single-content">
                                                <span>2012-2023</span>
                                                <h2>Best Development Awards 2022</h2>
                                                <p>Dribble Awards-</p>
                                            </div>
                                            <div className="overlay-icon">
                                                <span className="icon-dribbble-1"></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Awards One Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    {/* Start Awards One Single*/}
                                    <div className="awards-one__single text-center">
                                        <div className="awards-one__single-top">
                                            <div className="awards-one__single-icon">
                                                <span className="icon-medal"></span>
                                            </div>
                                            <div className="awards-one__single-content">
                                                <span>2015-2018</span>
                                                <h2>Mobile of the Month, July 2014</h2>
                                                <p>Awards Inc-</p>
                                            </div>
                                        </div>

                                        <div className="awards-one__single-counter">
                                            <h3>02</h3>
                                        </div>

                                        <div className="awards-one__single-bottom">
                                            <div className="awards-one__single-content">
                                                <span>2015-2018</span>
                                                <h2>Mobile of the Month, July 2014</h2>
                                                <p>Awards Inc-</p>
                                            </div>
                                            <div className="overlay-icon">
                                                <span className="icon-medal"></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Awards One Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    {/* Start Awards One Single*/}
                                    <div className="awards-one__single text-center">
                                        <div className="awards-one__single-top">
                                            <div className="awards-one__single-icon">
                                                <span className="icon-social"></span>
                                            </div>
                                            <div className="awards-one__single-content">
                                                <span>2012-2013</span>
                                                <h2>Year Best Interective Awards</h2>
                                                <p>Behance Award-</p>
                                            </div>
                                        </div>

                                        <div className="awards-one__single-counter">
                                            <h3>03</h3>
                                        </div>
                                        <div className="awards-one__single-bottom">
                                            <div className="awards-one__single-content">
                                                <span>2012-2013</span>
                                                <h2>Year Best Interective Awards</h2>
                                                <p>Behance Award-</p>
                                            </div>
                                            <div className="overlay-icon">
                                                <span className="icon-social"></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Awards One Single*/}
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
