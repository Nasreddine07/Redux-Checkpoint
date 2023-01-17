import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './Components/AddTask';
import Filtre from './Components/Filtre';
import TodoLists from './Components/ListTask';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoLists/>
      <hr/>
      <Filtre/>
    </div>
  );
}

export default App;
