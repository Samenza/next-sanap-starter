import axios from "axios";
import { useState } from "react";

type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH";

type StatusTypes = "idle" | "pending" | "resolved" | "rejected";
interface Api<T = any> {
  url: string;
  method: Method;
  params?: object;
  message?: string;
  data?: object;
  successFunc?: (res: T) => void;
  errorFunc?: (err: T) => void;
}
const instance = axios.create({
  baseURL: "https://sa-day1.iranianpooshesh.com",
  headers: {
    Authorization: `jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYxMjI4NjQ4LCJqdGkiOiI1YTZlMWNkYWM4YjM0ZTcwYTJiYWUyMGZlZGE1YTk5NSIsInVzZXJfaWQiOjUxfQ.eiCjSgHvtIcfSqicis6HIi1TpA3B0YCzc0P-u_K8WUQ`,
  },
});

const useAxios = () => {
  const [status, setStatus] = useState<StatusTypes>("idle");
  const [loading, setLoading] = useState<boolean>(false);

  function api(apiParams: Api) {
    setStatus("pending");
    setLoading(true);
    instance({
      method: apiParams.method?.toUpperCase(),
      url: apiParams.url,
      params: apiParams.params,
      data: apiParams.data,
    })
      .then((response) => {
        setLoading(false);
        setStatus("resolved");
        apiParams.successFunc?.(response.data);
      })
      .catch((err) => {
        setLoading(false);
        setStatus("rejected");
        apiParams.errorFunc?.(err);
      });
  }

  return { api, status, loading };
};

export default useAxios;
