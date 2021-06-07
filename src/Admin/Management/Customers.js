import React from "react";
import CustomersTable from "./Tables/CustomersTable";
import noImagePreview from "../../img/noImagePreview.png"
import * as $ from "jquery";

export default function AdminUsers() {

  $(document).ready(() => {
    $(".c-hover button").css({ 'color': 'transparent', 'border': 'transparent' });
    $(".c-hover button").hover(function () {
      $(this).css({ 'color': 'white', 'border': 'white' });
    }, function () {
      $(this).css({ 'color': 'transparent', 'border': 'transparent' });
    });
  })


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
            <h6>Customers List</h6>
          </div>

          {/* <button type="button" class="btn btn-primary">
            <i class="fa fa-plus mr-1" aria-hidden="true"></i>
              New</button> */}

          <div className="col-md-12 text-right px-4">
            <a href="#" class="btn btn-primary btn-icon-split btn-sm"
              data-toggle="modal" data-target="#new_customer"
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
              Customers List
            </h6>
          </div>
          <div class="card-body">
            <div class={(window.innerWidth < 1000) ? "table-responsive" : ""}>

              <CustomersTable />

            </div>
          </div>
        </div>
      </div>


      {/* // <!-- new_customer --> */}
      <div class="modal fade" id="new_customer" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-center modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Customer</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body row pt-5">

              <div className="col-md-4 text-right pt-2">
                <label for="name">Name</label>
              </div>
              <div class="form-group col-md-4">
                <input type="text" class="form-control" placeholder="Enter Name" />
              </div>
              <div class="form-group col-md-2"></div>

              <div className="col-md-4 text-right pt-2">
                <label for="email">Email</label>
              </div>
              <div class="form-group col-md-6">
                <input type="email" class="form-control" placeholder="Enter Email" />
              </div>

              <div className="col-md-4 text-right pt-2">
                <label for="Password">Password</label>
              </div>

              <div class="input-group mb-3 col-md-6">
                <input type="password" class="form-control" placeholder="Enter password" />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </div>
              </div>

              <div className="col-md-4 text-right pt-2">
                <label for="email">Phone</label>
              </div>
              <div class="form-group col-md-6">
                <input type="number" class="form-control" placeholder="+92123567890" />
              </div>
              <div className="col-md-4 text-right pt-2">
                <label>Address</label>
              </div>
              <div class="form-group col-md-6">
                <textarea class="form-control" aria-label="With textarea" placeholder="New York, United States of America."></textarea>
              </div>

              <div className="col-md-4 text-right pt-2">
                <label>About</label>
              </div>
              <div class="form-group col-md-6">
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>

              <div className="col-md-4 text-right pt-2">
                <label>Image</label>
              </div>
              <div class="form-group col-md-6">
                <div class="input-group">
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="inputGroupFile03" />
                    <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-right pt-2">
              </div>
              <div class="form-group col-md-6">
                <div className="p-1 rounded border" style={{ width: "120px", height: "100px" }}>
                  <img src={noImagePreview} style={{ width: "100%", height: "100%" }} />
                </div>
              </div>

            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-primary">
                                <i class="fa fa-user mr-1" aria-hidden="true"></i>
                                Create</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                <i class="fa fa-times mr-1" aria-hidden="true"></i>
                                Close</button>                       </div>
          </div>
        </div>
      </div>



    </div>
  );
}
