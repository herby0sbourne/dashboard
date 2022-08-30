import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import styled from 'styled-components';

const SaleCard = ({ title, saleType, percentage, timeFrame, total, gross }) => {
  return (
    <Item className={`item ${saleType}`}>
      <div className="icon">
        <span className="icon-sharp">
          {saleType === 'online' ? (
            <ShoppingCartSharpIcon />
          ) : saleType === 'offline' ? (
            <LocalMallSharpIcon />
          ) : (
            <Person2SharpIcon />
          )}
        </span>
      </div>
      <div className="right">
        <div className="info">
          <h3>{title}</h3>
          <small className="text-muted">{timeFrame}</small>
        </div>
        <h5 className={`${gross ? 'danger' : 'success'}`}>
          {gross ? '-' : '+'}
          {percentage}%
        </h5>
        <h3>{total}</h3>
      </div>
    </Item>
  );
};

export default SaleCard;

const Item = styled.div`
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

  .right {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 0;
    width: 100%;
  }

  .info {
    h3 {
      text-transform: uppercase;
    }
  }

  .icon {
    padding: 0.6rem;
    color: var(--color-white);
    border-radius: 50%;
    background: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.offline .icon {
    background: var(--color-danger);
  }

  &.customers .icon {
    background: var(--color-success);
  }
`;
