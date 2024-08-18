import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const input1Handle = (e) => {
    setInput1(e.target.value);
  };

  const input2Handle = (e) => {
    setInput2(e.target.value);
  };

  const calculateRelation = (e) => {
    e.preventDefault(); // Prevent form submission which refreshes the page

    let string1 = input1;
    let string2 = input2;

    if (!input1 || !input2) {
      setResult("Please Enter valid input");
      return;
    }

    for (let char of string1) {
      if (string2.includes(char)) {
        string1 = string1.replace(char, "");
        string2 = string2.replace(char, "");
      }
    }
    const length = (string1.length + string2.length) % 6;

    let relation = "";
    switch (length) {
      case 1:
        relation = "Friends";
        break;
      case 2:
        relation = "Love";
        break;
      case 3:
        relation = "Affection";
        break;
      case 4:
        relation = "Marriage";
        break;
      case 5:
        relation = "Enemy";
        break;
      case 0:
        relation = "Siblings";
        break;
      default:
        relation = "Please Enter valid input";
        break;
    }
    setResult(relation);
  };

  const clear = () => {
    setInput1("");
    setInput2("");
    setResult("");
  };

  return (
    <div id="main">
      <form onSubmit={calculateRelation}>
        <input
          data-testid="input1"
          name="name1"
          value={input1}
          onChange={input1Handle}
          placeholder="Enter first name"
        />
        <input
          data-testid="input2"
          name="name2"
          value={input2}
          onChange={input2Handle}
          placeholder="Enter second name"
        />
        <button
          data-testid="calculate_relationship"
          type="submit"
        >
          Calculate Relationship Future
        </button>
        <button
          data-testid="clear"
          type="button"
          onClick={clear}
        >
          Clear
        </button>
      </form>
      <h3 data-testid="answer">
        {result}
      </h3>
    </div>
  );
};

export default App;