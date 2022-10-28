import React, { useState, useContext } from "react";
import { BillContext } from "../contexts/BillContext";
import Bill from "./Bill";

import "../assets/css/filter.css";

export const Filter = () => {
    const [bills, setBills] = useContext(BillContext);
    const [filterCategory, setFilterCategory] = useState("");
    return (
        <div className="filter">
            <div className="form-filter">
                <label htmlFor="filterCategory"><h2>Filter by Category: </h2></label>
                <select className="inp-filterCategory inp" name="filterCategory" value={filterCategory} onChange={(e) => { setFilterCategory(e.target.value) }}>
                    <option value="" hidden disabled>Select Category</option>
                    <option value="FoodnDining">Food and Dining</option>
                    <option value="Utility">Utility</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Education">Education</option>
                    <option value="PersonalCare">Personal Care</option>
                    <option value="Travel">Travel</option>
                    <option value="Other">Other..</option>
                </select>
            </div>
            <div className="bills">
                {bills.map((bill) => {
                    if (bill.category === filterCategory) {
                        return (
                            <Bill
                                key={bill.id}
                                bills={bills}
                                setBills={setBills}
                                bill={bill}
                                description={bill.description}
                                category={bill.category}
                                amount={bill.amount}
                                date={bill.date}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}