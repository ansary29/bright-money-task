import React, { useContext } from "react";
import { BillContext } from "../contexts/BillContext";

import { AddBill } from "./AddBill";
import Bill from "./Bill";
import TotalExpenses from "./TotalExpenses";

import "../assets/css/dashboard.css";

export const Dashboard = () => {
    const [bills, setBills] = useContext(BillContext);
    return (
        <div className="dashboard">
            <TotalExpenses bills={bills} />
            <AddBill />
            <div className="bills">
                {bills.map((bill) => {
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
                })}
            </div>
        </div>
    );
}