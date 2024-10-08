import useApplications from "../../core/hooks/applications.tsx";
import AppsTableRow from "./components/AppsTableRow.tsx";
import {useState} from "react";

export default function AppsTable({onAppRowClick}: any) {
    const [pageSize, setPageSize] = useState(25);
    const apps = useApplications(pageSize);
    const rows = apps.map((app) => {
        return (
            <AppsTableRow
                key={app.appId}
                app={app}
                onRowClick={onAppRowClick} // <- refactor
            />
        )
    })


    return (
        <>
            <table>
                <thead>
                <th>Name</th>
                <th>Category</th>
                <th>Connector</th>
                </thead>

                <tbody>
                {rows}
                </tbody>
            </table>


            <div style={{marginTop: '25px'}}>
                <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>
            </div>
        </>
    )
}