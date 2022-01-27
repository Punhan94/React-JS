import React from 'react';
import "./home.css";
import "../../App.css"
import { connect } from "react-redux";
import Banner from "../../component/Banner/Banner";
import Section from '../../component/Section/Section';
import Video from '../../component/Video/Video';


function Home() {
    
    return (
        <div>
            <Banner />
            <Section />
            <Video/>
        </div>
    )
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps) (Home);
