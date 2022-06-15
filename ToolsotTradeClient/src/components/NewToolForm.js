import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Button, Form, FormGroup, Label, Input,
  } from "reactstrap";
import { addNewTool, updateTool } from '../data/toolData';
import PropTypes from "prop-types";


const initialState = {
    name: '',
    type: '',
    manufacturer: '',
};

export default function NewToolForm( obj = {} ) {
    const [formInput, setFormInput] = useState(initialState);
    const history = useNavigate();

    useEffect(() => {
        if (obj.id) {
            setFormInput({
                name: obj.name,
                type: obj.type,
                manufacturer: obj.manufacturer
            });
        }
    }, [obj]);

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
                history("/tools");
            });
        } else {
            addNewTool({ ...formInput }).then(() => {
                resetForm();
                history("/tools");
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
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}


NewToolForm.propTypes = {
    obj: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      type: PropTypes.string,
      manufacturer: PropTypes.string,
    }),
  };

  NewToolForm.defaultProps = {
    obj: null,
  };