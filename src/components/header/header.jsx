import avatar from '../../resources/img/avatar58x58.png';
import hamburgeraction from '../../resources/img/Icon_Action.svg';
import headerlogo from '../../resources/img/logo.svg';

import './header.css';

export const Header = () => ( 
        <div className="header">
            <div className="internal-header">
                <a href="/#/"><img className="header_logo" src={headerlogo} alt="logo"/></a>
                <img className="icon-action" src={hamburgeraction} alt="icon-action"/> 
                <div className="header_title">Библиотека</div>
                <div className="header_person">
                    <div className="text_person">Привет, Иван</div>
                    <img className="avatar" src={avatar} alt="avatar"/>
                </div>
            </div>
        </div>
)