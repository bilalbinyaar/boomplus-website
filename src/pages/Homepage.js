import React from 'react'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='container'>
            <div className='homepage-content-wrapper'>
                <div className='homepage-description'>
                    <h3>Boom Plus For Manufacturing and Commerce proudly Manufacture and Export <strong>Macaroni, Spaghetti, Wheat Flour </strong> and<strong> Salt</strong>! Our products are known around <strong>Africa</strong> and the <strong>Americas</strong> for high quality and reliability.</h3>
                </div>
                <div className='homepage-products-category'>
                    <div className='homepage-products salt-product'>
                        <button>Salt</button>
                    </div>
                    <div className='homepage-products pasta-product'>
                        <button>Spaghetti & Macaroni</button>
                    </div>
                    <div className='homepage-products wheat-product'>
                        <button>Wheat Flour</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage