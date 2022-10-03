import React from "react";
export default class ResultComponent extends React.Component {
  render() {
    let { answer, dynamicClear } = this.props;
    return (
      <div className="result">
        <p>
          {answer}
          {answer !== "" && (
            <button
              name="Clear"
              className="searchClear"
              onClick={e => dynamicClear(e.target.name)}
            >
              x
            </button>
          )}
        </p>
      </div>
    );
  }
}
