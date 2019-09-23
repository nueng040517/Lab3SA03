import React from 'react';
 
class CharacterCard extends React.Component {
 
    state = {
        active: 0
    }
 
    activate = () => {
        this.setState({
            active: 1
        });
        if(this.state.active === 0)       
        this.props.activationHandler(this.props.value);
    }
 
    render() {
        let activeClass = this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}
 
export default CharacterCard;
