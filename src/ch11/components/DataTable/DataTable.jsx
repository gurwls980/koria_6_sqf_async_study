import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css"

function DataTable() {
    return ( 
        <div className="table-name-container">
            <DataTableHeader />
            <DataTableBody />
        </div>

     );
}

export default DataTable;