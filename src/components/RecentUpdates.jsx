import styled from 'styled-components';
import RecentUpdate from './RecentUpdate';
import profile2 from '../assets/profile-2.jpg';
import profile3 from '../assets/profile-3.jpg';
import profile4 from '../assets/profile-4.jpg';

const RecentUpdates = () => {
  return (
    <Recentupdates className="recent-updates">
      <h2>Recent Updates</h2>
      <div className="updates">
        <RecentUpdate
          profilePic={profile2}
          userName="Smith Tile"
          details="just go an order from Apple tech"
          date="2 Minutes Ago"
        />
        <RecentUpdate
          profilePic={profile3}
          userName="Smith Tile"
          details="just go an order from Apple tech"
          date="2 Minutes Ago"
        />
        <RecentUpdate
          profilePic={profile4}
          userName="Smith Tile"
          details="just go an order from Apple tech"
          date="2 Minutes Ago"
        />
      </div>
    </Recentupdates>
  );
};

export default RecentUpdates;

const Recentupdates = styled.div`
  margin-top: 1rem;

  h2 {
    margin-bottom: 0.8rem;
  }

  .updates {
    background: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;

    &:hover {
      box-shadow: none;
    }
  }
`;
