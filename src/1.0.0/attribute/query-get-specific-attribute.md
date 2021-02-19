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

## URL Parameters
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | ------ |
| attribute_id | String | Id of the attribute to be display | Yes |

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | 
| data ||Object| Response content|
|| id | String | Unique identification attribute id | 
|| creationDate | Int | Creation Date| 
|| updateDate | Int | Update Date | 
|| tenantId | String | Tenant Id | 
|| href | String | Url of attribute | 
|| attributeCode | String | Name of attribute code |
|| departments | String | Department | 
|| key | String | Todo | 
|| name | String | Todo | 
|| active | Boolean | Attribute is avalable | 
|| attributeLocaleName | String | Todo | 
|| localeName | String | Todo |
|| english | Object | Description in EN for name & attribute  | 
|| italian | Object | Description in IT for name & attribute  | 
|| russian | Object | Description in RU for name & attribute  | 
|| french  | Object | Description in FR for name & attribute  | 

### Response Example
::: details Example
```json
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
:::

## CURL
CURL call example. Creating a category.
```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/attributes/5f886b4a09608a000122720e' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Content-Type: application/json'
``` 


### CURL Response Example
::: details Example
```json
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
:::
## Errors

for more info on error - [Errors ](/1.0.0/errors.html) 
