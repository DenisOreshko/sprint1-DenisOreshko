import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { BookDetail } from "../../components/book-detail/book-detail";
import { RatingDetail } from "../../components/rating-detail/rating-detail";
import { DetailDescription } from "../../components/detail-description/detail-description";
import { Reviews } from "../../components/reviews/reviews";

import './book-page.css';

export const BookPage = () => (
    <section className='book-page'>
        <Header />
        <div className="navigation-map">
            <span className="path">Бизнес книги / Грокаем алгоритмы Иллюcтрированнопе пособие для программистов и любопытствующих</span>
        </div>
        <div id="main-container">
            <div className="content-wrapper-detail"> 
                <div className="content-column">
                    <div className="contented">
                        <BookDetail />
                        <RatingDetail />
                        <DetailDescription />
                        <Reviews />
                    </div>
                </div>
            </div>
            <div id="footer-separator"> </div>
            <Footer />
        </div>
    </section>
);
