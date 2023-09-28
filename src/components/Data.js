import React from "react";
import { openModalAction } from "../store/patientData/patientData";
import { useDispatch, useSelector } from "react-redux";
import DataModal from "./DataModal";


const Data = (props) => {
  const { patientData } = props;
  const openModal = useSelector(store => store.patienceData.modalOpen);

  const dispatch = useDispatch();
  //calculate patient age
  const patientDataAge = (new Date()).getFullYear() - patientData.year_of_birth;

  //calculate patient address
  const patientDataAddress = patientData.city + ', ' + patientData.country;

  //convertDateStringtoDate
  function convertToDate(dateString) {
    let [day, month, year] = dateString.split('/')
    return new Date(+year, +month - 1, +day)
  }
  //get recent dignosis
  const recentDignosis = function () {
    let sortData = patientData.diagnosis.slice();
    sortData = sortData.sort(function (a, b) {
      return convertToDate(b.diag_date) - convertToDate(a.diag_date);
    })
    return sortData[0] ? sortData[0].description : "Not yet diagnosed"
  };

  const patientDataObj = { ...patientData, age: patientDataAge, location: patientDataAddress, recent: recentDignosis() };


  function onClickHistory() {
    //open that data
    dispatch(openModalAction(patientDataObj));
  }

  return <>
    {openModal ? <DataModal patientData={patientDataObj} /> : <></>}
    <div className="dataObject">
      <span>{patientDataObj.patient_id}</span>
      <span>{patientDataObj.age}</span>
      <span>{patientDataObj.gender}</span>
      <span>{patientDataObj.location}</span>
      <span>{patientDataObj.recent}</span>
      <span><button onClick={onClickHistory}>View</button></span>
    </div>
  </>;
};

export default Data;
