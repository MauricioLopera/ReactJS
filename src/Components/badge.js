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
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="avatar" className="badge_avatar"/>
                    <h1>Mauricio <br/> Lopera</h1>
                </div>
                <div className="badge_section-info">
                    <h3>CEO Helpex</h3>
                    <div>@MauricioLopera1</div>
                </div>
                <div className="badge_footer">
                    #Helpex
                </div>
            </div>
        ) 
    }
}

export default badge;