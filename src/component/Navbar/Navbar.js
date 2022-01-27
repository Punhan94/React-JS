import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import {connect} from "react-redux"


function Navbar(props) {
    const modalADD = () => {
        props.dispatch({ type: "MODAL", value: true })
    };
    const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    };
    window.addEventListener('resize',showButton)
    return (
            <div className="nav">
            <div>
                <Link id="linkonlymen" to="/" >
                    OnlyMen
                </Link>
                    
            </div>
            <div className="menu-icon" onClick={handleClick}> 
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul  className={click? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <NavLink exact to='/' className="nav-links" onClick={closeMobileMenu}>
                        Əsas Səhifə
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/bloglar' className="nav-links" onClick={closeMobileMenu}>
                        Bloglar
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' className="nav-links" onClick={closeMobileMenu}>
                        Əlaqə
                    </NavLink>
                </li>
                <li className="nav-item">
                    <div className="nav-links">
                        {props.isSubmitted?
                            <button
                            onClick={() => {
                                modalADD();
                                closeMobileMenu()
                            }
                            }className="buttonNavbar"> Əlavə et
                     </button> : <Link onClick={closeMobileMenu} id="register"
                                to="/register&login"> Qeydiyyat</Link>}
                    </div>
                    
                </li>
                
            </ul>
                </div>

    )
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps) (Navbar);
