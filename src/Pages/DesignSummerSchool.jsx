//priyanshu
import React from "react";
import '../styles/DesignSummerSchool.css'
import linkedinIcon from '../assets/linkedin.png'
import instagramIcon from '../assets/instagram.png'
import facebookIcon from '../assets/facebook.png'


function DesignSummerSchool() {
    return (
        <div class="page-container">
                <div class="containerr-1">
                    <h1 class="head-1">
                        Unlock<br /> Your<br /> Potential
                    </h1>
                    <h4 class="p-1">From: dd/mm/yyyy <br /> <br /> To: dd/mm/yyyy</h4>
                    <button class="button-1">
                        Register
                    </button>
                </div>
            <div class="container-2">
                <img src="https://iiitd.ac.in/dss/public/notes-2-1400w.png" alt="Design Elements" class="design-elements" />
                <h1 class="content-2">
                    Learn.<br /> Connect.<br /> Grow.
                </h1>
            </div>
            <div class="containerr-3">
                <h2>About the Summer School</h2>
                <div class="content-3">
                    <div class="about">
                        Explore Design at our 5-day Summer School at IIIT Delhi for both professionals and students.
                        <br />Step up to the design disciplines of the modern world such as XR (AR, VR & MR), Game Design and Human-Centered AI.
                        <br />Explore our carefully curated 3 tracks covering modern day skills and tools in the domains of Human-Centered AI, Game and Animation Design, and XR consisting of MR, VR, and AR.
                    </div>
                    <div class="contact-us">
                        <p>Contact Us at: xxxx@iiitd.ac.in</p>
                        <div class="icons">
                            <a href="">
                                <img class="icon_link" src={linkedinIcon} alt="LinkedIn" />
                            </a>
                            <a href="">
                                <img class="icon_link" src={instagramIcon} alt="Instagram" />
                            </a>
                            <a href="">
                                <img class="icon_link" src={facebookIcon} alt="Facebook" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-4">
                <h2>Schedule</h2>
                <div class="content-4">
                    Extensive Schedule planned across the summer program.
                    <br />
                    <button class="button-2">
                        Download the Schedule
                    </button>
                </div>
            </div>
            <div class="container-5">
                <h2>Our Partners</h2>
                <div class="content-5">
                    <img src="https://iiitd.ac.in/dss/public/hcdlogo-200h.png" alt="Partner 1" class="partner-logo" />
                    <img src="https://iiitd.ac.in/dss/public/artboard%205%20copy1-200h.png" alt="Partner 2" class="partner-logo" />
                </div>
            </div>
        </div>


    );
}

export default DesignSummerSchool;