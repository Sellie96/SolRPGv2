import React, {Component} from "react";
/* [IMG] Player */
import 'bootstrap/dist/css/bootstrap.min.css';

/* [IMG] Inventory, resources */

class HomeScreen extends Component {

    render() {
        return (
            <div className="homeScreen">
                <div className="row no-gutters">
                    <div
                        className="hero-static col-xl-4 d-xl-flex flex-column justify-content-center bg-black-75">
                        <div className="p-4 p-xl-5 flex-grow-1 d-flex align-items-center">
                            <div className="w-100 text-center">
                                <h1>
                                    Sol RPG
                                </h1>
                                <h3 className="font-w600 text-danger">
                                    Sol RPG is still in beta stage.
                                </h3>
                                <h3 className="font-size-sm font-w400 text-white-75">
                                    What does this mean? Sol RPG is still in early development stages this means that new content
                                    and changes could happen at any time. This potentially could break the game and or cause you to lose<br/><br/>
                                    data and progress. By continuing you understand these risks and wish to support the ongoing development of the game.
                                    <br/><br/>
                                    Please be sure to backup your locally saved files at regular intervals to avoid loss on deleting local files.
                                </h3>
                                <h3 className="font-size-sm font-w500 text-info mb-5">
                                    <a href="#" data-toggle="modal" data-target="#modal-roadmap">Click here to see the development Roadmap</a>
                                </h3>
                            </div>
                        </div>
                        <div className="p-4 pt-1 pb-1 d-xl-flex font-size-sm text-center">
                            <div className="col-12 font-size-sm font-w400 text-white-75 mb-2">
                                <h5 className="font-w400 font-size-sm mb-0 text-info d-none d-lg-inline">
                                    <span
                                        className="spinner-border spinner-border-sm text-info mr-2 cloud-connection-status-spinner d-none"
                                        role="status"/>
                                </h5><br/><br/>
                                <button role="button" className="btn-alt-success m-1 d-none btn-cloud-sign-in-back"><i
                                    className="fa fa-fw fa-sign-out-alt mr-1"/> Back to Character
                                    Selection
                                </button>
                                <br/>
                                <button role="button"
                                        className="btn btn-lg btn-alt-info m-1 d-none btn-cloud-manage"
                                        onClick="changePageCharacterSelection(7);"><i
                                    className="fa fa-fw fa-user-cog mr-1 opacity-50"/> Manage Account
                                </button>
                                <button role="button"
                                        className="btn btn-lg btn-alt-danger m-1 d-none btn-cloud-sign-out"><i
                                    className="fa fa-fw fa-sign-out-alt mr-1 opacity-50"/> Logout
                                </button>
                                <button role="button"
                                        className="btn-primary btn-lg btn-alt-success m-1 btn-cloud-sign-in"
                                        onClick={() => {
                                            this.props.mainState.isGamePaused = false;
                                            this.props.mainState.isLoggedIn = true
                                        }}><i
                                    className="fa fa-fw fa-sign-in-alt mr-1 opacity-50"/> Play Game
                                </button>
                            </div>
                        </div>
                        <div
                            className="p-4 pt-1 pb-1 d-xl-flex justify-content-between align-items-center font-size-sm">
                            <p className="font-w500 text-white-50 mb-0"><strong>Sol RPG</strong> © <span
                                data-toggle="year-copy" className="js-year-copy-enabled">2021</span></p>
                            <ul className="list list-inline mb-0 py-2">
                                <li className="list-inline-item">
                                    <a className="font-w500" href="#" data-toggle="modal" data-target="#modal-privacy">Privacy
                                        Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="hero-alt col-xl-8 d-flex flex-column align-items-center bg-black-50">
                        <div className="px-1 pt-3 w-100 flex-grow-1 d-flex align-items-center">
                            <div className="w-100 align-content-center" id="character-selection-page-0">
                                <div className="row no-gutters justify-content-center">
                                    <div className="col-12 col-md-8" id="character-selection-container">
                                        <div className="mb-3">
                                            <h1 className="font-w700 mb-1 text-black">Select your Character</h1>
                                        </div>
                                        <div className="bg-black-75 btn-group mt-1 mb-1 w-100 " role="group"
                                             aria-label="Horizontal Primary">
                                            <button type="button" className="btn btn-lg btn-gamemode-standard"
                                                    onClick={() => {
                                                        this.props.mainState.isLoggedIn = true;
                                                        this.props.mainState.isGamePaused = false
                                                    }}>
                                                <div className="col-12 pl-0">
                                                    <div className="media d-flex align-items-center push">
                                                        <div className="media-body text-center mr-2">

                                                            <h5 className="font-w600 mb-1 pt-2 font-size-sm text-warning">Local
                                                                Character</h5>
                                                            <h5 className="font-w600 mb-2 font-size-lg text-white">Knight</h5>
                                                            <div role="separator" className="dropdown-divider"></div>
                                                            <h5 className="font-w400 font-size-sm mb-0 text-white">
                                                                <span>Total Level: {this.props.mainState.playerLevel}</span>
                                                                <br/>
                                                                Gold: {this.props.mainState.coins}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 pl-0">
                                                        <h5 className="font-w400 font-size-sm mb-0 text-danger text-center">
                                                            Not currently fighting
                                                        </h5>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="p-4 pt-1 pb-1 d-xl-flex font-size-sm text-center">
                                            <div className="col-12 font-size-sm font-w400 text-white-75 mb-2">
                                                <h5 className="font-w400 font-size-sm mb-0 text-info d-none d-lg-inline">
                                    <span
                                        className="spinner-border spinner-border-sm text-info mr-2 cloud-connection-status-spinner d-none"
                                        role="status"/>
                                                </h5><br/><br/>
                                                <button role="button"
                                                        className="btn-alt-success m-1 d-none btn-cloud-sign-in-back"><i
                                                    className="fa fa-fw fa-sign-out-alt mr-1"/> Back to Character
                                                    Selection
                                                </button>
                                                <br/>
                                                <button role="button"
                                                        className="btn btn-lg btn-alt-info m-1 d-none btn-cloud-manage">
                                                    <i
                                                        className="fa fa-fw fa-user-cog mr-1 opacity-50"/> Manage
                                                    Account
                                                </button>
                                                <button role="button"
                                                        className="btn btn-lg btn-alt-danger m-1 d-none btn-cloud-sign-out">
                                                    <i
                                                        className="fa fa-fw fa-sign-out-alt mr-1 opacity-50"/> Logout
                                                </button>
                                                <button role="button"
                                                        className="btn-danger btn-lg btn-alt-success m-1 btn-cloud-sign-in"
                                                        onClick={() => {
                                                            this.props.mainState.isGamePaused = false;
                                                            this.props.mainState.isLoggedIn = true
                                                        }}><i
                                                    className="fa fa-fw fa-sign-in-alt mr-1 opacity-50"/> Create New Character
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

export default HomeScreen;
