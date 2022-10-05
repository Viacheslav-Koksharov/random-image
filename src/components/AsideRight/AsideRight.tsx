import { useContext, useEffect, useState } from 'react';
import { imagesContext } from '../../context/ImagesContextProvider';
import { AsideRight } from './AsideRight.styled';

const RightSide = () => {
  const { images, isChanged } = useContext(imagesContext);
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(images[3]);
  }, [images, isChanged]);

  return <AsideRight background={content}>Aside Right</AsideRight>;
};

export default RightSide;
