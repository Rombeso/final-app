import {Login} from "../pages/Login/Login";
import {Registration} from "../pages/Registration/Registration";
import {Profile} from "../pages/Profile/Profile";
import {Error404} from "../pages/Error404/Error404";
import {Routes, Route, Navigate} from "react-router-dom";
import {PasswordRecovery} from "../pages/PasswordRecovery/PasswordRecovery";
import {NewPassword} from "../pages/NewPassword/NewPassword";
import {TestPage} from "../pages/TestPage/TestPage";


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
    START_PAGE: '/final-app',
    PAGE_404: '*',

}

export const RoutesComp = () => {
    return (
        <div>
            <Routes>
                {/*<Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>*/}
                <Route path={'/*'}  element={<Navigate to={PATH.START_PAGE + PATH.LOGIN}/>}/>
                <Route path={PATH.START_PAGE}  element={<Navigate to={PATH.START_PAGE + PATH.LOGIN}/>}/>
                <Route path={PATH.START_PAGE + '/*'} element={(
                    <Routes>
                            <Route path={'/login'} element={<Login/>}/>
                            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                            <Route path={PATH.PROFILE} element={<Profile/>}/>
                            <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                            <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                            <Route path={PATH.TEST_PAGE} element={<TestPage/>}/>
                        <Route path={PATH.PAGE_404} element={<Error404/>}/>
                        </Routes>
                    )}/>
            </Routes>
        </div>
    )
}