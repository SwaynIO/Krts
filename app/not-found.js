import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Error404() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Lost in the Shadows">
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page__wrapper text-center">
                                    <div className="error-page__content">
                                        <h2>404</h2>
                                        <h3>It seems you've wandered too far...</h3>
                                        <p>The page you seek is hidden, or perhaps it never existed.</p>
                                        <div className="btn-box">
                                            <Link className="thm-btn" href="/">
                                                <span className="txt">Return to Elegance</span>
                                                <span className="bdrl"></span>
                                                <span className="bdrr"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
