import axios from "axios";

// the unique URL of the deployed project
axios.defaults.baseURL = "https://dj-drf-api-763634fa56e5.herokuapp.com";
// axios.defaults.baseURL = "https://8000-eneliviu-djrestapi-vo4ia7gx81e.ws.codeinstitute-ide.net";

// data format the API will be expecting
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

// To avoid any CORS errors when sending cookies
axios.defaults.withCredentials = true;

// axios inteceptors to refresh the tokens
export const axiosReq = axios.create();
export const axiosRes = axios.create();