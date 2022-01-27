import React from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./CardDetails.css";

function CardDetails(props) {
  const { category } = useParams();
  const { id } = useParams();
  const c = props.blog.find((a) => a.id === Number(id));
  return (
    <div>
      <div className="single">
        <div>
          <h1 className="basligimiz">{c.basliq}</h1>
        </div>

        <figure className="pic-wrap" data-category={c.category}>
          <img src={c.sekil} alt="Blog" className="item-img" />
        </figure>
        <p className="etraflihisse">{c.etrafli}</p>
      </div>
      <div className="bloglar">
        {props.blog.map((a, b) => {
          if (a.category === category) {
            return (
              <Link key={b} to={"/etraflimelumat/" + a.category + "/" + a.id}>
                <div data-aos="fade-up" className="blogg">
                  <div className="ilk">
                    <figure
                      className="cards__item__pic-wrap"
                      data-category={a.category}
                    >
                      <img
                        src={a.sekil}
                        alt="Blog"
                        className="cards__item__img"
                      />
                    </figure>
                  </div>
                  <div className="iki">
                    <h3>{a.basliq}</h3>
                    <p>{a.etrafli}</p>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(CardDetails);
