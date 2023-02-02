import { useState } from 'react';

import filterButtonIco from '../../resources/img/button_filter_icon.svg';
import SearchIco from '../../resources/img/search-input-icon.svg';

import './search-filter-toggleview-bar.css';

export const SearchFilterToggleViewBar = ({viewTile}) => {
    const [activeTile, setActiveTile] = useState(true); 
    const [activeList, setActiveList] = useState(false);

    const clickToggle = (e) =>{
        if(e.currentTarget.name === 'tile'){
            setActiveTile(true); 
            setActiveList(false);     
        }else{
            setActiveTile(false); 
            setActiveList(true); 
        }
    }
    
    return (
    <div className="navigation-list">
        <form>
            <input  type="text"   className="search" placeholder="Поиск книги или автора..."/>
            <button type="submit" className="btn-nav-list search-btn">
                <img src={SearchIco} alt="search-icon"/>
            </button>
            <button type="submit" className="btn-nav-list filter plashka">
            <div>
                <img src={filterButtonIco} alt="filter-button"/>
                <span>По рейтингу</span>
            </div>
            </button>
 
            <button onClick={(e) => {viewTile(true); clickToggle(e);}}
                    type="button" 
                    name='tile'
                    className={`btn-nav-list plitka ${ activeTile ? 'active' : ''}`}
                    data-test-id='button-menu-view-window'> </button>
            <button onClick={(e) => {viewTile(false); clickToggle(e);}}
                    type="button" 
                    name='list'
                    className={`btn-nav-list list ${ activeList ? 'active' : ''}`} 
                    data-test-id='button-menu-view-list'> </button>
        </form>
    </div>
)
}