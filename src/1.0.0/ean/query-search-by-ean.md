# Search By Ean
Query to search by ean

## URL
### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/products/searchByEan
``` 

## Headers
```
TODO
```
## Payload
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| None | ------ | ------ | ------ | ------ |

### Payload Example
```
{
 None
}
```

### URL Parameters
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| ean | String | unique identifier of product | True | RequestParam |

### URL Parameters Presentation
```
{{URI}}/rest/picnik-rest/products/searchByEan
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