import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we need is food</p>
                </div>
                <p className="mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aspernatur unde laudantium repudiandae excepturi voluptas at omnis consequatur illo dolore fugiat nesciunt natus fugit nemo vel enim nobis, tempore ipsum repellendus molestiae sed sequi! Praesentium reprehenderit expedita porro sed a iusto labore nesciunt vero, autem voluptatem deleniti fugit natus officiis?</p>
                <Link to={"/"}>Explore Menu <span>
                    <HiOutlineArrowNarrowRight/>
                    </span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
      
    </section>
  )
}

export default About
