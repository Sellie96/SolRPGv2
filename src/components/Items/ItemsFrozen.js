import React, {Component} from "react";
import armourOneImage from "../../img/armor.svg";
import legsOneImage from "../../img/legs.png";
import glovesOneImage from "../../img/gloves.png";
import capeOneImage from "../../img/cape.png";
import daggerOneImage from "../../img/dagger_1.png";
import bowOneImage from "../../img/bow_1.png";
import swordOneImage from "../../img/sword_1.png";
import axeOneImage from "../../img/axe_1.png";
import maceOneImage from "../../img/mace_1.png";
import Amulets from "./Necklaces";
import Rings from "./Rings";
import Body from "./Body";
import Helmets from "./Helmets";
import Legs from "./Legs";
import Gloves from "./Gloves";
import Boots from "./Boots";


class ItemsFrozen extends Component {

    static iceGiantDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 2): equipmentPiece = Amulets.DefenceNecklace(); break;
            case (randomNumber <= 4): equipmentPiece = Rings.DefenceRing(); break;
            case (randomNumber <= 5): equipmentPiece = Body.SteelBody(); break;
        }
        return equipmentPiece;
    }

    static mammothDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 2): equipmentPiece = Amulets.DefenceNecklace(); break;
            case (randomNumber <= 4): equipmentPiece = Rings.DefenceRing(); break;
            case (randomNumber <= 5): equipmentPiece = Body.SteelBody(); break;
        }
        return equipmentPiece;
    }

    static frozenTerrorDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 2): equipmentPiece = Amulets.DefenceNecklace(); break;
            case (randomNumber <= 4): equipmentPiece = Boots.ElvenRangerBoots(); break;
            case (randomNumber <= 5): equipmentPiece = Gloves.ElvenRangerGloves(); break;
        }
        return equipmentPiece;
    }

    static frostTrollDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 2): equipmentPiece = Helmets.ElvenRangerHelmet(); break;
            case (randomNumber <= 4): equipmentPiece = Rings.DefenceRing(); break;
            case (randomNumber <= 5): equipmentPiece = Legs.ElvenRangerLegs(); break;
        }
        return equipmentPiece;
    }

    static iceWyvernDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 2): equipmentPiece = Amulets.ChanceAmulet(); break;
            case (randomNumber <= 4): equipmentPiece = Rings.ChanceRing(); break;
            case (randomNumber <= 5): equipmentPiece = Body.ElvenRangerBody(); break;
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

export default ItemsFrozen;
