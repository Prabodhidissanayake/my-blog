import React from "react";
import Button from "react-bootstrap/Button";
import "./Btn.css";

class Btn extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Button
        variant="primary"
        size="md"
        onClick={this.props.onClick}
        className="btn"
      >
        {this.props.btnText}
      </Button>
    );
  }
}

export default Btn;
