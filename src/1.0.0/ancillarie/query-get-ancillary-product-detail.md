# Get Ancillary Details
Query to get ancillary product details


## URL
### Http Verb <Badge text="GET" vertical="middle"/>
```
{{URI}}/rest/picnik-rest/ancillary/{id}
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
```

### URL Parameters
| Parameters | Type | Description | Required |
| ------ | ------ | ------ | ------ | ------ |
| ancillaryProductId | String | unique identifier of the ancillary product id | Yes |


## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | ------ |
| data ||Object| Response content|
||id|string|An Id ancillary|
||creationDate|date|date created|
||updateDate|date|last time date was updated|
||tenantId||Type|
||href|string||
||version|intiger||
||name|String||
||descriptions|Object| descriptions may be in EN and IT|
||erpCode|Object||
||brand|string||
||externalCode|string||
||externalParentCode|Object||
||sku|Object||
||articleId|||
||customSkus|||
||attributes|Object||
||published|boolean||
||publicationDate|||
||...|...|...|
||coverPhotoUrl|url||
||...|...|...|

... means that the response data continue and repeat himself

### Response Example
::: details Example
```json
{
    "id": "5e4a6eeef79ecb0001a41990",
    "creationDate": 1585819393542,
    "updateDate": 1585819393542,
    "tenantId": null,
    "href": null,
    "version": 10,
    "name": "Spese mediche fino a 100.000€",
    "descriptions": {
        "en": {
            "locale": "en",
            "value": "Aumenta la copertura delle spese mediche durante il tuo viaggio. <a target=\"_blank\" href=\"https://www.release.utravel.it/wp-content/uploads/2020/02/Utravel_Assicurazione-SpeseMediche.pdf\">Leggi di più</a>"
        },
        "it": {
            "locale": "it",
            "value": "Aumenta la copertura delle spese mediche durante il tuo viaggio. <a target=\"_blank\" href=\"https://www.release.utravel.it/wp-content/uploads/2020/02/Utravel_Assicurazione-SpeseMediche.pdf\">Leggi di più</a>"
        }
    },
    "erpCode": null,
    "brand": null,
    "externalCode": null,
    "externalParentCode": null,
    "sku": null,
    "articleId": null,
    "customSkus": null,
    "attributes": {},
    "published": true,
    "publicationDate": null,
    "productDescriptionCompleteness": false,
    "threshold": 0,
    "photoGallery": {
        "images": [
            {
                "id": null,
                "type": "cover",
                "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-spesemediche.svg",
                "filename": null,
                "active": false,
                "sizeType": null,
                "tag": null
            }
        ],
        "thumbnails": [],
        "sequence": 0,
        "allImages": [
            {
                "id": null,
                "type": "cover",
                "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-spesemediche.svg",
                "filename": null,
                "active": false,
                "sizeType": null,
                "tag": null
            }
        ]
    },
    "videoGallery": null,
    "documentArchive": null,
    "stories": null,
    "loverList": null,
    "numberOfLovers": 0,
    "numberOfProductSaving": 0,
    "numberOfProductSharing": 0,
    "loved": false,
    "saved": false,
    "addedToCart": false,
    "purchasable": false,
    "hasCoverPhoto": false,
    "sales": null,
    "catalogList": [],
    "productCatalogMultipliers": {},
    "productCatalogPrices": {},
    "productCatalogScheduledPrices": {},
    "status": null,
    "slug": null,
    "customSlugs": null,
    "statusHistory": [],
    "names": {
        "en": {
            "locale": "en",
            "value": "Spese mediche fino a 100.000€"
        },
        "it": {
            "locale": "it",
            "value": "Spese mediche fino a 100.000€"
        }
    },
    "seller": null,
    "numberOfComments": 0,
    "declareVariants": null,
    "photoAttributes": null,
    "manufacturerCode": "007",
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
    "tagList": null,
    "notes": null,
    "prices": {
        "sellingPrice": -1.0,
        "sellingPriceNoTax": -1.0,
        "finalSellingPriceNoTax": -1.0,
        "acquisitionPrice": -1.0,
        "acquisitionPriceNoTax": -1.0,
        "retailPrice": -1.0,
        "retailPriceNoTax": -1.0,
        "overriddenFinalPrice": null,
        "currencyCode": null,
        "currencySymbol": null,
        "discount": "0",
        "strikedSellingPrice": -1.0,
        "salesDiscount": "0",
        "currency": null,
        "finalSellingPrice": -1.0
    },
    "ranking": 3,
    "availabilityTotal": 0.0,
    "insertionRule": "MANUAL_NO_SAME_CLUSTER",
    "cluster": "health-insurance",
    "composable": false,
    "orderVisibilityMatrix": {
        "ROLE_ADMIN": false,
        "ROLE_MERCHANT_PRICEBOX": false,
        "USER_SUPPLIER": false
    },
    "pricingRules": [
        {
            "pricingParameterMap": {
                "5e4eac43dd4f6c00010348ea": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb999dd4f6c00010357f2": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac4bdd4f6c0001034942": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac47dd4f6c0001034912": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e70f69360fe5c00018e9582": [
                    {
                        "amount": 200.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac4cdd4f6c0001034950": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e689f0375bd3200014f345e": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb983dd4f6c0001035666": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb6f4dd4f6c0001034bfe": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb559dd4f6c0001034b74": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb962dd4f6c0001035406": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac48dd4f6c000103491f": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac46dd4f6c0001034904": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac42dd4f6c00010348dd": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb96cdd4f6c00010354db": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb703dd4f6c0001034d25": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e67e29d75bd3200014f0c49": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb959dd4f6c0001035343": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb440dd4f6c0001034aff": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ]
            },
            "pricingRuleType": "FIXED_PER_PERSON"
        }
    ],
    "costs": {
        "5e4eac43dd4f6c00010348ea": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb999dd4f6c00010357f2": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac4bdd4f6c0001034942": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac47dd4f6c0001034912": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e70f69360fe5c00018e9582": {
            "amount": 200.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac4cdd4f6c0001034950": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e689f0375bd3200014f345e": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb983dd4f6c0001035666": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb6f4dd4f6c0001034bfe": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb559dd4f6c0001034b74": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb962dd4f6c0001035406": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac48dd4f6c000103491f": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac46dd4f6c0001034904": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac42dd4f6c00010348dd": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb96cdd4f6c00010354db": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb703dd4f6c0001034d25": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e67e29d75bd3200014f0c49": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb959dd4f6c0001035343": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb440dd4f6c0001034aff": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        }
    },
    "relatedTo": [
        {
            "id": "5e4eac43dd4f6c00010348ea",
            "productId": null
        },
        {
            "id": "5e4eb999dd4f6c00010357f2",
            "productId": null
        },
        {
            "id": "5e4eac4bdd4f6c0001034942",
            "productId": null
        },
        {
            "id": "5e4eac47dd4f6c0001034912",
            "productId": null
        },
        {
            "id": "5e70f69360fe5c00018e9582",
            "productId": null
        },
        {
            "id": "5e4eac4cdd4f6c0001034950",
            "productId": null
        },
        {
            "id": "5e689f0375bd3200014f345e",
            "productId": null
        },
        {
            "id": "5e4eb983dd4f6c0001035666",
            "productId": null
        },
        {
            "id": "5e4eb6f4dd4f6c0001034bfe",
            "productId": null
        },
        {
            "id": "5e4eb559dd4f6c0001034b74",
            "productId": null
        },
        {
            "id": "5e4eb962dd4f6c0001035406",
            "productId": null
        },
        {
            "id": "5e4eac48dd4f6c000103491f",
            "productId": null
        },
        {
            "id": "5e4eac46dd4f6c0001034904",
            "productId": null
        },
        {
            "id": "5e4eac42dd4f6c00010348dd",
            "productId": null
        },
        {
            "id": "5e4eb96cdd4f6c00010354db",
            "productId": null
        },
        {
            "id": "5e4eb703dd4f6c0001034d25",
            "productId": null
        },
        {
            "id": "5e67e29d75bd3200014f0c49",
            "productId": null
        },
        {
            "id": "5e4eb959dd4f6c0001035343",
            "productId": null
        },
        {
            "id": "5e4eb440dd4f6c0001034aff",
            "productId": null
        }
    ],
    "attributeDescription": null,
    "microCategory": null,
    "macroCategory": null,
    "department": null,
    "pricesComparison": null,
    "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-spesemediche.svg"
}
```
:::
## CURL
CURL call example. Retrieving an ancillary product details with id.

```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/ancillary/5e4a6eeef79ecb0001a41990' \
--header 'X-Domain: utravel' \
--header 'Cookie: stentle=cEx2ZG1haXZ2b2VpT1VDS0pOQmJXdz09OnFBV011VFhVcmU4VzY4TytNUDdUUXc9PQ'
```

### CURL Response Example
::: details Example
```json
{
    "id": "5e4a6eeef79ecb0001a41990",
    "creationDate": 1585819393542,
    "updateDate": 1585819393542,
    "tenantId": null,
    "href": null,
    "version": 10,
    "name": "Spese mediche fino a 100.000€",
    "descriptions": {
        "en": {
            "locale": "en",
            "value": "Aumenta la copertura delle spese mediche durante il tuo viaggio. <a target=\"_blank\" href=\"https://www.release.utravel.it/wp-content/uploads/2020/02/Utravel_Assicurazione-SpeseMediche.pdf\">Leggi di più</a>"
        },
        "it": {
            "locale": "it",
            "value": "Aumenta la copertura delle spese mediche durante il tuo viaggio. <a target=\"_blank\" href=\"https://www.release.utravel.it/wp-content/uploads/2020/02/Utravel_Assicurazione-SpeseMediche.pdf\">Leggi di più</a>"
        }
    },
    "erpCode": null,
    "brand": null,
    "externalCode": null,
    "externalParentCode": null,
    "sku": null,
    "articleId": null,
    "customSkus": null,
    "attributes": {},
    "published": true,
    "publicationDate": null,
    "productDescriptionCompleteness": false,
    "threshold": 0,
    "photoGallery": {
        "images": [
            {
                "id": null,
                "type": "cover",
                "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-spesemediche.svg",
                "filename": null,
                "active": false,
                "sizeType": null,
                "tag": null
            }
        ],
        "thumbnails": [],
        "sequence": 0,
        "allImages": [
            {
                "id": null,
                "type": "cover",
                "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-spesemediche.svg",
                "filename": null,
                "active": false,
                "sizeType": null,
                "tag": null
            }
        ]
    },
    "videoGallery": null,
    "documentArchive": null,
    "stories": null,
    "loverList": null,
    "numberOfLovers": 0,
    "numberOfProductSaving": 0,
    "numberOfProductSharing": 0,
    "loved": false,
    "saved": false,
    "addedToCart": false,
    "purchasable": false,
    "hasCoverPhoto": false,
    "sales": null,
    "catalogList": [],
    "productCatalogMultipliers": {},
    "productCatalogPrices": {},
    "productCatalogScheduledPrices": {},
    "status": null,
    "slug": null,
    "customSlugs": null,
    "statusHistory": [],
    "names": {
        "en": {
            "locale": "en",
            "value": "Spese mediche fino a 100.000€"
        },
        "it": {
            "locale": "it",
            "value": "Spese mediche fino a 100.000€"
        }
    },
    "seller": null,
    "numberOfComments": 0,
    "declareVariants": null,
    "photoAttributes": null,
    "manufacturerCode": "007",
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
    "tagList": null,
    "notes": null,
    "prices": {
        "sellingPrice": -1.0,
        "sellingPriceNoTax": -1.0,
        "finalSellingPriceNoTax": -1.0,
        "acquisitionPrice": -1.0,
        "acquisitionPriceNoTax": -1.0,
        "retailPrice": -1.0,
        "retailPriceNoTax": -1.0,
        "overriddenFinalPrice": null,
        "currencyCode": null,
        "currencySymbol": null,
        "discount": "0",
        "strikedSellingPrice": -1.0,
        "salesDiscount": "0",
        "currency": null,
        "finalSellingPrice": -1.0
    },
    "ranking": 3,
    "availabilityTotal": 0.0,
    "insertionRule": "MANUAL_NO_SAME_CLUSTER",
    "cluster": "health-insurance",
    "composable": false,
    "orderVisibilityMatrix": {
        "ROLE_ADMIN": false,
        "ROLE_MERCHANT_PRICEBOX": false,
        "USER_SUPPLIER": false
    },
    "pricingRules": [
        {
            "pricingParameterMap": {
                "5e4eac43dd4f6c00010348ea": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb999dd4f6c00010357f2": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac4bdd4f6c0001034942": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac47dd4f6c0001034912": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e70f69360fe5c00018e9582": [
                    {
                        "amount": 200.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac4cdd4f6c0001034950": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e689f0375bd3200014f345e": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb983dd4f6c0001035666": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb6f4dd4f6c0001034bfe": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb559dd4f6c0001034b74": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb962dd4f6c0001035406": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac48dd4f6c000103491f": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac46dd4f6c0001034904": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eac42dd4f6c00010348dd": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb96cdd4f6c00010354db": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb703dd4f6c0001034d25": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e67e29d75bd3200014f0c49": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb959dd4f6c0001035343": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ],
                "5e4eb440dd4f6c0001034aff": [
                    {
                        "amount": 39.0,
                        "name": {
                            "locale": "it",
                            "value": "Euro (decimal)"
                        }
                    }
                ]
            },
            "pricingRuleType": "FIXED_PER_PERSON"
        }
    ],
    "costs": {
        "5e4eac43dd4f6c00010348ea": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb999dd4f6c00010357f2": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac4bdd4f6c0001034942": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac47dd4f6c0001034912": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e70f69360fe5c00018e9582": {
            "amount": 200.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac4cdd4f6c0001034950": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e689f0375bd3200014f345e": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb983dd4f6c0001035666": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb6f4dd4f6c0001034bfe": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb559dd4f6c0001034b74": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb962dd4f6c0001035406": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac48dd4f6c000103491f": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac46dd4f6c0001034904": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eac42dd4f6c00010348dd": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb96cdd4f6c00010354db": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb703dd4f6c0001034d25": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e67e29d75bd3200014f0c49": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb959dd4f6c0001035343": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        },
        "5e4eb440dd4f6c0001034aff": {
            "amount": 39.0,
            "name": {
                "locale": "it",
                "value": "Euro (decimal)"
            }
        }
    },
    "relatedTo": [
        {
            "id": "5e4eac43dd4f6c00010348ea",
            "productId": null
        },
        {
            "id": "5e4eb999dd4f6c00010357f2",
            "productId": null
        },
        {
            "id": "5e4eac4bdd4f6c0001034942",
            "productId": null
        },
        {
            "id": "5e4eac47dd4f6c0001034912",
            "productId": null
        },
        {
            "id": "5e70f69360fe5c00018e9582",
            "productId": null
        },
        {
            "id": "5e4eac4cdd4f6c0001034950",
            "productId": null
        },
        {
            "id": "5e689f0375bd3200014f345e",
            "productId": null
        },
        {
            "id": "5e4eb983dd4f6c0001035666",
            "productId": null
        },
        {
            "id": "5e4eb6f4dd4f6c0001034bfe",
            "productId": null
        },
        {
            "id": "5e4eb559dd4f6c0001034b74",
            "productId": null
        },
        {
            "id": "5e4eb962dd4f6c0001035406",
            "productId": null
        },
        {
            "id": "5e4eac48dd4f6c000103491f",
            "productId": null
        },
        {
            "id": "5e4eac46dd4f6c0001034904",
            "productId": null
        },
        {
            "id": "5e4eac42dd4f6c00010348dd",
            "productId": null
        },
        {
            "id": "5e4eb96cdd4f6c00010354db",
            "productId": null
        },
        {
            "id": "5e4eb703dd4f6c0001034d25",
            "productId": null
        },
        {
            "id": "5e67e29d75bd3200014f0c49",
            "productId": null
        },
        {
            "id": "5e4eb959dd4f6c0001035343",
            "productId": null
        },
        {
            "id": "5e4eb440dd4f6c0001034aff",
            "productId": null
        }
    ],
    "attributeDescription": null,
    "microCategory": null,
    "macroCategory": null,
    "department": null,
    "pricesComparison": null,
    "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-spesemediche.svg"
}
```
:::

## Errors

for more info on error - [Errors ](/1.0.0/errors.html) 