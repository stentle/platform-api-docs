# Create

Create product endpoint

 ## URL
 ### Http Verb <Badge text="POST" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/products
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```
#### Payload
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| product | Product | product to be created | True | RequestBody | 

### Payload Example
```
{
 TODO
}
```

#### Query String Parameters
-None

### URL Parameters Presentation
"{{URI}}/rest/picnik-rest/products"


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

### CURL
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
##### <Badge text="error" type="warning"/>
- ResourceCreationException <Badge text="ResourceCreationException" type="error"/> - Creation Error Type
```
{
    TODO
}
```
- ResourceNotFoundException <Badge text="ResourceCreationException" type="error"/> - Not found exception
```
{
   TODO
}
```
- InputValidationException <Badge text="InputValidationException" type="error"/> - Invalid data Exception
```
{
   TODO
}
```

for more infor on error - [Errors ](errors.html) 
