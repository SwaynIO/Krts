import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>


            <ul className="main-menu__list">
                <li className="dropdown current">
                    <Link href="/">Home</Link>
                    <ul>
                        <li>
                            <Link href="/">Home One</Link>
                        </li>
                        <li><Link href="index-2">Home Two</Link></li>
                    </ul>
                </li>

                <li>
                    <Link href="about">About</Link>
                </li>

                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                        <li><Link href="services">Services</Link></li>
                        <li>
                            <Link href="agriculture-services">Agriculture Services</Link>
                        </li>
                        <li>
                            <Link href="graphic-design">Graphic Design</Link>
                        </li>
                        <li>
                            <Link href="delivery-services">Delivery Services</Link>
                        </li>
                        <li>
                            <Link href="farming-products">Farming Products</Link>
                        </li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="portfolio">Portfolio</Link></li>
                        <li><Link href="portfolio-carousel">Portfolio Carousel</Link></li>
                        <li>
                            <Link href="portfolio-details">Portfolio Details</Link>
                        </li>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-carousel">Team Carousel</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li><Link href="testimonial">Testimonial</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-carousel">Blog Carousel</Link></li>
                        <li><Link href="blog-list">Blog List</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li>

                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
