import { NavLink } from "react-router-dom";
import {PATH} from './../../routes/routes'
import style from './Header.module.css'



export const Header = () => {
    return (
        <div className={style.block}>
            <p>"---Menu---"</p>
            <nav className={style.menu}>
                <NavLink to={PATH.START_PAGE + PATH.LOGIN}>LOGIN</NavLink>
                <NavLink to={PATH.START_PAGE + PATH.REGISTRATION}>REGISTRATION</NavLink>
                <NavLink to={PATH.START_PAGE + PATH.PROFILE} >PROFILE</NavLink>
                <NavLink to={PATH.START_PAGE + PATH.PASSWORD_RECOVERY} >PASSWORD RECOVERY</NavLink>
                <NavLink to={PATH.START_PAGE + PATH.NEW_PASSWORD} >NEW PASSWORD</NavLink>
                <NavLink to={PATH.START_PAGE + PATH.TEST_PAGE} >TEST PAGE</NavLink>
            </nav>
        </div>
    )
}