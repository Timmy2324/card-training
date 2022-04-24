
type InitialStateType = {

}

const initialState: InitialStateType = {

}

type NewPasswordActionType = any;

export const NewPasswordReducer = (state: InitialStateType = initialState, action: NewPasswordActionType) => {
    switch (action.type) {
        default:
            return state;
    }
}