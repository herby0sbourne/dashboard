import styled from 'styled-components';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import RightBar from './components/RightBar';

import './App.css';

function App() {
  return (
    <Container className="container">
      <Sidebar />
      <Main />
      <RightBar />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  width: 96%;
  margin: 0 auto;
  gap: 1.8rem;
  grid-template-columns: 14rem auto 23rem;

  @media screen and (max-width: 1200px) {
    width: 94%;
    grid-template-columns: 7rem auto 23rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

export default App;
