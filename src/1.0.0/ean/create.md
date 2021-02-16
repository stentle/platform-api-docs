# Create/Update

1. Create <br />
Create a variant catalog price by ean in case we don't have the object `varaint_catalog_price` on the database.

2. Update <br />
Update a variant catalog price by ean in case the object `varaint_catalog_price` exists on the database. In this case, it updates the price.

::: details varaint_catalog_price * 
```
    "variant_catalog_prices" : {
        "5607f05658162efefd532b28" : {
            "selling_price" : 200.0,
            "selling_price_no_tax" : -1.0,
            "final_selling_price_no_tax" : -1.0,
            "final_selling_price" : -1.0,
            "acquisition_price" : -1.0,
            "acquisition_price_no_tax" : -1.0,
            "retail_price" : -1.0,
            "retail_price_no_tax" : -1.0,
            "striked_selling_price" : -1.0
        }
    }
```
::: 
*Details of the Object that will be created or updated

## URL
### Http Verb <Badge text="GET" vertical="middle"/>
```
{{URI}}/rest/picnik-rest/products/updatevariantpricebyean/{ean}/{cat}/{pri}
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
```

### URL Parameters
| Parameters | Type | Description | Required |
| ------ | ------ | ------ | ------ |
| ean | String | unique identifier of the product | True | 
| CatalogId | String | unique identifier of the catalog where to search in | True |
| Price | double | the price to be set at the product | True | 

### URL Parameters
```
{{URI}}/rest/picnik-rest/products/updatevariantpricebyean/{ean}/{cat}/{pri}
``` 

## Response

| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | 
| data ||Object| Response content|
||id|String|Unique varinat Id|
||creationDate|Date|date created|
||sku|String|last time date was updated|
||parentId|String||
||price|Object| value & currency|
||prices|Object| identification prices of the product|
||attributeVariants|Object| identification attribute variants of a product|
||macroCategoryInfo|Object| unique info for a macro category of product|
||microCategoryInfo|Object| unique info for a micro category of product|
||availability|double||
||description|Object| description of the product in EN & IT|
||names|Object| name of a product in EN & IT|
||ean|String| ean of product|
||height|Double|height|
||width|Double|width|
||depth|Double|depth|
||weight|Double|weight|
||macroCategory|String| info for a macro category|
||microCategory|String| info for a micro category|
||sellingPrice|Double| Selling price|
||reatilPrice|Double| Selling price|
||unitQuantity|Double| unit quantity|
||attributeList|Object||
||ranking|Double|ranking|
||isVariant|Boolean||

### Response Example
::: details Example
```json
{
    "data": {
        "id": "5fa01b4130c49e0001e0946e",
        "creationDate": "2020-11-02 14:44 UTC",
        "sku": "000000000369-1",
        "parentId": "5fa01b4130c49e0001e0946a",
        "price": {
            "value": -1.0,
            "currency": "EUR"
        },
        "prices": {
            "sellingPrice": 305.0,
            "sellingPriceNoTax": -1.0,
            "finalSellingPriceNoTax": -1.0,
            "finalSellingPrice": -1.0,
            "acquisitionPrice": 305.0,
            "acquisitionPriceNoTax": -1.0,
            "retailPrice": 469.0,
            "retailPriceNoTax": -1.0,
            "currency": "EUR"
        },
        "attributeVariants": {
            "sizeScale": "IT",
            "size": "36",
            "color": {
                "id": "5f7ecb59b410a000019ef057",
                "hex": null,
                "key": "grey",
                "localeName": null,
                "colorSearch": "grey"
            }
        },
        "macroCategoryInfo": {
            "id": "5f9fed5930c49e0001e08bd6",
            "key": "woman",
            "locale": "woman",
            "type": "root",
            "gender": "female",
            "merchantList": null
        },
        "microCategoryInfo": {
            "id": "5f9fed5930c49e0001e08bdd",
            "key": "abbigliamento-woman",
            "locale": "abbigliamento-woman",
            "type": "child",
            "gender": "female",
            "merchantList": null
        },
        "availability": 0.0,
        "names": {
            "en": "Short Coat with Nylon details",
            "it": "Cappotto Corto con inserti in Nylon"
        },
        "ean": "FR-8055189901305",
        "height": 0.0,
        "width": 0.0,
        "depth": 0.0,
        "weight": 0.0,
        "macroCategory": "woman",
        "microCategory": "abbigliamento-woman",
        "sellingPrice": 305.0,
        "retailPrice": 469.0,
        "unitQuantity": 0,
        "ranking": 0,
        "isVariant": true
    }
}
```
:::

## CURL
CURL call example. Search data by ean.
```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/products/updatevariantpricebyean/FR-8055189901305/5607f05658162efefd532b28/400' \
--header 'X-Domain: landoffashion' \
--header 'Cookie: stentle=T2xLenJoT1BsNHJEQTFHSmNiRUN1QT09Oit3TFErVjFMei8wc1NqeUxHTVJNa0E9PQ'
```

### CURL Response Example
::: details CURL Example
```json
{
    "data": {
        "id": "5fa01b4130c49e0001e0946e",
        "creationDate": "2020-11-02 14:44 UTC",
        "sku": "000000000369-1",
        "parentId": "5fa01b4130c49e0001e0946a",
        "price": {
            "value": -1.0,
            "currency": "EUR"
        },
        "prices": {
            "sellingPrice": 305.0,
            "sellingPriceNoTax": -1.0,
            "finalSellingPriceNoTax": -1.0,
            "finalSellingPrice": -1.0,
            "acquisitionPrice": 305.0,
            "acquisitionPriceNoTax": -1.0,
            "retailPrice": 469.0,
            "retailPriceNoTax": -1.0,
            "currency": "EUR"
        },
        "attributeVariants": {
            "sizeScale": "IT",
            "size": "36",
            "color": {
                "id": "5f7ecb59b410a000019ef057",
                "hex": null,
                "key": "grey",
                "localeName": null,
                "colorSearch": "grey"
            }
        },
        "macroCategoryInfo": {
            "id": "5f9fed5930c49e0001e08bd6",
            "key": "woman",
            "locale": "woman",
            "type": "root",
            "gender": "female",
            "merchantList": null
        },
        "microCategoryInfo": {
            "id": "5f9fed5930c49e0001e08bdd",
            "key": "abbigliamento-woman",
            "locale": "abbigliamento-woman",
            "type": "child",
            "gender": "female",
            "merchantList": null
        },
        "availability": 0.0,
        "names": {
            "en": "Short Coat with Nylon details",
            "it": "Cappotto Corto con inserti in Nylon"
        },
        "ean": "FR-8055189901305",
        "height": 0.0,
        "width": 0.0,
        "depth": 0.0,
        "weight": 0.0,
        "macroCategory": "woman",
        "microCategory": "abbigliamento-woman",
        "sellingPrice": 305.0,
        "retailPrice": 469.0,
        "unitQuantity": 0,
        "ranking": 0,
        "isVariant": true
    }
}
```
:::

## Errors
- When the parameters are not adeguate
```
{
{
    "type": "3",
    "title": "Resource not found",
    "status": 404,
    "detail": "No Variant for the EAN: FR-8055189901305767567",
    "trace": "..."
}
```

for more info on error - [Errors ](/1.0.0/errors.html) 