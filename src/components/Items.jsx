import React, {Component} from "react";



class Items extends Component {
    stageNumber = stageNumber => {
        this.props.mainState.stageCurrent = stageNumber;
    };

    render() {
        return (
            <div>
            </div>

        );
    }

    static stageNumber(stageNumber) {

    }
}

export default (Items);
