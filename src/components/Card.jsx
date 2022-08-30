import styled from 'styled-components';
import AnalyticsSharpIcon from '@mui/icons-material/AnalyticsSharp';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import StackedLineChartSharpIcon from '@mui/icons-material/StackedLineChartSharp';

const Card = ({ title, value, percentage }) => {
  return (
    <Container id="card">
      <div className={`sales ${title}`}>
        <span className="icon-sharp">
          {title === 'Sales' ? (
            <AnalyticsSharpIcon />
          ) : title === 'Expenses' ? (
            <BarChartSharpIcon />
          ) : (
            <StackedLineChartSharpIcon />
          )}
        </span>
        <div className="middle">
          <div className="left">
            <h3>Total {title}</h3>
            <h1>${value}</h1>
          </div>
          <div className="progress">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="number">
              <p>{percentage}%</p>
            </div>
          </div>
        </div>
        <small className="text-muted">Last 24 Hours</small>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  background: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  margin-top: 1rem;
  box-shadow: var(--box-shadow);
  transition: all 300ms ease;

  &:hover {
    box-shadow: none;
  }

  .icon-sharp {
    display: flex;
    background: var(--color-primary);
    padding: 0.5rem;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: var(--color-white);
    font-size: 2rem;
  }

  .Expenses span {
    background: var(--color-danger);
  }

  .Income span {
    background: var(--color-success);
  }

  .middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    margin: 1rem 0 0 0.6rem;
    font-size: 1rem;
  }

  .progress {
    position: relative;
    width: 92px;
    height: 92px;
    border-radius: 50%;

    svg {
      width: 7rem;
      height: 7rem;

      circle {
        fill: none;
        stroke: var(--color-primary);
        stroke-width: 14;
        stroke-linecap: round;
        transform: translate(5px, 5px);
        /* stroke-dasharray: 110; */
        stroke-dashoffset: 92;
      }
    }

    .number {
      position: absolute;
      /* center with position  */
      /* top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); */
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .Sales svg circle {
    stroke-dashoffset: -30;
    stroke-dasharray: 200;
  }

  .Expenses svg circle {
    stroke-dashoffset: 20;
    stroke-dasharray: 80;
  }

  small {
    display: block;
    margin-top: 1.6rem;
  }
`;
