import {createAsyncThunk} from '@reduxjs/toolkit';
import {store, api} from 'store';
import {saveToken, dropToken, getToken} from 'services/token';
import {requireAuthorization, setUserData, redirectToRoute} from './actions';
import {AuthorizationStatus} from 'const';


export const loginAction = createAsyncThunk(`user/login`,
    async (loginData) => {
      try {
        const {data} = await api.post(`/api/login`, loginData);
        const {data: userData} = data;
        saveToken(userData.token);
        store.dispatch(setUserData(userData));
        store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
        store.dispatch(redirectToRoute(`/user`));
      } catch (error) {
        store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      }
    }
);

export const checkAuthAction = createAsyncThunk(`user/checkAuth`,
    async () => {
      try {
        const {data} = await api.get(`/api/login`);
        const {data: userData} = data;
        // saveToken(userData.token);
        store.dispatch(setUserData(userData));
        store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      } catch (error) {
        dropToken();
        store.dispatch(setUserData(null));
        store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      }
    },
);

export const regitrationAction = createAsyncThunk(`user/registration`,
    async (regData) => {
      try {
        const {data} = await api.post(`/api/registration`, regData);
        const {data: userData} = data;
        saveToken(userData.token);
        store.dispatch(setUserData(userData));
        store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
        console.log(`Успешная Регистрация`);
      } catch (error) {
        // dropToken();
        store.dispatch(setUserData(null));
        store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        console.log(`Ошибка Регистрации`);
      }
    },
);

export const logoutAction = createAsyncThunk(`user/logout`,
    async () => {
      store.dispatch(setUserData(null));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dropToken();
      // try {
      //   await api.delete(`/api/logout`);
      //   store.dispatch(setUserData(null));
      //   store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      //   dropToken();
      // } catch (error) {
      //   store.dispatch(setUserData(null));
      //   store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      //   dropToken();
      // }
    },
);
