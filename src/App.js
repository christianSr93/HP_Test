import './App.scss';
import ListCards from './Components/ListCards/listCards';
import Filter from './Components/Filters/filter'
import ActionButtons from './Components/ActionButtons/actionButtons';

function App() {
  return (
    <div className="App">
      <ActionButtons></ActionButtons>
      <Filter></Filter>
      <ListCards/>
    </div>
  );
}

export default App;
