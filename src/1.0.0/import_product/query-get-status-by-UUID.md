# Get Status by UUID

Get the status of CSV

## URL
### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/csv/status/{{UUID}}
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
```

#### Query String Parameters
| Parameters | Type | Description | Required |
| ------ | ------ | ------ | ------ | ------ |
| UUID | String | Reference of the uploaded CSV file | True |

### URL Parameters Presentation
```
{{URI}}/rest/picnik-rest/csv/file/{{UUID}}
```

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | 
| data ||Object| Response content|
|| id | String | id of the record | 
|| path | TODO | ------ |
|| filePath | TODO | ------ |
|| ftpPath | String | Path of the uploaded CSV (original) file in the FTP server |
|| errors | Object | Contains the errors of the uploaded csv. importErrors, parsingErrors |
|| status | String | The status of the uploaded file |
|| uuid | String | UUID to track the status of the uploaded file |
|| creationDate | number | creation time of the record |

### Response Example
::: details Example
```json
{
    "id": "6022c24436d1a00001804ea3",
    "path": null,
    "filePath": null,
    "ftpPath": "landoffashion/land-of-fashion-franciacorta-01/ed2b1f9e-f1cd-4107-a158-022d4b986b8b_Anda_attributes.csv",
    "errors": {
        "importErrors": null,
        "parsingErrors": null
    },
    "status": "UPLOADED",
    "uuid": "ed2b1f9e-f1cd-4107-a158-022d4b986b8b",
    "creationDate": 1612890692392
}
```
:::

## CURL
CURL call example. Get the status of CSV.
```
curl --location -g --request GET 'http://localhost:8080/rest/picnik-rest/csv/status/{{UUID}}' \
--header 'X-Domain: landoffashion' \
--header 'Cookie: stentle=ZnY1eERCM2plWjZhelhMOU5rSmZqdz09OmkwUEtEYzhkZHBLRzBZUEdnUHpLM2c9PQ'
``` 

### CURL Response Example
```json
{
    "id": "6022c24436d1a00001804ea3",
    "path": null,
    "filePath": null,
    "ftpPath": "landoffashion/land-of-fashion-franciacorta-01/ed2b1f9e-f1cd-4107-a158-022d4b986b8b_Anda_attributes.csv",
    "errors": {
        "importErrors": null,
        "parsingErrors": null
    },
    "status": "UPLOADED",
    "uuid": "ed2b1f9e-f1cd-4107-a158-022d4b986b8b",
    "creationDate": 1612890692392
}
```
## Errors

for more info on error - [Errors ](/1.0.0/errors.html) 
