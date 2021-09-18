import React, {Component} from "react";

class BattleLog2 extends Component {
  render() {
    return (
      <div id="userInterface-vires-div">
        <div id="userInterface-chatlog-div">
          <br/>
          <div id="userInterface-chatlog-div-paragraphs">
            {this.props.mainState.battleLogParagraphsToBeRendered}
          </div>
        </div>
      </div>
    );
  }
}

export default BattleLog2;
