# Create

Create category endpoint


 ## URL
 ### Http Verb <Badge text="POST" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/categories
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```

## Payload
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | ------ |
| _id | String | unique parameter category ID | True |
| key | String | TODO | True |
| type | String | TODO| True |
| declare_variants | Array | TODO | True |
| photo_attributes | Array | TODO | True |

### Payload Example
```
{
    "_id" : "5dc99f50ef261b3d909bc000",
    "key" : "traveltest",
    "type" : "department",
    "declare_variants" : [ 
        "duration", 
        "start"
    ],
    "photo_attributes" : [ 
        "duration"
    ]
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
```
{
    "data": {
        "id": "602141e3b3cb1f0001bfe040",
        "key": "traveltest",
        "type": "DEPARTMENT",
        "gender": null,
        "active": null,
        "imageList": null,
        "parentId": null,
        "parentFeed": null,
        "ranking": 0,
        "localeName": "traveltest1",
        "english": null,
        "italian": null,
        "parentKey": null,
        "declareVariants": null,
        "declareAttributes": null,
        "photoAttributes": null,
        "taxes": null,
        "products": null,
        "sizeScaleCode": null,
        "department": null
    }
}
```

## CURL

CURL call example. Creating a category.

```
curl --location --request POST 'http://localhost:8080/rest/picnik-rest/categories' \
--header 'X-Domain: utravel' \
--header 'Accept-Language: en' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=U2Y1MWFMOXk2QkxrNytNSnoyUUdOdz09OkM5amZCQWt3RkNWMXFhODhPaEFyMEE9PQ' \
--data-raw '{
    "_id" : "5dc99f50ef261b3d909bc000",
    "key" : "traveltest1",
    "type" : "department",
    "declare_variants" : [ 
        "duration", 
        "start"
    ],
    "photo_attributes" : [ 
        "duration"
    ]
}'
```

### CURL Response Example
```
{
    "data": {
        "id": "602141e3b3cb1f0001bfe040",
        "key": "traveltest",
        "type": "DEPARTMENT",
        "gender": null,
        "active": null,
        "imageList": null,
        "parentId": null,
        "parentFeed": null,
        "ranking": 0,
        "localeName": "traveltest1",
        "english": null,
        "italian": null,
        "parentKey": null,
        "declareVariants": null,
        "declareAttributes": null,
        "photoAttributes": null,
        "taxes": null,
        "products": null,
        "sizeScaleCode": null,
        "department": null
    }
}
```

## Errors
for more info on error - [Errors ](/1.0.0/errors.html)