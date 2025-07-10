import React from 'react';
import BookIcon from '../assets/icons/Book.svg';
import LampIcon from '../assets/icons/Lamp.svg';
import PlantIcon from '../assets/icons/plant.svg';
import TableIcon from '../assets/icons/table.svg';
import LaptopIcon from '../assets/icons/Laptop.svg';
import HeartIcon from '../assets/icons/heart img.svg';
import FlowerIcon from '../assets/icons/flower img.svg';
import HackclubLogo from '../assets/icons/hackclub logo.svg';

const IconExample = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <h2>Your SVG Icons</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <img src={BookIcon} alt="Book" style={{ width: '50px', height: '50px' }} />
          <p>Book</p>
        </div>
        
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <img src={LampIcon} alt="Lamp" style={{ width: '50px', height: '50px' }} />
          <p>Lamp</p>
        </div>
        
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <img src={PlantIcon} alt="Plant" style={{ width: '50px', height: '50px' }} />
          <p>Plant</p>
        </div>
        
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <img src={TableIcon} alt="Table" style={{ width: '50px', height: '50px' }} />
          <p>Table</p>
        </div>
        
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <img src={LaptopIcon} alt="Laptop" style={{ width: '50px', height: '50px' }} />
          <p>Laptop</p>
        </div>
        
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <img src={HeartIcon} alt="Heart" style={{ width: '50px', height: '50px' }} />
          <p>Heart</p>
        </div>
        
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <img src={FlowerIcon} alt="Flower" style={{ width: '50px', height: '50px' }} />
          <p>Flower</p>
        </div>
        
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <img src={HackclubLogo} alt="Hackclub Logo" style={{ width: '50px', height: '50px' }} />
          <p>Hackclub Logo</p>
        </div>
      </div>
    </div>
  );
};

export default IconExample; 