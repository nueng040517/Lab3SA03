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
    componentDidUpdate = (prevProps ) =>{
        console.log (this.props.attemp);
        if(prevProps.attemp !== this.props.attemp || prevProps.check !== this.props.check){
            this.setState({active:0})
        }
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
