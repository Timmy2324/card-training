
type InitialStateType = {

}

const initialState: InitialStateType = {

}

type AppActionType = any;

export const AppReducer = (state: InitialStateType = initialState, action: AppActionType) => {
    switch (action.type) {
        default:
            return state;
    }
}