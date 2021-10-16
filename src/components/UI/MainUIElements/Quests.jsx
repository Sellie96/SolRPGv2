import React, {Component} from "react";
/* [IMG] Player */
import 'bootstrap/dist/css/bootstrap.min.css';
import achievementPointImage from "../../../img/achievement_1.png";

/* [IMG] Inventory, resources */

class Quests extends Component {

    render() {
        return (
            <div className="homeScreen">
                <div className="row no-gutters">
                    <div className="hero-static col-xl-4 d-xl-flex flex-column justify-content-center bg-black-75">
                        <div className="p-4 p-xl-5 flex-grow-1 d-flex align-items-center">
                            <div className="w-100 text-center">
                                <h1>
                                    Quests
                                </h1>
                                <p>
                                    {this.props.mainState.adventurePoints}
                                    <img
                                        className="userInterface-quests-logo"
                                        src={achievementPointImage}
                                        alt="Quest chest"
                                    />
                                </p>

                                <h3 className="font-w600 text-danger">
                                    Collect AP and progress in your adventure!
                                </h3>
                            </div>
                        </div>
                        <div className="p-4 pt-1 pb-1 d-xl-flex font-size-sm text-center">
                            <div className="col-12 font-size-sm font-w400 text-white-75 mb-2">
                                <button role="button"
                                        className="btn-primary btn-lg btn-alt-success m-1 btn-cloud-sign-in"
                                        onClick={() => {
                                            this.props.mainState.openQuests = false;
                                            this.props.mainState.isGamePaused = false;
                                        }}><i
                                    className="fa fa-fw fa-sign-in-alt mr-1 opacity-50"/> Leave Town
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hero-alt col-xl-8 d-flex flex-column align-items-center bg-black-50">
                        <div className="px-1 pt-3 w-100 flex-grow-1 d-flex align-items-center">
                            <div className="w-100 align-content-center" id="character-selection-page-0">
                                <div className="row no-gutters justify-content-center">
                                    <div className="col-12 col-md-8" id="character-selection-container">
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group"
                                             aria-label="Horizontal Primary">
                                            <div className="col-12 pl-0">
                                                <div className="media d-flex align-items-center push">
                                                    <div className="media-body text-center mr-2">
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Attack
                                                            the enemy{" "}
                                                            {this.props.renderNumberWithAbbreviations(this.props.mainState.quests.playerAttacks.nextRequired)}{" "}times.{" "}
                                                        </h5>
                                                        <h5 className="font-w600 mb-2 font-size-lg text-white">
                                                            {this.props.mainState.achievementPointImage}{" "}
                                                            <img className="userInterface-quests-logo"
                                                                 src={achievementPointImage} alt="Quest chest"/>
                                                            {this.props.mainState.quests.playerAttacks.adventurePointsHeld} AP
                                                        </h5>
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">
                                                                <span>{this.props.renderNumberWithAbbreviations(this.props.mainState.totalPlayerAttacks)} /
                                                                    {this.props.renderNumberWithAbbreviations(this.props.mainState.quests.playerAttacks.nextRequired)}
                                                                </span>
                                                            <br/>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group"
                                             aria-label="Horizontal Primary">
                                            <div className="col-12 pl-0">
                                                <div className="media d-flex align-items-center push">
                                                    <div className="media-body text-center mr-2">
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">
                                                            Deal{" "}
                                                            {this.props.renderNumberWithAbbreviations(
                                                                this.props.mainState.quests.petDamageDealt.nextRequired
                                                            )}{" "}
                                                            auto damage.
                                                        </h5>
                                                        <h5 className="font-w600 mb-2 font-size-lg text-white">
                                                            {this.props.mainState.achievementPointImage}{" "}
                                                            <img
                                                                className="userInterface-quests-logo"
                                                                src={achievementPointImage}
                                                                alt="Quest chest"
                                                            />
                                                            {this.props.mainState.quests.petDamageDealt.adventurePointsHeld} AP
                                                        </h5>
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">
                                                                <span>{this.props.renderNumberWithAbbreviations(this.props.mainState.totalPetDamageDealt)}
                                                                    /
                                                                    {this.props.renderNumberWithAbbreviations(this.props.mainState.quests.petDamageDealt.nextRequired)}
                                                                </span>
                                                            <br/>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group"
                                             aria-label="Horizontal Primary">
                                            <div className="col-12 pl-0">
                                                <div className="media d-flex align-items-center push">
                                                    <div className="media-body text-center mr-2">
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">
                                                            Actively attack the enemy to deal{" "}
                                                            {this.props.renderNumberWithAbbreviations(
                                                                this.props.mainState.quests.playerDamageDealt.nextRequired
                                                            )}{" "}
                                                            damage.
                                                        </h5>
                                                        <h5 className="font-w600 mb-2 font-size-lg text-white">
                                                            {this.props.mainState.achievementPointImage}{" "}
                                                            <img
                                                                className="userInterface-quests-logo"
                                                                src={achievementPointImage}
                                                                alt="Quest chest"
                                                            />
                                                            {this.props.mainState.quests.playerDamageDealt.adventurePointsHeld} AP
                                                        </h5>
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">
                                                                <span>{this.props.renderNumberWithAbbreviations(this.props.mainState.totalPlayerDamageDealt)}
                                                                    /
                                                                    {this.props.renderNumberWithAbbreviations(this.props.mainState.quests.playerDamageDealt.nextRequired)}
                                                                </span>
                                                            <br/>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group"
                                             aria-label="Horizontal Primary">
                                            <div className="col-12 pl-0">
                                                <div className="media d-flex align-items-center push">
                                                    <div className="media-body text-center mr-2">
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning"> Earn a total of{" "}
                                                            {this.props.renderNumberWithAbbreviations(
                                                                this.props.mainState.quests.moneyEarned.nextRequired
                                                            )}{" "}
                                                            coins.
                                                        </h5>
                                                        <h5 className="font-w600 mb-2 font-size-lg text-white">
                                                            {this.props.mainState.achievementPointImage}{" "}
                                                            <img
                                                                className="userInterface-quests-logo"
                                                                src={achievementPointImage}
                                                                alt="Quest chest"
                                                            />
                                                            {this.props.mainState.quests.moneyEarned.adventurePointsHeld} AP
                                                        </h5>
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">
                                                                <span>{this.props.renderNumberWithAbbreviations(this.props.mainState.totalMoneyEarned)}
                                                                    /
                                                                    {this.props.renderNumberWithAbbreviations(this.props.mainState.quests.moneyEarned.nextRequired)}
                                                                </span>
                                                            <br/>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group"
                                             aria-label="Horizontal Primary">
                                            <div className="col-12 pl-0">
                                                <div className="media d-flex align-items-center push">
                                                    <div className="media-body text-center mr-2">
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Use your active skills{" "}
                                                            {this.props.mainState.quests.skillsUsed.nextRequired.toLocaleString()}{" "}
                                                            times.
                                                        </h5>
                                                        <h5 className="font-w600 mb-2 font-size-lg text-white">
                                                            {this.props.mainState.achievementPointImage}{" "}
                                                            <img
                                                                className="userInterface-quests-logo"
                                                                src={achievementPointImage}
                                                                alt="Quest chest"
                                                            />
                                                            {this.props.mainState.quests.skillsUsed.adventurePointsHeld} AP
                                                        </h5>
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">
                                                                <span>{this.props.mainState.totalSkillsUsed.toLocaleString()}/
                                                                    {this.props.mainState.quests.skillsUsed.nextRequired.toLocaleString()}
                                                                </span>
                                                            <br/>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group"
                                             aria-label="Horizontal Primary">
                                            <div className="col-12 pl-0">
                                                <div className="media d-flex align-items-center push">
                                                    <div className="media-body text-center mr-2">
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">
                                                            Heal yourself with potions{" "}
                                                            {this.props.mainState.quests.timesHealed.nextRequired.toLocaleString()}{" "}
                                                            times.
                                                        </h5>
                                                        <h5 className="font-w600 mb-2 font-size-lg text-white">
                                                            {this.props.mainState.achievementPointImage}{" "}
                                                            <img
                                                                className="userInterface-quests-logo"
                                                                src={achievementPointImage}
                                                                alt="Quest chest"
                                                            />
                                                            {this.props.mainState.quests.timesHealed.adventurePointsHeld} AP
                                                        </h5>
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">
                                                                <span>
                                                                    {this.props.mainState.totalTimesHealed.toLocaleString()}/
                                                                    {this.props.mainState.quests.timesHealed.nextRequired.toLocaleString()}
                                                                </span>
                                                            <br/>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group"
                                             aria-label="Horizontal Primary">
                                            <div className="col-12 pl-0">
                                                <div className="media d-flex align-items-center push">
                                                    <div className="media-body text-center mr-2">
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">
                                                            Kill{" "}
                                                            {this.props.mainState.quests.enemiesKilled.nextRequired.toLocaleString()}{" "}
                                                            enemies.
                                                        </h5>
                                                        <h5 className="font-w600 mb-2 font-size-lg text-white">
                                                            {this.props.mainState.achievementPointImage}{" "}
                                                            <img
                                                                className="userInterface-quests-logo"
                                                                src={achievementPointImage}
                                                                alt="Quest chest"
                                                            />
                                                            {this.props.mainState.quests.enemiesKilled.adventurePointsHeld} AP
                                                        </h5>
                                                        <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">
                                                                <span>
                                                                    {this.props.mainState.totalEnemiesKilled.toLocaleString()}/
                                                                    {this.props.mainState.quests.enemiesKilled.nextRequired.toLocaleString()}
                                                                </span>
                                                            <br/>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Quests;
