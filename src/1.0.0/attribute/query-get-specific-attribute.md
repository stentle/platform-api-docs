# Get Specific Attribute

Get Attribute By ID endpoint

## URL
### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/attributes/{{ATTRIBUTE_ID}}
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```
## Payload
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| NONE | ------ | ------ | ------ | ------ |

### Payload Example
```
{
 NONE
}
```

#### Query String Parameters
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| attribute_id | String |id of the atribute to be updated | True | PathVariable |

### URL Parameters Presentation
{{URI}}/rest/picnik-rest/attributes/5f886b4a09608a000122720e


## Response
| Level1 | Level 2| Type | Description ||
| ------ | ------ | ------ | ------ | ------ |
| data | ------ | TODO | ------ | ------ |
|| id | TODO | ------ | ------ |
|| creationDate | TODO | ------ | ------ |
|| tenantId | TODO | ------ | ------ |
|| href | TODO | ------ | ------ |
|| attributeCode | TODO | ------ | ------ |
|| departments | TODO | ------ | ------ |
|| key | TODO | ------ | ------ |
|| name | TODO | ------ | ------ |
|| active | TODO | ------ | ------ |
|| attributeLocaleName | TODO | ------ | ------ |
|| localeName | TODO | ------ | ------ |
|| localeName | TODO | ------ | ------ |
|| localeName | TODO | ------ | ------ |
|| localeName | TODO | ------ | ------ |
|| localeName | TODO | ------ | ------ |
|| localeName | TODO | ------ | ------ |
|| localeName | TODO | ------ | ------ |
|| english | languageObject | ------ | ------ |
|| ...... | languageObject | ------ | ------ |


### Response Example
```
{
    "data": {
        "id": "5f886b4a09608a000122720e",
        "creationDate": 1602775882146,
        "updateDate": 1602775882102,
        "tenantId": null,
        "href": null,
        "attributeCode": "tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso",
        "departments": [
            "electronic"
        ],
        "key": "US",
        "name": null,
        "active": true,
        "attributeLocaleName": null,
        "localeName": null,
        "english": {
            "name": "US",
            "attribute": null
        },
        "italian": {
            "name": "Raggiunge istantaneamente la massima intensità luminosa",
            "attribute": "Tempo di riscaldamento per raggiungere il 60% del flusso luminoso"
        },
        "russian": {
            "name": null,
            "attribute": null
        },
        "french": {
            "name": null,
            "attribute": null
        }
    }
}
```

## CURL
CURL call example. Creating a category.
```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/attributes/5f886b4a09608a000122720e' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Content-Type: application/json'
``` 


### CURL Response Example
```
{
    "data": {
        "id": "5f886b4a09608a000122720e",
        "creationDate": 1602775882146,
        "updateDate": 1602775882102,
        "tenantId": null,
        "href": null,
        "attributeCode": "tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso",
        "departments": [
            "electronic"
        ],
        "key": "US",
        "name": null,
        "active": true,
        "attributeLocaleName": null,
        "localeName": null,
        "english": {
            "name": "US",
            "attribute": null
        },
        "italian": {
            "name": "Raggiunge istantaneamente la massima intensità luminosa",
            "attribute": "Tempo di riscaldamento per raggiungere il 60% del flusso luminoso"
        },
        "russian": {
            "name": null,
            "attribute": null
        },
        "french": {
            "name": null,
            "attribute": null
        }
    }
}
```
## Errors

for more info on error - [Errors ](/1.0.0/errors.html) 
