const SET_OPENED_HEADER = "SET_OPENED_HEADER";
const HANDLE_SELECT_HEADER = "HANDLE_SELECT_HEADER";

const initialState = {
  topicSelect: {
    selected: null,
    opened: false,
    options: [
      { name: "Choose Topic", id: null },
      { name: "Politic", id: "6281247377b190429b07e29a" },
      { name: "Art", id: "6281247cf6499193ed6efd22" },
      { name: "Culture", id: "6281248373cc3d7b4b94b01e" },
      { name: "Economic", id: "6281248bf4471737167be3ad" },
      { name: "Something...", id: "6281249143b7a30f5e2120e9" },
    ],
  },
  weekSelect: {
    selected: null,
    opened: false,
    options: [
      { name: "All time", id: null },
      { name: "This Day", id: "6282297eb56ab3572e2d492c" },
      { name: "This Week", id: "62822281a2cb7f5a9e0855f0" },
      { name: "This Month", id: "62822286bf078a1a50d53a78" },
      { name: "This Quarter", id: "6282228c7ea92d7a118753e7" },
      { name: "This Year", id: "6282229137fa883039fdeb83" },
    ],
  },
};

const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPENED_HEADER: {
      return {
        ...state,
        [action.whichButton]: {
          ...state[action.whichButton],
          opened: !state[action.whichButton].opened,
        },
      };
    }
    case HANDLE_SELECT_HEADER: {
      return {
        ...state,
        [action.whichButton]: {
          ...state[action.whichButton],
          selected: action.optionID,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const setOpened = (whichButton) => ({
  type: SET_OPENED_HEADER,
  whichButton,
});
export const handleSelectOption = (whichButton, optionID) => ({
  type: HANDLE_SELECT_HEADER,
  whichButton,
  optionID,
});

export default HeaderReducer;
