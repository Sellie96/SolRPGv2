import React, {Component} from "react";
import HeroMenu from "./heroMenu";
import SummaryMenu from "./summaryMenu";
import QuestMenu from "./questMenu";
import DebugMenu from "./debugMenu";
import DeckMenu from "./deckMenu";
import RebirthMenu from "./rebirthMenu";
import ViresMenu from "./viresMenu";
import BattleLog2 from "./battleLog2";
import Dropdown from "react-bootstrap/Dropdown";
import goblin from "../img/stages/GoblinVillage/Goblin.png";
import goblinArcher from "../img/stages/GoblinVillage/GoblinArcher.png";
import goblinElite from "../img/stages/GoblinVillage/GoblinElite.png";
import berserker from "../img/stages/GoblinVillage/Berserker.png";
import goblinChief from "../img/stages/GoblinVillage/GoblinChief.png";
import sandCrab from "../img/monsters/Sand Crab.svg";
import sandGolem from "../img/monsters/Sand Golem.svg";
import dustDevil from "../img/monsters/Dust Devil.png";
import sandBeast from "../img/monsters/Sand Beast.svg";
import manticore from "../img/monsters/Manticore.png";
import iceGiant from "../img/monsters/Ice Giant.png";
import mammoth from "../img/monsters/Mammoth.svg";
import frozenTerror from "../img/monsters/Frozen Terror.svg";
import frostTroll from "../img/monsters/Frost Troll.png";
import iceWyvern from "../img/monsters/Ice Wyvern.png";
import tangleroot from "../img/monsters/Tangleroot.png";
import spiderQueen from "../img/monsters/Spider Queen.svg";
import vampireLord from "../img/monsters/Vampire Lord.svg";
import chaoticDragon from "../img/monsters/Chaotic Dragon.png";
import carnivorousPlant from "../img/monsters/Carnivorous Plant.png";
import fireSpirit from "../img/monsters/Fire Spirit.svg";
import fireSerpent from "../img/monsters/Fire Serpent.svg";
import theEye from "../img/monsters/The Eye.svg";
import lavaGolem from "../img/monsters/Lava Golem.svg";
import solTheProtector from "../img/monsters/Sol, the Protector.png";

class LeftMenu extends Component {
    renderDebugMenu = () => {
        if (this.props.mainState.isDebugModeActive) {
            return (
                <div id="userInterface-userSettings-menu-tab">
                    <button className="tablinks" onClick={this.props.fetchLeftMenuSettingSelection}>Dev</button>
                </div>
            );
        }
    };
    renderLeftMenuSettingSelection = () => {
        // Hero tab selected
        if (this.props.mainState.leftMenuSettingSelected === "Hero") {
            return (
                <HeroMenu
                    mainState={this.props.mainState}
                    renderNumberWithAbbreviations={
                        this.props.renderNumberWithAbbreviations
                    }
                    heroUpgradeLevelUp={this.props.heroUpgradeLevelUp}
                    heroUpgradeLevelUpgradeByUserSettings={
                        this.props.heroUpgradeLevelUpgradeByUserSettings
                    }
                    fetchHeroMenuUpgradeSettings={this.props.fetchHeroMenuUpgradeSettings}
                />
            );
        }
        // Stats tab selected
        if (this.props.mainState.leftMenuSettingSelected === "Stats") {
            return (
                <SummaryMenu
                    mainState={this.props.mainState}
                    calculateClickDamageAllSources={
                        this.props.calculateClickDamageAllSources
                    }
                    calculateDamagePerSecondAllSources={
                        this.props.calculateDamagePerSecondAllSources
                    }
                    calculateCriticalChanceAllSources={
                        this.props.calculateCriticalChanceAllSources
                    }
                    calculateCriticalMultiplierAllSources={
                        this.props.calculateCriticalMultiplierAllSources
                    }
                    calculateDoubleAttackChanceAllSources={
                        this.props.calculateDoubleAttackChanceAllSources
                    }
                    calculateExperienceMultiplierAllSources={
                        this.props.calculateExperienceMultiplierAllSources
                    }
                    calculateCoinDropMultiplierAllSources={
                        this.props.calculateCoinDropMultiplierAllSources
                    }
                    renderNumberWithAbbreviations={
                        this.props.renderNumberWithAbbreviations
                    }
                />
            );
        }
        // Deck tab selected
        if (this.props.mainState.leftMenuSettingSelected === "Log") {
            return (
                <DeckMenu
                    mainState={this.props.mainState}
                    renderNumberWithAbbreviations={
                        this.props.renderNumberWithAbbreviations
                    }
                />
            );
        }
        // Quests tab selected
        if (this.props.mainState.leftMenuSettingSelected === "Quests") {
            return (
                <QuestMenu
                    mainState={this.props.mainState}
                    renderNumberWithAbbreviations={
                        this.props.renderNumberWithAbbreviations
                    }
                />
            );
        }
        // Rebirth tab selected
        if (this.props.mainState.leftMenuSettingSelected === "Rebirth") {
            return (
                <RebirthMenu
                    mainState={this.props.mainState}
                    renderNumberWithAbbreviations={
                        this.props.renderNumberWithAbbreviations
                    }
                    playerRebirth={this.props.playerRebirth}
                />
            );
        }
        // Vires tab selected
        if (this.props.mainState.leftMenuSettingSelected === "Study") {
            return (
                <ViresMenu
                    mainState={this.props.mainState}
                    viresUpgradeLevelUp={this.props.viresUpgradeLevelUp}
                />
            );
        }

        if (this.props.mainState.leftMenuSettingSelected === "BattleLog") {
            return (
                <BattleLog2
                    mainState={this.props.mainState}
                    viresUpgradeLevelUp={this.props.viresUpgradeLevelUp}
                />
            );
        }
        // Debug tab selected
        if (this.props.mainState.leftMenuSettingSelected === "Dev") {
            return <DebugMenu giveItemDebug={this.props.giveItemDebug}/>;
        }
    };

    render() {
        return (
            <div className="row">
                <div className="equipment-links gold-border-bottom mobile">
                    <div className="container cbk-container container height-100">
                        <div className="d-flex justify-content-between align-items-center height-90">
                            <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                                <a className="nav-link-cbk" onClick={this.props.fetchLeftMenuSettingSelection}>Log</a>
                                <a className="nav-link-cbk" onClick={this.props.fetchLeftMenuSettingSelection}>Stats</a>
                                <a className="nav-link-cbk" onClick={this.props.fetchLeftMenuSettingSelection}>Quests</a>
                            </div>
                            <div className="d-flex flex-grow-1 justify-content-center logo-spacer">
                            </div>
                            <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                                <a className="nav-link-cbk" onClick={this.props.fetchLeftMenuSettingSelection}>Rebirth</a>
                                <a className="nav-link-cbk" onClick={this.props.fetchLeftMenuSettingSelection}>Study</a>
                                <a className="nav-link-cbk" onClick={this.props.fetchLeftMenuSettingSelection}>BattleLog</a>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderDebugMenu()}
            <div id="userInterface-userSettings-menu-div">
                {this.renderLeftMenuSettingSelection()}
            </div>
            </div>

        );
    }
}

export default LeftMenu;
