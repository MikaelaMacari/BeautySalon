import axios, { Axios } from "axios";
import { authInterceptor } from "../interceptors";

export class HttpService {
  private readonly axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axios.interceptors.request.use(authInterceptor);

    this.axios.interceptors.response.use(
      (response: any) => {
        return response.data;
      },
      (error) => {
        if (error.response.status === 401) {
          window.location.href = "/login";
          return;
        }

        return Promise.reject(error.response.data);
      }
    );
  }

  public getInstance(): any {
    return this.axios;
  }
}

const Http = new HttpService();

export default Http.getInstance();
