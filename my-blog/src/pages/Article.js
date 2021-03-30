import React, {Component} from 'react';
import './css/HomeStyle.css';

class Article extends React.Component {
    render(){
        return(
            <div>
       <header id="header" class="shadow bg-light">
           <nav class="container navbar">
               <a href="/index.html" class="nav-brand text-dark">
                    Bloggern
                </a>

                {/* <!-- toggle button --> */}
                <button class="toggle-button">
                    <span><i class="fas fa-bars"></i></span>
                </button>

                {/* <!-- collapse on toggle button click --> */}
                <div class="collapse">
                    <ul class="navbar-nav">
                        <a href="index.html" class="nav-link">Home</a>
                        <a href="Profile/profile.html" class="nav-link">Profile</a>
                        <a href="article.html" class="nav-link">Pages</a>
                        <a href="#" class="nav-link">Categories</a>
                    </ul>
                </div>

                  {/* <!-- collapse on toggle button click --> */}
                  <div class="collapse">
                      <ul class="navbar-nav">
                            <div class="search-box">
                                <a href="#" class="nav-link"><i class="fas fa-search"></i></a>
                            </div>
                            <a href="#" class="nav-link"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="nav-link"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="nav-link"><i class="fab fa-instagram"></i></a>
                      </ul>
                  </div>
           </nav>
       </header>
    

     {/* <!-- Main Site --> */}
       <main id="site-main">

            {/* <!-- Post Content --> */}
                <section class="container">
                    <article id="post">
                        {/* <!-- article heading --> */}
                        <div class="headings text-center">
                            <div class="category">
                                <a href="#" class="nav-link">Travel</a>
                            </div>

                            <div class="title">
                                <h2 class="text-title text-dark display-1">Looking for some feedback for this rejected track technology</h2>
                            </div>

                            <div class="meta">
                                <a href="#" class="link display-2 text-secondary px-1">
                                    <i class="fas fa-user text-primary"></i> John Stephens
                                </a>
                                <a href="#" class="link display-2 text-secondary px-1">
                                    <i class="fas fa-clock text-primary"></i>  Clock Wed 02, 2019
                                </a>
                                <a href="#" class="link display-2 text-secondary px-1">
                                    <i class="fas fa-comments text-primary"></i> 12
                                </a>
                            </div>

                        </div>

                        {/* <!-- thumbnail  --> */}
                        <div class="thumbnail mt-3">
                            <img src="./assets/img1.jpg" class="thumbnail" alt=""/>
                        </div>

                        {/* <!-- content --> */}
                        <div class="content text-dark display-2 secondary-title mt-3">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque 
                                blanditiis adipisci aliquam dolore consequuntur fuga sed consectetur quas perspiciatis?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque 
                                blanditiis adipisci aliquam dolore consequuntur fuga sed consectetur quas perspiciatis?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque 
                                blanditiis adipisci aliquam dolore consequuntur fuga sed consectetur quas perspiciatis?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque 
                                blanditiis adipisci aliquam dolore consequuntur fuga sed consectetur quas perspiciatis?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque 
                                blanditiis adipisci aliquam dolore consequuntur fuga sed consectetur quas perspiciatis?
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque 
                                blanditiis adipisci aliquam dolore consequuntur fuga sed consectetur quas perspiciatis?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque 
                                blanditiis adipisci aliquam dolore consequuntur fuga sed consectetur quas perspiciatis?
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque 
                                blanditiis adipisci aliquam dolore consequuntur fuga sed consectetur quas perspiciatis?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque 
                                blanditiis adipisci aliquam dolore consequuntur fuga sed consectetur quas perspiciatis?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque 
                                blanditiis adipisci aliquam dolore consequuntur fuga sed consectetur quas perspiciatis?
                            </p>
                        </div>
                    </article>

                    {/* <!-- post footer --> */}
                    <div class="post-footer mb-3">
                        <div class="post-tags d-flex flex-wrap justify-content-center">
                            <a href="#" class="nav-link btn bg-light">Travel</a>
                            <a href="#" class="nav-link btn bg-light">Food</a>
                            <a href="#" class="nav-link btn bg-light">Lifestyle</a>
                            <a href="#" class="nav-link btn bg-light">Techonogy</a>
                            <a href="#" class="nav-link btn bg-light">Fashion</a>
                        </div>

                        <div class="post-author text-center">
                            <div class="author-avatar">
                                <img src="./assets/face/face1.jpg" class="rounded" alt=""/>
                            </div>

                            <div class="author-info py-2">
                                <h3 class="text-dark">John Stephens</h3>

                                <p class="text-secondary secondary-title">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Recusandae, sequi! In harum laborum ipsa voluptatibus doloremque nulla, tempore aut veritatis.
                                </p>

                                <div class="post-tags d-flex flex-wrap justify-content-center">
                                    <a href="#" class="nav-link"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" class="nav-link"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="nav-link"><i class="fab fa-instagram"></i></a>
                                    <a href="#" class="nav-link"><i class="fab fa-dribbble"></i></a>
                                </div>
                            </div>

                        </div>

                        {/* <!-- post related --> */}
                        <div class="post-realted py-2">
                            <div class="row justify-content-center">
                                <div class="prev">
                                    <div class="py-2">
                                        <a href="#" class="display-2 text-dark">
                                            <i class="fas fa-chevron-left"></i> 
                                            Previous Post
                                        </a>
                                    </div>
                                    <article class="article text-center">
                                        <div class="d-flex">
                                            <a href="#">
                                                <img src="./assets/img9.jpg" class="object-fit" alt=""/>
                                            </a>
                                            <div class="cart-body px-1">
                                                <div class="category">
                                                    <a href="#" class="link text-primary text-secondary">Fashion</a>
                                                </div>
                                                <a href="#" class="text-title display-1 text-dark">
                                                    Looking for some feedback for this rejected track
                                                    technology
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="next text-right">
                                    <div class="py-2">
                                        <a href="#" class="display-2 text-dark">
                                            Next Post 
                                            <i class="fas fa-chevron-right"></i> 
                                        </a>
                                    </div>
                                    <article class="article text-center">
                                        <div class="d-flex">
                                            <div class="cart-body px-1">
                                                <div class="category">
                                                    <a href="#" class="link text-primary text-secondary">Fashion</a>
                                                </div>
                                                <a href="#" class="text-title display-1 text-dark">
                                                    Looking for some feedback for this rejected track
                                                    technology
                                                </a>
                                            </div>
                                            <a href="#">
                                                <img src="./assets/img8.jpg" class="object-fit" alt=""/>
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <div class="post-comments py-2">
                            <h3 class="text-center display-1 secondary-title py-2">5 Comments</h3>
    
                            <div class="comment-details">
                                <div class="comment-item py-2">
                                    <div class="d-flex">
                                        <div class="avatar px-2">
                                            <img src="./assets/face/face1.jpg" class="rounded" alt=""/>
                                        </div>
                                        <div class="comment-content">
                                            <h5 class="display-2 m-0">Brandon Kelley</h5>
                                            <p class="title-secondary text-dark">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua. Quis ipsum suspendisse ultrices gravida lacus vel facilisis.
                                            </p>
                                        </div>
                                    </div>
                                     {/* <!-- comment reply --> */}
                                     <div class="reply py-2">
                                        <div class="d-flex">
                                            <div class="avatar px-2">
                                                <img src="./assets/face/face2.jpg" class="rounded" alt=""/>
                                            </div>
                                            <div class="comment-content">
                                                <h5 class="display-2 m-0">Brandon Kelley</h5>
                                                <p class="title-secondary text-dark">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua. Quis ipsum suspendisse ultrices gravida lacus vel facilisis.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                                <div class="comment-item py-2">
                                    <div class="d-flex">
                                        <div class="avatar px-2">
                                            <img src="./assets/face/face3.jpg" class="rounded" alt=""/>
                                        </div>
                                        <div class="comment-content">
                                            <h5 class="display-2 m-0">Brandon Kelley</h5>
                                            <p class="title-secondary text-dark">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua. Quis ipsum suspendisse ultrices gravida lacus vel facilisis.
                                            </p>
    
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <h3 class="text-center display-1 secondary-title py-2">Leave Comment</h3>
    
                            <div class="comment-form">
                                <div class="d-flex justify-content-between flex-wrap">
                                    <input type="text" class="form-control " placeholder="Name"/>
                                    <input type="email" class="form-control" placeholder="Email"/>
                                    <input type="text" class="form-control" placeholder="Website"/>
                                </div>
                                <textarea class="form-control mt-3" placeholder="Message" rows="10"></textarea>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary display-2 text-light mt-2">Submit</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- .post footer --> */}

                </section>
            {/* <!-- .Post Content -->

            <!-- Swiper slider --> */}
                <section class="slider">
                    <div class="container">

                        {/* <!-- Slider main container --> */}
                            <div class="swiper-container">
                                {/* <!-- Additional required wrapper --> */}
                                <div class="swiper-wrapper">
                                    {/* <!-- Slides --> */}
                                    <div class="swiper-slide">
                                        <a href="#">
                                            <img src="./assets/slider/img1.jpg" class="img-fluid" alt=""/>
                                        </a>
                                    </div>
                                     {/* <!-- Slides -->
                                      <!-- Slides --> */}
                                    <div class="swiper-slide">
                                        <a href="#">
                                            <img src="./assets/slider/img2.jpg" class="img-fluid" alt=""/>
                                        </a>
                                    </div>
                                     {/* <!-- Slides -->
                                      <!-- Slides --> */}
                                    <div class="swiper-slide">
                                        <a href="#">
                                            <img src="./assets/slider/img3.jpg" class="img-fluid" alt=""/>
                                        </a>
                                    </div>
                                        {/* <!-- Slides -->
                                             <!-- Slides --> */}
                                    <div class="swiper-slide">
                                        <a href="#">
                                            <img src="./assets/slider/img4.jpg" class="img-fluid" alt=""/>
                                        </a>
                                    </div>
                                        {/* <!-- Slides --> */}
                                        <div class="swiper-slide">
                                            <a href="#">
                                                <img src="./assets/slider/img5.jpg" class="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                            {/* <!-- Slides --> */}
                                            <div class="swiper-slide">
                                                <a href="#">
                                                    <img src="./assets/slider/img6.jpg" class="img-fluid" alt=""/>
                                                </a>
                                            </div>
                                                {/* <!-- Slides --> */}
                                                <div class="swiper-slide">
                                                    <a href="#">
                                                        <img src="./assets/slider/img7.jpg" class="img-fluid" alt=""/>
                                                    </a>
                                                </div>
                                                    {/* <!-- Slides --> */}

                                </div>
                            </div>

                    </div>
                </section>
             {/* <!-- .Swiper slider --> */}

       </main>
    {/* <!-- .Main Site -->

    <!-- footer --> */}
       <footer id="footer">
           <div class="container">
               <div class="row mb-3">
                   <div class="col-3">
                       <h2 class="footer-title secondary-title">About Us</h2>

                       <div class="secondary-title text-secondary">
                            <p class="mt-2 ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Deserunt quis voluptate alias illum modi tenetur, iste voluptatem illo. Accusantium, corrupti!
                            </p>
                            
                            <address>
                                <i class="fas fa-map-marker-alt text-primary"></i> 
                                5 South Main Street Los Angeles, ZZ-96110 USA
                            </address>

                            <div class="phone">
                                <i class="fas fa-mobile text-primary"></i> 
                                125-896-485
                            </div>

                            <div class="email">
                                <i class="fas fa-envelope text-primary"></i> 
                                dailysupport@gmail.com
                            </div>

                       </div>
                   </div>
                   <div class="col-3">
                       <h2 class="footer-title secondary-title">Feature Post</h2>

                       <div class="feature-post">
                           <div class="flex-item">
                               <article class="article">
                                   <div class="d-flex">
                                       <a href="#">
                                           <img src="./assets/img9.jpg" class="object-fit px-1" alt=""/>
                                           <div class="px-1">
                                               <a href="#" class="text-title display-2 text-dark">
                                                Looking for some feedback for this rejected track
                                                technology
                                               </a>
                                               <p class="secondary-title text-secondary display-3">
                                                    <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021 </span>
                                               </p>
                                           </div>
                                       </a>
                                   </div>
                               </article>
                           </div>
                           <div class="flex-item">
                            <article class="article">
                                <div class="d-flex">
                                    <a href="#">
                                        <img src="./assets/img1.jpg" class="object-fit px-1" alt=""/>
                                        <div class="px-1">
                                            <a href="#" class="text-title display-2 text-dark">
                                             Looking for some feedback for this rejected track
                                             technology
                                            </a>
                                            <p class="secondary-title text-secondary display-3">
                                                 <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021 </span>
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </article>
                             </div>
                             <div class="flex-item">
                                <article class="article">
                                    <div class="d-flex">
                                        <a href="#">
                                            <img src="./assets/img2.jpg" class="object-fit px-1" alt=""/>
                                            <div class="px-1">
                                                <a href="#" class="text-title display-2 text-dark">
                                                 Looking for some feedback for this rejected track
                                                 technology
                                                </a>
                                                <p class="secondary-title text-secondary display-3">
                                                     <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021 </span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                            </div>
                       </div>
                   </div>
                   <div class="col-3">
                        <h2 class="footer-title secondary-title">Tags</h2>

                        <div class="tags">
                            <div class="d-flex flex-wrap">
                                <a href="#" class="nav-link btn bg-light">Travel</a>
                                <a href="#" class="nav-link btn bg-light">Food</a>
                                <a href="#" class="nav-link btn bg-light">Lifestyle</a>
                                <a href="#" class="nav-link btn bg-light">Techonogy</a>
                                <a href="#" class="nav-link btn bg-light">Fashion</a>
                            </div>
                        </div>

                        <h2 class="footer-title secondary-title mt-2">Social</h2>

                        <div class="tags social">
                            <div class="d-flex flex-wrap">
                                <a href="#" class="nav-link btn bg-light"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="nav-link btn bg-light"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="nav-link btn bg-light"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="nav-link btn bg-light"><i class="fab fa-dribbble"></i></a>
                            </div>
                        </div>

                   </div>
               </div>
           </div>
       </footer>
    </div>
        )
    }
}
export default Article