import React from 'react';

const OrderItem = ({ order }) => {
  return (
    <tr>
      <td>{order.productName}</td>
      <td>{order.productNumber}</td>
      <td>{order.paymentStatus}</td>
      <td
        className={`${
          order.Shipping === 'Declined'
            ? 'danger'
            : order.Shipping === 'Pending'
            ? 'warning'
            : 'success'
        }`}
      >
        {order.Shipping}
      </td>
      <td className="primary">Details</td>
    </tr>
  );
};

export default OrderItem;
