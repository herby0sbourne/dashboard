import styled from 'styled-components';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import RecentUpdates from './RecentUpdates';
import SalesAnalytics from './SalesAnalytics';
import profile1 from '../assets/profile-1.jpg';

const RightBar = () => {
  return (
    <Rightbar id="right">
      <div className="top">
        <button
          id="menu-btn"
          onClick={() => {
            document.querySelector('aside').style.display = 'block';
          }}
        >
          <span className="icon-sharp">
            <MenuSharpIcon />
          </span>
        </button>
        <div
          className="theme-toggler"
          onClick={() => {
            document.querySelector('body').classList.toggle('dark-theme-variables');
            document.querySelector('.light').classList.toggle('active');
            document.querySelector('.dark').classList.toggle('active');
          }}
        >
          <span className="icon-sharp active light">
            <LightModeSharpIcon />
          </span>
          <span className="icon-sharp dark">
            <DarkModeSharpIcon />
          </span>
        </div>
        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Mark</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src={profile1} alt="" />
          </div>
        </div>
      </div>
      {/*  */}
      <RecentUpdates />
      <SalesAnalytics />

      {/* <div className="sales-analytics">
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
      </div> */}
    </Rightbar>
  );
};

export default RightBar;

const Rightbar = styled.div`
  margin-top: 1.4rem;

  @media screen and (max-width: 768px) {
    width: 94%;
    margin: 0 auto 4rem;
  }

  .top {
    display: flex;
    justify-content: end;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      position: fixed;
      top: 0;
      left: 0;
      align-items: center;
      padding: 0 0.8rem;
      height: 4.6rem;
      background: var(--color-white);
      width: 100%;
      margin: 0;
      z-index: 2;
      box-shadow: 0 1rem 1rem var(--color-light);
    }

    button {
      display: none;

      @media screen and (max-width: 768px) {
        display: inline-block;
        background: transparent;
        cursor: pointer;
        color: var(--color-dark);
        position: absolute;
        left: 1rem;
      }

      span {
        @media screen and (max-width: 768px) {
          font-size: 2rem;
        }
      }
    }

    .profile {
      display: flex;
      gap: 2rem;
      text-align: right;

      .info {
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }

  .theme-toggler {
    background: var(--color-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
    width: 4.2rem;
    cursor: pointer;
    border-radius: var(--border-radius-1);

    @media screen and (max-width: 768px) {
      width: 4.4rem;
      position: absolute;
      left: 66%;
    }

    span {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 100%;

      &.active {
        background: var(--color-primary);
        color: var(--color-white);
        border-radius: var(--border-radius-1);
      }
    }
  }

  /* Sales analytics */

  /* .sales-analytics {
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
  } */
`;
