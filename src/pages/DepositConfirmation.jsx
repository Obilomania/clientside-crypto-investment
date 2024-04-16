import React from "react";
import MainLayout from "../components/layout/MainLayout";
import styled from "styled-components";

const DepositConfirmation = () => {
  
  return (
    <MainLayout>
      <Confirm>
        <div className="dashboard-content">
          <h1 className="heading">DEPOSIT CONFIRMATION</h1>
          <div className="btc-address">
            {/* <p>
              Please send your payment to{" "}
              <span>bc1qpm63hne4x550ane3x632msnqtxdetegjlzg4ns</span>
            </p> */}
            {/* <div className="input-copy">
              <input
                type="text"
                disabled
                value={copyAddress}
                onChange={handleSubmitChange}
              />
              <CopyToClipboard text={copyAddress}>
                <button className="copy-btc" onClick={copyClicked}>
                  <FiCopy />
                </button>
              </CopyToClipboard>
            </div> */}
            <div className="the-write-ups">
              <p className="confirm-writeups">
                <span>Plan :</span> <b>Bronze</b>
              </p>
              <p className="confirm-writeups">
                <span>Profit :</span> <b>20%</b>
              </p>
              <p className="confirm-writeups">
                <span>Principal Return: :</span> Yes
              </p>
              <p className="confirm-writeups">
                <span>Principal Withdrawal :</span> Available with 0.00% fee
              </p>
              <p className="confirm-writeups">
                <span>Status :</span>{" "}
                  <span className="span-processing">Processing ...</span>
                  <span className="span-success">Successful</span>
              </p>
              <p className="confirm-writeups">
                <span>Credit Amount :</span>
                <b> $ 20</b>
              </p>
            </div>
            {/* <form className="transaction-id"> */}
            {/* <input type="text" placeholder="Enter Transaction Id" /> */}
            {/* <button type="submit" className="submit">
                SAVE
              </button>
            </form> */}
            <div className="note-this">
              <p className="text-danger fw-bold">
                Contact Support via chat if balance doesnt reflect in your
                available balance after 10 mins
              </p>
            </div>
            <button className="submit" >
              BACK TO DASHBOARD
            </button>
          </div>
        </div>
      </Confirm>
    </MainLayout>
  );
};
const Confirm = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 0rem 10rem;
  font-family: "Poppins", sans-serif;
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
  .input-copy {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin-bottom: 1.5rem;
    input {
      width: 90%;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      letter-spacing: 1px;
    }
    button {
      padding: 0.5rem;
      width: 10%;
    }
  }
  .btc-address {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
    span {
      font-weight: 600;
    }
  }
  .the-write-ups {
    width: 40%;
  }
  .confirm-writeups {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .transaction-id {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    input {
      width: 100%;
      padding: 0.5rem 1rem;
    }
  }
  button {
    border: 1px solid var(--primary);
    background: var(--primary);
    color: white;
    width: 40%;
    padding: 0.5rem 1rem;
    font-weight: 500;
    letter-spacing: 1px;
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
    .input-copy {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60%;
      margin-bottom: 1.5rem;
      input {
        width: 90%;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        letter-spacing: 1px;
      }
      button {
        padding: 0.5rem;
        width: 10%;
      }
    }
    .btc-address {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 2rem 0;
      span {
        font-weight: 600;
      }
    }
    .the-write-ups {
      width: 60%;
    }
    .confirm-writeups {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .transaction-id {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      input {
        width: 100%;
        padding: 0.5rem 1rem;
      }
      button {
        border: 1px solid var(--primary);
        background: var(--primary);
        color: white;
        width: 100%;
        padding: 0.5rem 1rem;
        font-weight: 500;
        letter-spacing: 1px;
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
    .input-copy {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin-bottom: 1.5rem;
      input {
        width: 90%;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        letter-spacing: 1px;
      }
      button {
        padding: 0.5rem;
        width: 10%;
      }
    }
    .btc-address {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 2rem 0;
      span {
        font-weight: 600;
      }
    }
    .the-write-ups {
      width: 80%;
    }
    .confirm-writeups {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .transaction-id {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      input {
        width: 100%;
        padding: 0.5rem 1rem;
      }
      button {
        border: 1px solid var(--primary);
        background: var(--primary);
        color: white;
        width: 100%;
        padding: 0.5rem 1rem;
        font-weight: 500;
        letter-spacing: 1px;
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
    .input-copy {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 1.5rem;
      input {
        width: 90%;
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
        letter-spacing: 1px;
      }
      button {
        padding: 0.5rem;
        width: 10%;
        font-size: 0.8rem;
      }
    }
    .btc-address {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 2rem 0;
      span {
        font-weight: 600;
      }
    }
    .the-write-ups {
      width: 100%;
    }
    .confirm-writeups {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .transaction-id {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      input {
        width: 100%;
        padding: 0.5rem 1rem;
      }
      button {
        border: 1px solid var(--primary);
        background: var(--primary);
        color: white;
        width: 100%;
        padding: 0.5rem 1rem;
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 0.8rem;
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
    .input-copy {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 1.5rem;
      input {
        width: 90%;
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
        letter-spacing: 1px;
      }
      button {
        padding: 0.5rem;
        width: 10%;
        font-size: 0.8rem;
      }
    }
    .btc-address {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 1rem 0;
      span {
        font-weight: 600;
      }
    }
    .the-write-ups {
      width: 100%;
    }
    .confirm-writeups {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .transaction-id {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      input {
        width: 100%;
        padding: 0.5rem 1rem;
      }
      button {
        border: 1px solid var(--primary);
        background: var(--primary);
        color: white;
        width: 100%;
        padding: 0.5rem 1rem;
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: 350px) {
  }
`;
export default DepositConfirmation;
