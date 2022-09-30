import React from "react";
import Button from "react-bootstrap/Button";

class Btn extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Button variant="primary" size="sm" onClick={this.props.onClick}>
        {this.props.btnText}
      </Button>
    );
  }
}

export default Btn;
