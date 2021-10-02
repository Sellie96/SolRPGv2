import React, {Component} from "react";
import Weapons from "./Weapons";
import Body from "./Body";
import Legs from "./Legs";
import Cape from "./Cape";
import Gloves from "./Gloves";
import Helmets from "./Helmets";
import Boots from "./Boots";


class ItemsGoblin extends Component {

    static goblinDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 4): equipmentPiece = Weapons.rustyDagger(); break;
            default: equipmentPiece = Weapons.bronzeDagger(); break;
        }
        return equipmentPiece;
    }

    static goblinArcherDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 1): equipmentPiece = Weapons.FlimsyBow(); break;
            case (randomNumber <= 3): equipmentPiece = Body.LeatherBody(); break;
            case (randomNumber <= 4): equipmentPiece = Legs.LeatherPants(); break;
            case (randomNumber <= 5): equipmentPiece = Cape.Quiver(); break;
        }
        return equipmentPiece;
    }

    static hobgoblinDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 1): equipmentPiece = Weapons.WoodcuttersAxe(); break;
            case (randomNumber <= 2): equipmentPiece = Gloves.LeatherGloves(); break;
            case (randomNumber <= 3): equipmentPiece = Body.BronzeBody(); break;
            case (randomNumber <= 4): equipmentPiece = Legs.BronzePants(); break;
            case (randomNumber <= 5): equipmentPiece = Weapons.rustyDagger(); break;
        }
        return equipmentPiece;
    }

    static goblinBerserkerDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 3): equipmentPiece = Helmets.bronzeHelmet(); break;
            case (randomNumber <= 4): equipmentPiece = Weapons.TrainingSword(); break;
            case (randomNumber <= 5): equipmentPiece = Gloves.LeatherGloves(); break;
        }
        return equipmentPiece;
    }

    static goblinChiefDropTable() {
        let randomNumber = Math.round(Math.random() * 5);
        let equipmentPiece;
        switch (true) {
            case (randomNumber <= 1): equipmentPiece = Weapons.GoblinMaul(); break;
            case (randomNumber <= 2): equipmentPiece = Boots.BronzeBoots(); break;
            case (randomNumber <= 3): equipmentPiece = Body.IronBody(); break;
            case (randomNumber <= 4): equipmentPiece = Legs.IronLegs(); break;
            case (randomNumber <= 5): equipmentPiece = Cape.SkullCape(); break;
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

export default ItemsGoblin;
