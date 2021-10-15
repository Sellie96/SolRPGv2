import React, { Component } from "react";
import tomeImage from "../../../img/tome_1.png";

class PrestigeMenu extends Component {
  renderRebirthButtonClasses = () => {
    let classes = "btn mx-auto";
    this.props.mainState.playerLevel >= 1
      ? (classes += "btn-primary")
      : (classes += "btn-disabled");
    return classes;
  };
  render() {
    return (
      <div id="userInterface-rebirth-div">
        <p className="userInterface-rebirth-tomesParagrph">
          <img
            src={tomeImage}
            alt="Tome"
            className="rebirth-tomesHeld-image"
          />
          {this.props.mainState.rebirthTomesHeld}
        </p>
        <p>
          After <span className="text-warning">Level 25</span>
            <br/>
            You can trade
          your progress in exchange of tomes
            <br/>
            which will allow you to grow your
          hero stronger than ever!
        </p>
        <p>Reset your game progress to obtain:</p>
        <p className="userInterface-rebirth-tomesParagrph">
          <img
            src={tomeImage}
            alt="Tome"
            className="rebirth-tomesObtained-image"
          />
          {this.props.mainState.tomesObtainableFromRebirth}
        </p>
        <p>
          <button
            className={this.renderRebirthButtonClasses()}
            onClick={this.props.playerRebirth}
          >
            Rebirth now!
          </button>
        </p>
        <p>
          You will gain an additional{" "}
          <span className="text-primary">1% global bonus damage</span> for each
          tome you collect.
            <br/>
            {" "}
          <span className="text-danger">You will lose everything</span> apart
          from deck cards and skills.
        </p>
      </div>
    );
  }
}

export default PrestigeMenu;
