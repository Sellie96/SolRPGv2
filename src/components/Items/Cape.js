import React, {Component} from "react";
import capeOneImage from "../../img/cape.png";


class Cape extends Component {

    static Quiver() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Makeshift Quiver",
            itemImage: capeOneImage,
            itemDescription: "Makeshift Quiver",
            itemType: "cape",
            itemRarity: randomItemRarity,
            itemLevel: 2,
            itemIsEquipped: false,
            itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(1, 1, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(0, 1, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
                bonusArmour: 1
            }
        };
    }

    static SkullCape() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Skull Cape",
            itemImage: capeOneImage,
            itemDescription: "Cape fashioned from dead skulls",
            itemType: "cape",
            itemRarity: randomItemRarity,
            itemLevel: 5,
            itemIsEquipped: false,
            itemIsLocked: false,
            itemValue: this.calculateNewEquipmentStatsRange(500, 7, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(15, 7, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(0, 7, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(0, 7, 1.005, 10, randomItemRarity),
                bonusArmour: -5
            }
        };
    }


    /////////////////////////////////////////ItemStatHelpers////////////////////////////////////////////////////////////
    static calculateNewItemRarity() {
        // Random number between 0 and 100
        let randomItemRarity = Math.round(Math.random() * 100);
        // 70% chance of common
        if (randomItemRarity <= 70) {
            return 0;
        }
        // 15% chance of uncommon
        if (randomItemRarity > 70 && randomItemRarity <= 85) {
            return 1;
        }
        // 10% chance of special
        if (randomItemRarity > 85 && randomItemRarity <= 95) {
            return 2;
        }
        // 4% chance of rare
        if (randomItemRarity > 95 && randomItemRarity <= 99) {
            return 3;
        }
        // 1% chance of legendary
        if (randomItemRarity > 99 && randomItemRarity <= 100) {
            return 4;
        }
    };

    static calculateRandomDropChances = chanceInPercentage => {
        return chanceInPercentage > Math.random() * 100;
    };

    static calculateNewEquipmentStatsRange = (
        // The original value of the stat.
        basicStat,
        // Level of the item which calls this function.
        itemLevel,
        // How steep the increase of the value is based on the level.
        increaseCoefficient,
        // How much of a margin of difference there can be between the original value and the output value
        // e.g. MAX +20% // MAX -20% of standard value.
        maxDifferenceMargin,
        itemRarity
    ) => {
        return Math.round(
            // Calculate the power of the item
            (basicStat + (basicStat / 100) * ((itemRarity * 3 + 1) * 9)) *
            Math.pow(increaseCoefficient, itemLevel) +
            ((basicStat * Math.pow(increaseCoefficient, itemLevel)) / 100) *
            (this.calculateRandomDropChances(20)
                ? Math.round(Math.random() * (maxDifferenceMargin * -1))
                : Math.round(Math.random() * maxDifferenceMargin))
        );
    };
}

export default Cape;
