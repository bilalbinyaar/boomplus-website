import React from 'react';
import SaltNav from '../components/salt/SaltNav';
import SaltBanner from '../components/salt/SaltBanner';
import SaltProcesses from '../components/salt/SaltProcesses';
import SaltContactSales from '../components/salt/SaltContactSales';

const SaltHomepage = () => {
  return (
    <React.Fragment>
      <SaltNav />
      <SaltBanner />
      <SaltProcesses />
      <SaltContactSales />
    </React.Fragment>
  );
};

export default SaltHomepage;
