
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Brands from "@/components/sections/home2/Brands"
import Funfacts from "@/components/sections/home2/Funfacts"
import Services from "@/components/sections/home2/Services"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"
import Gallery from "@/components/sections/home2/Gallery"
import Pricing from "@/components/sections/home2/Pricing"
import Features from "@/components/sections/home2/Features"
import Slogan from "@/components/sections/home2/Slogan"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                
                <Funfacts />
                <Gallery />
                <Brands />
                <Testimonial />
                <Team />
                <Pricing />
                <Features />
                <Blog />
                <Slogan />
            </Layout>
        </>
    )
}