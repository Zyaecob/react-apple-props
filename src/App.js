import { Component } from 'react';
import './App.css';
// import "./components/YouTube/Yt.css"

import "./Resources/css/styles.css";
import "./Resources/css/bootstrap.css";
import Header from "./components/Header"
import Alert from "./components/Alert"
import FirstSection from "./components/FirstSection"
import SecondSection from "./components/SecondSection"
import ThirdSection from "./components/ThirdSection"
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import SixSection from "./components/SixSection";
import Footer from './components/Footer';
import YT from './components/YouTube/YT';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Alert />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixSection />
        <YT />
        <Footer />

      </div>
    );
  }
}
export default App;
