import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NewToolForm from '../components/NewToolForm';
import { getToolById } from '../data/toolData';

export default function Edit() {
  return (
    <div>
        <NewToolForm />
    </div>
  )
}
