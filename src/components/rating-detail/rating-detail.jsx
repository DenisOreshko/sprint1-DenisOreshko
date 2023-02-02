import './rating-detail.css';


export const RatingDetail = () => (
    <div className="rating-detail">
        <h5>Рейтинг</h5>
        <div className="separator-rating-detail"> </div>
        <div className="grade">
            <div className="stars">
                <div className="star fill"> </div>
                <div className="star fill"> </div>
                <div className="star fill"> </div>
                <div className="star fill"> </div>
                <div className="star"> </div>
            </div>
            <h5>4.3</h5>                           
        </div>
    </div>
)