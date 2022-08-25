import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"



import "./styles.css"
import registers from "../img/register.svg"
import log from "../img/log.svg"


export const Sign = ({ location, history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [description, setDescription] = useState("")
  const [experience, setExperience] = useState("")
  const [nationality, setNationality] = useState("")
  const [speciality, setSpeciality] = useState("")
  const [image, setImage] = useState("")

  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)

  

  const [sign, setSign] = useState(false)
  return (
    <div className={sign ? "sign-up-mode container-sign" : "container-sign"}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form forms" >
            <h2 className="title">Tutor Sign in</h2>
           
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btns solid" />
            {/* <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </form>

          <form className="sign-up-form forms" >
            <h2 className="title">Tutor Sign up</h2>
            
           
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="first Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-phone"></i>
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Speciality"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            
            <input type="submit" className="btns" value="Sign up" />
            {/* <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Become an online English tutor and teach in one of the best
              e-learning site in the best circumstances
            </p>
            <button
              className="btns transparent"
              id="sign-up-btn"
              onClick={() => setSign(true)}
            >
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>if you already have an account just sign in and join us</p>
            <button
              className="btns transparent"
              id="sign-in-btn"
              onClick={() => setSign(false)}
            >
              Sign in
            </button>
          </div>
          <img src={registers} className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

//export default Sign
