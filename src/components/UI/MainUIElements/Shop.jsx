import React, {Component} from "react";
/* [IMG] Player */
import 'bootstrap/dist/css/bootstrap.min.css';

/* [IMG] Inventory, resources */

class Shop extends Component {

    render() {
        return (
            <div className="homeScreen">
                <div className="row no-gutters">
                    <div
                        className="hero-static col-xl-4 d-xl-flex flex-column justify-content-center bg-black-75">
                        <div className="p-4 p-xl-5 flex-grow-1 d-flex align-items-center">
                            <div className="w-100 text-center">
                                <h1>
                                    Store
                                </h1>
                                <h3 className="font-w600 text-danger">
                                    Welcome Adventurer to the town store.
                                </h3>
                                <h3 className="font-size-sm font-w400 text-white-75">
                                   Here you will be able to spend that hard earned gold to further your adventuring career
                                </h3>
                            </div>
                        </div>
                        <div className="p-4 pt-1 pb-1 d-xl-flex font-size-sm text-center">
                            <div className="col-12 font-size-sm font-w400 text-white-75 mb-2">
                                <button role="button"
                                        className="btn-primary btn-lg btn-alt-success m-1 btn-cloud-sign-in"
                                        onClick={() => {
                                            this.props.mainState.openShop = false;
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
                                        <div className="mb-3">
                                            <h1 className="font-w700 mb-1 text-black">Items for Sale</h1>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group" aria-label="Horizontal Primary">
                                            <button type="button" className="btn btn-lg btn-gamemode-standard"
                                                    onClick={() => {
                                                        this.props.mainState.openShop = false;
                                                        this.props.mainState.isGamePaused = false;
                                                    }}>
                                                <div className="col-12 pl-0">
                                                    <div className="media d-flex align-items-center push">
                                                        <div className="media-body text-center mr-2">
                                                            <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Player Consumable</h5>
                                                            <h5 className="font-w600 mb-2 font-size-lg text-white">Health Potion</h5>
                                                            <h5 className="font-w400 font-size-sm mb-0 text-white">
                                                                <span>Heal a percentage of life points</span>
                                                                <br/>
                                                                <span> <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Cost: 10k</h5> </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group" aria-label="Horizontal Primary">
                                            <button type="button" className="btn btn-lg btn-gamemode-standard"
                                                    onClick={() => {
                                                        this.props.mainState.openShop = false;
                                                        this.props.mainState.isGamePaused = false;
                                                    }}>
                                                <div className="col-12 pl-0">
                                                    <div className="media d-flex align-items-center push">
                                                        <div className="media-body text-center mr-2">
                                                            <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Player Consumable</h5>
                                                            <h5 className="font-w600 mb-2 font-size-lg text-white">Skill Potion</h5>
                                                            <h5 className="font-w400 font-size-sm mb-0 text-white">
                                                                <span>Refreshes cooldown of abilities</span>
                                                                <br/>
                                                                <span> <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Cost: 1m</h5> </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group" aria-label="Horizontal Primary">
                                            <button type="button" className="btn btn-lg btn-gamemode-standard"
                                                    onClick={() => {
                                                        this.props.mainState.openShop = false;
                                                        this.props.mainState.isGamePaused = false;
                                                    }}>
                                                <div className="col-12 pl-0">
                                                    <div className="media d-flex align-items-center push">
                                                        <div className="media-body text-center mr-2">
                                                            <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Player Buff</h5>
                                                            <h5 className="font-w600 mb-2 font-size-lg text-white">Auto Eat</h5>
                                                            <h5 className="font-w400 font-size-sm mb-0 text-white">
                                                                <span>Automatically consume potions when below 10% health</span>
                                                                <br/>
                                                                <span> <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Cost: 1m</h5> </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group" aria-label="Horizontal Primary">
                                            <button type="button" className="btn btn-lg btn-gamemode-standard"
                                                    onClick={() => {
                                                        this.props.mainState.openShop = false;
                                                        this.props.mainState.isGamePaused = false;
                                                    }}>
                                                <div className="col-12 pl-0">
                                                    <div className="media d-flex align-items-center push">
                                                        <div className="media-body text-center mr-2">
                                                            <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Player Buff</h5>
                                                            <h5 className="font-w600 mb-2 font-size-lg text-white">Goblin Scrapper</h5>
                                                            <h5 className="font-w400 font-size-sm mb-0 text-white">
                                                                <span>Goblin worker to sell off all those uncommon items for you</span>
                                                                <br/>
                                                                <span> <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Cost: 5m</h5> </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group" aria-label="Horizontal Primary">
                                            <button type="button" className="btn btn-lg btn-gamemode-standard"
                                                    onClick={() => {
                                                        this.props.mainState.openShop = false;
                                                        this.props.mainState.isGamePaused = false;
                                                    }}>
                                                <div className="col-12 pl-0">
                                                    <div className="media d-flex align-items-center push">
                                                        <div className="media-body text-center mr-2">
                                                            <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Player Buff</h5>
                                                            <h5 className="font-w600 mb-2 font-size-lg text-white">Ability User</h5>
                                                            <h5 className="font-w400 font-size-sm mb-0 text-white">
                                                                <span>Automatically use abilities on cooldown</span>
                                                                <br/>
                                                                <span> <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Cost: 10m (Requires 10,000 skills used)</h5> </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="p-4 pt-1 pb-1 d-xl-flex font-size-sm text-center">
                                            <div className="col-12 font-size-sm font-w400 text-white-75 mb-2">
                                                <button role="button"
                                                        className="btn-danger btn-lg btn-alt-success m-1 btn-cloud-sign-in"
                                                        onClick={() => {
                                                            this.props.mainState.openShop = false;
                                                            this.props.mainState.isGamePaused = false;
                                                        }}><i
                                                    className="fa fa-fw fa-sign-in-alt mr-1 opacity-50"/> Back to Fighting
                                                </button>
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

export default Shop;
