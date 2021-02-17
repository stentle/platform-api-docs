# Upload

Uploads a csv file with products details

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

## CSV File Format
The files data can be set for the following entities
1. Attributes
2. Categories
3. Products
4. Stock

| File | Type | Description | Required | 
| ------ | ------ | ------ | ------ | 
| file | *.csv file | Data will be upload in database| Yes | 
 
\* name of file to test data

### CSV File Example
1. Attributes
Example data file structure 

| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | 
| File || csv| content data|
|| attribute-code | String | | 
|| key | String | | 
|| active | Boolean | |
|| departments | String | |
|| name| Object | Description in EN and IT |

## Payload
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | 
| file | form-data | need a path to the csv file | Yes | 


## Query String
| Parameters | Type | Description | Required |
| ------ | ------ | ------ | ------ | ------ |
| folder | String | destination folder of the uploaded file | Yes |

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | 
| data ||Object| Response content|
|| UUID | String | UUID to track the status of the uploaded file | 


### Response Example
::: details Response
```json
{
    "ed2b1f9e-f1cd-4107-a158-022d4b986b8b"
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
