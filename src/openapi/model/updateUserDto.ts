/**
 * Salve mundi API
 * Salve mundi API documentation
 *
 * The version of the OpenAPI document: 2.4.1-beta5
 * Contact: ict@salvemundi.nl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface UpdateUserDto { 
    id: number;
    pcn: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    birthday: string;
    address: string;
    postalcode: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
}
