import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="about">About</Link>
                </li>

                <li>
                    <Link href="portfolio">Portfolio</Link>
                </li>

                <li>
                    <Link href="faq">Faq</Link>
                </li>

                <li>
                    <Link href="blog">Book</Link>
                </li>

                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
