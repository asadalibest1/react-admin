import React from 'react'

export default function Select({ state }) {
const [SelectVal, setSelectVal] = React.useState(state)
    return (
         <select class={"form-control "+ ((SelectVal === 'paid') ? "border-primary" : "border-warning")}
            value={SelectVal}
            onChange={(e)=> setSelectVal(e.target.value)}>
              <option value="paid">Paid</option>
              <option value="not-paid">Not Paid</option>
          </select>)
}
