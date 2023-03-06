import React from 'react'
import "./header.css"
import BannerImg from "../../images/Group 48.png"
import HeadImg from "../../images/MotionHead.png"
const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-3">
                        <div className="left_side">
                            <a href="#">Главная / Графический дизайн</a>

                            <img src={BannerImg} alt={BannerImg} />
                            <h1>Графический дизайн</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe doloremque quae excepturi, voluptas quia tempore dolore! Ratione facere voluptates modi inventore, magni fugiat iusto provident assumenda mollitia velit esse rem a soluta illum fuga, eos, nihil eaque voluptatibus ab repellendus exercitationem voluptatem nulla! Expedita neque laborum, cumque qui commodi asperiores
                            </p>

                            <div className="btn_text">
                                <button>Free zone</button>
                                <p>До 15 апреля

                                    30% скидка</p>
                            </div>


                        </div>

                    </div>
                    <div className="col-lg-6 mt-3">
                        <div className="rigth_side">

                        <img src={HeadImg} alt={HeadImg} />
                        </div>
                    </div>
                </div>
            </div>



        </header>
    )
}

export default Header