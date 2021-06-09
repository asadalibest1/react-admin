import React from 'react'
import $ from 'jquery'
import noImagePreview from "../../../../img/noImagePreview.png"
// import SweetAlert from "react-bootstrap-sweetalert";
import Conformed from '../../../alert/conformed';

export default function CustomersAction() {

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
                        data-toggle="modal" data-target="#viewCustomer"
                    >
                        <i class="fa fa-eye mr-2" aria-hidden="true"></i>View</button>
                    <button class="dropdown-item py-2" type="button"
                        data-toggle="modal" data-target="#editCustomer"
                    >
                        <i class="fa fa-file mr-2" aria-hidden="true"></i>
            Edit
          </button>
                    <button class="dropdown-item py-2" type="button"
                        onClick={() => setShowAlert(true)}
                    >
                        <i class="fa fa-trash mr-2" aria-hidden="true"></i>
            Delete
          </button>
                </div>
            </div>

            {/* // <!-- viewCustomer --> */}
            <div class="modal fade" id="viewCustomer" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                {/* <label>Image</label> */}
                            </div>
                            <div class="form-group col-md-6">
                                <div className="p-1 border rounded float-right" style={{ width: "120px", height: "100px" }}>
                                    <img src={noImagePreview} style={{ width: "100%", height: "100%" }} />
                                </div>
                            </div>

                            <div className="col-md-4 text-right pt-2">
                                <label for="name">Name</label>
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
                            <div class="col-md-2 p-0 m-0 c-hover">
                                <button type="button" class="btn btn-outline-info hover-btn"
                                    onClick={() => navigator.clipboard.writeText(document.querySelector('.value1').value)}
                                >
                                    <i class="fa fa-clone" aria-hidden="true"></i>
                                </button>
                            </div>

                            <div className="col-md-4 text-right pt-2">
                                <label for="Password">Password</label>
                            </div>
                            <div class="input-group mb-3 col-md-6">
                                <input type={ShowPassword ? "password" : "text"} class="form-control bg-white value2" disabled placeholder="Enter password" />
                                <div class="input-group-append">

                                    <button type="button" class="btn btn-default border"
                                        onClick={() => setShowPassword(!ShowPassword)}>
                                        <i class={ShowPassword ? "fa fa-eye" : "fa fa-eye-slash"} aria-hidden="true"></i></button>
                                </div>
                            </div>
                            <div class="col-md-2 p-0 m-0 c-hover">
                                <button type="button" class="btn btn-outline-info hover-btn"
                                    onClick={() => navigator.clipboard.writeText(document.querySelector('.value2').value)}>
                                    <i class="fa fa-clone" aria-hidden="true"></i>
                                </button>
                            </div>


                            <div className="col-md-4 text-right pt-2">
                                <label for="email">Phone</label>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="number" class="form-control bg-white value3" disabled placeholder="+92123567890" />
                            </div>
                            <div class="col-md-2 p-0 m-0 c-hover">
                                <button type="button" class="btn btn-outline-info hover-btn"
                                    onClick={() => navigator.clipboard.writeText(document.querySelector('.value3').value)}
                                >
                                    <i class="fa fa-clone" aria-hidden="true"></i>
                                </button>
                            </div>

                            <div className="col-md-4 text-right pt-2">
                                <label for="email">IP Address</label>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="number" class="form-control bg-white value4" disabled placeholder="192.168. 0.1" />
                            </div>
                            <div class="col-md-2 p-0 m-0 c-hover">
                                <button type="button" class="btn btn-outline-info hover-btn"
                                    onClick={() => navigator.clipboard.writeText(document.querySelector('.value4').value)}
                                >
                                    <i class="fa fa-clone" aria-hidden="true"></i>
                                </button>
                            </div>

                            <div className="col-md-4 text-right pt-2">
                                <label>Address</label>
                            </div>
                            <div class="form-group col-md-6">
                                <textarea class="form-control bg-white value5" aria-label="With textarea" value="New York, United States of America." disabled></textarea>
                            </div>
                            <div class="col-md-2 p-0 m-0 c-hover">
                                <button type="button" class="btn btn-outline-info hover-btn"
                                    onClick={() => navigator.clipboard.writeText(document.querySelector('.value5').value)}
                                >
                                    <i class="fa fa-clone" aria-hidden="true"></i>
                                </button>
                            </div>

                            <div className="col-md-4 text-right pt-2">
                                <label for="name">Created On</label>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control bg-white" disabled placeholder="22-10-2016" />
                            </div>

                            <div className="col-md-4 text-right pt-2">
                                <label for="name">Last Login</label>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control bg-white" disabled placeholder="03:05 05/07/2020" />
                            </div>


                            <div className="col-md-4 text-right pt-2">
                                <label>About</label>
                            </div>
                            <div class="form-group col-md-6">
                                <textarea class="form-control bg-white" disabled aria-label="With textarea"></textarea>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                <i class="fa fa-times mr-1" aria-hidden="true"></i>
                                Close</button>                       </div>
                    </div>
                </div>
            </div>


            {/* // <!-- editCustomer --> */}
            <div class="modal fade" id="editCustomer" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-center modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">[Edit Name]</h5>
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
                                <input type={ShowPassword ? "password" : "text"} class="form-control" placeholder="Enter password" />
                                <div class="input-group-append">

                                    <button type="button" class="btn btn-default border"
                                        onClick={() => setShowPassword(!ShowPassword)}>
                                        <i class={ShowPassword ? "fa fa-eye" : "fa fa-eye-slash"} aria-hidden="true"></i></button>
                                </div>
                            </div>

                            <div className="col-md-4 text-right pt-2">
                                <label for="email">Phone</label>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="number" class="form-control" placeholder="Enter Phone Number" />
                            </div>

                            <div className="col-md-4 text-right pt-2">
                                <label>Address</label>
                            </div>
                            <div class="form-group col-md-6">
                                <textarea class="form-control" aria-label="With textarea" value="98 Green Road, Farmgate, Dhaka-1215."></textarea>
                            </div>

                            <div className="col-md-4 text-right pt-2">
                                <label for="name">Created On</label>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control bg-white" disabled placeholder="Enter Name" />
                            </div>

                            <div className="col-md-4 text-right pt-2">
                                <label for="name">Last Login</label>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control bg-white" disabled placeholder="" />
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
                                <i class="fa fa-check mr-1" aria-hidden="true"></i>
                                Save</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                <i class="fa fa-times mr-1" aria-hidden="true"></i>
                                Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <Conformed ShowAlert={ShowAlert} setShowAlert={setShowAlert} />


        </>
    )
}