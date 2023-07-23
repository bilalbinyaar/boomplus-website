import React from 'react';
import SaltNav from '../components/salt/SaltNav';
import SaltBanner from '../components/salt/SaltBanner';
import SaltProcesses from '../components/salt/SaltProcesses';
import SaltContactSales from '../components/salt/SaltContactSales';
import SaltStates from '../components/salt/SaltStates';
import SaltMetric from '../components/salt/SaltMetric';
import SaltSlider from '../components/salt/SaltSlider';

const SaltHomepage = () => {
  return (
    <React.Fragment>
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
