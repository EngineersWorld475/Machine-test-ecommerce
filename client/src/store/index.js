import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import userReducer from './slices/userSlice';

const artifRootReducer = combineReducers({
    artifuser: userReducer,
  }); 

const artifPersistConfig = {
  key: 'artifroot',
  storage, 
  version: 1,
};

const artifPersistedReducer = persistReducer(artifPersistConfig, artifRootReducer);

const store = configureStore({
  reducer: artifPersistedReducer,
    middleware: (getDefaultMiddleWare) => 
        getDefaultMiddleWare({ serializableCheck: false }),
    
});

const persistor = persistStore(store); 

export { store, persistor };
