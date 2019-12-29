/**
 * Salve mundi API
 * Salve mundi API documentation
 *
 * The version of the OpenAPI document: 2.4.1-beta3
 * Contact: ict@salvemundi.nl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from "rxjs";

import { map } from "rxjs/operators";
import IHttpClient from "../IHttpClient";
import { inject, injectable } from "inversify";
import { IAPIConfiguration } from "../IAPIConfiguration";
import { Headers } from "../Headers";
import HttpResponse from "../HttpResponse";

import { IncomeStatementDTO } from "../model/incomeStatementDTO";
import { SaveAuthorizationDTO } from "../model/saveAuthorizationDTO";

import { COLLECTION_FORMATS }  from "../variables";



@injectable()
export class AccountancyService {
    private basePath: string = 'http://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Activates the Accountancy api
     * Activates the accountancy api using a Authorization code from the rabo api
     * @param saveAuthorizationDTO 
     
     */
    public activateApi(saveAuthorizationDTO: SaveAuthorizationDTO, observe?: 'body', headers?: Headers): Observable<any>;
    public activateApi(saveAuthorizationDTO: SaveAuthorizationDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public activateApi(saveAuthorizationDTO: SaveAuthorizationDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (saveAuthorizationDTO === null || saveAuthorizationDTO === undefined){
            throw new Error('Required parameter saveAuthorizationDTO was null or undefined when calling activateApi.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/accountancy/activate`, saveAuthorizationDTO , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Gets the income statements
     * 
     
     */
    public getIncomeStatements(observe?: 'body', headers?: Headers): Observable<Array<IncomeStatementDTO>>;
    public getIncomeStatements(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<IncomeStatementDTO>>>;
    public getIncomeStatements(observe: any = 'body', headers: Headers = {}): Observable<any> {
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<Array<IncomeStatementDTO>>> = this.httpClient.get(`${this.basePath}/accountancy/incomeStatement`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <Array<IncomeStatementDTO>>(httpResponse.response))
               );
        }
        return response;
    }

}
