# CustomerController <Badge text="CustomerController" type="middle"/>
--------------------------------------------------------
Constructor Detail 
```
public CustomerController()
```
## getCustomerById <Badge text="getCustomerById" /> 

Method Detail for getCustomerById 

```
Method
RequestMethod.GET
``` 


```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/customers/{{CUSTOMER_ID}}"
``` 

```
Headers
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>

| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the customer | True | PathVaribale |
| httpServletResponse | HttpServletResponse | parameter to check the response | True | Param |
| httpServletRequest | HttpServletRequest | parameter to check the request data | True | Param |

##### <Badge text="Returns" type="warning"/>
```
{
    "data": {
        "id": "5d83422badbe1d0001bb1e04",
        "creationDate": 1568883243080,
        "updateDate": 1600346930315,
        "tenantId": null,
        "href": null,
        "givenName": "Giacomo",
        "familyName": "Russo",
        "nickname": null,
        "type": null,
        "securityRole": "ROLE_USER",
        "badges": null,
        "leaderData": null,
        "tagList": null,
        "birthDate": 973645200000,
        "primaryEmail": "giacomo.russo@stentle.com",
        "gender": null,
        "country": null,
        "telephone": "329111111",
        "password": "$2a$10$A1ATJ4iEh.nEXc4rHFR5S.4GBgXnIZ6m76ZHTbyyNwEMxGYGS5NFG",
        "lastLogin": 1600346930315,
        "loginCounter": 7392,
        "profilePhoto": null,
        "followings": 0,
        "followers": 0,
        "numberOfComments": 0,
        "numberOfBadges": 0,
        "loginProviders": [
            {
                "providerName": "default"
            }
        ],
        "authorityList": [],
        "userLanguage": "it",
        "version": 7463,
        "profession": null,
        "company": null,
        "iban": null,
        "taxId": "rssgcm87s07h793a",
        "shippingAddressList": [
            {
                "creationDate": 1594215612793,
                "updateDate": 1594215612793,
                "city": "Roma",
                "country": "IT",
                "state": null,
                "streetAddress": "Via Roma",
                "streetNumber": "6",
                "postalCode": null,
                "description": null,
                "givenName": "Mario",
                "familyName": "Rossi",
                "id": 4,
                "telephone": null,
                "co": null,
                "passportId": null,
                "defaultShippingAddress": false,
                "saveInCustomer": false
            },
            {
                "creationDate": 1594383376086,
                "updateDate": 1594383376086,
                "city": "Ro",
                "country": "IT",
                "state": null,
                "streetAddress": "Via Roma",
                "streetNumber": "6",
                "postalCode": null,
                "description": null,
                "givenName": "Mario",
                "familyName": "Rossi",
                "id": 6,
                "telephone": null,
                "co": null,
                "passportId": null,
                "defaultShippingAddress": true,
                "saveInCustomer": false
            }
        ],
        "billingAddressList": [
            {
                "creationDate": 1584369218751,
                "updateDate": 1595410452267,
                "city": "Ro",
                "country": "ITALIA",
                "state": "MI",
                "streetAddress": "Via Roma",
                "streetNumber": "6",
                "postalCode": "02100",
                "description": null,
                "id": 1,
                "givenName": "Giacomo",
                "familyName": "Russo",
                "telephone": null,
                "legalName": null,
                "taxId": "rssgcm87s07h793a",
                "defaultBillingAddress": false,
                "saveInCustomer": false
            },
            {
                "creationDate": 1594211411130,
                "updateDate": 1594211411130,
                "city": "Roma",
                "country": "IT",
                "state": null,
                "streetAddress": "Via Roma",
                "streetNumber": "6",
                "postalCode": null,
                "description": null,
                "id": 2,
                "givenName": "Mario",
                "familyName": "Rossi",
                "telephone": null,
                "legalName": null,
                "taxId": "IT01950860039",
                "defaultBillingAddress": false,
                "saveInCustomer": false
            },
            {
                "creationDate": 1594215605053,
                "updateDate": 1594215605053,
                "city": "Roma",
                "country": "IT",
                "state": null,
                "streetAddress": "Via Roma",
                "streetNumber": "6",
                "postalCode": null,
                "description": null,
                "id": 3,
                "givenName": "Mario",
                "familyName": "Rossi",
                "telephone": null,
                "legalName": null,
                "taxId": "IT01950860039",
                "defaultBillingAddress": false,
                "saveInCustomer": false
            },
            {
                "creationDate": 1594388369688,
                "updateDate": 1594388369688,
                "city": "Ro",
                "country": "IT",
                "state": null,
                "streetAddress": "Via Roma",
                "streetNumber": "6",
                "postalCode": null,
                "description": null,
                "id": 7,
                "givenName": "Mario",
                "familyName": "Rossi",
                "telephone": null,
                "legalName": null,
                "taxId": "IT01950860039",
                "defaultBillingAddress": false,
                "saveInCustomer": false
            },
            {
                "creationDate": 1594631964588,
                "updateDate": 1594631964588,
                "city": "Ro",
                "country": "IT",
                "state": null,
                "streetAddress": "Via Roma",
                "streetNumber": "6",
                "postalCode": null,
                "description": null,
                "id": 8,
                "givenName": "Mario",
                "familyName": "Rossi",
                "telephone": null,
                "legalName": null,
                "taxId": "IT01950860039",
                "defaultBillingAddress": false,
                "saveInCustomer": false
            },
            {
                "creationDate": 1594632379610,
                "updateDate": 1594632386874,
                "city": "Ro",
                "country": "IT",
                "state": null,
                "streetAddress": "Via Roma",
                "streetNumber": "6",
                "postalCode": null,
                "description": null,
                "id": 9,
                "givenName": "Mario",
                "familyName": "Rossi",
                "telephone": null,
                "legalName": null,
                "taxId": "IT01950860039",
                "defaultBillingAddress": false,
                "saveInCustomer": false
            }
        ],
        "defaultBillingAddress": 0,
        "defaultShippingAddress": 0,
        "paypalBillingAgreement": null,
        "websiteOfSubscription": null,
        "productSavedList": null,
        "productsOnSale": null,
        "sales": null,
        "numberOfProductsPublished": 0,
        "numberOfProductsSaved": 4,
        "numberOfProductsLoved": 0,
        "numberOfProductsShared": 0,
        "numberOfPurchaseOrders": 29,
        "recency": 0.0,
        "frequency": 0.0,
        "monetary": 0.0,
        "localbusinessId": null,
        "checkinFrequency": 0.0,
        "acceptedTerms": {
            "terms": {
                "thirdTerms": false,
                "operatorTerms": false,
                "baseTerms": false
            }
        },
        "privacyTicks": [],
        "noNicknameId": "Utente #318",
        "avatar": null,
        "associateType": null,
        "lastCheckIn": null,
        "errors": null
    }
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html)


## saveProductForCustomer

