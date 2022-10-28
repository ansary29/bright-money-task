import React, { useState, useContext } from "react";

import { BillContext } from "../contexts/BillContext";

import "../assets/css/editbill.css";

export const EditBill = ({ style, setDisplay, bill }) => {
    const [bills, setBills] = useContext(BillContext);

    const [description, setDescription] = useState(bill.description);
    const [category, setCategory] = useState(bill.category);
    const [amt, setAmt] = useState(bill.amount);
    const [date, setDate] = useState(bill.date);

    const saveEdits = (e) => {
        e.preventDefault();

        if (description === "" || category === "" || amt === "" || date === "") {
            alert("Fill all details");
            return false;
        }
        if (amt < 0) {
            alert("Amount cannot be negative");
            return false;
        }
        const id = bill.id;

        // remove old
        setBills(bills.filter((elmn) => elmn.id !== bill.id));

        // add edit
        setBills(prevBills => [...prevBills, {
            id: id,
            description: description,
            category: category,
            amount: parseInt(amt),
            date: date
        }]);
        setDisplay("none");
    }

    return (
        <div className="editbill" style={style}>
            <button className="btn-hideEdit" onClick={() => { setDisplay("none") }}>
                <span className="material-icons-outlined">close</span>
            </button>
            <form className="form-editbill" onSubmit={saveEdits}>
                <input className="inp-description inp" type="text" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                <select className="inp-category inp" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                    <option value="" hidden disabled>Category</option>
                    <option value="FoodnDining">Food and Dining</option>
                    <option value="Utility">Utility</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Education">Education</option>
                    <option value="PersonalCare">Personal Care</option>
                    <option value="Travel">Travel</option>
                    <option value="Other">Other..</option>
                </select>
                <input className="inp-amount inp" type="number" placeholder="Amount" value={amt} onChange={(e) => { setAmt(e.target.value) }} />
                <input className="inp-date inp" type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
                <button className="btn-editBill" type="submit">SAVE</button>
            </form>
        </div>
    )
}