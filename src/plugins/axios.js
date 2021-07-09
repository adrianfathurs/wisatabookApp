"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || "https://wisbuk.herokuapp.com";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  //  baseURL: process.env.baseURL || process.env.apiUrl || "http://localhost:3000"
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

export const api = axios.create(config);

api.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = api;
  window.axios = api;
  Object.defineProperties(Vue.prototype, {
    api: {
      get() {
        return api;
      }
    },
    $api: {
      get() {
        return api;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
