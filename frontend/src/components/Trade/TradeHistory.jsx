// TradeHistory.jsx
import React from 'react';
import './TradeHistory.css';

const TradeHistory = () => {
  const history = [
    { date: '2024-07-01', action: 'Bought', amount: 1, asset: 'Bitcoin' },
    { date: '2024-07-02', action: 'Sold', amount: 0.5, asset: 'Ethereum' },
  ];

  return (
    <div className="trade-history">
      <h3>Trade History</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Action</th>
            <th>Amount</th>
            <th>Asset</th>
          </tr>
        </thead>
        <tbody>
          {history.map((trade, index) => (
            <tr key={index}>
              <td>{trade.date}</td>
              <td>{trade.action}</td>
              <td>{trade.amount}</td>
              <td>{trade.asset}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;
