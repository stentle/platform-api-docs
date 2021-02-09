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

## searchbyEam <Badge text="searchbyEam" /> 
Method Detail for searchbyEam 


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
--------------------------------------------------------------------------------------------------------------------------------------------------------

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
#### <Badge text="Error" type="warning"/>
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

--------------------------------------------------------------------------------------------------------------------------------------------------------

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
TODO
```

#### Payload
> TODO

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
Sample CURL Call: "TODO"
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
TODO
```

#### Payload
> TODO

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
TODO
```

#### Payload
> TODO

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
TODO
```

#### Payload
> TODO

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
TODO
```

#### Payload
> TODO

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
Sample CURL Call: "TODO"
``` 

#### <Badge text="Returns" type="warning"/>
```
{
  TODO
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
TODO
```

#### Payload
> TODO

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