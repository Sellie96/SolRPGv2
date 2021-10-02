import React, {Component} from "react";
import armourOneImage from "../../img/armor.svg";


class Body extends Component {

    static LeatherBody() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Leather Body", itemImage: armourOneImage, itemDescription: "Poorly crafted hide body",
            itemType: "body", itemRarity: randomItemRarity, itemLevel: 1, itemIsEquipped: false, itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 2, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(3, 2, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 2, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(2, 2, 1.005, 10, randomItemRarity),
                bonusArmour: 2
            }
        };
    }

    static BronzeBody() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Bronze Body", itemImage: armourOneImage, itemDescription: "Poorly crafted bronze armour",
            itemType: "body", itemRarity: randomItemRarity, itemLevel: 2, itemIsEquipped: false, itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 2, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(3, 2, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 2, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(2, 2, 1.005, 10, randomItemRarity),
                bonusArmour: 2
            }
        };
    }

    static IronBody() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Iron Body",
            itemImage: armourOneImage,
            itemDescription: "Armour made from rusted Iron, might stop an arrow",
            itemType: "body",
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

    static SteelBody() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Steel Body",
            itemImage: armourOneImage,
            itemDescription: "Armour made from hardened Steel",
            itemType: "body",
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

    static TemplarsBody() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Templar's Chestplate",
            itemImage: armourOneImage,
            itemDescription: "Armour crafted by the holy empire",
            itemType: "body",
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

    static ElvenRangerBody() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Elven Armour",
            itemImage: armourOneImage,
            itemDescription: "Armour crafted by the elves",
            itemType: "body",
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

    static CrusadersChainmail() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Crusaders Chain Mail",
            itemImage: armourOneImage,
            itemDescription: "Lightweight armour of the holy crusaders",
            itemType: "body",
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

    static DragonHideBody() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Hide armour crafted from a dragon",
            itemImage: armourOneImage,
            itemDescription: "Armour moulded from the hide of a dragon",
            itemType: "body",
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

    static DragonBaneBody() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Armour moulded from metal and dragon",
            itemImage: armourOneImage,
            itemDescription: "Armour moulded from metal and dragon",
            itemType: "body",
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

    static EliteDragonBaneArmour() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Armour moulded from the scales of Sol himself",
            itemImage: armourOneImage,
            itemDescription: "Only the one who brings down Sol could have crafted this",
            itemType: "body",
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

export default Body;
