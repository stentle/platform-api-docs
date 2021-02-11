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
#### Payload
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| updatedAttribute | Attribute | Attribute object with data to be inserted | True | RequestBody |

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

#### Query String Parameters
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| attributeID | String | Attribute id of the record to be updated with the following data | True | RequestBody |

### URL Parameters Presentation
{{URI}}/rest/picnik-rest/attributes/{{ATTRIBUTE_ID}}


## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | ------ |
| data | ------ | ------ | Attribute | Object of type Attribute |
|| id | ------ | String | Unique Identifier of the Object Attribute |
|| creationDate | ------ | TODO |  |
|| updateDate | ------ | TODO |  |
|| tenantId | ------ | TODO |  |
|| href | ------ | TODO | |
|| attributeCode | ------ | TODO | |
|| departments | ------ | TODO |  |
|| key | ------ | TODO |  |
|| name | ------ | TODO |  |
|| active | ------ | TODO | |
|| attributeLocaleName | ------ | TODO  | |
|| localeName | ------ | TODO | |
|| english | ------ | Language Object | Object of type Language |
|| italian | ------ | Language Object | Object of type Language |
|| russian | ------ | Language Object | Object of type Language |
|| french | ------ | Language Object | Object of type Language |


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

### CURL
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
##### <Badge text="error" type="warning"/>
- ResourceUpdateException <Badge text="ResourceUpdateException" type="error"/> - Resource Update Exception
```
{
    "type": "0",
    "title": "Generic error",
    "status": 500,
    "detail": "Internal Server Error",
    "trace": ....
}
```


for more infor on error - [Errors ](errors.html) 
