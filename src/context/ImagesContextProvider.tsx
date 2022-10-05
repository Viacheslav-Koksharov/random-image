import { createContext, useState } from 'react';
import { shuffle } from '../helpers/functions';
import { IContextProps, IContext } from '../interfaces/types';
import image1 from '../images/cats.jpg';
import image2 from '../images/chubaka.jpg';
import image3 from '../images/dogs.jpg';
import image4 from '../images/dyno.jpg';
import image5 from '../images/planets.jpg';

const imagesContext = createContext<IContext>(null!);
const initialImages = [image1, image2, image3, image4, image5];

const ImagesProvider = ({ children }: IContextProps) => {
  const [images, setImages] = useState(initialImages);
  const [isChanged, setIsChanged] = useState(false);

  const changeImages = () => {
    setImages(shuffle(images));
    setIsChanged(!isChanged);
  };

  const value: IContext = {
    images,
    changeImages,
    isChanged,
    setIsChanged,
  };

  return (
    <imagesContext.Provider value={value}>{children}</imagesContext.Provider>
  );
};

export { imagesContext, ImagesProvider };
