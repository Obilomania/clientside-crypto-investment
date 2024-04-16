import styled from "styled-components";
import MainLayout from "../components/layout/MainLayout";
import TopUpWithBalance from "../components/TopUpWithBalance";
import TopUpWithBitcoin from "../components/TopUpWithBitcoin";

const TopUp = () => {

  return (
    <MainLayout>
      <Toppings>
        <div className="dashboard-content">
          <div className="top">
            <h5>
              Plan : <span>Silver</span>
            </h5>
            <h5>
              Account Balance : <span> $ 350</span>
            </h5>
            <h5>
              Last Deposit : <span> $35</span>
            </h5>
            <h5>
              First time of Deposit : <span>12:00AM</span>
            </h5>
            <h5>
              Top Up Due Date : <span>4 weeks</span>
            </h5>
            <div className="top-up-btns">
              <button>Top Up With Balance</button>
              <button >Top Up With Bitcoin</button>
            </div>

            <div className="top-it-up">
              <TopUpWithBalance />
              <TopUpWithBitcoin />
            </div>
          </div>
        </div>
      </Toppings>
    </MainLayout>
  );
};
const Toppings = styled.div`
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
  .top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h5 {
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      span {
        color: red;
        font-weight: 600;
      }
    }
  }
  .top-up-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    button {
      margin-top: 0.5rem;
      border: 2px solid var(--light);
      background: var(--light);
      padding: 0.2rem 1.5rem;
      border-radius: 2rem;
      color: white;
      letter-spacing: 1px;
      transition: var(--transition);
      text-transform: uppercase;
      letter-spacing: 1px;
      &:hover {
        background: none;
        color: var(--background);
      }
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
    .top {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        span {
          color: red;
          font-weight: 600;
        }
      }
    }
    .top-up-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      button {
        margin-top: 0.5rem;
        border: 2px solid var(--light);
        background: var(--light);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        color: white;
        letter-spacing: 1px;
        transition: var(--transition);
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
          background: none;
          color: var(--background);
        }
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
    padding: 0rem 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .top {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        span {
          color: red;
          font-weight: 600;
        }
      }
    }
    .top-up-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      button {
        margin-top: 0.5rem;
        border: 2px solid var(--light);
        background: var(--light);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        color: white;
        letter-spacing: 1px;
        transition: var(--transition);
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
          background: none;
          color: var(--background);
        }
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
    padding: 0rem 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .top {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        span {
          color: red;
          font-weight: 600;
        }
      }
    }
    .top-up-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      button {
        margin-top: 0.5rem;
        border: 2px solid var(--light);
        background: var(--light);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        color: white;
        letter-spacing: 0px;
        font-size: 0.6rem;
        transition: var(--transition);
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
          background: none;
          color: var(--background);
        }
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
    padding: 0rem 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .top {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 0px;
        span {
          color: red;
          font-weight: 600;
        }
      }
    }
    .top-up-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      button {
        margin-top: 0.5rem;
        border: 2px solid var(--light);
        background: var(--light);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        color: white;
        letter-spacing: 0px;
        font-size: 0.6rem;
        transition: var(--transition);
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
          background: none;
          color: var(--background);
        }
      }
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 0rem 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .top {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 0px;
        span {
          color: red;
          font-weight: 600;
        }
      }
    }
    .top-up-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      button {
        margin-top: 0.5rem;
        border: 2px solid var(--light);
        background: var(--light);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        color: white;
        letter-spacing: 0px;
        font-size: 0.6rem;
        transition: var(--transition);
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
          background: none;
          color: var(--background);
        }
      }
    }
  }
`;

export default TopUp;
