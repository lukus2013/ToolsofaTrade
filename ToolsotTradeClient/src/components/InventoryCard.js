import React from 'react';
import { deleteInventory } from '../data/inventoryData';
import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Button,
  } from "reactstrap";

export default function InventoryCard({ inventory }) {
  return (
    <Card>
    <CardBody>
    <CardTitle tag="h2">{inventory.name}</CardTitle>
    <CardText tag="h4">{inventory.type}</CardText>
    <CardText tag="h4">{inventory.manufacturer}</CardText>
    <CardText tag="h4">{inventory.location}</CardText>
        <Button
        className="delete-invnetory-btn"
        onClick={() =>
            deleteInventory(inventory.toolId)
        }
        >
        Delete Inventory Tool
        </Button>
    </CardBody>
</Card>
  )
}

InventoryCard.propTypes = {
    inventory: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      type: PropTypes.string,
      manufacturer: PropTypes.string,
      location: PropTypes.string
    }).isRequired
  };