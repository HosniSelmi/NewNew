import  "../App.css"
import React from 'react'

export const HomeStart = ()=>{
    return (
        <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Prakash Shahi</div>
            <div className="text-3">And I'm a <span className="typing" /></div>
            <a href="#">Hire me</a>
          </div>
        </div>
      </section>
    )
}