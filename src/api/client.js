import axios from "axios";
import { SPRING_URL } from "./url";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;

//const token = localStorage.getItem("token");
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNCIsImF1dGgiOiIxNCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2ODk4NDg1MzcsImV4cCI6MTY4OTkzNDkzN30.d5e9ntr5haVYWRxZAGgXCLBr0YslauumKyD1DE_Pgl1H7WXH3zHtAa9aVBDgz7HrZnWC9wl--g6Xf_JgSfuGiQ";
console.log("현재 토큰", token);

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

console.log(
  "현재 설정된 토큰",
  client.defaults.headers.common["Authorization"]
);

export default client;
