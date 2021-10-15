import React, {Component} from 'react'
import {Tooltip} from "react-tippy";
import resourceOneImage from "../../../img/resource_1.png";
import resourceTwoImage from "../../../img/resource_2.png";
import resourceThreeImage from "../../../img/resource_3.png";

class Resources extends Component {

    render() {
        return (
            <div id="userInterface-resources-div">
                <row>
                    <div>
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
                    <div>
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
                    <div>
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
                </row>
            </div>
        )
    }

}

export default Resources