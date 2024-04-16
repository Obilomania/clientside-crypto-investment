import React from "react";
import styled from "styled-components";

const AllDeposits = ({ allDeposits }) => {


  return (
    <AllDepo>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Deposit Amount</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {allDeposits?.length > 0 ? (
            allDeposits?.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item?.user?.fullname}</td>
                <td>$ {item?.amount.toLocaleString("en-US")}</td>
                <td>{item?.user?.email}</td>
                <td>
                  {item?.isProcessing === false ? (
                    <span className="span-processing">Processing</span>
                  ) : (
                    <span className="span-success">Successful</span>
                  )}
                </td>
                <td>
                  <button
                    value={item?._id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="table-body the-row one no-transaction">
              <td className="text-danger">NO PENDING DEPOSITS</td>
            </tr>
          )}
        </tbody>
      </table>
    </AllDepo>
  );
};

const AllDepo = styled.div`
  .no-transaction {
    width: 100%;
    td {
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
export default AllDeposits;
