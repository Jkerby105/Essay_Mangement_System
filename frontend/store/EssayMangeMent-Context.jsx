import { createContext, useReducer } from "react";

export const EssayContext = createContext({
  loginState: false,
  userLogin: () => {},
  userLogout: () => {},
});

function essayReducer(state, action) {
    switch (action.type) {
      case "login":
        return {
          ...state,
          loginState: true,
        };
      case "logout":
        return {
          ...state,
          loginState: false,
        };
      default:
        return state;
    }
  }

export default function EssayContextProvider({ children }) {
  const [essayState, essayDispatch] = useReducer(essayReducer, {
    loginState: false,
  });

  function LoggingIn() {
    essayDispatch({
      type: "login",
    });
  }

  function LoggingOut() {
    essayDispatch({
      type: "logout",
    });
  }

  const ctxValue = {
    loginState: essayState.loginState,
    userLogin: LoggingIn,
    userLogout: LoggingOut,
  };

  return (
    <EssayContext.Provider value={ctxValue}>{children}</EssayContext.Provider>
  );
}
