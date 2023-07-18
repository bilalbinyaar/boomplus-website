import React from 'react';
import SaltNav from '../components/salt/SaltNav';
import SaltBanner from '../components/salt/SaltBanner';
import SaltProcesses from '../components/salt/SaltProcesses';
import SaltContactSales from '../components/salt/SaltContactSales';
import SaltStates from '../components/salt/SaltStates';

const SaltHomepage = () => {
  return (
    <React.Fragment>
      <SaltNav />
      <SaltBanner />
      <SaltProcesses />
      <SaltContactSales />
      <SaltStates />
    </React.Fragment>
  );
};

export default SaltHomepage;
