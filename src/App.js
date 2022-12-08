import './App.scss';
import ListCards from './Components/ListCards/listCards';
import Filter from './Components/Filters/filter'
import ActionButtons from './Components/ActionButtons/actionButtons';
import ActionButtonClass from './Components/ActionButtons/actionButtonClass';

function App() {
  return (
    <div className="App">
      {/* <ActionButtons></ActionButtons> */}
      <ActionButtonClass></ActionButtonClass>
      <Filter></Filter>
      <ListCards/>
    </div>
  );
}

export default App;
