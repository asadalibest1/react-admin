import React from "react";
import OrdersTable from "./Tables/AllOrders";
// import * as $ from "jquery";
// import noImagePreview from "../../img/noImagePreview.png"

export default function AdminUsers() {

//   const [ShowPassword, setShowPassword] = React.useState(false)

    return (
    <div>

      <div class="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="row">
          <div className="col-md-1">
            <i class="fa fa-home fa-3x mt-1" aria-hidden="true"></i>
          </div>
        <div className="col-md-11">
            <h1 class="h3 mb-2 text-gray-800">Orders</h1>
            <h6>All Orders</h6>
        </div>


        <div className="col-md-12 text-right px-4">
            <a href="#" class="btn btn-primary btn-icon-split btn-sm"
              data-toggle="modal" data-target="#new_admin"
            >
              <div class="d-flex align-items-center pl-2">
                <i class="fa fa-plus"></i>
              </div>
              <span class="text pl-1">New</span>
            </a>
          </div>


        </div>
        <p class="mb-4"></p>

        {/* <!-- DataTales Example --> */}
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
                    All Orders
            </h6>
          </div>
          <div class="card-body">
            <div class={(window.innerWidth < 1000) ? "table-responsive" : ""}>

            <OrdersTable />

            </div>
          </div>
        </div>
      </div>
  </div>
  );
}
