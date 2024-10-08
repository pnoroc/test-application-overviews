import ApplicationSourceIcon from "./ApplicationSourceIcon.tsx";

export default function AppsTableRow({app, onRowClick}: { app: any; onRowClick: (id: string) => void }) {
    const handleRowClick = (event: MouseEvent) => {
        event.stopPropagation();
        onRowClick(app.appId);
    }


    return (
        <>
            <tr onClick={(e) => handleRowClick(e as any)}>
                <td>{app.appName}</td>
                <td>{app.category}</td>
                <td><ApplicationSourceIcon sources={app.appSources}/></td>
            </tr>
        </>
    )
}