interface Iprops {
    imegURL: string;
    alt: string;
    ClassName: string;
}


const Imeg = ({imegURL,  alt, ClassName}:Iprops) => {
  return (
        <img
        src={imegURL}
        alt={alt}
        className={ClassName}
      />
  );
}

export default Imeg;
