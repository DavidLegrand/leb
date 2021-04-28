const conversationInitialState = {
  list: [],
  loading: false,
  error: null
}


const conversationReducer = (state = conversationInitialState, action) => {
  switch (action.type) {
    case 'CONVERSATION/NEW/SUCCESS':
      return { ...state, loading: false, error: null, list: [...state.list, action.payload] }
    case 'CONVERSATION/NEW/FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    case 'CONVERSATION/NEW/STARTED':
      return { ...state, loading: true, error: null }
    case 'CONVERSATION/SELECT/SUCCESS':
      var list = state.list.map(c => c.id === action.payload ? { ...c, selected: true } : { ...c, selected: false })
      return { ...state, loading: false, error: null, list }
    case 'CONVERSATION/SELECT/FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    case 'CONVERSATION/SELECT/STARTED':
      return { ...state, loading: true, error: null }
    case 'CONVERSATION/MESSAGE/SUCCESS':
      var list = state.list.map(c =>
        c.id === action.payload.id ?
          { ...c, messages: [...c.messages, action.payload.message] } :
          c
      )
      return { ...state, loading: false, error: null, list }
    case 'CONVERSATION/MESSAGE/FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    case 'CONVERSATION/MESSAGE/STARTED':
      return { ...state, loading: true, error: null }
    default:
      return state
  }
}

export default conversationReducer