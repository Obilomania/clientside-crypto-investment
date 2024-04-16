import MainLayout from "../../components/layout/MainLayout";
import styled from "styled-components";
import { Link } from "react-router-dom";




const Register = () => {
  return (
    <MainLayout>
      <RegPage>
        <div className="overlay"></div>
        {/* <video className="video" src={Background} autoPlay loop muted /> */}
        <div className="auth-content">
          <h1 className="heading">Register New Account</h1>
          <form >
            <input
              type="text"
              placeholder="Full Name *"
              name="fullname"
            />
            <input
              type="email"
              placeholder="Email *"
              name="email"
            />
            <div className="form-input">
              <div className="password">
                <input
                  type="password"
                  placeholder="Password *"
                  name="password"
                />
                <div className="eye-reveal">
                  {/* {!reveal ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} */}
                </div>
              </div>
              <div className="password">
                <input
                  type="password"
                  placeholder="Confirm Password *"
                  name="confirmPassword"
                />
                <div className="eye-reveal" >
                  {/* {!reveal ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} */}
                </div>
              </div>
            </div>
            <input
              type="btcWallet"
              placeholder="BTC Wallet *"
              name="btcWallet"
            />
            <input
              type="userPromoCode"
              placeholder="Referal Code if Any"
              name="userPromoCode"
            />
            <div className="form-checkbox">
              <input
                type="checkbox"
                name="agree"
              />{" "}
              <p>
                I agree with &nbsp;
                <Link to={"/terms"}>Terms and Conditions</Link>
              </p>
            </div>
            <input type="submit" className="submit" value="REGISTER" />
          </form>
          <br />
          <p className="have-account">
            Have an account?{" "}
            <Link to={"/login"}>Log into Your Account</Link>
          </p>
        </div>
      </RegPage>
    </MainLayout>
  );
};
const RegPage = styled.div`
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
      display: none;
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
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;
    video {
      position: absolute;
      top: 0;
      display: none;
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
      display: none;
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
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default Register;
