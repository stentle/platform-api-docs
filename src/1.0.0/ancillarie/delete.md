# Delete

Delete ancillary product endpoint

 ## URL
 ### Http Verb <Badge text="DELETE" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/ancillary/{id}
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
```

## Payload
| Parameters | Type | Description | Required |
| ------ | ------ | ------ | ------ | ------ |
| id | String | unique identifier of the ancillary product id | True | 
| language | String | unique identifier of language, defaultValue = "it" | False |

### Payload Example
Define just the Id ancillary product we want to delete in the URL
```
{}
```

### URL Parameters
| Parameters | Type | Description | Required |
| ------ | ------ | ------ | ------ | ------ |
| id | String | unique identifier of the ancillary product id | True | 
| language | String | unique identifier of language, defaultValue = "it" | False |

### URL Parameters Presentation
```
{{URI}}/rest/picnik-rest/ancillary/{id}
``` 

## Response
As response we get a number one means a 200 server response that the ancillary product has been deleted successfully.

### Response Example
Response number one means a 200 server response that the ancillary product has been deleted successfully
```
{
1
}
```

## CURL
CURL call example. Deleting a ancillary product.
```
curl --location --request DELETE 'http://localhost:8080/rest/picnik-rest/ancillary/5e28643984b38d00016a83ea' \
--header 'X-Domain: utravel' \
--header 'Cookie: stentle=cEx2ZG1haXZ2b2VpT1VDS0pOQmJXdz09OnFBV011VFhVcmU4VzY4TytNUDdUUXc9PQ'
```

### CURL Response Example
CURL response number one means a 200 server response that the ancillary product has been deleted successfully
```
{
1 
}
```
## Errors
::: warning 
```
{
   TODO
}
```
:::

for more info on error - [Errors ](/1.0.0/errors.html)