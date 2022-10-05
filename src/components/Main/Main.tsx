import { useEffect, useContext } from 'react';
import { imagesContext } from '../../context/ImagesContextProvider';
import { makeColor } from '../../helpers/functions';
import { MainStyled, Button } from './Main.styled';

const Main = () => {
  const { images, changeImages } = useContext(imagesContext);
  const rgb = `rgb(${makeColor()},${makeColor()},${makeColor()})`;

  const shuffleImages = () => {
    changeImages();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      shuffleImages();
    }, 31200);
    return () => clearInterval(interval);
  });

  return (
    <MainStyled background={images[2]}>
      Main
      <Button background={rgb} type="button" onClick={shuffleImages}>
        Click me!
      </Button>
    </MainStyled>
  );
};

export default Main;
