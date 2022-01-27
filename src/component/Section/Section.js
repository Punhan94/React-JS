import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Section.css"

function Section(props) {
    let Stil = props.blog.find(a => a.category === "Stil");
    let Idman = props.blog.find(a => a.category === "İdman");
    let Sagliq = props.blog.find(a => a.category === "Sağlıq");
    return (
        <div>
            
            <div className="section">
                <div className="singlehead">
                    <Link to="/bloglar">
                    <h1 className="h1">{Stil.category}
                    </h1>
                </Link> 
                    <div className="xett">
                    </div>
                </div>
                <Link to={"/etraflimelumat/"+ Stil.category + "/" + Stil.id}>
                    <h2>{Stil.basliq}</h2>
                <img data-aos="flip-right" className="sectionimg" src={Stil.sekil} alt="" />
                    <p data-aos="fade-up">{Stil.etrafli}</p>
                </Link>
            </div>
            <div className="section">
                <div className="singlehead">
                    <div  className="xett">
                    </div>
                    <Link to="/bloglar">
                    <h1 style={{color:"red"}} className="h1">{Idman.category}
                    </h1>
                </Link> 
                </div>
                <Link to={"/etraflimelumat/"+ Idman.category+ "/" + Idman.id}>
                    <h2 >{Idman.basliq}</h2>
                <img data-aos="flip-right" className="sectionimg" src={Idman.sekil} alt="" />
                    <p data-aos="fade-up">{Idman.etrafli}</p>
                </Link>
            </div>
            <div className="section">
                <div className="singlehead">
                    <Link to="/bloglar">
                    <h1 style={{color:"green"}} className="h1">{Sagliq.category}
                    </h1>
                </Link> 
                    <div className="xett">
                    </div>
                </div>
                <Link to={"/etraflimelumat/"+ Sagliq.category + "/" + Sagliq.id}>
                    <h2>{Sagliq.basliq}</h2>
                <img data-aos="flip-right" className="sectionimg" src={Sagliq.sekil} alt="" />
                    <p data-aos="fade-up">{Sagliq.etrafli}</p>
                </Link>
            </div>
                
        </div>
    )
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps) (Section);
