import { createSlice } from "@reduxjs/toolkit";

function calculateIndexs(currentPage, perPageData) {
  const startIndex = currentPage * perPageData;
  const endIndex = startIndex + perPageData;
  return { startIndex, endIndex }
}

export const PatienceDataSlice = createSlice({
  name: "patientDataSlice",
  initialState: {
    dataList: [],
    currentPage: 0,
    firstPage: 0,
    lastPage: 5,  // lastpage will be depend on NumberofButtons
    currentPageDataList: [],
    totalPage: 1,
    perPageData: 10,
    NumberofButtons: 5,
    modalOpen: false
  },
  reducers: {
    addDataAction: (currentSlice, data) => {
      const currentPage = currentSlice.currentPage;

      const { startIndex, endIndex } = calculateIndexs(currentPage, currentSlice.perPageData)

      currentSlice.dataList = data.payload;
      currentSlice.currentPageDataList = currentSlice.dataList.slice(startIndex, endIndex)
    },

    setCurrentPageAction: (currentSlice, data) => {
      console.log("Ca")
      const currentPage = data.payload;
      const { startIndex, endIndex } = calculateIndexs(currentPage, currentSlice.perPageData)

      currentSlice.currentPage = currentPage;
      currentSlice.currentPageDataList = currentSlice.dataList.slice(startIndex, endIndex)
    },

    setLastPageAction: (currentSlice, data) => {
      const perPageData = currentSlice.perPageData;

      //current page can change  till last page
      currentSlice.currentPage = currentSlice.currentPage + 1;

      //if it is end of pagination bar then update the firstpage and last page
      if (currentSlice.lastPage === currentSlice.currentPage) {
        currentSlice.lastPage += 1;
        currentSlice.firstPage += 1;
      }

      const { startIndex, endIndex } = calculateIndexs(currentSlice.currentPage, perPageData)
      currentSlice.currentPageDataList = currentSlice.dataList.slice(startIndex, endIndex)
    },

    setPrevPageAction: (currentSlice, data) => {
      const perPageData = currentSlice.perPageData;

      console.log(currentSlice.currentPage, currentSlice.firstPage, currentSlice.lastPage)

      //if currentPage is not firstpage of pages
      currentSlice.currentPage -= 1;

      //if currentpages is not firstpage as lastpage changes then when prev button click it should update firstpage
      if (currentSlice.currentPage !== 0 && currentSlice.currentPage === currentSlice.firstPage) {
        currentSlice.firstPage -= 1;
        currentSlice.lastPage -= 1;
      }

      const { startIndex, endIndex } = calculateIndexs(currentSlice.currentPage, perPageData)
      currentSlice.currentPageDataList = currentSlice.dataList.slice(startIndex, endIndex)
    },

    openModalAction: (currentSlice, data) => {
      currentSlice.modalOpen = true;
    },

    closeModalAction: (currentSlice, data) => {
      currentSlice.modalOpen = false;
    }

  },
});

export const { addDataAction,
  setCurrentPageAction,
  setLastPageAction,
  setPrevPageAction,
  openModalAction,
  closeModalAction
} = PatienceDataSlice.actions;
