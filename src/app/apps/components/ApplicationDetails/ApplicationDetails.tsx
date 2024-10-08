import './ApplicationDetails.css';

export default function ApplicationDetails({appId}: { appId: string }) {
    return (
        <div className='application-details-wrap'>
            <ul style={{listStyle: 'none'}}>
                <li>
                    App name: zoom
                </li>
                <li>
                    Category: zoom
                </li>
                <li>
                    Users: zoom
                </li>
                <li>
                    Connector: zoom
                </li>
                <li>
                    Last classification: zoom
                </li>
            </ul>
        </div>
    )
}