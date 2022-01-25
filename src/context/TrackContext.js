import CreateDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const TrackReducer = (state, action) => {
  switch (action.type){
    case 'fatch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const responce = await trackerApi.get('/tracks');
  dispatch({type: 'fatch_tracks', payload: responce.data})
};

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', {name, locations});
};

export const {Provider, Context} = CreateDataContext(
  TrackReducer,
  {fetchTracks, createTrack},
  []
);