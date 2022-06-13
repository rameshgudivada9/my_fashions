import './App.css';
import { FilterSort } from './components/FilterSort';
import { Navbar } from './components/Navbar/Navbar';
import { ProductPage } from './components/ProductPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
   <FilterSort/>
      <ProductPage />
    </div>
  );
}

export default App;
