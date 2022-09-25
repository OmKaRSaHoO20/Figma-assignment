import React from 'react';
import Design from "./Designing.jpeg";
import Develop from "./Development.jpeg";
import Product from "./Production.jpeg";
import Query from "./Query.jpeg";
import profile from "./Profile.jpeg";
import Fleximg from "./Biggest1.jpeg";
import One from "./One.jpeg";
import Two from "./Two.jpeg";
import Three from "./Three.jpeg";
import Four from "./Four.jpeg";
import Five from "./Five.jpeg";
import './Biggest.css';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';

export default function Biggest(){
    return <>
            <div className='big'>
                <p id='line'></p>
                <h3>
                    Let’s See <br/>how it works
                </h3>
                <div className='carr'>
                    <img src={Design} alt='img'/>
                    <img src={Develop} alt='img'/>
                    <img src={Product} alt='img'/>
                    <img src={Query} alt='img'/>
                </div>
                <div className='div-flex'>
                    <h2>What you get besides <br/>the above things</h2>
                    <div className='sub-div-flex'>
                        <i class="fa-solid fa-check"></i>
                        <p>24/7 Support</p>
                    </div>
                    <img src={Fleximg} alt='1'/>
                </div>

                <div className='carousel'>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                          }}
                >
                <SwiperSlide>
                `       <div className='Carousel-main'>
                            <img src={Five} alt="Img"/>
                            <div className='Carousel-main-content'>
                                <h3> About Infenito, <br/> insights about us</h3>
                                <p id='line'></p>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                `       <div className='Carousel-main'>
                            <img src={Four} alt="Img"/>
                            <div className='Carousel-main-content'>
                                <h3>See our latest blogs <br/> about stacks</h3>
                                <p id='line'></p>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                `       <div className='Carousel-main'>
                            <img src={Three} alt="Img"/>
                            <div className='Carousel-main-content'>
                                <h3>See our latest project <br/> on healthcare</h3>
                                <p id='line'></p>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className='Carousel-main'>
                            <img src={One} alt="Img"/>
                            <div className='Carousel-main-content'>
                                <h3>Unlock new metaverse <br/> in the design system</h3>
                                <p id='line'></p>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className='Carousel-main'>
                            <img src={Two} alt="Img"/>
                            <div className='Carousel-main-content'>
                                <h3>Get insights of some <br/> websites</h3>
                                <p id='line'></p>
                            </div>
                        </div>
                </SwiperSlide>
            </Swiper>
                </div>

                <div className='Testimonial'>
                    <div>
                        <h3 style={{ textAlign: "center", paddingTop : "20%" }}>What our Client’s <br/> say about us ?</h3>
                    </div>
                    <div className='chat'>
                        <p>Look no further. These guys are great to work with! VERY GOOD
                        COMPANY & GREAT TEAM SPIRIT! , strongly recommend them.</p>

                        <p>DAVID <br/>
                        Jr. Manager at SUBROS, India
                        </p>
                    </div>
                    <div className='profile'>
                        <img src={profile} alt='img'/>
                    </div>

                </div>
            </div>
    </>
}