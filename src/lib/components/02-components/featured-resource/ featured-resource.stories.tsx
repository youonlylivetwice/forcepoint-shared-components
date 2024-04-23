import ArrowRight from '../../../assets/img/icons/arrow-right.svg?react';
import FeaturedResourceCard from './featured-resource--card';
import FeaturedResourceListItem from './featured-resource--list-item';

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

export const ListItem = () => {
  return (
    <FeaturedResourceListItem
      url="/"
      eyebrow="eyebrow"
      endIcon={<ArrowRight />}
      title="Forcepoint Data Visibility"
    />
  );
};
