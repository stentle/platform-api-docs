#  Search Attributes

Search Attribute endpoint

 ## URL
 ### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/attributes?limit={{LIMIT_PER_PAGE}}&pageNumber={{PAGE_NUMBER}}
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
| None | ------ | ------ | ------ | ------ |

### Payload Example
```
{
 None
}
```

#### Query String Parameters
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| pageNumber | int | pagination parameter | True | RequestParam |
| pageSize | int | pagination parameter | False | RequestParam |
| attributeCode | String | code of the attribute to search | False | RequestParam|
| department | String | department code | False | RequestParam|

### URL Parameters Presentation
{{URI}}/rest/picnik-rest/attributes?limit={{LIMIT_PER_PAGE}}&pageNumber={{PAGE_NUMBER}}


## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | ------ |
| data | ------ | TODO | ------ | ------ |
|| totalItems | TODO | ------ | ------ |
|| startIndex | TODO | ------ | ------ |
|| itemsPerPage | TODO | ------ | ------ |
|| currentItemCount | TODO | ------ | ------ |
|| items | TODO | ------ | ------ |


### Response Example
```
{
    "data": {
        "totalItems": 68,
        "startIndex": 1,
        "itemsPerPage": 10,
        "currentItemCount": 10,
        "items": [
            {
                "id": "5f886b4a09608a000122720e",
                "attributeCode": "tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso",
                "attributeKey": "US",
                "attributeLocaleName": "Tempo di riscaldamento per raggiungere il 60% del flusso luminoso",
                "localeName": "Raggiunge istantaneamente la massima intensità luminosa",
                "names": {
                    "en": {
                        "locale": null,
                        "value": "US"
                    },
                    "it": {
                        "locale": "Tempo di riscaldamento per raggiungere il 60% del flusso luminoso",
                        "value": "Raggiunge istantaneamente la massima intensità luminosa"
                    }
                },
                "department": [
                    "electronic"
                ],
                "departmentFeeds": [
                    null
                ]
            },
            .......................
        ]
    }
}
```

### CURL
CURL call example.

```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/attributes?limit=10&pageNumber=1' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=V2Q2QURleWsxQWhjYWZhNEx0QU1Sdz09OmNaa1hwc3ZJZ24yNjhBYlhpemp3SWc9PQ'
``` 


### CURL Response Example
```
{
    TODO
}
```
##### <Badge text="error" type="warning"/>
- None
```


for more infor on error - [Errors ](errors.html) 
-----------------------------------------------------------------------------------------------------------------------
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
#### Payload
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

### CURL
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
##### <Badge text="error" type="warning"/>
- None


for more infor on error - [Errors ](errors.html) 
