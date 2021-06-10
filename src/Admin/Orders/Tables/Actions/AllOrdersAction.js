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
                        data-toggle="modal" data-target="#viewOrder"
                    >
                        <i class="fa fa-eye mr-2" aria-hidden="true"></i>View</button>
                    <button class="dropdown-item py-2" type="button"
                        data-toggle="modal" data-target="#editOrder"
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

            {/* // <!-- viewOrder --> */}
            <div class="modal fade" id="viewOrder" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-center modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Table</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body row">

                        <div class="input-control mb-3 col-md-6">
                        <label for="name">Invoice</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">INV#</span>
                            </div>
                            <input type="text" class="form-control" />
                            </div>
                            </div>

                            <div class="input-control mb-3 col-md-6">
                        <label for="name">Table</label>
                            <div class="input-group">
                                <select class="form-control">
                                <option value="table1">Table 1</option>
                                <option value="table2">Table 2</option>
                                <option value="table3">Table 3</option>
                                <option value="table4">Table 4</option>
                                <option value="table5">Table 5</option>
                                <option value="table6">Table 6</option>
                                <option value="table7">Table 7</option>
                                <option value="table8">Table 8</option>
                                <option value="table8">Table 8</option>
                                <option value="table9">Table 9</option>
                                </select>
                                </div>
                            </div>

                            <div class="input-control mb-3 col-md-6">
                        <label for="name">Total Item</label>
                        <div class="input-group">
                            <input type="number" class="form-control" />
                            </div>
                            </div>

                            <div class="input-control mb-3 col-md-6">
                        <label for="name">Amount</label>
                        <div class="input-group">
                            <input type="number" class="form-control" />
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


            {/* // <!-- editOrder --> */}
            <div class="modal fade" id="editOrder" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-center modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Table 3</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body row">


                        <div class="input-control mb-3 col-md-6">
                        <label for="name">Invoice</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">INV#</span>
                            </div>
                            <input type="text" class="form-control" />
                            </div>
                            </div>

                            <div class="input-control mb-3 col-md-6">
                        <label for="name">Table</label>
                            <div class="input-group">
                                <select class="form-control">
                                <option value="table1">Table 1</option>
                                <option value="table2">Table 2</option>
                                <option value="table3">Table 3</option>
                                <option value="table4">Table 4</option>
                                <option value="table5">Table 5</option>
                                <option value="table6">Table 6</option>
                                <option value="table7">Table 7</option>
                                <option value="table8">Table 8</option>
                                <option value="table8">Table 8</option>
                                <option value="table9">Table 9</option>
                                </select>
                                </div>
                            </div>

                            <div class="input-control mb-3 col-md-6">
                        <label for="name">Total Item</label>
                        <div class="input-group">
                            <input type="number" class="form-control" />
                            </div>
                            </div>

                            <div class="input-control mb-3 col-md-6">
                        <label for="name">Amount</label>
                        <div class="input-group">
                            <input type="number" class="form-control" />
                            </div>
                            </div>

                            {/* <div className="col-md-4 text-right pt-2">
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
                            </div> */}



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