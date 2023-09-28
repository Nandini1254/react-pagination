import React from "react";
import { useSelector } from "react-redux";
import Data from "./Data";

const DataList = () => {
  const storeDataList = useSelector((store) => store.patienceData.currentPageDataList);

  return (
    <div className="dataList">
      {storeDataList.map((data, index) => {
        return <Data patientData={data} key={index} />;
      })}
    </div>
  );
};

export default DataList;
