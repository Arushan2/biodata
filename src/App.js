import logo from './logo.svg';
import './App.css';
function Heading(){
  return(<h1 id="Heading">Bio data</h1>)
}
function PersonalDetails(){
  return(
    <div id="Personal">
      <h3>Personal Details</h3>
      <p>Name:- Sujitharan Arushan</p>
      <p>Age:- 21</p>
      <p>Address:- Navaly east Manipay</p>
    </div>
  )
}
function App() {
  return(
    <div>
    <Heading />
    <PersonalDetails />
    </div>
  )
}

export default App;
