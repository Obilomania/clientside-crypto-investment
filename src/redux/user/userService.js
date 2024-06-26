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

//User Log Out
export const userlogout = async () => {

  try {
    await axios.get(`${backend_Url}user/logout`, {
      withCredentials: true,
    });
    toast.success("User is Logged out!!! ");
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};




//User Update Profile
export const userUpdateProfile = async (userData) => {
  try {
    const response = await axios.put(
      `${backend_Url}user/editprofile`,
      userData,
      axiosConfig,
      { withCredentials: true }
    );
    console.log(response);
    if (response.status === 200) {
      toast.success("Updated Successfully");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return toast.error(message);
  }
};



//User Change Password
export const userChangePassword = async (userData) => {
  try {
    const response = await axios.put(
      `${backend_Url}user/userchangepassword`,
      userData,
      axiosConfig,
      {
        withCredentials: true,
      }
    );
    if (
      response.statusText === "OK" ||
      response.status === 200 ||
      response?.data?.success === true
    ) {
      toast.success(response?.data?.message);
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error?.data?.message ||
      error.message ||
      error.toString();
    return toast.error(message);
  }
};