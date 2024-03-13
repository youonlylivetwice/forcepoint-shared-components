import Typography from "../typography/typography";

type ImgProps = {
  imgPath: string;
  imgDesc?: string;
  theme?: 'dark' | 'light';
};

export default function Img({imgPath, imgDesc, theme = 'light'}: ImgProps) {
  return (
    <figure>
      <img src={imgPath} alt={imgDesc} />
      {imgDesc !== '' && (
        <figcaption>
          <Typography
            variant='body-4'
            className={theme === 'dark' ? 'text-azure' : 'text-black'}>
              {imgDesc}
          </Typography>
        </figcaption>)
      }
    </figure>
  );
}