import React from "react"
import { useDispatch }from "react-redux";
import { closeModalAction } from "../store/patientData/patientData";
import DataModalDignosisInfo from "./DataModalDiagnosisInfo";

const DataModal = (props) => {
  const { patientData } = props;
  
  const dispatch = useDispatch();
  function closeModal() {
    dispatch(closeModalAction());
  }

  return (
    <div>
      <div className="modal-overlay">
        <div className="modal">
          <div className="information">
            <div className="modal-header">
              Patient  {patientData.patient_id} Diagnosis History
            </div>
            <div className="modal-data-info">
              {`${patientData.age} | ${patientData.gender} | ${patientData.location}`}
            </div>
            <div className="modal-dignosis-info">
              <DataModalDignosisInfo diagnosisList= {patientData.diagnosis} />
            </div>
          </div>
          <div className="modal-footer"><button onClick={closeModal}>close</button></div>
        </div>
      </div>
    </div>
  )
}

export default DataModal
