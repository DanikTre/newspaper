const HANDLE_SELECT = "HANDLE-SELECT";
const SET_OPENED = "SET-OPENED";

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
    case HANDLE_SELECT: {
      return {
        ...state,
        [action.whichButton]: {
          ...state[action.whichButton],
          selected: action.optionID,
        },
      };
    }
    case SET_OPENED: {
      return {
        ...state,
        [action.whichButton]: {
          ...state[action.whichButton],
          opened: !state[action.whichButton].opened,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const handleSelectOptionAC = (whichButton, optionID) =>
  //  console.log(whichButton),
  ({
    type: HANDLE_SELECT,
    whichButton,
    optionID,
  });

export const setOpenedAC = (whichButton) => ({
  type: SET_OPENED,
  whichButton,
});

export default HeaderReducer;