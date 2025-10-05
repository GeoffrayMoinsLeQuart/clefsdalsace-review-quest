import ReactGA from 'react-ga4';

const GA4_MEASUREMENT_ID = 'G-HRJTLCWFYG';
const GTM_ID = 'GTM-WJHTFKNJ';

export const initGA = () => {
  ReactGA.initialize(GA4_MEASUREMENT_ID);
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export { GTM_ID };
