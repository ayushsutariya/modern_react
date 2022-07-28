import logo from './logo.svg';
import './App.css';
import Sample from './Container/Sample/Sample';
import { faker } from '@faker-js/faker';
import Approval_card from "./Component/Approval_card"

function App() {
  return (
    <div className='App'>
      <div>
        <label htmlFor="name"> Your Name </label>
        <input type="text" id="name" />
        <button type="submit" style={{ backgroundColor: 'black', color: 'white', marginLeft: 5 }}> Submit </button>
      </div>
      <Approval_card>
        <Sample author="Sam" time="Today at 1:35pm" faker={faker.image.avatar()} />
      </Approval_card>
      <Approval_card>
        <Sample author="Alex" time="Yesterday at 4:30pm" faker={faker.image.avatar()} />
      </Approval_card>
    </div>
  );
}

export default App;
