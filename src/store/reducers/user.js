const userInitialState = {
  login: null,
  id: null,
  isAuth: false,
}

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'USER/LOGIN/SUCCESS':
      return { ...state, loading: false, error: null, ...action.payload }
    case 'USER/LOGIN/FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    case 'USER/LOGIN/STARTED':
      return { ...state, loading: true, error: null }
    case 'USER/REGISTER/SUCCESS':
      return { ...state, loading: false, error: null, ...action.payload }
    case 'USER/REGISTER/FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    case 'USER/REGISTER/STARTED':
      return { ...state, loading: true, error: null }
    case 'USER/LOGOUT/SUCCESS':
      return { ...state, ...userInitialState }
    case 'USER/LOGOUT/FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    case 'USER/LOGOUT/STARTED':
      return { ...state, loading: true, error: null }
    default:
      return state
  }
}

export default userReducer