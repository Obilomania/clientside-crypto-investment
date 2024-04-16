import MainLayout from "../../components/layout/MainLayout";
import Stack from "react-bootstrap/Stack";
import styled from "styled-components";
import PendingDeposits from "./PendingDeposits";
import AllDeposits from "./AllDeposits";
import AllWithdraw from "./AllWithdraw";
import PendingWithdrawal from "./PendingWithdrawal";
import UsersList from "./UserList";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

const AdminLanding = () => {
  useRedirectLoggedOutUser("/login");
  const navigate = useNavigate();
  const goToPromo = () => {
    navigate("/promoCodes");
  };

  const adminLandingInfo = useSelector((state) => state.adminStore);

  const {
    allAppUsers,
    pendingDeposits,
    allDeposits,
    pendingWithdrawals,
    allWithdrawals,
  } = adminLandingInfo;

  return (
    <MainLayout>
      {allAppUsers === null ||
      pendingDeposits === null ||
      allDeposits === null ||
      pendingWithdrawals === null ||
      allWithdrawals === null ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Admin>
            <div className="adminContent container">
              <Stack gap={3}>
                <div className="p-2">
                  <div className="promoCodes">
                    <h1 className="heading">PROMO CODE SECTION</h1>{" "}
                    <button onClick={goToPromo}>
                      CLICK TO VIEW AND CREATE PROMO CODES
                    </button>
                  </div>
                </div>
                <div className="p-2">
                  <div className="firstContent">
                    <h1 className="heading">Pending Deposits</h1>{" "}
                    <PendingDeposits pendingDeposits={pendingDeposits} />
                  </div>
                </div>
                <hr />
                <div className="p-2">
                  <div className="secondContent">
                    <h1 className="heading">All Deposits</h1>
                    <AllDeposits allDeposits={allDeposits} />
                  </div>
                </div>
                <hr />
                <div className="p-2">
                  <div className="thirdContent">
                    <h1 className="heading">Pending Withdrawals</h1>{" "}
                    <PendingWithdrawal
                      pendingWithdrawals={pendingWithdrawals}
                    />
                  </div>
                </div>
                <hr />
                <div className="p-2">
                  <div className="forthContent">
                    <h1 className="heading">All Withdrawals</h1>
                    <AllWithdraw allWithdrawals={allWithdrawals} />
                  </div>
                </div>
                <hr />
                <div className="p-2">
                  <div className="forthContent">
                    <h1 className="heading">Users List</h1>
                    <UsersList allAppUsers={allAppUsers} />
                  </div>
                </div>
                <hr />
              </Stack>
            </div>
          </Admin>
        </>
      )}
    </MainLayout>
  );
};

const Admin = styled.div`
  /* width: 100%;
  padding: 2rem 10rem; */
  .adminContent hr {
    height: 0.5rem;
    background: var(--light);
  }
  .promoCodes {
    width: 100%;
    button {
      width: 100%;
      border: none;
      background: var(--primary);
      color: white;
      padding: 1rem 0;
      border-radius: 0.5rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
      transition: var(--transition);
      &:hover {
        margin-left: 0.5rem;
        width: 100%;
      }
    }
  }
`;

export default AdminLanding;
