import React from 'react'
import SweetAlert from "react-bootstrap-sweetalert";

export default function Conformed({ShowAlert, setShowAlert}) {

    // const [ConformedAlert, setConformedAlert] = React.useState(false);

    return (
            <>

<SweetAlert
            warning
            showCancel
            confirmBtnText="Delete"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            show={ShowAlert}
            focusCancelBtn
            onConfirm={() => {setShowAlert(false) }}
            title="Are you sure?"
            onCancel={() => setShowAlert(false)}
            //   onEscapeKey={() => setShowAlert(false)}
            //   onOutsideClick={() => setShowAlert(false)}
            >
                You will not be able to recover this imaginary file!
        </SweetAlert>


{/* <SweetAlert
            warning
            showCancel
            confirmBtnText="Yes, delete it!"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            show={ShowAlert}
            focusCancelBtn
            onConfirm={() => {setShowAlert(false); setConformedAlert(true)}}
            title="Are you sure?"
            onCancel={() => setShowAlert(false)}
            //   onEscapeKey={() => setShowAlert(false)}
            //   onOutsideClick={() => setShowAlert(false)}
            >
                You will not be able to recover this imaginary file!
        </SweetAlert>

           <SweetAlert
            show={ConformedAlert}
            success
            title="Deleted"
            onConfirm={()=> (false)}
            timeout={1500}

            >
            This success message will automatically close after 2 seconds
        </SweetAlert> */}
        </>
    )
}
