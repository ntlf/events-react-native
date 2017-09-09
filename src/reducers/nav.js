import { StackNavigator } from 'react-navigation'
import AppNavigator from '../navigators/AppNavigator'

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
)

const nav = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  return nextState || state;
}

export default nav