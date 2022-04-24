
type InitialStateType = {

}

const initialState: InitialStateType = {

}

type ProfileActionType = any;

export const ProfileReducer = (state: InitialStateType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        default:
            return state;
    }
}