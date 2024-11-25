// third-party
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector, TypedUseSelectorHook } from 'react-redux';

import { persistStore } from 'redux-persist';

// project imports
import rootReducer from './reducer';
import { countryApi } from 'services/countryApi';
import { dashboardApi } from 'services/dashboardApi';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
            .concat(countryApi.middleware)
            .concat(dashboardApi.middleware)
});

const persister = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, persister, dispatch, useSelector, useDispatch };
