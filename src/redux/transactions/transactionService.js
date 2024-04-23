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




//USER PENDING DEPOSIT
export const getUserPendingDeposit = async () => {
  try {
    const response = await axios.get(
      `${backend_Url}deposit/userpendingdeposit`,
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



//USER PENDING DEPOSIT TOTAL
export const getUserPendingDepositAmount = async () => {
  try {
    const response = await axios.get(
      `${backend_Url}deposit/userpendingdepositdeposittotal`,
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


//USER GET ALL DEPOSIT AMOUNT
export const getAllUserDepositTotal = async () => {
  try {
    const response = await axios.get(
      `${backend_Url}deposit/usertotaldepositamount`,
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


export const theUserLastDeposit = async () => {
  try {
    const response = await axios.get(
      `${backend_Url}deposit/theuserlastdeposit`,
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
      `${backend_Url}withdraw/userlastwithdrawalamount`,
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



//USER GET LAST WITHDRAWAL
export const getUserTotalWithdrawalAmount = async () => {
  try {
    const response = await axios.get(
      `${backend_Url}withdraw/userlastwithdrawalamount`,
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


//USER GET PENDING WITHDRAW
export const getAllUserPendingWithdrawal = async () => {
  try {
    const response = await axios.get(`${backend_Url}withdraw/withdrawal-processing-total`, axiosConfig, {
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