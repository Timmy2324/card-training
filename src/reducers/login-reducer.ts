
type InitialStateType = {

}

const initialState: InitialStateType = {

}

type LoginActionType = any;

export const LoginReducer = (state: InitialStateType = initialState, action: LoginActionType) => {
    switch (action.type) {
        default:
            return state;
    }
}