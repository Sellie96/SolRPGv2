import React, { Component } from "react";

/* [IMG] Player */
import playerHealthImage from "../img/health_1.png";
import doubleAttackImage from "../img/doubleAttack_1.png";
import criticalMultiplierImage from "../img/critical_1.png";
import criticalChanceImage from "../img/critical_2.png";
import clickDamageImage from "../img/cps_1.png";
import clickPerSecondDamageImage from "../img/dps_1.png";
import playerExperienceImage from "../img/playerExperienceTutorial.png";
import coinImage from "../img/coin_1.png";

class SummaryMenu extends Component {
  // Render the skill in <strong> text if the rendered value is currently affected by an active skill
  renderBoldStatsIfSkillActive = stat => {
    // Click Damage
    if (stat === "clickDamage") {
      // Skill #3 - Active
      if (this.props.mainState.skills.skillThree.isActive) {
        return (
          <p className="userInterface-stats-summary-section-paragraph">
            <strong>
              {this.props.renderNumberWithAbbreviations(
                Math.round(this.props.calculateClickDamageAllSources())
              )}
            </strong>
          </p>
        );
        // Skill #3 - Inactive
      } else {
        return (
          <p className="userInterface-stats-summary-section-paragraph">
            {this.props.renderNumberWithAbbreviations(
              Math.round(this.props.calculateClickDamageAllSources())
            )}
          </p>
        );
      }
    }
    // Damage Per Second
    if (stat === "damagePerSecond") {
      // Skill #2 - Active
      if (this.props.mainState.skills.skillTwo.isActive) {
        return (
          <p className="userInterface-stats-summary-section-paragraph">
            <strong>
              {this.props.renderNumberWithAbbreviations(
                Math.round(this.props.calculateDamagePerSecondAllSources())
              )}
            </strong>
          </p>
        );
        // Skill #2 - Inactive
      } else {
        return (
          <p className="userInterface-stats-summary-section-paragraph">
            {this.props.renderNumberWithAbbreviations(
              Math.round(this.props.calculateDamagePerSecondAllSources())
            )}
          </p>
        );
      }
    }
  };

  render() {
    return (
      <div id="userInterface-stats-div">
        <p>
          <strong>Statistics</strong>
        </p>
        {/* Player summary  */}
        <div id="userInterface-stats-summary-div">
          {/* Row #1  */}
          <div className="userInterface-stats-summary-row">
            <div className="userInterface-stats-summary-section">
              <img
                data-toggle="tooltip"
                title="Total click damage"
                data-placement="top"
                draggable="false"
                alt="click damage"
                className="userInterface-stats-summary-section-image"
                src={clickDamageImage}
              />
              {this.renderBoldStatsIfSkillActive("clickDamage")}
              Damage
            </div>
            <div className="userInterface-stats-summary-section">
              <img
                  data-toggle="tooltip"
                  title="Total armour"
                  data-placement="top"
                  draggable="false"
                  alt="armour"
                  className="userInterface-stats-summary-section-image"
                  src={clickDamageImage}
              />
              <p className="userInterface-stats-summary-section-paragraph">
              {this.props.mainState.playerArmour + this.props.mainState.equipmentBonuses.bonusArmour}
              </p>
              Armour
            </div>
            <div className="userInterface-stats-summary-section">
              <img
                data-toggle="tooltip"
                title="Critical chance"
                data-placement="top"
                draggable="false"
                alt="critical chance"
                className="userInterface-stats-summary-section-image"
                src={criticalChanceImage}
              />
              <p className="userInterface-stats-summary-section-paragraph">
                {this.props.renderNumberWithAbbreviations(
                  this.props.calculateCriticalChanceAllSources().toFixed(1)
                )}
                %
              </p>
              Crit Chance
            </div>
            <div className="userInterface-stats-summary-section">
              <img
                data-toggle="tooltip"
                title="Critical damage"
                data-placement="top"
                draggable="false"
                alt="critical damage"
                className="userInterface-stats-summary-section-image"
                src={criticalMultiplierImage}
              />
              <p className="userInterface-stats-summary-section-paragraph">
                {this.props.renderNumberWithAbbreviations(
                  Math.round(
                    this.props.calculateCriticalMultiplierAllSources() * 100
                  )
                )}
                %
              </p>
              Crit Damage
            </div>
            <div className="userInterface-stats-summary-section">
              <img
                data-toggle="tooltip"
                title="Player health"
                data-placement="top"
                draggable="false"
                alt="player health"
                className="userInterface-stats-summary-section-image"
                src={playerHealthImage}
              />
              <p className="userInterface-stats-summary-section-paragraph">
                {this.props.renderNumberWithAbbreviations(
                  this.props.mainState.playerHealthMax
                )}
              </p>
              Health
            </div>
          </div>
        </div>
        <p>
          <strong>Combat Statistics</strong>
        </p>

        <div className="userInterface-stats-summary-row">
          <div className="userInterface-stats-summary-section">
            <img
                data-toggle="tooltip"
                title="Total DPS"
                data-placement="top"
                draggable="false"
                alt="click per second"
                className="userInterface-stats-summary-section-image"
                src={clickPerSecondDamageImage}
            />
            {this.renderBoldStatsIfSkillActive("damagePerSecond")}
            DPS
          </div>
          <div className="userInterface-stats-summary-section">
            <img
                data-toggle="tooltip"
                title="Double attack chance"
                data-placement="top"
                draggable="false"
                alt="double attack chance"
                className="userInterface-stats-summary-section-image"
                src={doubleAttackImage}
            />
            <p className="userInterface-stats-summary-section-paragraph">
              {this.props.renderNumberWithAbbreviations(
                  this.props.calculateDoubleAttackChanceAllSources().toFixed(1)
              )}
              %
            </p>
            Double Attack
          </div>
          <div className="userInterface-stats-summary-section">
            <img
                data-toggle="tooltip"
                title="EXP Multiplier"
                data-placement="top"
                draggable="false"
                alt="player experience"
                className="userInterface-stats-summary-section-image"
                src={playerExperienceImage}
            />
            <p className="userInterface-stats-summary-section-paragraph">
              {this.props.renderNumberWithAbbreviations(
                  (
                      this.props.calculateExperienceMultiplierAllSources() * 100
                  ).toFixed(0)
              )}
              %
            </p>
            Xp Multi
          </div>
          <div className="userInterface-stats-summary-section">
            <img
                data-toggle="tooltip"
                title="Coin drop multiplier"
                data-placement="top"
                draggable="false"
                alt="coin drop rate"
                className="userInterface-stats-summary-section-image"
                src={coinImage}
            />
            <p className="userInterface-stats-summary-section-paragraph">
              {this.props.renderNumberWithAbbreviations(
                  (
                      this.props.calculateCoinDropMultiplierAllSources() * 100
                  ).toFixed(0)
              )}
              %
            </p>
            Gold Multi
          </div>
        </div>

        <div className="userInterface-stats-summary-row">
          <div className="userInterface-stats-summary-section">
            <span className="userInterface-stats-category">
              Total player attacks {this.props.mainState.totalPlayerAttacks.toLocaleString()}
            </span>
          </div>

          <div className="userInterface-stats-summary-section">
            <span className="userInterface-stats-category">
              Total player damage: {this.props.renderNumberWithAbbreviations(this.props.mainState.totalPlayerDamageDealt)}
            </span>
          </div>

          <div className="userInterface-stats-summary-section">
            <span className="userInterface-stats-category">
              Total auto damage: {this.props.renderNumberWithAbbreviations(this.props.mainState.totalPetDamageDealt)}
            </span>
          </div>

          <div className="userInterface-stats-summary-section">
              <span className="userInterface-stats-category">
                Total kills: {this.props.mainState.totalEnemiesKilled.toLocaleString()}
            </span>
          </div>
          <div className="userInterface-stats-summary-section">
            <span className="userInterface-stats-category">
              Total potions used: {this.props.mainState.totalTimesHealed.toLocaleString()}
            </span>
          </div>
        </div>
        <p>
          <strong>Player Statistics</strong>
        </p>
        <div className="userInterface-stats-summary-row">
          <div className="userInterface-stats-summary-section">
            <span className="userInterface-stats-category">
              Total money earned: {this.props.renderNumberWithAbbreviations(this.props.mainState.totalMoneyEarned)}
            </span>
          </div>

          <div className="userInterface-stats-summary-section">
            <span className="userInterface-stats-category">
              Total money spent: {this.props.renderNumberWithAbbreviations(
                this.props.mainState.totalMoneySpent
            )}
            </span>
          </div>

          <div className="userInterface-stats-summary-section">
            <span className="userInterface-stats-category">
              Total skills used: {this.props.mainState.totalSkillsUsed.toLocaleString()}
            </span>
          </div>

          <div className="userInterface-stats-summary-section">
            <span className="userInterface-stats-category">
              Total player deaths: {this.props.mainState.totalPlayerDeaths.toLocaleString()}
            </span>
          </div>

          <div className="userInterface-stats-summary-section">
            <span className="userInterface-stats-category">
              Total rebirths: {this.props.mainState.totalPlayerRebirths.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryMenu;
