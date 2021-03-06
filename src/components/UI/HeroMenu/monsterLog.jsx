import React, { Component } from "react";
import {ProgressBar} from "react-bootstrap";

class MonsterLog extends Component {
  renderCardImageClasses = cardNumber => {
    // If the card's level is 0
    return this.props.mainState.deck[cardNumber].level === 0
      ? "deckMenu-row-image-locked"
      : "deckMenu-row-image";
  };

  renderCardTooltip = cardNumber => {
    let tooltip;
    // Bonus EXP
    if (this.props.mainState.deck[cardNumber].bonusType === "bonusExperience") {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your EXP Gain!  Current bonus: ";
    }
    // Bonus HP
    if (this.props.mainState.deck[cardNumber].bonusType === "bonusHealth") {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your Max HP!  Current bonus: ";
    }
    // Bonus Click DMG
    if (
      this.props.mainState.deck[cardNumber].bonusType === "bonusClickDamage"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your Click DMG!  Current bonus: ";
    }
    // Bonus DPS
    if (
      this.props.mainState.deck[cardNumber].bonusType === "bonusDamagePerSecond"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your total DPS!  Current bonus: ";
    }
    // Bonus Coin drop
    if (this.props.mainState.deck[cardNumber].bonusType === "bonusCoinDrop") {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases the value of dropped coins!  Current bonus: ";
    }
    // Bonus Crit %
    if (
      this.props.mainState.deck[cardNumber].bonusType === "bonusCriticalChance"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases the chances of landing a critical hit!  Current bonus: ";
    }
    // Bonus Crit DMG
    if (
      this.props.mainState.deck[cardNumber].bonusType === "bonusCriticalDamage"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases the damage of your critical hits!  Current bonus: ";
    }
    // Bonus Double attack %
    if (
      this.props.mainState.deck[cardNumber].bonusType ===
      "bonusDoubleAttackChance"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your chance of landing a double attack!  Current bonus: ";
    }
    // Bonus Potion drop %
    if (
      this.props.mainState.deck[cardNumber].bonusType === "bonusPotionDropRate"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your chance of finding a potion!  Current bonus: ";
    }
    // Shows the current bonus given by the specific card
    tooltip +=
      (0.2 * this.props.mainState.deck[cardNumber].level).toFixed(2) + "%";
    return tooltip;
  };

  render() {
    return (
      <div className="deckMenu-row-section center">
        <div className="deckMenu-row-image-container center">
          <img
            draggable="false"
            data-toggle="tooltip"
            title={this.renderCardTooltip(this.props.cardNumber)}
            data-placement="top"
            alt="deck card"
            className={this.renderCardImageClasses(this.props.cardNumber)}
            src={this.props.cardImage}
          />
        </div>
        <p className="deckMenu-row-section-paragraph">
          {this.props.mainState.deck[this.props.cardNumber].name}
        </p>
        <br />
        <p className="deckMenu-row-section-paragraph">
          Lv. {this.props.mainState.deck[this.props.cardNumber].level}
        </p>
          <ProgressBar
              variant="warning"
              now={this.props.mainState.deck[this.props.cardNumber].experienceCurrent}
              max={this.props.mainState.deck[this.props.cardNumber].experienceRequired}
          />
        <img
          src={this.props.mainState.deck[this.props.cardNumber].bonusImage}
          className="deckMenu-row-section-bonusImage"
          alt="Deck bonus"
        />
        <p>
          {"+" +
            (
              0.2 * this.props.mainState.deck[this.props.cardNumber].level
            ).toFixed(2) +
            "%"}
        </p>
      </div>
    );
  }
}

export default MonsterLog;
