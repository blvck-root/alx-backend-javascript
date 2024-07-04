// Import types from interface.ts
import { RowID, RowElement } from "./interface.ts";

// Import CRUD functions from crud.js
import * as CRUD from "./crud.js";

// Create a row element
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and get the generated ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age property
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row in the database (simulated logging)
CRUD.updateRow(newRowID, updatedRow);

// Delete the row by ID (simulated logging)
CRUD.deleteRow(newRowID);
