# Select

Select Specific product endpoint

 ## URL
 ### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/products/{id_p}
``` 

```
Headers
TODO
```
## Payload
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| None | ------ | ------ | ------ | ------ | 

### Payload Example
```
None
```
##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| idp | String | unique identifier of product | True | PathVariable |


### URL Parameters Presentation
"{{URI}}/rest/picnik-rest/products/{id_p}"

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | ------ |
| TODO | ------ | ------ | ------ | ------ |

### Response Example
```
{
    TODO
}
```
## CURL
CURL call example. Creating a category.
```
TODO
```

### CURL Response Example
```
{
    TODO
}
```

## Errors
- ResourceNotFound <Badge text="ResourceNotFound" type="error"/> - The resource was not found

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