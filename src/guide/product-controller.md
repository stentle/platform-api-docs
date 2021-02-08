# ProductController <Badge text="ProductController" type="middle"/>
--------------------------------------------------------
Constructor Detail 
```
public ProductController ()
```
## getProductById <Badge text="getProductById" /> 
Method Detail for getProductById 


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}"
``` 

```
Headers
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| mergeVariant | boolean | ???? | False | RequestParam |
| warehouseId | String | unique identi of the warehouse where to search | False | RequestParam|
| httpServletResponse | HttpServletResponse | parameter to check the response | True | Param |
| httpServletRequest | HttpServletRequest | parameter to check the request data | True | Param |
| principal | Principal the loggedin user | True | Param |


#### <Badge text="Returns" type="warning"/>
```
{
  "id": "ch_1IHKew2eZvKYlo2CMKSdpW0M",
  "object": "charge",
  "customer": {
    "id": "cu_1IHKew2eZvKYlo2CyldejlFA",
    "object": "customer",
    ...
  },
  "invoice": {
    "id": "in_1038O22eZvKYlo2CZatXURm3",
    "object": "invoice",
    "subscription": {
      "id": "su_1036Vs2eZvKYlo2CCWtV2RYO",
      "object": "subscription",
      ...
    },
    ...
  },
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 



## searchVariantByEan <Badge text="searchVariantByEan" /> 
Method Detail for searchVariantByEan 

```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/searchbyean/{ean}"
``` 

```
Header
TODO
``` 

##### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| ean | String | unique identifier of the product | True | RequestParam

#### <Badge text="Returns" type="warning"/>
```
{
  "id": "ch_1IHKew2eZvKYlo2CMKSdpW0M",
  "object": "charge",
  "customer": {
    "id": "cu_1IHKew2eZvKYlo2CyldejlFA",
    "object": "customer",
    ...
  },
  "invoice": {
    "id": "in_1038O22eZvKYlo2CZatXURm3",
    "object": "invoice",
    "subscription": {
      "id": "su_1036Vs2eZvKYlo2CCWtV2RYO",
      "object": "subscription",
      ...
    },
    ...
  },
```

##### <Badge text="Error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 


## updateVariantPriceByEAN <Badge text="updateVariantPriceByEAN" /> 
Method Detail for updateVariantPriceByEAN 

```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/updatevariantpricebyean/{ean}/{cat}/{pri}"
``` 

```
Header
TODO
``` 

##### Payload
TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| ean | String | unique identifier of the product | True | PathVariable |
| CatalogId | String | unique identifier of the catalog where to search in | True | PathVariable |
| Price | double | the price to be set at the product | True | PathVariable |

#### <Badge text="Returns" type="warning"/>
```
{
  "id": "ch_1IHKew2eZvKYlo2CMKSdpW0M",
  "object": "charge",
  "customer": {
    "id": "cu_1IHKew2eZvKYlo2CyldejlFA",
    "object": "customer",
    ...
  },
  "invoice": {
    "id": "in_1038O22eZvKYlo2CZatXURm3",
    "object": "invoice",
    "subscription": {
      "id": "su_1036Vs2eZvKYlo2CCWtV2RYO",
      "object": "subscription",
      ...
    },
    ...
  },
```

#### <Badge text="Error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- InvalidParameterException <Badge text="InvalidParameterException" type="error"/> - When the parameters are not adeguate

for more infor on error - [Errors ](errors.html) 


## searchByCreationDate <Badge text="searchByCreationDate" /> 
Method Detail for searchByCreationDate 

```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/variants/searchEanByCreationDate"
``` 

```
Header
TODO
``` 

##### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| request | VariantSearchByCreationDateRequest | date of of creation  | True | RequestBody |


#### <Badge text="Returns" type="warning"/>
```
{
  "id": "ch_1IHKew2eZvKYlo2CMKSdpW0M",
  "object": "charge",
  "customer": {
    "id": "cu_1IHKew2eZvKYlo2CyldejlFA",
    "object": "customer",
    ...
  },
  "invoice": {
    "id": "in_1038O22eZvKYlo2CZatXURm3",
    "object": "invoice",
    "subscription": {
      "id": "su_1036Vs2eZvKYlo2CCWtV2RYO",
      "object": "subscription",
      ...
    },
    ...
  },
```

##### <Badge text="Error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- InvalidParameterException <Badge text="InvalidParameterException" type="error"/> - When the parameters are not adeguate

for more infor on error - [Errors ](errors.html)  


