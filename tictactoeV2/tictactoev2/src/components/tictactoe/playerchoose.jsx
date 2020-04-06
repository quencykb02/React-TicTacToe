import React, { Component } from 'react';


class Player extends Component {
  

    render() {
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e)}>

                <h3>Player {this.props.currentPlayer} turn</h3>
                <label>
                    Player X
                <input type="text" name="firstPlayer"  placeholder="X" onChange={(e) => this.props.handleInputChange(e)}/>
                </label>
                <label>
                    Player O
                    <input type="text" name="secondPlayer"  placeholder="O" onChange={(e) => this.props.handleInputChange(e)} />
                </label> 
                <input type="submit" value="start" />
                
            </form>
        )
    }
}

export default Player;