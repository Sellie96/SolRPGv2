import React, {Component} from "react";
import InventorySlot from "./inventorySlot";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";
import inventSlot from "../img/inventSlot.png";

/* 
  The inventory component renders (currently) 2 rows of inventory, each holding 6 items.
  The props passed to each instance of InventorySlot are:
  
    - itemObject => A reference to the object which is in the inventory, which each InventorySlow is rendering
    - slot => A numeric reference used to dynamically give a value to the attributes of Popovers
    - toggleItemEquippedState() => Sets the component's held reference's equipped state ON/OFF
    - playerSellItem() => Remove the inventory item the component is referencing and give its itemValue as coins
*/

class Inventory extends Component {
    render() {
        return (
            <div id="userInterface-userSettings-backpack-div">
                {/* Inventory */}
                <div id="userInterface-inventory-div">
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

                    <h3>Inventory</h3>

                    <button
                        className="btn btn-dark"
                        onClick={() => {
                            this.setState({
                                popoverOpenByHover: false,
                                popoverOpenByClick: false
                            });
                            this.props.toggleInventoryPopoversRendering(false);
                            setTimeout(() => {
                                this.props.toggleInventoryPopoversRendering(false);
                            }, 100);
                            this.props.playerSellAllUnequippedItems();
                        }}
                    >
                        Sell All Unequipped
                    </button>

                    <div className="inventoryDiv">
                        <table>
                            <tbody>
                            <tr>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            className="btn btn-dark inventorySlot-button"
                                            mainState={this.props.mainState}
                                            itemObject={this.props.mainState.inventory[0]}
                                            slot={0}
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                            renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                        />
                                    </div>

                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={1}
                                            itemObject={this.props.mainState.inventory[1]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={2}
                                            itemObject={this.props.mainState.inventory[2]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={3}
                                            itemObject={this.props.mainState.inventory[3]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={4}
                                            itemObject={this.props.mainState.inventory[4]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={5}
                                            itemObject={this.props.mainState.inventory[5]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={6}
                                            itemObject={this.props.mainState.inventory[6]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={7}
                                            itemObject={this.props.mainState.inventory[7]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={8}
                                            itemObject={this.props.mainState.inventory[8]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={9}
                                            itemObject={this.props.mainState.inventory[9]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={10}
                                            itemObject={this.props.mainState.inventory[10]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={11}
                                            itemObject={this.props.mainState.inventory[11]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={12}
                                            itemObject={this.props.mainState.inventory[12]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={13}
                                            itemObject={this.props.mainState.inventory[13]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={14}
                                            itemObject={this.props.mainState.inventory[14]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={15}
                                            itemObject={this.props.mainState.inventory[15]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={16}
                                            itemObject={this.props.mainState.inventory[16]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={17}
                                            itemObject={this.props.mainState.inventory[17]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={18}
                                            itemObject={this.props.mainState.inventory[18]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={19}
                                            itemObject={this.props.mainState.inventory[19]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={20}
                                            itemObject={this.props.mainState.inventory[20]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={21}
                                            itemObject={this.props.mainState.inventory[21]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={22}
                                            itemObject={this.props.mainState.inventory[22]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={23}
                                            itemObject={this.props.mainState.inventory[23]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={24}
                                            itemObject={this.props.mainState.inventory[24]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={25}
                                            itemObject={this.props.mainState.inventory[25]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={26}
                                            itemObject={this.props.mainState.inventory[26]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={27}
                                            itemObject={this.props.mainState.inventory[27]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={28}
                                            itemObject={this.props.mainState.inventory[28]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                                <td className="TableStyle">
                                    <div className="InventorySlot">
                                        <img
                                            draggable="false"
                                            alt="relics"
                                            className="InventorySlot"
                                            src={inventSlot}
                                        />
                                        <InventorySlot
                                            mainState={this.props.mainState}
                                            slot={29}
                                            itemObject={this.props.mainState.inventory[29]}
                                            toggleInventoryPopoversRendering={
                                                this.props.toggleInventoryPopoversRendering
                                            }
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={
                                                this.props.playerSellAllUnequippedItems
                                            }
                                            renderNumberWithAbbreviations={
                                                this.props.renderNumberWithAbbreviations
                                            }
                                        />
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <span className="float-right"> {this.props.mainState.inventory.length} / 30 </span>
                </div>
            </div>
        );
    }
}

export default Inventory;
