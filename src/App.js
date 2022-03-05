import './App.css';
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import Item from './Components/Item';
import Header from './Components/Header';
import { Link } from 'react-router-dom';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  const [edit, setEdit] = useState(false);
  const [isEdit, setIsEdit] = useState([])

  // const [inputFirstName, setInputFirstName] = useState("");
  // const [inputLastName, setInputLastName] = useState("");

// FETCH API
  function getData() {
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
  }

// Run once when app starts
    useEffect(() => {
      getLocalItems()
    }, []);
  
// USE Effect
    useEffect(() => {
      saveIntoLocal();
    }, [items]);

  
// Save to local
  function saveIntoLocal() {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify([]));
    } else {
      localStorage.setItem("items", JSON.stringify(items));
    }
  };
  function getLocalItems() {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify([]));
    } else {
      let userLocal = JSON.parse(localStorage.getItem('items'));
      setItems(userLocal)
    }
  };
  
// Handle pagination click
  function handlePageClick(data) {
    setPageNum(data.selected);
  }

// Handle Update button function
  function handleUpdate() {
    setEdit(false);
    saveIntoLocal();
  }

  let nextNum = pageNum * 10;

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>
  //     <Header />
  //     <h4 className='loader'>Loading...</h4>
  //     </div>;
  // } else {
    return (
      <div>
        <Header />
        <div className='editor-toolbar'>
          <Link to="/new"><button>Add new</button></Link>
          <button onClick={getData}>Reset data</button>
          <button onClick={() => setEdit(!edit)} className={edit? "btn-edit" : ""}>Edit status</button>
          <button onClick={handleUpdate} className='btn-update'>Update</button>
        </div>
        {items.filter((item, i) => i >= nextNum & i < nextNum + 10).map(item => (
          <Item 
            key={item.id}
            firstName={item.first_name}
            lastName={item.last_name}
            created={item.created_at}
            status={item.status}
            item={item}
            list={items}
            setItems={setItems}
            edit={edit}
            setEdit={setEdit}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
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
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
            />
        </div>
        </div>
    )}


export default App;
