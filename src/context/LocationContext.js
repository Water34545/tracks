import CreateDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type){
    case 'add_current_location':
      return {...state, currentLocation: action.payload}
    case 'add_current':
      return {...state, locations: [...state.locations, action.payload]}
    case 'change_name':
      return {...state, name: action.payload}
    case 'start':
      return {...state, recording: true}
    case 'stop':
      return {...state, recording: false}
    case 'reset':
      return {...state, locations: [], name: ''}
    default:
      return state;
  }
};

const changeName = dispatch => name => {
  dispatch({type: 'change_name', payload: name})
}
const startRecording = dispatch => () => {
  dispatch({type: 'start'})
};
const stopRecording = dispatch  => () => {
  dispatch({type: 'stop'})
};
const addLocation = dispatch => (location, recording) => {
  dispatch({type: 'add_current_location', payload: location});
  if(recording) dispatch({type: 'add_current', payload: location});
};
const reset = dispatch  => () => {
  console.log('test')
  dispatch({type: 'reset'});
};

export const {Provider, Context} = CreateDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation, changeName, reset},
  {recording: false, locations: [], currentLocation: null, name: ''}
);