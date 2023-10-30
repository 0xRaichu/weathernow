import './App.css';
import Search from './components/search/Search';

function App() {

  // The "handleOnSearchChange" is a arrow function
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
      {/* When you render the Search component, you pass the handleOnSearchChange function as a prop using the onSearchChange attribute. This allows the Search component to call the handleOnSearchChange function when changes occur in the search input. */}
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
