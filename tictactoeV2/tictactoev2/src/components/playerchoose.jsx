import React, { Component } from 'react';


class Player extends Component {

    render() {
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e)}>

                <h3>Player {this.props.currentPlayer} turn</h3>
                <label>
                    Player X
                <input type="radio" name="player" value="X" />
                </label>
                <label>
                    Player O
                <input type="radio" name="player" value="O" />
                </label>
                <input type="submit" value="start" />
                
            </form>
        )
    }
}

export default Player;