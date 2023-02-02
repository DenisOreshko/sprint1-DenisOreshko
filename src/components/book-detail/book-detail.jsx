import BookCover from '../../resources/img/book-cover.svg';
import './book-detail.css';

export const BookDetail = () => ( 
    <div className="book-detail">
        <div className="book-detail-cover">
            <img src={BookCover} alt="book cover"/>
        </div>
        <div className="book-detail-info">
            <div className="book-detail-name">
                <h3>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</h3>
            </div>
            <div className="book-detail-write">
                <h5 className="color-gray-black-40">Адитья Бхаргава, 2019</h5>
            </div>
            <form>
                <button className="button-detail free-book" type='submit'>Забронировать</button>
            </form>
            <div className="about-book">
                <h5>О книге</h5>
                <div className="body-large describe-book">
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач,
                и большинство таких задач уже были кем-то решены, протестированы
                и проверены. Можно, конечно, погрузится в глубокую философию
                гениального Кнута, изучить многостраничные фолианты с
                доказательствами и обоснованиями, но хотите ли вы
                тратить на это свое время?
                <br/><br/>
                <p>Откройте великолепно иллюстрированную 
                книгу и вы сразу поймете, что алгоритмы — это просто. 
                А грокать алгоритмы — это веселое и увлекательное занятие.</p>
                </div>
            </div>
        </div>
    </div>                    
);