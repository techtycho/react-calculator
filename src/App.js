import React, { useState } from "react";
import { buttons } from "./buttons";
import GridButton from "./components/GridButton";
import Output from "./components/Output";
import { Operators } from "./operators";

function App() {
  const [number, setNumber] = useState("");
  const [fnumber, setFNumber] = useState("");
  const [lnumber, setLNumber] = useState("");
  const [decimal, setDecimal] = useState(false);
  const [operator, setOperator] = useState();

  const actions = {
    addNumber: (newNum) => setNumber(number + newNum),
    clearNumber: () => {
      setOperator(null);
      setNumber("");
      setFNumber("");
      setLNumber("");
    },
    deleteNumber: () => setNumber(number.slice(0, -1)),
    dot: () => {
      if (!number) {
        setNumber("0.");
      }

      setDecimal(true);
    },
    operation: (operator) => {
      setFNumber(fnumber ? calculate() : number);
      setLNumber("");
      setNumber("");
      setOperator(operator);
    },
    calc: () => {
      setLNumber(number);
      setNumber("");
    },
  };

  function calculate() {
    let result;
    let _fnumber;
    let _lnumber;

    if (decimal) {
      _fnumber = Number.parseFloat(fnumber);
      _lnumber = Number.parseFloat(lnumber);
    } else {
      _fnumber = Number.parseInt(fnumber);
      _lnumber = Number.parseInt(lnumber);
    }

    switch (operator) {
      case Operators.ADD:
        result = _fnumber + _lnumber;
        result.toString();
        return result;
      case Operators.SUBTRACT:
        result = _fnumber - _lnumber;
        result.toString();
        return result;
      case Operators.MULTIPLY:
        result = _fnumber * _lnumber;
        result.toString();
        return result;
      case Operators.DIVIDE:
        result = _fnumber / _lnumber;
        result.toString();
        return result;
      default:
        throw new Error("Invalid Operator");
    }
  }

  function renderNumber() {
    return number ? number : lnumber ? calculate() : "0";
  }

  return (
    <div className="container">
      <div className="wrapper">
        <Output text={renderNumber()} />
        <div className="grid">
          {buttons.map((btn, index) => (
            <GridButton
              key={index}
              text={btn.text}
              type={btn.type}
              special={btn.special}
              operator={btn.operator}
              actions={actions}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
