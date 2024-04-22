import axios from "axios";
import { toast } from "react-toastify";
import { backend_Url } from "../user/userService";


let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
};


export const getUserAccountBalance = async () => {
  try {
    const response = await axios.get(
      `${backend_Url}transactions/my-account-balance`,
      axiosConfig,
      { withCredentials: true }
      );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return toast.error(message);
  }
};

//USER GET LAST DEPOSIT
export const getUserLastDeposit = async () => {
  try {
    const response = await axios.get(
      `${backend_Url}deposit/userlastdeposit`,
      axiosConfig,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return toast.error(message);
  }
};



//USER GET ALL DEPOSIT
export const getAllUserDeposit = async () => {
  try {
    const response = await axios.get(
      `${backend_Url}deposit/`,
      axiosConfig,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return toast.error(message);
  }
};




//USER GET LAST WITHDRAWAL
export const getUserLastWithdrawal = async () => {
    try {
      const response = await axios.get(
        `${backend_Url}withdraw/userlastwithdrawal`,
        axiosConfig,
        {
          withCredentials: true,
        }
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




//USER GET ALL WITHDRAW
export const getAllUserWithdraw = async () => {
  try {
    const response = await axios.get(`${backend_Url}withdraw/`, axiosConfig, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return toast.error(message);
  }
};


// USER GET ALL TRANSACTION
export const getAllUsertransactions = async () => {
  try {
    const response = await axios.get(`${backend_Url}transactions/my-transactions`, axiosConfig, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return toast.error(message);
  }
};