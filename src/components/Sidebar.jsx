import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import ReceiptLongSharpIcon from '@mui/icons-material/ReceiptLongSharp';
import InsightsSharpIcon from '@mui/icons-material/InsightsSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import Inventory2SharpIcon from '@mui/icons-material/Inventory2Sharp';
import ReportGmailerrorredSharpIcon from '@mui/icons-material/ReportGmailerrorredSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import logo from '../assets/logo.png';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Aside id="aside">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
          <h2>
            EGA<span className="danger">TOR</span>
          </h2>
        </div>
        <div
          className="close"
          id="close-btn"
          onClick={() => {
            document.querySelector('aside').style.display = 'none';
          }}
        >
          <div className="icon-sharp">
            <CloseSharpIcon />
          </div>
        </div>
      </div>
      <div className="sidebar">
        <a href="">
          <span className="icon-sharp">
            <GridViewSharpIcon />
          </span>
          <h3>Dashboard</h3>
        </a>
        <a href="">
          <span className="icon-sharp">
            <PersonOutlineSharpIcon />
          </span>
          <h3>Customers</h3>
        </a>
        <a href="" className="active">
          <span className="icon-sharp">
            <ReceiptLongSharpIcon />
          </span>
          <h3>Orders</h3>
        </a>
        <a href="">
          <span className="icon-sharp">
            <InsightsSharpIcon />
          </span>
          <h3>Analytics</h3>
        </a>
        <a href="">
          <span className="icon-sharp">
            <MailOutlineSharpIcon />
          </span>
          <h3>Messages</h3>
          <span className="message-count">26</span>
        </a>
        <a href="">
          <span className="icon-sharp">
            <Inventory2SharpIcon />
          </span>
          <h3>Products</h3>
        </a>
        <a href="">
          <span className="icon-sharp">
            <ReportGmailerrorredSharpIcon />
          </span>
          <h3>Reports</h3>
        </a>
        <a href="">
          <span className="icon-sharp">
            <SettingsSharpIcon />
          </span>
          <h3>Settings</h3>
        </a>
        <a href="">
          <span className="icon-sharp">
            <AddSharpIcon />
          </span>
          <h3>Add Product</h3>
        </a>
        <a href="">
          <span className="icon-sharp">
            <LogoutSharpIcon />
          </span>
          <h3>Logout</h3>
        </a>
      </div>
    </Aside>
  );
};

const Aside = styled.aside`
  height: 100vh;

  @media screen and (max-width: 768px) {
    position: fixed;
    left: -100%;
    width: 18rem;
    background: var(--color-white);
    z-index: 3;
    height: 100vh;
    box-shadow: 1rem 3rem 4rem var(--color-light);
    padding-right: var(--card-padding);
    display: none;
    animation: showMenu 400ms ease forwards;

    @keyframes showMenu {
      to {
        left: 0;
      }
    }
  }

  .close {
    display: none;

    @media screen and (max-width: 768px) {
      display: inline-block;
      cursor: pointer;
    }
  }

  .danger {
    color: var(--color-danger);
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;
    /* background: var(--color-white); */
  }

  .logo {
    display: flex;
    gap: 0.8rem;

    @media screen and (max-width: 768px) {
      margin-left: 1rem;
    }

    img {
      width: 2rem;
      height: 2rem;
    }

    h2 {
      @media screen and (max-width: 1200px) {
        display: none;
      }

      @media screen and (max-width: 768px) {
        display: inline;
      }
    }
  }

  .sidebar {
    position: relative;
    top: 3rem;
    display: flex;
    flex-direction: column;
    height: 86vh;
  }

  h3 {
    font-weight: 500;

    @media screen and (max-width: 1200px) {
      display: none;
    }

    @media screen and (max-width: 768px) {
      display: inline;
    }
  }

  a {
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
    height: 3.7rem;
    color: var(--color-info-dark);
    margin-left: 2rem;
    transition: all 300ms ease;

    @media screen and (max-width: 1200px) {
      width: 5.6rem;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 3.4rem;
    }

    &:last-child {
      position: absolute;
      bottom: 2rem;
      width: 100%;

      @media screen and (max-width: 1200px) {
        position: relative;
        margin-top: 1.6rem;
      }

      @media screen and (max-width: 768px) {
        position: absolute;
        bottom: 5rem;
      }
    }

    &:hover {
      color: var(--color-primary);

      & span {
        margin-left: 1rem;
      }
    }

    &.active {
      background: var(--color-light);
      color: var(--color-primary);
      margin-left: 0;

      &::before {
        content: '';
        width: 6px;
        height: 100%;
        background: var(--color-primary);
      }
    }

    &.active span {
      color: var(--color-primary);
      margin-left: calc(1rem - 3px);
    }

    span {
      font-size: 1.6rem;
      transition: all 300ms ease;
    }

    .message-count {
      background: var(--color-danger);
      color: var(--color-white);
      padding: 2px 10px;
      font-size: 11px;
      border-radius: var(--border-radius-1);
    }
  }
`;

export default Sidebar;
