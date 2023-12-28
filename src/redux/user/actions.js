import UserActionTypes from "./action-types"

export const loginUser = (payload) => ({
    // definição do objeto
    type: UserActionTypes.LOGIN,
    payload
})

export const logoutUser = () => ({
    // definição do objeto
    type: UserActionTypes.LOGOUT
})