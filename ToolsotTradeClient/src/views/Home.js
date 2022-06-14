import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const history = useNavigate();

    const handleClick = () => {
      history('/tools');
    };

  return (
      <div className="home-page">
        <h1 className="text-center">Welcome to Tools of the Trade </h1>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            className="home-btn btn-success btn-lg"
            onClick={handleClick}
          >
            Go to Tools
          </button>
        </div>
      </div>
  )
}
