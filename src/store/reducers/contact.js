const contactInitialState = {
  list: [],
  loading: false,
  error: null
}


const contactReducer = (state = contactInitialState, action) => {
  switch (action.type) {
    case 'CONTACT/ADD/SUCCESS':
      return { ...state, loading: false, error: null, list: [...state.list, action.payload] }
    case 'CONTACT/ADD/FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    case 'CONTACT/ADD/STARTED':
      return { ...state, loading: true, error: null }
    default:
      return state
  }
}

export default contactReducer