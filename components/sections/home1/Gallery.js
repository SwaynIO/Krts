import Link from "next/link"

export default function Gallery() {
    return (
        <>
            {/* Start Gallery One */}
            <section className="gallery-one">
                <div className="container">
                    <div className="sec-title tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                            <p className="tg-element-title">Krts. Showcase</p>
                            <div className="border-box"></div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">Discover Elegance <br /> in Every Detail</h2>
                    </div>
                    <div className="row">
                        {/* Start Gallery One Single */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="gallery-one__single">
                                <div className="gallery-one__single-img">
                                    <div className="inner">
                                        <img src="assets/images/gallery/gallery-v1-img1.jpg" alt="Mysterious Design" />
                                        <div className="btn-box">
                                            <Link href="#"><span className="icon-diagonal-arrow2"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery One Single */}

                        {/* Start Gallery One Single */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                            data-wow-duration="1500ms">
                            <div className="gallery-one__single">
                                <div className="gallery-one__single-content">
                                    <div className="number-box">
                                        01
                                    </div>
                                    <h2><Link href="#">Shadows of Elegance</Link></h2>
                                    <p>An exploration of subtlety and power, where each project tells a story of grace and mystery.</p>
                                    <div className="btn-box">
                                        <Link href="#">View Details <span className="icon-chevron"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery One Single */}

                        {/* Start Gallery One Single */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms"
                            data-wow-duration="1500ms">
                            <div className="gallery-one__single">
                                <div className="gallery-one__single-img">
                                    <div className="inner">
                                        <img src="assets/images/gallery/gallery-v1-img2.jpg" alt="Timeless Sophistication" />
                                        <div className="btn-box">
                                            <Link href="#"><span className="icon-diagonal-arrow2"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery One Single */}

                        {/* Start Gallery One Single */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="gallery-one__single">
                                <div className="gallery-one__single-img">
                                    <div className="inner">
                                        <img src="assets/images/gallery/gallery-v1-img3.jpg" alt="Elegant Narratives" />
                                        <div className="btn-box">
                                            <Link href="#"><span className="icon-diagonal-arrow2"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery One Single */}

                        {/* Start Gallery One Single */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                            data-wow-duration="1500ms">
                            <div className="gallery-one__single">
                                <div className="gallery-one__single-content">
                                    <div className="number-box">
                                        02
                                    </div>
                                    <h2><Link href="#">The Brightest Vision</Link></h2>
                                    <p>Illuminating the unknown through creativity, where innovation meets imagination.</p>
                                    <div className="btn-box">
                                        <Link href="#">View Details <span className="icon-chevron"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery One Single */}

                        {/* Start Gallery One Single */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms"
                            data-wow-duration="1500ms">
                            <div className="gallery-one__single">
                                <div className="gallery-one__single-img">
                                    <div className="inner">
                                        <img src="assets/images/gallery/gallery-v1-img4.jpg" alt="Whispers of Mystery" />
                                        <div className="btn-box">
                                            <Link href="#"><span className="icon-diagonal-arrow2"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery One Single */}
                    </div>
                </div>
            </section>
            {/* End Gallery One */}
        </>
    )
}
