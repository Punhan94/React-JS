import "./App.css";
import React, { useEffect,useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./Pages/home/Home";
import Contact from "./Pages/Contact/Contact";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { connect } from "react-redux";
import CardDetails from "./Pages/CardDetails";
import Footer from "./component/Footer/Footer";
import Bloglar from "./Pages/Bloglar/Bloglar";
import Modal from "./component/Modal/Modal";
import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos";

import Form from "./Pages/Login/Form";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar isSubmitted={isSubmitted} />
        <Modal />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/register&login">
            <Form isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
          </Route>
          <Route path="/etraflimelumat/:category/:id">
            <CardDetails />
          </Route>
          <Route path="/bloglar">
            <Bloglar />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(App);
