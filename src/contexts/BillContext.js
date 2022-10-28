import React, { useState, createContext } from "react";

export const BillContext = createContext();

export const BillProvider = (props) => {
    const [bills, setBills] = useState([
        {
            id: "1",
            description: "Dominoes",
            category: "FoodnDining",
            amount: 430,
            date: "01-02-2022"
        },
        {
            id: "2",
            description: "CarWash",
            category: "Utility",
            amount: 300,
            date: "01-06-2022"
        },
        {
            id: "3",
            description: "Amazon",
            category: "Shopping",
            amount: 500,
            date: "01-07-2022"
        },
        {
            id: "4",
            description: "HouseRent",
            category: "FoodnDining",
            amount: 800,
            date: "01-03-2022"
        },
        {
            id: "5",
            description: "Tuition",
            category: "Education",
            amount: 500,
            date: "01-12-2022"
        },
        {
            id: 6,
            description: "Laundry",
            category: "Personal Care",
            amount: "320",
            date: "01-14-2022"
        },
        {
            id: 7,
            description: "Vacation",
            category: "Travel",
            amount: "3430",
            date: "01-18-2022"
        }
    ]);
    return (
        <BillContext.Provider value={[bills, setBills]}>
            {props.children}
        </BillContext.Provider>
    );
}