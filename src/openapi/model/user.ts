/**
 * Salve mundi API
 * Salve mundi API documentation
 *
 * The version of the OpenAPI document: 1.0
 * Contact: ict@salvemundi.nl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ComponentsSchemasMembership } from './componentsSchemasMembership';
import { Scope } from './scope';


export interface User { 
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    address: string;
    postalcode: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
    registeredSince: string;
    pcn: string;
    activated: boolean;
    memberships: ComponentsSchemasMembership;
    scopes: Array<Scope>;
}
