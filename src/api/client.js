import axios from "axios";
import { SPRING_URL } from "./url";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;

//const token = localStorage.getItem("token");
const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMyIsImF1dGgiOiIxMyIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2ODk4NDczNDMsImV4cCI6MTY4OTkzMzc0M30.nQudjEFTxNR9NzdHlQYefLGuJpuBzn4I9bZbrc0fW5crahmLBVwI-PrUYlVknhamgDRgTtHzmxA-a8TSnV_Vuw";
//발급받은 토큰 넣어주세요

console.log("현재 토큰", token);

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

console.log(
  "현재 설정된 토큰",
  client.defaults.headers.common["Authorization"]
);

export default client;
