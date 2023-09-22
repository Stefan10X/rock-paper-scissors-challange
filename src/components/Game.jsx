/* eslint-disable react/prop-types */
import triangle from "../images/bg-triangle.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";

const Game = ({
  updateScore,
  selectPick,
  computerPick,
  updateMessage,
  showResult,
}) => {
  const calculateScore = (pick) => {
    const computer = Math.floor(Math.random() * 3) + 1;
    computerPick(computer);

    if (pick == computer) {
      updateMessage("draw");
    }

    if (pick == 1 && computer == 2) {
      updateMessage("You Lose");
    }
    if (pick == 1 && computer == 3) {
      updateScore();
      updateMessage("You Won!");
    }
    if (pick == 2 && computer == 1) {
      updateScore();
      updateMessage("You Won!");
    }
    if (pick == 2 && computer == 3) {
      updateMessage("You Lose");
    }
    if (pick == 3 && computer == 1) {
      updateMessage("You Lose");
    }
    if (pick == 3 && computer == 2) {
      updateScore();
      updateMessage("You Won!");
    }
  };

  return (
    <div className="flex justify-center  mx-auto mt-36 lg:mt-44">
      <img className="absolute" src={triangle}></img>
      <div
        onClick={() => {
          calculateScore(1);
          selectPick(1);
          showResult(true);
        }}
        className="flex justify-center bg-white z-10 p-6 border-[14px] border-indigo-400 rounded-full
       relative bottom-12 left-4 lg:left-0 cursor-pointer"
      >
        <img className="w-16" src={paper}></img>
      </div>

      <div
        onClick={() => {
          calculateScore(3);
          selectPick(3);
          showResult(true);
        }}
        className="flex justify-center bg-white z-10 p-6 border-[14px] border-red-400 rounded-full
       relative top-36 lg:top-40 cursor-pointer"
      >
        <img className="w-16" src={rock}></img>
      </div>
      <div
        onClick={() => {
          calculateScore(2);
          selectPick(2);
          showResult(true);
        }}
        className="flex justify-center  bg-white z-10 p-6 border-[14px] border-yellow-400 rounded-full
       relative bottom-12 right-4 lg:right-0 cursor-pointer"
      >
        <img className="w-16" src={scissors}></img>
      </div>
    </div>
  );
};

export default Game;
