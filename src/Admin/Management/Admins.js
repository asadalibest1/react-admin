import React from "react";
import AdminTable from "./Tables/AdminTable";
// import * as $ frm "jquery";

export default function AdminUsers() {
    return (
    <div>

      <div class="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="row">
          <div className="col-md-1">
            <i class="fa fa-home fa-3x mt-1" aria-hidden="true"></i>
          </div>
        <div className="col-md-11">
            <h1 class="h3 mb-2 text-gray-800">Manage Accounts</h1>
            <h6>Administrators List</h6>
        </div>
        </div>
        <p class="mb-4"></p>

        {/* <!-- DataTales Example --> */}
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              Administrators List
            </h6>
          </div>
          <div class="card-body">
            <div class={(window.innerWidth < 1000) ? "table-responsive" : ""}>

            <AdminTable />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
