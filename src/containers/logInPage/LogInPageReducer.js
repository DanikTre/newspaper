import AccountImg1 from "../../components/SideBar/AvatarImg.png";
import AccountImg2 from "../../components/SideBar/IMG_5141.jpeg";
import AccountImg3 from "../../components/SideBar/IMG_5141 copy.jpeg";
import AccountImg4 from "../../components/SideBar/birch-tree.jpeg";

const UPDATE_EMAIL_TEXT_LOGIN = "UPDATE_EMAIL_TEXT_LOGIN";
const UPDATE_PASS_TEXT_LOGIN = "UPDATE_PASS_TEXT_LOGIN";
const NEXT_BUTTON_PRESS_LOGIN = "NEXT_BUTTON_PRESS_LOGIN";
const BACK_BUTTON_PRESS_LOGIN = "BACK_BUTTON_PRESS_LOGIN";
const LOG_OUT = "LOG_OUT";
const SHOW_PASSWORD_TOGGLE = "SHOW_PASSWORD_TOGGLE";

const initialState = {
  logIn: {
    logInState: false,
    emailState: false,
    passwordState: false,
    nextButtonText: "Next",
    createAccountButtonText: "Create Account",
    emailText: "",
    emailTextAreaBorderState: false,
    passwordText: "",
    showPasswordState: true,
    passwordTextAreaBorderState: false,
  },
  users: [
    {
      id: "6283807a323d6f18bd27d11w",
      firstName: "1",
      lastName: "1",
      avatarImg: AccountImg1,
      email: "1",
      password: "1",
    },
    {
      id: "6283807a323d6f18bd27d11c",
      firstName: "Alex",
      lastName: "Barsuk",
      avatarImg: AccountImg2,
      email: "alex-barsuk@gmail.com",
      password: "qwertyuiop",
    },
    {
      id: "62838088e891342e8d2e3d9a",
      firstName: "Danon",
      lastName: "Trapachka",
      avatarImg: AccountImg3,
      email: "danik-gnom@gmail.com",
      password: "qwertyui",
    },
    {
      id: "628380903319f5fb46983613",
      firstName: "John",
      lastName: "The Birch",
      avatarImg: AccountImg4,
      email: "iamgroot@gmail.com",
      password: "iamgroot",
    },
  ],
  preLogInUser: {},
  currentUser: {},
};

const LogInPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL_TEXT_LOGIN:
      return {
        ...state,
        logIn: { ...state.logIn, emailText: action.text },
      };
    case UPDATE_PASS_TEXT_LOGIN:
      return {
        ...state,
        logIn: { ...state.logIn, passwordText: action.text },
      };
    case NEXT_BUTTON_PRESS_LOGIN:
      if (!state.logIn.logInState) {
        if (!state.logIn.emailState) {
          const foundUser = state.users.find(
            (el) =>
              el.email.toLowerCase() === state.logIn.emailText.toLowerCase()
          );
          if (
            foundUser !== undefined &&
            state.logIn.emailText.toLowerCase() ===
              foundUser.email.toLowerCase()

            //   if (el.email === state.logIn.emailText) {
            //     console.log(el);
            //     return {
            //       ...state,
            //       preLogInUser: { el },
            //     };
            //   }
          ) {
            return {
              ...state,
              logIn: {
                ...state.logIn,
                nextButtonText: "Log In",
                createAccountButtonText: "Back",
                emailState: true,
                emailTextAreaBorderState: false,
              },
              preLogInUser: foundUser,
            };
          } else if (state.logIn.emailText.length !== 0) {
            alert("Incorrect Email");
            return {
              ...state,
              logIn: { ...state.logIn, emailTextAreaBorderState: true },
            };
          } else if (!state.logIn.emailTextAreaBorderState) {
            return {
              ...state,
              logIn: { ...state.logIn, emailTextAreaBorderState: true },
            };
          }
        } else if (state.logIn.emailState) {
          if (state.logIn.passwordText === state.preLogInUser.password) {
            alert("yar logged");
            // return {
            //   ...state,
            //   logIn: {
            //     ...state.logIn,
            //     logInState: true,
            //     nextButtonText: "Next",
            //     emailState: false,
            //     passwordState: false,
            //   },
            // };

            return {
              ...state,
              currentUser: { ...state.preLogInUser },
              logIn: { ...state.logIn, logInState: true },
              preLogInUser: {},
              passwordTextAreaBorderState: false,
            };
          } else if (state.logIn.passwordText.length !== 0) {
            alert("Incorrect Password");
            return {
              ...state,
              logIn: { ...state.logIn, passwordTextAreaBorderState: true },
            };
          } else if (!state.logIn.passwordTextAreaBorderState) {
            return {
              ...state,
              logIn: { ...state.logIn, passwordTextAreaBorderState: true },
            };
          }
        }
      } else if (state.logIn.logInState) {
        alert("You already logged");
      }
      return { ...state };
    case LOG_OUT:
      if (state.logIn.logInState) {
        return {
          ...state,
          logIn: {
            ...state.logIn,
            logInState: false,
            currentUser: {},
            emailState: false,
            nextButtonText: "Next",
            createAccountButtonText: "Create Account",
            emailText: "",
            passwordText: "",
          },
          preLogInUser: {},
          currentUser: {},
        };
      }
      return { ...state };
    case BACK_BUTTON_PRESS_LOGIN:
      if (!state.logIn.logInState) {
        if (state.logIn.emailState) {
          return {
            ...state,
            logIn: {
              ...state.logIn,
              emailState: false,
              nextButtonText: "Next",
              createAccountButtonText: "Create Account",
              emailText: "",
              passwordText: "",
            },
            preLogInUser: {},
          };
        }
      }
      return { ...state };
    case SHOW_PASSWORD_TOGGLE:
      return {
        ...state,
        logIn: {
          ...state.logIn,
          showPasswordState: !state.logIn.showPasswordState,
        },
      };
    default: {
      return state;
    }
  }
};

export const updateEmailTextLogIn = (text) => ({
  type: UPDATE_EMAIL_TEXT_LOGIN,
  text,
});
export const updatePassTextLogIn = (text) => ({
  type: UPDATE_PASS_TEXT_LOGIN,
  text,
});
export const nextButtonPressLogIn = () => ({
  type: NEXT_BUTTON_PRESS_LOGIN,
});
export const backButtonPressLogIn = () => ({
  type: BACK_BUTTON_PRESS_LOGIN,
});
export const logOut = () => ({
  type: LOG_OUT,
});
export const showPasswordToggle = () => ({
  type: SHOW_PASSWORD_TOGGLE,
});

export default LogInPageReducer;
