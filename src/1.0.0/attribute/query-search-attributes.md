# Search Attributes

Search Attribute endpoint

## URL
### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/attributes?limit={{LIMIT_PER_PAGE}}&pageNumber={{PAGE_NUMBER}}
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```

## URL Parameters
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | 
| pageNumber | int | pagination parameter | Yes | 
| pageSize | int | pagination parameter | Yes |
| attributeCode | String | code of the attribute to search | Yes | 
| department | String | department code | |


## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | 
| data ||Object| Response content|
|| TODO | TODO | ------ | ------ |

### Response Example
```
{
  TODO 
}
```

## CURL
CURL call example.

```
Sample CURL Call: "TODO"
``` 

### CURL Response Example
```
{
    TODO
}
```

## Errors
- Error types resource not found
```
{
    TODO
}
```
for more info on error - [Errors ](/1.0.0/errors.html) 
