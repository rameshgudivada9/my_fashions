import './App.css';
import { FilterSort } from './components/FilterSort';
import { ProductPage } from './components/ProductPage';

function App() {
  return (
    <div className="App">
   <FilterSort/>
      <ProductPage />
    </div>
  );
}

export default App;
