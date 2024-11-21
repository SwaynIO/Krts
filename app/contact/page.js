
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact">
        {/* Start Contact Page*/}
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    {/* Start Contact Page Map*/}
                    <div className="col-xl-5">
                        <div className="contact-page-google-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                className="contact-page-google-map__one"></iframe>
                        </div>
                    </div>
                    {/* End Contact Page Map*/}

                    {/* Start Contact One Form*/}
                    <div className="col-xl-7">
                        <div className="contact-one__form">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <p className="tg-element-title">contact</p>
                                    <div className="border-box"></div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Join Us To Get It Free <br/>
                                    Consultations
                                </h2>
                            </div>

                            <form id="contact-form" className="default-form2 contact-form-validated"
                                >
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="name" placeholder="NAME *" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="email" name="email" placeholder="EMAIL *" required=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" placeholder="PHONE *" name="phone"/>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" placeholder="SUBJECT *" name="Subject"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="input-box">
                                            <textarea name="message" placeholder="WRITE YOUR MESSAGE *"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-one__form-btn">
                                            <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                <span className="txt">Book Now</span>
                                                <span className="bdrl"></span>
                                                <span className="bdrr"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* End Contact One Form*/}
                </div>
            </div>
        </section>
        {/* End Contact Page*/}

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