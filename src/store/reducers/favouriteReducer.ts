import { UserActions, userActionTypes, UserState } from '../types/User';

const initialState: UserState = {
  items: [],
};

export const favouriteReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case userActionTypes.ADD_TO_FAVOURITES:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
