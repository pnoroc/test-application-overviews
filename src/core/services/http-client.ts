import axios from 'axios';


export class AppHttpClient {
    baseUrl: string = '/api/v1/';


    getApplications(params: IApplicationRequestParams): Promise<unknown[]> {

        return axios.put(this.baseUrl + 'app-service/get-apps', params, {
            headers: {
                [HEADERS.key]: HEADERS.value
            }
        });
    }

    getAppOverviewUsers(appId: string): Promise<HttpResponse<IAppOverviewUsersHttpResponse>> {
        if (!appId) {
            throw new TypeError('Expected application id but got ' + appId);
        }

        return axios.get(this.baseUrl + `/app-service/get-app-overview-users/${appId}`, {
            headers: {
                [HEADERS.key]: HEADERS.value
            }
        })
    }
}

export interface HttpResponse<T> {
    data: T;
}

export interface IAppOverviewUsersHttpResponse {
    appUsers: string[];
}

export interface IApplicationRequestParams {
    pageNumber?: number;
    pageSize?: number;
}

const HEADERS = {
    key: 'ngrok-skip-browser-warning',
    value: '69420'
}