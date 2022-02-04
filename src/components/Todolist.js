import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item_input: "",
      items: [],
    };

    this.update = this.update.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  update(event) {
    this.setState({
      item_input: event.target.value,
    });
  }

  add() {
    this.setState((prev) => {
      return {
        item_input: "",
        items: prev.items.concat(prev.item_input),
      };
    });
  }

  remove(key) {
    this.setState((prev) => {
      let items = [...prev.items];

      items.splice(key, 1);

      return {
        item_input: "",
        items,
      };
    });
  }

  render() {
    return (
      <div>
        <h4>
          To do list {this.props.name} ({this.state.items.length})
        </h4>
        <ul>
          {this.state.items.map((item, i) => (
            <li key={i}>
              {item}{" "}
              <button
                type="button"
                class="btn btn-dark"
                onClick={() => this.remove(i)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <form>
          <div>
            <input
              type="text"
              class="form-control"
              placeholder="Go ahead, type something in!"
              value={this.state.item_input}
              onChange={this.update}
            ></input>
          </div>
        </form>
        <button type="button" class="btn btn-dark" onClick={this.add}>
          Add item
        </button>
      </div>
    );
  }
}

export default App;
