import React from "react";
import styled from "styled-components";

const UsersList = () => {


  return (
    <Ussy>
      {/* {isLoading && <Loader />} */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
              <tr >
                <th scope="row">1</th>
                <td>obilomania</td>
                <td>obilomania@gmail.com</td>
                <td className="call-to-action">
                  <button
                    className="btn-danger btn"
                  >
                    INFO
                  </button>
                    <button
                      className="btn-danger btn"
                    >
                      SUSPEND
                    </button>
                    <button
                      className="btn-info btn"
                    >
                      UN-BLOCK
                    </button>

                  <button
                    className="btn-danger btn"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            <tr className="table-body the-row one no-transaction">
              <td className="text-danger">NO USER ON YOUR APP</td>
            </tr>
        </tbody>
      </table>
    </Ussy>
  );
};

const Ussy = styled.div`
  .no-transaction {
    width: 100%;
    td {
      width: 100%;
      text-align: center;
      font-weight: bolder;
      color: var(--primary);
    }
  }
  .call-to-action {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    gap: 0.5rem;
  }
`;

export default UsersList;
