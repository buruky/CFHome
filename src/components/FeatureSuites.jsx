import room1 from '../assets/rooms/room.jpg';
import room2 from '../assets/rooms/room(1).jpg';
import room4 from '../assets/rooms/room(3).jpg';
import room6 from '../assets/rooms/room(5).jpg';
import room7 from '../assets/rooms/room(6).jpg';
import room8 from '../assets/rooms/room(7).jpg';
import Carousel from './Carousel';
import Reveal from './Reveal';

const images = [room1, room2, room4, room7, room6, room8];

const FeatureSuites = () => {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20 sm:py-28 px-4">
      <Reveal as="div" className="max-w-content mx-auto text-center mb-12" duration={800}>
        <h3 className="font-display text-3xl sm:text-4xl font-semibold text-sand-50 mb-4">
          Private Luxury Suites
        </h3>
        <p className="text-lg text-sand-100/75 max-w-3xl mx-auto leading-relaxed">
          Experience privacy and comfort in our elegant suites, each with a full private bathroom and smart amenities to ensure dignity and ease.
        </p>
      </Reveal>

      <Reveal variant="scale" duration={900}>
        <Carousel images={images} altPrefix="Suite" heightClass="h-[22rem] sm:h-[28rem]" onDark />
      </Reveal>
    </section>
  );
};

export default FeatureSuites;
