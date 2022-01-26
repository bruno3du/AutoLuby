import axios from "axios";

export const api = axios.create({
  baseURL: 'https://autoluby.dev.luby.com.br/'
})