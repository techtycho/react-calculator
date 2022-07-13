import { Operators } from "./operators";

export const buttons = [
  { text: "AC", type: "ac", special: ["ac"] },
  { text: "DEL", type: "del", special: [] },
  { text: "÷", type: "op", special: [], operator: Operators.DIVIDE },
  { text: "1", type: "num", special: [] },
  { text: "2", type: "num", special: [] },
  { text: "3", type: "num", special: [] },
  { text: "*", type: "op", special: [], operator: Operators.MULTIPLY },
  { text: "4", type: "num", special: [] },
  { text: "5", type: "num", special: [] },
  { text: "6", type: "num", special: [] },
  { text: "+", type: "op", special: [], operator: Operators.ADD },
  { text: "7", type: "num", special: [] },
  { text: "8", type: "num", special: [] },
  { text: "9", type: "num", special: [] },
  { text: "-", type: "op", special: [], operator: Operators.SUBTRACT },
  { text: ".", type: "dot", special: [] },
  { text: "0", type: "num", special: [] },
  { text: "=", type: "calc", special: ["calc"] },
];
