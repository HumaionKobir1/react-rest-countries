
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data));
//   }, [])


//   return(
//     <div className=''>
//       <h1>Visiting Every country of the world!</h1>
//       <h3>Avilable Countires: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h5>Country name: {props.name}</h5>
//       <p>Population: {props.population}</p>
//     </div>
//   )
// }



export default App;
