import React, { Component } from 'react'

class Badge extends Component {

    render() {
        const {badge} = this.props
        const colorDesign = this.props.colorDesign
        return (
            <div className="badge">
                <img className="badge-img" src={badge.url} alt="badge img" />
                <div className="badge-val" style={colorDesign ? {color: "#104418f6"} : {color: "#555151"}}>{badge.val}</div>
                <div className="badge-text">{badge.text}</div>
            </div>
        )
    }
}

export default Badge