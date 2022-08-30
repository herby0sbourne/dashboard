import styled from 'styled-components';
import SaleCard from './SaleCard';
import AddSharpIcon from '@mui/icons-material/AddSharp';

const SalesAnalytics = () => {
  return (
    <Salesanalytics className="sales-analytics">
      <h2>Sales Analytics</h2>
      <SaleCard
        title="Online Orders"
        saleType="online"
        percentage={25}
        timeFrame="Last 24 Hours"
        total={3524}
      />
      <SaleCard
        title="Offline Orders"
        saleType="offline"
        percentage={17}
        gross="lost"
        timeFrame="Last 24 Hours"
        total={1546}
      />
      <SaleCard
        title="new Customers"
        saleType="customers"
        percentage={21}
        timeFrame="Last 24 Hours"
        total={34}
      />

      <div className="item add-product">
        <div>
          <span className="icon-sharp">
            <AddSharpIcon />
          </span>
          <h3>Add Product</h3>
        </div>
      </div>
    </Salesanalytics>
  );
};

export default SalesAnalytics;

const Salesanalytics = styled.div`
  margin-top: 2rem;

  h2 {
    margin-bottom: 0.8rem;
  }

  .item {
    background: var(--color-white);
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.7rem;
    padding: 1.5rem var(--card-padding);
    border-radius: var(--border-radius-3);
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;

    &:hover {
      box-shadow: none;
    }
  }
  .add-product {
    background-color: transparent;
    border: 2px dashed var(--color-primary);
    color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      h3 {
        font-weight: 600;
      }
    }
  }
`;
