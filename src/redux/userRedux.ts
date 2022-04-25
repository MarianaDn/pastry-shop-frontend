//action-types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//actions
export const loginStart = () => ({ type: LOGIN_START});
export const loginSuccess = (payload: any) => ({ type: LOGIN_SUCCESS, payload });
export const loginFailure = () => ({ type: LOGIN_FAILURE });

type State = {
  currentUser: null;
  isFetching: boolean,
  error: boolean;
};

//reducer
const initialState: State = {
  currentUser: null,
  isFetching: false,
  error: false
};


type loginStart = { type: typeof LOGIN_START; };
type loginSuccess = { type: typeof LOGIN_SUCCESS; payload: any };
type loginFailure = { type: typeof LOGIN_FAILURE; };

export const userReducer = (state = initialState, action: loginStart | loginSuccess | loginFailure) => {
  switch (action.type) {
    
    case LOGIN_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
      case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: true,
        currentUser: action.payload,
        error: false,
      };
      case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
