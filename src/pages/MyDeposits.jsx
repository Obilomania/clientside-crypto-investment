import React from "react";
import MainLayout from "../components/layout/MainLayout";
import styled from "styled-components";
import Time from "../components/Time";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyDeposits = () => {
  const navigate = useNavigate()
  const allTransaction = useSelector((state) => state.persistedReducer.transactions);
  console.log(allTransaction?.withdrawals)
  let deposits = allTransaction.deposits

  return (
    <MainLayout>

      <MyDepositSection>
        <div className="dashboard-content">
          <Time />
          <hr />
          <br />
          <div className="right-dash dash">
            <h5 className="heading-deposit-form">ALL MY DEPOSITS</h5>
            <div className="div-table">
              <div className="table-heading the-row">
                <p className="amount">Amount</p>
                <p className="timing">Time</p>
                <p className="status">Status</p>
                {/* <p className="btc-address">Wallet Address</p> */}
              </div>
              {/* ------------------------------------- */}
              {!deposits || deposits.length === 0 ? <div className="table-body the-row one no-transaction">
                <p className="text-danger">NO DEPOSIT MADE</p>
              </div> : (
                <>
                  {deposits.map(depo => (
                    <div className="table-body the-row one" key={depo._id}>
                      <p className="amount">
                        $ {depo?.amount.toLocaleString("en-US")}
                      </p>
                      <p className="timing">{depo?.created}</p>
                      <p className="status">
                        {depo?.isProcessing === false ? (
                          <span className="span-processing">Processing</span>
                        ) : (
                          <span className="span-success">Successful</span>
                        )}
                      </p>
                      {/* <p className="btc-address">Wallet Address</p> */}
                    </div>
                  ))}
                </>
              )}


            </div>
          </div>
          <button onClick={() => navigate(-1)}>GO BACK</button>
        </div>
      </MyDepositSection>
    </MainLayout>
  );
};

const MyDepositSection = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 0rem 10rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  .no-transaction {
    width: 100%;
    p {
      width: 100%;
      text-align: center;
      font-weight: bolder;
      color: var(--primary);
    }
  }
  .span-processing {
    color: var(--primary);
  }
  .span-success {
    color: green;
  }
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
    padding: 1rem 2rem;
  }
  .heading-deposit-form {
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
  }
  .div-table {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  .the-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .table-heading {
    background: var(--background-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.1rem 1rem;
    p {
      margin-top: 0.5rem;
    }
  }
  .div-table .one {
    background: var(--light-black);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.1rem 1rem;
    margin-top: 0.5rem;
    p {
      margin-top: 0.5rem;
      color: black;
    }
  }
  button {
    text-decoration: none;
    color: black;
    background: none;
    border: 3px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    transition: var(--transition);
    margin-top: 1rem;
    &:hover {
      background: black;
      color: white;
    }
  }

  .amount {
    width: 15%;
    text-align: start;
  }
  .timing {
    width: 15%;
    text-align: center;
  }
  .status {
    width: 20%;
    text-align: center;
  }
  .btc-address {
    width: 40%;
    text-align: center;
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
      padding: 1rem 2rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .div-table {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
    .btc-address {
      display: none;
    }
    .the-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .table-heading {
      background: var(--background-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      p {
        margin-top: 0.5rem;
      }
    }
    .div-table .one {
      background: var(--light-black);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      margin-top: 0.5rem;
      p {
        margin-top: 0.5rem;
        color: black;
      }
    }
    button {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 0.5rem;
      padding: 0.5rem 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin-top: 1rem;
      &:hover {
        background: black;
        color: white;
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
      padding: 1rem 2rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .div-table {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
    .the-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .table-heading {
      background: var(--background-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      p {
        margin-top: 0.5rem;
      }
    }
    .div-table .one {
      background: var(--light-black);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      margin-top: 0.5rem;
      p {
        margin-top: 0.5rem;
        color: black;
      }
    }
    button {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 0.5rem;
      padding: 0.5rem 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin-top: 1rem;
      &:hover {
        background: black;
        color: white;
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
    .div-table {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
    .the-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .table-heading {
      background: var(--background-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      p {
        margin-top: 0.5rem;
      }
    }
    .div-table .one {
      background: var(--light-black);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      margin-top: 0.5rem;
      p {
        margin-top: 0.5rem;
        color: black;
      }
    }
    button {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 0.5rem;
      padding: 0.3rem 1rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin-top: 1rem;
      font-size: 0.7rem;
      &:hover {
        background: black;
        color: white;
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
    .div-table {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
    .the-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .table-heading {
      background: var(--background-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      p {
        margin-top: 0.5rem;
      }
    }
    .div-table .one {
      background: var(--light-black);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      margin-top: 0.5rem;
      p {
        margin-top: 0.5rem;
        color: black;
      }
    }
    button {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 0.5rem;
      padding: 0.3rem 1rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin-top: 1rem;
      font-size: 0.7rem;
      &:hover {
        background: black;
        color: white;
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
    .div-table {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
    .the-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .table-heading {
      background: var(--background-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      p {
        margin-top: 0.5rem;
      }
    }
    .div-table .one {
      background: var(--light-black);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      margin-top: 0.5rem;
      p {
        margin-top: 0.5rem;
        color: black;
      }
    }
    button {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 0.5rem;
      padding: 0.3rem 1rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin-top: 1rem;
      font-size: 0.7rem;
      &:hover {
        background: black;
        color: white;
      }
    }
  }
`;
export default MyDeposits;
