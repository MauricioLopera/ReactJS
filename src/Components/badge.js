import React from 'react';

import "./styles/badge.css";
import logoHeader from '../img/badge-header.svg';

class badge extends React.Component{
    render(){
        return (
            <div className="badge">
                <div className="badge_header">
                    <img src={logoHeader} alt="header"/>
                </div>
                <div className="badge_section-name">
                    <img src={this.props.Avatar} alt="avatar" className="badge_avatar"/>
                    <h1>{this.props.Nombre} <br/> {this.props.Apellido}</h1>
                </div>
                <div className="badge_section-info">
                    <h3>{this.props.Cargo}</h3>
                    <div>@{this.props.SocialM}</div>
                </div>
                <div className="badge_footer">
                    #Helpex
                </div>
            </div>
        ) 
    }
}

export default badge;