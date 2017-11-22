import {createStore} from 'redux';
import rootReducer from '../reducers/indexReducer';

export default function configureStore(initialState){
  return createStore(
      rootReducer,
      initialState,
  );    
}