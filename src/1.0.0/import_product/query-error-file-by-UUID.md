# Error File By UUID

Get the error status for an imported CSV File

## URL
### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/csv/file/{{UUID}}
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
```

## URL Parameters

| Parameters | Type | Description | Required |
| ------ | ------ | ------ | ------ |
| UUID | String | Reference of the uploaded CSV file | Yes |

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ |
| data ||Object| Response content|
|| TODO | ------ | ------ | ------ |


### Response Example
```
{
  TODO 
}
```

## CURL
CURL call example. Get the status of CSV.
```
curl --location -g --request GET 'http://localhost:8080/rest/picnik-rest/csv/file/{{UUID}}' \
--header 'X-Domain: landoffashion' \
--header 'Cookie: stentle=ZnY1eERCM2plWjZhelhMOU5rSmZqdz09OmkwUEtEYzhkZHBLRzBZUEdnUHpLM2c9PQ'
``` 

### CURL Response Example
```
{
    TODO
}
```

## Errors

for more info on error - [Errors ](/1.0.0/errors.html) 
