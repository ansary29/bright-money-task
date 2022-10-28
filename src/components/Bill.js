import React, {useState} from "react";

import { EditBill } from "./EditBill";

import "../assets/css/bill.css";

export default function Bill({ bills, setBills, bill, description, category, amount, date }) {

    const [display, setDisplay] = useState("none");

    const deleteHandler = () => {
        setBills(bills.filter((elmn) => elmn.id !== bill.id));
    }
    const editHandler = () =>{
        (display === "none") ? setDisplay("grid") : setDisplay("none");
        // alert(bill.id);
    }

    return (
        <div className="bill">
            <div className="amount">₹{amount}</div>
            <div className="cat-desc">
                <div className="category">{category}</div>
                <div className="description">{description}</div>
            </div>
            <div className="date">{date}</div>
            <button className="btn-editbill btn-bill" onClick={editHandler}>
                <span className="material-icons-outlined">edit</span>
            </button>
            <EditBill style={{display: display}} setDisplay={setDisplay} bill={bill} />
            <button className="btn-deletebill btn-bill" onClick={deleteHandler}>
                <span className="material-icons-outlined">delete</span>
            </button>
        </div>
    );
}