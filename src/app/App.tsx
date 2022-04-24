import React from 'react';
import './App.css';
import {Route, Routes, NavLink, Navigate} from 'react-router-dom';
import {Login} from '../pages/Login/Login';
import {NewPassword} from '../pages/NewPassword/NewPassword';
import {PasswordRecovery} from '../pages/PasswordRecovery/PasswordRecovery';
import {Profile} from '../pages/Profile/Profile';
import {Registration} from '../pages/Registration/Registration';
import {TestPage} from '../pages/TestPage/TestPage';
import {Error404} from '../pages/Error404/Error404';

const App = () => {
    return (
        <div className="App">
            <div>
                <div>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
                <div>
                    <NavLink to={'/new-password'}>NewPassword</NavLink>
                </div>
                <div>
                    <NavLink to={'/password-recovery'}>PasswordRecovery</NavLink>
                </div>
                <div>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to={'/registration'}>Registration</NavLink>
                </div>
                <div>
                    <NavLink to={'/test-page'}>TestPage</NavLink>
                </div>
                <div>
                    <NavLink to={'/404'}>Error404</NavLink>
                </div>
            </div>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/login'} replace />}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/new-password'} element={<NewPassword/>}/>
                <Route path={'/password-recovery'} element={<PasswordRecovery/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/test-page'} element={<TestPage/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
}

export default App;
