import React from "react";
import "./navbar.css";
import BdLogo from "../../images/logo 1.png";
import classes from  "../Ui/Button.module.css"

const Navbar =()=>{
    
    return (
        <nav id="navbar">
           
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo">
                            <img src={BdLogo} alt={BdLogo} />
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <ul>
                            <li id="tedris"><a href="#">Tədris</a>
                            
                            <ul id="tedris_item">
                                <li><a href="#">Motion Design</a></li>
                                <li><a href="#">UX&UI Design</a></li>
                                <li><a href="#">Grafik Design</a></li>
                                <li><a href="#">Fasion Design</a></li>
                            </ul>
                            
                            </li>
                            <li><a href="#">Seminar</a></li>
                            <li><a href="#">Karyera Mərkəzi</a></li>
                            <li><a href="#">Əlaqə</a></li>
                            <li><a href="#">Ru</a></li>
                            <li id="login"><a href="#">Daxil Ol</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <button className={classes.btn}>Login </button>

         
        </nav>
    )
}

export default Navbar