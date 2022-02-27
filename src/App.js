import './App.css';
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    fetch("https://assessment-users-backend.herokuapp.com/users.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const handlePageClick = (data) => {
    setPageNum(data.selected);
    console.log(data);
  }

  let nextNum = pageNum * 10;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {items.filter((item, i) => i >= nextNum & i < nextNum + 10).map(item => (
          <div className='profile' key={item.id}>
            <h3>{item.first_name} {item.last_name}</h3>
            <p>Created at: {item.created_at}</p>
          </div>
        ))}
        <div className='pagination'>
          <ReactPaginate 
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageCount={items.length / 10}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'active'}
          />
       </div>
      </div>
    );
  }

}

export default App;
