const redux = require("redux");

const initialState = {
  songs: [
    {
      artist: "Artist 1",
      name: "Song 1"
    },
    {
      artist: "Artist 2",
      name: "Song 2"
    }
  ],
  playing: false,
  shuffle: false,
  current: 0
};

const NEXT_SONG = "NEXT_SONG";
const TOGGLE_PLAY = "TOGGLE";
const TOGGLE_SHUFFLE = "SHUFFLE";

function nextSong() {
  return { type: NEXT_SONG }
}

export function togglePlay() {
  return { type: TOGGLE_PLAY };
}

export function toggleShuffle() {
  return { type: TOGGLE_SHUFFLE };
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
    default:
      return state;
  }
}

export const store = redux.createStore(reducer);
