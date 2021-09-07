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
            </div>
        );
    }
}

export default HeroMenu;
