import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Helmet>
        <title>
          Boom Plus | Pasta, Wheat Flour & Salt Manufacturing & Export
        </title>
        <meta
          name="description"
          content="Boom Plus Co. manufactures and exports Pasta, Wheat Flour and Salt. Our products are known around Africa and the Americas for high quality and reliability."
        />
      </Helmet>
      <div className="container">
        <div className="homepage-content-wrapper">
          <div className="homepage-description">
            <h4>
              Boom Plus For Manufacturing and Commerce proudly Manufacture and
              Export <strong>Macaroni, Spaghetti, Wheat Flour </strong> and
              <strong> Salt</strong>! Our products are known around{' '}
              <strong>Africa</strong> and the <strong>Americas</strong> for high
              quality and reliability.
            </h4>
          </div>
          <div className="homepage-products-category">
            <div className="homepage-products salt-product">
              <Link to="/home-page-salt-product">
                <button>Salt</button>
              </Link>
            </div>
            <div className="homepage-products pasta-product">
              <button>Spaghetti & Macaroni</button>
            </div>
            <div className="homepage-products wheat-product">
              <button>Wheat Flour</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
