import DownloadIcon from '../../00-tokens/icons/download-icon';
import FeaturedResourceCard from './featured-resource--card';
import FeaturedResourceListItem from './featured-resource--list-item';
import PlayIcon from '../../00-tokens/icons/play-icon';

/**
 * Storybook Definition.
 */
export default { title: 'Components/Featured Resource' };

export const Card = () => {
  return (
    <FeaturedResourceCard
      url="/"
      image={{
        src: 'https://s3-alpha-sig.figma.com/img/060b/4f3a/386095db1eac3e836dbe12b4b8b2efee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MD9XjGFVn~TaZCkuswGT3zfCtALPynJjK9y3FDtuqHs1ydP0aGf~nPMGIqCcMbqIV0TFfKSzn4wTJItBvQw2J8rwWIFOHrkC6W7jD3Svxlrz2-DSRkIAEblZn9lFqzzFGZ2jZr92lxP32YJuUAiUjofrF-LjwW2R68bdfkn56pCi0bZmrEffojOBgZbQhoqazWeG78f0P-rsSArNQA2gcTkD~kJstPUmXoJj4M6dXuuPhEbkr4n-Z47JTOWJPdmPxPVDgEAaqxeEeoEyoE83sYgsvsRnQVgl1ZEvNb6eoUpBnNH0MI4Wrie3r9WRvYSUYzyl79~iWzc5WDSJ01xVng__',
        alt: 'Analyst Acclaim',
      }}
      buttonLabel="Secondary"
      title="2023 Gartner® Critical Capabilities for Single-Vendor SASE"
    />
  );
};

export const List = () => {
  const sectionBgColor = '#1d252c';
  let listStyles: React.CSSProperties = {
    backgroundColor: sectionBgColor,
  };

  return (
    <div style={listStyles}>
      <div
        className="px-md py-lg md:mx-auto md:max-w-screen-xl"
        style={listStyles}
      >
        <FeaturedResourceListItem
          url="/"
          eyebrow="eyebrow"
          sectionBgColor={sectionBgColor}
          title="Forcepoint Data Visibility"
          startIcon={<DownloadIcon color='white' />}
        />
        <FeaturedResourceListItem
          url="/"
          eyebrow="eyebrow"
          sectionBgColor={sectionBgColor}
          title="Forcepoint Data Visibility Infographic"
          startIcon={<DownloadIcon color='white' />}
        />
        <FeaturedResourceListItem
          url="/"
          eyebrow="eyebrow"
          sectionBgColor={sectionBgColor}
          startIcon={<PlayIcon color='white' />}
          title="Gain a Panoramic View into all your Unstructured Data with Forcepoint Data Visibility"
        />
      </div>
    </div>
  );
};
