import React from "react";


const AdminAllPromoCodes = () => {
return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Promo Code Title</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <th scope="row">1</th>
                <th scope="row">234</th>
                <td className="call-to-action">
                  <button
                    className="btn-danger btn"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            <tr className="table-body the-row one no-transaction">
              <td className="text-danger">No Promo Codes, Create One</td>
            </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdminAllPromoCodes;
