import {useEffect, useState} from "react";
import {AppHttpClient} from "../services/http-client.ts";

export default function useApplications(pageSize: number = 25): any[] {
    const service = new AppHttpClient();
    const [apps, setApps] = useState([]);

    useEffect(() => {

        service.getApplications({pageNumber: 1, pageSize: 25})
            .then((value: any) => {
                setApps(value.data?.appRows ?? []);
            });
    }, [pageSize]);

    return apps;
}