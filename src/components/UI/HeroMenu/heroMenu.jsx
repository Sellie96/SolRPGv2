import React, {Component} from "react";
import ShopMenu from "./shopMenu";
import SummaryMenu from "../Helpers/summaryMenu";
import QuestMenu from "./questMenu";
import DevMenu from "./devMenu";
import MonsterLogMenu from "./monsterLogMenu";
import PrestigeMenu from "./prestigeMenu";
import PrestigeShopMenu from "./prestigeShopMenu";
import CombatLog from "./combatLog";

class HeroMenu extends Component {
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
                <ShopMenu
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
                <MonsterLogMenu
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
                <PrestigeMenu
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
                <PrestigeShopMenu
                    mainState={this.props.mainState}
                    viresUpgradeLevelUp={this.props.viresUpgradeLevelUp}
                />
            );
        }

        if (this.props.mainState.leftMenuSettingSelected === "BattleLog") {
            return (
                <CombatLog
                    mainState={this.props.mainState}
                    viresUpgradeLevelUp={this.props.viresUpgradeLevelUp}
                />
            );
        }
        // Debug tab selected
        if (this.props.mainState.leftMenuSettingSelected === "Dev") {
            return <DevMenu giveItemDebug={this.props.giveItemDebug}/>;
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
                                <a className="nav-link-cbk"
                                   onClick={this.props.fetchLeftMenuSettingSelection}>Quests</a>
                            </div>
                            <div className="d-flex flex-grow-1 justify-content-center logo-spacer">
                            </div>
                            <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                                <a className="nav-link-cbk"
                                   onClick={this.props.fetchLeftMenuSettingSelection}>Rebirth</a>
                                <a className="nav-link-cbk" onClick={this.props.fetchLeftMenuSettingSelection}>Study</a>
                                <a className="nav-link-cbk"
                                   onClick={this.props.fetchLeftMenuSettingSelection}>BattleLog</a>
                                {this.renderDebugMenu()}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="userInterface-userSettings-menu-div">
                    {this.renderLeftMenuSettingSelection()}
                </div>
            </div>

        );
    }
}

export default HeroMenu;
