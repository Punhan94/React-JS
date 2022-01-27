import React from 'react';
import { connect } from "react-redux";
import "./Card.css";
import { Link } from "react-router-dom";


function Cards(props) {
    
    return (
        <div className="bloglar">
            {props.blog.map((a, b) => {
                return (
                    a.filter.toLowerCase().includes(props.filtr.toLowerCase()) ?
                        <Link  key={b} to={"/etraflimelumat/"+a.category + "/" +a.id}>
                    <div data-aos="fade-up" className="blogg">
                        <div className="ilk">
                        <figure className="cards__item__pic-wrap" data-category={a.category}>
                        <img  src={a.sekil} alt="Blog" className="cards__item__img" />
                    </figure>
                        </div>
                        <div className="iki">
                                <h3>{a.basliq}</h3>
                                    <p>{a.etrafli}</p>
                        </div>
                            </div>
                            </Link>:null
                )
            })}
            
        </div>
    )
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps) (Cards);
