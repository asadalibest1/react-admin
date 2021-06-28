import React from 'react'
import $ from 'jquery'
import noImagePreview from "../../../../img/noImagePreview.png"
// import SweetAlert from "react-bootstrap-sweetalert";
import Conformed from '../../../alert/conformed';

export default function OrdersAction() {

    const [ShowAlert, setShowAlert] = React.useState(false);
    const [ShowPassword, setShowPassword] = React.useState(false)

    return (
        <>

            <div class="btn-group dropbottom p-0">
                <button
                    type="button"
                    class="btn dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                </button>
                <div class="dropdown-menu p-0">
                    <button class="dropdown-item py-2 border-bottom" type="button"
                        data-toggle="modal" data-target="#viewReports"
                    >
                        <i class="fa fa-eye mr-2" aria-hidden="true"></i>View</button>
                    {/* <button class="dropdown-item py-2" type="button"
                        data-toggle="modal" data-target="#editOrder"
                    >
                        <i class="fa fa-file mr-2" aria-hidden="true"></i>
                        Edit
                    </button> */}
                    <button class="dropdown-item py-2" type="button"
                        onClick={() => setShowAlert(true)}
                    >
                        <i class="fa fa-trash mr-2" aria-hidden="true"></i>
                        Delete all
                    </button>
                </div>
            </div>

            {/* // <!-- viewReports --> */}
            <div class="modal fade" id="viewReports" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-center modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">[User Name]</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body row pt-5">

                            <div className="col-md-4 text-right pt-2">
                                <label>Name</label>
                            </div>
                            <div class="form-group col-md-4">
                                <input type="text" class="form-control bg-white" disabled placeholder="Enter Name" />
                            </div>
                            <div class="form-group col-md-2"></div>

                            <div className="col-md-4 text-right pt-2">
                                <label for="email">Email</label>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" class="form-control bg-white value1" disabled placeholder="Enter Email" />
                            </div>


                            <div className="col-md-4 text-right pt-2">
                                <label for="email">Phone</label>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="number" class="form-control bg-white value3" disabled placeholder="+92123567890" />
                            </div>

                            <div className="col-md-4">
                                <div className="d-flex float-right h-100 align-items-center" style={{ width: "fit-content" }}>
                                <label className="float-right">Date</label>
                                </div>
                                </div>

                            <div class="form-group col-md-3">
                            <label>Submitted On</label>
                                <input type="text" class="form-control bg-white" disabled placeholder="22-10-2016" />
                            </div>
                            <div class="form-group col-md-3">
                                    <label>Report Date</label>
                                <input type="text" class="form-control bg-white" disabled placeholder="22-10-2016" />
                            </div>

                            <div className="col-md-4 text-right pt-2">
                                <label for="email">Report</label>
                            </div>
                            <div class="form-group col-md-6">
                            <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" class="form-control bg-white" disabled/>
                            </div>
                            </div>


                            <div className="col-md-4 text-right pt-2">
                                <label>Details</label>
                            </div>
                            <div class="form-group col-md-6">
                                <textarea class="form-control bg-white" disabled rows="3"></textarea>
                            </div>


                            <div className="col-md-4 text-right pt-2">
                                <label>Image</label>
                            </div>
                            <div class="form-group col-md-6">
                                <div className="p-1 border rounded float-right" style={{ width: "100%", height: "auto" }}>
                                    <img src={noImagePreview} style={{ width: "100%", height: "100%" }} />
                                </div>
                            </div>

                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                <i class="fa fa-times mr-1" aria-hidden="true"></i>
                                Close</button>                       </div>
                    </div>
                </div>
            </div>

            <Conformed ShowAlert={ShowAlert} setShowAlert={setShowAlert} />


        </>
    )
}