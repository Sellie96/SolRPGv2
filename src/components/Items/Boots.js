import React, {Component} from "react";
import bootsOneImage from "../../img/boots.png";
import armourOneImage from "../../img/armor.svg";


class Boots extends Component {
    
    static BronzeBoots() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Bronze Boots", itemImage: armourOneImage, itemDescription: "Poorly crafted bronze armour",
            itemType: "boots", itemRarity: randomItemRarity, itemLevel: 2, itemIsEquipped: false, itemIsLocked: false,

            itemValue: this.calculateNewEquipmentStatsRange(500, 2, 1.05, 5, randomItemRarity),
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(3, 2, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 2, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(2, 2, 1.005, 10, randomItemRarity),
                bonusArmour: 2
            }
        };
    }

    static IronBoots() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Iron Boots",
            itemImage: bootsOneImage,
            itemDescription: "Boots made from slightly stronger stuff",
            itemType: "boots",
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

    static SteelBoots() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Steel Boots",
            itemImage: armourOneImage,
            itemDescription: "Boots made from hardened Steel",
            itemType: "boots",
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

    static TemplarsBoots() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Templar's Boots",
            itemImage: armourOneImage,
            itemDescription: "Boots crafted by the holy empire",
            itemType: "boots",
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

    static ElvenRangerBoots() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Elven Ranger Boots",
            itemImage: armourOneImage,
            itemDescription: "Boots crafted by the elves",
            itemType: "boots",
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

    static CrusadersGrieves() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Crusaders Boots",
            itemImage: armourOneImage,
            itemDescription: "Lightweight armour of the holy crusaders",
            itemType: "boots",
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

    static DragonHideBoots() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Hide boots crafted from a dragon",
            itemImage: armourOneImage,
            itemDescription: "Armour moulded from the hide of a dragon",
            itemType: "boots",
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

    static DragonBaneBoots() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Boots moulded from metal and dragon",
            itemImage: armourOneImage,
            itemDescription: "Armour moulded from metal and dragon",
            itemType: "boots",
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

    static EliteDragonBaneBoots() {
        let randomItemRarity = this.calculateNewItemRarity();
        return {
            itemName: "Boots moulded from the scales of Sol himself",
            itemImage: armourOneImage,
            itemDescription: "Only the one who brings down Sol could have crafted this",
            itemType: "boots",
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

export default Boots;
