import React, { Component } from "react";

class JustComponent extends Component {
    state = {
        name: "",
        sureName: ""
    };

    onHendleChange = e => this.setState({ name: e.target.value })

    onHendleChangeSureName = e => this.setState({ sureName: e.target.value })

    sendDataToMainState = () => {
        const { name, sureName } = this.state;
        this.props.onPost(name, sureName);
        this.setState({
            name: "",
            sureName: ""
        });
    };

    render() {
        // const {onPost} = this.props.bind(this)
        const { name, sureName } = this.state;
        return (
            <div>
                <div>
                    <input
                        onChange={this.onHendleChange}
                        type="text"
                        placeholder="Name"
                        value={name}
                    />
               
                    <input
                        onChange={this.onHendleChangeSureName}
                        type="text"
                        placeholder="Surename"
                        value={sureName}
                    />
                    <input type="button" onClick={this.sendDataToMainState} value="Log In"/>
                    <input type="button" onClick={()=>this.props.cleanAll()} value="Clean All"/>
                </div>
                {/* <button onClick={this.sendDataToMainState}>Log</button> */}
                {/* <button onClick={()=>this.props.cleanAll()}>Clean All</button> */}
            </div>
        );
    }
}

export { JustComponent };
