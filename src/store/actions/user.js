import { v4 as uuidV4 } from 'uuid'

export const LoginSuccess = payload => ({ type: 'USER/LOGIN/SUCCESS', payload })
export const LoginFailure = error => ({ type: 'USER/LOGIN/FAILURE', payload: { error } })
export const LoginStarted = () => ({ type: 'USER/LOGIN/STARTED' })

export const Login = (values, ...params) => {

  return async (dispatch, getState) => {
    dispatch(LoginStarted())
    try {
      // const res = await fetch(params.url)
      dispatch(LoginSuccess({ ...values, id: getState().id, isAuth: true }))
    } catch (error) {
      dispatch(LoginFailure(error.message))
    }
  }
}

export const LogoutSuccess = payload => ({ type: 'USER/LOGOUT/SUCCESS', payload })
export const LogoutFailure = error => ({ type: 'USER/LOGOUT/FAILURE', payload: { error } })
export const LogoutStarted = () => ({ type: 'USER/LOGOUT/STARTED' })

export const Logout = () => {

  return async (dispatch, getState) => {
    dispatch(LogoutStarted())
    try {
      // const res = await fetch(params.url)
      dispatch(LogoutSuccess({ id: getState().id, isAuth: false }))
    } catch (error) {
      dispatch(LogoutFailure(error.message))
    }
  }
}

export const RegisterSuccess = payload => ({ type: 'USER/REGISTER/SUCCESS', payload })
export const RegisterFailure = error => ({ type: 'USER/REGISTER/FAILURE', payload: { error } })
export const RegisterStarted = () => ({ type: 'USER/REGISTER/STARTED' })

export const Register = (values, ...params) => {
  return async (dispatch, getState) => {
    dispatch(RegisterStarted())
    try {
      // const res = await fetch(params.url)
      dispatch(RegisterSuccess({ ...values, id: uuidV4(), isAuth: true }))
    } catch (error) {
      dispatch(RegisterFailure(error.message))
    }
  }
}