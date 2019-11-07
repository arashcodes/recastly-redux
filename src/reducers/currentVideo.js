import Redux from 'redux';
import changeVideo from '../actions/currentVideo.js';

var currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    let newState = {};
    let state = Object.assign(newState, state);
    newState.video = action.video;
    return newState.video;
  }
  return state;
  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
