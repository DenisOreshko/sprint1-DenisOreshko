import facebook from '../../resources/img/icon_facebook.svg';
import instagram from '../../resources/img/icon_instagram.svg';
import linkedin from '../../resources/img/icon_linkedin.svg';
import vk from '../../resources/img/icon_vk.svg';

import './footer.css';

export const Footer = () => ( 
    <div className="footer">
            <div id="copyright">© 2020-2023 Cleverland. Все права защищены.</div>
            <div id="social-icon">
                <img id="facebook-icon" src={facebook} alt="facebook" />
                <img id="instagram-icon" src={instagram} alt="instagram" />
                <img id="vk-icon" src={vk} alt="vk" />
                <img id="linkedin-icon" src={linkedin} alt="linkedin" />
            </div>
        </div> 
)