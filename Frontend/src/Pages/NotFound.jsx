import React from 'react'
import {Link} from "react-router-dom"
import {HiArrowNarrowRight} from "react-icons/hi"

const NotFound = () => {
  return (
    <>
        <section className='notFound'>
          <div className="container">
            <img src="/notFound.svg" alt="notFound" />
            <h1>YOU ARE LOST !!!</h1>
            <p>We cant seem to find you the page you are looking for</p>
            <Link to={"/"}>Back to Home <span>
              <HiArrowNarrowRight/>
              </span></Link>
            </div>
            </section> 
    </>
  );
};

export default NotFound
