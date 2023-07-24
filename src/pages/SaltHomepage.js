import React from 'react';
import SaltNav from '../components/salt/SaltNav';
import SaltBanner from '../components/salt/SaltBanner';
import SaltProcesses from '../components/salt/SaltProcesses';
import SaltContactSales from '../components/salt/SaltContactSales';
import SaltStates from '../components/salt/SaltStates';
import SaltMetric from '../components/salt/SaltMetric';
import SaltSlider from '../components/salt/SaltSlider';
import { Helmet } from 'react-helmet';

const SaltHomepage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Boom Plus | We proudly Produce and Export Salt!
        </title>
        <meta
          name="description"
          content="Boom Plus Co. proudly produce and export Salt! Our products are known around Africa and the Americas for high quality and reliability."
        />
      </Helmet>
      <SaltNav />
      <SaltBanner />
      <SaltProcesses />
      <SaltContactSales />
      <SaltStates />
      <SaltMetric />
      <SaltSlider />
    </React.Fragment>
  );
};

export default SaltHomepage;
