import React from "react";

const AnimatedButton = ({ showInfo, setShowInfo }) => {
  const text = showInfo ? "Hide Info" : "Click to Know About Me";

  return (
    <button
      onClick={() => setShowInfo(!showInfo)}
      className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-300 hover:scale-105"
    >
      {text}
    </button>
  );
};

export default AnimatedButton;
