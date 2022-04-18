import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const host = "http://172.16.46.18/";
const apiUrl = "";
const login = {
  authenticate: "partners/authenticate",
  login: "partners/login",
};

const products = {
	products: "products"
};


export const endpoints = {
  login,
	products
};

/*declare module 'axios' {
  interface AxiosResponse<T extends GenericResponse<T>> extends Promise<T> {}
}*/

class HttpClient {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: host,
    });
    this.axiosInstance.defaults.headers.common = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    this.axiosInstance.interceptors.request.use(this.HandleRequest);
    this.axiosInstance.interceptors.response.use(this.HandleResponse);
  }

  private HandleResponse(response: AxiosResponse) {
    return response.data;
  }

  private HandleRequest(config: AxiosRequestConfig) {
    return config;
  }
}

const client = new HttpClient();

export const get = (url: string): Promise<AxiosResponse<any, any>> => {
  return client.axiosInstance
    .get(apiUrl + "/" + url, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const post = async (
  url: string,
  data: any
): Promise<AxiosResponse<any, any>> => {
  try {
    const res = await client.axiosInstance.post(apiUrl + "/" + url, data);
    return res;
  } catch (error) {
    throw error;
  }

};