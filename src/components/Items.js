import React, {Component} from "react";
import armourOneImage from "../img/armor.svg";
import legsOneImage from "../img/legs.png";
import glovesOneImage from "../img/gloves.png";
import capeOneImage from "../img/cape.png";
import daggerOneImage from "../img/dagger_1.png";
import bowOneImage from "../img/bow_1.png";
import swordOneImage from "../img/sword_1.png";
import axeOneImage from "../img/axe_1.png";
import maceOneImage from "../img/mace_1.png";


class Items extends Component {

    static goblinDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let randomItemRarity = this.calculateNewItemRarity();
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 4):
                equipmentPiece = {
                    itemType: "weapon",
                    itemRarity: randomItemRarity,
                    itemLevel: 1,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
                    itemName: "Rusty dagger",
                    itemImage: daggerOneImage,
                    itemDescription: "Rusted and dull",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(2, 1, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
                    }
                };
                break;
            default:
                equipmentPiece = {
                    itemType: "weapon",
                    itemRarity: randomItemRarity,
                    itemLevel: 2,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(5, 2, 1.05, 5, randomItemRarity),
                    itemName: "Bronze dagger",
                    itemImage: daggerOneImage,
                    itemDescription: "Just sharp enough to cut bread",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(5, 2, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(2, 2, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 2, 1.005, 10, randomItemRarity)
                    }
                };
        }
        return equipmentPiece;
    }

    static goblinArcherDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let randomItemRarity = this.calculateNewItemRarity();
        let equipmentPiece;

        switch (true) {
            case (randomNumber <= 1):
                equipmentPiece = {
                    itemType: "weapon",
                    itemRarity: randomItemRarity,
                    itemLevel: 2,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(500, 2, 1.05, 5, randomItemRarity),
                    itemName: "Flimsy Bow",
                    itemImage: bowOneImage,
                    itemDescription: "Barely held together bow",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(7, 2, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 2, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(4, 2, 1.005, 10, randomItemRarity)
                    }
                };
                break;
            case (randomNumber <= 3):
                equipmentPiece = {
                    itemType: "body",
                    itemRarity: randomItemRarity,
                    itemLevel: 2,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(500, 2, 1.05, 5, randomItemRarity),
                    itemName: "Leather Body",
                    itemImage: armourOneImage,
                    itemDescription: "Poorly crafted hide body",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(3, 2, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 2, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(2, 2, 1.005, 10, randomItemRarity)
                    }
                };
                break;
            case (randomNumber <= 4):
                equipmentPiece = {
                    itemType: "legs",
                    itemRarity: randomItemRarity,
                    itemLevel: 2,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(500, 2, 1.05, 5, randomItemRarity),
                    itemName: "Leather Pants",
                    itemImage: legsOneImage,
                    itemDescription: "Leather Pants for the modest adventurer",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(3, 2, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 2, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(2, 2, 1.005, 10, randomItemRarity)
                    }
                };
                break;
            case (randomNumber <= 5):
                equipmentPiece = {
                    itemType: "cape",
                    itemRarity: randomItemRarity,
                    itemLevel: 2,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
                    itemName: "Makeshift Quiver",
                    itemImage: capeOneImage,
                    itemDescription: "Makeshift Quiver",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(1, 1, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(0, 1, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity)
                    }
                };
                break;
        }
        return equipmentPiece;
    }

    static hobgoblinDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let randomItemRarity = this.calculateNewItemRarity();
        let equipmentPiece;

        equipmentPiece = {
            itemType: "weapon",
            itemRarity: randomItemRarity,
            itemLevel: 3,
            itemIsEquipped: false,
            itemIsLocked: false,
            itemValue: this.calculateNewEquipmentStatsRange(500, 4, 1.05, 5, randomItemRarity),
            itemName: "Woodcutters Axe",
            itemImage: axeOneImage,
            itemDescription: "Used to chop wood and occasionally people",
            itemStats: {
                bonusAttack: this.calculateNewEquipmentStatsRange(15, 4, 1.07, 3, randomItemRarity),
                bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(0, 4, 1.005, 10, randomItemRarity),
                bonusCriticalChance: this.calculateNewEquipmentStatsRange(0, 4, 1.005, 10, randomItemRarity)
            }
        };
        return equipmentPiece;
    }

    static goblinBerserkerDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let randomItemRarity = this.calculateNewItemRarity();
        let equipmentPiece;

        switch (true) {
            case (randomNumber <= 4):
                equipmentPiece = {
                    itemType: "weapon",
                    itemRarity: randomItemRarity,
                    itemLevel: 4,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(500, 4, 1.05, 5, randomItemRarity),
                    itemName: "Training Sword",
                    itemImage: swordOneImage,
                    itemDescription: "A sword made for a child",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(11, 4, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 4, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(5, 4, 1.005, 10, randomItemRarity)
                    }
                };
                break;
            case (randomNumber <= 5):
                equipmentPiece = {
                    itemType: "gloves",
                    itemRarity: randomItemRarity,
                    itemLevel: 3,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(500, 4, 1.05, 5, randomItemRarity),
                    itemName: "Leather Gloves",
                    itemImage: glovesOneImage,
                    itemDescription: "Poorly crafted hide gloves",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(4, 4, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(2, 4, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 4, 1.005, 10, randomItemRarity)
                    }
                };
                break;
        }
        return equipmentPiece;
    }

    static goblinChiefDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let randomItemRarity = this.calculateNewItemRarity();
        let equipmentPiece;

        switch (true) {
            case (randomNumber <= 1):
                equipmentPiece = {
                    itemType: "weapon",
                    itemRarity: randomItemRarity,
                    itemLevel: 5,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(500, 6, 1.05, 5, randomItemRarity),
                    itemName: "Goblin Maul",
                    itemImage: maceOneImage,
                    itemDescription: "The great maul of the Goblin Chief",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(20, 6, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(0, 6, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(10, 6, 1.005, 10, randomItemRarity)
                    }
                };
                break;
            case (randomNumber <= 3):
                equipmentPiece = {
                    itemType: "body",
                    itemRarity: randomItemRarity,
                    itemLevel: 4,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(500, 6, 1.05, 5, randomItemRarity),
                    itemName: "Iron Body",
                    itemImage: armourOneImage,
                    itemDescription: "Armour made from rusted Iron, might stop an arrow",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(6, 6, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity)
                    }
                };
                break;
            case (randomNumber <= 4):
                equipmentPiece = {
                    itemType: "legs",
                    itemRarity: randomItemRarity,
                    itemLevel: 4,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
                    itemName: "Iron Legs",
                    itemImage: legsOneImage,
                    itemDescription: "Iron Pants to protect the goods",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(5, 6, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 6, 1.005, 10, randomItemRarity)
                    }
                };
                break;
            case (randomNumber <= 5):
                equipmentPiece = {
                    itemType: "cape",
                    itemRarity: randomItemRarity,
                    itemLevel: 5,
                    itemIsEquipped: false,
                    itemIsLocked: false,
                    itemValue: this.calculateNewEquipmentStatsRange(500, 7, 1.05, 5, randomItemRarity),
                    itemName: "Skull Cape",
                    itemImage: capeOneImage,
                    itemDescription: "Cape fashioned from dead skulls",
                    itemStats: {
                        bonusAttack: this.calculateNewEquipmentStatsRange(15, 7, 1.07, 3, randomItemRarity),
                        bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(0, 7, 1.005, 10, randomItemRarity),
                        bonusCriticalChance: this.calculateNewEquipmentStatsRange(0, 7, 1.005, 10, randomItemRarity)
                    }
                };
                break;
        }
        return equipmentPiece;
    }


    // if (type === "weapon") {
    //     if (randomNumber <= 1) {
    //         equipmentPiece = {
    //             itemType: "weapon",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 2,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "bronze weapon",
    //             itemImage: daggerOneImage,
    //             itemDescription: "Kinda flimsy",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //
    //     } else {
    //     }
    // }
    //
    // if (type === "body") {
    //     if (randomNumber <= 1) {
    //         equipmentPiece = {
    //             itemType: "body",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 2,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "bronze body",
    //             itemImage: armourOneImage,
    //             itemDescription: "Kinda flimsy",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //
    //     } else {
    //         equipmentPiece = {
    //             itemType: "body",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 1,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "leather body",
    //             itemImage: armourOneImage,
    //             itemDescription: "Poor quality ranged armour",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //     }
    // }
    // if (type === "helmet") {
    //     // Create a blueprint with the shared keys of all weapons
    //     if (randomNumber <= 1) {
    //         equipmentPiece = {
    //             itemType: "helmet",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 2,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "bronze helmet",
    //             itemImage: helmOneImage,
    //             itemDescription: "Kinda flimsy",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //     } else {
    //         equipmentPiece = {
    //             itemType: "helmet",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 2,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "leather cowl",
    //             itemImage: helmOneImage,
    //             itemDescription: "Kinda flimsy",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //
    //     }
    // }
    //
    // if (type === "legs") {
    //     if (randomNumber <= 1) {
    //         equipmentPiece = {
    //             itemType: "legs",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 2,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "Bronze legs",
    //             itemImage: legsOneImage,
    //             itemDescription: "Kinda flimsy",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //     } else {
    //         equipmentPiece = {
    //             itemType: "legs",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 2,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "leather legs",
    //             itemImage: legsOneImage,
    //             itemDescription: "Barely held together",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //     }
    // }
    //
    // if (type === "gloves") {
    //     if (randomNumber <= 1) {
    //         equipmentPiece = {
    //             itemType: "gloves",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 2,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "bronze gloves",
    //             itemImage: glovesOneImage,
    //             itemDescription: "Kinda flimsy",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //
    //     } else {
    //         equipmentPiece = {
    //             itemType: "gloves",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 1,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "leather gloves",
    //             itemImage: glovesOneImage,
    //             itemDescription: "Poor quality ranged armour",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //     }
    // }
    //
    // if (type === "boots") {
    //     if (randomNumber <= 1) {
    //         equipmentPiece = {
    //             itemType: "boots",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 2,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "bronze boots",
    //             itemImage: bootsOneImage,
    //             itemDescription: "Kinda flimsy",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //
    //     } else {
    //         equipmentPiece = {
    //             itemType: "boots",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 1,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "leather boots",
    //             itemImage: bootsOneImage,
    //             itemDescription: "Poor quality ranged armour",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //     }
    // }
    // if (type === "cape") {
    //     if (randomNumber <= 1) {
    //         equipmentPiece = {
    //             itemType: "cape",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 2,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "Quiver",
    //             itemImage: capeOneImage,
    //             itemDescription: "Kinda flimsy",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //
    //     } else {
    //         equipmentPiece = {
    //             itemType: "cape",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 1,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "leather cape",
    //             itemImage: capeOneImage,
    //             itemDescription: "Poor quality ranged armour",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //     }
    // }
    // if (type === "necklace") {
    //     if (randomNumber <= 1) {
    //         equipmentPiece = {
    //             itemType: "necklace",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 2,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "necklace",
    //             itemImage: necklaceOneImage,
    //             itemDescription: "Kinda flimsy",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //
    //     } else {
    //         equipmentPiece = {
    //             itemType: "cape",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 1,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "necklace",
    //             itemImage: necklaceOneImage,
    //             itemDescription: "Poor quality necklace",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //     }
    // }
    // if (type === "ring") {
    //     if (randomNumber <= 1) {
    //         equipmentPiece = {
    //             itemType: "ring",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 2,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "Ring",
    //             itemImage: ringOneImage,
    //             itemDescription: "Kinda flimsy",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //
    //     } else {
    //         equipmentPiece = {
    //             itemType: "ring",
    //             itemRarity: randomItemRarity,
    //             itemLevel: 1,
    //             itemIsEquipped: false,
    //             itemIsLocked: false,
    //             itemValue: this.calculateNewEquipmentStatsRange(500, 1, 1.05, 5, randomItemRarity),
    //             itemName: "iron ring",
    //             itemImage: ringOneImage,
    //             itemDescription: "Poor quality ring",
    //             itemStats: {
    //                 bonusAttack: this.calculateNewEquipmentStatsRange(5, 1, 1.07, 3, randomItemRarity),
    //                 bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(5, 1, 1.005, 10, randomItemRarity),
    //                 bonusCriticalChance: this.calculateNewEquipmentStatsRange(1, 1, 1.005, 10, randomItemRarity)
    //             }
    //         };
    //     }
    // }

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

export default Items;
