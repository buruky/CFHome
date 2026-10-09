import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import Reveal from './Reveal';

const ADDRESS = '729 N Locust Ln, Tacoma WA 98406';
const PHONE = '(253) 301-1187';
const EMAIL = 'alwayswithcompassion@yahoo.com';
const MAP_QUERY = encodeURIComponent(ADDRESS);

const VisitUs = () => (
  <div id="visit" className="w-full bg-navy-950 text-sand-200">
    <div className="max-w-content mx-auto px-4 sm:px-6 py-20 sm:py-28">
      <div className="grid md:grid-cols-2 gap-14 md:gap-10 items-start">
        <Reveal as="div" duration={800}>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-sand-50 mb-4 text-center md:text-left">
            Come Visit Us
          </h2>
          <p className="text-xl text-sand-200/80 mb-10 max-w-xl text-center md:text-left mx-auto md:mx-0">
            Let us show you why Always with Compassion is more than a family home—it's a community where your loved one thrives.
          </p>

          <ul className="space-y-5 max-w-md mx-auto md:mx-0">
            <li>
              <a
                href={`tel:${PHONE.replace(/[^\d+]/g, '')}`}
                className="group flex items-center gap-4 rounded-xl p-3 -m-3 transition-colors duration-200 hover:bg-sand-50/5"
              >
                <span className="shrink-0 h-11 w-11 rounded-full bg-sage-700/30 text-sage-400 flex items-center justify-center group-hover:bg-sage-600/40 transition-colors duration-200">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-sand-200/50">Phone</span>
                  <span className="block text-lg font-medium text-sand-50 select-text">{PHONE}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-xl p-3 -m-3 transition-colors duration-200 hover:bg-sand-50/5"
              >
                <span className="shrink-0 h-11 w-11 rounded-full bg-sage-700/30 text-sage-400 flex items-center justify-center group-hover:bg-sage-600/40 transition-colors duration-200">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-sand-200/50">Email</span>
                  <span className="block text-lg font-medium text-sand-50 select-text break-all">{EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl p-3 -m-3 transition-colors duration-200 hover:bg-sand-50/5"
              >
                <span className="shrink-0 h-11 w-11 rounded-full bg-sage-700/30 text-sage-400 flex items-center justify-center group-hover:bg-sage-600/40 transition-colors duration-200">
                  <LocationMarkerIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-sand-200/50">Location</span>
                  <span className="block text-lg font-medium text-sand-50 select-text">{ADDRESS}</span>
                </span>
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal as="div" variant="scale" delay={120} duration={900}>
          <div className="rounded-2xl overflow-hidden shadow-lifted ring-1 ring-sand-50/10 h-72 sm:h-96 md:h-full md:min-h-[22rem]">
            <iframe
              title="Map to Always with Compassion Family Home"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="w-full h-full grayscale-[25%] contrast-[1.05]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </div>
);

export default VisitUs;
