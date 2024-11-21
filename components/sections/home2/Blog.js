import Link from "next/link"
export default function Blog() {
    return (
        <>
        
        {/* Start Blog Two */}
        <section className="blog-two">
            <div className="container">
                <div className="blog-two__top">
                    <div className="sec-title tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                            <p className="tg-element-title">new updates</p>
                            <div className="border-box"></div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">Latest Our Blogs
                        </h2>
                    </div>

                    <div className="text-box">
                        <p>Mestib removes the completed market reserches our
                            abusiness high consultations we are prouds of the
                            work hards for business.. </p>
                    </div>
                </div>

                <div className="blog-two__bottom">
                    <div className="row">
                        {/* Start Blog Two Single*/}
                        <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="blog-two__single">
                                <div className="blog-two__single-content style2">
                                    <p>June 21 . 2023</p>
                                    <h3><Link href="#">Bring the tables win survival <br/>
                                            strategies</Link></h3>
                                    <div className="text-box">
                                        <p>Mestib remove the completed market
                                            reserche our abusiness high prouds
                                            the work hards business. It is a long established fact that a reader will be
                                            distracted by the readable </p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Blog Two Single*/}

                        {/* Start Blog Two Single*/}
                        <div className="col-xl-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                            <div className="blog-two__single">
                                <div className="blog-two__single-img">
                                    <img src="assets/images/blog/blog-v2-img1.jpg" alt="#"/>
                                    <img src="assets/images/blog/blog-v2-img1.jpg" alt="#"/>
                                </div>

                                <div className="blog-two__single-content">
                                    <p>June 21 . 2023</p>
                                    <h3><Link href="#">Bring the tables win survival <br/>
                                            strategies</Link></h3>
                                </div>
                            </div>
                        </div>
                        {/* End Blog Two Single*/}

                        {/* Start Blog Two Single*/}
                        <div className="col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog-two__single">
                                <div className="blog-two__single-img">
                                    <img src="assets/images/blog/blog-v2-img2.jpg" alt="#"/>
                                    <img src="assets/images/blog/blog-v2-img2.jpg" alt="#"/>
                                </div>

                                <div className="blog-two__single-content">
                                    <p>may 17 . 2023</p>
                                    <h3><Link href="#">The quality of life insurance in <br/>
                                            the company</Link></h3>
                                </div>
                            </div>
                        </div>
                        {/* End Blog Two Single*/}
                    </div>
                </div>
            </div>
        </section>
        {/* End Blog Two */}
       
        </>
    )
}
