import React from 'react';
import Title from './Title';
import { services } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return <service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
