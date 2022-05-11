const SET_OPENED_HEADER = "SET_OPENED_HEADER";
const HANDLE_SELECT_HEADER = "HANDLE_SELECT_HEADER";

const initialState = {
  topicSelect: {
    selected: 0,
    opened: false,
    options: [
      { name: "Topic", id: 0 },
      { name: "Politic", id: 1 },
      { name: "Art", id: 2 },
      { name: "Culture", id: 3 },
      { name: "Economic", id: 4 },
      { name: "Something...", id: 5 },
    ],
  },
  weekSelect: {
    selected: 0,
    opened: false,
    options: [
      { name: "This Day", id: 0 },
      { name: "This Week", id: 1 },
      { name: "This Month", id: 2 },
      { name: "This Quarter", id: 3 },
      { name: "This Year", id: 4 },
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

export const setOpenedAC = (whichButton) => ({
  type: SET_OPENED_HEADER,
  whichButton,
});
export const handleSelectOptionAC = (whichButton, optionID) => ({
  type: HANDLE_SELECT_HEADER,
  whichButton,
  optionID,
});

export default HeaderReducer;
