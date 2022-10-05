import { ImagesProvider } from '../../context/ImagesContextProvider';
import { Title } from './App.styled';
import Container from '../Container';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import LeftSide from '../AsideLeft';
import RightSide from '../AsideRight';

const App = () => {
  return (
    <>
      <Title>Random Image</Title>
      <ImagesProvider>
        <Header />
        <Container>
          <LeftSide />
          <Main />
          <RightSide />
        </Container>
        <Footer />
      </ImagesProvider>
    </>
  );
};

export default App;
