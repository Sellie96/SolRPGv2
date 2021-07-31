import React, { Component } from "react";
/* [IMG] Inventory, resources */
import achievementPointImage from "../img/achievement_1.png";

class QuestMenu extends Component {
  render() {
    return (
      <div id="userInterface-stats-div">
        <h2>
          <strong>Quests</strong>
        </h2>
        {/* Total AP */}
        <p>
          {this.props.mainState.adventurePoints}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
        </p>
        {/* Quest #1  -  Player attacks */}
        {/* Description */}
        <p className="userInterface-stats-category">
          Attack the enemy{" "}
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.playerAttacks.nextRequired
          )}{" "}
          times.
        </p>{" "}
        {/* Achievement Points */}
        <p>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.playerAttacks.adventurePointsHeld} AP
        </p>
        {/* Done/Required summary */}
        <p>
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.totalPlayerAttacks
          )}
          /
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.playerAttacks.nextRequired
          )}
        </p>
        {/* Quest #2  -  Pet damage */}
        {/* Description */}
        <p className="userInterface-stats-category">
          Use your pets to deal{" "}
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.petDamageDealt.nextRequired
          )}{" "}
          damage.
        </p>{" "}
        {/* Achievement Points */}
        <p>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.petDamageDealt.adventurePointsHeld} AP
        </p>
        {/* Done/Required summary */}
        <p>
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.totalPetDamageDealt
          )}
          /
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.petDamageDealt.nextRequired
          )}
        </p>
        {/* Quest #3  -  Player damage */}
        {/* Description */}
        <p className="userInterface-stats-category">
          Actively attack the enemy to deal{" "}
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.playerDamageDealt.nextRequired
          )}{" "}
          damage.
        </p>{" "}
        {/* Achievement Points */}
        <p>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.playerDamageDealt.adventurePointsHeld} AP
        </p>
        {/* Done/Required summary */}
        <p>
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.totalPlayerDamageDealt
          )}
          /
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.playerDamageDealt.nextRequired
          )}
        </p>
        {/* Quest #4  -  Total money earned */}
        {/* Description */}
        <p className="userInterface-stats-category">
          Earn a total of{" "}
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.moneyEarned.nextRequired
          )}{" "}
          coins.
        </p>{" "}
        {/* Achievement Points */}
        <p>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.moneyEarned.adventurePointsHeld} AP
        </p>
        {/* Done/Required summary */}
        <p>
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.totalMoneyEarned
          )}
          /
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.moneyEarned.nextRequired
          )}
        </p>
        {/* Quest #5  -  Total skills used */}
        {/* Description */}
        <p className="userInterface-stats-category">
          Use your active skills{" "}
          {this.props.mainState.quests.skillsUsed.nextRequired.toLocaleString()}{" "}
          times.
        </p>{" "}
        {/* Achievement Points */}
        <p>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.skillsUsed.adventurePointsHeld} AP
        </p>
        {/* Done/Required summary */}
        <p>
          {this.props.mainState.totalSkillsUsed.toLocaleString()}/
          {this.props.mainState.quests.skillsUsed.nextRequired.toLocaleString()}
        </p>
        {/* Quest #6  -  Total player heals */}
        {/* Description */}
        <p className="userInterface-stats-category">
          Heal yourself with potions{" "}
          {this.props.mainState.quests.timesHealed.nextRequired.toLocaleString()}{" "}
          times.
        </p>{" "}
        {/* Achievement Points */}
        <p>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.timesHealed.adventurePointsHeld} AP
        </p>
        {/* Done/Required summary */}
        <p>
          {this.props.mainState.totalTimesHealed.toLocaleString()}/
          {this.props.mainState.quests.timesHealed.nextRequired.toLocaleString()}
        </p>
        {/* Quest #7  -  Total enemies killed */}
        {/* Description */}
        <p className="userInterface-stats-category">
          Kill{" "}
          {this.props.mainState.quests.enemiesKilled.nextRequired.toLocaleString()}{" "}
          enemies.
        </p>{" "}
        {/* Achievement Points */}
        <p>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.enemiesKilled.adventurePointsHeld} AP
        </p>
        {/* Done/Required summary */}
        <p>
          {this.props.mainState.totalEnemiesKilled.toLocaleString()}/
          {this.props.mainState.quests.enemiesKilled.nextRequired.toLocaleString()}
        </p>
        <p>Collect AP and progress in your adventure!</p>
      </div>
    );
  }
}

export default QuestMenu;
