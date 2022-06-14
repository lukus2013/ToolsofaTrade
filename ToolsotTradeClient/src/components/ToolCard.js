import React from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Button,
  } from "reactstrap";
import { deleteTool, updateTool } from '../data/toolData';

export default function ToolCard() {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h2">{tool.name}</CardTitle>
        <CardText tag="h4">{tool.type}</CardText>
        <CardText tag="h4">${tool.manufacturer}</CardText>
          <Button
            className="edit-tool-btn"
            onClick={() => {
              updateTool(tool.id);
              history("/");
            }}
          >
            Add To Cart
          </Button>
          <Button
            className="delete-tool-btn"
            onClick={() =>
              deleteTool(tool.id)
            }
          >
            Delete From Cart
          </Button>
      </CardBody>
    </Card>
  )
}

ToolCard.propTypes = {
    tool: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      type: PropTypes.string,
      manufacturer: PropTypes.string,
    }).isRequired
  };

  