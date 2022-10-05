import { useContext, useEffect, useState } from 'react';
import { imagesContext } from '../../context/ImagesContextProvider';
import { HeaderStyled } from './Header.styled';

const Header = () => {
  const { images, isChanged } = useContext(imagesContext);
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(images[0]);
  }, [images, isChanged]);

  return <HeaderStyled background={content}>Header</HeaderStyled>;
};

export default Header;
