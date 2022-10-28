import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BillContext } from "../contexts/BillContext";

import "../assets/css/addBill.css";

export const AddBill = () => {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amt, setAmt] = useState("");
    const [date, setDate] = useState("");

    const [bills, setBills] = useContext(BillContext);

    const addBill = (e) => {
        e.preventDefault();
        if(description === "" || category === "" || amt === "" || date === ""){
            alert("Fill all details");
            return false;
        }
        if(amt < 0){
            alert("Amount cannot be negative");
            return false;
        }
        setBills(prevBills => [...prevBills, {
            id: uuidv4(),
            description: description,
            category: category,
            amount: parseInt(amt),
            date: date
        }]);
        setDescription("");
        setCategory("");
        setAmt("");
        setDate("");
    }

    return (
        <form className="form-addbill" onSubmit={addBill}>
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
            <button className="btn-addBill" type="submit">CREATE</button>
        </form>
    );
}