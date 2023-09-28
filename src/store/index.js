import { configureStore } from "@reduxjs/toolkit";
import { PatienceDataSlice } from "./patientData/patientData";

var store = configureStore({
  reducer: {
    patienceData: PatienceDataSlice.reducer,
  },
});

export { store };
