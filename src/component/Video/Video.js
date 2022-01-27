import React,{useState} from 'react';
import { connect } from "react-redux";
import image from "./Screenshot.png";
import src1 from "./saqqal.mp4"
import "./Video.css";
import src2 from "./idman.mp4";
import src3 from "./yemek.mp4"
function Video() {
    const [openModal, setOpenModal] = useState(false);
    const clickVideo = () => {
      setOpenModal(true);
    };
    return (
        <div className="myvideos">
            <div data-aos="flip-down" className="row">
                <div className="col">
                    <div className="feature-img">
                        {!openModal ? <img id="videoimg" src={image} alt="" /> : null}
                        {!openModal?<i onClick={clickVideo} id="btn" className="far fa-play-circle"></i>:null}
                        {openModal?<video className="hiddenvideo" controls autoPlay>
                            <source type="video/mp4" src={src1} ></source>
                            </video>:null}
                    </div>
                    <div className="paragraph">
                        <h1 data-aos="zoom-in-up">Saqqalımızı özümüz formaya salaq.</h1>
                        <p data-aos="fade-up"> Saqqal saxlamaq çətindir,çünki ona qulluq etmək lazım gəlir.
                        Bu videoya baxdıqdan sonra artıq saqqalınızı özünüz
                        səliqəyə sala biləcək və hər zaman baxımlı qalacaqsınız.
                            Pandemiya zamanı bərbərlər bağlı olsa da artıq bu sizin üçün fərq
                            etməyəcək.
                        </p>
                    </div>
                </div>
            </div>

            <div data-aos="flip-left" className="videosection">
            <h2 className="videobasligi">İdmançılar üçün günlük yemək</h2>
                <video className="mp4" controls>
                <source type="video/mp4" src={src3} ></source>
            </video>
            </div>
            <div data-aos="flip-right" className="videosection">
            <h2 className="videobasligi">Sadəcə qantel ilə  edəcəyiniz 13 məşq</h2>
                <video className="mp4" controls>
                <source type="video/mp4" src={src2} ></source>
            </video>
        </div>
        </div>
        
    )
}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps) (Video);

