import React from 'react';
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom';
import './home.css'
const Home = () => {
  return (
    <Layout>
      <div className='home' >
        <div className='headerContainer'>
          <h1>Pet Shop</h1>
          <p>A pet shop or pet store is an essential services retailer which sells animals and pet care resources to the public. A variety of animal supplies and pet accessories are also sold in pet shops. The products sold include: food, treats, toys, collars, leashes, cat litter, cages and aquariums.</p>
          <p>Pet businesses come in all forms. Some provide services like walking and grooming, while others provide products like bowls and chew toys. Some pet stores target cat and dog owners, while others may specialize in more niche pets, like reptiles and arachnids.But we are providing all kind of services from grooming selling pets in good price.
          </p>
          <Link to="/product" >
            <button>
              BOOK NOW
            </button>
          </Link>
        </div>
      </div>

    </Layout>
  );
};

export default Home;
