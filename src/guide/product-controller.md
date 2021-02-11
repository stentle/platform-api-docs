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
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| mergeVariant | boolean | TODO | False | RequestParam |
| warehouseId | String | unique identi of the warehouse where to search | False | RequestParam|
| httpServletResponse | HttpServletResponse | parameter to check the response | True | Param |
| httpServletRequest | HttpServletRequest | parameter to check the request data | True | Param |
| principal | Principal the loggedin user | True | Param |


#### <Badge text="Returns" type="warning"/>
{
  TODO
}


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 
##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------

## searchbyEan <Badge text="searchbyEan" /> 
Method Detail for searchbyEan 


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/searchByeEan"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| ean | String | unique identifier of product | True | RequestParam |


#### <Badge text="Returns" type="warning"/>
{
  TODO
}


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 
##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html)

--------------------------------------------------------------------------------------------------------------------------------------------------------


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
| ean | String | unique identifier of the product | True | RequestParam |

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```
#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
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
  TODO
}
```

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 
##### <Badge text="Error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- InvalidParameterException <Badge text="InvalidParameterException" type="error"/> - When the parameters are not adeguate

for more infor on error - [Errors ](errors.html) 


--------------------------------------------------------------------------------------------------------------------------------------------------------

## searchByCreationDate <Badge text="searchByCreationDate" /> 
Method Detail for searchByCreationDate 

```
Method
RequestMethod.POST
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
  TODO
}
```
#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 
##### <Badge text="Error" type="warning"/>
-None

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------

## countByCreationDate <Badge text="countByCreationDate" /> 
Method Detail for countByCreationDate 


```
Method
RequestMethod.POST
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/variants/countByCreationDate"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| request | VariantSearchByCreationDateRequest | date of of creation  | True | RequestBody |

#### <Badge text="Returns" type="warning"/>
{
  TODO
}


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 
##### <Badge text="error" type="warning"/>
-None

for more infor on error - [Errors ](errors.html) 

## search <Badge text="search" /> 
Method Detail for search 


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/search"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| productSearchRequest | ProductSearchRequest | request of type product search format | True | RequestBody | 



#### <Badge text="Returns" type="warning"/>
{
  TODO
}


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 
##### <Badge text="error" type="warning"/>
- None

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------
## searchWithPost <Badge text="searchWithPost" /> 
Method Detail for searchWithPost 


```
Method
RequestMethod.POST
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/search"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| productSearchRequest | ProductSearchRequest | request of type product search format | True | RequestBody | 



#### <Badge text="Returns" type="warning"/>
{
  TODO
}


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 
##### <Badge text="error" type="warning"/>
- None

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------

## createProduct <Badge text="createProduct" /> 
Method Detail for createProduct 


```
Method
RequestMethod.POST
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| product | Product | product to be created | True | RequestBody | 
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Product | the logedin user | True | Param | 


#### <Badge text="Returns" type="warning"/>
{
  TODO
}


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 
##### <Badge text="error" type="warning"/>
- ResourceCreationException <Badge text="ResourceCreationException" type="error"/> - Creation Error Type
- ResourceNotFoundException <Badge text="ResourceCreationException" type="error"/> - Not found exception
- InputValidationException <Badge text="InputValidationException" type="error"/> - Invalid data Exception

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------
## updateProduct <Badge text="updateProduct" /> 
Method Detail for updateProduct 


```
Method
RequestMethod.PUT
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}"
``` 

```
Headers
Content-Type:application/json 
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Accept:application/stentle.api-v0.1+json
```

#### Payload
```
{
  "names": {
    "it": {
      "locale": "it",
      "value": "Test nome"
    }
  },
 "tagList": [
      {
        "id": "58c2bea2be417600010b3d97",
        "key": "Profumoestate",
        "description": "Profumoestate"
      },
      {
        "id": "58dbc7cc24aa9a0001986589",
        "key": "b&w",
        "description": "black and white"
      }],
  "prices": {
    "sellingPrice": 10.5
  },
  "brand": {
    "id": "{{BRAND_ID}}",
    "key": "{{BRAND_KEY}}"
  },
  "macroCategory": {
    "key": "{{MACRO}}"
  },
  "microCategory": {
    "key": "{{MICRO}}"
  },
  "stories": {
    "it": {
      "locale": null,
      "value": "<p>Questa è una storia di test</p>"
    }
  },
  "notes": {
    "it": {
      "locale": null,
      "value": "<p>Questa è una nota di test</p>"
    }
  },
  "width": 1,
  "height": 2,
  "weight": 3,
  "depth": 4,
  "manufacturerCode": "1242343223423",
  "erpCode": "21313232131"
}
```

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| updatedProduct | Product | the product data with which the id_p product will be updated | True | RequestBody |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Product | the logedin user | True | Param | 



#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

#### <Badge text="CURL Request" type="warning"/>
```
curl --location --request PUT 'http://localhost:8080/rest/picnik-rest/products/59e0cb773cdea200013ffed7' \
--header 'Content-Type: application/json' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Accept: application/stentle.api-v0.1+json' \
--header 'Cookie: stentle=YTVlMzBNdE5QeXRxcXpaNStVdSt1Zz09OnZYTjJ3dkczRUVlZHI0WHhhMkpsaGc9PQ' \
--data-raw '{
  "names": {
    "it": {
      "locale": "it",
      "value": "Test nome"
    }
  },
 "tagList": [
      {
        "id": "58c2bea2be417600010b3d97",
        "key": "Profumoestate",
        "description": "Profumoestate"
      },
      {
        "id": "58dbc7cc24aa9a0001986589",
        "key": "b&w",
        "description": "black and white"
      }],
  "prices": {
    "sellingPrice": 10.5
  },
  "brand": {
    "id": "{{BRAND_ID}}",
    "key": "{{BRAND_KEY}}"
  },
  "macroCategory": {
    "key": "{{MACRO}}"
  },
  "microCategory": {
    "key": "{{MICRO}}"
  },
  "stories": {
    "it": {
      "locale": null,
      "value": "<p>Questa è una storia di test</p>"
    }
  },
  "notes": {
    "it": {
      "locale": null,
      "value": "<p>Questa è una nota di test</p>"
    }
  },
  "width": 1,
  "height": 2,
  "weight": 3,
  "depth": 4,
  "manufacturerCode": "1242343223423",
  "erpCode": "21313232131"
}'
``` 
##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------

## changeProductsListOnGroupedProduct <Badge text="changeProductsListOnGroupedProduct" /> 
Method Detail for changeProductsListOnGroupedProduct 


```
Method
RequestMethod.PATCH
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/groupedproduct"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| groupedProductPatch | GroupedProductPatch | TODO | True | RequestBody |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| principal | Product | the logedin user | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------
## uploadProductPhoto <Badge text="uploadProductPhoto" /> 
Method Detail for uploadProductPhoto 


```
Method
RequestMethod.POST
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| id_t | String | TODO | True | PathVariable |
| file | MultipartFile | file to be attached to the product | True | RequestPart |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Product | the logedin user | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- InvalidUserException <Badge text="InvalidUserException" type="error"/> -user is not authenticated
- ForbiddenException <Badge text="ForbiddenException" type="error"/> - User has no rights
- InputValidationException <Badge text="InputValidationException" type="error"/> - Invalid data Exception

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## uploadProductPhotoV2 <Badge text="uploadProductPhotoV2" /> 
Method Detail for uploadProductPhotoV2 


```
Method
RequestMethod.POST
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/product-photo/{id_t}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| id_t | String | TODO | True | PathVariable |
| file | MultipartFile | file to be attached to the product | True | RequestPart |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Product | the logedin user | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- IOException <Badge text="IOException" type="error"/> - Hardware exception
- InvalidUserException <Badge text="InvalidUserException" type="error"/> - user is not authenticated
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- ForbiddenException <Badge text="ForbiddenException" type="error"/> - User has no rights
- ResourceCreationException <Badge text="ResourceCreationException" type="error"/> - Error during creation of resource

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## patchProductPhoto <Badge text="patchProductPhoto" /> 
Method Detail for patchProductPhoto 


```
Method
RequestMethod.PATCH
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/product-photo/{id_t}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| photoId | String | TODO | True | PathVariable |
| file | MultipartFile | file to be attached to the product | True | RequestPart |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Product | the logedin user | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- InvalidUserException <Badge text="InvalidUserException" type="error"/> - user is not authenticated
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- ForbiddenException <Badge text="ForbiddenException" type="error"/> - User has no rights

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## deleteProductPhoto <Badge text="deleteProductPhoto" /> 
Method Detail for deleteProductPhoto 


```
Method
RequestMethod.DELETE
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/product-photo/{id_t}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| photoFileName | String | TODO | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Product | the logedin user | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------



## deleteProductPhotoV2 <Badge text="deleteProductPhotoV2" /> 
Method Detail for deleteProductPhotoV2 


```
Method
RequestMethod.DELETE
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/product-photo/{id_t}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| photoId | String | TODO | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------

## uploadProductVariantPhotoV2 <Badge text="uploadProductVariantPhotoV2" /> 
Method Detail for uploadProductVariantPhotoV2 


```
Method
RequestMethod.POST
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variants/{id_v}/variant-photo/{id_t}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| id_v | String | unique identifier of the variant | True | PathVariable |
| type | String | TODO | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- IOException <Badge text="IOException" type="error"/> - Hardware error
- ForbiddenException <Badge text="ForbiddenException" type="error"/> - User has no rights
- InvalidUserException <Badge text="InvalidUserException" type="error"/> - user is not authenticated
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- ResourceCreationException <Badge text="ResourceCreationException" type="error"/> - Error during creation of resource
- InputValidationException <Badge text="InputValidationException" type="error"/> - Invalid data Except

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## uploadProductVariantPhoto <Badge text="uploadProductVariantPhoto" /> 
Method Detail for uploadProductVariantPhoto 


```
Method
RequestMethod.POST
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variants/{id_v}/variant-photo/{id_t}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| id_v | String | unique identifier of the variant | True | PathVariable |
| type | String | TODO | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- IOException <Badge text="IOException" type="error"/> - Hardware error
- InvalidUserException <Badge text="InvalidUserException" type="error"/> - user is not authenticated
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- ForbiddenException <Badge text="ForbiddenException" type="error"/> -User has no rights

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------
## getProductPhoto <Badge text="getProductPhoto" /> 
Method Detail for getProductPhoto 


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| id_f | String | unique identifier of the photo | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- Exception <Badge text="Exception" type="error"/> - General Exception

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------
## getProductPhotoV2 <Badge text="getProductPhotoV2" /> 
Method Detail for getProductPhotoV2 


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| id_f | String | unique identifier of the photo | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- Exception <Badge text="Exception" type="error"/> - General Exception

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## deleteVariantPhoto <Badge text="deleteVariantPhoto" /> 
Method Detail for deleteVariantPhoto 


```
Method
RequestMethod.Delete
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variants/{id_v}/variant-photo/{id_t}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| id_v | String | unique identifier of the variant | True | PathVariable |
| imageType | String | TODO | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Not found exception
- InvalidUserException <Badge text="InvalidUserException" type="error"/> -user is not authenticated
- ForbiddenException <Badge text="ForbiddenException" type="error"/> - User has no rights

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## deleteVariantPhotoV2 <Badge text="deleteVariantPhotoV2" /> 
Method Detail for deleteVariantPhotoV2 


```
Method
RequestMethod.Delete
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variants/{id_v}/variant-photo/{id_t}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| id_v | String | unique identifier of the variant | True | PathVariable |
| photoUUId | String | TODO | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Not found exception
- InvalidUserException <Badge text="InvalidUserException" type="error"/> -user is not authenticated
- ForbiddenException <Badge text="ForbiddenException" type="error"/> - User has no rights

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------



## patchVariantPhoto <Badge text="patchVariantPhoto" /> 
Method Detail for patchVariantPhoto 


```
Method
RequestMethod.PATCH
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variants/{id_v}/variant-photo/{id_t}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of the product | True | PathVariable |
| id_v | String | unique identifier of the variant | True | PathVariable |
| idPhoto | String | TODO | True | PathVariable |
| patchProductPhotoDto | PatchProductPhotoDto | photo object to be inserted as data at the photo with idPhoto | True | RequestBody |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Not found exception
- InvalidUserException <Badge text="InvalidUserException" type="error"/> -user is not authenticated
- ForbiddenException <Badge text="ForbiddenException" type="error"/> - User has no rights

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------



## getVariantPhotoV2 <Badge text="getVariantPhotoV2" /> 
Method Detail for getVariantPhotoV2 


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_v}/variant-photo/{id_f}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_f | String | unique identifier of photo | True | PathVariable |
| id_v | String | unique identifier of the variant | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- Exception <Badge text="Exception" type="error"/> - General Exception

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------



## uploadDocumentFile <Badge text="uploadDocumentFile" /> 
Method Detail for uploadDocumentFile 


```
Method
RequestMethod.POST
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/document-file/{id_t}"
``` 

```
Headers
X-Domain:{{X-DOMAIN}}
Content-Type:multipart/form-data
```

#### Payload
```
fileUpload2: SelectFiles
```
##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of product | True | PathVariable |
| id_t | String | type of the file | True | PathVariable |
| file | MultipartFile | file object to be attached to the product | True | RequestBody |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
curl --location -g --request POST 'http://localhost:8080/rest/picnik-rest/products/5f88a4f20a3f0d0001271635/document-file/{{DOCUMENT_ID}}' \
--header 'X-Domain: landoffashion' \
--header 'Content-Type: multipart/form-data' \
--header 'Cookie: stentle=V2Q2QURleWsxQWhjYWZhNEx0QU1Sdz09OmNaa1hwc3ZJZ24yNjhBYlhpemp3SWc9PQ' \
--form 'fileUpload2=@"/C:/Users/remio/OneDrive/Desktop/1.PNG"'
``` 

#### <Badge text="Returns" type="warning"/>
```
{
    "data": {
        "id": "5f88a4f20a3f0d0001271635",
        "creationDate": 1602790642965,
        "updateDate": 1602790644446,
        "tenantId": null,
        "href": null,
        "version": 9,
        "name": null,
        "descriptions": {
            "it": {
                "locale": "it",
                "value": "Zip-around women’s wallet with coin case, credit card slots and RFID anti-fraud protection"
            }
        },
        "erpCode": null,
        "brand": {
            "id": "5f7ee55c7c6ab2024549c4a1",
            "key": "piquadro",
            "name": "Piquadro",
            "shortDescription": null,
            "longDescription": null,
            "departments": [
                "fashion"
            ],
            "categories": null
        },
        "externalCode": null,
        "externalParentCode": null,
        "sku": "000000000170",
        "articleId": "MV-PD4826S108R",
        "customSkus": null,
        "attributes": {},
        "published": true,
        "publicationDate": 1602790800134,
        "productDescriptionCompleteness": false,
        "threshold": 0,
        "photoGallery": {
            "images": [
                {
                    "id": "6d40e1f7-bb52-4074-9dc6-7f9e2899936b",
                    "type": "cover",
                    "imageURL": "https://xxxxx.jpg",
                    "filename": null,
                    "active": true,
                    "sizeType": null,
                    "tag": null
                }
            ],
            "thumbnails": [],
            "sequence": 0,
            "allImages": [
                {
                    "id": "6d40e1f7-bb52-4074-9dc6-7f9e2899936b",
                    "type": "cover",
                    "imageURL": "https://xxxxx.jpg",
                    "filename": null,
                    "active": true,
                    "sizeType": null,
                    "tag": null
                }
            ]
        },
        "videoGallery": null,
        "documentArchive": {
            "added": null,
            "updated": null,
            "documents": [
                {
                    "id": null,
                    "type": null,
                    "description": null,
                    "documentUrl": "http://localhost:8080/rest/picnik-rest/products/5f88a4f20a3f0d0001271635/document-file/test-document-1",
                    "filename": "test-document-1",
                    "filenameFromSystem": "1.PNG",
                    "originalFileName": null
                }
            ]
        },
        "stories": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
            }
        },
        "loverList": [],
        "numberOfLovers": 0,
        "numberOfProductSaving": 0,
        "numberOfProductSharing": 0,
        "loved": false,
        "saved": false,
        "addedToCart": false,
        "purchasable": false,
        "hasCoverPhoto": true,
        "sales": null,
        "catalogList": [
            {
                "id": "5607f05658162efefd532b28",
                "creationDate": 1612876552799,
                "updateDate": 1445683662336,
                "tenantId": null,
                "href": null,
                "name": "base",
                "multiplier": 1.0,
                "baseCatalog": true,
                "countrySearch": [
                    "IT"
                ],
                "countries": [
                    {
                        "id": "5139e686247e898c57138523",
                        "creationDate": 1612876552801,
                        "updateDate": 1612876552801,
                        "tenantId": null,
                        "href": null,
                        "euroZone": true,
                        "isoCode": "IT",
                        "iso3Code": "ITA",
                        "name": "ITALY",
                        "localeName": "Italy",
                        "region": "Europe",
                        "taxValue": 0.0,
                        "allowed": true,
                        "printableName": "Italy"
                    }
                ],
                "regions": null,
                "currency": {
                    "id": "55f9a3535f15ead1260c34fe",
                    "creationDate": 1612876552802,
                    "updateDate": 1612876552802,
                    "tenantId": null,
                    "href": null,
                    "code": "EUR",
                    "decimalDigit": null,
                    "name": "Euro",
                    "namePlural": "euros",
                    "rounding": 0.0,
                    "symbol": "€",
                    "uiCode": "242",
                    "isoNumber": "978",
                    "symbolNative": "€"
                },
                "taxValue": 22.0,
                "taxValues": null
            },
            {
                "id": "5f8848aef6cc1b58e588fee5",
                "creationDate": 1612876552802,
                "updateDate": 1450515163233,
                "tenantId": null,
                "href": null,
                "name": "Europe",
                "multiplier": 1.1,
                "baseCatalog": false,
                "countrySearch": [],
                "countries": null,
                "regions": [
                    "Europe"
                ],
                "currency": {
                    "id": "55f9a3535f15ead1260c34fe",
                    "creationDate": 1612876552804,
                    "updateDate": 1612876552804,
                    "tenantId": null,
                    "href": null,
                    "code": "EUR",
                    "decimalDigit": null,
                    "name": "Euro",
                    "namePlural": "euros",
                    "rounding": 0.0,
                    "symbol": "€",
                    "uiCode": "242",
                    "isoNumber": "978",
                    "symbolNative": "€"
                },
                "taxValue": 0.0,
                "taxValues": null
            },
            {
                "id": "5f8857fc09608a00012270e0",
                "creationDate": 1602770941008,
                "updateDate": 1602770941008,
                "tenantId": null,
                "href": null,
                "name": "Ucraina",
                "multiplier": 10.0,
                "baseCatalog": false,
                "countrySearch": [
                    "UA"
                ],
                "countries": [
                    {
                        "id": "5139e686247e898c57138599",
                        "creationDate": 1612876552806,
                        "updateDate": 1612876552806,
                        "tenantId": null,
                        "href": null,
                        "euroZone": false,
                        "isoCode": "UA",
                        "iso3Code": "UKR",
                        "name": "UKRAINE",
                        "localeName": "Ukraine",
                        "region": "Europe",
                        "taxValue": 0.0,
                        "allowed": true,
                        "printableName": "Ukraine"
                    }
                ],
                "regions": null,
                "currency": {
                    "id": "55f9a3535f15ead1260c3547",
                    "creationDate": 1612876552807,
                    "updateDate": 1612876552807,
                    "tenantId": null,
                    "href": null,
                    "code": "RUB",
                    "decimalDigit": null,
                    "name": "Russian Ruble",
                    "namePlural": "Russian rubles",
                    "rounding": 0.0,
                    "symbol": "RUB",
                    "uiCode": "244",
                    "isoNumber": "643",
                    "symbolNative": "руб."
                },
                "taxValue": 100.0,
                "taxValues": null
            }
        ],
        "productCatalogMultipliers": {},
        "productCatalogPrices": {},
        "productCatalogScheduledPrices": {},
        "status": "AUTHORIZED",
        "slug": "piquadro-woman-000000000170",
        "customSlugs": null,
        "statusHistory": [
            {
                "status": "DRAFT",
                "date": 1602790642965
            },
            {
                "status": "AUTHORIZED",
                "date": 1602790644446
            }
        ],
        "names": {
            "it": {
                "locale": "it",
                "value": "ZIP-AROUND WOMEN'S WALLET"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": [
            "size",
            "color"
        ],
        "photoAttributes": [
            "color"
        ],
        "manufacturerCode": null,
        "warehouseArrayList": [],
        "width": 0.0,
        "height": 0.0,
        "weight": 0.0,
        "depth": 0.0,
        "parentId": null,
        "note": null,
        "story": null,
        "description": null,
        "attributeVariants": {},
        "bannerImage": null,
        "mpn": null,
        "unitPrice": null,
        "unitQuantity": 0,
        "madeIn": null,
        "taxes": null,
        "groupedProductInfo": null,
        "tagList": [],
        "notes": {
            "en": {
                "locale": "en",
                "value": "leather"
            },
            "it": {
                "locale": "it",
                "value": "pelle"
            }
        },
        "prices": {
            "sellingPrice": 78.0,
            "sellingPriceNoTax": -1.0,
            "finalSellingPriceNoTax": -1.0,
            "acquisitionPrice": 78.0,
            "acquisitionPriceNoTax": -1.0,
            "retailPrice": 120.0,
            "retailPriceNoTax": -1.0,
            "overriddenFinalPrice": null,
            "currencyCode": null,
            "currencySymbol": null,
            "discount": "35%",
            "strikedSellingPrice": -1.0,
            "salesDiscount": "0",
            "currency": {
                "id": "55f9a3535f15ead1260c34fe",
                "creationDate": 1612876552813,
                "updateDate": 1612876552813,
                "tenantId": null,
                "href": null,
                "code": "EUR",
                "decimalDigit": null,
                "name": "Euro",
                "namePlural": "euros",
                "rounding": 0.0,
                "symbol": "€",
                "uiCode": "242",
                "isoNumber": "978",
                "symbolNative": "€"
            },
            "finalSellingPrice": -1.0
        },
        "ranking": 0,
        "availabilityTotal": 0.0,
        "hasVariants": true,
        "errorList": [],
        "attributeList": [
            {
                "id": "5f886b4a09608a000122721d",
                "creationDate": 1602775882560,
                "updateDate": 1602775882144,
                "tenantId": null,
                "href": null,
                "attributeCode": "season",
                "departments": [
                    "fashion"
                ],
                "key": "fw20",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Fall-Winter 2020",
                    "attribute": null
                },
                "italian": {
                    "name": "Autunno-Inverno 2020",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            },
            {
                "id": "5f886b4d09608a0001227251",
                "creationDate": 1602775885870,
                "updateDate": 1602775885787,
                "tenantId": null,
                "href": null,
                "attributeCode": "storename",
                "departments": [
                    "fashion"
                ],
                "key": "piquadro",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Piquadro",
                    "attribute": null
                },
                "italian": {
                    "name": "Piquadro",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            },
            {
                "id": "5f886b4b09608a0001227238",
                "creationDate": 1602775883808,
                "updateDate": 1602775882993,
                "tenantId": null,
                "href": null,
                "attributeCode": "village",
                "departments": [
                    "fashion"
                ],
                "key": "mantova",
                "name": null,
                "active": false,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Mantova",
                    "attribute": null
                },
                "italian": {
                    "name": "Mantova",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            }
        ],
        "attributeGroupsView": null,
        "variantsGroup": null,
        "infoOtherCollections": null,
        "productVariant": false,
        "attributeDescription": null,
        "microCategory": {
            "id": "5f88a3a50a3f0d0001271333",
            "key": "scarpe-e-borse",
            "type": "CHILD",
            "gender": "female",
            "active": true,
            "imageList": null,
            "parentId": null,
            "parentFeed": null,
            "ranking": 0,
            "localeName": null,
            "english": {
                "url": "scarpe-e-borse",
                "name": "Shoes and Bags",
                "nav": null
            },
            "italian": {
                "url": "scarpe-e-borse",
                "name": "Scarpe e Borse",
                "nav": null
            },
            "parentKey": "donna",
            "declareVariants": null,
            "declareAttributes": null,
            "photoAttributes": null,
            "taxes": null,
            "products": null,
            "sizeScaleCode": null,
            "department": "fashion"
        },
        "macroCategory": {
            "id": "5f88a3a40a3f0d0001271331",
            "key": "woman",
            "type": "ROOT",
            "gender": "female",
            "active": true,
            "imageList": null,
            "parentId": null,
            "parentFeed": null,
            "ranking": 0,
            "localeName": null,
            "english": {
                "url": "donna",
                "name": "Woman",
                "nav": null
            },
            "italian": {
                "url": "donna",
                "name": "Donna",
                "nav": null
            },
            "parentKey": "fashion",
            "declareVariants": null,
            "declareAttributes": null,
            "photoAttributes": null,
            "taxes": null,
            "products": null,
            "sizeScaleCode": null,
            "department": null
        },
        "department": null,
        "pricesComparison": null
    }
}
```

##### <Badge text="error" type="warning"/>
- IOException <Badge text="IOException" type="error"/> - Hardware error
- InvalidUserException <Badge text="InvalidUserException" type="error"/> - user is not authenticated
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- ForbiddenException <Badge text="ForbiddenException" type="error"/> - User has no rights

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## deleteDocument <Badge text="deleteDocument" /> 
Method Detail for deleteDocument 


```
Method
RequestMethod.DELETE
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products//{id_p}/document-file/{id_t}"
``` 

```
Headers
X-Domain:{{X-DOMAIN}}
Content-Type:application/x-www-form-urlencoded
```

#### Payload
```
None
```

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| idProduct | String | unique identifier of product | True | PathVariable |
| documentFileName | String | Document file name to be deletet | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
curl --location --request DELETE 'http://localhost:8080/rest/picnik-rest/products/5f88a4f20a3f0d0001271635/document-file/5f88a4f20a3f0d0001271635' \
--header 'X-Domain: landoffashion' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: stentle=V2Q2QURleWsxQWhjYWZhNEx0QU1Sdz09OmNaa1hwc3ZJZ24yNjhBYlhpemp3SWc9PQ'
``` 

#### <Badge text="Returns" type="warning"/>
```
{
    "data": {
        "id": "5f88a4f20a3f0d0001271635",
        "creationDate": 1602790642965,
        "updateDate": 1602790644446,
        "tenantId": null,
        "href": null,
        "version": 10,
        "name": null,
        "descriptions": {
            "it": {
                "locale": "it",
                "value": "Zip-around women’s wallet with coin case, credit card slots and RFID anti-fraud protection"
            }
        },
        "erpCode": null,
        "brand": {
            "id": "5f7ee55c7c6ab2024549c4a1",
            "key": "piquadro",
            "name": "Piquadro",
            "shortDescription": null,
            "longDescription": null,
            "departments": [
                "fashion"
            ],
            "categories": null
        },
        "externalCode": null,
        "externalParentCode": null,
        "sku": "000000000170",
        "articleId": "MV-PD4826S108R",
        "customSkus": null,
        "attributes": {},
        "published": true,
        "publicationDate": 1602790800134,
        "productDescriptionCompleteness": false,
        "threshold": 0,
        "photoGallery": {
            "images": [
                {
                    "id": "6d40e1f7-bb52-4074-9dc6-7f9e2899936b",
                    "type": "cover",
                    "imageURL": "https://xxxxx.jpg",
                    "filename": null,
                    "active": true,
                    "sizeType": null,
                    "tag": null
                }
            ],
            "thumbnails": [],
            "sequence": 0,
            "allImages": [
                {
                    "id": "6d40e1f7-bb52-4074-9dc6-7f9e2899936b",
                    "type": "cover",
                    "imageURL": "https://xxxxx.jpg",
                    "filename": null,
                    "active": true,
                    "sizeType": null,
                    "tag": null
                }
            ]
        },
        "videoGallery": null,
        "documentArchive": {
            "added": null,
            "updated": null,
            "documents": [
                {
                    "id": null,
                    "type": null,
                    "description": null,
                    "documentUrl": "http://localhost:8080/rest/picnik-rest/products/5f88a4f20a3f0d0001271635/document-file/test-document-1",
                    "filename": "test-document-1",
                    "filenameFromSystem": "1.PNG",
                    "originalFileName": null
                }
            ]
        },
        "stories": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
            }
        },
        "loverList": [],
        "numberOfLovers": 0,
        "numberOfProductSaving": 0,
        "numberOfProductSharing": 0,
        "loved": false,
        "saved": false,
        "addedToCart": false,
        "purchasable": false,
        "hasCoverPhoto": true,
        "sales": null,
        "catalogList": [
            {
                "id": "5607f05658162efefd532b28",
                "creationDate": 1612876638851,
                "updateDate": 1445683662336,
                "tenantId": null,
                "href": null,
                "name": "base",
                "multiplier": 1.0,
                "baseCatalog": true,
                "countrySearch": [
                    "IT"
                ],
                "countries": [
                    {
                        "id": "5139e686247e898c57138523",
                        "creationDate": 1612876638852,
                        "updateDate": 1612876638852,
                        "tenantId": null,
                        "href": null,
                        "euroZone": true,
                        "isoCode": "IT",
                        "iso3Code": "ITA",
                        "name": "ITALY",
                        "localeName": "Italy",
                        "region": "Europe",
                        "taxValue": 0.0,
                        "allowed": true,
                        "printableName": "Italy"
                    }
                ],
                "regions": null,
                "currency": {
                    "id": "55f9a3535f15ead1260c34fe",
                    "creationDate": 1612876638853,
                    "updateDate": 1612876638853,
                    "tenantId": null,
                    "href": null,
                    "code": "EUR",
                    "decimalDigit": null,
                    "name": "Euro",
                    "namePlural": "euros",
                    "rounding": 0.0,
                    "symbol": "€",
                    "uiCode": "242",
                    "isoNumber": "978",
                    "symbolNative": "€"
                },
                "taxValue": 22.0,
                "taxValues": null
            },
            {
                "id": "5f8848aef6cc1b58e588fee5",
                "creationDate": 1612876638853,
                "updateDate": 1450515163233,
                "tenantId": null,
                "href": null,
                "name": "Europe",
                "multiplier": 1.1,
                "baseCatalog": false,
                "countrySearch": [],
                "countries": null,
                "regions": [
                    "Europe"
                ],
                "currency": {
                    "id": "55f9a3535f15ead1260c34fe",
                    "creationDate": 1612876638854,
                    "updateDate": 1612876638854,
                    "tenantId": null,
                    "href": null,
                    "code": "EUR",
                    "decimalDigit": null,
                    "name": "Euro",
                    "namePlural": "euros",
                    "rounding": 0.0,
                    "symbol": "€",
                    "uiCode": "242",
                    "isoNumber": "978",
                    "symbolNative": "€"
                },
                "taxValue": 0.0,
                "taxValues": null
            },
            {
                "id": "5f8857fc09608a00012270e0",
                "creationDate": 1602770941008,
                "updateDate": 1602770941008,
                "tenantId": null,
                "href": null,
                "name": "Ucraina",
                "multiplier": 10.0,
                "baseCatalog": false,
                "countrySearch": [
                    "UA"
                ],
                "countries": [
                    {
                        "id": "5139e686247e898c57138599",
                        "creationDate": 1612876638855,
                        "updateDate": 1612876638855,
                        "tenantId": null,
                        "href": null,
                        "euroZone": false,
                        "isoCode": "UA",
                        "iso3Code": "UKR",
                        "name": "UKRAINE",
                        "localeName": "Ukraine",
                        "region": "Europe",
                        "taxValue": 0.0,
                        "allowed": true,
                        "printableName": "Ukraine"
                    }
                ],
                "regions": null,
                "currency": {
                    "id": "55f9a3535f15ead1260c3547",
                    "creationDate": 1612876638856,
                    "updateDate": 1612876638856,
                    "tenantId": null,
                    "href": null,
                    "code": "RUB",
                    "decimalDigit": null,
                    "name": "Russian Ruble",
                    "namePlural": "Russian rubles",
                    "rounding": 0.0,
                    "symbol": "RUB",
                    "uiCode": "244",
                    "isoNumber": "643",
                    "symbolNative": "руб."
                },
                "taxValue": 100.0,
                "taxValues": null
            }
        ],
        "productCatalogMultipliers": {},
        "productCatalogPrices": {},
        "productCatalogScheduledPrices": {},
        "status": "AUTHORIZED",
        "slug": "piquadro-woman-000000000170",
        "customSlugs": null,
        "statusHistory": [
            {
                "status": "DRAFT",
                "date": 1602790642965
            },
            {
                "status": "AUTHORIZED",
                "date": 1602790644446
            }
        ],
        "names": {
            "it": {
                "locale": "it",
                "value": "ZIP-AROUND WOMEN'S WALLET"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": [
            "size",
            "color"
        ],
        "photoAttributes": [
            "color"
        ],
        "manufacturerCode": null,
        "warehouseArrayList": [],
        "width": 0.0,
        "height": 0.0,
        "weight": 0.0,
        "depth": 0.0,
        "parentId": null,
        "note": null,
        "story": null,
        "description": null,
        "attributeVariants": {},
        "bannerImage": null,
        "mpn": null,
        "unitPrice": null,
        "unitQuantity": 0,
        "madeIn": null,
        "taxes": null,
        "groupedProductInfo": null,
        "tagList": [],
        "notes": {
            "en": {
                "locale": "en",
                "value": "leather"
            },
            "it": {
                "locale": "it",
                "value": "pelle"
            }
        },
        "prices": {
            "sellingPrice": 78.0,
            "sellingPriceNoTax": -1.0,
            "finalSellingPriceNoTax": -1.0,
            "acquisitionPrice": 78.0,
            "acquisitionPriceNoTax": -1.0,
            "retailPrice": 120.0,
            "retailPriceNoTax": -1.0,
            "overriddenFinalPrice": null,
            "currencyCode": null,
            "currencySymbol": null,
            "discount": "35%",
            "strikedSellingPrice": -1.0,
            "salesDiscount": "0",
            "currency": {
                "id": "55f9a3535f15ead1260c34fe",
                "creationDate": 1612876638860,
                "updateDate": 1612876638860,
                "tenantId": null,
                "href": null,
                "code": "EUR",
                "decimalDigit": null,
                "name": "Euro",
                "namePlural": "euros",
                "rounding": 0.0,
                "symbol": "€",
                "uiCode": "242",
                "isoNumber": "978",
                "symbolNative": "€"
            },
            "finalSellingPrice": -1.0
        },
        "ranking": 0,
        "availabilityTotal": 0.0,
        "hasVariants": true,
        "errorList": [],
        "attributeList": [
            {
                "id": "5f886b4a09608a000122721d",
                "creationDate": 1602775882560,
                "updateDate": 1602775882144,
                "tenantId": null,
                "href": null,
                "attributeCode": "season",
                "departments": [
                    "fashion"
                ],
                "key": "fw20",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Fall-Winter 2020",
                    "attribute": null
                },
                "italian": {
                    "name": "Autunno-Inverno 2020",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            },
            {
                "id": "5f886b4d09608a0001227251",
                "creationDate": 1602775885870,
                "updateDate": 1602775885787,
                "tenantId": null,
                "href": null,
                "attributeCode": "storename",
                "departments": [
                    "fashion"
                ],
                "key": "piquadro",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Piquadro",
                    "attribute": null
                },
                "italian": {
                    "name": "Piquadro",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            },
            {
                "id": "5f886b4b09608a0001227238",
                "creationDate": 1602775883808,
                "updateDate": 1602775882993,
                "tenantId": null,
                "href": null,
                "attributeCode": "village",
                "departments": [
                    "fashion"
                ],
                "key": "mantova",
                "name": null,
                "active": false,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Mantova",
                    "attribute": null
                },
                "italian": {
                    "name": "Mantova",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            }
        ],
        "attributeGroupsView": null,
        "variantsGroup": null,
        "infoOtherCollections": null,
        "productVariant": false,
        "attributeDescription": null,
        "microCategory": {
            "id": "5f88a3a50a3f0d0001271333",
            "key": "scarpe-e-borse",
            "type": "CHILD",
            "gender": "female",
            "active": true,
            "imageList": null,
            "parentId": null,
            "parentFeed": null,
            "ranking": 0,
            "localeName": null,
            "english": {
                "url": "scarpe-e-borse",
                "name": "Shoes and Bags",
                "nav": null
            },
            "italian": {
                "url": "scarpe-e-borse",
                "name": "Scarpe e Borse",
                "nav": null
            },
            "parentKey": "donna",
            "declareVariants": null,
            "declareAttributes": null,
            "photoAttributes": null,
            "taxes": null,
            "products": null,
            "sizeScaleCode": null,
            "department": "fashion"
        },
        "macroCategory": {
            "id": "5f88a3a40a3f0d0001271331",
            "key": "woman",
            "type": "ROOT",
            "gender": "female",
            "active": true,
            "imageList": null,
            "parentId": null,
            "parentFeed": null,
            "ranking": 0,
            "localeName": null,
            "english": {
                "url": "donna",
                "name": "Woman",
                "nav": null
            },
            "italian": {
                "url": "donna",
                "name": "Donna",
                "nav": null
            },
            "parentKey": "fashion",
            "declareVariants": null,
            "declareAttributes": null,
            "photoAttributes": null,
            "taxes": null,
            "products": null,
            "sizeScaleCode": null,
            "department": null
        },
        "department": null,
        "pricesComparison": null
    }
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## getProductCoverPhoto <Badge text="getProductCoverPhoto" /> 
Method Detail for getProductCoverPhoto 


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/product-cover-photo"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| idProduct | String | unique identifier of product | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 



#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- Exception <Badge text="Exception" type="error"/> - General Exception

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## getVariantCoverPhoto <Badge text="getVariantCoverPhoto" /> 
Method Detail for getVariantCoverPhoto 


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variants/{id_v}/variant-cover-photo"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| idProduct | String | unique identifier of product | True | PathVariable |
| id_v | String | unique identifier of variant | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 



#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- Exception <Badge text="Exception" type="error"/> - General Exception

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------



## authorizeProduct <Badge text="authorizeProduct" /> 
Method Detail for authorizeProduct 

```
Method
RequestMethod.PUT
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/authorize/{authorizationStatus}"
``` 

```
Headers
Content-Type:application/json
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}} 
```

#### Payload
```
{"productId":"{{PRODUCT_ID}}"}
```

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of product | True | PathVariable |
| authorizationStatus | boolean | status | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
curl --location --request PUT 'http://localhost:8080/rest/picnik-rest/products/5f88a4f20a3f0d0001271635/authorize/true' \
--header 'Content-Type: application/json' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Cookie: stentle=V2Q2QURleWsxQWhjYWZhNEx0QU1Sdz09OmNaa1hwc3ZJZ24yNjhBYlhpemp3SWc9PQ' \
--data-raw '{"productId":"59e0cb773cdea200013ffed7"}'
``` 

#### <Badge text="Returns" type="warning"/>
```
{
    "data": {
        "id": "5f88a4f20a3f0d0001271635",
        "creationDate": 1602790642965,
        "updateDate": 1602790644446,
        "tenantId": null,
        "href": null,
        "version": 8,
        "name": "ZIP-AROUND WOMEN'S WALLET",
        "descriptions": {
            "it": {
                "locale": "it",
                "value": "Zip-around women’s wallet with coin case, credit card slots and RFID anti-fraud protection"
            }
        },
        "erpCode": null,
        "brand": {
            "id": "5f7ee55c7c6ab2024549c4a1",
            "key": "piquadro",
            "name": "Piquadro",
            "shortDescription": null,
            "longDescription": null,
            "departments": [
                "fashion"
            ],
            "categories": null
        },
        "externalCode": null,
        "externalParentCode": null,
        "sku": "000000000170",
        "articleId": "MV-PD4826S108R",
        "customSkus": null,
        "attributes": {},
        "published": true,
        "publicationDate": 1602790800134,
        "productDescriptionCompleteness": false,
        "threshold": 0,
        "photoGallery": {
            "images": [
                {
                    "id": "6d40e1f7-bb52-4074-9dc6-7f9e2899936b",
                    "type": "cover",
                    "imageURL": "https://xxxxx.jpg",
                    "filename": null,
                    "active": true,
                    "sizeType": null,
                    "tag": null
                }
            ],
            "thumbnails": [],
            "sequence": 0,
            "allImages": [
                {
                    "id": "6d40e1f7-bb52-4074-9dc6-7f9e2899936b",
                    "type": "cover",
                    "imageURL": "https://xxxxx.jpg",
                    "filename": null,
                    "active": true,
                    "sizeType": null,
                    "tag": null
                }
            ]
        },
        "videoGallery": null,
        "documentArchive": null,
        "stories": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
            }
        },
        "loverList": [],
        "numberOfLovers": 0,
        "numberOfProductSaving": 0,
        "numberOfProductSharing": 0,
        "loved": false,
        "saved": false,
        "addedToCart": false,
        "purchasable": false,
        "hasCoverPhoto": true,
        "sales": null,
        "catalogList": [
            {
                "id": "5607f05658162efefd532b28",
                "creationDate": 1612876339143,
                "updateDate": 1445683662336,
                "tenantId": null,
                "href": null,
                "name": "base",
                "multiplier": 1.0,
                "baseCatalog": true,
                "countrySearch": [
                    "IT"
                ],
                "countries": [
                    {
                        "id": "5139e686247e898c57138523",
                        "creationDate": 1612876339144,
                        "updateDate": 1612876339144,
                        "tenantId": null,
                        "href": null,
                        "euroZone": true,
                        "isoCode": "IT",
                        "iso3Code": "ITA",
                        "name": "ITALY",
                        "localeName": "Italy",
                        "region": "Europe",
                        "taxValue": 0.0,
                        "allowed": true,
                        "printableName": "Italy"
                    }
                ],
                "regions": null,
                "currency": {
                    "id": "55f9a3535f15ead1260c34fe",
                    "creationDate": 1612876339146,
                    "updateDate": 1612876339146,
                    "tenantId": null,
                    "href": null,
                    "code": "EUR",
                    "decimalDigit": null,
                    "name": "Euro",
                    "namePlural": "euros",
                    "rounding": 0.0,
                    "symbol": "€",
                    "uiCode": "242",
                    "isoNumber": "978",
                    "symbolNative": "€"
                },
                "taxValue": 22.0,
                "taxValues": null
            },
            {
                "id": "5f8848aef6cc1b58e588fee5",
                "creationDate": 1612876339146,
                "updateDate": 1450515163233,
                "tenantId": null,
                "href": null,
                "name": "Europe",
                "multiplier": 1.1,
                "baseCatalog": false,
                "countrySearch": [],
                "countries": null,
                "regions": [
                    "Europe"
                ],
                "currency": {
                    "id": "55f9a3535f15ead1260c34fe",
                    "creationDate": 1612876339148,
                    "updateDate": 1612876339148,
                    "tenantId": null,
                    "href": null,
                    "code": "EUR",
                    "decimalDigit": null,
                    "name": "Euro",
                    "namePlural": "euros",
                    "rounding": 0.0,
                    "symbol": "€",
                    "uiCode": "242",
                    "isoNumber": "978",
                    "symbolNative": "€"
                },
                "taxValue": 0.0,
                "taxValues": null
            },
            {
                "id": "5f8857fc09608a00012270e0",
                "creationDate": 1602770941008,
                "updateDate": 1602770941008,
                "tenantId": null,
                "href": null,
                "name": "Ucraina",
                "multiplier": 10.0,
                "baseCatalog": false,
                "countrySearch": [
                    "UA"
                ],
                "countries": [
                    {
                        "id": "5139e686247e898c57138599",
                        "creationDate": 1612876339150,
                        "updateDate": 1612876339150,
                        "tenantId": null,
                        "href": null,
                        "euroZone": false,
                        "isoCode": "UA",
                        "iso3Code": "UKR",
                        "name": "UKRAINE",
                        "localeName": "Ukraine",
                        "region": "Europe",
                        "taxValue": 0.0,
                        "allowed": true,
                        "printableName": "Ukraine"
                    }
                ],
                "regions": null,
                "currency": {
                    "id": "55f9a3535f15ead1260c3547",
                    "creationDate": 1612876339153,
                    "updateDate": 1612876339153,
                    "tenantId": null,
                    "href": null,
                    "code": "RUB",
                    "decimalDigit": null,
                    "name": "Russian Ruble",
                    "namePlural": "Russian rubles",
                    "rounding": 0.0,
                    "symbol": "RUB",
                    "uiCode": "244",
                    "isoNumber": "643",
                    "symbolNative": "руб."
                },
                "taxValue": 100.0,
                "taxValues": null
            }
        ],
        "productCatalogMultipliers": {},
        "productCatalogPrices": {},
        "productCatalogScheduledPrices": {},
        "status": "AUTHORIZED",
        "slug": "piquadro-woman-000000000170",
        "customSlugs": null,
        "statusHistory": [
            {
                "status": "DRAFT",
                "date": 1602790642965
            },
            {
                "status": "AUTHORIZED",
                "date": 1602790644446
            }
        ],
        "names": {
            "it": {
                "locale": "it",
                "value": "ZIP-AROUND WOMEN'S WALLET"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": [
            "size",
            "color"
        ],
        "photoAttributes": [
            "color"
        ],
        "manufacturerCode": null,
        "warehouseArrayList": [],
        "width": 0.0,
        "height": 0.0,
        "weight": 0.0,
        "depth": 0.0,
        "parentId": "5f88a4f20a3f0d0001271635",
        "note": "pelle",
        "story": "",
        "description": "Zip-around women’s wallet with coin case, credit card slots and RFID anti-fraud protection",
        "attributeVariants": {},
        "bannerImage": null,
        "mpn": null,
        "unitPrice": null,
        "unitQuantity": 0,
        "madeIn": null,
        "taxes": null,
        "groupedProductInfo": null,
        "tagList": [],
        "notes": {
            "en": {
                "locale": "en",
                "value": "leather"
            },
            "it": {
                "locale": "it",
                "value": "pelle"
            }
        },
        "prices": {
            "sellingPrice": 78.0,
            "sellingPriceNoTax": 63.93,
            "finalSellingPriceNoTax": 63.93,
            "acquisitionPrice": 78.0,
            "acquisitionPriceNoTax": -1.0,
            "retailPrice": 120.0,
            "retailPriceNoTax": 98.36,
            "overriddenFinalPrice": null,
            "currencyCode": "EUR",
            "currencySymbol": "€",
            "discount": "35%",
            "strikedSellingPrice": -1.0,
            "salesDiscount": "0",
            "currency": {
                "id": "55f9a3535f15ead1260c34fe",
                "creationDate": 1612876339316,
                "updateDate": 1612876339316,
                "tenantId": null,
                "href": null,
                "code": "EUR",
                "decimalDigit": null,
                "name": "Euro",
                "namePlural": "euros",
                "rounding": 0.0,
                "symbol": "€",
                "uiCode": "242",
                "isoNumber": "978",
                "symbolNative": "€"
            },
            "finalSellingPrice": 78.0
        },
        "ranking": 0,
        "availabilityTotal": 0.0,
        "hasVariants": true,
        "errorList": [],
        "attributeList": [
            {
                "id": "5f886b4a09608a000122721d",
                "creationDate": 1602775882560,
                "updateDate": 1602775882144,
                "tenantId": null,
                "href": null,
                "attributeCode": "season",
                "departments": [
                    "fashion"
                ],
                "key": "fw20",
                "name": null,
                "active": true,
                "attributeLocaleName": "season",
                "localeName": "Autunno-Inverno 2020",
                "english": {
                    "name": "Fall-Winter 2020",
                    "attribute": null
                },
                "italian": {
                    "name": "Autunno-Inverno 2020",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            },
            {
                "id": "5f886b4d09608a0001227251",
                "creationDate": 1602775885870,
                "updateDate": 1602775885787,
                "tenantId": null,
                "href": null,
                "attributeCode": "storename",
                "departments": [
                    "fashion"
                ],
                "key": "piquadro",
                "name": null,
                "active": true,
                "attributeLocaleName": "storename",
                "localeName": "Piquadro",
                "english": {
                    "name": "Piquadro",
                    "attribute": null
                },
                "italian": {
                    "name": "Piquadro",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            },
            {
                "id": "5f886b4b09608a0001227238",
                "creationDate": 1602775883808,
                "updateDate": 1602775882993,
                "tenantId": null,
                "href": null,
                "attributeCode": "village",
                "departments": [
                    "fashion"
                ],
                "key": "mantova",
                "name": null,
                "active": false,
                "attributeLocaleName": "village",
                "localeName": "Mantova",
                "english": {
                    "name": "Mantova",
                    "attribute": null
                },
                "italian": {
                    "name": "Mantova",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            }
        ],
        "attributeGroupsView": [
            {
                "id": "564f33ebfa4d0e5ce8303112",
                "creationDate": 1612876339245,
                "updateDate": 1448031211360,
                "tenantId": null,
                "href": null,
                "key": "base-group",
                "localeTitle": "Gruppo Base",
                "titles": {
                    "en": {
                        "locale": "en",
                        "value": "Base Group"
                    },
                    "it": {
                        "locale": "it",
                        "value": "Gruppo Base"
                    }
                },
                "defaultValue": true,
                "attributeList": [],
                "attributeListView": [
                    {
                        "id": "5f886b4a09608a000122721d",
                        "creationDate": 1602775882560,
                        "updateDate": 1602775882144,
                        "tenantId": null,
                        "href": null,
                        "attributeCode": "season",
                        "departments": [
                            "fashion"
                        ],
                        "key": "fw20",
                        "name": null,
                        "active": true,
                        "attributeLocaleName": "season",
                        "localeName": "Autunno-Inverno 2020",
                        "english": {
                            "name": "Fall-Winter 2020",
                            "attribute": null
                        },
                        "italian": {
                            "name": "Autunno-Inverno 2020",
                            "attribute": null
                        },
                        "russian": {
                            "name": null,
                            "attribute": null
                        },
                        "french": {
                            "name": null,
                            "attribute": null
                        }
                    },
                    {
                        "id": "5f886b4d09608a0001227251",
                        "creationDate": 1602775885870,
                        "updateDate": 1602775885787,
                        "tenantId": null,
                        "href": null,
                        "attributeCode": "storename",
                        "departments": [
                            "fashion"
                        ],
                        "key": "piquadro",
                        "name": null,
                        "active": true,
                        "attributeLocaleName": "storename",
                        "localeName": "Piquadro",
                        "english": {
                            "name": "Piquadro",
                            "attribute": null
                        },
                        "italian": {
                            "name": "Piquadro",
                            "attribute": null
                        },
                        "russian": {
                            "name": null,
                            "attribute": null
                        },
                        "french": {
                            "name": null,
                            "attribute": null
                        }
                    },
                    {
                        "id": "5f886b4b09608a0001227238",
                        "creationDate": 1602775883808,
                        "updateDate": 1602775882993,
                        "tenantId": null,
                        "href": null,
                        "attributeCode": "village",
                        "departments": [
                            "fashion"
                        ],
                        "key": "mantova",
                        "name": null,
                        "active": false,
                        "attributeLocaleName": "village",
                        "localeName": "Mantova",
                        "english": {
                            "name": "Mantova",
                            "attribute": null
                        },
                        "italian": {
                            "name": "Mantova",
                            "attribute": null
                        },
                        "russian": {
                            "name": null,
                            "attribute": null
                        },
                        "french": {
                            "name": null,
                            "attribute": null
                        }
                    }
                ],
                "sequence": 4
            }
        ],
        "variantsGroup": null,
        "infoOtherCollections": null,
        "productVariant": false,
        "attributeDescription": null,
        "microCategory": {
            "id": "5f88a3a50a3f0d0001271333",
            "key": "scarpe-e-borse",
            "type": "CHILD",
            "gender": "female",
            "active": true,
            "imageList": null,
            "parentId": null,
            "parentFeed": null,
            "ranking": 0,
            "localeName": "Scarpe e Borse",
            "english": {
                "url": "scarpe-e-borse",
                "name": "Shoes and Bags",
                "nav": null
            },
            "italian": {
                "url": "scarpe-e-borse",
                "name": "Scarpe e Borse",
                "nav": null
            },
            "parentKey": "donna",
            "declareVariants": null,
            "declareAttributes": null,
            "photoAttributes": null,
            "taxes": null,
            "products": null,
            "sizeScaleCode": null,
            "department": "fashion"
        },
        "macroCategory": {
            "id": "5f88a3a40a3f0d0001271331",
            "key": "woman",
            "type": "ROOT",
            "gender": "female",
            "active": true,
            "imageList": null,
            "parentId": null,
            "parentFeed": null,
            "ranking": 0,
            "localeName": "Donna",
            "english": {
                "url": "donna",
                "name": "Woman",
                "nav": null
            },
            "italian": {
                "url": "donna",
                "name": "Donna",
                "nav": null
            },
            "parentKey": "fashion",
            "declareVariants": null,
            "declareAttributes": null,
            "photoAttributes": null,
            "taxes": null,
            "products": null,
            "sizeScaleCode": null,
            "department": null
        },
        "department": null,
        "pricesComparison": null
    }
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found 
- ResourceUpdateException <Badge text="ResourceUpdateException" type="error"/> -  Error during the update of the resource

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------




## getMicroCategory <Badge text="getMicroCategory" /> 
Method Detail for getMicroCategory 

```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/micro-category-list"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| parentKey | String | microcategory parent | True | PathVariable |
| context | String | context | False | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------



## getAttributeList <Badge text="getAttributeList" /> 
Method Detail for getAttributeList 

```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/attribute-list"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| macroCategoryKey | String | macrocategory identifier | True | PathVariable |
| microCategoryKey | String | microcategory identifier | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------

## getSizes <Badge text="getSizes" /> 
Method Detail for getSizes 

```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/sizes"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| productCategory | String | category identifier | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## getSizeScaleCodes <Badge text="getSizeScaleCodes" /> 
Method Detail for getSizeScaleCodes 

```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/size-scale-codes"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 

#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- None

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## getProductComments <Badge text="getProductComments" /> 
Method Detail for getProductComments 

```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/comments"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of product | True | PathVariable |
| pageNumber | Integer | in case the information is required paginated | False | PathVariable |
| limit | Integer | limit of entities per page in case the information is required paginated | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- InvalidUserException <Badge text="InvalidUserException" type="error"/> - user is not authenticated

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------



## getProductCommentById <Badge text="getProductCommentById" /> 
Method Detail for getProductCommentById 

```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/{id_p}/comments/{id_c}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of product | True | PathVariable |
| id_c | String | unique identifier of comment | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- InvalidUserException <Badge text="InvalidUserException" type="error"/> - user is not authenticated

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## deleteProductCommentById <Badge text="deleteProductCommentById" /> 
Method Detail for deleteProductCommentById 

```
Method
RequestMethod.DELETE
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/{id_p}/comments/{id_c}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of product | True | PathVariable |
| id_c | String | unique identifier of comment | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------



## createProductComment <Badge text="createProductComment" /> 
Method Detail for createProductComment 

```
Method
RequestMethod.POST
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/{id_p}/comments"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of product | True | PathVariable |
| comment | String |  comment | True | RequestBody |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## getProductVariants <Badge text="getProductVariants" /> 
Method Detail for getProductVariants 

```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variants"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of product | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------



## getProductVariantById <Badge text="getProductVariantById" /> 
Method Detail for getProductVariantById 

```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variants/{variantId}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| variantId | String | unique identifier of Variant | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## createProductVariant <Badge text="createProductVariant" /> 
Method Detail for createProductVariant 

```
Method
RequestMethod.PUT
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variants"
``` 

```
Headers
Content-Type:application/json
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
```

#### Payload
``` 
{
    "attributeVariants": {
        "color": {
            "attributeCode": "color",
            "key": "azure-blue",
            "id": "526686809c21bff9f8f262d7"
        },
        "size": "43",
        "sizeScale": "IT",
        "sizeSearch" : {
            "id" : "50b5f4e50095b7dd66063716"
      }
    },
    "depth": 0,
    "erpCode": null,
    "height": 0,
    "manufacturerCode": null,
    "prices": {
        "retailPrice": 100,
        "sellingPrice": 90
    },
    "threshold": 0,
    "weight": 0,
    "width": 0
}
``` 

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of product | True | PathVariable |
| variant | Variant | Variant object with the data to be updated | True | RequestBody |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
curl --location --request POST 'http://localhost:8080/rest/picnik-rest/products/5f88a4f20a3f0d0001271635/variants' \
--header 'Content-Type: application/json' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Cookie: stentle=V2Q2QURleWsxQWhjYWZhNEx0QU1Sdz09OmNaa1hwc3ZJZ24yNjhBYlhpemp3SWc9PQ' \
--data-raw '{
    "attributeVariants": {
        "color": {
            "attributeCode": "color",
            "key": "azure-blue",
            "id": "526686809c21bff9f8f262d7"
        },
        "size": "43",
        "sizeScale": "IT",
        "sizeSearch" : {
            "id" : "50b5f4e50095b7dd66063716"
      }
    },
    "depth": 0,
    "erpCode": null,
    "height": 0,
    "manufacturerCode": null,
    "prices": {
        "retailPrice": 100,
        "sellingPrice": 90
    },
    "threshold": 0,
    "weight": 0,
    "width": 0
}'
``` 

#### <Badge text="Returns" type="warning"/>
```
{
    "data": {
        "id": "6022939cb3cb1f00013b9021",
        "creationDate": 1612878748582,
        "updateDate": 1612878749633,
        "version": 3,
        "sku": "000000000170-2",
        "attributes": {},
        "published": false,
        "productDescriptionCompleteness": false,
        "threshold": 0,
        "numberOfLovers": 0,
        "numberOfProductSaving": 0,
        "numberOfProductSharing": 0,
        "loved": false,
        "saved": false,
        "addedToCart": false,
        "purchasable": false,
        "hasCoverPhoto": false,
        "catalogList": [],
        "productCatalogMultipliers": {},
        "productCatalogPrices": {},
        "productCatalogScheduledPrices": {},
        "status": "AUTHORIZED",
        "statusHistory": [
            {
                "status": "",
                "date": 1612878748610
            },
            {
                "status": "CREATED",
                "date": 1612878748610
            },
            {
                "status": "AUTHORIZED",
                "date": 1612878748880
            }
        ],
        "names": {
            "it": {
                "locale": "it",
                "value": "ZIP-AROUND WOMEN'S WALLET"
            }
        },
        "numberOfComments": 0,
        "warehouseArrayList": [],
        "width": 0.0,
        "height": 0.0,
        "weight": 0.0,
        "depth": 0.0,
        "attributeVariants": {
            "sizeScale": "IT",
            "size": "43",
            "color": null
        },
        "unitQuantity": 0,
        "prices": {
            "sellingPrice": 90.0,
            "sellingPriceNoTax": -1.0,
            "finalSellingPriceNoTax": -1.0,
            "acquisitionPrice": -1.0,
            "acquisitionPriceNoTax": -1.0,
            "retailPrice": 100.0,
            "retailPriceNoTax": -1.0,
            "overriddenFinalPrice": null,
            "currencyCode": null,
            "currencySymbol": null,
            "discount": "10%",
            "strikedSellingPrice": -1.0,
            "salesDiscount": "0",
            "currency": {
                "id": "55f9a3535f15ead1260c34fe",
                "creationDate": 1612878749630,
                "updateDate": 1612878749630,
                "tenantId": null,
                "href": null,
                "code": "EUR",
                "decimalDigit": null,
                "name": "Euro",
                "namePlural": "euros",
                "rounding": 0.0,
                "symbol": "€",
                "uiCode": "242",
                "isoNumber": "978",
                "symbolNative": "€"
            },
            "finalSellingPrice": -1.0
        },
        "ranking": 0,
        "availabilityTotal": 0.0,
        "productId": "5f88a4f20a3f0d0001271635"
    }
}
```

##### <Badge text="error" type="warning"/>
- ResourceCreationException <Badge text="ResourceCreationException" type="error"/> - Error during the creation of resource
- VariantAlreadyAddedException <Badge text="VariantAlreadyAddedException" type="error"/> - Error during the variant creation (it already exists)
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------



## updateVariant <Badge text="updateVariant" /> 
Method Detail for updateVariant 

```
Method
RequestMethod.PUT
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variants/{id_v}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of product | True | PathVariable |
| id_v | String | unique identifier of variant | True | PathVariable |
| updatedVariant | Variant | Variant object with the data to be updated | True | RequestBody |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- VariantAlreadyAddedException <Badge text="VariantAlreadyAddedException" type="error"/> -  Error during the variant creation (it already exists)
- InvalidUserException <Badge text="InvalidUserException" type="error"/> - user is not authenticated
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- ForbiddenException <Badge text="ForbiddenException" type="error"/> - User has no rights

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## deleteProduct <Badge text="deleteProduct" /> 
Method Detail for deleteProduct 

```
Method
RequestMethod.DELETE
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| idProduct | String | unique identifier of product | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- ResourceDeleteException <Badge text="ResourceDeleteException" type="error"/> - Error cannot delete the resource

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## deleteVariant <Badge text="deleteVariant" /> 
Method Detail for deleteVariant 

```
Method
RequestMethod.DELETE
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variants/{id_v}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| idProduct | String | unique identifier of product | True | PathVariable |
| idVariant | String | unique identifier of variant | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceDeleteException <Badge text="ResourceDeleteException" type="error"/> - Error cannot delete the resource
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## publishProduct <Badge text="publishProduct" /> 
Method Detail for publishProduct 

```
Method
RequestMethod.PUT
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/publish/{publicationStatus}"
``` 

```
Headers
Content-Type:application/json
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
```

#### Payload
```
{"productId":"{{PRODUCT_ID}}"}
```

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| idProduct | String | unique identifier of product | True | PathVariable |
| publicationStatus | boolean | status to be updatet | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
curl --location --request PUT 'http://localhost:8080/rest/picnik-rest/products/5f88a4f20a3f0d0001271635/publish/true' \
--header 'Content-Type: application/json' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Cookie: stentle=V2Q2QURleWsxQWhjYWZhNEx0QU1Sdz09OmNaa1hwc3ZJZ24yNjhBYlhpemp3SWc9PQ' \
--data-raw '{"productId":"{{PRODUCT_ID}}"}'
``` 

#### <Badge text="Returns" type="warning"/>
```
{
    "data": {
        "id": "5f88a4f20a3f0d0001271635",
        "creationDate": 1602790642965,
        "updateDate": 1602790644446,
        "tenantId": null,
        "href": null,
        "version": 11,
        "name": null,
        "descriptions": {
            "it": {
                "locale": "it",
                "value": "Zip-around women’s wallet with coin case, credit card slots and RFID anti-fraud protection"
            }
        },
        "erpCode": null,
        "brand": {
            "id": "5f7ee55c7c6ab2024549c4a1",
            "key": "piquadro",
            "name": "Piquadro",
            "shortDescription": null,
            "longDescription": null,
            "departments": [
                "fashion"
            ],
            "categories": null
        },
        "externalCode": null,
        "externalParentCode": null,
        "sku": "000000000170",
        "articleId": "MV-PD4826S108R",
        "customSkus": null,
        "attributes": {},
        "published": true,
        "publicationDate": 1602790800134,
        "productDescriptionCompleteness": false,
        "threshold": 0,
        "photoGallery": {
            "images": [
                {
                    "id": "6d40e1f7-bb52-4074-9dc6-7f9e2899936b",
                    "type": "cover",
                    "imageURL": "https://xxxxx.jpg",
                    "filename": null,
                    "active": true,
                    "sizeType": null,
                    "tag": null
                }
            ],
            "thumbnails": [],
            "sequence": 0,
            "allImages": [
                {
                    "id": "6d40e1f7-bb52-4074-9dc6-7f9e2899936b",
                    "type": "cover",
                    "imageURL": "https://xxxxx.jpg",
                    "filename": null,
                    "active": true,
                    "sizeType": null,
                    "tag": null
                }
            ]
        },
        "videoGallery": null,
        "documentArchive": {
            "added": null,
            "updated": null,
            "documents": [
                {
                    "id": null,
                    "type": null,
                    "description": null,
                    "documentUrl": "http://localhost:8080/rest/picnik-rest/products/5f88a4f20a3f0d0001271635/document-file/test-document-1",
                    "filename": "test-document-1",
                    "filenameFromSystem": "1.PNG",
                    "originalFileName": null
                }
            ]
        },
        "stories": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
            }
        },
        "loverList": [],
        "numberOfLovers": 0,
        "numberOfProductSaving": 0,
        "numberOfProductSharing": 0,
        "loved": false,
        "saved": false,
        "addedToCart": false,
        "purchasable": false,
        "hasCoverPhoto": true,
        "sales": null,
        "catalogList": [
            {
                "id": "5607f05658162efefd532b28",
                "creationDate": 1612877903082,
                "updateDate": 1445683662336,
                "tenantId": null,
                "href": null,
                "name": "base",
                "multiplier": 1.0,
                "baseCatalog": true,
                "countrySearch": [
                    "IT"
                ],
                "countries": [
                    {
                        "id": "5139e686247e898c57138523",
                        "creationDate": 1612877903083,
                        "updateDate": 1612877903083,
                        "tenantId": null,
                        "href": null,
                        "euroZone": true,
                        "isoCode": "IT",
                        "iso3Code": "ITA",
                        "name": "ITALY",
                        "localeName": "Italy",
                        "region": "Europe",
                        "taxValue": 0.0,
                        "allowed": true,
                        "printableName": "Italy"
                    }
                ],
                "regions": null,
                "currency": {
                    "id": "55f9a3535f15ead1260c34fe",
                    "creationDate": 1612877903084,
                    "updateDate": 1612877903085,
                    "tenantId": null,
                    "href": null,
                    "code": "EUR",
                    "decimalDigit": null,
                    "name": "Euro",
                    "namePlural": "euros",
                    "rounding": 0.0,
                    "symbol": "€",
                    "uiCode": "242",
                    "isoNumber": "978",
                    "symbolNative": "€"
                },
                "taxValue": 22.0,
                "taxValues": null
            },
            {
                "id": "5f8848aef6cc1b58e588fee5",
                "creationDate": 1612877903085,
                "updateDate": 1450515163233,
                "tenantId": null,
                "href": null,
                "name": "Europe",
                "multiplier": 1.1,
                "baseCatalog": false,
                "countrySearch": [],
                "countries": null,
                "regions": [
                    "Europe"
                ],
                "currency": {
                    "id": "55f9a3535f15ead1260c34fe",
                    "creationDate": 1612877903086,
                    "updateDate": 1612877903086,
                    "tenantId": null,
                    "href": null,
                    "code": "EUR",
                    "decimalDigit": null,
                    "name": "Euro",
                    "namePlural": "euros",
                    "rounding": 0.0,
                    "symbol": "€",
                    "uiCode": "242",
                    "isoNumber": "978",
                    "symbolNative": "€"
                },
                "taxValue": 0.0,
                "taxValues": null
            },
            {
                "id": "5f8857fc09608a00012270e0",
                "creationDate": 1602770941008,
                "updateDate": 1602770941008,
                "tenantId": null,
                "href": null,
                "name": "Ucraina",
                "multiplier": 10.0,
                "baseCatalog": false,
                "countrySearch": [
                    "UA"
                ],
                "countries": [
                    {
                        "id": "5139e686247e898c57138599",
                        "creationDate": 1612877903087,
                        "updateDate": 1612877903087,
                        "tenantId": null,
                        "href": null,
                        "euroZone": false,
                        "isoCode": "UA",
                        "iso3Code": "UKR",
                        "name": "UKRAINE",
                        "localeName": "Ukraine",
                        "region": "Europe",
                        "taxValue": 0.0,
                        "allowed": true,
                        "printableName": "Ukraine"
                    }
                ],
                "regions": null,
                "currency": {
                    "id": "55f9a3535f15ead1260c3547",
                    "creationDate": 1612877903089,
                    "updateDate": 1612877903089,
                    "tenantId": null,
                    "href": null,
                    "code": "RUB",
                    "decimalDigit": null,
                    "name": "Russian Ruble",
                    "namePlural": "Russian rubles",
                    "rounding": 0.0,
                    "symbol": "RUB",
                    "uiCode": "244",
                    "isoNumber": "643",
                    "symbolNative": "руб."
                },
                "taxValue": 100.0,
                "taxValues": null
            }
        ],
        "productCatalogMultipliers": {},
        "productCatalogPrices": {},
        "productCatalogScheduledPrices": {},
        "status": "AUTHORIZED",
        "slug": "piquadro-woman-000000000170",
        "customSlugs": null,
        "statusHistory": [
            {
                "status": "DRAFT",
                "date": 1602790642965
            },
            {
                "status": "AUTHORIZED",
                "date": 1602790644446
            }
        ],
        "names": {
            "it": {
                "locale": "it",
                "value": "ZIP-AROUND WOMEN'S WALLET"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": [
            "size",
            "color"
        ],
        "photoAttributes": [
            "color"
        ],
        "manufacturerCode": null,
        "warehouseArrayList": [],
        "width": 0.0,
        "height": 0.0,
        "weight": 0.0,
        "depth": 0.0,
        "parentId": null,
        "note": null,
        "story": null,
        "description": null,
        "attributeVariants": {},
        "bannerImage": null,
        "mpn": null,
        "unitPrice": null,
        "unitQuantity": 0,
        "madeIn": null,
        "taxes": null,
        "groupedProductInfo": null,
        "tagList": [],
        "notes": {
            "en": {
                "locale": "en",
                "value": "leather"
            },
            "it": {
                "locale": "it",
                "value": "pelle"
            }
        },
        "prices": {
            "sellingPrice": 78.0,
            "sellingPriceNoTax": -1.0,
            "finalSellingPriceNoTax": -1.0,
            "acquisitionPrice": 78.0,
            "acquisitionPriceNoTax": -1.0,
            "retailPrice": 120.0,
            "retailPriceNoTax": -1.0,
            "overriddenFinalPrice": null,
            "currencyCode": null,
            "currencySymbol": null,
            "discount": "35%",
            "strikedSellingPrice": -1.0,
            "salesDiscount": "0",
            "currency": {
                "id": "55f9a3535f15ead1260c34fe",
                "creationDate": 1612877903095,
                "updateDate": 1612877903095,
                "tenantId": null,
                "href": null,
                "code": "EUR",
                "decimalDigit": null,
                "name": "Euro",
                "namePlural": "euros",
                "rounding": 0.0,
                "symbol": "€",
                "uiCode": "242",
                "isoNumber": "978",
                "symbolNative": "€"
            },
            "finalSellingPrice": -1.0
        },
        "ranking": 0,
        "availabilityTotal": 0.0,
        "hasVariants": true,
        "errorList": [],
        "attributeList": [
            {
                "id": "5f886b4a09608a000122721d",
                "creationDate": 1602775882560,
                "updateDate": 1602775882144,
                "tenantId": null,
                "href": null,
                "attributeCode": "season",
                "departments": [
                    "fashion"
                ],
                "key": "fw20",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Fall-Winter 2020",
                    "attribute": null
                },
                "italian": {
                    "name": "Autunno-Inverno 2020",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            },
            {
                "id": "5f886b4d09608a0001227251",
                "creationDate": 1602775885870,
                "updateDate": 1602775885787,
                "tenantId": null,
                "href": null,
                "attributeCode": "storename",
                "departments": [
                    "fashion"
                ],
                "key": "piquadro",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Piquadro",
                    "attribute": null
                },
                "italian": {
                    "name": "Piquadro",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            },
            {
                "id": "5f886b4b09608a0001227238",
                "creationDate": 1602775883808,
                "updateDate": 1602775882993,
                "tenantId": null,
                "href": null,
                "attributeCode": "village",
                "departments": [
                    "fashion"
                ],
                "key": "mantova",
                "name": null,
                "active": false,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Mantova",
                    "attribute": null
                },
                "italian": {
                    "name": "Mantova",
                    "attribute": null
                },
                "russian": {
                    "name": null,
                    "attribute": null
                },
                "french": {
                    "name": null,
                    "attribute": null
                }
            }
        ],
        "attributeGroupsView": null,
        "variantsGroup": null,
        "infoOtherCollections": null,
        "productVariant": false,
        "attributeDescription": null,
        "microCategory": {
            "id": "5f88a3a50a3f0d0001271333",
            "key": "scarpe-e-borse",
            "type": "CHILD",
            "gender": "female",
            "active": true,
            "imageList": null,
            "parentId": null,
            "parentFeed": null,
            "ranking": 0,
            "localeName": null,
            "english": {
                "url": "scarpe-e-borse",
                "name": "Shoes and Bags",
                "nav": null
            },
            "italian": {
                "url": "scarpe-e-borse",
                "name": "Scarpe e Borse",
                "nav": null
            },
            "parentKey": "donna",
            "declareVariants": null,
            "declareAttributes": null,
            "photoAttributes": null,
            "taxes": null,
            "products": null,
            "sizeScaleCode": null,
            "department": "fashion"
        },
        "macroCategory": {
            "id": "5f88a3a40a3f0d0001271331",
            "key": "woman",
            "type": "ROOT",
            "gender": "female",
            "active": true,
            "imageList": null,
            "parentId": null,
            "parentFeed": null,
            "ranking": 0,
            "localeName": null,
            "english": {
                "url": "donna",
                "name": "Woman",
                "nav": null
            },
            "italian": {
                "url": "donna",
                "name": "Donna",
                "nav": null
            },
            "parentKey": "fashion",
            "declareVariants": null,
            "declareAttributes": null,
            "photoAttributes": null,
            "taxes": null,
            "products": null,
            "sizeScaleCode": null,
            "department": null
        },
        "department": null,
        "pricesComparison": null
    }
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- InvalidUserException <Badge text="InvalidUserException" type="error"/> - user is not authenticated
- ForbiddenException <Badge text="ForbiddenException" type="error"/> - User has no rights

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------


## publishVariant <Badge text="publishVariant" /> 
Method Detail for publishVariant 

```
Method
RequestMethod.PUT
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/products/{id_p}/variant/{id_v}/publish/{publicationStatus}"
``` 

```
Headers
TODO
```

#### Payload
> TODO

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| id_p | String | unique identifier of product | True | PathVariable |
| id_v | String | unique identifier of variant | True | PathVariable |
| publicationStatus | boolean | status to be updatet | True | PathVariable |
| httpServletResponse | HttpServletResponse | servlet Response | True | Param | 
| httpServletRequest | HttpServletRequest | servlet Request | True | Param | 
| principal | Principal | the logedin user | True | Param | 


#### <Badge text="CURL Request" type="warning"/>
```
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found
- InvalidUserException <Badge text="InvalidUserException" type="error"/> - user is not authenticated
- ForbiddenException <Badge text="ForbiddenException" type="error"/> - User has no rights

for more infor on error - [Errors ](errors.html) 

--------------------------------------------------------------------------------------------------------------------------------------------------------