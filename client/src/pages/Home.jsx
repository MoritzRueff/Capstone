import '../App.css'
import SearchForDogs from '../components/SearchForDog'
import DogCard from './DogCard';
import { NavLink } from 'react-router-dom';
export default function Home() {
    return (
      <div>
        <NavLink to="/Adddog" >
      <button>Add Dog</button>
      </NavLink>
      <NavLink to="/ShelterRegister" >
      <button>Register as shelter / Login</button>
      </NavLink>
        <SearchForDogs /> 
        <DogCard />
      </div>
    );
  }