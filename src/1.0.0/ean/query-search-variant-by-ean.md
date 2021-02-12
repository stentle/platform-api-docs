# Search Variant By Ean
Query to search by variant by ean

## URL
### Http Verb <Badge text="GET" vertical="middle"/>
```
{{URI}}/rest/picnik-rest/products/searchbyean/{ean}
``` 

## Headers
```
TODO
```

## Payload
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| NONE | ------ | ------ | ------ | ------ |


### Payload Example
```
{
 NONE
}
```

### URL Parameters
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| ean | String | unique identifier of product | True | RequestParam |

### URL Parameters Presentation
```
{{URI}}/rest/picnik-rest/products/searchbyean/{ean}
``` 

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | ------ |
| data ||Object| Response content|
||todo|||

### Response Example
```
{
  TODO 
}
```


## CURL
CURL call example. Search data by ean.
```
{
  TODO
}
```

### CURL Response Example
```
{
  TODO
}
```

## Errors
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
```
{
    TODO
}
```
for more info on error - [Errors ](/1.0.0/errors.html) 