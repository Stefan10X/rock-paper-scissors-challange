import "./App.css";
import logo from "./images/logo.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";
import Game from "./components/Game";

import { useState, useEffect } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState(0);
  const [computer, setComputer] = useState(null);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(false);

  const updateScore = () => {
    setScore(score + 1);
  };

  const selectPick = (picked) => {
    setPick(picked);
  };

  const computerPick = (picked) => {
    setComputer(picked);
  };

  const updateMessage = (msj) => {
    setMessage(msj);
  };

  const showResult = (click) => {
    setClicked(click);
  };

  useEffect(() => {
    if (pick == 1) {
      setImage(paper);
    }
    if (pick == 2) {
      setImage(scissors);
    }
    if (pick == 3) {
      setImage(rock);
    }
  }, [pick]);

  useEffect(() => {
    if (computer == 1) {
      setImage2(paper);
    }
    if (computer == 2) {
      setImage2(scissors);
    }
    if (computer == 3) {
      setImage2(rock);
    }
  }, [computer]);

  console.log(clicked);

  return (
    <div>
      {/* SCORE */}

      <div
        className="flex items-center justify-between w-[360px] lg:w-[700px] h-40 mt-8 lg:mt-14 p-4 lg:p-8 mx-auto 
       bg-blue-600 text-white border-2 border-gray-400 rounded-lg"
      >
        <img className="w-32 lg:w-44" src={logo}></img>
        <div
          className="flex flex-col  justify-center items-center
         w-28 lg:w-[150px] h-28 lg:h-[120px] font-bold bg-white rounded-lg "
        >
          <p
            className="text-blue-600
           text-base lg:text-lg mt-4"
          >
            SCORE
          </p>
          <p className="text-gray-500 text-4xl lg:text-5xl">{score}</p>
        </div>
      </div>

      {/* GAME */}

      {!clicked && (
        <Game
          updateScore={updateScore}
          selectPick={selectPick}
          computerPick={computerPick}
          updateMessage={updateMessage}
          showResult={showResult}
        />
      )}

      {/* RESULT */}

      {clicked && (
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-2 lg:gap-6 lg:w-[700px] h-72 mx-auto mt-20 lg:mt-36">
          <div className="flex flex-col justify-between items-center lg:w-56 lg:h-60 gap-6">
            <p className="uppercase font-bold text-white text-lg">You Picked</p>
            <div className="flex items-center bg-white p-6 lg:p-8 border-[18px] border-green-500 rounded-full">
              <img className="w-14 lg:w-20" src={image} alt="You Picked"></img>
            </div>
          </div>
          <div
            className="order-3 lg:order-none flex flex-col items-center gap-8 lg:gap-4 col-span-full lg:col-auto
          mt-8 lg:mt-0"
          >
            <p className="uppercase font-bold text-white text-4xl lg:text-2xl">
              {message}
            </p>
            <button
              onClick={() => setClicked(!clicked)}
              className="w-60 lg:w-44 h-12 lg:h-10 text-xl lg:text-lg bg-white hover:text-red-500 text-gray-500 font-bold py-2 px-4 rounded"
            >
              Play Again
            </button>
          </div>
          <div className="flex flex-col justify-between items-center lg:w-56 lg:h-60 gap-6">
            <p className="uppercase font-bold text-white text-lg">
              The House Picked
            </p>
            <div className="flex justify-center bg-white p-6 lg:p-8 border-[18px] border-red-500 rounded-full">
              <img
                className="w-14 lg:w-20"
                src={image2}
                alt="The House Picked"
              ></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
