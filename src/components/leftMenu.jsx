import React, {Component} from "react";
import HeroMenu from "./heroMenu";
import SummaryMenu from "./summaryMenu";
import QuestMenu from "./questMenu";
import DebugMenu from "./debugMenu";
import DeckMenu from "./deckMenu";
import RebirthMenu from "./rebirthMenu";
import ViresMenu from "./viresMenu";

class LeftMenu extends Component {
    renderDebugMenu = () => {
        if (this.props.mainState.isDebugModeActive) {
            return (
                <div className="mx-auto" id="userInterface-userSettings-menu-tab">
                    <button
                        type="button"
                        className="userInterface-userSettings-menu-tab-button btn-dark"
                        onClick={this.props.fetchLeftMenuSettingSelection}
                    >
                        <h3>Dev</h3>
                    </button>
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
        // Debug tab selected
        if (this.props.mainState.leftMenuSettingSelected === "Dev") {
            return <DebugMenu giveItemDebug={this.props.giveItemDebug}/>;
        }
    };

    render() {
        return (
            <div id="userInterface-userSettings-div">
                <div id="userInterface-userSettings-menu-div">
                    <div id="userInterface-userSettings-menu-holder">
                        <div className="mx-auto" id="userInterface-userSettings-menu-tab">
                            <button
                                type="button"
                                className="userInterface-userSettings-menu-tab-button btn-dark"
                                onClick={this.props.fetchLeftMenuSettingSelection}
                            >
                                <h3>Quests</h3>
                            </button>
                        </div>
                        <div className="mx-auto" id="userInterface-userSettings-menu-tab">
                            <button
                                type="button"
                                className="userInterface-userSettings-menu-tab-button btn-dark"
                                onClick={this.props.fetchLeftMenuSettingSelection}
                            >
                                <h3>Stats</h3>
                            </button>
                        </div>
                        <div className="mx-auto" id="userInterface-userSettings-menu-tab">
                            <button
                                type="button"
                                className="userInterface-userSettings-menu-tab-button btn-dark"
                                onClick={this.props.fetchLeftMenuSettingSelection}>
                                <h3>Log</h3>
                            </button>
                        </div>
                        <div className="mx-auto" id="userInterface-userSettings-menu-tab">
                            <button
                                type="button"
                                className="userInterface-userSettings-menu-tab-button btn-dark"
                                onClick={this.props.fetchLeftMenuSettingSelection}
                            >
                                <h3>Rebirth</h3>
                            </button>
                        </div>
                        <div className="mx-auto" id="userInterface-userSettings-menu-tab">
                            <button
                                type="button"
                                className="userInterface-userSettings-menu-tab-button btn-dark"
                                onClick={this.props.fetchLeftMenuSettingSelection}
                            >
                                <h3>Study</h3>
                            </button>
                        </div>
                        {this.renderDebugMenu()}
                    </div>
                    {this.renderLeftMenuSettingSelection()}
                </div>
            </div>

        );
    }
}

export default LeftMenu;