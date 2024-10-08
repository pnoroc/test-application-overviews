import AppsTable from "./apps/AppsTable.tsx";
import ApplicationSideNav from "./sidenav/ApplicationSideNav.tsx";
import {useState} from "react";
import ApplicationDetails from "./apps/components/ApplicationDetails/ApplicationDetails.tsx";
import ApplicationAssignees from "./apps/components/ApplicationAssignees/ApplicationAssignees.tsx";

export default function Main() {
    const [isSideNavShown, setSideNavShown] = useState(false);
    const [selectedAppInfo, setSelectedAppInfo] = useState('');

    const showAppInfo = (appId: string) => {
        setSelectedAppInfo(appId);
        setSideNavShown(true);
    }

    const onSideNavClosed = () => {
        setSideNavShown(false);
    }

    return <>
        {/*AppHeader*/}
        <AppsTable onAppRowClick={showAppInfo}/>
        <ApplicationSideNav isActivated={isSideNavShown} onSideNavClosed={onSideNavClosed}>
            <ApplicationDetails appId={selectedAppInfo}/>
            <br/>
            <ApplicationAssignees appId={selectedAppInfo}/>
        </ApplicationSideNav>
    </>
}