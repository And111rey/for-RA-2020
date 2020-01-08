import React from "react";

const JustComponent = ({ cleanAll, onPost }) => {
    let state = {
        name: "",
        sureName: ""
    };



  

    const { name, sureName } = state;
    const onHendleChange = e => this.setState({ name: e.target.value });

    const onHendleChangeSureName = e =>{
        console.log(state.sureName)
        return {...state, sureName: e.target.value}
        
    }
        

    const sendDataToMainState = () => {
        const { name, sureName } = state;
        onPost(name, sureName);
        this.setState({
            name: "",
            sureName: ""
        });
    };

    return (
        <div>
            <div>
                <input
                    onChange={onHendleChange}
                    type="text"
                    placeholder="Name"
                    value={name}
                />

                <input
                    onChange={onHendleChangeSureName}
                    type="text"
                    placeholder="Surename"
                    value={sureName}
                />
                <input
                    type="button"
                    onClick={sendDataToMainState}
                    value="Log In"
                />
                <input
                    type="button"
                    onClick={() => cleanAll()}
                    value="Clean All"
                />
            </div>
        </div>
    );
};

export { JustComponent };
