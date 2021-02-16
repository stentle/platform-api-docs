# Delete

Delete product endpoint

 ## URL
 ### Http Verb <Badge text="DELETE" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/products/{id_p}
``` 

```
Headers
TODO
```

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| idProduct | String | unique identifier of product | True | PathVariable |

### URL Parameters
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

- ResourceDeleteException <Badge text="ResourceDeleteException" type="error"/> - Creation Error Type

```
{
    "type": "0",
    "title": "Generic error",
    "status": 401,
    "detail": "Unauthorized",
    "stackTrace": .....
}
```

- ResourceNotFoundException <Badge text="ResourceCreationException" type="error"/> - Not found exception

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