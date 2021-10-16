import React, {Component} from "react";
import armourOneImage from "../../img/armor.svg";
import helmetOneImage from "../../img/helmet.png";


class Helmets extends Component {

    static bronzeHelmet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Bronze Helmet", itemImage: helmetOneImage, itemDescription: "Rusted and barely fits",
            itemType: "helmet", itemRarity: randomItemRarity, itemLevel: 1, itemIsEquipped: false, itemIsLocked: false,
            itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(2, 1, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusArmour: 0
            }
        };
    }

    static IronHelmet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Iron Helmet",
            itemImage: helmetOneImage,
            itemDescription: "Helmet made from slightly stronger stuff",
            itemType: "helmet",
            itemRarity: randomItemRarity,
            itemLevel: 5,
            itemIsEquipped: false,
            itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 6, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(6, 6, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusArmour: 6
            }
        };
    }

    static SteelHelmet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Steel Helmet",
            itemImage: helmetOneImage,
            itemDescription: "Helmet made from hardened Steel",
            itemType: "helmet",
            itemRarity: randomItemRarity,
            itemLevel: 10,
            itemIsEquipped: false,
            itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 6, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(6, 6, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusArmour: 6
            }
        };
    }

    static TemplarsHelmet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Templar's Helmet",
            itemImage: helmetOneImage,
            itemDescription: "Helmet crafted by the holy empire",
            itemType: "helmet",
            itemRarity: randomItemRarity,
            itemLevel: 15,
            itemIsEquipped: false,
            itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 6, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(6, 6, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusArmour: 6
            }
        };
    }

    static ElvenRangerHelmet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Elven Ranger Helmet",
            itemImage: helmetOneImage,
            itemDescription: "Helmet crafted by the elves",
            itemType: "helmet",
            itemRarity: randomItemRarity,
            itemLevel: 20,
            itemIsEquipped: false,
            itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 6, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(6, 6, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusArmour: 6
            }
        };
    }

    static CrusadersHelmet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Crusaders Helmet",
            itemImage: helmetOneImage,
            itemDescription: "Lightweight armour of the holy crusaders",
            itemType: "helmet",
            itemRarity: randomItemRarity,
            itemLevel: 20,
            itemIsEquipped: false,
            itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 6, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(6, 6, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusArmour: 6
            }
        };
    }

    static DragonHideHelmet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Hide helmet crafted from a dragon",
            itemImage: helmetOneImage,
            itemDescription: "Armour moulded from the hide of a dragon",
            itemType: "helmet",
            itemRarity: randomItemRarity,
            itemLevel: 25,
            itemIsEquipped: false,
            itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 6, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(6, 6, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusArmour: 6
            }
        };
    }

    static DragonBaneHelmet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Helmet moulded from metal and dragon",
            itemImage: helmetOneImage,
            itemDescription: "Armour moulded from metal and dragon",
            itemType: "helmet",
            itemRarity: randomItemRarity,
            itemLevel: 25,
            itemIsEquipped: false,
            itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 6, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(6, 6, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusArmour: 6
            }
        };
    }

    static EliteDragonBaneHelmet() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Helmet moulded from the scales of Sol himself",
            itemImage: helmetOneImage,
            itemDescription: "Only the one who brings down Sol could have crafted this",
            itemType: "helmet",
            itemRarity: randomItemRarity,
            itemLevel: 30,
            itemIsEquipped: false,
            itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 6, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(6, 6, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                bonusArmour: 6
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

export default Helmets;
