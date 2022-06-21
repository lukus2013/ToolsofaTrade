import React, { useEffect, useState } from 'react'
import { getInventory } from "../data/inventoryData"
import InventoryCard from '../components/InventoryCard';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function Inventory() {
    const [inventorys, setInventory] = useState([]);
    const [filterTools, setFilterTools] = useState([]);

    useEffect(() => {
        let isMounted = true;
        getInventory().then((inventorysArray) => {
            if (isMounted) setInventory(inventorysArray);
        });
    });

    const handleChange = (method) => {
        if (method === 'Wood') {
          setFilterTools(
            inventorys.filter((myTools) => String(myTools.type) === 'Wood'),
          );
        } else if (method === 'Auto') {
            setFilterTools(
            inventorys.filter((myTools) => String(myTools.type) === 'Auto'),
          );
        } else if (method === 'Metal') {
            setFilterTools(
            inventorys.filter((myTools) => String(myTools.type) === 'Metal'),
          );
        } else if (method === 'Multi') {
            setFilterTools(
            inventorys.filter((myTools) => String(myTools.type) === 'Multi'),
          );
        } else if (method === 'all') {
          setFilterTools([]);
        }
      };

  return (
    <div className='inventory-page'>
        <h1 className="text-center">Your Tools </h1>
      <DropdownButton
        className="filter-type"
        id="dropdown-basic-button"
        title="Filter Tools"
      >
        <Dropdown.Item className='dropdown-filter' onClick={() => handleChange('Wood')}>
          All of Your Woodworking Tools
        </Dropdown.Item>
         <Dropdown.Item className='dropdown-filter' onClick={() => handleChange('Auto')}>
          All of Your Automotive Tools
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-filter' onClick={() => handleChange('Metal')}>
          All of Your Metal Working Tools
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-filter' onClick={() => handleChange('Multi')}>
          All of Your Multi Discipline Tools
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-filter' onClick={() => handleChange('all')}>
          All Your Tools
        </Dropdown.Item>
      </DropdownButton>
      <div className='inventory-container'>
        <div className="d-flex flex-wrap">
            {filterTools.length
                ? filterTools.map((inventory) => (
                <InventoryCard key={inventory.toolId} inventory={inventory} />
                ))
                : inventorys.map((inventory) => {
                return (
                <InventoryCard key={inventory.toolId} inventory={inventory} />
                )
                })}
        </div>
        </div>
    </div>
  )
}