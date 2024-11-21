
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog Details">
            {/* Start Blog Details */}
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    {/* Start Blog Details Content*/}
                    <div className="col-xl-8">
                        <div className="blog-details__content">
                            <div className="blog-details__content-img1">
                                <img src="assets/images/blog/blog-details-img1.jpg" alt="#"/>
                                <div className="date-box">
                                    20 Sep
                                </div>
                            </div>

                            <div className="blog-details__content-text1">
                                <ul className="meta-box">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-offer"></span>
                                        </div>
                                        <div className="text">
                                            <p><Link href="#">Apartment</Link></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <span className="icon-profile-user"></span>
                                        </div>
                                        <div className="text">
                                            <p><Link href="#">by Admin</Link></p>
                                        </div>
                                    </li>
                                </ul>
                                <h2><Link href="#">Bring the tables win-win survival strategies</Link></h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but majority have
                                    suffered alteration in some form, by injected humour, or randomised words which
                                    don't look even slightly believable. If you are going to use a passage of Lorem
                                    Ipsum. There are many variations of passages of Lorem Ipsum available, but majority
                                    have suffered alteration in some form, by injected humour, or randomised words which
                                    don't look even slightly believable. If you are going to use a passage of Lorem
                                    Ipsum. Suspendisse ultricies vestibulum vehicula. Proin laoreet porttitor lacus.
                                    Duis auctor vel ex eu elementum. Fusce eu volutpat felis. Proin sed eros tincidunt,
                                    sagittis sapien eu, porta diam. Aenean finibus scelerisque nulla non facilisis.
                                    Fusce vel orci sed quam gravida condimentum. Aliquam condimentum, massa vel mollis
                                    volutpat, erat sem pharetra quam, ac mattis arcu elit non massa. Nam mollis nunc
                                    velit, vel varius arcu fringilla tristique. Cras elit nunc, sagittis eu bibendum eu,
                                    ultrices placerat sem. Praesent vitae metus dolor. Nulla a erat et orci mattis
                                    auctor.</p>
                                <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam
                                    quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod
                                    nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
                                    rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed
                                    vitae leo vitae nisl pellentesque semper.</p>
                            </div>

                            <div className="blog-details__content-text2">
                                <div className="blog-details__content-text2-tag">
                                    <div className="title-box">
                                        <h3>Tags</h3>
                                    </div>

                                    <ul>
                                        <li><Link href="#">Dairy</Link></li>
                                        <li><Link href="#">Food</Link></li>
                                    </ul>
                                </div>

                                <div className="social-links">
                                    <Link href="#"><span className="icon-twitter"></span></Link>
                                    <Link href="#"><span className="icon-facebook"></span></Link>
                                    <Link href="#"><span className="icon-pinterest"></span></Link>
                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>

                            <div className="comment-one">
                                <h2 className="comment-one__title">2 Comments</h2>

                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/blog-details-img2.jpg" alt="#"/>
                                    </div>

                                    <div className="comment-one__content">
                                        <div className="comment-one__content-top">
                                            <div className="name">
                                                <h3>Kevin martin</h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="#">Reply</Link>
                                            </div>
                                        </div>

                                        <p>It is a long established fact that a reader will be distracted by the
                                            readable content of a page when looking at its layout. The point of using
                                            Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                    </div>
                                </div>

                                <div className="comment-one__single style2">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/blog-details-img3.jpg" alt="#"/>
                                    </div>

                                    <div className="comment-one__content">
                                        <div className="comment-one__content-top">
                                            <div className="name">
                                                <h3>Sarah albert</h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="#">Reply</Link>
                                            </div>
                                        </div>

                                        <p>It is a long established fact that a reader will be distracted by the
                                            readable content of a page when looking at its layout. The point of using
                                            Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comment-form">
                                <h3 className="comment-form__title">Leave a Comment</h3>
                                <form className="comment-one__form contact-form-validated"
                                    >
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Full Name*" name="name"/>
                                            </div>
                                        </div>

                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Email Address*" name="email"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <textarea name="message" placeholder="Your Comments *"></textarea>
                                            </div>
                                            <div className="comment-form__btn-box">
                                                <button type="submit" className="comment-form__btn thm-btn"><span
                                                        className="txt">Submit Comment</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* End Blog Details Content*/}


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
        {/* End Blog Details */}

            </Layout>
        </>
    )
}