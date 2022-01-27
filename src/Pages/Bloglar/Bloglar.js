import React, { useState } from 'react';
import Cards from "../../component/Cards/Cards"
import HeroSection from '../../component/Hero/HeroSection';
import "./Bloglar.css"

function Bloglar() {
    const handleClick = (a) => {
        setFiltr(a)
    }
    const [filtr,setFiltr]=useState(``)
    return (
        <div>
            <HeroSection/>
             <h1 className="kateqoriya">Kateqoriyalar</h1>
            <ul className="categories">
                <li data-aos="fade-right" onClick={() =>handleClick("")} className="hoverli" >
                    <div className="img" id="img01"></div>
                         <b className={filtr===""?"activ":null}>Hamısı</b> 
                    </li>
                <li data-aos="flip-left" onClick={() =>handleClick("Stil")} className="hoverli" >
                    <div className="img" id="img0">
                    </div>
                        <b className={filtr==="Stil"?"activ":null}>Stil</b> 
                    </li>
                <li data-aos="flip-left" onClick={() =>handleClick("Sagliq")} className="hoverli" >
                 <div className="img" id="img11"></div>
                         <b className={filtr==="Sagliq"?"activ":null}>Sağlıq</b> 
                    </li>
                <li data-aos="fade-left" onClick={() =>handleClick("İdman")} className="hoverli" >
                <div className="img" id="img22"></div>
                        <b className={filtr==="İdman"?"activ":null}>İdman</b> 
                    </li>
            </ul>
            <Cards filtr={filtr} setFiltr={setFiltr} />
        </div>
    )
}

export default Bloglar
