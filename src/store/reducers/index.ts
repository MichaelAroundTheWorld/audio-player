import { combineReducers } from 'redux';
import { favouriteReducer } from './favouriteReducer';

export const rootReducer = combineReducers({
  favourite: favouriteReducer,
});

//для создания кастомного хука useSelector
// сам по себе useSelector не особо дружит с ts и нужно делать кастом
// export type RootState = ReturnType<typeof rootReducer>;
