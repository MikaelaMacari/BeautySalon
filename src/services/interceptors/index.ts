import { AxiosRequestConfig } from "axios";
import { store } from "../../store/store";

export const authInterceptor = (config: AxiosRequestConfig) => {
  const storeState = store.getState();
  const { token } = storeState.auth;

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};
