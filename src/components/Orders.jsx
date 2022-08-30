import styled from 'styled-components';
import OrderItem from './OrderItem';
import ORDERS from '../data/ORDERS.js';

const Orders = () => {
  return (
    <Recentorder id="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ORDERS.map((order, idx) => {
            return <OrderItem key={idx} order={order} />;
          })}
          {/* <tr>
            <td>Iphone 6s Max</td>
            <td>54445</td>
            <td>Due</td>
            <td className="warning">Pending</td>
            <td className="primary">Details</td>
          </tr>
          <tr>
            <td>Iphone 6s Max</td>
            <td>54445</td>
            <td>Due</td>
            <td className="warning">Pending</td>
            <td className="primary">Details</td>
          </tr>
          <tr>
            <td>Iphone 6s Max</td>
            <td>54445</td>
            <td>Due</td>
            <td className="warning">Pending</td>
            <td className="primary">Details</td>
          </tr>
          <tr>
            <td>Iphone 6s Max</td>
            <td>54445</td>
            <td>Due</td>
            <td className="warning">Pending</td>
            <td className="primary">Details</td>
          </tr>
          <tr>
            <td>Iphone 6s Max</td>
            <td>54445</td>
            <td>Due</td>
            <td className="warning">Pending</td>
            <td className="primary">Details</td>
          </tr> */}
        </tbody>
      </table>
      <a href="#">Show all</a>
    </Recentorder>
  );
};

export default Orders;

const Recentorder = styled.div`
  margin-top: 2rem;

  @media screen and (max-width: 1200px) {
    width: 94%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 2rem 0 0 8.8rem;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    margin: 3rem 0 0 0;
    width: 100;
  }

  h2 {
    margin-bottom: 0.8rem;
  }

  table {
    background: var(--color-white);
    width: 100%;
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    text-align: center;
    box-shadow: var(--box-shadow);
    transform: all 300ms ease;

    @media screen and (max-width: 1200px) {
      width: 83vw;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0;
    }

    &:hover {
      box-shadow: none;
    }

    tbody td {
      /* background-color: lightblue; */
      height: 2.8rem;
      border-bottom: 1px solid var(--color-light);
      color: var(--color-dark-variant);
    }

    tbody tr:last-child td {
      border: none;
    }

    thead tr th {
      @media screen and (max-width: 768px) {
        &:first-child,
        &:last-child {
          display: none;
        }
      }
    }

    tbody tr td {
      @media screen and (max-width: 768px) {
        &:first-child,
        &:last-child {
          display: none;
        }
      }
    }
  }

  a {
    text-align: center;
    display: block;
    margin: 1rem auto;
    color: var(--color-primary);
  }
`;
