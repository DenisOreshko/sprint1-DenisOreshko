import coverBook from '../../resources/img/cover-book.png';
import defaultCoverBook from '../../resources/img/default_cover.svg';
import { BookCard } from '../book-card/book-card';
import { Stars } from '../stars/stars';

import './content-tile.css';

export const ContentTile = () => (
    <div className="grid-content">
        <a href="/#/books/:category/:bookId">
            <div className="book-card" data-test-id='card'>                
                <div className="book-info-tile">
                    <div className="book-cover">
                        <img  src={coverBook} alt="cover"/>
                    </div>
                    <div className="book-rating">ещё нет оценок</div>
                    <div className="book-name">
                        Грокаем алгоритмы. 
                        Иллюстрированное пособие для програ...
                    </div>
                    <div className="book-write">Адитья Бхаргава, 2019</div>
                </div>                    
                <form>
                    <button className="button-booking mobile-button-small free-book" type="submit">
                        Забронировать
                    </button>
                </form>                            
            </div>
        </a>
        <BookCard />
        <a href="/#/books/:category/:bookId">    
            <div className="book-card">                                                            
                <div className="book-info-tile">
                    <div className="book-cover">
                        <img src={coverBook} alt="cover"/>
                    </div>
                <div className="book-rating">
                    <Stars />
                </div>
                <div className="book-name">
                    Грокаем алгоритмы. 
                </div>
                    <div className="book-write">Адитья Бхаргава, 2019</div>
                </div>                                
                <form>
                    <button className="button-booking mobile-button-small busy-book" type="submit">
                        Занята до 30.05
                    </button>
                </form>
            </div>
        </a>
        <a href="/#/books/:category/:bookId">
            <div className="book-card">                                
                <div className="book-info-tile">
                    <div className="book-cover">
                        <img src={coverBook} alt="cover"/>
                    </div>
                    <div className="book-rating">
                        <Stars/>
                    </div>
                    <div className="book-n-w-wrapper">
                        <div className="book-name">
                            Грокаем алгоритмы. 
                            Иллюстрированное пособие для програ...
                        </div>
                        <div className="book-write">
                            Адитья Бхаргава, 2019
                        </div>
                    </div>
                </div>                                
                <form>
                    <button className="button-booking free-book mobile-button-small" type="submit">
                        Забронировать
                    </button>
                </form>
            </div>
        </a>
        <a href="/#/books/:category/:bookId">
            <div className="book-card">                            
                                <div className="book-info-tile">
                                    <div className="book-cover">
                                        <img src={coverBook} alt="cover"/>
                                    </div>
                                    <div className="book-rating">
                                        <Stars/>
                                    </div>
                                    <div className="book-n-w-wrapper">
                                        <div className="book-name">
                                            Грокаем алгоритмы. 
                                            Иллюстрированное пособие для програ...
                                        </div>
                        <div className="book-write">
                            Адитья Бхаргава, 
                            Патрик Нимейер, 2019
                        </div>
                    </div>
                 </div>                            
                <form>
                    <button className="button-booking busy-book mobile-button-small" type="submit">
                        Забронирована
                    </button>
                </form>
            </div>
        </a>
        <a href="/#/books/:category/:bookId">
            <div className="book-card">                            
                                <div className="book-info-tile">
                                    <div className="book-cover">
                                        <img src={coverBook} alt="cover"/>
                                    </div>
                                    <div className="book-rating">ещё нет оценок</div>
                                    <div className="book-n-w-wrapper">
                                        <div className="book-name">
                                            Грокаем алгоритмы. Иллюстрированное 
                                        </div>
                                        <div className="book-write">
                                            Адитья Бхаргава, 
                                            Патрик Нимейер, 2019
                                </div>
                            </div>
                        </div>                            
                    <form>
                    <button className="button-booking busy-book mobile-button-small" type="submit">
                        Занята до 23.04
                    </button>
                </form>
            </div>
        </a>
        <a href="/#/books/:category/:bookId">
            <div className="book-card">                            
                    <div className="book-info-tile">
                        <div className="book-cover">
                            <img className="book-cover" src={coverBook} alt="cover"/>
                        </div>
                        <div className="book-rating">
                            <Stars/>
                        </div>
                        <div className="book-n-w-wrapper">
                            <div className="book-name">
                                Грокаем алгоритмы. 
                            </div>
                            <div className="book-write">
                                Адитья Бхаргава, 
                                Патрик Нимейер, 2019
                            </div>
                        </div>
                    </div>                            
                <form>
                    <button className="button-booking free-book mobile-button-small" type="submit">
                        Забронировать
                    </button>
                </form>
            </div>
        </a>
        <a href="/#/books/:category/:bookId">
         <div className="book-card">                            
                                <div className="book-info-tile">
                                    <div className="book-cover">
                                        <img className="book-cover" src={coverBook} alt="cover"/>
                                    </div>
                                    <div className="book-rating">
                                        <Stars/>
                                    </div>
                                    <div className="book-n-w-wrapper">
                                        <div className="book-name">
                                            Грокаем алгоритмы. 
                                            Иллюстрированное пособие для програ...
                                        </div>
                                        <div className="book-write">
                                            Адитья Бхаргава, 
                                            Патрик Нимейер, 2019
                                        </div>
                                    </div>
                                </div>
                            
                            <form>
                                <button className="button-booking free-book mobile-button-small" type="submit">
                                    Забронировать
                                </button>
                            </form>
            </div>
        </a>
        <a href="/#/books/:category/:bookId">
            <div className="book-card">                            
                                <div className="book-info-tile">
                                    <div className="book-cover">
                                        <img className="book-cover" src={coverBook} alt="cover"/>
                                    </div>
                                    <div className="book-rating">
                                        <Stars/>
                                    </div>
                                    <div className="book-n-w-wrapper">
                                        <div className="book-name">
                                            Грокаем алгоритмы. 
                                            Иллюстрированное пособие для програ...
                                        </div>
                                        <div className="book-write">
                                            Адитья Бхаргава, 2019
                                        </div>  
                                    </div>
                                </div>                             
                            <form>
                                <button className="button-booking free-book mobile-button-small" type="submit">
                                    Забронировать
                                </button>
                </form>
            </div>
        </a>
        <a href="/#/books/:category/:bookId">
            <div className="book-card">                            
                <div className="book-info-tile">
                    <div className="book-cover">
                        <img className="book-cover" src={defaultCoverBook} alt="cover"/>
                    </div>
                    <div className="book-rating">
                        <Stars/>
                    </div>
                    <div className="book-n-w-wrapper">
                        <div className="book-name">
                            Грокаем алгоритмы. 
                            Иллюстрированное пособие для програ...
                        </div>
                        <div className="book-write">
                            Адитья Бхаргава, 2019
                        </div>
                    </div>
                </div>                            
                <form>
                    <button className="button-booking free-book mobile-button-small" type="submit">
                        Забронировать
                    </button>
                </form>
            </div>
        </a>
    </div>
)