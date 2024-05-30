import axios from "axios"
import EnvironmentVars from "@/conf/environmentVar";
const axiosInstance=axios.create(EnvironmentVars.BACKEND_URL);
export default axiosInstance;


