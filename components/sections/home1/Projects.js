import Link from "next/link"

export default function Projects() {
    return (
        <>
            <section className="project-one">
                <div className="container">
                    <div className="row">
                        {/*Start Project One Single*/}
                        <div className="col-xl-5 col-lg-5 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="project-one__title">
                                <div className="sec-title tg-heading-subheading animation-style2">
                                    <div className="sec-title__tagline">
                                        <div className="line"></div>
                                        <div className="text tg-element-title">
                                            <h4>Featured Vision</h4>
                                        </div>
                                        <div className="icon">
                                            <span className="icon-plane2 float-bob-x3"></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title__title tg-element-title">The Masterpieces <br />
                                        Behind the <span>Shadows</span></h2>
                                </div>

                                <div className="btn-box">
                                    <Link className="thm-btn" href="project">Explore All Works
                                        <i className="icon-right-arrow21"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/*End Project One Single*/}

                        {/*Start Project One Single*/}
                        <div className="col-xl-7 col-lg-7 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="project-one__single">
                                <div className="project-one__single-img">
                                    <div className="inner">
                                        <img src="assets/images/project/project-v1-img1.jpg" alt="A Visionary Creation" />
                                        <div className="project-one__overlay-content">
                                            <div className="text-box">
                                                <p>Elegance</p>
                                                <h2><Link href="project-details">Ethereal Boundaries</Link></h2>
                                            </div>

                                            <div className="icon">
                                                <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project One Single*/}

                        {/*Start Project One Single*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="project-one__single">
                                <div className="project-one__single-img">
                                    <div className="inner">
                                        <img src="assets/images/project/project-v1-img2.jpg" alt="Timeless Sophistication" />
                                        <div className="project-one__overlay-content">
                                            <div className="text-box">
                                                <p>Intrigue</p>
                                                <h2><Link href="project-details">Silent Harmony</Link></h2>
                                            </div>

                                            <div className="icon">
                                                <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project One Single*/}

                        {/*Start Project One Single*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="project-one__single">
                                <div className="project-one__single-img">
                                    <div className="inner">
                                        <img src="assets/images/project/project-v1-img3.jpg" alt="Elegant Whispers" />
                                        <div className="project-one__overlay-content">
                                            <div className="text-box">
                                                <p>Mystery</p>
                                                <h2><Link href="project-details">Veiled Symmetry</Link></h2>
                                            </div>

                                            <div className="icon">
                                                <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project One Single*/}

                        {/*Start Project One Single*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="project-one__single">
                                <div className="project-one__single-img">
                                    <div className="inner">
                                        <img src="assets/images/project/project-v1-img4.jpg" alt="Refined Narratives" />
                                        <div className="project-one__overlay-content">
                                            <div className="text-box">
                                                <p>Elegance</p>
                                                <h2><Link href="project-details">Luminous Paths</Link></h2>
                                            </div>

                                            <div className="icon">
                                                <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project One Single*/}
                    </div>
                </div>
            </section>
        </>
    )
}
