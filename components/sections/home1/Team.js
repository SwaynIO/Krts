'use client'
import Link from "next/link"
export default function Team() {
    return (
        <>
            {/* Start Team One */}
            <section className="team-one">
                <div className="container">
                    {/* Start Team One Top */}
                    <div className="team-one__top">
                        <div className="container">
                            <div className="team-one__top-inner">
                                <div className="sec-title tg-heading-subheading animation-style2">
                                    <div className="sec-title__tagline">
                                        <p className="tg-element-title">Krts.' Inner Circle</p>
                                        <div className="border-box"></div>
                                    </div>
                                    <h2 className="sec-title__title tg-element-title">A Fellowship of Elegance <br /> and Mystery</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Team One Top */}

                    <div className="team-one__bottom">
                        <div className="container filter-layout masonary-layout">
                            <div className="row">
                                {/* Start Team One Single */}
                                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div className="team-one__single">
                                        <div className="team-one__single-img">
                                            <div className="inner">
                                                <img src="assets/images/team/divine.jpg" alt="Divine Darkness - The Eternal" />
                                                <div className="overlay-content">
                                                    <h2><Link href="https://fr.imvu.com/next/av/Diamant5/">Divine Darkness</Link></h2>
                                                    <p>🥀 The Darkest Rose</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Team One Single */}

                                {/* Start Team One Single */}
                                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                    <div className="team-one__single mt40">
                                        <div className="team-one__single-img">
                                            <div className="inner">
                                                <img src="assets/images/team/zia.jpg" alt="Zia - The Strategist" />
                                                <div className="overlay-content">
                                                    <h2><Link href="https://fr.imvu.com/next/av/Dash4578895/">Zia</Link></h2>
                                                    <p>🃏 The Strategist</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Team One Single */}

                                {/* Start Team One Single */}
                                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                    <div className="team-one__single mt80">
                                        <div className="team-one__single-img">
                                            <div className="inner">
                                                <img src="assets/images/team/maya.jpg" alt="Maya - The Bee" />
                                                <div className="overlay-content">
                                                    <h2><Link href="https://fr.imvu.com/next/av/ayayaymami/">Maya</Link></h2>
                                                    <p>🐝 The Bee</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Team One Single */}

                                {/* Start Team One Single */}
                                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.7s">
                                    <div className="team-one__single mt40">
                                        <div className="team-one__single-img">
                                            <div className="inner">
                                                <img src="assets/images/team/mareva.jpg" alt="Mareva - The Incantress" />
                                                <div className="overlay-content">
                                                    <h2><Link href="https://fr.imvu.com/next/av/maerava23/">Mareva</Link></h2>
                                                    <p>🧚‍♀️The Incantress</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Team One Single */}

                                {/* Start Team One Single */}
                                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.9s">
                                    <div className="team-one__single mt80">
                                        <div className="team-one__single-img">
                                            <div className="inner">
                                                <img src="assets/images/team/gwada.jpg" alt="Gwada - The Uncle" />
                                                <div className="overlay-content">
                                                    <h2><Link href="https://fr.imvu.com/next/av/flogwadaboys/">Gwada</Link></h2>
                                                    <p>👨‍🦳The Uncle</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Team One Single */}

                                {/* Start Team One Single */}
                                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.9s">
                                    <div className="team-one__single mt80">
                                        <div className="team-one__single-img">
                                            <div className="inner">
                                                <img src="assets/images/team/bess.jpg" alt="Bess - The Thinker" />
                                                <div className="overlay-content">
                                                    <h2><Link href="https://fr.imvu.com/next/av/Shiiinn/">Bess</Link></h2>
                                                    <p>🧙‍♂️ The Thinker</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Team One Single */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Team One */}
        </>
    )
}
