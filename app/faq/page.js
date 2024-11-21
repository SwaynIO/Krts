'use client'
import Link from "next/link"
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Our Faq">
                

                {/* Start Faq Page */}
                <section className="faq-page">
                    <div className="container">
                        <div className="service-details__faq">
                            <div className="service-details__faq-inner">
                                <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>How can we help your business ?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>There are many variations of passages the majority have suffered
                                                    alteration in some fo injected humour, or randomised words
                                                    believable type and scrambled it to make a type spec book. It
                                                    has survived not only five centuries.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>What are the advantages of Krts.?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>It is a long established fact that a reader will be
                                                    distracted by
                                                    the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters Residential Cleaning </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>How It Consultancy experts work ?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>It is a long established fact that a reader will be
                                                    distracted by
                                                    the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters Residential Cleaning </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>Let's find an office near you ?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>It is a long established fact that a reader will be
                                                    distracted by
                                                    the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters Residential Cleaning </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                            <h4>It is a long established fact ?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>It is a long established fact that a reader will be
                                                    distracted by
                                                    the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters Residential Cleaning </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                                        <div className="accrodion-title">
                                            <h4>There are many variations of passages ?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>It is a long established fact that a reader will be
                                                    distracted by
                                                    the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters Residential Cleaning </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={isActive.key == 7 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(7)}>
                                        <div className="accrodion-title">
                                            <h4>The standard chunk of Lorem Ipsum used ?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>It is a long established fact that a reader will be
                                                    distracted by
                                                    the readable content of a page when looking at its layout.
                                                    The point of using Lorem Ipsum is that it has a more-or-less
                                                    normal distribution of letters Residential Cleaning </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Faq Page */}

                {/* Start Slogan One */}
                <section className="slogan-one">
                    <div className="auto-container">
                        <div className="slogan-one__inner">
                            <div className="container">
                                <div className="slogan-one__content-box">
                                    <div className="text-box">
                                        <h2>Get In Touch</h2>
                                    </div>

                                    <div className="btn-box">
                                        <Link className="thm-btn" href="contact">
                                            <span className="txt">Send A Message</span>
                                            <span className="bdrl"></span>
                                            <span className="bdrr"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Slogan One */}

            </Layout>
        </>
    )
}