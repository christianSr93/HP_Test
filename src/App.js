import './App.scss';
import ListCards from './Components/ListCards/listCards';
import Filter from './Components/Filters/filter'

function App() {
  return (
    <div className="App">
      <Filter></Filter>
      <ListCards/>
    </div>
  );
}

export default App;
