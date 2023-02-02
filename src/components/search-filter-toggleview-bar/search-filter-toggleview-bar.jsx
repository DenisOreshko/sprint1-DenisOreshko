import filterButtonIco from '../../resources/img/button_filter_icon.svg';
import SearchIco from '../../resources/img/search-input-icon.svg';

import './search-filter-toggleview-bar.css';

export const SearchFilterToggleViewBar = ({updateToggle}) => (
    <div className="navigation-list">
        <form>
            <input  type="text"   className="search" placeholder="Поиск книги или автора..."/>
            <button type="submit" className="btn-nav-list search-btn">
                <img src={SearchIco} alt="search-icon"/>
            </button>
            <button type="submit" className="btn-nav-list filter">
            <div>
                <img src={filterButtonIco} alt="filter-button"/>
                <span>По рейтингу</span>
            </div>
            </button>
            <button onClick={() => {updateToggle(true)}}
                    type="button" 
                    className="btn-nav-list plitka active" data-test-id='button-menu-view-window'> </button>
            <button onClick={() => {updateToggle(false)}}
                    type="button" 
                    className="btn-nav-list list"  data-test-id='button-menu-view-list'> </button>
        </form>
    </div>
)