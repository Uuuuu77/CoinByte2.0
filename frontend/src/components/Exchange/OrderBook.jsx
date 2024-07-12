import React from 'react';

const OrderBook = () => {
  // Sample order data
  const orders = [
    { price: 50000, amount: 0.5 },
    { price: 49500, amount: 1.0 },
    { price: 49000, amount: 2.0 },
  ];

  return (
    <div className="order-book">
      <h3>Order Book</h3>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.price}</td>
              <td>{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBook;
