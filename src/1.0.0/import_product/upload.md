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
| file | *.csv file | data will be upload in database| Yes | 
 
\* name of file to test data

### CSV File Example
1. Attributes

| Column name | Column type| Description | Required |
| ------ | ------ | ------ | ------ | 
| attribute-code | String | Todo |Yes|
| key | String | Todo |Yes |
| active | Boolean | Attribute is avalable |Yes |
| departments | String | Department belong |Yes|
| name.it| String | Description in IT | | 
| name.en| String | Description in EN | |
| ... | ... | customer can define other fields | |

#### Example
`Notice!` The Attributes example is just to demonstrate live data

|attribute-code|key        |active|departments|name.it |name.en |
|--------------|-----------|------|-----------|--------|--------|
|sizeScale     |EU         |TRUE  |fashion    |EU      |EU      |
|sizeScale     |no-size    |TRUE  |fashion    |No Size |No Size |
|sizeScale     |IT         |TRUE  |fashion    |IT      |IT      |
|size          |no-size    |TRUE  |fashion    |No Size |No Size |
|size          |20         |TRUE  |fashion    |26      |26      |
|...           |...        |...   |...        |...     |....    |       

... continue repeats <br />


2. Categories

| Column name | Column type| Description | Required |
| ------ | ------ | ------ | ------ |
| type | String | Todo | Yes |
| parent-key | String |Todo |Yes|
| key | String |Todo |Yes |
| active | Boolean | Categorie is avalable |Yes|
| gender  | String | Gender||
| department | String | Department belong||
| name.en | String | Description in EN | |
| url.en | String | Url location for in EN category| |
| name.it | String | Description in IT | |
| url.it | String | Url location for in IT category | |
| ... | ... | customer can define other fields | |

#### Example
`Notice!` The Categories example is just to demonstrate live data

| type| gender | departments | parent-key | key | active | name.en | url.en | name.it | url.it |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | 
| root | female |  | fashion | woman | TRUE | Woman | woman | Donna | donna | 
| root | male |  | fashion | man | TRUE | Man | man | Uomo | uomo | 
| root | female | fashion | woman | scarpe-e-borse-woman | TRUE | Shoes and Bags | scarpe-e-borse | Scarpe e Borse | scarpe-e-borse | 
| child | child | fashion | fashion | scarpe-e-borse-children | TRUE | Shoes and Bags | scarpe-e-borse | Scarpe e Borse | scarpe-e-borse | 
| ... | ... | ... | ...  | ...  | ... | ... | ... | ... | ...  | 

... continue repeats <br />

3. Products

| Column name | Column type| Description | Required |
| ------ | ------ | ------ | ------ |
| article-id| String | Unique identifier of article Id | Yes |
| title | String | Title of product |Yes |
| price | Double | Price |Yes  |
| currency | String | Currency |Yes|
| brand | String | Brand |Yes |
| description | String | Description |Yes |
| image-url | String | Url photo of product |Yes |
| ean | String | EAN of product |Yes |
| macro-category | String | macro category of product |Yes |
| micro-category | String | micro-category of product | Yes|
| title.it | String | Title in IT | |
| ... | ... | customer can define other fields | |

#### Example
`Notice!` The Products example is just to demonstrate live data

| title.it | title | price | currency | brand | description | image-url| image-url-2| image-url-3|  ean | article-id | macro-category| micro-category| 
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |  
| WATERFALL | WATERFALL | 59.5  | EUR   | breil | Necklace. Bilux Stainless Steel and chain with small witk sligin boules. Length: 80cm | https://stentle-image.s3.com/TJ1817_1.jpg |  https://stentle-image.s3.com/TJ1817_2.jpg | https://stentle-image.s3.com/TJ1817_3.jpg  | FR-7612901668192  | FR-TJ1817 | woman   | accessori-woman  | 
| WATERFALL | WATERFALL | 62.3  | EUR   | breil | Necklace in Stainless Steel and IP rose. Chain with small witk sligin boules. Length: 80cm  | https://stentle-image.s3.com/J18_1.jpg |  https://stentle-image.s3.com/J817_2.jpg | https://stentle-image.s3.com/J18_3.jpg  | FR-7612901668222  | FR-TJ1820 | woman   | accessori-woman  | 
| COBRA | COBRA | 62.93  | EUR   | breil | Necklace in Stainless Steel and IP rose element. Lenght 39-45 cm  | https://stentle-image.s3.com/J1_1.jpg |  https://stentle-image.s3.com/J17_2.jpg | https://stentle-image.s3.com/18_3.jpg  | FR-7611901668211  | FR-TJ1830 | woman   | accessori-woman  | 
| BREILOGY | BREILOGY | 62.93  | EUR   | breil | Necklace in Stainless Steel with rose stones. Lenght 45-50 cm | https://stentle-image.s3.com/J_1.jpg |  https://stentle-image.s3.com/J7_2.jpg | https://stentle-image.s3.com/1_3.jpg  | FR-7611901668201  | FR-TJ1831 | woman   | accessori-woman  | 
| ... | ... | ... | ...  | ...  | ... | ... | ... | ... | ...  | ...  | ... |...  | ... |

... continue repeats <br />

3. Stock

| Column name | Column type| Description | Required |
| ------ | ------ | ------ | ------ |
| ean | String | EAN of product | Yes |
| stock-quantity | Integer| Stock quantity | |
| ... | ... | customer can define other fields | |

#### Example
`Notice!` The Stock example is just to demonstrate live data.

| ean              | stock-quantity | 
|------------------|----------------|
| FR-8052991085711 |50              | 
| FR-8052991097974 |50              |
| FR-8052991089993 |50              | 
| FR-8052991095161 |50              |
| ...              | ...            |  

... continue repeats <br />

\* `Notice!` Supported Language: `it`, `en`, `fr`, `ru`, `de`

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
