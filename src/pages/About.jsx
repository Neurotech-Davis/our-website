import React from "react";
import "../assets/styles/About.css";
import HeaderImage from "../assets/images/aboutheader20232024.jpeg";
import About1 from "../assets/images/aboutIcon1.png";
import About2 from "../assets/images/aboutIcon2.png";
import About3 from "../assets/images/aboutIcon3.png";
import About4 from "../assets/images/aboutIcon4.png";
import AboutImg from "../assets/images/aboutImg.png";
import BigBang from "../assets/images/bigbang.svg";
import Plasma from "../assets/images/plasma.png";
import BlackStone from "../assets/images/blackstone.png";
import LittleBang from "../assets/images/littlebang.png";
import CNTC from "../assets/images/bciImg1.png";
import NeurotechX from "../assets/images/bciImg2.png";

export default function About() {
  return (
    <div id="about-background">
      <div id="about-header" className="flex flex-col items-center ">
        <h1 className="text-6xl lg:text-7xl font-bold mb-10 mt-20">About Us</h1>

        <div
          id="about-header-card"
          className="mx-10 sm:w-auto sm:max-w-[500px] md:flex md:flex-row md:justify-center md:items-center md:max-w-[800px] lg:max-w-[1200px]"
        >
          <div id="about-header-card-text">
            <h1 className="text-4xl font-bold pb-4">Our Mission</h1>
            <p className="text-gray-500 pb-4 text-sm md:text-base lg:text-[18px] lg:max-w-[450px] ">
              Welcome to <span className="font-semibold">Neurotech@Davis </span>
              , a dynamic and innovative neurotechnology club dedicated to
              advancing the field of brain-computer interfaces (BCIs) and
              fostering the next generation of neurotech enthusiasts. At
              Neurotech@Davis, we are passionate about exploring the
              intersection of neuroscience and technology to create cutting-edge
              solutions that push the boundaries of what is possible.
            </p>
          </div>

          <img
            src={HeaderImage}
            className=" w-auto rounded-3xl h-auto mx-auto md:min-w-[350px] md:ml-4 lg:max-w-[500px]"
          />
        </div>
      </div>

      <h1 className="text-5xl font-bold mt-16 mb-7 text-center md:mt-24">
        What We Do
      </h1>
      <div
        id="what-sect"
        className="flex flex-col justify-center items-center md:flex-row md:gap-8 lg:gap-20"
      >
        <div
          id="what-sect-info"
          className="flex flex-col justify-center items-center"
        >
          <div className="what-card">
            <img src={About1} className="what-card-img" />

            <div>
              <h2 className="what-card-title">Building BCIs</h2>
              <p className="max-w-[250px] text-gray-700">
                Design and develop BCIs linking the brain to digital systems,
                from wearable devices to software
              </p>
            </div>
          </div>

          <div className="what-card">
            <img src={About2} className="what-card-img" />

            <div>
              <h2 className="what-card-title">Startup Innovation</h2>
              <p className="max-w-[250px] text-gray-700">
                Engage in neurotech startups, we offer a platform to develop
                ideas and create solutions.
              </p>
            </div>
          </div>

          <div className="what-card">
            <img src={About3} className="what-card-img" />

            <div>
              <h2 className="what-card-title">Publishing Knowledge</h2>
              <p className="max-w-[250px] text-gray-700">
                Publish articles to contribute to the global neurotech feild.
              </p>
            </div>
          </div>

          <div className="what-card">
            <img src={About4} className="what-card-img" />

            <div>
              <h2 className="what-card-title">Educational Outreach</h2>
              <p className="max-w-[250px] text-gray-700">
                Educate about neurotechnology in high schools and middle
                schools.
              </p>
            </div>
          </div>
        </div>

        <img
          src={AboutImg}
          className="h-auto max-w-[380px] lg:max-w-[500px]"
          alt="a grid of 3 photos of people posing in frount of posters"
        />
      </div>

      <h1 className="text-5xl font-bold mt-24 mb-20 text-center ">
        What We’ve Accomplished
      </h1>

      <h1 className="text-4xl  text-center mt-7">
        {" "}
        <span className="font-bold">$46,500</span> awarded for startup
        innovation
      </h1>

      {/*   Start up awards    */}
      <div
        id="cash-award-grid-container"
        className="flex items-center justify-center"
      >
        <div
          id="startup-sect"
          className="mt-10 flex  flex-col items-center justify-center gap-3  md:grid md:grid-cols-2 md:gap-4"
        >
          <div className="startup-card flex flex-row items-center justify-center gap-5">
            <div className="startup-card-p1 flex flex-col items-center justify-center gap-3">
              <h2 className="startup-card-cash -mt-3">$25k</h2>
              <img src={BigBang} className="-mt-4" />
            </div>

            <div className="startup-card-p2">
              <h2 className="text-xl ">
                <span className="font-bold text-4xl">1st Place</span> <br />
                2024 Big Bang! Business competition
              </h2>
            </div>
          </div>

          <div className="startup-card flex flex-row items-center justify-center gap-5">
            <div className="startup-card-p1 flex flex-col items-center justify-center gap-3">
              <h2 className="startup-card-cash ">$10k</h2>
              <img src={Plasma} className="mb-4" />
            </div>

            <div className="startup-card-p2">
              <h2 className="text-xl ">
                <span className="font-bold text-4xl">1st Place</span> <br />
                2024 Plasma UC Davis Demo Day
              </h2>
            </div>
          </div>

          <div className="startup-card flex flex-row items-center justify-center gap-5">
            <div className="startup-card-p1 flex flex-col items-center justify-center gap-3">
              <h2 className="startup-card-cash ">$10.5k</h2>
              <img src={BlackStone} className="mb-5" />
            </div>

            <div className="startup-card-p2">
              <h2 className="text-xl ">
                <span className="font-bold text-4xl">1st Place</span> <br />
                2023 Blackstone Launchpad
              </h2>
            </div>
          </div>

          <div className="startup-card flex flex-row items-center justify-center gap-5">
            <div className="startup-card-p1 flex flex-col items-center justify-center gap-3">
              <h2 className="startup-card-cash -mb-4">$1k</h2>
              <img src={LittleBang} className="" />
            </div>

            <div className="startup-card-p2">
              <h2 className="text-xl ">
                <span className="font-bold text-4xl">Top Award</span> <br />
                2024 Little Bang Poster and Pitch
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/*    END Start up awards   */}

      {/*   BCI awards    */}

      <div id="bci-awards" className="mt-20 ">
        <h1 className="text-4xl text-center">
          {" "}
          <span className="font-bold">Over 30</span> BCI Projects Built{" "}
        </h1>

        <div
          id="bci-award-card-container"
          className=" mt-10 gap-5 flex flex-col justify-center items-center md:flex-row "
        >
          <div className="bci-award flex flex-row items-center justify-center">
            <h2 className="text-xl">
              <span className="font-bold text-2xl">2nd Place</span> <br />
              2024 California Neurotech Conference
            </h2>
            <img src={CNTC} className="bci-img" />
          </div>

          <div className="bci-award flex flex-row items-center justify-center">
            <h2 className="text-[18px]">
              <span className="font-bold text-[28px]">3rd Place</span> <br />
              2023 International NeurotechX student club BCI
            </h2>
            <img src={NeurotechX} className="bci-img" />
          </div>
        </div>
      </div>

      {/*  END OF BCI awards    */}

      {/*  Medium article section    */}

      <div id="medium-articles" className="mt-20">
        <h1 className="text-4xl text-center">
          {" "}
          <span className="font-bold">100+</span> Medium Articles Published{" "}
        </h1>

        <div
          id="medium-article-cards-container"
          className="mt-10 flex flex-col justify-center items-center gap-4 lg:flex-row "
        >
          <a
            href="https://medium.com/neurotech-davis/music-therapy-alzheimers-7b1fe5fe031b"
            target="_blank"
          >
            <div className="medium-art-card">
              <h2 className="font-bold text-xl">Music Therapy & Alzheimer's</h2>
              <p className="text-sm w-full text-gray-700">
                {" "}
                Explore the prevalance of music therapy to treat neurological
                conditions...
              </p>
            </div>
          </a>

          <a
            href="https://medium.com/neurotech-davis/neurons-mp3-d229c83d0d42"
            target="_blank"
          >
            <div className="medium-art-card">
              <h2 className="font-bold text-xl">Neurons.mp3</h2>
              <p className="text-sm w-full text-gray-700">
                {" "}
                What goes on in the brain when we listen to music, and what can
                we learn...
              </p>
            </div>
          </a>

          <a
            href="https://medium.com/neurotech-davis/beyond-the-brain-cognition-across-disciplines-8c8d63473588"
            target="_blank"
          >
            <div className="medium-art-card">
              <h2 className="font-bold text-xl">
                {" "}
                Cognition Across Disiplines
              </h2>
              <p className="text-sm w-full text-gray-700">
                {" "}
                Scholars from various cognitive discipines came together to
                teach learn and discuss...
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* END OF  Medium article section    */}
    </div>
  );
}
