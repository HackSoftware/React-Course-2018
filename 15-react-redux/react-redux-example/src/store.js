const redux = require("redux");

const initialState = {
  songs: [],
  playing: false,
  shuffle: false,
  current: 0
};

const NEXT_SONG = "NEXT_SONG";
const TOGGLE_PLAY = "TOGGLE";
const TOGGLE_SHUFFLE = "SHUFFLE";
const INIT_PLAYLIST = "INIT_PLAYLIST";

function nextSong() {
  return { type: NEXT_SONG };
}

export function togglePlay() {
  return { type: TOGGLE_PLAY };
}

export function toggleShuffle() {
  return { type: TOGGLE_SHUFFLE };
}

export function initPlaylist(payload) {
  return { type: INIT_PLAYLIST, payload};
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_SONG:
      return {
        ...state,
        current: state.current + 1 < state.songs.length ? state.current + 1 : 0
      };
    case TOGGLE_PLAY:
      return {
        ...state,
        playing: !state.playing
      };
    case TOGGLE_SHUFFLE:
      return {
        ...state,
        shuffle: !state.shuffle
      };
    case INIT_PLAYLIST:
      return {
        ...state,
        songs: action.payload
      };
 
    default:
      return state;
  }
}

export const store = redux.createStore(reducer);
