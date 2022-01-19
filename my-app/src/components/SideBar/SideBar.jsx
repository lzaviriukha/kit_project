import { NavLink } from 'react-router-dom';
import s from './SideBar.module.css';

const setActive = ({isActive}) => isActive ? s.active_link : '';

function SideBar() {
    return (
        <nav className={s.side_bar}>
            <ul className={s.side_bar__list}>
                <li className={s.side_bar__item}><NavLink to='/button' className={setActive}>Button</NavLink></li>
                <li className={s.side_bar__item}><NavLink to='/input' className={setActive}>Input</NavLink></li>
                <li className={s.side_bar__item}><NavLink to='/checkbox' className={setActive}>Checkbox</NavLink></li>
                <li className={s.side_bar__item}><NavLink to='/radio_button' className={setActive}>Radio button</NavLink></li>
                <li className={s.side_bar__item}><NavLink to='/file_upload' className={setActive}>File upload</NavLink></li>
                <li className={s.side_bar__item}><NavLink to='/dropdown_list' className={setActive}>Dropdown list</NavLink></li>
            </ul>
        </nav>
    );
}

export default SideBar;



