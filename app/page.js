import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Service from "@/components/sections/home1/Service"
import Testimonial from "@/components/sections/home1/Testimonial"
import Funfacts from "@/components/sections/home1/Funfacts"
import Team from "@/components/sections/home1/Team"
import Blog from "@/components/sections/home1/Blog"
import Brands from "@/components/sections/home1/Brands"
import Advantages from "@/components/sections/home1/Advantages"
import Gallery from "@/components/sections/home1/Gallery"
import Awards from "@/components/sections/home1/Awards"
import Slogan from "@/components/sections/home1/Slogan"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Brands />
                <About />
                <Advantages />
                <Funfacts />
                <Service />
                <Gallery />
                <Testimonial />
                <Awards />
                <Team />
                <Blog />
                <Slogan />
            </Layout>

        </>
    )
}