import './ApplicationAssignees.css';
import {useEffect, useState} from "react";
import {AppHttpClient} from "../../../../core/services/http-client.ts";

export default function ApplicationAssignees({appId}: { appId: string }) {
    const apiService = new AppHttpClient();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        apiService.getAppOverviewUsers(appId).then((response) => {
            setUsers(response?.data?.appUsers ?? []);
        })
    }, [appId]);

    const rows = users.map((userEmail: string) => {
        return (
            <tr>
                <td>ICON_IMG</td>
                <td>{userEmail}</td>
            </tr>
        )
    })

    return (
        <div className='application-details-wrap'>
            <table>
                <thead>
                <tr>
                    <th>Username</th>
                </tr>
                </thead>

                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
    )
}