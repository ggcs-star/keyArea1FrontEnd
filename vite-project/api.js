// src/api/api.js
import axios from "axios";

// export const BASE_URL = "http://192.168.1.74:8000";
// export const BASE_URL = "http://192.168.0.120:8000";
// export const BASE_URL = "http://192.168.1.82:8000";
// export const BASE_URL = "http://192.168.0.122:8000";
// export const BASE_URL = "http://10.26.203.153:8000";
// export const BASE_URL = "http://192.168.0.105:8000";
// export const BASE_URL = "http://10.108.14.153:8000";

// export const BASE_URL = "http://10.23.252.153:8000";
export const BASE_URL = "https://backend.keyarea1.com/public";


const API = axios.create({
  baseURL: `${BASE_URL}/api/`,
});

export const getPreferredCities = () => API.get("/findProperty");
export const getBudgetProjects = () => API.get("budget-50lac-1cr");
export const get2BhkProperty = () => API.get("2bhk-property");
export const get3BhkProperty = () => API.get("3bhk-property");
export const get4BhkProperty = () => API.get("4bhk-property");
export const get5BhkProperty = () => API.get("5bhk-property");
export const getBungalowProperty = () => API.get("bungalow");

export const getProjectById = (id) => API.get(`projects/${id}`);
export const getProjectUnitsById = (id) => API.get(`projects/${id}/units`);
