import FeatureCaregiver from './FeatureCaregiver';
import FeatureSuites from './FeatureSuites';
import FeatureLivingSpaces from './FeatureLivingSpaces';
import FeatureBackyard from './FeatureBackyard';
import FeatureCulinary from './FeatureCulinary';
import Reveal from './Reveal';
import house from '../assets/house.webp';

const Features = () => (
  <div id="features" className="w-full">
    {/* Full-width banner with the title set into the bottom scrim, not floating over the sky */}
    <div className="relative w-full aspect-[16/9] sm:aspect-[3/1] overflow-hidden">
      <img
        src={house}
        alt="Care home exterior"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 pb-10 sm:pb-14 px-4">
        <Reveal variant="up-lg" duration={900}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-sand-50 text-center drop-shadow-sm">
            Always with Compassion — Our Home
          </h2>
        </Reveal>
      </div>
    </div>

    <div className="bg-sand-50 py-16 sm:py-20 px-4">
      <Reveal as="div" className="max-w-content mx-auto text-center" duration={800}>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-navy-900 mb-5">Why Choose Us</h2>
        <p className="text-lg sm:text-xl text-navy-700/80 max-w-3xl mx-auto leading-relaxed">
          Our family home, situated in a calm neighborhood a few minutes from the Puget Sound and Narrow Bridge, offers thoughtfully curated spaces, compassionate staff, and premium amenities designed to help our residents thrive.
        </p>
      </Reveal>
    </div>

    <FeatureCaregiver />
    <FeatureCulinary />
    <FeatureSuites />
    <FeatureLivingSpaces />
    <FeatureBackyard />
  </div>
);

export default Features;


