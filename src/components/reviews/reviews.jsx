import './reviews.css';
import defaultAvatar from '../../resources/img/ava-default-feedback.svg';
import { Stars } from '../stars/stars';

export const Reviews = () => (
    <div className="reviews">
        <div className="reviews-head">
            <h5>Отзывы</h5><div className="m-n-400-14-24 color-gray-black-40">2</div>
        </div>
        <div className="separator-rating-detail-feedback"> </div>
        <div className="feedbacks-block">
            <div className="feedback">
                <div className="user-feedback body-large color-gray-black-70">
                    <img className="user-feedback-avatar" src={defaultAvatar} alt="avatar" />
                    <div className="user-name-date-feedback">
                        <div className="name-feedback">Иванов Иван</div>
                        <div className="date-feedback">5 января 2019</div>
                    </div>
                </div>
                <div className="user-feedback-rating">
                    <Stars />
                </div>
                </div>
                <div className="feedback">
                    <div className="user-feedback body-large color-gray-black-70">
                        <img className="user-feedback-avatar" src={defaultAvatar} alt="avatar" />
                        <div className="user-name-date-feedback">
                            <div className="name-feedback">Николай Качков</div>
                            <div className="date-feedback">20 июня 2018</div>
                        </div>
                    </div>
                    <div className="user-feedback-rating">
                        <Stars />
                    </div>
                    <div className="feedback-text body-large">
                                    Учитывая ключевые сценарии поведения, 
                                    курс на социально-ориентированный 
                                    национальный проект не оставляет шанса 
                                    для анализа существующих паттернов поведения. 
                                    Для современного мира внедрение современных 
                                    методик предоставляет широкие возможности 
                                    для позиций, занимаемых участниками в 
                                    отношении поставленных задач. 
                                    Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики 
                                    выводы будут в равной степени предоставлены сами себе. 
                                    Вот вам яркий пример современных тенденций — глубокий 
                                    уровень погружения создаёт предпосылки для своевременного 
                                    выполнения сверхзадачи. И нет сомнений, что акционеры 
                                    крупнейших компаний, инициированные исключительно 
                                    синтетически, превращены в посмешище, хотя само их 
                                    существование приносит несомненную пользу обществу.
                                </div>
                            </div>
                            <div className="feedback">
                                <div className="user-feedback body-large color-gray-black-70">
                                    <img className="user-feedback-avatar" src={defaultAvatar} alt="avatar"/>
                                    <div className="user-name-date-feedback">
                                        <div className="name-feedback">Екатерина Беляева</div>
                                        <div className="date-feedback">18 февраля 2018</div>
                                    </div>
                                </div>
                                <div className="user-feedback-rating">
                                    <Stars />
                                </div>
                            </div>                            
                        </div>
                        <form>
                            <button className="btn-pressed button-large color-main-white" type="submit">Оценить книгу</button>
                        </form>
                    </div>
)