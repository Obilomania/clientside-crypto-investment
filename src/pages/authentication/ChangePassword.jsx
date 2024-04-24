import MainLayout from "../../components/layout/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Time from "../../components/Time";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from "react";
import { toast } from "react-toastify";
import { userChangePassword } from "../../redux/user/userService";
import Loader from "../../components/Loader";

const ChangePassword = () => {
  const [reveal, setReveal] = useState(false)
  const toggleReveal = () => setReveal(!reveal);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (
       !profile.oldPassword ||
       !profile.newPassword ||
       !profile.confirmPassword
     ) {
       return toast.error("Please fill all fields");
     }
     if (profile.oldPassword === profile.newPassword) {
       return toast.error("Old and new Password cannot be the same");
    }
    setIsLoading(true);
    const response = await userChangePassword({
      oldPassword: profile.oldPassword,
      password: profile.newPassword,
    });
    console.log(response.message)
    if (response.message === "Password changed successfully") {
      navigate("/dashboard")
      setIsLoading(false);
    }

    else if (response.error) {
      toast.error(response.error.data.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  return (
    <MainLayout>
      {isLoading && <Loader/>}
      <EditProfile>
        <div className="dashboard-content">
          <Time />
          <hr />
          <div className="right-dash dash">
            <h5 className="heading-deposit-form">CHANGE PASSWORD</h5>
            <form onSubmit={handleSubmit}>
              <div className="plan-form">
                <label>Old Password :</label>
                <input
                  type={!reveal ? "password" : "text"}
                  name="oldPassword"
                  placeholder="Old Password"
                  value={profile.oldPassword}
                  onChange={(e) => handleInputChange(e)}
                />
                <div className="reveal" onClick={toggleReveal}>
                  {!reveal ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </div>
              </div>
              <div className="plan-form">
                <label>New Password :</label>
                <input
                  type={!reveal ? "password" : "text"}
                  name="newPassword"
                  placeholder="New Password"
                  value={profile.newPassword}
                  onChange={(e) => handleInputChange(e)}
                />
                <div className="reveal" onClick={toggleReveal}>
                  {!reveal ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </div>
              </div>

              <div className="plan-form">
                <label>Confirm New Password :</label>
                <input
                  type={!reveal ? "password" : "text"}
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={profile.confirmPassword}
                  onChange={(e) => handleInputChange(e)}
                />
                <div className="reveal" onClick={toggleReveal}>
                  {!reveal ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </div>
              </div>
              <div className="profile-CAL">
                <button className="submit">&nbsp;CONFIRM&nbsp;</button>

                {/* <Link to={"/dashboard"} className="go-back">
                  CHANGE PASSWORD
                </Link> */}
                <Link to={"/dashboard"} className="go-back">
                  DASHBOARD
                </Link>
              </div>
            </form>{" "}
            <br />
          </div>
        </div>
      </EditProfile>
    </MainLayout>
  );
};

const EditProfile = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 0rem 10rem;
  font-family: "Poppins", sans-serif;
  .dashboard-content {
    padding: 1rem 2rem;
    width: 100%;
    min-height: 80vh;
    height: fit-content;
    background: rgba(214, 214, 214, 0.5);
  }
  h6 {
    margin-top: 1rem;
    span {
      color: var(--primary);
      font-weight: 600;
    }
  }
  .right-dash {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: white;
    border-radius: 0.5rem;
    padding: 1rem;
  }
  .heading-deposit-form {
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
  }
  .dash form {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    span {
      color: var(--primary);
      font-weight: 600;
    }
    .plan-form {
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      position: relative;
      input {
        padding: 0.2rem 1rem;
        width: 100%;
      }
      .reveal {
        position: absolute;
        right: 0.5rem;
        top: 50%;
      }
    }
  }
  .plan-2 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    .passy {
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      width: 50%;
      input {
        width: 100%;
        padding: 0.2rem 1rem;
      }
    }
  }
  .submit {
    text-decoration: none;
    color: black;
    background: none;
    border: 3px solid black;
    border-radius: 2rem;
    padding: 0.2rem 2rem;
    font-weight: 500;
    letter-spacing: 2px;
    transition: var(--transition);
    &:hover {
      background: black;
      color: white;
    }
  }
  label {
    margin-bottom: 0.3rem;
  }
  .profile-CAL {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 2rem;
  }
  .go-back {
    text-decoration: none;
    color: white;
    background: black;
    border: 3px solid black;
    border-radius: 2rem;
    padding: 0.2rem 2rem;
    font-weight: 500;
    letter-spacing: 2px;
    transition: var(--transition);
    &:hover {
      background: none;
      color: black;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .dash form {
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      gap: 0.8rem;
      width: 100%;
      span {
        color: var(--primary);
        font-weight: 600;
      }
      .plan-form {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        input {
          padding: 0.2rem 1rem;
          width: 100%;
        }
      }
    }
    .plan-2 {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      gap: 1rem;
      .passy {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        input {
          width: 100%;
          padding: 0.2rem 1rem;
        }
      }
    }
    .submit {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 2rem;
      padding: 0.2rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      transition: var(--transition);
      &:hover {
        background: black;
        color: white;
      }
    }
    label {
      margin-bottom: 0.3rem;
    }
    .profile-CAL {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 2rem;
    }
    .go-back {
      text-decoration: none;
      color: white;
      background: black;
      border: 3px solid black;
      border-radius: 2rem;
      padding: 0.2rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      transition: var(--transition);
      &:hover {
        background: none;
        color: black;
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .dash form {
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      gap: 0.8rem;
      width: 100%;
      span {
        color: var(--primary);
        font-weight: 600;
      }
      .plan-form {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        input {
          padding: 0.2rem 1rem;
          width: 100%;
        }
      }
    }
    .plan-2 {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      gap: 1rem;
      .passy {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        input {
          width: 100%;
          padding: 0.2rem 1rem;
        }
      }
    }
    .submit {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 2rem;
      padding: 0.2rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      transition: var(--transition);
      &:hover {
        background: black;
        color: white;
      }
    }
    label {
      margin-bottom: 0.3rem;
    }
    .profile-CAL {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 2rem;
    }
    .go-back {
      text-decoration: none;
      color: white;
      background: black;
      border: 3px solid black;
      border-radius: 2rem;
      padding: 0.2rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      transition: var(--transition);
      &:hover {
        background: none;
        color: black;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .dash form {
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      gap: 0.8rem;
      width: 100%;
      span {
        color: var(--primary);
        font-weight: 600;
      }
      .plan-form {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        input {
          padding: 0.2rem 1rem;
          width: 100%;
        }
      }
    }
    .plan-2 {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      gap: 1rem;
      .passy {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;

        input {
          width: 100%;
          padding: 0.2rem 1rem;
        }
      }
    }
    .submit {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 2rem;
      padding: 0.2rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      transition: var(--transition);
      width: 100%;
      text-align: center;
      &:hover {
        background: black;
        color: white;
      }
    }
    label {
      margin-bottom: 0.3rem;
      font-size: 0.8rem;
    }
    .profile-CAL {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      margin-top: 1rem;
    }
    .go-back {
      text-decoration: none;
      color: white;
      background: black;
      border: 3px solid black;
      border-radius: 2rem;
      width: 100%;
      text-align: center;
      padding: 0.2rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      transition: var(--transition);
      &:hover {
        background: none;
        color: black;
      }
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .dash form {
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      gap: 0.8rem;
      width: 100%;
      span {
        color: var(--primary);
        font-weight: 600;
      }
      .plan-form {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        input {
          padding: 0.2rem 1rem;
          width: 100%;
        }
      }
    }
    .plan-2 {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      gap: 1rem;
      .passy {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;

        input {
          width: 100%;
          padding: 0.2rem 1rem;
        }
      }
    }
    .submit {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 2rem;
      padding: 0.2rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      transition: var(--transition);
      width: 100%;
      text-align: center;
      &:hover {
        background: black;
        color: white;
      }
    }
    label {
      margin-bottom: 0.3rem;
      font-size: 0.8rem;
    }
    .profile-CAL {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      margin-top: 1rem;
    }
    .go-back {
      text-decoration: none;
      color: white;
      background: black;
      border: 3px solid black;
      border-radius: 2rem;
      width: 100%;
      text-align: center;
      padding: 0.2rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      transition: var(--transition);
      &:hover {
        background: none;
        color: black;
      }
    }
  }
  @media screen and (max-width: 350px) {
  }
`;

export default ChangePassword;
