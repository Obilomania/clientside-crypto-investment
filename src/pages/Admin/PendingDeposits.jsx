import styled from "styled-components";



const PendingDeposits = () => {
  return (
    <PDeposit>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Deposit Amount</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Obilomania</td>
                <td>$ 200.00</td>
                <td>obilomania@gmail.com</td>
                <td>
                  <button
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                  >
                    Delete
                  </button>
                </td>
              </tr>
            <tr className="table-body the-row one no-transaction">
              <td className="text-danger">
                <p>NO PENDING DEPOSITS</p>
              </td>
            </tr>
        </tbody>
      </table>
    </PDeposit>
  );
};

const PDeposit = styled.div`
  width: 100%;
  .no-transaction {
    width: 100%;
    p {
      width: 100%;
      text-align: center;
      font-weight: bolder;
      color: var(--primary);
    }
  }
  button {
    color: white;
    background: var(--background-color);
    padding: 0.1rem 1rem;
    transition: 400ms all ease-in-out;
    &:hover {
      color: white;
      background: #414040;
      padding: 0.1rem 1rem;
    }
  }
`;
export default PendingDeposits;
