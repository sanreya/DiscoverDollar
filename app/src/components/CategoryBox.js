import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Popover, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CategoryBox.css';
import categoriesData from '../data.json';

const CategoryBox = () => {
  const [categories, setCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState(null);

  useEffect(() => {
    setCategories(categoriesData.categories);
  }, []);

  const handlePopoverOpen = (event, category) => {
    setAnchorEl(event.currentTarget);
    setClickedCategory(category);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setClickedCategory(null);
    setExpandedSubcategory(null);
  };

  const handleAccordionChange = (subcategory) => {
    setExpandedSubcategory(expandedSubcategory === subcategory ? null : subcategory);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="category-box">
      <div className="card-container">
        {categories.map((category) => (
          <React.Fragment key={category.name}>
            <Card
              className="category-card"
              onClick={(event) => handlePopoverOpen(event, category)}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  <img src={category.image} alt={category.name} className="category-image" />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div">
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </React.Fragment>
        ))}
      </div>
      <Popover
        id="click-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div>
          {clickedCategory && clickedCategory.subcategories.map((subcategory, index) => (
            <Accordion
              key={index}
              expanded={expandedSubcategory === subcategory.name}
              onChange={() => handleAccordionChange(subcategory.name)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{subcategory.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {expandedSubcategory === subcategory.name && subcategory.subsubcategories && subcategory.subsubcategories.map((subsubcategory, subIndex) => (
                    <ListItem key={subIndex}>
                      <ListItemText primary={subsubcategory} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default CategoryBox;
