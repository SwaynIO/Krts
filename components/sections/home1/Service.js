'use client'
import Link from "next/link"
export default function Service() {
    return (
        <>
            {/* Start Services One */}
            <section className="services-one">
                <div className="container">
                    <div className="row">
                        {/* Start Services One Left Content */}
                        <div className="col-xl-5">
                            <div className="services-one__left-content">
                                <div className="sec-title tg-heading-subheading animation-style2">
                                    <div className="sec-title__tagline">
                                        <p className="tg-element-title">What Krts. Offers</p>
                                        <div className="border-box"></div>
                                    </div>
                                    <h2 className="sec-title__title tg-element-title">Guidance, Support & <br />
                                        Elegant Solutions
                                    </h2>
                                </div>

                                <div className="services-one__left-content-text">
                                    <p>In a world filled with uncertainty, Krts. offers clarity and direction. Whether you are taking your first steps or seeking refined expertise, each solution is crafted with subtlety and grace.</p>
                                </div>
                            </div>
                        </div>
                        {/* End Services One Left Content */}

                        {/* Start Services One Right Content */}
                        <div className="col-xl-7">
                            <div className="services-one__right-content">
                                <ul>
                                    <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                        <div className="outer-box">
                                            <div className="inner">
                                                <div className="left-content">
                                                    <div className="icon-box">
                                                        <span className="icon-writing"></span>
                                                    </div>
                                                    <div className="title-box">
                                                        <h2>Elegant Content <br />
                                                            </h2>
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <p>Krts. crafts compelling stories and tailored content strategies to empower your vision and leave an indelible mark.</p>
                                                </div>
                                            </div>

                                            <div className="overlay-content">
                                                <div className="left-content">
                                                    <div className="number-box">
                                                        01
                                                    </div>

                                                    <div className="title-box2">
                                                        <h2>Elegant Content <br />
                                                            & Narratives</h2>
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <div className="btn-box">
                                                        <Link href="#">Learn More <span className="icon-chevron"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow animated fadeInRight" data-wow-delay="0.3s">
                                        <div className="outer-box">
                                            <div className="inner">
                                                <div className="left-content">
                                                    <div className="icon-box">
                                                        <span className="icon-web-design"></span>
                                                    </div>
                                                    <div className="title-box">
                                                        <h2>Visual Elegance <br />
                                                            </h2>
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <p>From intricate sketches to impactful designs, Krts. shapes visuals that resonate and captivate, blending style with substance.</p>
                                                </div>
                                            </div>

                                            <div className="overlay-content">
                                                <div className="left-content">
                                                    <div className="number-box">
                                                        02
                                                    </div>

                                                    <div className="title-box2">
                                                        <h2>Visual Elegance <br />
                                                            & Design</h2>
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <div className="btn-box">
                                                        <Link href="#">Learn More <span className="icon-chevron"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow animated fadeInRight" data-wow-delay="0.3s">
                                        <div className="outer-box">
                                            <div className="inner">
                                                <div className="left-content">
                                                    <div className="icon-box">
                                                        <span className="icon-development"></span>
                                                    </div>
                                                    <div className="title-box">
                                                        <h2>Web Creation <br />
                                                            </h2>
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <p>Krts. designs and develops sophisticated web solutions, weaving functionality and elegance into a seamless digital experience.</p>
                                                </div>
                                            </div>

                                            <div className="overlay-content">
                                                <div className="left-content">
                                                    <div className="number-box">
                                                        03
                                                    </div>

                                                    <div className="title-box2">
                                                        <h2>Web Creation <br />
                                                            & Development</h2>
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <div className="btn-box">
                                                        <Link href="#">Learn More <span className="icon-chevron"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* End Services One Right Content */}
                    </div>
                </div>
            </section>
            {/* End Services One */}
        </>
    )
}
