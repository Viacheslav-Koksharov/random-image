import { useContext, useEffect, useState } from 'react';
import { imagesContext } from '../../context/ImagesContextProvider';
import { FooterStyled } from './Footer.styled';

const Footer = () => {
  const { images, isChanged } = useContext(imagesContext);
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(images[4]);
  }, [images, isChanged]);

  return <FooterStyled background={content}>Footer</FooterStyled>;
};

export default Footer;
