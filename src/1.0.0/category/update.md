# Update

Update category endpoint

 ## URL
 ### Http Verb <Badge text="PUT" vertical="middle"/>
```
{{URI}}/rest/picnik-rest/categories/{{CATEGORY_ID}}
``` 

## Headers

```
X-Domain: {{X-DOMAIN}}
Accept-Language: {{ACCEPT-LANGUAGE}}
Content-Type: application/json
```

## Payload
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | ------ |
| id | String | unique parameter category ID | Yes |
| key | String |  Category Key | Yes |
| type | String | Category Type| Yes |
| gender | String | Category Gender | Yes |
| active | Boolean | Category status is active | Yes |
| imageList | Array | List of images of category ||
| parentId | String | Category parent Id ||

### Payload Example
```
{
    "id": "555210b1a44d28823dda21ceg",
    "key": "citytest",
    "type": "CHILDteese",
    "gender": "female",
    "active": true,
    "imageList": null,
    "parentId": null
}
```

## Response

| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | ------ |
| data ||Object| Response content|
||id|string|Category Id|
||key|string|Key|
||type|string|Type|
||gender|string|Gender|
||active|bolean||
||imageList|array||
||parentId|string||
||parentFeed|string||
||ranking|number||
||localeName|string||
||english|Object||
||italian|Object||
||parentKey|string||
||declareVariants|Array||
||declareAttributes|string||
||photoAttributes|string||
||taxes|string||
||products|string||
||sizeScaleCode|string||
||department|string||

### Response Example
::: details Example
```json
{
    "data": {
        "id": "555210b1a44d28823dda21ce",
        "key": "citytest",
        "type": "DEPARTMENT",
        "gender": "female",
        "active": true,
        "imageList": null,
        "parentId": null,
        "parentFeed": null,
        "ranking": 0,
        "localeName": "citytest",
        "english": null,
        "italian": null,
        "parentKey": null,
        "declareVariants": [
            "size",
            "color"
        ],
        "declareAttributes": null,
        "photoAttributes": null,
        "taxes": null,
        "products": null,
        "sizeScaleCode": null,
        "department": null
    }
}
```
::: 

## CURL

CURL call example. Retrieving a specific category.

### CURL Call Example

```
curl --location --request PUT 'http://localhost:8080/rest/picnik-rest/categories/555210b1a44d28823dda21ce' \
--header 'X-Domain: utravel' \
--header 'Accept-Language: en' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=U2Y1MWFMOXk2QkxrNytNSnoyUUdOdz09OkM5amZCQWt3RkNWMXFhODhPaEFyMEE9PQ' \
--data-raw '{

        "id": "555210b1a44d28823dda21ce",
        "key": "citytest",
        "type": "CHILDteese",
        "gender": "female",
        "active": true,
        "imageList": null,
        "parentId": null

}'
```

### CURL Response Example
::: details Example
```json
{
    "data": {
        "id": "555210b1a44d28823dda21ce",
        "key": "citytest",
        "type": "DEPARTMENT",
        "gender": "female",
        "active": true,
        "imageList": null,
        "parentId": null,
        "parentFeed": null,
        "ranking": 0,
        "localeName": "citytest",
        "english": null,
        "italian": null,
        "parentKey": null,
        "declareVariants": [
            "size",
            "color"
        ],
        "declareAttributes": null,
        "photoAttributes": null,
        "taxes": null,
        "products": null,
        "sizeScaleCode": null,
        "department": null
    }
}
```
:::


## Errors
for more info on error - [Errors ](/1.0.0/errors.html) 


