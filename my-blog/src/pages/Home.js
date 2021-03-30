import React, {Component} from 'react';
import './css/HomeStyle.css';

class Home extends React.Component {
    render(){
        return(
            <div>
                {/* <!-- Header --> */}
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
                            <a href="#" class="nav-link"><i class="fab fa-instagram"></i></a>
                      </ul>
                  </div>
           </nav>
       </header>
    {/* <!-- .Header -->

    <!-- Main Site --> */}
       <main id="site-main">

            {/* <!-- Blog Post Section --> */}
                <section id="posts">
                    <div class="container">
                        <div class="grid">
                            {/* <!-- article --> */}
                                <div class="grid-item">
                                    <article class="article">
                                        <div class="card">
                                            <div class="overflow-img">
                                                <a href="article.html">
                                                    <img src="./assets/img1.jpg" class="img-fluid" alt=""/>
                                                </a>
                                            </div>
                                            <div class="card-body text-center px-1">
                                                <a href="article.html" class="text-title display-1 text-dark">
                                                    Looking for some feedback for this rejected track
                                                    technology
                                                </a>
                                                <p class="secondary-title text-secondary display-3">
                                                    <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021</span>
                                                    <span><i class="far fa-comments text-primary"></i> 12</span>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            {/* <!-- .article -->
                            <!-- article --> */}
                                <div class="grid-item">
                                <article class="article">
                                    <div class="card">
                                        <div class="overflow-img">
                                            <a href="article.html">
                                                <img src="./assets/Home/img2.jpg" class="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                        <div class="card-body text-center px-1">
                                            <a href="article.html" class="text-title display-1 text-dark">
                                                Looking for some feedback for this rejected track
                                                technology
                                            </a>
                                            <p class="secondary-title text-secondary display-3">
                                                <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021</span>
                                                <span><i class="far fa-comments text-primary"></i> 12</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                </div>
                            {/* <!-- .article -->
                            <!-- article --> */}
                            <div class="grid-item">
                                <article class="article">
                                    <div class="card">
                                        <div class="overflow-img">
                                            <a href="article.html">
                                                <img src="./assets/Home/img3.jpg" class="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                        <div class="card-body text-center px-1">
                                            <a href="article.html" class="text-title display-1 text-dark">
                                                Looking for some feedback for this rejected track
                                                technology
                                            </a>
                                            <p class="secondary-title text-secondary display-3">
                                                <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021</span>
                                                <span><i class="far fa-comments text-primary"></i> 12</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                         {/* <!-- .article -->
                            <!-- article --> */}
                            <div class="grid-item">
                                <article class="article">
                                    <div class="card">
                                        <div class="overflow-img">
                                            <a href="article.html">
                                                <img src="./assets/Home/img4.jpg" class="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                        <div class="card-body text-center px-1">
                                            <a href="#" class="text-title display-1 text-dark">
                                                Looking for some feedback for this rejected track
                                                technology
                                            </a>
                                            <p class="secondary-title text-secondary display-3">
                                                <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021</span>
                                                <span><i class="far fa-comments text-primary"></i> 12</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                         {/* <!-- .article -->
                            <!-- article --> */}
                            <div class="grid-item">
                                <article class="article">
                                    <div class="card">
                                        <div class="overflow-img">
                                            <a href="article.html">
                                                <img src="./assets/Home/img5.jpg" class="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                        <div class="card-body text-center px-1">
                                            <a href="article.html" class="text-title display-1 text-dark">
                                                Looking for some feedback for this rejected track
                                                technology
                                            </a>
                                            <p class="secondary-title text-secondary display-3">
                                                <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021</span>
                                                <span><i class="far fa-comments text-primary"></i> 12</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                         {/* <!-- .article -->
                            <!-- article --> */}
                            <div class="grid-item">
                                <article class="article">
                                    <div class="card">
                                        <div class="overflow-img">
                                            <a href="article.html">
                                                <img src="./assets/Home/img6.jpg" class="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                        <div class="card-body text-center px-1">
                                            <a href="article.html" class="text-title display-1 text-dark">
                                                Looking for some feedback for this rejected track
                                                technology
                                            </a>
                                            <p class="secondary-title text-secondary display-3">
                                                <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021</span>
                                                <span><i class="far fa-comments text-primary"></i> 12</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                         {/* <!-- .article -->
                            <!-- article --> */}
                            <div class="grid-item">
                                <article class="article">
                                    <div class="card">
                                        <div class="overflow-img">
                                            <a href="article.html">
                                                <img src="./assets/Home/img7.jpg" class="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                        <div class="card-body text-center px-1">
                                            <a href="article.html" class="text-title display-1 text-dark">
                                                Looking for some feedback for this rejected track
                                                technology
                                            </a>
                                            <p class="secondary-title text-secondary display-3">
                                                <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021</span>
                                                <span><i class="far fa-comments text-primary"></i> 12</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                         {/* <!-- .article -->
                            <!-- article --> */}
                            <div class="grid-item">
                                <article class="article">
                                    <div class="card">
                                        <div class="overflow-img">
                                            <a href="article.html">
                                                <img src="./assets/Home/img8.jpg" class="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                        <div class="card-body text-center px-1">
                                            <a href="article.html" class="text-title display-1 text-dark">
                                                Looking for some feedback for this rejected track
                                                technology
                                            </a>
                                            <p class="secondary-title text-secondary display-3">
                                                <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021</span>
                                                <span><i class="far fa-comments text-primary"></i> 12</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                         {/* <!-- .article -->
                            <!-- article --> */}
                            <div class="grid-item">
                                <article class="article">
                                    <div class="card">
                                        <div class="overflow-img">
                                            <a href="article.html">
                                                <img src="./assets/Home/img9.jpg" class="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                        <div class="card-body text-center px-1">
                                            <a href="article.html" class="text-title display-1 text-dark">
                                                Looking for some feedback for this rejected track
                                                technology
                                            </a>
                                            <p class="secondary-title text-secondary display-3">
                                                <span><i class="far fa-clock text-primary"></i> Clock Wed 02, 2021</span>
                                                <span><i class="far fa-comments text-primary"></i> 12</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                         {/* <!-- .article --> */}
                        </div>

                        <div class="text-center">
                            <button class="btn btn-primary secondary-title text-light">Load More Posts...</button>
                        </div>
                    </div>
                </section>
            {/* <!-- .Blog Post Section -->

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
                                            <img src="./assets/Home/slider/img1.jpg" class="img-fluid" alt=""/>
                                        </a>
                                    </div>
                                     {/* <!-- Slides -->
                                      <!-- Slides --> */}
                                    <div class="swiper-slide">
                                        <a href="#">
                                            <img src="./assets/Home/slider/img2.jpg" class="img-fluid" alt=""/>
                                        </a>
                                    </div>
                                     {/* <!-- Slides -->
                                      <!-- Slides --> */}
                                    <div class="swiper-slide">
                                        <a href="#">
                                            <img src="./assets/Home/slider/img3.jpg" class="img-fluid" alt=""/>
                                        </a>
                                    </div>
                                        {/* <!-- Slides -->
                                             <!-- Slides --> */}
                                    <div class="swiper-slide">
                                        <a href="#">
                                            <img src="./assets/Home/slider/img4.jpg" class="img-fluid" alt=""/>
                                        </a>
                                    </div>
                                        {/* <!-- Slides --> */}
                                        <div class="swiper-slide">
                                            <a href="#">
                                                <img src="./assets/Home/slider/img5.jpg" class="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                            {/* <!-- Slides --> */}
                                            <div class="swiper-slide">
                                                <a href="#">
                                                    <img src="./assets/Home/slider/img6.jpg" class="img-fluid" alt=""/>
                                                </a>
                                            </div>
                                                {/* <!-- Slides --> */}
                                                <div class="swiper-slide">
                                                    <a href="#">
                                                        <img src="./assets/Home/slider/img7.jpg" class="img-fluid" alt=""/>
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
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et est sunt 
                            </address>

                            <div class="phone">
                                <i class="fas fa-mobile text-primary"></i> 
                                055-555-5555 
                            </div>

                            <div class="email">
                                <i class="fas fa-envelope text-primary"></i> 
                                bloggernsupport@gmail.com
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
                                           <img src="./assets/Home/img9.jpg" class="object-fit px-1" alt=""/>
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
                                        <img src="./assets/Home/img1.jpg" class="object-fit px-1" alt=""/>
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
                                            <img src="./assets/Home/img2.jpg" class="object-fit px-1" alt=""/>
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
    {/* <!-- .footer --></div> */}
            </div>
        )
    }
}
export default Home