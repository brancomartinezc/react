import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBook,
    faShop,
    faUserPen,
    faBars,
    faTimes,
  } from "@fortawesome/free-solid-svg-icons"

function SiteNavbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-3" href="#"><img src="https://i.ibb.co/PmswgyD/united3.png" alt="company logo" id="united-logo-navbar"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item mr-2">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav-item mr-2">
                            <a href="/properties">Properties</a>
                        </li>
                        <li className="nav-item">
                            <a href="/search">Search</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default SiteNavbar