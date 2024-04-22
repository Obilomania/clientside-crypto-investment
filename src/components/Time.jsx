import Moment from "react-moment";
import "moment-timezone";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { useSelector } from "react-redux";

const Time = () => {
  const userAuth = useSelector((state) => state.persistedReducer.auth);


  //Time and Greeting and Time note
  let today = new Date();
 let greeting = () => {
   if (today.getHours() >= 5 && today.getHours() < 11) {
     return "Good Morning";
   } else if (today.getHours() >= 11 && today.getHours() < 17) {
     return "Good Afternoon";
   } else if (today.getHours() >= 17 && today.getHours() < 24) {
     return " Good Evening";
   } else {
     return "Wow!!! its late, Why are you Up? ";
   }
 };


  return (
    <Timing>
      <div className="time">
        <p className="clock">
          <Moment format="hh:mm:ss" interval={1000}></Moment>
        </p>
        <h6 className="heading">
          {greeting().toUpperCase().toUpperCase()}
          <span>
            <Link to={"/my-profile"}>
              {userAuth?.currentUser?.fullname} <FiExternalLink />
            </Link>
          </span>
        </h6>
        <div className="duration">
          <p> TOP UP DUE FOR</p> <span>Sunday</span>
        </div>
        {/* <h6> AND</h6> */}
      </div>
    </Timing>
  );
};

const Timing = styled.div`
  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 10rem; */
    color: var(--color-white);
    line-height: 2rem;
  }
  .time p {
    color: var(--color-white);
    font-family: "Orbitron", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
  .time h6 {
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    a {
      color: var(--primary);
      font-weight: 600;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
  .duration {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1rem;
    margin-top: 1rem;
    font-weight: 600;
    p {
      font-size: 1rem;
    }
    span {
      font-size: 1.5rem;
      color: var(--primary);
      text-transform: uppercase;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0.1rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .duration {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 0.5rem;
      margin-top: 0rem;
      font-weight: 600;
      p {
        font-size: 0.8rem;
      }
      span {
        font-size: 1rem;
        color: var(--primary);
        text-transform: uppercase;
        font-family: "Poppins", sans-serif;
        letter-spacing: 0.1rem;
        line-height: 1rem;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    .duration {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 0.5rem;
      margin-top: 0rem;
      font-weight: 600;
      p {
        font-size: 0.8rem;
      }
      span {
        font-size: 1rem;
        color: var(--primary);
        text-transform: uppercase;
        font-family: "Poppins", sans-serif;
        letter-spacing: 0.1rem;
        line-height: 1rem;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default Time;
