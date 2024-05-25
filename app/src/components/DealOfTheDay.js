import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './DealOfTheDay.css';

const DealOfTheDay = ({ category }) => {
  return (
    <div className="category-box">
      <div className="card-container">
        <Typography variant="heading4" color="textSecondary" component="div">
          {category.name} 
        </Typography>
        <div className="image-container">
          {category.deals.map((deal, index) => (
            <Card key={index}>
              <CardContent>
                <a href=''><img src={deal.image} alt={`${category.name} Deal`} className="category-image" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
