import React from "react";
import "./Calculator.css";
import ResultComponent from "./ResultComponent";
import KeyPadComponent from "./KeyPadComponent";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      calculatorHistory: [],
      showHistory: false
    };
  }
  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "Clear") {
      this.clear();
    } else if (button === "Back") {
      this.backSpace();
    } else {
      this.setState(
        {
          result: this.state.result + button
        },
        () => {
          this.history();
        }
      );
    }
  };
  history = () => {
    const calculatorHistory = this.state.calculatorHistory.push(
      this.state.result
    );
    this.setState({
      calculatorHistory: this.state.calculatorHistory
    });
    console.log(this.state.calculatorHistory);
  };
  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else if (this.state.result === "") {
      checkResult = 0;
    } else {
      checkResult = this.state.result;
    }
    try {
      this.setState({
        result: (eval(checkResult) || "") + "" || "0"
      });
    } catch {
      alert("syntax error");
      this.setState({
        result: ""
      });
    }
  };
  clear = () => {
    this.setState({
      result: ""
    });
  };
  backSpace = () => {
    if (this.state.result != "") {
      this.setState({
        result: this.state.result.slice(0, -1)
      });
    }
  };
  showHideHistory = () => {
    this.setState({ showHistory: true });
  };
  clearHistory = () => {
    this.setState({ calculatorHistory: [] });
  };

  render() {
    console.log(this.state.result);
    return (
      <div>
        <div className="calculator-body">
          <p className="heading h3 font-weight-bold font-italic text-center">
            CALCULATOR
          </p>
          <ResultComponent
            answer={this.state.result}
            dynamicClear={this.clear}
          />
          <KeyPadComponent onClick={this.onClick} />
          <button
            className="showHistory btn btn-outline-primary"
            onClick={this.showHideHistory}
          >
            Show History
          </button>
          <button
            className="showHistory btn btn-outline-primary"
            onClick={this.clearHistory}
          >
            Clear history
          </button>
          <p className="h4 mt-3 font-italic font-weight-bold text-secondary">
            Calculations History
          </p>
          {this.state.showHistory &&
            this.state.calculatorHistory.map((item, i) => {
              return (
                <div>
                  <ul key={i}>
                    <li style={{ listStyleType: "none" }}>{item}</li>
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
