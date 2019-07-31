// Libraries
import axios from "axios";

// Config
import * as config from "../config";

export const api = (url, params, isApiKey, auth) => {
  return new Promise((resolve, reject) => {
    const htUrl = config.apiHost() + url;
    let headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    };
    if (auth) {
      headers.Authorization = `Bearer ${auth.token}`
    }
    if (isApiKey) {
      headers["api-key"] = config.apiKey;
    }
    axios
      .create({ headers })
      .post(htUrl, params)
      .then(response => {
        if (response.status != 200) {
          reject({ Message: "API external error" });
          return;
        }
        resolve({
          Data: response.data,
        });
        return;
      })
      .catch(error => {
        if (!error.response) {
          reject({ Message: "API external error" });
          return;
        }
        if (!error.response.data) {
          reject({ Message: "API internal error" });
          return;
        }
        reject(error.response.data);
        return;
      });
  });
};