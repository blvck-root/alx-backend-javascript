// Import types from interface.ts
import { RowID, RowElement } from "./interface.ts";

// Function declarations for CRUD operations
export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;
