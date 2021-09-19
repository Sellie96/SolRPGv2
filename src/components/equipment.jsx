import React, {Component} from "react";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";
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
            <div id="userInterface-userSettings-backpack-div">
                {/* Inventory */}
                <div id="userInterface-inventory-div">
                    <h3>Equipment</h3>
                    <p>
                        <img
                            draggable="false"
                            alt="coin"
                            id="userInterface-inventory-money-img"
                            src={coinImageOne}
                        />
                        {this.props.renderNumberWithAbbreviations(
                            this.props.mainState.coins
                        )}
                    </p>
                    <row>
                        <div className="col-md-12" id="userInterface-inventory-money">
                            <div id="userInterface-inventory-money">
                                <div className="col-md-12">
                                    <div className="col-md-12">
                                        <div className="InventorySlot">
                                            <img
                                                draggable="false"
                                                alt="relics"
                                                className="InventorySlot"
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
                                        <div className="InventorySlot">
                                            <img
                                                draggable="false"
                                                alt="relics"
                                                className="InventorySlot"
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
                                        <div className="InventorySlot">
                                            <img
                                                draggable="false"
                                                alt="relics"
                                                className="InventorySlot"
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
                                        <div className="InventorySlot">
                                            <img
                                                draggable="false"
                                                alt="relics"
                                                className="InventorySlot"
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
                                        <div className="InventorySlot">
                                            <img
                                                draggable="false"
                                                alt="relics"
                                                className="InventorySlot"
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
                                        <div className="InventorySlot">
                                            <img
                                                draggable="false"
                                                alt="relics"
                                                className="InventorySlot"
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
                                        <div className="InventorySlot">
                                            <img
                                                draggable="false"
                                                alt="relics"
                                                className="InventorySlot"
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
                                        <div className="InventorySlot">
                                            <img
                                                draggable="false"
                                                alt="relics"
                                                className="InventorySlot"
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
                                        <div className="InventorySlot">
                                            <img
                                                draggable="false"
                                                alt="relics"
                                                className="InventorySlot"
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
                                        <div className="InventorySlot">
                                            <img
                                                draggable="false"
                                                alt="relics"
                                                className="InventorySlot"
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
                    </row>
                </div>
            </div>
        );
    }
}

export default Equipment;