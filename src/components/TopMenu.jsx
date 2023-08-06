import React from 'react'
import logo from "../images/logo.svg"
import "./comp.css"

const TopMenu = () => {

    const menuOpen = () => {
        let menu = document.querySelector(".slide-in-menu");
        menu.classList.toggle("slide-in-menu-close");
        let lowerLine = document.querySelector("#l-line");
        lowerLine.classList.toggle("l-line-anime");
    }

  return (
    <header>
        <img
          src={logo}
          alt=""
          onclick={window.scrollTo({ top: 0, behavior: "smooth" })}
          className='logo'
        />
        <div class="menu-icon" onMouseOver={menuOpen}>
          <svg
            id="menu"
            viewBox="0 0 95 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="2"
              x2="78"
              y2="2"
              stroke="#10001B"
              stroke-width="4"
              stroke-linecap="round"
              id="u-line"
            />
            <line
              x1="17"
              y1="17"
              x2="93"
              y2="17"
              stroke="#10001B"
              stroke-width="4"
              stroke-linecap="round"
              id="l-line"
            />
          </svg>
        </div>
        <ul className='slide-in-menu slide-in-menu-close'>
          <li class="font">
            <a onclick="window.scrollTo({top:100.54, behavior: 'smooth'});">
              About
            </a>
          </li>
          <li class="font">
            <a onclick="window.scrollTo({top:4045.54, behavior: 'smooth'});">
              Projects
            </a>
          </li>
          <li class="font">
            <a onclick="window.scrollTo({top:7634.54, behavior: 'smooth'});">
              Contact
            </a>
          </li>
        </ul>
      </header>
  )
}

export default TopMenu