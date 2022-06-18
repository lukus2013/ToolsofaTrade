import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {
    Button, Form, FormGroup, Label, Input,
  } from "reactstrap";
import { addNewTool, getToolById, updateTool } from '../data/toolData';
import PropTypes from "prop-types";
import { updateToolLocation } from '../data/inventoryData';


const initialState = {
    toolId: '',
    name: '',
    type: '',
    manufacturer: '',
    location: '',
};

export default function NewToolForm({ inventory }) {
    const [formInput, setFormInput] = useState(initialState);
    const history = useNavigate();
    const {id} = useParams();

    useEffect(() => {
      if (id) {
          getToolById(id).then(setFormInput);
          console.warn(formInput);
        }
    }, []);

    const resetForm = () => {
        setFormInput(initialState);
    };

    const handleChange = (e) => {
        setFormInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (obj.id) {
            updateTool(obj.id, formInput).then(() => {
                history("/inventory");
            });
            updateToolLocation(obj.id, obj).then();
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
      <FormGroup className='hidden-div'>
          <Label for="toolId">Tool toolId:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.toolId || ''}
            type="hidden"
            name="toolId"
            id="toolId"
          />
        </FormGroup>
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
            <FormGroup>
            <Label for="location">Location:</Label>
            <Input
              onChange={(e) => handleChange(e)}
              value={formInput.location || ''}
              type="text"
              name="location"
              id="location"
            />
          </FormGroup>
        ): ( null )}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}


NewToolForm.propTypes = {
  inventory: PropTypes.shape(PropTypes.obj)
};


NewToolForm.defaultProps = {
  inventory: null,
};