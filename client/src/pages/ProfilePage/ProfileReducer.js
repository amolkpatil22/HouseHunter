

let intdata = {
    userdata: null,
    isLoading: false,
    isError: false
}

export const profileReducer = (state = intdata, { type, payload }) => {

    switch (type) {
        case getRequest: return { ...state, isLoading: true }
        case getsuccess: return { ...state, isLoading: false, userdata: payload }
        case getRequest: return { ...state, isLoading: false, isError: true }
        default: return state
    }
}



export const getRequest = "getRequest"
export const getsuccess = "getsuccess"
export const getError = "getError"