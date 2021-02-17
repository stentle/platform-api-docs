# Get Category By Id


Retrieves a category by id


 ## URL
 ### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/categories/{{CATEGORY_ID}}
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
| CATEGORY_ID | String | unique category ID | Yes |


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
||parentFeed|Object| Parent category|
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
        "id": "5dc9a15fe49eaa0001b03c7e",
        "key": "city",
        "type": "CHILD",
        "gender": "male",
        "active": true,
        "imageList": null,
        "parentId": null,
        "parentFeed": {
            "id": "5dc99ff7e49eaa0001b03c78",
            "key": "open-package",
            "type": "root",
            "gender": "male",
            "parentKey": "travel",
            "department": "travel",
            "parentFeed": {
                "id": "5dc99f50ef261b3d909bc113",
                "key": "travel",
                "type": "department",
                "gender": null,
                "parentKey": null,
                "department": null,
                "parentFeed": null,
                "departmentFeed": null,
                "active": null,
                "locale": {
                    "url": "travel",
                    "name": "travel",
                    "nav": null
                }
            },
            "departmentFeed": {
                "id": "5dc99f50ef261b3d909bc113",
                "key": "travel",
                "type": "department",
                "gender": null,
                "parentKey": null,
                "department": null,
                "parentFeed": null,
                "departmentFeed": null,
                "active": null,
                "locale": {
                    "url": "travel",
                    "name": "travel",
                    "nav": null
                }
            },
            "active": true,
            "locale": {
                "url": "open-package",
                "name": "Open package",
                "nav": null
            }
        },
        "ranking": 0,
        "localeName": "City",
        "english": {
            "url": "city",
            "name": "City",
            "nav": null
        },
        "italian": {
            "url": "city",
            "name": "City",
            "nav": null
        },
        "parentKey": "open-package",
        "declareVariants": null,
        "declareAttributes": null,
        "photoAttributes": null,
        "taxes": null,
        "products": null,
        "sizeScaleCode": null,
        "department": "travel"
    }
}
```
:::


## CURL
CURL call example. Retrieving a category by id.

```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/categories/5dc9a15fe49eaa0001b03c7e' \
--header 'X-Domain: utravel' \
--header 'Accept-Language: en' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=U2Y1MWFMOXk2QkxrNytNSnoyUUdOdz09OkM5amZCQWt3RkNWMXFhODhPaEFyMEE9PQ'
```

### CURL Response Example
::: details Example
```json
{
    "data": {
        "id": "5dc9a15fe49eaa0001b03c7e",
        "key": "city",
        "type": "CHILD",
        "gender": "male",
        "active": true,
        "imageList": null,
        "parentId": null,
        "parentFeed": {
            "id": "5dc99ff7e49eaa0001b03c78",
            "key": "open-package",
            "type": "root",
            "gender": "male",
            "parentKey": "travel",
            "department": "travel",
            "parentFeed": {
                "id": "5dc99f50ef261b3d909bc113",
                "key": "travel",
                "type": "department",
                "gender": null,
                "parentKey": null,
                "department": null,
                "parentFeed": null,
                "departmentFeed": null,
                "active": null,
                "locale": {
                    "url": "travel",
                    "name": "travel",
                    "nav": null
                }
            },
            "departmentFeed": {
                "id": "5dc99f50ef261b3d909bc113",
                "key": "travel",
                "type": "department",
                "gender": null,
                "parentKey": null,
                "department": null,
                "parentFeed": null,
                "departmentFeed": null,
                "active": null,
                "locale": {
                    "url": "travel",
                    "name": "travel",
                    "nav": null
                }
            },
            "active": true,
            "locale": {
                "url": "open-package",
                "name": "Open package",
                "nav": null
            }
        },
        "ranking": 0,
        "localeName": "City",
        "english": {
            "url": "city",
            "name": "City",
            "nav": null
        },
        "italian": {
            "url": "city",
            "name": "City",
            "nav": null
        },
        "parentKey": "open-package",
        "declareVariants": null,
        "declareAttributes": null,
        "photoAttributes": null,
        "taxes": null,
        "products": null,
        "sizeScaleCode": null,
        "department": "travel"
    }
}
```
:::

## Errors

for more info on error - [Errors ](/1.0.0/errors.html) 