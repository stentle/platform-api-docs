# Update

Upload a csv to import 

## URL
### Http Verb <Badge text="POST" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/csv?folder=attribute
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
X-Country-Code: {{X-COUNTRY-CODE}}
```

## Payload
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | 
| file | form-data | need a path to the csv file | True | 

### Payload Example
```
{
 file: fileExample.csv
}
```

#### Query String Parameters
| Parameters | Type | Description | Required |
| ------ | ------ | ------ | ------ | ------ |
| folder | attribute | Reference of the folder to take CSV file | True |

### URL Parameters Presentation
'folder=?' is the destination folder of the uploaded file
```
{{URI}}/rest/picnik-rest/csv?folder=attribute
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
::: details Response
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
curl --location --request POST 'http://localhost:8080/rest/picnik-rest/csv?folder=attribute' \
--header 'Accept-Language: en' \
--header 'X-Domain: landoffashion' \
--header 'X-Country-Code: it' \
--header 'Cookie: stentle=ZnY1eERCM2plWjZhelhMOU5rSmZqdz09OmkwUEtEYzhkZHBLRzBZUEdnUHpLM2c9PQ' \
--form 'file=@"/Users/stentle/Downloads/Alpitour_Volo-Linea.csv"'
``` 

### CURL Response Example
```
{
"ed2b1f9e-f1cd-4107-a158-022d4b986b8b"
}
``` 
## Errors

for more info on error - [Errors ](/1.0.0/errors.html) 
