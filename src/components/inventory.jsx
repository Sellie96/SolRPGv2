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
            <div className="row">
                <div className="inventory-links gold-border-bottom mobile">
                    <div className="container cbk-container container height-100">
                        <div className="align-items-center height-90">
                            <div className="align-items-center">
                                <a className="nav-link-cbk"
                                   onClick={this.props.fetchLeftMenuSettingSelection}>Inventory</a>
                                <p style={{color: "white"}}>
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
                                <a className="nav-link-cbk"
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
                                </a>
                                <span style={{color: "white"}}> {this.props.mainState.inventory.length} / 48 </span>
                            </div>
                            <div className="justify-content-center logo-spacer">
                            </div>
                            <div className="justify-content-center logo-spacer">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inventoryDiv col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            {this.props.mainState.inventory != null ? (
                                this.props.mainState.inventory.map(inventory => (
                                <div className="InventorySlot">
                                    <img
                                        draggable="false"
                                        alt="relics"
                                        className="InventorySlot"
                                        src={inventSlot}
                                    />
                                    <div>
                                        <InventorySlot
                                            className="btn btn-dark inventorySlot-button"
                                            mainState={this.props.mainState}
                                            itemObject={inventory}
                                            slot={inventory}
                                            toggleItemEquippedState={this.props.toggleItemEquippedState}
                                            playerSellItem={this.props.playerSellItem}
                                            playerSellAllUnequippedItems={this.props.playerSellAllUnequippedItems}
                                            renderNumberWithAbbreviations={this.props.renderNumberWithAbbreviations}
                                        />
                                    </div>
                                </div>
                            ))) : (
                                <div>
                                    <img
                                        draggable="false"
                                        alt="relics"
                                        className="InventorySlot"
                                        src={inventSlot}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inventory;
