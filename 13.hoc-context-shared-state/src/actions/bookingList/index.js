export const changeText = newText => ({
  type: 'CHANGE_TEXT',
  payload: {
    text: newText
  }
});

export const showAlert = () => ({
  type: 'SHOW_ARLERT'
});

const reducer = (action, state) => {
  switch (action.type) {
    case 'CHANGE_TEXT': {
      return {...state, bookingListData: action.payload.text};
    }
    case 'SHOW_ARLERT': {
      alert('aaa');
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
