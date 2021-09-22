import React, {Component} from "react";
import userinterface from "./userinterface"

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
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";


class StagesBar extends Component {
    stageNumber = stageNumber => {
        this.props.mainState.stageCurrent = stageNumber;
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="far-top">
                        <div className="container cbk-container height-100">
                            <div className="d-flex justify-content-between align-items-center height-100">
                                <div className="d-flex mr-auto justify-content-start align-items-center mobile">
                                    <span>Follow Us: </span>
                                    <div className="icon-links ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <a href="" target="_blank">
                                                <path fill="#7f8693" className="bi bi-twitter"
                                                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                            </a>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <a href="" target="_blank">
                                                <path fill="#7f8693" className="bi bi-facebook"
                                                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                            </a>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                                            <a href="http://discord.gg/solrpg" target="_blank">
                                                <path fill="#7f8693" className="bi bi-discord"
                                                      d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"></path>
                                                <path fill="#7f8693" className="bi bi-discord"
                                                      d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"></path>
                                            </a>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                            <a href="" target="_blank">
                                                <path fill="#7f8693" className="bi bi-telegram"
                                                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                                            </a>
                                        </svg>
                                    </div>
                                </div>
                                <a className="d-flex justify-content-center" href="index.html">
                                    <img className="cbk-logo cst-pointer animate__animated animate__fadeInDown" src="./assets/cbk-logo.png" alt=""/>
                                </a>
                                <div className="d-flex ml-auto justify-content-end mobile">
                                    Game Version: V0.3.0
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="nav-links gold-border-bottom mobile">
                        <div className="container cbk-container container height-100">
                            <div className="d-flex justify-content-between align-items-center height-90">
                                <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                                    <a href="shop.html" className="nav-link-cbk">Shop </a>
                                    <a href="dungeons.html" className="nav-link-cbk position-r-top">Dungeons</a>
                                    <a href="quests.html" className="nav-link-cbk pr-5 position-r-top">Quests </a>
                                </div>
                                <div className="d-flex flex-grow-1 justify-content-center logo-spacer">
                                    <Dropdown bg="secondary">
                                        <Dropdown.Toggle className="super-colors" id="dropdown-custom-1">FightMonsters</Dropdown.Toggle>
                                        <Dropdown.Menu className="super-colors" id="ddown" title="Dropdown">
                                            <Dropdown drop="right" bg="secondary">
                                                <Dropdown.Toggle className="super-colors" id="dropdown-custom-1">Food Storage</Dropdown.Toggle>
                                                <Dropdown.Menu className="super-colors" id="ddown" title="Dropdown">
                                                <Dropdown.Item className="super-colors" onClick={() => {this.stageNumber(0)}}><span style={{color:"white"}}>Potion Master</span></Dropdown.Item>
                                                    <Dropdown.Item className="super-colors" onClick={() => {this.stageNumber(6)}}><span style={{color:"white"}}>Goblin Archer</span></Dropdown.Item>
                                                    <Dropdown.Item className="super-colors" onClick={() => {this.stageNumber(12)}}><span style={{color:"white"}}>Hobgoblin</span></Dropdown.Item>
                                                    <Dropdown.Item className="super-colors" onClick={() => {this.stageNumber(18)}}><span style={{color:"white"}}>Berserker</span></Dropdown.Item>
                                                    <Dropdown.Item className="super-colors" onClick={() => {this.stageNumber(24)}}><span style={{color:"white"}}>Goblin Chief</span></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown drop="right" bg="secondary">
                                                <Dropdown.Toggle className="super-colors" id="dropdown-custom-1">Goblin Village</Dropdown.Toggle>
                                                <Dropdown.Menu className="super-colors" id="ddown" title="Dropdown">
                                                    <Dropdown.Item onClick={() => {this.stageNumber(1)}}><span style={{color:"white"}}>Goblin</span> <img className="icon" src={goblin}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(2)}}><span style={{color:"white"}}>Goblin Archer</span> <img className="icon" src={goblinArcher}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(3)}}><span style={{color:"white"}}>Hobgoblin</span> <img className="icon" src={goblinElite}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(4)}}><span style={{color:"white"}}>Berserker</span> <img className="icon" src={berserker}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(5)}}><span style={{color:"white"}}>Goblin Chief</span> <img className="icon" src={goblinChief}/></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown drop="right" bg="secondary">
                                                <Dropdown.Toggle className="super-colors" id="dropdown-custom-1">Desolate Plains</Dropdown.Toggle>
                                                <Dropdown.Menu className="super-colors" id="ddown" title="Dropdown">
                                                    <Dropdown.Item onClick={() => {this.stageNumber(7)}}><span style={{color:"white"}}>Sand Crab</span> <img className="icon" src={sandCrab}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(8)}}><span style={{color:"white"}}>Sand Golem</span> <img className="icon" src={sandGolem}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(9)}}><span style={{color:"white"}}>Dust Devil</span> <img className="icon" src={dustDevil}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(10)}}><span style={{color:"white"}}>Sand Beast</span> <img className="icon" src={sandBeast}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(11)}}><span style={{color:"white"}}>Manticore</span> <img className="icon" src={manticore}/></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown drop="right" bg="secondary">
                                                <Dropdown.Toggle className="super-colors" id="dropdown-custom-1">Frozen Wastes</Dropdown.Toggle>
                                                <Dropdown.Menu className="super-colors" id="ddown" title="Dropdown">
                                                    <Dropdown.Item onClick={() => {this.stageNumber(13)}}><span style={{color:"white"}}>Ice Giant</span> <img className="icon" src={iceGiant}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(14)}}><span style={{color:"white"}}>Mammoth</span> <img className="icon" src={mammoth}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(15)}}><span style={{color:"white"}}>Frozen Terror</span> <img className="icon" src={frozenTerror}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(16)}}><span style={{color:"white"}}>Frost Troll</span> <img className="icon" src={frostTroll}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(17)}}><span style={{color:"white"}}>Ice Wyvern</span> <img className="icon" src={iceWyvern}/></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown drop="right" bg="secondary">
                                                <Dropdown.Toggle className="super-colors" id="dropdown-custom-1">Thorny Forest</Dropdown.Toggle>
                                                <Dropdown.Menu className="super-colors" id="ddown" title="Dropdown">
                                                    <Dropdown.Item onClick={() => {this.stageNumber(19)}}><span style={{color:"white"}}>TangleRoot</span> <img className="icon" src={tangleroot}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(20)}}><span style={{color:"white"}}>Spider Queen</span> <img className="icon" src={spiderQueen}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(21)}}><span style={{color:"white"}}>Vampire Lord</span> <img className="icon" src={vampireLord}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(22)}}><span style={{color:"white"}}>Chaotic Dragon</span> <img className="icon" src={chaoticDragon}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(23)}}><span style={{color:"white"}}>Carniv' Plant</span> <img className="icon" src={carnivorousPlant}/></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown drop="right" bg="secondary">
                                                <Dropdown.Toggle className="super-colors" id="dropdown-custom-1">Fiery Depths</Dropdown.Toggle>
                                                <Dropdown.Menu className="super-colors" id="ddown" title="Dropdown">
                                                    <Dropdown.Item onClick={() => {this.stageNumber(25)}}><span style={{color:"white"}}>Fire Spirit</span> <img className="icon" src={fireSpirit}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(26)}}><span style={{color:"white"}}>Fire Serpent</span> <img className="icon" src={fireSerpent}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(27)}}><span style={{color:"white"}}>The Eye</span> <img className="icon" src={theEye}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(28)}}><span style={{color:"white"}}>Lava Golem</span> <img className="icon" src={lavaGolem}/></Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {this.stageNumber(29)}}><span style={{color:"white"}}>Sol</span> <img className="icon" src={solTheProtector}/></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown.Menu>
                                    </Dropdown>{' '}
                                </div>
                                <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                                    <a href="thegame.html" className="nav-link-cbk"> About </a>
                                    <a href="Profile.html" className="nav-link-cbk">Profile </a>
                                    <a href="#Website" className="nav-link-cbk">Website</a>
                                    <a href="https://github.com/Sellie96" className="nav-link-cbk" target="_blank">Github </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    static stageNumber(stageNumber) {

    }
}

export default (StagesBar);
