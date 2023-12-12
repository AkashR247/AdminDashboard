import React from "react";
import {
  FaFileInvoiceDollar,
  FaFileInvoice,
  FaCoins,
  FaShoppingBag,
} from "react-icons/fa";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Home() {
  const data = [
    {
      name: "Jan",
      Month: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      Month: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      Month: 6800,
      amt: 2290,
    },
    {
      name: "Apr",
      Month: 3908,
      amt: 2000,
    },
    {
      name: "May",
      Month: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      Month: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      Month: 4300,
      amt: 2100,
    },

    {
      name: "Aug",
      Month: 5700,
      amt: 2100,
    },
    {
      name: "Sep",
      Month: 3300,
      amt: 2100,
    },
    {
      name: "Oct",
      Month: 5300,
      amt: 2100,
    },
    {
      name: "Nov",
      Month: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      Month: 4400,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Earnings</h3>
            <FaFileInvoiceDollar className="card_icon" />
          </div>
          <h1>$198k</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Orders</h3>
            <FaFileInvoice className="card_icon" />
          </div>
          <h1>$2.4k</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Balance</h3>
            <FaCoins className="card_icon" />
          </div>
          <h1>$2.4k</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total Sales</h3>
            <FaShoppingBag className="card_icon" />
          </div>
          <h1>$89k</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="Month" fill="#ffffff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
