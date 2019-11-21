import React, { Component } from "react";
import "./TodoCard.css";
import { stat } from "fs";

export default class TodoCard extends Component {
  state = {
    Tb: [],
    MyInput: ""
  };
  Recup = el => {
    el.preventDefault();

    if (this.state.MyInput) {
      this.setState({
        Tb: [...this.state.Tb, { Text: this.state.MyInput, terminer: false }],
        MyInput: ""
      });
    } else {
      alert("Noooo");
    }
  };

  comp = j => {
    let Tab1 = this.state.Tb;
    Tab1[j].terminer = true;
    this.setState({
      Tb: Tab1
    });
  };

  del = k => {
    this.setState({
      Tb: this.state.Tb.filter((ele, key) => k !== key)
    });
  };

  render() {
    return (
      <div className="head">
        <h1 className="title">TO-DO App!</h1>
        <h4> Add New TO-DO</h4>
        <form onSubmit={this.Recup}>
          <input
            type="text"
            value={this.state.MyInput}
            onChange={e => this.setState({ MyInput: e.target.value })}
          />{" "}
          <br />
          <button className="button"> Add</button>
          {/* {(this.state.MyInput = "" ? alert("No") : this.state.MyInput)} */}
        </form>

        <div>
          {this.state.Tb.map((el, i) => (
            <div>
              <button key={i} onClick={() => this.comp(i)}>
                {el.terminer ? "undo" : "Complete"}
              </button>

              <button key={i} onClick={() => this.del(i)}>
                {" "}
                Delete{" "}
              </button>

              <span key={i} className={el.terminer ? "check" : ""}>
                {el.Text}
              </span>
            </div>
          ))}
        </div>
        <footer className="footer">
          <img
            src="data:image/png;base64,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"
            alt="Italian Trulli"
            className="img-footer"
          />
          <p>Proudly powered by Cosmic JS</p>
        </footer>
      </div>
    );
  }
}
