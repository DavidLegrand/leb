export const ContactAddSuccess = payload => ({ type: 'CONTACT/ADD/SUCCESS', payload })
export const ContactAddFailure = error => ({ type: 'CONTACT/ADD/FAILURE', payload: { error } })
export const ContactAddStarted = () => ({ type: 'CONTACT/ADD/STARTED' })

export const ContactAdd = (values, ...params) => {
  return async (dispatch, getState) => {
    dispatch(ContactAddStarted())
    try {
      // const res = await fetch(params.url)
      dispatch(ContactAddSuccess(values))
    } catch (error) {
      dispatch(ContactAddFailure(error.message))
    }
  }
}