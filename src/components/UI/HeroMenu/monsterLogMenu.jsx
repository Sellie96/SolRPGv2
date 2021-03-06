import React, { Component } from "react";
import MonsterLog from "./monsterLog";
/* [IMG] Enemy */
import greenForestBossOne from "../../../img/stages/GoblinVillage/greenForestBoss_1.png";
import greenForestBossTwo from "../../../img/stages/GoblinVillage/greenForestBoss_2.png";
import greenForestBossThree from "../../../img/stages/GoblinVillage/greenForestBoss_3.png";
import darkForestBossOne from "../../../img/stages/Dark forest/darkForestBoss_1.png";
import darkForestBossTwo from "../../../img/stages/Dark forest/darkForestBoss_2.png";
import darkForestBossThree from "../../../img/stages/Dark forest/darkForestBoss_3.png";
import magicForestBossOne from "../../../img/stages/Magic forest/magicForestBoss_1.png";
import magicForestBossTwo from "../../../img/stages/Magic forest/magicForestBoss_2.png";
import magicForestBossThree from "../../../img/stages/Magic forest/magicForestBoss_3.png";
import cityEntranceBossOne from "../../../img/stages/City entrance/cityEntranceBoss_1.png";
import cityEntranceBossTwo from "../../../img/stages/City entrance/cityEntranceBoss_2.png";
import cityEntranceBossThree from "../../../img/stages/City entrance/cityEntranceBoss_3.png";
import forgottenRoadBossOne from "../../../img/stages/Forgotten road/forgottenRoadBoss_1.png";
import forgottenRoadBossTwo from "../../../img/stages/Forgotten road/forgottenRoadBoss_2.png";
import forgottenRoadBossThree from "../../../img/stages/Forgotten road/forgottenRoadBoss_3.png";
import hauntedMarketplaceBossOne from "../../../img/stages/Haunted marketplace/hauntedMarketplaceBoss_1.png";
import hauntedMarketplaceBossTwo from "../../../img/stages/Haunted marketplace/hauntedMarketplaceBoss_2.png";
import hauntedMarketplaceBossThree from "../../../img/stages/Haunted marketplace/hauntedMarketplaceBoss_3.png";
import goldenTempleBossOne from "../../../img/stages/Golden temple/goldenTempleBoss_1.png";
import goldenTempleBossTwo from "../../../img/stages/Golden temple/goldenTempleBoss_2.png";
import goldenTempleBossThree from "../../../img/stages/Golden temple/goldenTempleBoss_3.png";
import infernoBossOne from "../../../img/stages/Inferno/infernoBoss_1.png";
import infernoBossTwo from "../../../img/stages/Inferno/infernoBoss_2.png";
import infernoBossThree from "../../../img/stages/Inferno/infernoBoss_3.png";

class MonsterLogMenu extends Component {
  render() {
    return (
      <div id="userInterface-stats-div">
        <p>
          <strong>Monster Log</strong>
        </p>

        {/* Deck menu  */}
        <div id="deckMenu-div">
          {/* Row #1 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardOne"}
              cardImage={greenForestBossOne}
            />
            {/* Card #2 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardTwo"}
              cardImage={greenForestBossTwo}
            />
          </div>
            <div className="deckMenu-row">
            {/* Card #3 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardThree"}
              cardImage={greenForestBossThree}
            />
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardFour"}
                cardImage={darkForestBossOne}
            />
          </div>
          {/* Row #2 */}
          <div className="deckMenu-row">
            {/* Card #2 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardFive"}
              cardImage={darkForestBossTwo}
            />
            {/* Card #3 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardSix"}
              cardImage={darkForestBossThree}
            />
          </div>
            <div className="deckMenu-row">
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardSeven"}
                cardImage={magicForestBossOne}
            />
            {/* Card #2 */}
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardEight"}
                cardImage={magicForestBossTwo}
            />
          </div>
          {/* Row #3 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            {/* Card #3 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardNine"}
              cardImage={magicForestBossThree}
            />
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardTen"}
                cardImage={cityEntranceBossOne}
            />
          </div>
            <div className="deckMenu-row">
            {/* Card #2 */}
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardEleven"}
                cardImage={cityEntranceBossTwo}
            />
            {/* Card #3 */}
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardTwelve"}
                cardImage={cityEntranceBossThree}
            />
          </div>
          {/* Row #5 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardThirteen"}
              cardImage={forgottenRoadBossOne}
            />
            {/* Card #2 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardFourteen"}
              cardImage={forgottenRoadBossTwo}
            />
          </div>
            <div className="deckMenu-row">
            {/* Card #3 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardFifteen"}
              cardImage={forgottenRoadBossThree}
            />
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardSixteen"}
                cardImage={hauntedMarketplaceBossOne}
            />
          </div>
          {/* Row #6 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            {/* Card #2 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardSeventeen"}
              cardImage={hauntedMarketplaceBossTwo}
            />
            {/* Card #3 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardEighteen"}
              cardImage={hauntedMarketplaceBossThree}
            />
          </div>
            <div className="deckMenu-row">
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardNineteen"}
                cardImage={goldenTempleBossOne}
            />
            {/* Card #2 */}
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardTwenty"}
                cardImage={goldenTempleBossTwo}
            />
          </div>
          {/* Row #7 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            {/* Card #3 */}
            <MonsterLog
              mainState={this.props.mainState}
              cardNumber={"cardTwentyone"}
              cardImage={goldenTempleBossThree}
            />
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardTwentytwo"}
                cardImage={infernoBossOne}
            />
          </div>
            <div className="deckMenu-row">
            {/* Card #2 */}
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardTwentythree"}
                cardImage={infernoBossTwo}
            />
            {/* Card #3 */}
            <MonsterLog
                mainState={this.props.mainState}
                cardNumber={"cardTwentyfour"}
                cardImage={infernoBossThree}
            />
          </div>
          {/* Row #8 */}
        </div>
      </div>
    );
  }
}

export default MonsterLogMenu;
