import React, {Component} from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import * as ReactDOM from "react-dom";

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





class StagesBar extends Component {
    stageNumber = stageNumber => {
        this.props.mainState.stageCurrent = stageNumber;
    };

    closeNav() {
        document.getElementById("Navigator").style.width = "0";
    }

    render() {
        return (
            <div>
                <div className="Navigator" id={"Navigator"}>
                    <ProSidebar className="Navigator">
                        <SidebarHeader>
                            <button className="btn-warning closebtn" onClick={() => {
                                this.closeNav()
                            }}>×
                            </button>
                            <div
                                style={{
                                    padding: '24px',
                                    fontWeight: 'bold',
                                    fontSize: 28,
                                    alignContent: 'center',
                                    letterSpacing: '1px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                Sol Rpg
                            </div>
                        </SidebarHeader>
                        <Menu iconShape="square">
                            <MenuItem>Home</MenuItem>
                            <SubMenu title="Fight Monsters">
                                <SubMenu title="Food Factory">
                                    <MenuItem onClick={() => {
                                        this.stageNumber(0)
                                    }}>Potion Master</MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(6)
                                    }}>Goblin Archer</MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(12)
                                    }}>Hobgoblin</MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(18)
                                    }}>Berserker</MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(24)
                                    }}>Goblin Chief</MenuItem>
                                </SubMenu>
                                <SubMenu title="Goblin Village">
                                    <MenuItem onClick={() => {
                                        this.stageNumber(1)
                                    }}>Goblin <img className="icon" src={goblin}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(2)
                                    }}>Goblin Archer <img className="icon" src={goblinArcher}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(3)
                                    }}>Goblin Elite <img className="icon" src={goblinElite}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(4)
                                    }}>Berserker <img className="icon" src={berserker}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(5)
                                    }}>Goblin Chief <img className="icon" src={goblinChief}></img></MenuItem>
                                </SubMenu>
                                <SubMenu title="Desolate Plains">
                                    <MenuItem onClick={() => {
                                        this.stageNumber(7)
                                    }}>Sand Crab <img className="icon" src={sandCrab}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(8)
                                    }}>Sand Golem <img className="icon" src={sandGolem}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(9)
                                    }}>Dust Devil <img className="icon" src={dustDevil}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(10)
                                    }}>Sand Beast <img className="icon" src={sandBeast}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(11)
                                    }}>Manticore <img className="icon" src={manticore}></img></MenuItem>
                                </SubMenu>
                                <SubMenu title="Frozen Wastes">
                                    <MenuItem onClick={() => {
                                        this.stageNumber(13)
                                    }}>Ice Giant <img className="icon" src={iceGiant}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(14)
                                    }}>Mammoth <img className="icon" src={mammoth}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(15)
                                    }}>Frozen Terror <img className="icon" src={frozenTerror}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(16)
                                    }}>Frost Troll <img className="icon" src={frostTroll}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(17)
                                    }}>Ice Wyvern <img className="icon" src={iceWyvern}></img></MenuItem>
                                </SubMenu>
                                <SubMenu title="Thorny Forest">
                                    <MenuItem onClick={() => {
                                        this.stageNumber(19)
                                    }}>TangleRoot <img className="icon" src={tangleroot}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(20)
                                    }}>Spider Queen <img className="icon" src={spiderQueen}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(21)
                                    }}>Vampire Lord <img className="icon" src={vampireLord}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(22)
                                    }}>Chaotic Dragon <img className="icon" src={chaoticDragon}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(23)
                                    }}>Carnivorous Plant <img className="icon" src={carnivorousPlant}></img></MenuItem>
                                </SubMenu>
                                <SubMenu title="Fiery Depths">
                                    <MenuItem onClick={() => {
                                        this.stageNumber(25)
                                    }}>Fire Spirit <img className="icon" src={fireSpirit}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(26)
                                    }}>Fire Serpent <img className="icon" src={fireSerpent}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(27)
                                    }}>The Eye <img className="icon" src={theEye}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(28)
                                    }}>Lava Golem <img className="icon" src={lavaGolem}></img></MenuItem>
                                    <MenuItem onClick={() => {
                                        this.stageNumber(29)
                                    }}>Sol, the Protector <img className="icon" src={solTheProtector}></img></MenuItem>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu title="Profile">
                            </SubMenu>
                            <SubMenu title="Dungeons">
                            </SubMenu>
                            <SubMenu title="Shop">
                            </SubMenu>
                            <SubMenu title="Contact Us">
                            </SubMenu>
                            <SubMenu title="Settings">
                            </SubMenu>
                        </Menu>
                    </ProSidebar>;
                </div>
            </div>

        );
    }

    static stageNumber(stageNumber) {

    }
}

export default (StagesBar);
