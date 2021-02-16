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
- contains the error details found at the time of Import in the DB
::: details Example
```json
{
  "id": "602a92b336d1a00001dc700e",
  "path": null,
  "filePath": "fd1808e8-dbee-4603-985a-c8d3d8891296_error.csv",
  "ftpPath": "landoffashion/land-of-fashion-franciacorta-01/fd1808e8-dbee-4603-985a-c8d3d8891296_geox_products_fov.csv",
  "errors": {
    "importErrors": [
      {
        "rowNumber": 2,
        "itemIdentifier": "-",
        "status": "INVALID",
        "errors": [
          {
            "field": "village",
            "details": "Invalid attribute with key 'village' and value 'franciacorta_x'"
          }
        ],
        "csvRow": null
      }
    ],
    "parsingErrors": null
  },
  "status": "ERROR",
  "uuid": "fd1808e8-dbee-4603-985a-c8d3d8891296",
  "creationDate": 1613402800342
}
```
:::

- contains the error details found at the time of parsing and validating the content from the uploaded file
::: details Example
```json
{
  "id": "602a53eb36d1a00001dc6ff8",
  "path": null,
  "filePath": null,
  "ftpPath": "landoffashion/land-of-fashion-franciacorta-01/046c9b70-51e2-4a49-9649-5606aef91159_geox_products_fov.csv",
  "errors": {
    "importErrors": null,
    "parsingErrors": [
      {
        "rowNum": 1,
        "itemIdentifier": "D ASHEELY",
        "error": "Row n. 1: Missing mandatory field value 'image-url'"
      },
      {
        "rowNum": 2,
        "itemIdentifier": "D ASHEELY",
        "error": "Row n. 2: Missing mandatory field value 'image-url'"
      }
    ]
  },
  "status": "UPLOADED",
  "uuid": "046c9b70-51e2-4a49-9649-5606aef91159",
  "creationDate": 1613386731073
}
```
:::


for more info on error - [Errors ](/1.0.0/errors.html) 
