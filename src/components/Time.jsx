import Moment from "react-moment";
import "moment-timezone";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserLastDeposit } from "../redux/transactions/transactionService";
import { top_up_time } from "../redux/transactions/transactionSlice";

const Time = () => {
  const [lastDepos, setLastDepos] = useState('')
  const userAuth = useSelector((state) => state.persistedReducer.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    async function userlastDeposit() {
      const res = await getUserLastDeposit()
      setLastDepos(res)
    }
    userlastDeposit();
  }, [])

  let lastDepoDate = lastDepos?.createdAt;

  let investmentPlan = lastDepos?.plan;
  let SilverPlanFigure = 3;
  let GoldPlanFigure = 5;
  let PlantinumPlanFigure = 5;
  let DiamondPlanFigure = 2;

  if (investmentPlan === "Silver") {
    investmentPlan = SilverPlanFigure;
  } else if (investmentPlan === "Gold") {
    investmentPlan = GoldPlanFigure;
  } else if (investmentPlan === "Plantinum") {
    investmentPlan = PlantinumPlanFigure;
  } else if (investmentPlan === "Diamond") {
    investmentPlan = DiamondPlanFigure;
  }


  const currentDate = new Date(lastDepoDate);
  const daysLater = new Date(currentDate);
  daysLater.setDate(currentDate.getDate() + investmentPlan);
  let duration = daysLater.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
  });


  useEffect(() => {
    if (duration) {
      dispatch(top_up_time(duration));
    }
  }, [dispatch, duration]);

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
          {investmentPlan === "Bronze" || !investmentPlan ? (
            ""
          ) : (
            <>
              <p> TOP UP DUE FOR</p> <span>{duration}</span>
            </>
          )}
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
      font-size: .8rem;
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
