import styled from 'styled-components';

const RecentUpdate = ({ profilePic, userName, details, date }) => {
  return (
    <Update id="update">
      <div className="profile-photo">
        <img src={profilePic} alt="" />
      </div>
      <div className="message">
        <p>
          <b>{userName}</b> {details}
        </p>
        <small className="text-muted">{date}</small>
      </div>
    </Update>
  );
};

export default RecentUpdate;

const Update = styled.div`
  display: grid;
  grid-template-columns: 2.6rem auto;
  gap: 1rem;
  margin-bottom: 1rem;
`;
