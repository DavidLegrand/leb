import { v4 as uuidV4 } from 'uuid'


export const ConversationNewSuccess = payload => ({ type: 'CONVERSATION/NEW/SUCCESS', payload })
export const ConversationNewFailure = error => ({ type: 'CONVERSATION/NEW/FAILURE', payload: { error } })
export const ConversationNewStarted = () => ({ type: 'CONVERSATION/NEW/STARTED' })

export const ConversationNew = (conversation, ...params) => {
  return async (dispatch, getState) => {
    dispatch(ConversationNewStarted())
    try {
      if (!conversation.id)
        conversation.id = uuidV4()
      dispatch(ConversationNewSuccess(conversation))
      console.log(conversation)
    } catch (error) {
      dispatch(ConversationNewFailure(error.message))
    }
  }
}

export const ConversationSelectSuccess = payload => ({ type: 'CONVERSATION/SELECT/SUCCESS', payload })
export const ConversationSelectFailure = error => ({ type: 'CONVERSATION/SELECT/FAILURE', payload: { error } })
export const ConversationSelectStarted = () => ({ type: 'CONVERSATION/SELECT/STARTED' })

export const ConversationSelect = (values, ...params) => {
  return async (dispatch, getState) => {
    dispatch(ConversationSelectStarted())
    try {
      // const res = await fetch(params.url)
      dispatch(ConversationSelectSuccess(values))
    } catch (error) {
      dispatch(ConversationSelectFailure(error.message))
    }
  }
}

export const ConversationMessageSuccess = payload => ({ type: 'CONVERSATION/MESSAGE/SUCCESS', payload })
export const ConversationMessageFailure = error => ({ type: 'CONVERSATION/MESSAGE/FAILURE', payload: { error } })
export const ConversationMessageStarted = () => ({ type: 'CONVERSATION/MESSAGE/STARTED' })

export const ConversationMessage = ({ conversation, message }) => {

  return async (dispatch, getState) => {
    dispatch(ConversationMessageStarted())
    try {
      // const res = await fetch(params.url)

      dispatch(ConversationMessageSuccess({ id: conversation.id, message }))
    } catch (error) {
      dispatch(ConversationMessageFailure(error.message))
    }
  }
}

