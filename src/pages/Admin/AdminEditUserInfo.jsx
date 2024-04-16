import MainLayout from "../../components/layout/MainLayout";
import styled from "styled-components";

const AdminEditUserInfo = () => {
  
  return (
    <MainLayout>
      <AdminUserEdit>
            <br />
            <h1 className="heading">EDIT USER BTC WALLET INFORMATION</h1> <br />
            <br />
            <br />
            <div className="form-content">
              <p>
                <b>Old Wallet Address : &nbsp; kjlbsfs87ftd9s87dvgzbxcjvgoxgvxozfd</b>
              </p>
              <form>
                <div className="plan-form">
                  <label>Wallet Address : </label>
                  <input
                    type="text"
                    name="btcWallet"
                    placeholder="wallet address"
                  />
                </div>
                <div className="call-to-action">
                  <button className="submit">&nbsp;UPDATE&nbsp;</button>
                  <button
                    className="submit"
                  >
                    &nbsp;CANCEL&nbsp;
                  </button>
                </div>
              </form>
            </div>
      </AdminUserEdit>
    </MainLayout>
  );
};

const AdminUserEdit = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 0rem 10rem;
  font-family: "Poppins", sans-serif;
  .form-content {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 50%; */
    flex-direction: column;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.8rem;
    width: 50%;
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
  .call-to-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .submit {
    width: 40%;
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
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
`;

export default AdminEditUserInfo;
