import { deleteCookie, setCookie } from 'cookies-next';
import { makeAutoObservable } from 'mobx';

import { AuthEnum } from '@/utils/consts';

class Auth {
  authToken: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthToken = (token: string) => {
    this.authToken = token;
    setCookie(AuthEnum.AUTH_TOKEN, token);
  };

  removeToken = () => {
    this.authToken = null;
    deleteCookie(AuthEnum.AUTH_TOKEN);
  };

  get isUser(): boolean {
    return !!this.authToken;
  }
}

const store = new Auth();

export const useAuthStore = () => store;
