import coverBook from '../../resources/img/cover-book.png';
import { Stars } from '../stars/stars';

import './book-card.css';

export const BookCard = () => (
    <a href="/#/books/:category/:bookId">
            <div className="book-card" data-test-id='card'>                
                <div className="book-info-tile">
                <div className="book-cover">
                    <img  src={coverBook} alt="cover"/>
                </div>
                <div className="book-rating">
                    <Stars/>
                </div>
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
)