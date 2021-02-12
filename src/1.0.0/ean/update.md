# Update

Update variant price by EAN

## URL
### Http Verb <Badge text="GET" vertical="middle"/>
```
{{URI}}/rest/picnik-rest/products/updatevariantpricebyean/{ean}/{cat}/{pri}
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
| ean | String | unique identifier of the product | True | PathVariable |
| CatalogId | String | unique identifier of the catalog where to search in | True | PathVariable |
| Price | double | the price to be set at the product | True | PathVariable |

### URL Parameters Presentation
```
{{URI}}/rest/picnik-rest/products/updatevariantpricebyean/{ean}/{cat}/{pri}
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
- InvalidParameterException <Badge text="InvalidParameterException" type="error"/> - When the parameters are not adeguate
```
{
    TODO
}
```

for more info on error - [Errors ](/1.0.0/errors.html) 