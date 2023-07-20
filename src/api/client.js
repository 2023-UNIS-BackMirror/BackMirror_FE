import axios from "axios";
import { SPRING_URL } from "./url";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;

//const token = localStorage.getItem("token");
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNCIsImF1dGgiOiIxNCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2ODk4ODE3OTl9.-znGRta9ZFKi8B0M20AXNOzYhGfXJtIZAzecSsl4y028b2qOCkZVur4OeGioJZmaifsG7HmJjSCWSnmdVb6Pnw";

console.log("현재 토큰", token);

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

console.log(
  "현재 설정된 토큰",
  client.defaults.headers.common["Authorization"]
);

export default client;
