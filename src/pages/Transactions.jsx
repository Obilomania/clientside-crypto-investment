import MainLayout from "../components/layout/MainLayout";
import styled from "styled-components";
import Time from "../components/Time";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUsertransactions } from "../redux/transactions/transactionService";
import {  all_user_transactions } from "../redux/transactions/transactionSlice";




const Transactions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserTransactions() {
      const response = await getAllUsertransactions()
      if (response) {
        dispatch(all_user_transactions(response))
      }
    }
    getUserTransactions()
  }, [dispatch])


  const allTransactions = useSelector(state => state.persistedReducer.transactions)

  const allDeposits = allTransactions.deposits
  const allWithdrawals = allTransactions.withdrawals

  console.log(allDeposits)


  return (
    <MainLayout>
      <Transact>
        <div className="dashboard-content">
          <Time />
          <hr />
          <br />
          <div className="right-dash dash">
            <h5 className="heading-deposit-form">ALL TRANSACTIONS</h5>
            {/* <div className="filter-transact">
              THIS IS WHERE THE FILTER WILL COME IN
            </div> */}
            <h6>
              <b>WITHDRAWALS</b>
            </h6>
            <div className="div-table">
              <div className="table-heading the-row">
                <p className="amount">AMOUNT</p>
                <p className="timing">TIME</p>
                <p className="plan">STATUS</p>
                <p className="status">WALLET</p>
              </div>
              {/* ------------------------------------- */}
              {allWithdrawals ? <>
                {allWithdrawals.map(withdraw => <>
                  <div className="table-body the-row one">
                    <p className="amount">
                      $ {withdraw?.amount}
                    </p>
                    <p className="timing">{withdraw?.created}</p>
                    <p className="timing">
                      {withdraw?.isProcessing ? <span className="span-processing">Processing</span> : <span className="span-success">Successful</span>}
                    </p>
                    <p className="wallet">
                      adhi9d800rn0df9dsn00sdujs0d0sdfs0gsjsd000
                    </p>
                  </div>
                </>)}
              </> : <div className="table-body the-row one no-transaction">
                <p className="text-danger">NO WITHDRAWAL MADE</p>
              </div>}

            </div>{" "}
            <hr />
            <h6>
              <b>DEPOSITS</b>
            </h6>
            <div className="div-table">
              <div className="table-heading the-row">
                <p className="amount">AMOUNT</p>
                <p className="timing">TIME</p>
                <p className="plan">PLAN</p>
                <p className="status">STATUS</p>
              </div>
              {/* ------------------------------------- */}
              {allDeposits ? <>{
                allDeposits.map(depo => <>
                  <div className="table-body the-row one" key={depo._id}>
                    <p className="amount">
                      $ {depo?.amount}
                    </p>
                    <p className="timing">{depo?.created}</p>
                    <p className="plan">{depo?.plan}</p>
                    <p className="status">
                      {depo?.isProcessing ? <span className="span-processing">Processing</span> : <span className="span-success">Successful</span>}


                    </p>
                  </div>
                </>)
              } </> : <div className="table-body the-row one no-transaction">
                <p className="text-danger">NO DEPOSIT MADE</p>
              </div>}

            </div>
          </div>
          <button onClick={() => navigate(-1)}>GO BACK</button>
        </div>
      </Transact>
    </MainLayout>
  );
};

const Transact = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 0rem 10rem;
  font-family: "Poppins", sans-serif;
  z-index: 1;
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
  .amount {
    width: 15%;
  }
  .status {
    width: 40%;
    text-align: center;
  }
  .timing {
    width: 15%;
    text-align: center;
  }
  .plan {
    width: 15%;
    text-align: center;
  }
  .wallet {
    width: 40%;
    text-align: center;
  }
  hr {
    height: 2px;
    width: 100%;
    background: var(--background-color);
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
export default Transactions;
