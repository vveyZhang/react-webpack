import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
          textDecoration: this.props.complete? 'line-through' : 'none',
          cursor: this.props.complete? 'default' : 'pointer'
        }}>
                {this.props.text}
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
}