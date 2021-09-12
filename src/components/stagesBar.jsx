import React, {Component} from "react";

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


class StagesBar extends Component {
    stageNumber = stageNumber => {
        this.props.mainState.stageCurrent = stageNumber;
    };

    render() {
        return (
            <div>
                <div>
                    <Navbar bg="dark" expand="xl">
                        <Container className="float-right">
                            <Navbar.Brand href="#home"></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Stuff</Nav.Link>
                                    <NavDropdown title="Fight Monsters" id="basic-nav-dropdown">
                                        <NavDropdown title="Food Factory" id="basic-nav-dropdown2">
                                            <NavDropdown.Item onClick={() => {this.stageNumber(0)}}>Potion Master</NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(6)}}>Goblin Archer</NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(12)}}>Hobgoblin</NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(18)}}>Berserker</NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(24)}}>Goblin Chief</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Goblin Village" id="basic-nav-dropdown3">
                                            <NavDropdown.Item onClick={() => {this.stageNumber(1)}}>Goblin <img className="icon" src={goblin}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(2)}}>Goblin Archer <img className="icon" src={goblinArcher}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(3)}}>Hobgoblin <img className="icon" src={goblinElite}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(4)}}>Berserker <img className="icon" src={berserker}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(5)}}>Goblin Chief <img className="icon" src={goblinChief}/></NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Desolate Plains" id="basic-nav-dropdown4">
                                            <NavDropdown.Item onClick={() => {this.stageNumber(7)}}>Sand Crab <img className="icon" src={sandCrab}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(8)}}>Sand Golem <img className="icon" src={sandGolem}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(9)}}>Dust Devil <img className="icon" src={dustDevil}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(10)}}>Sand Beast <img className="icon" src={sandBeast}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(11)}}>Manticore <img className="icon" src={manticore}/></NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Frozen Waste" id="basic-nav-dropdown5">
                                            <NavDropdown.Item onClick={() => {this.stageNumber(13)}}>Ice Giant <img className="icon" src={iceGiant}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(14)}}>Mammoth <img className="icon" src={mammoth}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(15)}}>Frozen Terror <img className="icon" src={frozenTerror}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(16)}}>Frost Troll <img className="icon" src={frostTroll}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(17)}}>Ice Wyvern <img className="icon" src={iceWyvern}/></NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Thorny Forest" id="basic-nav-dropdown6">
                                            <NavDropdown.Item onClick={() => {this.stageNumber(19)}}>TangleRoot <img className="icon" src={tangleroot}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(20)}}>Spider Queen <img className="icon" src={spiderQueen}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(21)}}>Vampire Lord <img className="icon" src={vampireLord}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(22)}}>Chaotic Dragon <img className="icon" src={chaoticDragon}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(23)}}>Carnivorous Plant <img className="icon" src={carnivorousPlant}/></NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Fiery Depths" id="basic-nav-dropdown7">
                                            <NavDropdown.Item onClick={() => {this.stageNumber(25)}}>Fire Spirit <img className="icon" src={fireSpirit}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(26)}}>Fire Serpent <img className="icon" src={fireSerpent}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(27)}}>The Eye <img className="icon" src={theEye}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(28)}}>Lava Golem <img className="icon" src={lavaGolem}/></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => {this.stageNumber(29)}}>Sol, the Protector <img className="icon" src={solTheProtector}/></NavDropdown.Item>
                                        </NavDropdown>
                                    </NavDropdown>
                                    <Nav.Link href="#home">Shop</Nav.Link>
                                    <Nav.Link href="#link">Dungeons</Nav.Link>
                                    <Nav.Link href="#home">Profile</Nav.Link>
                                    <Nav.Link href="#link">Settings</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>

        );
    }

    static stageNumber(stageNumber) {

    }
}

export default (StagesBar);
