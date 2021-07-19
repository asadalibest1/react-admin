import React from 'react'

export default function Avatar({image}) {
    return (
        <div>
            <img
            className="rounded-circle p-1 border border-success"
            src={(image !== "") ? image : "https://officio.work/user-uploads/avatar/a869cd5fcb4b4b0f05cae0d2d7f0813c.jpg"}
            style={{ width: "37px", height: "37px" }}
          />
        </div>
    )
}
