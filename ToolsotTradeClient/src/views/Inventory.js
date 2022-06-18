import React, { useEffect, useState } from 'react'
import { getInventory } from "../data/inventoryData"
import InventoryCard from '../components/InventoryCard';

export default function Inventory() {
    const [inventorys, setInventory] = useState([]);

    useEffect(() => {
        let isMounted = true;
        getInventory().then((inventorysArray) => {
            if (isMounted) setInventory(inventorysArray);
        });
    });

  return (
    <div className='inventory-page'>
        {inventorys.map((inventory) => {
            return (
                <InventoryCard key={inventory.toolId} inventory={inventory} />
            )
        })}
    </div>
  )
}