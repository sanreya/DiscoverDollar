import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CategoryBox from './components/CategoryBox';
import CarouselComponent from './components/CarouselComponent';
import DealOfTheDay from'./components/DealOfTheDay';
import data from './data.json';

function Body() {
    const categories = data.categories;
    return (
        <div className="body-section">
                <CategoryBox/>
                <CarouselComponent/>
                {categories.map((category) => (
                <DealOfTheDay key={category.name} category={category} />
                ))}
        </div>
    );
}

export default Body;
