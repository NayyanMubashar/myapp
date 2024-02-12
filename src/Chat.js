import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card2 from './components/Card2';
import { service } from './components/Loop';

const YourComponent = () => {
  const data = ['nayab', 'saad ', 'ahmad','ali'];

  return (
    <div className="container">
      <div className="row">
        {service.map((item, index) => (
          <div key={index} className="col-md-3">
            {/* Adjust the column size based on your requirements */}
            <div className="horizontalDiv">
              <Card2
              name={item.name}
              dis={item.dis}
              icon={item.icon}
              
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;