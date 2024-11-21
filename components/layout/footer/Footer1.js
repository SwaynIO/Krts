import Link from "next/link"

export default function Footer1() {
    return (
        <>
           
        <footer className="footer-one">
            {/* Start Footer*/}
            <div className="footer">
                <div className="container">
                    <div className="footer-one__inner">
                        <div className="logo-box text-center">
                            <Link href="/"><img src="assets/images/logo.svg" alt="#"/></Link>
                        </div>

                        <div className="footer-one__contact">
                            <div className="footer-one__contact-bdr"
                                style={{ backgroundImage: ' url(assets/images/footer/footer-v1-img1.png)' }} ></div>
                            <ul>
                                <li>
                                    <div className="icon-box">
                                        <span className="icon-ringing"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Call anytime</p>
                                        <h3><Link href="tel:98210009630">+ 9821 (000) - 9630</Link></h3>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-message"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Send email</p>
                                        <h3><Link href="mailto:yourmail@email.com">krts@imvu.fr</Link></h3>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-placeholder"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Visit Office</p>
                                        <h3>27 Division St, New York</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-one__menu">
                            <ul>
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">Pages</Link></li>
                                <li><Link href="#">Services</Link></li>
                                <li><Link href="#">Home</Link></li>
                            </ul>
                        </div>

                        <div className="footer-one__social-links">
                            <ul>
                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                <li><Link href="#"><span className="icon-google-plus-logo"></span></Link></li>
                                <li><Link href="#"><span className="icon-pinterest"></span></Link></li>
                                <li><Link href="#"><span className="icon-wifi"></span></Link></li>
                            </ul>
                            <div className="border-box"></div>
                        </div>

                        <div className="footer-one__copyright">
                            <p>Copyright © 2024 all rights reserved.</p>
                        </div>

                        
                    </div>
                </div>
            </div>
            {/* End Footer*/}
        </footer>
        
        </>
    )
}
