import "./style.css";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";

function DataTable() {
    return ( 
        <div className="table-main-container">
            <DataTableHeader />
            <DataTableBody />
        </div>

     );
}

export default DataTable;