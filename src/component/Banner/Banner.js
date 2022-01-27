import React from 'react';
import "./Banner.css"


function Banner() {
    return (
        <div
            className="tam">
            <div className="yazilar">
                <h1 data-aos="fade-out">
                Sizə özəl bir məkan
            </h1>
            <h3 data-aos="fade-in">
                Azərbaycandakı hər kişiyə xitab edən bir  websayt
            </h3>
            </div>
            
        {/* <div className={classes.Container}>
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4"/>
            </video>
            
            <div className="melumat">
                <h1>Qalstuk baglamagi oyrenek</h1>
                <p>
                    Qalstuk her bir kisinin geyim terzinde zaman-zaman ve ya
                    gundelik istifade etdiyi lakin baglamagi
                    bacarmadigi cox vacib bir akksesuardir
                </p>
            </div>
            </div> */}

        </div>
    )
}

export default Banner
