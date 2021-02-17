# Update

Update product endpoints



 ## URL
 ### Http Verb <Badge text="POST" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/products/{id_p}
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
| product | Product | product to be created | Yes | 

### Payload Example
```
{
  "names": {
    "it": {
      "locale": "it",
      "value": "Test nome"
    }
  },
 "tagList": [
      {
        "id": "58c2bea2be417600010b3d97",
        "key": "Profumoestate",
        "description": "Profumoestate"
      },
      {
        "id": "58dbc7cc24aa9a0001986589",
        "key": "b&w",
        "description": "black and white"
      }],
  "prices": {
    "sellingPrice": 10.5
  },
  "brand": {
    "id": "{{BRAND_ID}}",
    "key": "{{BRAND_KEY}}"
  },
  "macroCategory": {
    "key": "{{MACRO}}"
  },
  "microCategory": {
    "key": "{{MICRO}}"
  },
  "stories": {
    "it": {
      "locale": null,
      "value": "<p>Questa è una storia di test</p>"
    }
  },
  "notes": {
    "it": {
      "locale": null,
      "value": "<p>Questa è una nota di test</p>"
    }
  },
  "width": 1,
  "height": 2,
  "weight": 3,
  "depth": 4,
  "manufacturerCode": "1242343223423",
  "erpCode": "21313232131"
}
```

## URL Parameters
| Parameters | Type | Description | Required |
| ------ | ------ | ------ | ------ | 
| id_p | String | product id | Yes |  

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | ------ |
|TODO| ------ | ------ | ------ | ------ |

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
curl --location --request PUT 'http://localhost:8080/rest/picnik-rest/products/59e0cb773cdea200013ffed7' \
--header 'Content-Type: application/json' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Accept: application/stentle.api-v0.1+json' \
--header 'Cookie: stentle=YTVlMzBNdE5QeXRxcXpaNStVdSt1Zz09OnZYTjJ3dkczRUVlZHI0WHhhMkpsaGc9PQ' \
--data-raw '{
  "names": {
    "it": {
      "locale": "it",
      "value": "Test nome"
    }
  },
 "tagList": [
      {
        "id": "58c2bea2be417600010b3d97",
        "key": "Profumoestate",
        "description": "Profumoestate"
      },
      {
        "id": "58dbc7cc24aa9a0001986589",
        "key": "b&w",
        "description": "black and white"
      }],
  "prices": {
    "sellingPrice": 10.5
  },
  "brand": {
    "id": "{{BRAND_ID}}",
    "key": "{{BRAND_KEY}}"
  },
  "macroCategory": {
    "key": "{{MACRO}}"
  },
  "microCategory": {
    "key": "{{MICRO}}"
  },
  "stories": {
    "it": {
      "locale": null,
      "value": "<p>Questa è una storia di test</p>"
    }
  },
  "notes": {
    "it": {
      "locale": null,
      "value": "<p>Questa è una nota di test</p>"
    }
  },
  "width": 1,
  "height": 2,
  "weight": 3,
  "depth": 4,
  "manufacturerCode": "1242343223423",
  "erpCode": "21313232131"
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

- Creation Error Type

```
{
    "type": "0",
    "title": "Generic error",
    "status": 401,
    "detail": "Unauthorized",
    "stackTrace": .....
}
```
- Not found exception

```
{
    "type": "0",
    "title": "Generic error",
    "status": 401,
    "detail": "Unauthorized",
    "stackTrace": .....
}
```

- Invalid data Exception

```
{
    "type": "0",
    "title": "Generic error",
    "status": 401,
    "detail": "Unauthorized",
    "stackTrace": .....
}
```

for more info on error - [Errors ](/1.0.0/errors.html) 