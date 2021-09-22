import React, {Component} from "react";
import {Tooltip} from 'react-tippy';
import PlayerVisualDamage from "./playerVisualDamage";
import PetVisualDamage from "./petVisualDamage";
import resourceOneImage from "../img/resource_1.png";
/* [IMG] Player */
import playerImageOne from "../img/player_1.svg";
import {ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";
import resourceTwoImage from "../img/resource_2.png";
import resourceThreeImage from "../img/resource_3.png";

class BattleArea extends Component {
    // Drop new coins on the floor
    renderCoinDrop = () => {
        // If the coins have not already been collected
        return !this.props.mainState.isCoinCollected
            ? // Animate them so that they drop down from the enemy image
            "userInterface-enemy-drop-coin userInterface-enemy-drop-coin-appear"
            : // If the coins have been collected
              // Animate them so that they move towards the inventory
            "userInterface-enemy-drop-coin userInterface-enemy-drop-coin-collect";
    };

    // Drop new coins on the floor
    renderFoodDrop = () => {
        // Only when coins have not been collected
        return !this.props.mainState.isFoodCollected
            ? // Animate them so that they drop down from the enemy image
            "userInterface-enemy-drop-food userInterface-enemy-drop-food-appear"
            : // Animate them so that they move towards the inventory
            "userInterface-enemy-drop-food userInterface-enemy-drop-food-collect";
    };

    // Drop new lootbags on the floor
    renderLootBagDrop = () => {
        // Only when lootbags have not been collected
        return !this.props.mainState.isLootBagCollected
            ? // Animate them so that they drop down from the enemy image
            "userInterface-enemy-drop-food userInterface-enemy-drop-food-appear"
            : // Animate them so that they move towards the inventory
            "userInterface-enemy-drop-food userInterface-enemy-drop-food-collect";
    };

    // Drop new equipment on the floor
    renderEquipmentDrop = () => {
        // Only when equipment has not been collected
        return !this.props.mainState.isEquipmentCollected
            ? // Animate them so that they drop down from the enemy image
            "userInterface-enemy-drop-coin userInterface-enemy-drop-coin-appear"
            : // Animate them so that they move towards the inventory
            "userInterface-enemy-drop-coin userInterface-enemy-drop-coin-collect";
    };

    // Create new coins dropped
    generateCoinDrop = () => {
        let coinsToBeRendered = [];
        // All the coins which have not been collected yet (by hovering)
        for (let i = 0; i < this.props.mainState.coinsToBeCollected; i++) {
            // Add a new coin
            coinsToBeRendered.push(
                <img
                    draggable="false"
                    alt="coin"
                    className={this.renderCoinDrop()}
                    src={coinImageOne}
                    onMouseOver={this.props.collectCoinsOnHover}
                />
            );
        }
        return coinsToBeRendered;
    };

    // Create new equipment dropped
    generateEquipmentDrop = () => {
        let equipmentToBeRendered = [];
        if (this.props.mainState.equipmentToBeCollected.weapon.length > 0) {
            // All the equipment which has not been collected yet (by hovering)
            for (let i = 0; i < this.props.mainState.equipmentToBeCollected.weapon.length; i++) {
                // Add a new item
                equipmentToBeRendered.push(
                    <img draggable="false" alt="item" className={this.renderEquipmentDrop()}
                         src={this.props.mainState.equipmentToBeCollected.weapon[i].itemImage}
                         onMouseOver={this.props.collectEquipmentOnHover}
                    />
                );
            }
        }
        if (this.props.mainState.equipmentToBeCollected.body.length > 0) {
            for (let i = 0; i < this.props.mainState.equipmentToBeCollected.body.length; i++) {
                equipmentToBeRendered.push(<img draggable="false" alt="item" className={this.renderEquipmentDrop()} src={this.props.mainState.equipmentToBeCollected.body[i].itemImage} onMouseOver={this.props.collectEquipmentOnHover}/>);
            }
        }
        if (this.props.mainState.equipmentToBeCollected.helmet.length > 0) {
            for (let i = 0; i < this.props.mainState.equipmentToBeCollected.helmet.length; i++) {
                equipmentToBeRendered.push(<img draggable="false" alt="item" className={this.renderEquipmentDrop()} src={this.props.mainState.equipmentToBeCollected.helmet[i].itemImage} onMouseOver={this.props.collectEquipmentOnHover}/>);
            }
        }
        if (this.props.mainState.equipmentToBeCollected.legs.length > 0) {
            for (let i = 0; i < this.props.mainState.equipmentToBeCollected.legs.length; i++) {
                equipmentToBeRendered.push(<img draggable="false" alt="item" className={this.renderEquipmentDrop()} src={this.props.mainState.equipmentToBeCollected.legs[i].itemImage} onMouseOver={this.props.collectEquipmentOnHover}/>);
            }
        }
        if (this.props.mainState.equipmentToBeCollected.gloves.length > 0) {
            for (let i = 0; i < this.props.mainState.equipmentToBeCollected.gloves.length; i++) {
                equipmentToBeRendered.push(<img draggable="false" alt="item" className={this.renderEquipmentDrop()} src={this.props.mainState.equipmentToBeCollected.gloves[i].itemImage} onMouseOver={this.props.collectEquipmentOnHover}/>);
            }
        }
        if (this.props.mainState.equipmentToBeCollected.boots.length > 0) {
            for (let i = 0; i < this.props.mainState.equipmentToBeCollected.boots.length; i++) {
                equipmentToBeRendered.push(<img draggable="false" alt="item" className={this.renderEquipmentDrop()} src={this.props.mainState.equipmentToBeCollected.boots[i].itemImage} onMouseOver={this.props.collectEquipmentOnHover}/>);
            }
        }
        if (this.props.mainState.equipmentToBeCollected.cape.length > 0) {
            for (let i = 0; i < this.props.mainState.equipmentToBeCollected.cape.length; i++) {
                equipmentToBeRendered.push(<img draggable="false" alt="item" className={this.renderEquipmentDrop()} src={this.props.mainState.equipmentToBeCollected.cape[i].itemImage} onMouseOver={this.props.collectEquipmentOnHover}/>);
            }
        }
        if (this.props.mainState.equipmentToBeCollected.necklace.length > 0) {
            for (let i = 0; i < this.props.mainState.equipmentToBeCollected.necklace.length; i++) {
                equipmentToBeRendered.push(<img draggable="false" alt="item" className={this.renderEquipmentDrop()} src={this.props.mainState.equipmentToBeCollected.necklace[i].itemImage} onMouseOver={this.props.collectEquipmentOnHover}/>);
            }
        }
        if (this.props.mainState.equipmentToBeCollected.ring.length > 0) {
            for (let i = 0; i < this.props.mainState.equipmentToBeCollected.ring.length; i++) {
                equipmentToBeRendered.push(<img draggable="false" alt="item" className={this.renderEquipmentDrop()} src={this.props.mainState.equipmentToBeCollected.ring[i].itemImage} onMouseOver={this.props.collectEquipmentOnHover}/>);
            }
        }
        return equipmentToBeRendered;
    };

    // Create new food dropped
    generateFoodDrop = () => {
        let foodToBeRendered = [];
        // All the food which has not been collected yet (by hovering)
        for (let i = 0; i < this.props.mainState.foodToBeCollected; i++) {
            // Add a new food
            foodToBeRendered.push(
                <img
                    draggable="false"
                    alt="food"
                    className={this.renderFoodDrop()}
                    src={resourceThreeImage}
                    onMouseOver={this.props.collectFoodOnHover}
                />
            );
        }
        return foodToBeRendered;
    };

    // Create new lootbag dropped
    generateLootBagDrop = () => {
        let lootbagsToBeRendered = [];
        // All the lootbags which have not been collected yet (by hovering)
        for (let i = 0; i < this.props.mainState.lootBagsToBeCollected; i++) {
            // Add a new food
            lootbagsToBeRendered.push(
                <img
                    draggable="false"
                    alt="lootbag"
                    className={this.renderLootBagDrop()}
                    src={resourceTwoImage}
                    onMouseOver={this.props.collectLootBagOnHover}
                />
            );
        }
        return lootbagsToBeRendered;
    };

    // Animate the enemy's image between active and dead
    renderEnemyImageClass = () => {
        let classes = "mx-auto my-auto ";
        classes += this.props.mainState.enemyIsBoss
            ? "userInterface-boss-image "
            : "userInterface-enemy-image ";
        classes += this.props.mainState.enemyHasHealth
            ? "scale scale-click "
            : "userInterface-enemy-image-dead ";
        classes += this.props.mainState.hasPlayerAttacked
            ? "scale scale-attack"
            : "";
        return classes;
    };

    render() {
        const {playerDamageParagraphsToBeRendered} = this.props.mainState;
        const {petDamageParagraphsToBeRendered} = this.props.mainState;
        return (
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div id="userInterface-playerIcon">
                        <div className="container">
                            <div className="background-img">
                                <div className="box">
                                    <div className="content">
                                        <img
                                            alt="player"
                                            draggable="false"
                                            className="userInterface-player-image scale"
                                            src={playerImageOne}
                                            onClick={() => {
                                                this.props.playerHeal();
                                            }}/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="userInterface-player-div">
                        <div id="userInterface-player-paragraph">
                            <p className="heroName">
                                Lvl {this.props.mainState.playerLevel}{" "}
                                {this.props.mainState.playerRankCurrent}
                            </p>
                        </div>
                        <div id="battleArea-progress-playerHealth-div">
                            <p className="mx-auto my-auto battleArea-progress-name">
                                HP: {Math.round(this.props.mainState.playerHealthCurrent)} / {this.props.mainState.playerHealthMax}
                            </p>
                        </div>
                        <ProgressBar
                            variant="success"
                            now={this.props.mainState.playerHealthCurrent}
                            max={this.props.mainState.playerHealthMax}
                        />

                        <div
                            id="battleArea-progress-playerFever-div"
                            data-toggle="tooltip"
                            title="Attack the enemy continously to increase your energy! When at max, you deal up to 20% extra damage."
                        >
                            <p className="mx-auto my-auto battleArea-progress-name">
                                Energy
                            </p>
                        </div>
                        <ProgressBar
                            variant="info"
                            now={this.props.mainState.playerFeverValueCurrent}
                            max={this.props.mainState.playerFeverValueMax}
                        />
                        <div id="battleArea-progress-playerExperience-div">
                            <p className="mx-auto my-auto battleArea-progress-name">
                                XP: {Math.round(this.props.mainState.playerExperienceCurrent)}
                            </p>
                        </div>
                        <ProgressBar
                            variant="warning"
                            now={this.props.mainState.playerExperienceCurrent}
                            max={this.props.mainState.playerExperienceRequired}
                        />
                    </div>
                    <div id="userInterface-resources-div">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-3">
                            <Tooltip
                                title="Relics are obtained randomly by killing enemies; use them to buy special upgrades!"
                                position="bottom"
                                trigger="mouseenter"
                            >
                                <img
                                    draggable="false"
                                    alt="relics"
                                    className="userInterface-player-food"
                                    src={resourceOneImage}
                                />
                            </Tooltip>
                            <br/>
                            <br/>
                            {this.props.mainState.relics}
                        </div>
                        <div className="col-md-3">
                            <Tooltip
                                title="Loot bags are obtained randomly by killing enemies; use them to obtain coins and weapons!"
                                position="bottom"
                                trigger="mouseenter"
                            >
                                <img
                                    draggable="false"
                                    alt="Lootbags"
                                    className="userInterface-player-food"
                                    src={resourceTwoImage}
                                />
                            </Tooltip>
                            <br/>
                            <br/>
                            {this.props.mainState.lootBags}
                        </div>
                        <div className="col-md-3">
                            <Tooltip
                                title="Potions to heal your character (25% of total HP) [Hotkey: H]."
                                position="bottom"
                                trigger="mouseenter"
                            >
                                <img
                                    className="userInterface-player-food"
                                    src={resourceThreeImage}
                                />
                            </Tooltip>
                            <br/>
                            <br/>
                            {this.props.mainState.food}
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div id="userInterface-playerIcon">
                        <div className="container">
                            <div className="background-img">
                                <div className="box">
                                    <div className="content">
                                        <img
                                            alt="enemy"
                                            draggable="false"
                                            className={this.renderEnemyImageClass()}
                                            src={this.props.mainState.enemyImageCurrent}
                                            onClick={() => {
                                                this.props.playerAttack();
                                                this.props.addPlayerDamageRenderingItem();
                                            }}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        {playerDamageParagraphsToBeRendered.map(item => (
                            <PlayerVisualDamage
                                mainState={this.props.mainState}
                                calculateClickDamageAllSources={
                                    this.props.calculateClickDamageAllSources
                                }
                                key={item.id}
                                {...item}
                                onDone={this.props.removePlayerDamageRenderingItem}
                                delay={500}
                                duration={500}
                            />
                        ))}
                    </div>
                    <div
                        id="petVisualDamageContainer-div"
                        onClick={this.addPlayerDamageRenderingItem}
                    >
                        {petDamageParagraphsToBeRendered.map(item => (
                            <PetVisualDamage
                                mainState={this.props.mainState}
                                calculateDamagePerSecondAllSources={
                                    this.props.calculateDamagePerSecondAllSources
                                }
                                key={item.id}
                                {...item}
                                onDone={this.props.removePetDamageRenderingItem}
                                delay={500}
                                duration={500}
                            />
                        ))}
                    </div>
                    <div id="userInterface-player-div">
                        <div id="userInterface-player-paragraph">
                            <p>
                                Lv. {this.props.mainState.enemyLevel}{" "}
                                {this.props.mainState.enemyNameCurrent}
                            </p>
                        </div>
                        <div id="battleArea-progress-playerHealth-div">
                            <p className="mx-auto my-auto battleArea-progress-name">
                                HP: {this.props.mainState.enemyHealthCurrent} / {this.props.mainState.enemyHealthMax}
                            </p>
                        </div>
                        <ProgressBar
                            variant="danger"
                            now={this.props.mainState.enemyHealthCurrent}
                            max={this.props.mainState.enemyHealthMax}
                        />
                        {/* Player visual damage */}
                        {/* Pet visual damage */}

                        <div id="userInterface-enemy-drop-div">
                            <h3>Loot</h3>
                            {this.generateCoinDrop()}
                            {this.generateFoodDrop()}
                            {this.generateLootBagDrop()}
                            {this.generateEquipmentDrop()}
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        );
    }
}

export default BattleArea;
