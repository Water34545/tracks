import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
  switch(action.type) {
    case 'add_error':
      return {...state, errorMassage: action.payload};
    case 'signin':
      return {token: action.payload, errorMassage: ''};
    case 'clear_error_message':
      return {...state, errorMassage: ''};
    case 'signOut':
      return {token: null, errorMassage: '' };
    default: 
      return state;
  }
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    dispatch({type: 'signin', payload: token});
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({type: "clear_error_message"})
};

const signUp = dispatch => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signin', payload: response.data.token});
    navigate('TrackList');
  } catch (err) {
    dispatch({type: 'add_error', payload: 'Something wrong, please try again.'});
  }
};

const signIn = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signin', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signIn', payload: response.data.token});
    navigate('TrackList');
  } catch (err) {
    dispatch({type: 'add_error', payload: 'Something wrong, please try again.'});
  }
};

const signOut = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signOut'});
  navigate('loginFlow');
};

export const {Provider, Context} = CreateDataContext(
  authReducer,
  {signUp, signIn, signOut, clearErrorMessage, tryLocalSignIn},
  {token: null, errorMassage: ''}
);