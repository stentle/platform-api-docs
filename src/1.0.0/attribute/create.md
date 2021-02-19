# Create

Create Attribute endpoint

 ## URL
 ### Http Verb <Badge text="POST" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/attributes
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
| createAttribute | Attribute | Attribute object with data to be inserted | Yes | 

### Payload Example
```
{
    "attributeCode": "tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso",
    "departments": [
        "electronic"
    ],
    "id": "58c17b9a4c2acf0001e5d4a1",
    "italian": {
        "attribute": "Tempo di riscaldamento per raggiungere il 60% del flusso luminoso",
        "name": "Raggiunge istantaneamente la massima intensità luminosa"
    }
}
```

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
        "id": "58c17b9a4c2acf0001e5d4a1",
        "creationDate": 1613658447026,
        "updateDate": 1613658447026,
        "tenantId": null,
        "href": null,
        "attributeCode": "tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso",
        "departments": [
            "electronic"
        ],
        "key": "raggiunge-istantaneamente-la-massima-intensità-luminosa",
        "name": null,
        "active": true,
        "attributeLocaleName": null,
        "localeName": null,
        "english": null,
        "italian": {
            "name": "Raggiunge istantaneamente la massima intensità luminosa",
            "attribute": "Tempo di riscaldamento per raggiungere il 60% del flusso luminoso"
        },
        "russian": null,
        "french": null
    }
}
```
::: 

## CURL
CURL call example. Creating a category.
```
curl --location --request POST 'http://localhost:8080/rest/picnik-rest/attributes' \
--header 'X-Domain: landoffashion' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=Qnpva2xpc01PalRlb3ZFN1VCbUY1dz09OlA2ZWZVSGVTUVNpZ3dJN3RyVFdhSVE9PQ' \
--data-raw '{
    "attributeCode": "tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso",
    "departments": [
        "electronic"
    ],
    "id": "58c17b9a4c2acf0001e5d4a1",
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
        "id": "58c17b9a4c2acf0001e5d4a1",
        "creationDate": 1613658447026,
        "updateDate": 1613658447026,
        "tenantId": null,
        "href": null,
        "attributeCode": "tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso",
        "departments": [
            "electronic"
        ],
        "key": "raggiunge-istantaneamente-la-massima-intensità-luminosa",
        "name": null,
        "active": true,
        "attributeLocaleName": null,
        "localeName": null,
        "english": null,
        "italian": {
            "name": "Raggiunge istantaneamente la massima intensità luminosa",
            "attribute": "Tempo di riscaldamento per raggiungere il 60% del flusso luminoso"
        },
        "russian": null,
        "french": null
    }
}
```
::: 
## Errors
- Creation Error Type
```
{
    "type": "1",
    "title": "Invalid input",
    "status": 400,
    "detail": "Error during creation of attributes - key or code not defined",
    "trace": "..."
}
```
for more info on error - [Errors ](/1.0.0/errors.html) 
