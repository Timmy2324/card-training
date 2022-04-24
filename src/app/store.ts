import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {AppReducer} from '../reducers/app-reducer';
import {LoginReducer} from '../reducers/login-reducer';
import {RegistrationReducer} from '../reducers/registration-reducer';
import {ProfileReducer} from '../reducers/profile-reducer';
import {PasswordRecoveryReducer} from '../reducers/passwordRecovery-reducer';
import {NewPasswordReducer} from '../reducers/newPassword-reducer';


const rootReducer = combineReducers({
    app: AppReducer,
    login: LoginReducer,
    registration: RegistrationReducer,
    profile: ProfileReducer,
    passwordRecovery: PasswordRecoveryReducer,
    newPassword: NewPasswordReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));