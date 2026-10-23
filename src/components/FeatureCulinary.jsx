import food from '../assets/food.webp';
import Reveal from './Reveal';

const FeatureCulinary = () => {
  return (
    <section className="bg-sand-50 py-20 sm:py-28 px-4">
      <div className="max-w-content mx-auto">
        <Reveal as="div" className="text-center mb-12" duration={800}>
          <h3 className="font-display text-3xl sm:text-4xl font-semibold mb-4 text-navy-900">
            Tailored Culinary Experience
          </h3>
          <p className="text-lg text-navy-700/80 leading-relaxed max-w-3xl mx-auto">
            Every meal is prepared fresh daily with personalized menus that balance nutrition and flavor. Our residents enjoy delicious, home-style cooking tailored to their tastes and dietary needs.
          </p>
        </Reveal>

        <Reveal variant="scale" duration={900} className="relative max-w-4xl mx-auto block">
          <img
            src={food}
            alt="Plated meal"
            loading="lazy"
            decoding="async"
            className="w-full h-80 sm:h-[26rem] object-cover rounded-2xl shadow-lifted"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent text-sand-50 p-6 sm:p-8 rounded-b-2xl">
            <p className="font-display italic text-lg sm:text-xl">
              Meals crafted with love, served with care.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FeatureCulinary;
