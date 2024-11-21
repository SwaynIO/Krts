'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")

    return (
        <>
            <div className="portfolio-three__filter-box">
                <ul className="portfolio-three__filter style1 post-filter list-unstyled clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}><span className="filter-text">All Mysteries</span></li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}><span className="filter-text">Elegance</span></li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}><span className="filter-text">Manipulation</span></li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}><span className="filter-text">Secrets</span></li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}><span className="filter-text">Intrigue</span></li>
                    <li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}><span className="filter-text">Illusions</span></li>
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-1.jpg" alt="Elegance in Shadows" />
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Elegance</p>
                            <h3 className="portfolio-three__title"><Link href="portfolio-details">Elegance in Shadows</Link></h3>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-3.jpg" alt="Master of Manipulation" />
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Manipulation</p>
                            <h3 className="portfolio-three__title"><Link href="portfolio-details">Master of Manipulation</Link></h3>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-5.jpg" alt="Whispers of Intrigue" />
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Intrigue</p>
                            <h3 className="portfolio-three__title"><Link href="portfolio-details">Whispers of Intrigue</Link></h3>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-5 cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-6.jpg" alt="Illusions in Control" />
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Illusions</p>
                            <h3 className="portfolio-three__title"><Link href="portfolio-details">Illusions in Control</Link></h3>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-3 cat-5 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-6.jpg" alt="Secrets of the Void" />
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Secrets</p>
                            <h3 className="portfolio-three__title"><Link href="portfolio-details">Secrets of the Void</Link></h3>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-1 cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-3.jpg" alt="Echoes of Elegance" />
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Elegance</p>
                            <h3 className="portfolio-three__title"><Link href="portfolio-details">Echoes of Elegance</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
