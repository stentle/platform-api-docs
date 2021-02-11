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

#### Query String Parameters
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| pageNumber | int | pagination parameter | True | RequestParam |
| pageSize | int | pagination parameter | False | RequestParam |
| attributeCode | String | code of the attribute to search | False | RequestParam|
| department | String | department code | False | RequestParam|

### URL Parameters Presentation
```
{{URI}}/rest/picnik-rest/attributes?limit={{LIMIT_PER_PAGE}}&pageNumber={{PAGE_NUMBER}}
```

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | ------ |
| data | ------ | TODO | ------ | ------ |
|| TODO | TODO | ------ | ------ |
|| startIndex | TODO | ------ | ------ |
|| itemsPerPage | TODO | ------ | ------ |
|| currentItemCount | TODO | ------ | ------ |
|| items | TODO | ------ | ------ |


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
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
```
{
    TODO
}
```
for more info on error - [Errors ](/1.0.0/errors.html) 
