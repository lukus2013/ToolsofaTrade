import React from 'react';
import { Link } from 'react-router-dom';
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
    <Card className='inventory-card'>
    <CardBody>
    <CardTitle tag="h2">{inventory.name}</CardTitle>
    <CardText tag="h4">{inventory.type}</CardText>
    <CardText tag="h4">{inventory.manufacturer}</CardText>
    <CardText tag="h4">{inventory.location}</CardText>
        <Button
            className="btn btn-danger"
            onClick={() =>
                deleteInventory(inventory.toolId)
            }
            >
            Delete Inventory Tool
        </Button>
        <Button>
            <Link inventory={inventory} to={`/edit/${inventory.toolId}`} className="btn btn-primary">
                Edit
            </Link>
        </Button>
    </CardBody>
</Card>
  )
}

InventoryCard.propTypes = {
    inventory: PropTypes.shape(PropTypes.obj).isRequired,
  };