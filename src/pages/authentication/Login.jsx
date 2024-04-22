import MainLayout from "../../components/layout/MainLayout";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../redux/user/userService";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux"
import { current_signed_in_user, user_role } from "../../redux/user/userSlice";



const initialState = {
  email: "",
  password: "",
};



const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState(initialState);
  const { email, password } = loginInfo;


  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Please fill all fields");
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const response = await loginUser(formData);
    if (response.fullname) {

      dispatch(current_signed_in_user(response))
      dispatch(user_role(response.role))
      navigate("/dashboard");
      setLoading(false);
    }
    setLoading(false);
  };




  return (
    <MainLayout>
      {loading && <Loader />}
      <LogPage>
        <div className="overlay"></div>
        {/* <video className="video" src={Background} autoPlay loop muted /> */}
        <div className="auth-content">
          <h1 className="heading">Sign Into Your Account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email *"
              name="email"
              value={loginInfo.email}
              onChange={(e) => handleInput(e)}
            />
            <input
              type="password"
              placeholder="Password *"
              name="password"
              value={loginInfo.password}
              onChange={(e) => handleInput(e)}
            />
            <input type="submit" className="submit" value="LOGIN" />
          </form>
          <br />
          <div className="dont-have">
            <p className="have-account">
              Forgot Password?
              <Link to={"/forgot-password"}>Click Here</Link>
            </p>
            <p className="have-account">
              Dont have an account?{" "}
              <Link to={"/register"}>Register New Account</Link>
            </p>
          </div>
        </div>
      </LogPage>
    </MainLayout>
  );
};




const LogPage = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    z-index: 5;
  }
  .auth-content {
    position: absolute;
    top: 20%;
    left: 0;
    z-index: 8;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 1rem;
      .password {
        width: 100%;
        position: relative;
        .eye-reveal {
          position: absolute;
          top: 0.5rem;
          right: 1rem;
          cursor: pointer;
        }
      }
      .submit {
        background: var(--primary);
        color: white;
        font-weight: 500;
        letter-spacing: 1px;
        border: 1px solid var(--primary);
        transition: var(--transition);
        &:hover {
          border: 1px solid var(--primary);
          color: var(--primary);
          background: none;
        }
      }
      .form-input {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
      }
      input {
        width: 100%;
        padding: 0.5rem;
        background: transparent;
        border: 1px solid var(--primary);
        color: white;
      }
      .form-checkbox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 1rem;
        font-weight: 500;
        input {
          width: fit-content;
        }
        p {
          width: 100%;
          margin-top: 0.9rem;
          a {
            text-decoration: none;
            color: var(--primary);
            font-weight: 600;
          }
        }
      }
    }
  }
  .dont-have {
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: space-between;
  }
  .have-account a {
    text-decoration: none;
    color: var(--primary);
    font-weight: 600;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: none;
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 5;
    }
    .auth-content {
      position: absolute;
      top: 20%;
      left: 0;
      z-index: 8;
      color: white;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      form {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 1rem;
        .password {
          width: 100%;
          position: relative;
          .eye-reveal {
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            cursor: pointer;
          }
        }
        .submit {
          background: var(--primary);
          color: white;
          font-weight: 500;
          letter-spacing: 1px;
          border: 1px solid var(--primary);
          transition: var(--transition);
          &:hover {
            border: 1px solid var(--primary);
            color: var(--primary);
            background: none;
          }
        }
        .form-input {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          background: transparent;
          border: 1px solid var(--primary);
          color: white;
        }
        .form-checkbox {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 1rem;
          font-weight: 500;
          input {
            width: fit-content;
          }
          p {
            width: 100%;
            margin-top: 0.9rem;
            a {
              text-decoration: none;
              color: var(--primary);
              font-weight: 600;
            }
          }
        }
      }
    }
    .dont-have {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: none;
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 5;
    }
    .auth-content {
      position: absolute;
      top: 20%;
      left: 0;
      z-index: 8;
      color: white;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      form {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 1rem;
        .password {
          width: 100%;
          position: relative;
          .eye-reveal {
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            cursor: pointer;
          }
        }
        .submit {
          background: var(--primary);
          color: white;
          font-weight: 500;
          letter-spacing: 1px;
          border: 1px solid var(--primary);
          transition: var(--transition);
          &:hover {
            border: 1px solid var(--primary);
            color: var(--primary);
            background: none;
          }
        }
        .form-input {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          background: transparent;
          border: 1px solid var(--primary);
          color: white;
        }
        .form-checkbox {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 1rem;
          font-weight: 500;
          input {
            width: fit-content;
          }
          p {
            width: 100%;
            margin-top: 0.9rem;
            a {
              text-decoration: none;
              color: var(--primary);
              font-weight: 600;
            }
          }
        }
      }
    }
    .dont-have {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: none;
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 5;
    }
    .auth-content {
      position: absolute;
      top: 20%;
      left: 0;
      z-index: 8;
      color: white;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 1rem;
        .password {
          width: 100%;
          position: relative;
          .eye-reveal {
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            cursor: pointer;
          }
        }
        .submit {
          background: var(--primary);
          color: white;
          font-weight: 500;
          letter-spacing: 1px;
          border: 1px solid var(--primary);
          transition: var(--transition);
          &:hover {
            border: 1px solid var(--primary);
            color: var(--primary);
            background: none;
          }
        }
        .form-input {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          background: transparent;
          border: 1px solid var(--primary);
          color: white;
        }
        .form-checkbox {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 1rem;
          font-weight: 500;
          input {
            width: fit-content;
          }
          p {
            width: 100%;
            margin-top: 0.9rem;
            a {
              text-decoration: none;
              color: var(--primary);
              font-weight: 600;
            }
          }
        }
      }
    }
    .dont-have {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;

export default Login;
