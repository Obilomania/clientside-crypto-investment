import styled from "styled-components";



const AllWithdraw = ({ allWithdrawals }) => {
  
  return (
    <Withy>
      {/* {isLoading && <Loader />} */}
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
          {allWithdrawals?.withdraw?.length > 0 ? (
            allWithdrawals?.withdraw?.map((item, index) => (
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
              </tr>
            ))
          ) : (
            <tr className="table-body the-row one no-transaction">
              <td className="text-danger">NO WITHDRAWAL MADE</td>
            </tr>
          )}
        </tbody>
      </table>
    </Withy>
  );
};

const Withy = styled.div`
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
`;
export default AllWithdraw;
