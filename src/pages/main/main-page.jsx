import { useState } from 'react';

import { ContentList } from '../../components/content-list/content-list.jsx';
import { ContentTile } from '../../components/content-tile/content-tile.jsx';
import { Footer } from '../../components/footer/footer.jsx';
import { Header } from '../../components/header/header.jsx';
import { NavGenreMenu } from '../../components/nav-genre-menu/nav-genre-menu.jsx';
import { SearchFilterToggleViewBar } from '../../components/search-filter-toggleview-bar/search-filter-toggleview-bar.jsx';

import './main-page.css';

export const MainPage = () => {
    const [viewTile, setViewTile] = useState(true); 

    return  (    
    <section className='main-page'>
        <Header />
        <div id="main-container"> 
            <div className="content-wrapper">
                <NavGenreMenu />
                <div className='content-column'>
                    <SearchFilterToggleViewBar viewTile={setViewTile}/>
                    <div className='contented'>                        
                        {viewTile ? <ContentTile /> : <ContentList />}
                    </div>
                </div>
            </div>
            <div id="footer-separator"> </div>
            <Footer />
        </div>
    </section>
    )
}
