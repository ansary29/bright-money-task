import React, { useContext } from "react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

import { BillContext } from "../contexts/BillContext";

import "../assets/css/chart.css";

export const Chart = () => {
    const [bills, setBills] = useContext(BillContext);

    return (
        <div className="chart">
            <h2>Expenses</h2>
            <div className="chartContainer">
                <ResponsiveContainer>
                    <LineChart data={bills} margin={{right:10, bottom: -15,left: -20}} >
                        <CartesianGrid stroke="#5c5c5c" />
                        <XAxis dataKey="date" interval={"preserveStartEnd"} tick={{fontSize: "10px"}} />
                        <YAxis type="number" domain={[0, 'dataMax']} tick={{fontSize: "12px"}} />
                        <Tooltip />
                        <Line dataKey="amount" type="monotone" stroke="green" activeDot={{ r: 5 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}