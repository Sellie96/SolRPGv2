import React, {Component} from "react";
/* [IMG] Inventory, resources */
import inventSlot from "../img/inventSlot.png";
import EquipmentSlot from "./equipmentSlot";

/* 
  The inventory component renders (currently) 2 rows of inventory, each holding 6 items.
  The props passed to each instance of InventorySlot are:
  
    - itemObject => A reference to the object which is in the inventory, which each InventorySlow is rendering
    - slot => A numeric reference used to dynamically give a value to the attributes of Popovers
    - toggleItemEquippedState() => Sets the component's held reference's equipped state ON/OFF
    - playerSellItem() => Remove the inventory item the component is referencing and give its itemValue as coins
*/

class Equipment extends Component {
    render() {
        return (
            <div className="row">
                <div className="equipment-links gold-border-bottom mobile">
                    <div className="container cbk-container container height-100">
                        <div className="d-flex justify-content-between align-items-center height-90">
                            <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                            </div>
                            <div className="d-flex flex-grow-1 justify-content-center logo-spacer">
                                <a className="nav-link-cbk"
                                   onClick={this.props.fetchLeftMenuSettingSelection}>Equipment</a>
                            </div>
                            <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="userInterface-userSettings-backpack-div">
                    {/* Inventory */}
                    <div id="userInterface-inventory-div">
                        <div className="row">
                        <div className="col-md-6" id="userInterface-inventory-money">
                            <div id="userInterface-inventory-money">
                                <div className="col-md-12">
                                        <div className="col-md-12">
                                            <div className="EquipmentSlot">
                                                <img
                                                    draggable="false"
                                                    alt="relics"
                                                    className="EquipmentSlot"
                                                    src={inventSlot}
                                                />
                                                <EquipmentSlot
                                                    className="btn btn-dark inventorySlot-button"
                                                    mainState={this.props.mainState}
                                                    itemObject={this.props.mainState.playerEquipment.cape}
                                                    slot={6}
                                                    toggleItemEquippedState={this.props.toggleItemEquippedState}
                                                    playerSellItem={this.props.playerSellItem}
                                                    playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                                    renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                                />
                                            </div>
                                            <div className="EquipmentSlot">
                                                <img
                                                    draggable="false"
                                                    alt="relics"
                                                    className="EquipmentSlot"
                                                    src={inventSlot}
                                                />
                                                <EquipmentSlot
                                                    className="btn btn-dark inventorySlot-button"
                                                    mainState={this.props.mainState}
                                                    itemObject={this.props.mainState.playerEquipment.helmet}
                                                    slot={2}
                                                    toggleItemEquippedState={this.props.toggleItemEquippedState}
                                                    playerSellItem={this.props.playerSellItem}
                                                    playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                                    renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                                />
                                            </div>
                                            <div className="EquipmentSlot">
                                                <img
                                                    draggable="false"
                                                    alt="relics"
                                                    className="EquipmentSlot"
                                                    src={inventSlot}
                                                />
                                                <EquipmentSlot
                                                    className="btn btn-dark inventorySlot-button"
                                                    mainState={this.props.mainState}
                                                    itemObject={this.props.mainState.playerEquipment.necklace}
                                                    slot={7}
                                                    toggleItemEquippedState={this.props.toggleItemEquippedState}
                                                    playerSellItem={this.props.playerSellItem}
                                                    playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                                    renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="EquipmentSlot">
                                                <img
                                                    draggable="false"
                                                    alt="relics"
                                                    className="EquipmentSlot"
                                                    src={inventSlot}
                                                />
                                                <EquipmentSlot
                                                    className="btn btn-dark inventorySlot-button"
                                                    mainState={this.props.mainState}
                                                    itemObject={this.props.mainState.playerEquipment.weapon}
                                                    slot={0}
                                                    toggleItemEquippedState={this.props.toggleItemEquippedState}
                                                    playerSellItem={this.props.playerSellItem}
                                                    playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                                    renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                                />
                                            </div>
                                            <div className="EquipmentSlot">
                                                <img
                                                    draggable="false"
                                                    alt="relics"
                                                    className="EquipmentSlot"
                                                    src={inventSlot}
                                                />
                                                <EquipmentSlot
                                                    className="btn btn-dark inventorySlot-button"
                                                    mainState={this.props.mainState}
                                                    itemObject={this.props.mainState.playerEquipment.body}
                                                    slot={1}
                                                    toggleItemEquippedState={this.props.toggleItemEquippedState}
                                                    playerSellItem={this.props.playerSellItem}
                                                    playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                                    renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                                />
                                            </div>
                                            <div className="EquipmentSlot">
                                                <img
                                                    draggable="false"
                                                    alt="relics"
                                                    className="EquipmentSlot"
                                                    src={inventSlot}
                                                />
                                                <EquipmentSlot
                                                    className="btn btn-dark inventorySlot-button"
                                                    mainState={this.props.mainState}
                                                    toggleItemEquippedState={this.props.toggleItemEquippedState}
                                                    playerSellItem={this.props.playerSellItem}
                                                    playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                                    renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="EquipmentSlot">
                                                <img
                                                    draggable="false"
                                                    alt="relics"
                                                    className="EquipmentSlot"
                                                    src={inventSlot}
                                                />
                                                <EquipmentSlot
                                                    className="btn btn-dark inventorySlot-button"
                                                    mainState={this.props.mainState}
                                                    itemObject={this.props.mainState.playerEquipment.legs}
                                                    slot={3}
                                                    toggleItemEquippedState={this.props.toggleItemEquippedState}
                                                    playerSellItem={this.props.playerSellItem}
                                                    playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                                    renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="EquipmentSlot">
                                                <img
                                                    draggable="false"
                                                    alt="relics"
                                                    className="EquipmentSlot"
                                                    src={inventSlot}
                                                />
                                                <EquipmentSlot
                                                    className="btn btn-dark inventorySlot-button"
                                                    mainState={this.props.mainState}
                                                    itemObject={this.props.mainState.playerEquipment.gloves}
                                                    slot={5}
                                                    toggleItemEquippedState={this.props.toggleItemEquippedState}
                                                    playerSellItem={this.props.playerSellItem}
                                                    playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                                    renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                                />
                                            </div>
                                            <div className="EquipmentSlot">
                                                <img
                                                    draggable="false"
                                                    alt="relics"
                                                    className="EquipmentSlot"
                                                    src={inventSlot}
                                                />
                                                <EquipmentSlot
                                                    className="btn btn-dark inventorySlot-button"
                                                    mainState={this.props.mainState}
                                                    itemObject={this.props.mainState.playerEquipment.boots}
                                                    slot={4}
                                                    toggleItemEquippedState={this.props.toggleItemEquippedState}
                                                    playerSellItem={this.props.playerSellItem}
                                                    playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                                    renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                                />
                                            </div>
                                            <div className="EquipmentSlot">
                                                <img
                                                    draggable="false"
                                                    alt="relics"
                                                    className="EquipmentSlot"
                                                    src={inventSlot}
                                                />
                                                <EquipmentSlot
                                                    className="btn btn-dark inventorySlot-button"
                                                    mainState={this.props.mainState}
                                                    itemObject={this.props.mainState.playerEquipment.ring}
                                                    slot={8}
                                                    toggleItemEquippedState={this.props.toggleItemEquippedState}
                                                    playerSellItem={this.props.playerSellItem}
                                                    playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                                    renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                                />
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <br/>
                            <strong>
                               Max Damage: {Math.round(this.props.calculateClickDamageAllSources())}
                            </strong>
                            <br/>
                            <br/>
                            <strong>
                             Max Crit Damage: {Math.round( this.props.calculateCriticalMultiplierAllSources() * this.props.calculateClickDamageAllSources() )}
                            </strong>
                            <br/>
                            <br/>
                            <strong>
                                Armour: {this.props.mainState.playerArmour + this.props.mainState.equipmentBonuses.bonusArmour}
                            </strong>
                            <br/>
                            <br/>
                            <strong>
                                Crit Chance: {(this.props.calculateCriticalChanceAllSources() * 100).toFixed(1)}%
                            </strong>
                            <br/>
                            <br/>
                            <strong>
                                Double Attack: {(this.props.calculateDoubleAttackChanceAllSources()* 100).toFixed(1)}%
                            </strong>
                            <br/>
                            <br/>
                            <strong>
                                XP Multiplier: {(this.props.calculateExperienceMultiplierAllSources() * 100).toFixed(0)}%
                            </strong>
                            <br/>
                            <br/>
                            <strong>
                                Gold Multiplier: {(this.props.calculateCoinDropMultiplierAllSources() * 100).toFixed(0)}%
                            </strong>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Equipment;