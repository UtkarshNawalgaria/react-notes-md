import React from 'react'
import {useRouteMatch} from 'react-router-dom'

const HomePage = () => {
    const {path} = useRouteMatch()
    return (
      <div className="grid h-screen place-content-center">
        <h1>Home Page</h1>
        <p>Current Path: {path}</p>
      </div>
    );
}

export default HomePage
