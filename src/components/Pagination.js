import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginatorBar from "./PaginatorBar";

const Pagination = () => {
  const totalData = useSelector(store => store.patienceData.dataList).length;
  const perPageData = useSelector((store) => store.patienceData.perPageData);
  const firstPage = useSelector((store) => store.patienceData.firstPage)
  const numberOfbuttons = 5;
  const paginationArray = Array.from(Array(Math.ceil(totalData / perPageData)), (_, index) => index);

  //if currentPage = 6 then first button index = 2 (currentPage - 5)
  return <div className="pagination">
    <div className="paginationBar">
      <PaginatorBar paginationArray={paginationArray.slice(firstPage, firstPage + numberOfbuttons)} totalPages={Math.ceil(totalData / perPageData)} />
    </div>
    <div className="totalResult">{totalData} Results</div>
  </div>;
};

export default Pagination;
