
export  const UrlApi ="http://localhost:8090/IbtissamCar/"

export const getPublicImagePath = (imageName :String) => {
    return `${process.env.PUBLIC_URL}/imgaes/${imageName}`;
  };