import {Login} from "../pages/Login/Login";
import {Registration} from "../pages/Registration/Registration";
import {Profile} from "../pages/Profile/Profile";
import {Error404} from "../pages/Error404/Error404";
import { Routes, Route } from "react-router-dom";


export type RoutesType = {
    LOGIN: string,
    REGISTRATION: string,
    PROFILE: string,
    PASSWORD_RECOVERY: string,
    NEW_PASSWORD: string,
    TEST_PAGE: string,
    START_PAGE: string
    PAGE_404: string
}

export const PATH: RoutesType = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/password-recovery',
    NEW_PASSWORD: '/new-password',
    TEST_PAGE: '/test-page',
    START_PAGE: '/',
    PAGE_404: '/*',
}

export const RoutesComp = () => {
    return (

        <div>


            <Routes>

                {/*<Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>*/}
                <Route path={PATH.START_PAGE} element={<div>START PAGE</div>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>

                <Route path={PATH.PAGE_404} element={<Error404/>}/>

            </Routes>
        </div>
    )
}