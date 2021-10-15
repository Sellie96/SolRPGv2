import React, { Component } from "react";

class DevMenu extends Component {
  render() {
    return (
      <div id="userInterface-debug-div">
        <p>
          <strong>Debug</strong>
        </p>
        <div />
        <div className="userInterface-debug-div">
          <p className="userInterface-debug-category">
            <button
              type="button"
              className="btn btn-warning btn-sm"
              onClick={() => {
                this.props.giveItemDebug("coins");
              }}
            >
              Coins +1b
            </button>
          </p>
        </div>
        <div className="userInterface-debug-div">
          <p className="userInterface-debug-category">
            <button
              type="button"
              className="btn btn-warning btn-sm"
              onClick={() => {
                this.props.giveItemDebug("potions");
              }}
            >
              Potions +1,000
            </button>
          </p>
        </div>
        <div className="userInterface-debug-div">
          <p className="userInterface-debug-category">
            <button
              type="button"
              className="btn btn-warning btn-sm"
              onClick={() => {
                this.props.giveItemDebug("stages");
              }}
            >
              Stages +10
            </button>
          </p>
        </div>
        <div className="userInterface-debug-div">
          <p className="userInterface-debug-category">
            <button
              type="button"
              className="btn btn-warning btn-sm"
              onClick={() => {
                this.props.giveItemDebug("levels");
              }}
            >
              Player level +1
            </button>
          </p>
        </div>
        <div className="userInterface-debug-div">
          <p className="userInterface-debug-category">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                this.props.giveItemDebug("enemySpawnNoDelay");
              }}
            >
              Enemy Spawn No Delay
            </button>
          </p>
        </div>
        <div className="userInterface-debug-div">
          <p className="userInterface-debug-category">
            <button
              type="button"
              className="btn btn-danger btn-sm"
              data-placement="top"
              data-toggle="tooltip"
              title="Reset everything and start the game from the beginning."
              onClick={() => {
                this.props.giveItemDebug("reset");
              }}
            >
              Reset game
            </button>
          </p>
        </div>
        <p className="text-danger">
          Warning: once you reset your game there is no way to go back!
        </p>
      </div>
    );
  }
}

export default DevMenu;
