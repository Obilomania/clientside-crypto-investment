import MainLayout from "../../components/layout/MainLayout";
import styled from "styled-components";

const UserInfoPage = () => {
  return (
    <MainLayout>
      <UserInfo>
        <div className="dashboard-content">
          <div className="dash-content-content">
            <div className="the-write-ups">
              <p className="confirm-writeups">
                <span>Full Name :</span> <b>Obilomania Ishmael</b>
              </p>
              <p className="confirm-writeups">
                <span>Email :</span> <b>obilomania@gmail.com</b>
              </p>
              <p className="confirm-writeups">
                <span>Role :</span> Admin
              </p>
              <p className="confirm-writeups">
                <span>User Blocked? :</span>{" "}
                FALSE
              </p>
              <p className="confirm-writeups">
                <span>BTC Wallet Address :</span> kjhdbfksa7f89tdsyf0g8bushjvk
              </p>
              <p className="confirm-writeups">
                <span>User Promo Code :</span> DHIW%K </p>
              <div className="confirm-writeups">
                <span>Exposed Password :</span> 11111111
              </div>{" "}
              <br />
              <div className="call-to-action">
                <button
                  className="btn-danger btn"
                >
                  EDIT WALLET
                </button>
                <button
                  className="btn-danger btn"
                >
                  EDIT PASSWORD
                </button>
                <button
                  className="btn-danger btn"
                >
                  GO BACK
                </button>
              </div>
            </div>
          </div>
        </div>
      </UserInfo>
    </MainLayout>
  );
};

const UserInfo = styled.div`
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
  .dash-content-content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;
  }
  .the-write-ups {
    width: 40%;
  }
  .confirm-writeups {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .call-to-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export default UserInfoPage;
