import React, {Component} from "react";
import Amulets from "./Necklaces";
import Rings from "./Rings";
import Body from "./Body";
import Helmets from "./Helmets";
import Legs from "./Legs";
import Boots from "./Boots";
import Gloves from "./Gloves";


class ItemsThorny extends Component {

    static tanglerootDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 2):
                equipmentPiece = Boots.TemplarsBoots();
                break;
            case (randomNumber <= 4):
                equipmentPiece = Gloves.TemplarsGloves();
                break;
            case (randomNumber <= 5):
                equipmentPiece = Helmets.TemplarsHelmet();
                break;
        }
        return equipmentPiece;
    }

    static spiderQueenDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 2):
                equipmentPiece = Amulets.DefenceNecklace();
                break;
            case (randomNumber <= 4):
                equipmentPiece = Rings.StrengthRing();
                break;
            case (randomNumber <= 5):
                equipmentPiece = Legs.TemplarsLegs();
                break;
        }
        return equipmentPiece;
    }

    static vampireLordDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 2):
                equipmentPiece = Amulets.HealthNecklace();
                break;
            case (randomNumber <= 4):
                equipmentPiece = Rings.HealthRing();
                break;
            case (randomNumber <= 5):
                equipmentPiece = Body.TemplarsBody();
                break;
        }
        return equipmentPiece;
    }

    static chaoticDragonDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 2):
                equipmentPiece = Gloves.DragonHideGloves();
                break;
            case (randomNumber <= 3):
                equipmentPiece = Boots.DragonBaneBoots();
                break;
            case (randomNumber <= 4):
                equipmentPiece = Boots.CrusadersGrieves();
                break;
            case (randomNumber <= 5):
                equipmentPiece = Gloves.CrusadersGauntlets();
                break;
        }
        return equipmentPiece;
    }

    static carnivorousPlantDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 2):
                equipmentPiece = Body.CrusadersChainmail();
                break;
            case (randomNumber <= 4):
                equipmentPiece = Helmets.CrusadersHelmet();
                break;
            case (randomNumber <= 5):
                equipmentPiece = Legs.CrusadersGrieves();
                break;
        }
        return equipmentPiece;
    }

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

export default ItemsThorny;
