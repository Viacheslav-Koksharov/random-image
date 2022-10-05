import { useContext, useEffect, useState } from 'react';
import { imagesContext } from '../../context/ImagesContextProvider';
import { AsideLeft } from './AsideLeft.styled';

const LeftSide = () => {
  const { images, isChanged } = useContext(imagesContext);
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(images[1]);
  }, [images, isChanged]);

  return <AsideLeft background={content}>Aside Left</AsideLeft>;
};

export default LeftSide;
