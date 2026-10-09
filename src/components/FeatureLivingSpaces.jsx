import img1 from '../assets/livingspaces/livingspace(1).jpg';
import img2 from '../assets/livingspaces/livingspace(2).jpg';
import img3 from '../assets/livingspaces/livingspace(3).jpg';
import img4 from '../assets/livingspaces/livingspace(4).jpg';
import img5 from '../assets/livingspaces/livingspace(5).jpg';
import img6 from '../assets/livingspaces/livingspace(6).jpg';
import Carousel from './Carousel';
import Reveal from './Reveal';

const images = [img3, img1, img2, img4, img5, img6];

const FeatureLivingSpaces = () => {
  return (
    <section className="py-20 sm:py-28 px-4 bg-sand-50">
      <Reveal as="div" className="max-w-content mx-auto text-center mb-12" duration={800}>
        <h3 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 mb-4">
          Inviting Living Spaces
        </h3>
        <p className="text-lg text-navy-700/80 max-w-2xl mx-auto leading-relaxed">
          Our spacious, cozy common areas feel just like home—perfect for relaxing, socializing, and enjoying daily activities in comfort.
        </p>
      </Reveal>

      <Reveal variant="scale" duration={900}>
        <Carousel images={images} altPrefix="Living space" heightClass="h-[22rem] sm:h-[30rem]" roundedClass="rounded-3xl" />
      </Reveal>
    </section>
  );
};

export default FeatureLivingSpaces;
