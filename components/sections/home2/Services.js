'use client'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
export default function Service() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {/* Start Services Two */}
        <section className="services-two">
            <div className="container">
                <div className="sec-title tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <p className="tg-element-title">our services</p>
                        <div className="border-box"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">What We Offer
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="services-two__inner">
                            <div className="services-two__middle-content">
                                <div className="img-box float-bob-y">
                                    <img src="assets/images/resources/services-v2-img1.jpg" alt=""/>
                                </div>

                                <div className="services-two__video">
                                    <div className="video-box">
                                        <a className="video-popup" title="Video Gallery"
                                            onClick={() => setOpen(true)}
                                            style="visibility: visible;">
                                            <i className="icon-play-button-1" aria-hidden="true"></i>
                                            <span className="ripple"></span>
                                        </a>
                                    </div>

                                    <div className="title-box">
                                        <h3>Watch Video</h3>
                                    </div>
                                </div>
                            </div>

                            <ul className="services-two__list">
                                <li className="services-two__list-item wow fadeInLeft" data-wow-delay="100ms"
                                    data-wow-duration="1000ms">
                                    <div className="icon-box">
                                        <span className="icon-project-management"></span>
                                    </div>

                                    <div className="content-box">
                                        <h2><Link href="#">Develope</Link></h2>
                                        <p>Mestib removes the completed
                                            marketing reserch abusiness high
                                            consultations..</p>
                                    </div>
                                </li>

                                <li className="services-two__list-item style2 wow fadeInRight" data-wow-delay="0ms"
                                    data-wow-duration="1000ms">
                                    <div className="icon-box">
                                        <span className="icon-creative-idea"></span>
                                    </div>

                                    <div className="content-box">
                                        <h2><Link href="#">Creative</Link></h2>
                                        <p>Mestib removes the completed
                                            marketing reserch abusiness high
                                            consultations..</p>
                                    </div>
                                </li>
                            </ul>

                            <ul className="services-two__list style2">
                                <li className="services-two__list-item wow fadeInLeft" data-wow-delay="100ms"
                                    data-wow-duration="1000ms">
                                    <div className="icon-box">
                                        <span className="icon-promotion"></span>
                                    </div>

                                    <div className="content-box">
                                        <h2><Link href="#">Marketing</Link></h2>
                                        <p>Mestib removes the completed
                                            marketing reserch abusiness high
                                            consultations..</p>
                                    </div>
                                </li>

                                <li className="services-two__list-item style2 wow fadeInRight" data-wow-delay="0ms"
                                    data-wow-duration="1000ms">
                                    <div className="icon-box">
                                        <span className="icon-interior-design"></span>
                                    </div>

                                    <div className="content-box">
                                        <h2><Link href="#">Designing</Link></h2>
                                        <p>Mestib removes the completed
                                            marketing reserch abusiness high
                                            consultations..</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Start Services Two */}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />

    
        </>
    )
}
