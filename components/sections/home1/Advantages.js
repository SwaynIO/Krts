'use client'
import Link from "next/link"
export default function Advantages() {
    return (
        <>

            {/* Start Advantages One */}
            <section className="advantages-one">
                <div className="container">
                    <div className="advantages-one__inner">
                        <ul className="row">
                            <li className="col-xl-4">
                                <div className="advantages-one__single">
                                    <div className="advantages-one__single-img">
                                        <div className="btn-box">
                                            <Link href="#">Unveil the Secrets</Link>
                                            <div className="border-box"></div>
                                        </div>
                                        <div className="inner">
                                            <img src="assets/images/resources/advantages-v1-img1.jpg" alt="Mystical Path" />
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="col-xl-4">
                                <div className="advantages-one__single">
                                    <div className="advantages-one__single-content">
                                        <div className="tagline">
                                            <Link href="#">Advantages</Link>
                                            <div className="border-box"></div>
                                        </div>

                                        <div className="title-box">
                                            <h2>Crafting <br />
                                                <span>Elegance</span> <br />
                                                with Purpose</h2>
                                        </div>

                                        <p>Every detail is deliberate. Each element whispers a story of power, mystery, and undeniable allure. Step into a realm where design meets enigma.</p>

                                        <div className="btn-box">
                                            <Link className="thm-btn" href="contact">
                                                <span className="txt">Discover More</span>
                                                <span className="bdrl"></span>
                                                <span className="bdrr"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="col-xl-4">
                                <div className="advantages-one__single">
                                    <div className="advantages-one__single-img">
                                        <div className="btn-box">
                                            <Link href="#">Explore the Unknown</Link>
                                            <div className="border-box"></div>
                                        </div>
                                        <div className="inner">
                                            <img src="assets/images/resources/advantages-v1-img2.jpg" alt="Hidden Elegance" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* End Advantages One */}

        </>
    )
}
