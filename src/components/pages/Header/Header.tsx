import { NavLink } from "react-router-dom";
import {PATH} from './../../routes/routes'
import style from './Header.module.css'



export const Header = () => {
    return (
        <div className={style.block}>
            Меню
            <nav className={style.menu}>
                <NavLink to={PATH.LOGIN} >LOGIN</NavLink>
                <NavLink to={PATH.REGISTRATION}>REGISTRATION</NavLink>
                <NavLink to={PATH.PROFILE} >PROFILE</NavLink>
            </nav>
        </div>
    )
}