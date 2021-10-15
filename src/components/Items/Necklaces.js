import React, {Component} from "react";
import necklaceOneImage from "../../img/necklace.png";


class Necklaces extends Component {

    static StrengthNecklace() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Amulet of Attack",
            itemImage: necklaceOneImage,
            itemDescription: "Rusted and dull",
            itemType: "necklace",
            itemRarity: randomItemRarity,
            itemLevel: 1,
            itemIsEquipped: false,
            itemIsLocked: false,
            itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(2, 1, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusArmour: 0
            }
        };
    }

    static DefenceNecklace() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Amulet of Defence",
            itemImage: necklaceOneImage,
            itemDescription: "Rusted and dull",
            itemType: "necklace",
            itemRarity: randomItemRarity,
            itemLevel: 1,
            itemIsEquipped: false,
            itemIsLocked: false,
            itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(2, 1, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusArmour: 0
            }
        };
    }

    static ChanceAmulet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Amulet of Chances",
            itemImage: necklaceOneImage,
            itemDescription: "Rusted and dull",
            itemType: "necklace",
            itemRarity: randomItemRarity,
            itemLevel: 1,
            itemIsEquipped: false,
            itemIsLocked: false,
            itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(2, 1, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusArmour: 0
            }
        };
    }

    static HealthNecklace() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Amulet of Health",
            itemImage: necklaceOneImage,
            itemDescription: "Rusted and dull",
            itemType: "necklace",
            itemRarity: randomItemRarity,
            itemLevel: 1,
            itemIsEquipped: false,
            itemIsLocked: false,
            itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(2, 1, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusArmour: 0
            }
        };
    }

    static FuryAmulet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Amulet Of Fury",
            itemImage: necklaceOneImage,
            itemDescription: "Rusted and dull",
            itemType: "necklace",
            itemRarity: randomItemRarity,
            itemLevel: 1,
            itemIsEquipped: false,
            itemIsLocked: false,
            itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(2, 1, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusArmour: 0
            }
        };
    }

    static ElderAmulet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Elder Amulet",
            itemImage: necklaceOneImage,
            itemDescription: "Rusted and dull",
            itemType: "necklace",
            itemRarity: randomItemRarity,
            itemLevel: 1,
            itemIsEquipped: false,
            itemIsLocked: false,
            itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(2, 1, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusArmour: 0
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
        let statsValue = Math.round(
            // Calculate the power of the item
            (basicStat + (basicStat / 100) * ((itemRarity * 3 + 1) * 9)) *
            Math.pow(increaseCoefficient, itemLevel) +
            ((basicStat * Math.pow(increaseCoefficient, itemLevel)) / 100) *
            (this.calculateRandomDropChances(20)
                ? Math.round(Math.random() * (maxDifferenceMargin * -1))
                : Math.round(Math.random() * maxDifferenceMargin))
        );
        return statsValue;
    };
}

export default Necklaces;
