import styled from 'styled-components';

import Card from './Card';
import Orders from './Orders';

const Main = () => {
  return (
    <MainDiv id="Main">
      <h1>Dashboard</h1>
      <div className="date">
        <input type="date" name="" id="" />
      </div>
      <div className="insights">
        <Card title="Sales" value="25,000" percentage="81" />
        <Card title="Expenses" value="14,000" percentage="1" />
        <Card title="Income" value="10,000" percentage="31" />
      </div>
      <Orders />
    </MainDiv>
  );
};

export default Main;

const MainDiv = styled.main`
  margin-top: 1.4rem;

  @media screen and (max-width: 768px) {
    margin-top: 8rem;
    padding: 0 1rem;
  }

  .date {
    display: inline-block;
    background: var(--color-light);
    border-radius: var(--border-radius-1);
    margin-top: 1rem;
    padding: 0.5rem 1.6rem;

    input[type='date'] {
      background: transparent;
      color: var(--color-dark);
    }
  }

  .insights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;

    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
`;
