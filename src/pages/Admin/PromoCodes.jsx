import MainLayout from "../../components/layout/MainLayout";
import styled from "styled-components";
import AdminAllPromoCodes from "./AdminAllPromoCodes";



const PromoCodes = () => {
  return (
    <MainLayout>
      <Promo>
        <h5 className="heading-deposit-form">PROMO CODES SECTION</h5>
        <div className="create-promo-form">
          <form >
            <input
              type="text"
              placeholder="Enter Code Here"
              name="promoCode"
            />
            <button type="submit">CREATE PROMO CODE</button>
          </form>
        </div>
        <br />
        <h5 className="heading-deposit-form">ALL PROMO CODES</h5>
        <AdminAllPromoCodes />
      </Promo>
    </MainLayout>
  );
};




const Promo = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 0rem 10rem;
  font-family: "Poppins", sans-serif;
  .heading-deposit-form {
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
  }
  .create-promo-form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.5rem;
      input {
        padding: 0.5rem;
        border-radius: 0.5rem;
        width: 100%;
      }
      button {
        width: 100%;
        border: none;
        background: var(--primary);
        color: white;
        padding: 0.5rem 0;
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
  }
`;

export default PromoCodes;
