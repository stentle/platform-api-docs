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
| _id | String | unique parameter category ID | Yes |
| key | String |  Category Key | Yes |
| type | String | Category Type| Yes |
| declare_variants | Array | Category Variants | Yes |

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
||active|bolean|Status Active of Category|
||imageList|array|List of Images for the Category|
||parentId|string|Parent Category Id|
||parentFeed|string|Parent Category Feed|
||ranking|number|Ranking of Cateogory|
||localeName|string|Local Name of Category|
||english|Object|Language Options of the Category in English|
||italian|Object|Language Options of the Category in Italian|
||parentKey|string|Parent Category Key|
||declareVariants|Array| Parent Category Variants|
||declareAttributes|string|*|
||photoAttributes|string|Photo Collection of the Category|
|| taxes | `Map<String, TaxGroup>`| Taxes of the category| 
||products|Products|List of Products at the category|
|| sizeScaleCode |SizeScaleCode | Object of type size scale code| 
||department|string|Departments in which the category is active|

### Response Example
::: details Example
```json
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
:::

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
::: details Example
```json
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
:::

## Errors
for more info on error - [Errors ](/1.0.0/errors.html)