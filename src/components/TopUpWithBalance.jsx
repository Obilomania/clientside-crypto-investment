import styled from "styled-components";



const TopUpWithBalance = () => {
  return (
    <TopUpModal>
      <div className="closeModal">
        <div className="overlay"></div>
        <form >
          <div className="form-content">
            <label>Account Balance : </label>
            <input
              type="text"
              name="depositAmount"
              disabled
            />
          </div>
          <input type="submit" value="TOP UP" />
        </form>
        <button className="cancel-button">
          X
        </button>
      </div>
    </TopUpModal>
  );
};

const TopUpModal = styled.div`
  width: 100%;
  .closeModal {
    width: 100%;
    height: 80vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 200;
    display: none;
  }
  .theModal {
    width: 100%;
    height: 80vh;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    z-index: 10;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
  }
  form {
    width: 40%;
    color: black;
    background: white;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 2rem;

    .form-content {
      display: flex;
      flex-direction: column;
      align-items: start;
      width: 100%;
      margin-top: 2rem;
      input {
        width: 100%;
        border: 2px solid var(--light);
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
    }
    input {
      width: 100%;
      border: 2px solid var(--light);
      padding: 0.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
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
  .cancel-button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    font-weight: bolder;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    .closeModal {
      width: 100%;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 200;
      display: none;
    }
    .theModal {
      width: 100%;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      z-index: 10;
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
    }
    form {
      width: 40%;
      color: black;
      background: white;
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      padding: 2rem;

      .form-content {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        margin-top: 2rem;
        input {
          width: 100%;
          border: 2px solid var(--light);
          padding: 0.5rem;
          border-radius: 0.5rem;
        }
      }
      input {
        width: 100%;
        border: 2px solid var(--light);
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
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
    .cancel-button {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      font-weight: bolder;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    .closeModal {
      width: 100%;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 200;
      display: none;
    }
    .theModal {
      width: 100%;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      z-index: 10;
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
    }
    form {
      width: 40%;
      color: black;
      background: white;
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      padding: 2rem;

      .form-content {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        margin-top: 2rem;
        input {
          width: 100%;
          border: 2px solid var(--light);
          padding: 0.5rem;
          border-radius: 0.5rem;
        }
      }
      input {
        width: 100%;
        border: 2px solid var(--light);
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
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
    .cancel-button {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      font-weight: bolder;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    .closeModal {
      width: 100%;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 200;
      display: none;
    }
    .theModal {
      width: 100%;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      z-index: 10;
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
    }
    form {
      width: 90%;
      color: black;
      background: white;
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      padding: 2rem;

      .form-content {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        margin-top: 2rem;
        input {
          width: 100%;
          border: 2px solid var(--light);
          padding: 0.5rem;
          border-radius: 0.5rem;
        }
      }
      input {
        width: 100%;
        border: 2px solid var(--light);
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
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
    .cancel-button {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      font-weight: bolder;
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default TopUpWithBalance;
