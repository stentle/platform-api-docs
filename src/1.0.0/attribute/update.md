# Update

Update Attribute endpoint

 ## URL
 ### Http Verb <Badge text="PUT" vertical="middle"/>

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
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | 
| updatedAttribute | Attribute | Attribute object with data to be inserted | Yes | 

### Payload Example
```
{
    "attributeCode": "tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso",
    "departments": [
        "electronic"
    ],
    "id": "58c17b9a4c2acf0001e5d4c7",
    "italian": {
        "attribute": "Tempo di riscaldamento per raggiungere il 60% del flusso luminoso",
        "name": "Raggiunge istantaneamente la massima intensità luminosa"
    }
}
```

## URL Parameters
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | 
| attributeID | String | Attribute id of the record to be updated with the following data | Yes |

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
|| key | String | Key of Attribute | 
|| name | String | Name of Attribute | 
|| active | Boolean | Attribute is avalable | 
|| attributeLocaleName | String | Attriubte Local Name | 
|| localeName | String | Attribute Local Name |
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
curl --location --request PUT 'http://localhost:8080/rest/picnik-rest/attributes/5f886b4a09608a000122720e' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=a0pvREtPSS81MVkvWml1QmpQTXRpdz09Om9ZOTk0ekRlSXMvUDNEQUhBdjB1RWc9PQ' \
--data-raw '{
    "attributeCode": "tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso",
    "departments": [
        "electronic"
    ],
    "id": "58c17b9a4c2acf0001e5d4c7",
    "italian": {
        "attribute": "Tempo di riscaldamento per raggiungere il 60% del flusso luminoso",
        "name": "Raggiunge istantaneamente la massima intensità luminosa"
    }
}'
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
- Resource Update Exception
```
{
    "type": "0",
    "title": "Generic error",
    "status": 500,
    "detail": "Internal Server Error",
    "trace": ....
}
```
for more info on error - [Errors ](/1.0.0/errors.html) 
