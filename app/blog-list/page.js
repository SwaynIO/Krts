'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog List">
        {/* Start Blog List */}
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    {/* Start Blog List Content*/}
                    <div className="col-xl-8">
                        <div className="blog-list__content">
                            {/* Start Blog List Single*/}
                            <div className="blog-list__single">
                                <div className="blog-list__single-img">
                                    <img src="assets/images/blog/blog-list-img1.jpg" alt=""/>
                                    <div className="date-box">10<br/>oct</div>
                                </div>

                                <div className="blog-list__single-content">
                                    <ul className="meta-info">
                                        <li><span className="icon-profile-user"></span><Link href="#">Admin</Link></li>
                                        <li><span className="icon-comment"></span><Link href="#">2 Comments</Link>
                                        </li>
                                    </ul>
                                    <h2><Link href="#">Bring the tables win survival strategies</Link></h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English.</p>
                                    <div className="btn-box">
                                        <Link href="#">Read More <span className="icon-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog List Single*/}

                            {/* Start Blog List Single*/}
                            <div className="blog-list__single">
                                <div className="blog-list__single-img">
                                    <img src="assets/images/blog/blog-list-img2.jpg" alt=""/>
                                    <div className="date-box">10<br/>oct</div>
                                </div>

                                <div className="blog-list__single-content">
                                    <ul className="meta-info">
                                        <li><span className="icon-profile-user"></span><Link href="#">Admin</Link></li>
                                        <li><span className="icon-comment"></span><Link href="#">2 Comments</Link>
                                        </li>
                                    </ul>
                                    <h2><Link href="#">Basic Rule Of Running Web Business</Link></h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English.</p>
                                    <div className="btn-box">
                                        <Link href="#">Read More <span className="icon-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog List Single*/}

                            {/* Start Blog List Single*/}
                            <div className="blog-list__single">
                                <div className="blog-list__single-img">
                                    <img src="assets/images/blog/blog-list-img3.jpg" alt=""/>
                                    <div className="date-box">10<br/>oct</div>
                                </div>

                                <div className="blog-list__single-content">
                                    <ul className="meta-info">
                                        <li><span className="icon-profile-user"></span><Link href="#">Admin</Link></li>
                                        <li><span className="icon-comment"></span><Link href="#">2 Comments</Link>
                                        </li>
                                    </ul>
                                    <h2><Link href="#">Leverage Frameworks To Provide A Robust</Link></h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English.</p>
                                    <div className="btn-box">
                                        <Link href="#">Read More <span className="icon-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog List Single*/}
                            <ul className="styled-pagination clearfix">
                                <li><Link href="#">1</Link></li>
                                <li><Link href="#">2</Link></li>
                                <li><Link href="#">3</Link></li>
                                <li className="arrow next active"><Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Blog List Content*/}


                    {/* Start Sidebar*/}
                    <div className="col-xl-4">
                        <div className="sidebar">
                            {/* Start Sidebar Single*/}
                            <div className="sidebar__single sidebar__search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search"/>
                                    <button type="submit"><i className="icon-search-interface-symbol"></i></button>
                                </form>
                            </div>
                            {/* End Sidebar Single*/}

                            {/* Start Sidebar Single*/}
                            <div className="sidebar__single sidebar__post">
                                <div className="title-box">
                                    <h3>Latest posts</h3>
                                </div>
                                <ul className="sidebar__post-list">
                                    <li className="active">
                                        <div className="img-box">
                                            <img src="assets/images/blog/blog-details-img4.jpg" alt=""/>
                                        </div>

                                        <div className="content-box">
                                            <p><span className="icon-comment"></span> 02</p>
                                            <h4><Link href="#">A social media marketing <br/>
                                                    checklist</Link></h4>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/blog/blog-details-img5.jpg" alt=""/>
                                        </div>

                                        <div className="content-box">
                                            <p><span className="icon-comment"></span> 02</p>
                                            <h4><Link href="#">A social media marketing <br/>
                                                    checklist</Link></h4>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/blog/blog-details-img6.jpg" alt=""/>
                                        </div>

                                        <div className="content-box">
                                            <p><span className="icon-comment"></span> 02</p>
                                            <h4><Link href="#">A social media marketing <br/>
                                                    checklist</Link></h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* End Sidebar Single*/}

                            {/* Start Sidebar Single*/}
                            <div className="sidebar__single sidebar__categories">
                                <div className="title-box">
                                    <h3>Categories</h3>
                                </div>
                                <ul className="sidebar__categories-list">
                                    <li><Link className="active" href="#">Creative Design <span
                                                className="icon-arrow-right"></span></Link></li>
                                    <li><Link href="#">Digital Marketing <span className="icon-arrow-right"></span></Link></li>
                                    <li><Link href="#">Graphic Design <span className="icon-arrow-right"></span></Link></li>
                                    <li><Link href="#">App Development <span className="icon-arrow-right"></span></Link></li>
                                    <li><Link href="#">Content Writting <span className="icon-arrow-right"></span></Link></li>
                                    <li><Link href="#">Web Development <span className="icon-arrow-right"></span></Link></li>
                                </ul>
                            </div>
                            {/* End Sidebar Single*/}

                            {/* Start Sidebar Single*/}
                            <div className="sidebar__single sidebar__tag">
                                <div className="title-box">
                                    <h3>Tags</h3>
                                </div>

                                <ul className="sidebar__tag-list clearfix">
                                    <li><Link href="#">App Parallax</Link></li>
                                    <li><Link href="#">Creative</Link></li>
                                    <li><Link href="#">Experience</Link></li>
                                    <li><Link href="#">Innovative</Link></li>
                                    <li><Link href="#">Business</Link></li>
                                    <li><Link href="#">Design</Link></li>
                                    <li><Link href="#">Innovative</Link></li>
                                </ul>

                            </div>
                            {/* End Sidebar Single*/}

                            {/* Start Sidebar Single*/}
                            <div className="sidebar__single sidebar__comments">
                                <div className="title-box">
                                    <h3>Recent comments</h3>
                                </div>

                                <ul className="sidebar__comments-list clearfix">
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-comment"></span>
                                        </div>

                                        <div className="title">
                                            <Link href="#">A wordpress commenter on <br/>
                                                launch new mobile app</Link>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-comment"></span>
                                        </div>

                                        <div className="title">
                                            <Link href="#">John Doe on template: <br/>
                                                comments</Link>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-comment"></span>
                                        </div>

                                        <div className="title">
                                            <Link href="#">A wordpress commenter on <br/>
                                                launch new mobile app</Link>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-comment"></span>
                                        </div>

                                        <div className="title">
                                            <Link href="#">John Doe on template: <br/>
                                                comments</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* End Sidebar Single*/}
                        </div>
                    </div>
                    {/* End Sidebar*/}
                </div>
            </div>
        </section>
        {/* End Blog List*/}

        </Layout>
        </>
    )
}