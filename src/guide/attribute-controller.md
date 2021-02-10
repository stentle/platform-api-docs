## searchAttributes <Badge text="searchAttributes" /> 
Method Detail for searchAttributes 


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/attributes?limit={{LIMIT_PER_PAGE}}&pageNumber={{PAGE_NUMBER}}"
``` 


```
Headers
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```

#### Payload
-None

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| pageNumber | int | pagination parameter | True | RequestParam |
| pageSize | int | pagination parameter | False | RequestParam |
| attributeCode | String | code of the attribute to search | False | RequestParam|
| department | String | department code | False | RequestParam|
| httpResponse_p | HttpServletResponse | parameter to check the response | True | Param |
| httpRequest_p | HttpServletRequest | parameter to check the request data | True | Param |



#### <Badge text="Returns" type="warning"/>
{
    "data": {
        "totalItems": 68,
        "startIndex": 1,
        "itemsPerPage": 10,
        "currentItemCount": 10,
        "items": [
            {
                "id": "5f886b4a09608a000122720e",
                "attributeCode": "sizeScale",
                "attributeKey": "US",
                "attributeLocaleName": "sizeScale",
                "localeName": "US",
                "names": {
                    "en": {
                        "locale": null,
                        "value": "US"
                    },
                    "it": {
                        "locale": null,
                        "value": "US"
                    }
                },
                "department": [
                    "fashion"
                ],
                "departmentFeeds": [
                    {
                        "id": "555210b1a44d28823dda21ce",
                        "key": "fashion",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "fashion",
                            "name": "fashion",
                            "nav": null
                        }
                    }
                ]
            }
        ]
    }
}


#### <Badge text="CURL Request" type="warning"/>
```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/attributes?limit=10&pageNumber=1' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=V2Q2QURleWsxQWhjYWZhNEx0QU1Sdz09OmNaa1hwc3ZJZ24yNjhBYlhpemp3SWc9PQ'
``` 
##### <Badge text="error" type="warning"/>
- None

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------
## createAttribute <Badge text="createAttribute" /> 
Method Detail for createAttribute 


```
Method
RequestMethod.POST
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/attributes"
``` 


```
Headers
TODO
```

#### Payload
TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| attribute | Attribute | Attribute object with data to be inserted | True | RequestBody |
| httpServletResponse | HttpServletResponse | parameter to check the response | True | Param |
| httpServletRequest | HttpServletRequest | parameter to check the request data | True | Param |
| principal | Principal | the loged in user | True | Param |


#### <Badge text="Returns" type="warning"/>
{
    TODO
}


#### <Badge text="CURL Request" type="warning"/>
```
TODO
``` 
##### <Badge text="error" type="warning"/>
- ResourceCreationException  <Badge text="ResourceCreationException" type="error"/> - Error during the creation of resource

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------

## updateAttribute <Badge text="updateAttribute" /> 
Method Detail for updateAttribute 


```
Method
RequestMethod.PUT
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/attributes/{{ATTRIBUTE_ID}}"
``` 


```
Headers
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```

#### Payload
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

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| attribute_id | String |id of the atribute to be updated | True | PathVariable |
| updatedAttribute | Attribute | Attribute object with data to be inserted | True | RequestBody |
| httpServletResponse | HttpServletResponse | parameter to check the response | True | Param |
| principal | Principal | the loged in user | True | Param |


#### <Badge text="Returns" type="warning"/>
{
    TODO
}


#### <Badge text="CURL Request" type="warning"/>
```
curl --location -g --request PUT 'http://localhost:8080/rest/picnik-rest/attributes/{{ATTRIBUTE_ID}}' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=V2Q2QURleWsxQWhjYWZhNEx0QU1Sdz09OmNaa1hwc3ZJZ24yNjhBYlhpemp3SWc9PQ' \
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
##### <Badge text="error" type="warning"/>
- ResourceUpdateException  <Badge text="ResourceUpdateException" type="error"/> - Error during the update of resource

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------------------------------------

## getAttributeById <Badge text="getAttributeById" /> 
Method Detail for getAttributeById 


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/attributes/{{ATTRIBUTE_ID}}"
``` 


```
Headers
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```

#### Payload
None

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| attribute_id | String |id of the atribute to be updated | True | PathVariable |
| httpServletResponse | HttpServletResponse | parameter to check the response | True | Param |



#### <Badge text="Returns" type="warning"/>
{
    TODO
}


#### <Badge text="CURL Request" type="warning"/>
```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/attributes/5f886b4a09608a000122720e' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Content-Type: application/json'
``` 
##### <Badge text="error" type="warning"/>
- None

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------