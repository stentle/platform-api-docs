# Search By Ean
Query to search by ean

## URL
### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/products/searchByEan=?ean={ean}
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
```

### URL Parameters
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | 
| ean | String | unique identifier of varinat| True |

### URL Parameters Presentation
```
{{URI}}/rest/picnik-rest/products/searchByEan=?ean={ean}
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
::: details Response
```json
{
    "data": {
        "id": "5f9ff98330c49e0001e08d72",
        "creationDate": "2020-11-02 12:20 UTC",
        "code": "braccialini-woman-black-no-size-000000000314-1",
        "sku": "000000000314-1",
        "parentId": "5f9ff98230c49e0001e08d6e",
        "price": {
            "value": -1.0,
            "currency": "EUR"
        },
        "attributeVariants": {
            "sizeScale": "no-size",
            "size": "no-size",
            "color": {
                "id": "5f7ecb59b410a000019ef055",
                "hex": null,
                "key": "black",
                "localeName": null,
                "colorSearch": "black"
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
            "id": "5f9fed5930c49e0001e08bdc",
            "key": "scarpe-e-borse-woman",
            "locale": "scarpe-e-borse-woman",
            "type": "child",
            "gender": "female",
            "merchantList": null
        },
        "availability": 40.0,
        "descriptions": {
            "en": "HANDBAG DECORATED ON ALL 4 SIDES WITH APPLICATIONS AND DRAWINGS THAT SEE AS ​​THE PROTAGONISTS DOGS IN THE SPACE",
            "it": "BORSA A MANO DECORATA SU TUTTI E 4 I LATI CON APPLICAZIONI E DISEGNI CHE VEDE COME PROTAGONISTI I CANI NELLO SPAZIO"
        },
        "names": {
            "en": "ALL ROUND BAG",
            "it": "BORSA ALL ROUND"
        },
        "ean": "FR-8052991085711",
        "brand": "braccialini",
        "department": "fashion",
        "macroCategory": "woman",
        "microCategory": "scarpe-e-borse-woman",
        "sellingPrice": 219.0,
        "retailPrice": 314.0,
        "unitQuantity": 0,
        "attributeList": {
            "season": [
                {
                    "id": "5f9c547ab9d82100014680a6",
                    "key": "fw19/20",
                    "attributeCode": "season"
                }
            ],
            "storename": [
                {
                    "id": "5f9c547ab9d82100014680ab",
                    "key": "braccialini",
                    "attributeCode": "storename"
                }
            ],
            "village": [
                {
                    "id": "5f9c547ab9d82100014680b6",
                    "key": "franciacorta",
                    "attributeCode": "village"
                }
            ]
        },
        "ranking": 0,
        "isVariant": false
    }
}
```
:::

## CURL
CURL call example. Search data by ean.
```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/products/searchByEan?ean=FR-8052991085711' \
--header 'X-Domain: landoffashion' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=T2xLenJoT1BsNHJEQTFHSmNiRUN1QT09Oit3TFErVjFMei8wc1NqeUxHTVJNa0E9PQ'
```

### CURL Response Example
::: details CURL Response Example
```json
{
    "data": {
        "id": "5f9ff98330c49e0001e08d72",
        "creationDate": "2020-11-02 12:20 UTC",
        "code": "braccialini-woman-black-no-size-000000000314-1",
        "sku": "000000000314-1",
        "parentId": "5f9ff98230c49e0001e08d6e",
        "price": {
            "value": -1.0,
            "currency": "EUR"
        },
        "attributeVariants": {
            "sizeScale": "no-size",
            "size": "no-size",
            "color": {
                "id": "5f7ecb59b410a000019ef055",
                "hex": null,
                "key": "black",
                "localeName": null,
                "colorSearch": "black"
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
            "id": "5f9fed5930c49e0001e08bdc",
            "key": "scarpe-e-borse-woman",
            "locale": "scarpe-e-borse-woman",
            "type": "child",
            "gender": "female",
            "merchantList": null
        },
        "availability": 40.0,
        "descriptions": {
            "en": "HANDBAG DECORATED ON ALL 4 SIDES WITH APPLICATIONS AND DRAWINGS THAT SEE AS ​​THE PROTAGONISTS DOGS IN THE SPACE",
            "it": "BORSA A MANO DECORATA SU TUTTI E 4 I LATI CON APPLICAZIONI E DISEGNI CHE VEDE COME PROTAGONISTI I CANI NELLO SPAZIO"
        },
        "names": {
            "en": "ALL ROUND BAG",
            "it": "BORSA ALL ROUND"
        },
        "ean": "FR-8052991085711",
        "brand": "braccialini",
        "department": "fashion",
        "macroCategory": "woman",
        "microCategory": "scarpe-e-borse-woman",
        "sellingPrice": 219.0,
        "retailPrice": 314.0,
        "unitQuantity": 0,
        "attributeList": {
            "season": [
                {
                    "id": "5f9c547ab9d82100014680a6",
                    "key": "fw19/20",
                    "attributeCode": "season"
                }
            ],
            "storename": [
                {
                    "id": "5f9c547ab9d82100014680ab",
                    "key": "braccialini",
                    "attributeCode": "storename"
                }
            ],
            "village": [
                {
                    "id": "5f9c547ab9d82100014680b6",
                    "key": "franciacorta",
                    "attributeCode": "village"
                }
            ]
        },
        "ranking": 0,
        "isVariant": false
    }
}
```
:::

## Errors
- Error types resource not found
```
{
    "type": "3",
    "title": "Resource not found",
    "status": 404,
    "detail": "No variant found with ean FR-805299108",
    "trace": "....."
}
```
for more info on error - [Errors ](/1.0.0/errors.html) 