import coverBookList from '../../resources/img/cover-book-list.png';
import defaultCoverBook from '../../resources/img/default_cover.svg';
import { Stars } from '../stars/stars';

import './content-list.css';

export const ContentList = () => (
    <div className="cards-wrapper">
        <div className="book-list">
            
            <a href="autorized-library-detail-book-preview-one-foto.html">
                <div className="book-list-card plashka">                                   
                    <img className="book-cover-list" src={coverBookList} alt="cover"/>
                    <div className="book-info-list">
                        <div className="book-name-list">
                            Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
                        </div>
                        <div className="book-write-list body-large color-gray-black-70">
                            Адитья Бхаргава, 2019
                        </div>
                        <div className="rating-button-wrapper-list">
                            <div className="book-rating-list">
                                <Stars />
                            </div>
                            <form>
                                <button className="button-booking btn-card-list free-book mobile-button-small" type="submit">
                                    Забронировать
                                </button>
                            </form>
                        </div>
                    </div>                                    
                </div>
            </a>
            <a href="autorized-library-detail-book-preview-one-foto.html">
                                <div className="book-list-card plashka">
                                    <img className="book-cover-list" src={coverBookList} alt="cover"/>
                                    <div className="book-info-list">
                                        <div className="book-name-list">
                                            Программирование на JAVA
                                        </div>
                                        <div className="book-write-list body-large color-gray-black-70">
                                            Патрик Нимейер, Дэниэл Леук, 2013
                                        </div>
                                        <div className="rating-button-wrapper-list">
                                            <div className="book-rating-list">
                                                <Stars />
                                            </div>
                                            <form>
                                                <button className="button-booking btn-card-list free-book mobile-button-small" type="submit">
                                                    Забронировать
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
            </a>
            <a href="autorized-library-detail-book-preview-one-foto.html">
                                <div className="book-list-card plashka">
                                    <img className="book-cover-list" src={coverBookList} alt="cover"/>
                                    <div className="book-info-list">
                                        <div className="book-name-list">
                                            Как создать сайт. Комикс-путеводитель по HTML, CSS и WordPress
                                        </div>
                                        <div className="book-write-list body-large color-gray-black-70">
                                            className Ким, Нейт Купер, 2019
                                        </div>
                                        <div className="rating-button-wrapper-list">
                                            <div className="book-rating-list">
                                                <Stars />
                                            </div>
                                            <form>
                                                <button className="button-booking btn-card-list free-book mobile-button-small" type="submit">
                                                    Забронировать
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
            </a>
            <a href="autorized-library-detail-book-preview-one-foto-booked.html">
                <div className="book-list-card plashka">
                    <img className="book-cover-list" src={coverBookList} alt="cover"/>
                    <div className="book-info-list">
                        <div className="book-name-list">
                                            HTML5 и CSS3. Разработка сайтов для любых браузеров и устройств
                        </div>
                        <div className="book-write-list body-large color-gray-black-70">
                                            Бен Фрейн, 2014
                        </div>
                        <div className="rating-button-wrapper-list">
                            <div className="book-rating-list">
                                <Stars />
                            </div>
                            <form>
                                <button className="button-booking btn-card-list busy-book mobile-button-small" type="submit">
                                                    Забронирована
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </a>
            <a href="autorized-library-no-reviews-no-ratings-free.html">
                                <div className="book-list-card plashka">
                                    <img className="book-cover-list" src={defaultCoverBook} alt="cover"/>
                                    <div className="book-info-list">
                                        <div className="book-name-list">
                                            Adobe Flash. Создание аркад, головоломок и других игр с помощью ActionScript
                                        </div>
                                        <div className="book-write-list body-large color-gray-black-70">
                                            Гэри Розенцвейг, 2009
                                        </div>
                                        <div className="rating-button-wrapper-list">
                                            <div className="book-rating-list">
                                                <span className="not-rating">ещё нет оценок</span>
                                            </div>
                                            <form>
                                                <button className="button-booking btn-card-list free-book mobile-button-small" type="submit">
                                                    Забронировать
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
            </a>
            <a href="autorized-library-detail-book-preview-one-foto.html">
                                <div className="book-list-card plashka">
                                    <img className="book-cover-list" src={coverBookList} alt="cover"/>
                                    <div className="book-info-list">
                                        <div className="book-name-list">
                                            Грокаем алгоритмы. Иллюстрированное 
                                        </div>
                                        <div className="book-write-list body-large color-gray-black-70">
                                            2013
                                        </div>
                                        <div className="rating-button-wrapper-list">
                                            <div className="book-rating-list">
                                                <Stars />
                                            </div>
                                            <form>
                                                <button className="button-booking btn-card-list free-book mobile-button-small" type="submit">
                                                    Забронировать
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
            </a>
            <a href="autorized-library-detail-book-preview-one-foto.html">
                                <div className="book-list-card plashka">
                                    <img className="book-cover-list" src={coverBookList} alt="cover"/>
                                    <div className="book-info-list">
                                        <div className="book-name-list">
                                            HTML5. Разработка приложений для мобильных устройств
                                        </div>
                                        <div className="book-write-list body-large color-gray-black-70">
                                            Эстель Вейл, 2015
                                        </div>
                                        <div className="rating-button-wrapper-list">
                                            <div className="book-rating-list">
                                                <Stars />
                                            </div>
                                            <form>
                                                <button className="button-booking btn-card-list free-book mobile-button-small" type="submit">
                                                    Забронировать
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
            </a>
            <a href="autorized-library-detail-book-preview-one-foto-no-cover.html">
                                <div className="book-list-card plashka">
                                    <img className="book-cover-list" src={coverBookList} alt="cover"/>
                                    <div className="book-info-list">
                                        <div className="book-name-list">
                                            Быстро и легко создаем, программируем и раскручиваем
                                        </div>
                                        <div className="book-write-list body-large color-gray-black-70">
                                            Олег Поломошнов, 2011
                                        </div>
                                        <div className="rating-button-wrapper-list">
                                            <div className="book-rating-list">
                                                <Stars />
                                            </div>
                                            <form>
                                                <button className="button-booking btn-card-list free-book mobile-button-small" type="submit">
                                                    Забронировать
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
            </a>
            <a href="autorized-library-detail-book-preview-one-foto.html">
                                <div className="book-list-card plashka">
                                    <img className="book-cover-list" src={coverBookList} alt="cover"/>
                                    <div className="book-info-list">
                                        <div className="book-name-list">
                                            Грокаем алгоритмы. Иллюстрированное
                                        </div>
                                        <div className="book-write-list body-large color-gray-black-70">
                                            Борис Пахомов, 2014
                                        </div>
                                        <div className="rating-button-wrapper-list">
                                            <div className="book-rating-list">
                                                <Stars />
                                            </div>
                                            <form>
                                                <button className ="button-booking btn-card-list free-book mobile-button-small" type="submit">
                                                    Забронировать
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
            </a>
        </div>
    </div>
)