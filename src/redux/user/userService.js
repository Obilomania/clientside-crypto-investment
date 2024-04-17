import axios from "axios";
import { toast } from "react-toastify";

export const backend_Url = `${process.env.REACT_APP_BACKEND_URL}`


export const validateEmail = async (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


export const registerNewUser = async (userData) => {
    try {
        const response = await axios.post(`${backend_Url}user/registration`, userData, { withCredentials: true })
        console.log(userData);
        if (response.status === 201) {
            toast.success("Registration is successful");
        }
        return response.data;
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return toast.error(message);
    }
}