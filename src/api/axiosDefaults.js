import axios from "axios";

// the unique URL of the deployed project
axios.defaults.baseURL = 'https://dj-drf-api-763634fa56e5.herokuapp.com';

// data format the API will be expecting
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

// To avoid any CORS errors when sending cookies,  we also need to set withCredentials to true.
axios.defaults.withCredentials = true;