import React, {Component} from "react";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";

/* [IMG] Player */

import doubleAttackImage from "../img/doubleAttack_1.png";
import criticalMultiplierImage from "../img/critical_1.png";
import criticalChanceImage from "../img/critical_2.png";
import clickDamageImage from "../img/cps_1.png";
import heroUpgradeOneImage from "../img/hero_upgrade_1.png";

class HeroMenu extends Component {
    // Render the button classes based on whether the user has enough money to buy the upgrade
    renderUpgradeButtonClasses = upgradeName => {
        // If the player has enough money to buy the upgrade
        let classes = "";
        classes +=
            this.props.mainState.coins >=
            this.calculateUpgradePriceByUpgradeSetting(upgradeName)
                ? "userInterface-upgrades-upgrade-button btn"
                : "userInterface-upgrades-upgrade-button-disabled btn";
        return classes;
    };

    // Return the damage increase that would be applied if the user were to purchase the next upgrade level
    calculateSkillEffectAfterUpgradeSetting = upgradeName => {
        let {level, priceMultiplier} = {
            ...this.props.mainState.heroUpgrades[upgradeName]
        };
        let totalEffect = 0;
        // X1 Upgrade
        if (this.props.mainState.heroMenuUpgradeSettingSelected === "X1") {
            if (upgradeName === "clickDamage") {
                totalEffect = Math.round(50 * Math.pow(priceMultiplier, level));
            } else if (upgradeName === "criticalMultiplier") {
                totalEffect = 5;
            } else {
                totalEffect = 0.3;
            }
            level++;
            // X5 Upgrades
        } else if (this.props.mainState.heroMenuUpgradeSettingSelected === "X5") {
            for (let i = 0; i < 5; i++) {
                if (upgradeName === "clickDamage") {
                    totalEffect = Math.round(50 * Math.pow(priceMultiplier, level));
                } else if (upgradeName === "criticalMultiplier") {
                    totalEffect = 5 * (i + 1);
                } else {
                    totalEffect = 0.3 * (i + 1);
                }
                level++;
            }
            // X25 Upgrades
        } else if (this.props.mainState.heroMenuUpgradeSettingSelected === "X25") {
            for (let i = 0; i < 25; i++) {
                if (upgradeName === "clickDamage") {
                    totalEffect = Math.round(50 * Math.pow(priceMultiplier, level));
                } else if (upgradeName === "criticalMultiplier") {
                    totalEffect = 5 * (i + 1);
                } else {
                    totalEffect = 0.3 * (i + 1);
                }
                level++;
            }
        }
        return upgradeName === "clickDamage"
            ? this.props.renderNumberWithAbbreviations(
                Math.round(totalEffect - this.props.mainState.playerAttack)
            )
            : Math.round(100 * totalEffect) / 100;
    };

    renderUpgradeSettingsButtonClasses = option => {
        let classes = "btn mx-auto ";
        classes +=
            this.props.mainState.heroMenuUpgradeSettingSelected === option
                ? "petsMenu-upgradeSettings-button-selected"
                : "petsMenu-upgradeSettings-button";

        return classes;
    };

    // Render the upgrade price next to the purchase button
    calculateUpgradePriceByUpgradeSetting = upgradeName => {
        let {level, purchasePrice, price, priceMultiplier} = {
            ...this.props.mainState.heroUpgrades[upgradeName]
        };
        let totalPrice = 0;
        // X1 Upgrade
        if (this.props.mainState.heroMenuUpgradeSettingSelected === "X1") {
            if (level === 0) {
                // Pet is Lv. 0
                totalPrice += purchasePrice;
            } else {
                totalPrice += price;
            }

            // X5 Upgrades
        } else if (this.props.mainState.heroMenuUpgradeSettingSelected === "X5") {
            for (let i = 0; i < 5; i++) {
                // Upgrade is Lv. 0
                if (level === 0) {
                    totalPrice += purchasePrice;
                    level++;
                } else {
                    price = Math.round(purchasePrice * Math.pow(priceMultiplier, level));
                    totalPrice += price;
                    level++;
                }
            }
            // X25 Upgrades
        } else if (this.props.mainState.heroMenuUpgradeSettingSelected === "X25") {
            for (let i = 0; i < 25; i++) {
                // Upgrade is Lv. 0
                if (level === 0) {
                    totalPrice += purchasePrice;
                    level++;
                } else {
                    price = Math.round(purchasePrice * Math.pow(priceMultiplier, level));
                    totalPrice += price;
                    level++;
                }
            }
        }
        return totalPrice;
    };

    render() {
        return (
            <div id="userInterface-upgrades-div">

                <table>
                    <thead>
                    <tr>
                        <th>
                            <button
                                onClick={this.props.fetchHeroMenuUpgradeSettings}
                                className={this.renderUpgradeSettingsButtonClasses("X1")}
                            >
                                <p>X1</p>
                            </button>
                        </th>
                        <th>
                            <button
                                onClick={this.props.fetchHeroMenuUpgradeSettings}
                                className={this.renderUpgradeSettingsButtonClasses("X5")}
                            >
                                <p>X5</p>
                            </button>
                        </th>
                        <th>
                            <button
                                onClick={this.props.fetchHeroMenuUpgradeSettings}
                                className={this.renderUpgradeSettingsButtonClasses("X25")}
                            >
                                <p>X25</p>
                            </button>
                        </th>
                    </tr>
                    </thead>

                    {/* Damage */}
                    <tbody>
                    <tr>
                        <td>
                            <div className="userInterface-upgrades-upgrade-name">
                                <img
                                    draggable="false"
                                    alt="Upgrade one"
                                    src={heroUpgradeOneImage}
                                    className="userInterface-upgrades-upgrade-image"
                                />
                                Damage [Lvl {this.props.mainState.heroUpgrades.clickDamage.level}]
                            </div>
                        </td>
                        <td>
                            <div className="userInterface-upgrades-upgrade-damage">
                                <img
                                    className="userInterface-upgrades-upgrade-damage-increment-image"
                                    draggable="false"
                                    alt="click damage"
                                    src={clickDamageImage}
                                />
                                {/* Show the increase the upgrade would have on the current player damage */}
                                +{this.calculateSkillEffectAfterUpgradeSetting("clickDamage")}
                            </div>
                        </td>
                        <td>
                            <div
                                id="userInterface-upgrades-upgradeOne-price"
                                className="userInterface-upgrades-upgrade-price"
                            >
                                {this.props.renderNumberWithAbbreviations(
                                    this.calculateUpgradePriceByUpgradeSetting("clickDamage")
                                )}
                                <img
                                    draggable="false"
                                    alt="coin"
                                    className="userInterface-upgrades-upgrade-price-image"
                                    src={coinImageOne}
                                />
                            </div>
                        </td>
                        <td>
                            <button
                                type="button"
                                className={this.renderUpgradeButtonClasses("clickDamage")}
                                onClick={() => {
                                    this.props.heroUpgradeLevelUpgradeByUserSettings("clickDamage");
                                }}
                            >
                                +
                            </button>
                        </td>
                    </tr>
                    {/* Crit Damage */}
                    <tr>
                        <td>
                            <div className="userInterface-upgrades-upgrade-name">
                                <img
                                    draggable="false"
                                    alt="Upgrade two"
                                    src={criticalChanceImage}
                                    className="userInterface-upgrades-upgrade-image"
                                />
                                Critical chance [Lvl {this.props.mainState.heroUpgrades.criticalChance.level}]
                            </div>
                        </td>
                        <td>
                            <div className="userInterface-upgrades-upgrade-damage">
                                <img
                                    className="userInterface-upgrades-upgrade-damage-increment-image"
                                    draggable="false"
                                    alt="critical chance"
                                    src={criticalChanceImage}
                                />
                                {/* Show the increase the upgrade would have on the current player damage */}
                                +{this.calculateSkillEffectAfterUpgradeSetting("criticalChance")}%
                            </div>
                        </td>
                        <td>
                            <div
                                id="userInterface-upgrades-upgradeOne-price"
                                className="userInterface-upgrades-upgrade-price"
                            >
                                {this.props.renderNumberWithAbbreviations(
                                    this.calculateUpgradePriceByUpgradeSetting("criticalChance")
                                )}
                                <img
                                    draggable="false"
                                    alt="coin"
                                    className="userInterface-upgrades-upgrade-price-image"
                                    src={coinImageOne}
                                />
                            </div>
                        </td>
                        <td>
                            <button
                                type="button"
                                className={this.renderUpgradeButtonClasses("criticalChance")}
                                onClick={() => {
                                    this.props.heroUpgradeLevelUpgradeByUserSettings(
                                        "criticalChance"
                                    );
                                }}
                            >
                                +
                            </button>
                        </td>
                    </tr>
                    {/* Crit Multiplier */}
                    <tr>
                        <td>
                            <div className="userInterface-upgrades-upgrade-name">
                                <img
                                    draggable="false"
                                    alt="Upgrade three"
                                    src={criticalMultiplierImage}
                                    className="userInterface-upgrades-upgrade-image"
                                />
                                Critical multiplier
                                Lv. {this.props.mainState.heroUpgrades.criticalMultiplier.level}
                            </div>
                        </td>
                        <td>
                            <div className="userInterface-upgrades-upgrade-damage">
                                <img
                                    className="userInterface-upgrades-upgrade-damage-increment-image"
                                    draggable="false"
                                    alt="critical multiplier"
                                    src={criticalMultiplierImage}
                                />
                                {/* Show the increase the upgrade would have on the current player damage */}
                                +
                                {this.calculateSkillEffectAfterUpgradeSetting(
                                    "criticalMultiplier"
                                )}
                                %
                            </div>
                        </td>
                        <td>
                            <div
                                id="userInterface-upgrades-upgradeOne-price"
                                className="userInterface-upgrades-upgrade-price"
                            >
                                {this.props.renderNumberWithAbbreviations(
                                    this.calculateUpgradePriceByUpgradeSetting("criticalMultiplier")
                                )}
                                <img
                                    draggable="false"
                                    alt="coin"
                                    className="userInterface-upgrades-upgrade-price-image"
                                    src={coinImageOne}
                                />
                            </div>
                        </td>
                        <td>
                            <button
                                type="button"
                                className={this.renderUpgradeButtonClasses("criticalMultiplier")}
                                onClick={() => {
                                    this.props.heroUpgradeLevelUpgradeByUserSettings(
                                        "criticalMultiplier"
                                    );
                                }}
                            >
                                +
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="userInterface-upgrades-upgrade-name">
                                <img
                                    draggable="false"
                                    alt="Upgrade four"
                                    src={doubleAttackImage}
                                    className="userInterface-upgrades-upgrade-image"
                                />
                                Double attack
                                Lv. {this.props.mainState.heroUpgrades.doubleAttackChance.level}
                            </div>
                        </td>
                        <td>
                            <div className="userInterface-upgrades-upgrade-damage ">
                                <img
                                    className="userInterface-upgrades-upgrade-damage-increment-image"
                                    draggable="false"
                                    alt="double attack"
                                    src={doubleAttackImage}
                                />
                                {/* Show the increase the upgrade would have on the current double attack chance */}
                                +
                                {this.calculateSkillEffectAfterUpgradeSetting(
                                    "doubleAttackChance"
                                )}
                                %
                            </div>
                        </td>
                        <td>
                            <div
                                id="userInterface-upgrades-upgradeOne-price"
                                className="userInterface-upgrades-upgrade-price"
                            >
                                {this.props.renderNumberWithAbbreviations(
                                    this.calculateUpgradePriceByUpgradeSetting("doubleAttackChance")
                                )}
                                <img
                                    draggable="false"
                                    alt="coin"
                                    className="userInterface-upgrades-upgrade-price-image"
                                    src={coinImageOne}
                                />
                            </div>
                        </td>
                        <td>
                            <button
                                type="button"
                                className={this.renderUpgradeButtonClasses("doubleAttackChance")}
                                onClick={() => {
                                    this.props.heroUpgradeLevelUpgradeByUserSettings(
                                        "doubleAttackChance"
                                    );
                                }}
                            >
                                +
                            </button>
                        </td>
                    </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}

export default HeroMenu;
