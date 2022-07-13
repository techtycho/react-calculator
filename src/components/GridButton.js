import React from "react";

function GridButton({ text, type, special, actions, operator }) {
  function onClick() {
    switch (type) {
      case "num":
        actions.addNumber(text);
        break;
      case "dot":
        actions.addNumber(text);
        actions.dot();
        break;
      case "ac":
        actions.clearNumber();
        break;
      case "del":
        actions.deleteNumber();
        break;
      case "op":
        actions.operation(operator);
        break;
      case "calc":
        actions.calc();
        break;
      default:
        throw new Error("Illegal Button Type");
    }
  }

  function addSpecialClasses() {
    return special.toString().replace(/,/g, " ");
  }

  return (
    <>
      <button onClick={onClick} className={`btn ${addSpecialClasses()}`}>
        {text}
      </button>
    </>
  );
}

export default GridButton;
