import React from "react";
import "./FlipCard.css";

class FlipCard extends React.Component {
    render() {
        return (
            <div
                className={`flip-card ${this.props.className}`}
                style={this.props.style}
            >
                <div className="flip-card-inner">
                    <div className="flip-card-front" style={this.props.frontStyle}>
                        {this.props.frontContent}
                    </div>
                    <div className="flip-card-back" style={this.props.backStyle}>
                        {this.props.backContent}
                    </div>
                </div>
            </div>
        );
    }
}

export default FlipCard;
