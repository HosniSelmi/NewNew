import  "../App.css"
import React from 'react'

export const Teams = ()=>{
    return (
        <section className="teams" id="teams">
        <div className="max-width">
          <h2 className="title">My teams</h2>
          <div className="carousel owl-carousel">
            <div className="card">
              <div className="box">
                <img src="images/profile-1.jpeg" alt />
                <div className="text">Someone name</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/profile-2.jpeg" alt />
                <div className="text">Someone name</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/profile-3.jpeg" alt />
                <div className="text">Someone name</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/profile-4.jpeg" alt />
                <div className="text">Someone name</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/profile-5.jpeg" alt />
                <div className="text">Someone name</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}