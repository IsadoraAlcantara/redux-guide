import UserActionTypes from "./action-types";

const initialState = {
    currentUser: null, // guardar o usuário que está logado na aplicação
}

const userReducer = (state = initialState, action) => {

    // com if
    
    // if (action.type === "user/login") {
    //     return {...state, currentUser: action.payload}
    // }
    // if (action.type === UserActionTypes.LOGOUT) {
    //     return {...state, currentUser: null}
    // }

    // return state // retornar o state por padrão

    // com switch case MAIS RECOMENDADO

    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {...state, currentUser: action.payload}
        case UserActionTypes.LOGOUT:
            return {...state, currentUser: null}
        default:
            return state
    }
    
}

export default userReducer;