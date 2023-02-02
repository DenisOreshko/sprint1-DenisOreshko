import './nav-genre-menu.css';

export const NavGenreMenu = () => ( 

    <div className="menu-column">
                <div className="tab1">
                    <input type="checkbox" name="open_close_tab"/> 
                    <div className="tab-title active orange-bottom">
                        <div className="tab-title-wrapper">
                            <span><a href="/#/">Витрина книг</a></span>          
                            <div className="toggle-tab"> </div> 
                        </div>                  
                    </div>
                    <div className="categories">
                        <ul>
                            <li className="active">
                                <a href="/#/">
                                    <div className="categories-item">
                                        Все книги     
                                    </div>
                                </a>                                                          
                            </li>
                            <li >
                                <div className="categories-item">
                                    Бизнес-книги<span className="amount">14</span>
                                </div>                                
                            </li>
                            <li >
                                <div className="categories-item">
                                    Детективы<span className="amount">8</span>
                                </div>
                            </li>
                            <li >
                                <div className="categories-item">
                                    Детские книги<span className="amount">14</span>
                                </div>                                
                            </li>
                            <li >
                                <div className="categories-item">
                                    Зарубежная литература<span className="amount">2</span>
                                </div>                                
                            </li>
                            <li >
                                <div className="categories-item">
                                    История<span className="amount">5</span>
                                </div>                                
                            </li>
                            <li >
                                <div className="categories-item">
                                    Классическая литература<span className="amount">12</span>
                                </div>                                
                            </li>
                            <li >
                                <div className="categories-item">
                                    Книги по психологии<span className="amount">11</span>
                                </div>                                
                            </li>
                            <li >
                                <div className="categories-item">
                                    Компьютерная литература<span className="amount">54</span>
                                </div>                                
                            </li>
                            <li >
                                <div className="categories-item">
                                    Культура и искусство<span className="amount">5</span>
                                </div>                                
                            </li>
                            <li >
                                <div className="categories-item">
                                    Наука и образование<span className="amount">2</span>
                                </div>                                
                            </li>
                            <li >
                                <div className="categories-item">
                                    Публицистическая литература<span className="amount">0</span>
                                </div>                               
                            </li>
                            <li >
                                <div className="categories-item">
                                    Справочники<span className="amount">10</span>
                                </div>                                
                            </li>
                            <li >
                                <div className="categories-item">
                                    Фантастика<span className="amount">12</span>
                                </div>                                
                            </li>
                            <li >
                                <div className="categories-item">
                                    Юмористическая литература<span className="amount">8</span> 
                                </div>                                                               
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab ">
                    <div className="tab-title">
                        <a href="/#/terms">Правила пользования</a>
                    </div>
                </div>
                <div className="tab ">
                    <a href="/#/contract">
                        <div className="tab-title ">Договор оферты</div>
                    </a>
                </div>             
            </div>
)