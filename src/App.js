import { useEffect, useState } from 'react';
import './App.css';
import DataList from './components/DataList';


import Header from './components/Header';
import Pagination from './components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { addDataAction } from './store/patientData/patientData';
const ApiUrl = 'https://raw-tutorial.s3.eu-west-1.amazonaws.com/patients.json';

function App() {
  const dispatch = useDispatch();

  //set API data to store data list
  const fetchUserData = () => {
    fetch(ApiUrl, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((body) => {
        console.log(body)
        dispatch(addDataAction(body));
      });
  };

  useEffect(() => {
    let getData = setTimeout(() => {
      fetchUserData();
    }, 0);
    return () => clearTimeout(getData);
  }, []);

  return (
    <>
      <div className='App'>
        <Header />
        <DataList />
        <Pagination />
      </div>
    </>
  );
}

export default App;
