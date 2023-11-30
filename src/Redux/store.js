
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import localizationReducer from './localization/localizacion-slice';
import storage from 'redux-persist/lib/storage';

const persistConfigLocalization = {
    key: 'localization',
    storage,
};



const store = configureStore({
    reducer: {
    localization: persistReducer(persistConfigLocalization, localizationReducer)},
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
  
  });


const persistor = persistStore(store);

export { store, persistor };
