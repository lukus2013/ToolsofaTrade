import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {
    Button, Form, FormGroup, Label, Input,
  } from "reactstrap";
import { addNewTool, getToolById, updateTool } from '../data/toolData';
import PropTypes from "prop-types";
import { updateToolLocation } from '../data/inventoryData';


const initialState = {
    toolId: 0,
    name: '',
    type: '',
    manufacturer: '',
    location: '',
};

export default function NewToolForm({ inventory }) {
    const [formInput, setFormInput] = useState(initialState);
    const history = useNavigate();
    const {id} = useParams();
    const [toolLoc, setToolLoc] = useState({});

    useEffect(() => {
      if (id) {
          getToolById(id).then(setFormInput);
        }
      }, []);
      
      const resetForm = () => {
        setFormInput(initialState);
      };
      
      useEffect(() => {
        createToolObj();        
    }, [formInput]);

    const handleChange = (e) => {
        setFormInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }; 
    
    const createToolObj = () => {
      const dataLoc = {
        tooldId: id,
        location:formInput.location,
      };
        setToolLoc(dataLoc)
    }

      const handleClick = (e) => {
        e.preventDefault();
        if (inventory && id) {
        updateToolLocation(formInput, id).then();
        updateTool(id, formInput).then(() => {
            history("/inventory");
          });
        } else {
            addNewTool({ ...formInput }).then(() => {
                resetForm();
                history("/inventory");
            });
        }
    };

  return (
    <div className='form-container'>
      <Form onSubmit={handleClick}>
        <FormGroup>
          <Label for="name">Tool Name:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.name || ''}
            type="text"
            name="name"
            id="name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="type">Type of Tool:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.type || ''}
            type="text"
            name="type"
            id="type"
          />
        </FormGroup>
        <FormGroup>
          <Label for="manufacturer">Manufacturer:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.manufacturer || ''}
            type="text"
            name="manufacturer"
            id="manufacturer"
          />
        </FormGroup>
        { id ? (
          // <><FormGroup className='hidden-div'>
          //   <Label for="toolId">Tool toolId:</Label>
          //   <Input
          //     onChange={(e) => handleChange(e)}
          //     value={formInput.toolId || ''}
          //     type="hidden"
          //     name="toolId"
          //     id="toolId" />
          // </FormGroup>
          <FormGroup>
              <Label for="location">Location:</Label>
              <Input
                onChange={(e) => handleChange(e)}
                value={formInput.location || ''}
                type="text"
                name="location"
                id="location" />
            </FormGroup>
        ): ( null )}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}


NewToolForm.propTypes = {
  inventory: PropTypes.shape({
    toolId: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    manufacturer: PropTypes.string,
    location: PropTypes.string,
    })
};


NewToolForm.defaultProps = {
  inventory: {},
};