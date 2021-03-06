import React, {Component} from "react";
import daggerOneImage from "../../img/dagger_1.png";
import bowOneImage from "../../img/bow_1.png";
import swordOneImage from "../../img/sword_1.png";
import axeOneImage from "../../img/axe_1.png";
import maceOneImage from "../../img/mace_1.png";


class Weapons extends Component {

    static rustyDagger() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Rusty dagger", itemImage: daggerOneImage, itemDescription: "Rusted and dull",
            itemType: "weapon", itemRarity: randomItemRarity, itemLevel: 1, itemIsEquipped: false, itemIsLocked: false,
            itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(2, 1, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                bonusArmour: 0
            }
        };
    }

    static bronzeDagger() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Bronze dagger", itemImage: daggerOneImage, itemDescription: "Just sharp enough to cut bread",
            itemType: "weapon", itemRarity: randomItemRarity, itemLevel: 2, itemIsEquipped: false, itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(5, 2, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(5, 2, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(2, 2, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 2, 1.005, 10, randomItemRarity),
                bonusArmour: 0
            }
        };
    }

    static FlimsyBow() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Flimsy Bow", itemImage: bowOneImage, itemDescription: "Barely held together bow",
            itemType: "weapon", itemRarity: randomItemRarity, itemLevel: 2, itemIsEquipped: false, itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 2, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(7, 2, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 2, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(4, 2, 1.005, 10, randomItemRarity),
                bonusArmour: 0
            }
        };
    }

    static WoodcuttersAxe() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Woodcutters Axe",
            itemImage: axeOneImage,
            itemDescription: "For chopping trees or heads",
            itemType: "weapon",
            itemRarity: randomItemRarity,
            itemLevel: 4,
            itemIsEquipped: false,
            itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(15, 1, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(0, 1, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
                bonusArmour: 1
            }
        };
    }

    static TrainingSword() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Training Sword", itemImage: swordOneImage, itemDescription: "A sword made for a child",
            itemType: "weapon", itemRarity: randomItemRarity, itemLevel: 4, itemIsEquipped: false, itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 4, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(11, 4, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 4, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(5, 4, 1.005, 10, randomItemRarity),
                bonusArmour: 0
            }
        };
    }

    static GoblinMaul() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Goblin Maul", itemImage: maceOneImage, itemDescription: "The great maul of the Goblin Chief",
            itemType: "weapon", itemRarity: randomItemRarity, itemLevel: 5, itemIsEquipped: false, itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 6, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(20, 6, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(0, 6, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(10, 6, 1.005, 10, randomItemRarity),
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

export default Weapons;
