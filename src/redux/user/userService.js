import axios from "axios";
import { toast } from "react-toastify";

export const backend_Url = "http://localhost:5000/api/";


let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
};


export const validateEmail = async (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


export const registerNewUser = async (userData) => {
    try {
        const response = await axios.post(
          `${backend_Url}user/registration`,
          userData, axiosConfig,
          { withCredentials: true }
        );
        if (response.status === 201) {
            toast.success("Registration successful, Please Login");
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




export const loginUser = async (userData) => {
    try {
        const response = await axios.post(
          `${backend_Url}user/login`,
            userData,
          axiosConfig,
          { withCredentials: true }
        );
      console.log(response)
        if (response.status === 200 || response.statusText === "OK") {
          toast.success("Login is successful");
        }
        return response.data;
    } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return toast.error(message);
    }
}





export const checkLoginStatus = async () => {
    try {
         const response = await axios.get(
           `${backend_Url}user/checkloginstatus`,
            axiosConfig,
           { withCredentials: true }
         );
         return response.data;
    } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return toast.error(message);
    }
}




//User view Profile
export const userProfileInfo = async () => {
  const response = await axios.get(`${backend_Url}user/viewmyprofile`, {
    withCredentials: true,
  });
  return response.data;
};