
import {useRouteMatch} from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomePage = () => {
    const {path} = useRouteMatch()
    return (
      <div className="max-w-4xl mx-auto container">
        <Navbar />
        <h1>Home Page</h1>
        <p>Current Path: {path}</p>
      </div>
    );
}

export default HomePage
