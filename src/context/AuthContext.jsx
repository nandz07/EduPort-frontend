import { createContext, useContext, useEffect, useReducer } from 'react'

console.log(localStorage.getItem('user'))
const user = localStorage.getItem('user');
const initailState = {
    user: user && user !== "undefined" ? JSON.parse(user) : null,
    role: localStorage.getItem('role') ?? null,
    token:  localStorage.getItem('token') ?? null,
    adminToken:localStorage.getItem('adminToken') ?? null
}

export const authContext = createContext(initailState);

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                user: null,
                role: null,
                token: null
            };
        case 'LOGIN_SUCCESS':
            return {...state,
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                role: null,
                token: null
            }
        case 'ADMIN_LOGIN':
            return {
                ...state,
                adminToken:action.payload.adminToken
            }
        case 'ADMIN_LOGOUT':
            return {
                ...state,
                adminToken:null
            }
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initailState)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
        localStorage.setItem('token', state.token)
        localStorage.setItem('role', state.role)
        localStorage.setItem('adminToken', state.adminToken)
        // dispatch()
    }, [state.user, state.token, state.role,state.adminToken])

    return <authContext.Provider value={
        { user: state.user, token: state.token, role: state.role,adminToken:state.adminToken, dispatch }
        }>
        {children}
    </authContext.Provider>
}