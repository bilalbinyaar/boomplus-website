import React from 'react';
import SaltNav from '../components/salt/SaltNav';
import SaltBanner from '../components/salt/SaltBanner';
import SaltProcesses from '../components/salt/SaltProcesses';

const SaltHomepage = () => {
  return (
    <React.Fragment>
      <SaltNav />
      <SaltBanner />
      <SaltProcesses />
    </React.Fragment>
  );
};

export default SaltHomepage;
