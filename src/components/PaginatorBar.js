import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPageAction, setLastPageAction, setPrevPageAction } from '../store/patientData/patientData';

const PaginatorBar = (props) => {
    const currentPage = useSelector((store) => store.patienceData.currentPage);

    const dispatch = useDispatch();

    function setLastPage() {
        dispatch(setLastPageAction())
    }

    function setPrevPage() {
        dispatch(setPrevPageAction())
    }

    function selectPage(index) {
        dispatch(setCurrentPageAction(index))
    }
    return (
        <>
            {currentPage !== 0 && <button onClick={setPrevPage}>&lt;</button>}
            {props.paginationArray.map((data, index) => {
                return <button onClick={() => selectPage(data)} key={index} className={data === currentPage ? "active" : ""}>
                    {data + 1}
                </button>
            })}
            {currentPage >= 0 && currentPage !== (props.totalPages - 1) && <button onClick={setLastPage}>&gt;</button>}
        </>
    )
}

export default PaginatorBar
