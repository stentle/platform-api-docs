# Get All Ancillary Products

Query Get All Ancillary Products


## URL
### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/ancillary/all
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
```

### URL Parameters
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| language | String | unique identifier of language, defaultValue = "it" | False | RequestHeader |

### URL Parameters Presentation
```
{{URI}}/rest/picnik-rest/ancillary/all
``` 

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | ------ |
| data ||Object| Response content|
||id|string|An Id|
||key|string|Key|
||type|string|Type|
||gender|string|Gender|
||active|bolean||
||imageList|array||
||parentId|string||
||parentFeed|Object| Parent category|
||ranking|number||
||localeName|string||
||english|Object||
||italian|Object||
||parentKey|string||
||declareVariants|Array||
||declareAttributes|string||
||photoAttributes|string||
||taxes|string||
||products|string||
||sizeScaleCode|string||
||department|string||



## CURL
CURL call example. Retrieving a category by id.
```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/ancillary/all' \
--header 'X-Domain: utravel' \
--header 'Cookie: stentle=cEx2ZG1haXZ2b2VpT1VDS0pOQmJXdz09OnFBV011VFhVcmU4VzY4TytNUDdUUXc9PQ'
```

### CURL Response Example

```
[
    {
        "id": "5e28687b84b38d00016a83ee",
        "creationDate": 1592899247320,
        "updateDate": 1592899247320,
        "tenantId": null,
        "href": null,
        "version": 33,
        "name": "Assicurazione Annullamento",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Avrai la possibilità di annullare il tuo viaggio fino al giorno della partenza, per motivi certificati. Leggi l’informativa per scoprire quali. <a target=\"_blank\" href=\"https://www.release.utravel.it/wp-content/uploads/2020/02/Utravel_Assicurazione-Annullamento.pdf\">Leggi di più</a>"
            },
            "it": {
                "locale": "it",
                "value": "Avrai la possibilità di annullare il tuo viaggio fino al giorno della partenza, per motivi certificati. Leggi l’informativa per scoprire quali. <a target=\"_blank\" href=\"https://www.release.utravel.it/wp-content/uploads/2020/02/Utravel_Assicurazione-Annullamento.pdf\">Leggi di più</a>"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-annullamento.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-annullamento.svg",
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
                "value": "Assicurazione Annullamento"
            },
            "it": {
                "locale": "it",
                "value": "Assicurazione Annullamento"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "005",
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
        "ranking": 2,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL",
        "cluster": "insurance",
        "composable": true,
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
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e7ba3dbd3aeae00017fe180": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e7269263486830001afd889": [
                        {
                            "amount": -200.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e67e29d75bd3200014f0c49": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 60.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 60.0,
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
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb999dd4f6c00010357f2": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e7ba3dbd3aeae00017fe180": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e7269263486830001afd889": {
                "amount": 200.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb983dd4f6c0001035666": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb962dd4f6c0001035406": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb96cdd4f6c00010354db": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e67e29d75bd3200014f0c49": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb959dd4f6c0001035343": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 60.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
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
                "id": "5e7ba3dbd3aeae00017fe180",
                "productId": null
            },
            {
                "id": "5e4eac47dd4f6c0001034912",
                "productId": null
            },
            {
                "id": "5e7269263486830001afd889",
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
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-annullamento.svg"
    },
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
    },
    {
        "id": "5e4a6facf79ecb0001a419b8",
        "creationDate": 1601288072825,
        "updateDate": 1601288072825,
        "tenantId": null,
        "href": null,
        "version": 7,
        "name": "Spese mediche fino a 250.000€",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Aumenta la copertura delle possibili spese mediche durante il tuo viaggio. <a target=\"_blank\" href=\"https://www.release.utravel.it/wp-content/uploads/2020/02/Utravel_Assicurazione-SpeseMediche.pdf\">Leggi di più</a>"
            },
            "it": {
                "locale": "it",
                "value": "Aumenta la copertura delle possibili spese mediche durante il tuo viaggio. <a target=\"_blank\" href=\"https://www.release.utravel.it/wp-content/uploads/2020/02/Utravel_Assicurazione-SpeseMediche.pdf\">Leggi di più</a>"
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
                "value": "Spese mediche fino a 250.000€"
            },
            "it": {
                "locale": "it",
                "value": "Spese mediche fino a 250.000€"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "008",
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
        "ranking": 4,
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
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb712dd4f6c0001034e4c": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a2dd4f6c0001034374": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5f71b479ef23ea00011a5b8e": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6eadd4f6c00010346fc": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb715dd4f6c0001034e87": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea49add4f6c00010342d0": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0275bd3200014f343e": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e67e29d75bd3200014f0c49": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a7dd4f6c00010343a6": [
                        {
                            "amount": 49.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 49.0,
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
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb999dd4f6c00010357f2": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb712dd4f6c0001034e4c": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4ea6a2dd4f6c0001034374": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb983dd4f6c0001035666": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5f71b479ef23ea00011a5b8e": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4ea6eadd4f6c00010346fc": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb715dd4f6c0001034e87": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb962dd4f6c0001035406": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4ea49add4f6c00010342d0": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb96cdd4f6c00010354db": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e689f0275bd3200014f343e": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e67e29d75bd3200014f0c49": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb959dd4f6c0001035343": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4ea6a7dd4f6c00010343a6": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 49.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
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
                "id": "5e4eac47dd4f6c0001034912",
                "productId": null
            },
            {
                "id": "5e4eb712dd4f6c0001034e4c",
                "productId": null
            },
            {
                "id": "5e4ea6a2dd4f6c0001034374",
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
                "id": "5f71b479ef23ea00011a5b8e",
                "productId": null
            },
            {
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            },
            {
                "id": "5e4ea6eadd4f6c00010346fc",
                "productId": null
            },
            {
                "id": "5e4eb715dd4f6c0001034e87",
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
                "id": "5e4eac42dd4f6c00010348dd",
                "productId": null
            },
            {
                "id": "5e4eac46dd4f6c0001034904",
                "productId": null
            },
            {
                "id": "5e4ea49add4f6c00010342d0",
                "productId": null
            },
            {
                "id": "5e4eb96cdd4f6c00010354db",
                "productId": null
            },
            {
                "id": "5e689f0275bd3200014f343e",
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
                "id": "5e4ea6a7dd4f6c00010343a6",
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
    },
    {
        "id": "5e4a701cf79ecb0001a419d0",
        "creationDate": 1589872368482,
        "updateDate": 1589872368482,
        "tenantId": null,
        "href": null,
        "version": 6,
        "name": "Spese mediche fino a 500.000€",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Viaggia sicuro! Copri qualunque rischio da spese mediche per il tuo viaggio. <a target=\"_blank\" href=\"https://www.release.utravel.it/wp-content/uploads/2020/02/Utravel_Assicurazione-SpeseMediche.pdf\">Leggi di più</a>"
            },
            "it": {
                "locale": "it",
                "value": "Viaggia sicuro! Copri qualunque rischio da spese mediche per il tuo viaggio. <a target=\"_blank\" href=\"https://www.release.utravel.it/wp-content/uploads/2020/02/Utravel_Assicurazione-SpeseMediche.pdf\">Leggi di più</a>"
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
                "value": "Spese mediche fino a 500.000€"
            },
            "it": {
                "locale": "it",
                "value": "Spese mediche fino a 500.000€"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "009",
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
        "ranking": 5,
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
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e7ba3dbd3aeae00017fe180": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac48dd4f6c000103491f": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e67e29d75bd3200014f0c49": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 69.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 69.0,
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
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb999dd4f6c00010357f2": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e7ba3dbd3aeae00017fe180": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb983dd4f6c0001035666": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb962dd4f6c0001035406": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac48dd4f6c000103491f": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb96cdd4f6c00010354db": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e67e29d75bd3200014f0c49": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb959dd4f6c0001035343": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 69.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
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
                "id": "5e7ba3dbd3aeae00017fe180",
                "productId": null
            },
            {
                "id": "5e4eac47dd4f6c0001034912",
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
    },
    {
        "id": "5e4bb63cf79ecb0001a45c61",
        "creationDate": 1584542732638,
        "updateDate": 1584542732638,
        "tenantId": null,
        "href": null,
        "version": 16,
        "name": "Milano o Verona",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Parti da Milano o Verona senza spendere di più!"
            },
            "it": {
                "locale": "it",
                "value": "Parti da Milano o Verona senza spendere di più!"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-milano-verona.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-milano-verona.svg",
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
                "value": "Milano o Verona"
            },
            "it": {
                "locale": "it",
                "value": "Milano o Verona"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "P001",
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
        "ranking": 1,
        "availabilityTotal": 0.0,
        "insertionRule": "ALWAYS",
        "cluster": "airport",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e67e29d75bd3200014f0c49": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb962dd4f6c0001035406": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb999dd4f6c00010357f2": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e67e29d75bd3200014f0c49": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb959dd4f6c0001035343": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb983dd4f6c0001035666": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb96cdd4f6c00010354db": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb962dd4f6c0001035406",
                "productId": null
            },
            {
                "id": "5e4eb999dd4f6c00010357f2",
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
                "id": "5e4eb983dd4f6c0001035666",
                "productId": null
            },
            {
                "id": "5e4eb96cdd4f6c00010354db",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-airport-milano-verona.svg"
    },
    {
        "id": "5e4be553dd4f6c000102b345",
        "creationDate": 1589968777590,
        "updateDate": 1589968777590,
        "tenantId": null,
        "href": null,
        "version": 13,
        "name": "Milano",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "\"O mia bela Madunina che te brillet\" anche da quassù"
            },
            "it": {
                "locale": "it",
                "value": "\"O mia bela Madunina che te brillet\" anche da quassù"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-milano.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-milano.svg",
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
                "value": "Milano"
            },
            "it": {
                "locale": "it",
                "value": "Milano"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "P002",
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
        "ranking": 2,
        "availabilityTotal": 0.0,
        "insertionRule": "ALWAYS",
        "cluster": "airport",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb559dd4f6c0001034b74": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb959dd4f6c0001035343": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb559dd4f6c0001034b74",
                "productId": null
            },
            {
                "id": "5e4eac46dd4f6c0001034904",
                "productId": null
            },
            {
                "id": "5e4eac4cdd4f6c0001034950",
                "productId": null
            },
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            },
            {
                "id": "5e4eb440dd4f6c0001034aff",
                "productId": null
            },
            {
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-airport-milano.svg"
    },
    {
        "id": "5e4be600dd4f6c000102b36a",
        "creationDate": 1585821284634,
        "updateDate": 1585821284634,
        "tenantId": null,
        "href": null,
        "version": 7,
        "name": "Roma",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Tutte le strade portano all'aeroporto di Roma"
            },
            "it": {
                "locale": "it",
                "value": "Tutte le strade portano all'aeroporto di Roma"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-roma.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-roma.svg",
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
                "value": "Roma"
            },
            "it": {
                "locale": "it",
                "value": "Roma"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "P003",
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
        "cluster": "airport",
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
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4bdd4f6c0001034942": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e70f69360fe5c00018e9582": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac48dd4f6c000103491f": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb703dd4f6c0001034d25": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e67e29d75bd3200014f0c49": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 50.0,
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
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb999dd4f6c00010357f2": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4bdd4f6c0001034942": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e70f69360fe5c00018e9582": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb983dd4f6c0001035666": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb962dd4f6c0001035406": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac48dd4f6c000103491f": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb96cdd4f6c00010354db": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb703dd4f6c0001034d25": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e67e29d75bd3200014f0c49": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb959dd4f6c0001035343": {
                "amount": 50.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 50.0,
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
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-airport-roma.svg"
    },
    {
        "id": "5e4be68ddd4f6c000102b388",
        "creationDate": 1584542773380,
        "updateDate": 1584542773380,
        "tenantId": null,
        "href": null,
        "version": 5,
        "name": "Verona",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "\"Oh Romeo Romeo\" partiamo da qui Romeo"
            },
            "it": {
                "locale": "it",
                "value": "\"Oh Romeo Romeo\" partiamo da qui Romeo"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-verona.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-verona.svg",
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
                "value": "Verona"
            },
            "it": {
                "locale": "it",
                "value": "Verona"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "P004",
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
        "ranking": 4,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "airport",
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
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4bdd4f6c0001034942": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb712dd4f6c0001034e4c": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a2dd4f6c0001034374": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6eadd4f6c00010346fc": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb715dd4f6c0001034e87": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac48dd4f6c000103491f": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea49add4f6c00010342d0": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb703dd4f6c0001034d25": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0275bd3200014f343e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4e9d8cdd4f6c0001034104": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a7dd4f6c00010343a6": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 100.0,
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
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4bdd4f6c0001034942": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb712dd4f6c0001034e4c": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a2dd4f6c0001034374": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6eadd4f6c00010346fc": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb715dd4f6c0001034e87": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac48dd4f6c000103491f": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea49add4f6c00010342d0": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb703dd4f6c0001034d25": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0275bd3200014f343e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4e9d8cdd4f6c0001034104": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a7dd4f6c00010343a6": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 100.0,
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
                "id": "5e4eac4bdd4f6c0001034942",
                "productId": null
            },
            {
                "id": "5e4eac47dd4f6c0001034912",
                "productId": null
            },
            {
                "id": "5e4eb712dd4f6c0001034e4c",
                "productId": null
            },
            {
                "id": "5e4ea6a2dd4f6c0001034374",
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
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            },
            {
                "id": "5e4ea6eadd4f6c00010346fc",
                "productId": null
            },
            {
                "id": "5e4eb715dd4f6c0001034e87",
                "productId": null
            },
            {
                "id": "5e4eb559dd4f6c0001034b74",
                "productId": null
            },
            {
                "id": "5e4eac48dd4f6c000103491f",
                "productId": null
            },
            {
                "id": "5e4eac42dd4f6c00010348dd",
                "productId": null
            },
            {
                "id": "5e4eac46dd4f6c0001034904",
                "productId": null
            },
            {
                "id": "5e4ea49add4f6c00010342d0",
                "productId": null
            },
            {
                "id": "5e4eb703dd4f6c0001034d25",
                "productId": null
            },
            {
                "id": "5e689f0275bd3200014f343e",
                "productId": null
            },
            {
                "id": "5e4e9d8cdd4f6c0001034104",
                "productId": null
            },
            {
                "id": "5e4ea6a7dd4f6c00010343a6",
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
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-airport-verona.svg"
    },
    {
        "id": "5e4be74edd4f6c000102b3b0",
        "creationDate": 1584542808185,
        "updateDate": 1584542808185,
        "tenantId": null,
        "href": null,
        "version": 4,
        "name": "Bologna",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Voliamo alto sopra le due torri"
            },
            "it": {
                "locale": "it",
                "value": "Voliamo alto sopra le due torri"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-bologna.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-bologna.svg",
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
                "value": "Bologna"
            },
            "it": {
                "locale": "it",
                "value": "Bologna"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "P005",
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
        "ranking": 5,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "airport",
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
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4bdd4f6c0001034942": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb712dd4f6c0001034e4c": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a2dd4f6c0001034374": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6eadd4f6c00010346fc": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb715dd4f6c0001034e87": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac48dd4f6c000103491f": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea49add4f6c00010342d0": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb703dd4f6c0001034d25": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0275bd3200014f343e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4e9d8cdd4f6c0001034104": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a7dd4f6c00010343a6": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eac43dd4f6c00010348ea": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4bdd4f6c0001034942": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb712dd4f6c0001034e4c": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a2dd4f6c0001034374": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6eadd4f6c00010346fc": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb715dd4f6c0001034e87": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac48dd4f6c000103491f": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea49add4f6c00010342d0": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb703dd4f6c0001034d25": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0275bd3200014f343e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4e9d8cdd4f6c0001034104": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a7dd4f6c00010343a6": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 100.0,
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
                "id": "5e4eac4bdd4f6c0001034942",
                "productId": null
            },
            {
                "id": "5e4eac47dd4f6c0001034912",
                "productId": null
            },
            {
                "id": "5e4eb712dd4f6c0001034e4c",
                "productId": null
            },
            {
                "id": "5e4ea6a2dd4f6c0001034374",
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
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            },
            {
                "id": "5e4ea6eadd4f6c00010346fc",
                "productId": null
            },
            {
                "id": "5e4eb715dd4f6c0001034e87",
                "productId": null
            },
            {
                "id": "5e4eb559dd4f6c0001034b74",
                "productId": null
            },
            {
                "id": "5e4eac48dd4f6c000103491f",
                "productId": null
            },
            {
                "id": "5e4eac42dd4f6c00010348dd",
                "productId": null
            },
            {
                "id": "5e4eac46dd4f6c0001034904",
                "productId": null
            },
            {
                "id": "5e4ea49add4f6c00010342d0",
                "productId": null
            },
            {
                "id": "5e4eb703dd4f6c0001034d25",
                "productId": null
            },
            {
                "id": "5e689f0275bd3200014f343e",
                "productId": null
            },
            {
                "id": "5e4e9d8cdd4f6c0001034104",
                "productId": null
            },
            {
                "id": "5e4ea6a7dd4f6c00010343a6",
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
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-airport-bologna.svg"
    },
    {
        "id": "5e4be7aadd4f6c000102b3c4",
        "creationDate": 1584542823548,
        "updateDate": 1584542823548,
        "tenantId": null,
        "href": null,
        "version": 3,
        "name": "Torino",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Giochiamo in casa nostra"
            },
            "it": {
                "locale": "it",
                "value": "Giochiamo in casa nostra"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-torino.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-torino.svg",
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
                "value": "Torino"
            },
            "it": {
                "locale": "it",
                "value": "Torino"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "P006",
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
        "ranking": 6,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "airport",
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
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4bdd4f6c0001034942": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb712dd4f6c0001034e4c": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a2dd4f6c0001034374": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6eadd4f6c00010346fc": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb715dd4f6c0001034e87": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac48dd4f6c000103491f": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea49add4f6c00010342d0": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb703dd4f6c0001034d25": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0275bd3200014f343e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4e9d8cdd4f6c0001034104": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a7dd4f6c00010343a6": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 100.0,
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
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4bdd4f6c0001034942": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb712dd4f6c0001034e4c": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a2dd4f6c0001034374": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6eadd4f6c00010346fc": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb715dd4f6c0001034e87": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac48dd4f6c000103491f": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea49add4f6c00010342d0": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb703dd4f6c0001034d25": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0275bd3200014f343e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4e9d8cdd4f6c0001034104": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a7dd4f6c00010343a6": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 100.0,
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
                "id": "5e4eac4bdd4f6c0001034942",
                "productId": null
            },
            {
                "id": "5e4eac47dd4f6c0001034912",
                "productId": null
            },
            {
                "id": "5e4eb712dd4f6c0001034e4c",
                "productId": null
            },
            {
                "id": "5e4ea6a2dd4f6c0001034374",
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
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            },
            {
                "id": "5e4ea6eadd4f6c00010346fc",
                "productId": null
            },
            {
                "id": "5e4eb715dd4f6c0001034e87",
                "productId": null
            },
            {
                "id": "5e4eb559dd4f6c0001034b74",
                "productId": null
            },
            {
                "id": "5e4eac48dd4f6c000103491f",
                "productId": null
            },
            {
                "id": "5e4eac42dd4f6c00010348dd",
                "productId": null
            },
            {
                "id": "5e4eac46dd4f6c0001034904",
                "productId": null
            },
            {
                "id": "5e4ea49add4f6c00010342d0",
                "productId": null
            },
            {
                "id": "5e4eb703dd4f6c0001034d25",
                "productId": null
            },
            {
                "id": "5e689f0275bd3200014f343e",
                "productId": null
            },
            {
                "id": "5e4e9d8cdd4f6c0001034104",
                "productId": null
            },
            {
                "id": "5e4ea6a7dd4f6c00010343a6",
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
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-airport-torino.svg"
    },
    {
        "id": "5e4be7eedd4f6c000102b3d2",
        "creationDate": 1584542846644,
        "updateDate": 1584542846644,
        "tenantId": null,
        "href": null,
        "version": 5,
        "name": "Napoli",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "“Vide 'o mare quant'è bello” soprattutto in aereo"
            },
            "it": {
                "locale": "it",
                "value": "“Vide 'o mare quant'è bello” soprattutto in aereo"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-napoli.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-napoli.svg",
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
                "value": "Napoli"
            },
            "it": {
                "locale": "it",
                "value": "Napoli"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "P007",
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
        "ranking": 7,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "airport",
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
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4bdd4f6c0001034942": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb712dd4f6c0001034e4c": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a2dd4f6c0001034374": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6eadd4f6c00010346fc": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb715dd4f6c0001034e87": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac48dd4f6c000103491f": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea49add4f6c00010342d0": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb703dd4f6c0001034d25": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0275bd3200014f343e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4e9d8cdd4f6c0001034104": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a7dd4f6c00010343a6": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 100.0,
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
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4bdd4f6c0001034942": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb712dd4f6c0001034e4c": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a2dd4f6c0001034374": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6eadd4f6c00010346fc": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb715dd4f6c0001034e87": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac48dd4f6c000103491f": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea49add4f6c00010342d0": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb703dd4f6c0001034d25": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0275bd3200014f343e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4e9d8cdd4f6c0001034104": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a7dd4f6c00010343a6": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 100.0,
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
                "id": "5e4eac4bdd4f6c0001034942",
                "productId": null
            },
            {
                "id": "5e4eac47dd4f6c0001034912",
                "productId": null
            },
            {
                "id": "5e4eb712dd4f6c0001034e4c",
                "productId": null
            },
            {
                "id": "5e4ea6a2dd4f6c0001034374",
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
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            },
            {
                "id": "5e4ea6eadd4f6c00010346fc",
                "productId": null
            },
            {
                "id": "5e4eb715dd4f6c0001034e87",
                "productId": null
            },
            {
                "id": "5e4eb559dd4f6c0001034b74",
                "productId": null
            },
            {
                "id": "5e4eac48dd4f6c000103491f",
                "productId": null
            },
            {
                "id": "5e4eac42dd4f6c00010348dd",
                "productId": null
            },
            {
                "id": "5e4eac46dd4f6c0001034904",
                "productId": null
            },
            {
                "id": "5e4ea49add4f6c00010342d0",
                "productId": null
            },
            {
                "id": "5e4eb703dd4f6c0001034d25",
                "productId": null
            },
            {
                "id": "5e689f0275bd3200014f343e",
                "productId": null
            },
            {
                "id": "5e4e9d8cdd4f6c0001034104",
                "productId": null
            },
            {
                "id": "5e4ea6a7dd4f6c00010343a6",
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
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-airport-napoli.svg"
    },
    {
        "id": "5e4be825dd4f6c000102b3df",
        "creationDate": 1584542877865,
        "updateDate": 1584542877865,
        "tenantId": null,
        "href": null,
        "version": 4,
        "name": "Bari",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Vieni a volare in Puglia"
            },
            "it": {
                "locale": "it",
                "value": "Vieni a volare in Puglia"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-bari.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-bari.svg",
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
                "value": "Bari"
            },
            "it": {
                "locale": "it",
                "value": "Bari"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "P008",
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
        "ranking": 8,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "airport",
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
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4bdd4f6c0001034942": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb712dd4f6c0001034e4c": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a2dd4f6c0001034374": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6eadd4f6c00010346fc": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb715dd4f6c0001034e87": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac48dd4f6c000103491f": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea49add4f6c00010342d0": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb703dd4f6c0001034d25": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0275bd3200014f343e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4e9d8cdd4f6c0001034104": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a7dd4f6c00010343a6": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 100.0,
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
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4bdd4f6c0001034942": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb712dd4f6c0001034e4c": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a2dd4f6c0001034374": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6eadd4f6c00010346fc": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb715dd4f6c0001034e87": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac48dd4f6c000103491f": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea49add4f6c00010342d0": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb703dd4f6c0001034d25": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0275bd3200014f343e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4e9d8cdd4f6c0001034104": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a7dd4f6c00010343a6": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 100.0,
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
                "id": "5e4eac4bdd4f6c0001034942",
                "productId": null
            },
            {
                "id": "5e4eac47dd4f6c0001034912",
                "productId": null
            },
            {
                "id": "5e4eb712dd4f6c0001034e4c",
                "productId": null
            },
            {
                "id": "5e4ea6a2dd4f6c0001034374",
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
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            },
            {
                "id": "5e4ea6eadd4f6c00010346fc",
                "productId": null
            },
            {
                "id": "5e4eb715dd4f6c0001034e87",
                "productId": null
            },
            {
                "id": "5e4eb559dd4f6c0001034b74",
                "productId": null
            },
            {
                "id": "5e4eac48dd4f6c000103491f",
                "productId": null
            },
            {
                "id": "5e4eac42dd4f6c00010348dd",
                "productId": null
            },
            {
                "id": "5e4eac46dd4f6c0001034904",
                "productId": null
            },
            {
                "id": "5e4ea49add4f6c00010342d0",
                "productId": null
            },
            {
                "id": "5e4eb703dd4f6c0001034d25",
                "productId": null
            },
            {
                "id": "5e689f0275bd3200014f343e",
                "productId": null
            },
            {
                "id": "5e4e9d8cdd4f6c0001034104",
                "productId": null
            },
            {
                "id": "5e4ea6a7dd4f6c00010343a6",
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
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-airport-bari.svg"
    },
    {
        "id": "5e4be9e2dd4f6c000102b43b",
        "creationDate": 1584542892090,
        "updateDate": 1584542892090,
        "tenantId": null,
        "href": null,
        "version": 3,
        "name": "Catania",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Arancino o arancina? Tranquilli, vi facciamo volare tutti!"
            },
            "it": {
                "locale": "it",
                "value": "Arancino o arancina? Tranquilli, vi facciamo volare tutti!"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-catania.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-catania.svg",
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
                "value": "Catania"
            },
            "it": {
                "locale": "it",
                "value": "Catania"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "P009",
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
        "ranking": 9,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "airport",
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
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4bdd4f6c0001034942": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb712dd4f6c0001034e4c": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a2dd4f6c0001034374": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6eadd4f6c00010346fc": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb715dd4f6c0001034e87": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac48dd4f6c000103491f": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea49add4f6c00010342d0": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb703dd4f6c0001034d25": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0275bd3200014f343e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4e9d8cdd4f6c0001034104": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a7dd4f6c00010343a6": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 100.0,
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
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4bdd4f6c0001034942": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb712dd4f6c0001034e4c": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a2dd4f6c0001034374": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6eadd4f6c00010346fc": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb715dd4f6c0001034e87": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac48dd4f6c000103491f": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea49add4f6c00010342d0": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb703dd4f6c0001034d25": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0275bd3200014f343e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4e9d8cdd4f6c0001034104": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a7dd4f6c00010343a6": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 100.0,
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
                "id": "5e4eac4bdd4f6c0001034942",
                "productId": null
            },
            {
                "id": "5e4eac47dd4f6c0001034912",
                "productId": null
            },
            {
                "id": "5e4eb712dd4f6c0001034e4c",
                "productId": null
            },
            {
                "id": "5e4ea6a2dd4f6c0001034374",
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
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            },
            {
                "id": "5e4ea6eadd4f6c00010346fc",
                "productId": null
            },
            {
                "id": "5e4eb715dd4f6c0001034e87",
                "productId": null
            },
            {
                "id": "5e4eb559dd4f6c0001034b74",
                "productId": null
            },
            {
                "id": "5e4eac48dd4f6c000103491f",
                "productId": null
            },
            {
                "id": "5e4eac42dd4f6c00010348dd",
                "productId": null
            },
            {
                "id": "5e4eac46dd4f6c0001034904",
                "productId": null
            },
            {
                "id": "5e4ea49add4f6c00010342d0",
                "productId": null
            },
            {
                "id": "5e4eb703dd4f6c0001034d25",
                "productId": null
            },
            {
                "id": "5e689f0275bd3200014f343e",
                "productId": null
            },
            {
                "id": "5e4e9d8cdd4f6c0001034104",
                "productId": null
            },
            {
                "id": "5e4ea6a7dd4f6c00010343a6",
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
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-airport-catania.svg"
    },
    {
        "id": "5e4beb7fdd4f6c000102b491",
        "creationDate": 1584542920413,
        "updateDate": 1584542920413,
        "tenantId": null,
        "href": null,
        "version": 5,
        "name": "Cagliari",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Eja, hai capito bene!"
            },
            "it": {
                "locale": "it",
                "value": "Eja, hai capito bene!"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-cagliari.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-airport-cagliari.svg",
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
                "value": "Cagliari"
            },
            "it": {
                "locale": "it",
                "value": "Cagliari"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "P010",
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
        "ranking": 10,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "airport",
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
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4bdd4f6c0001034942": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb712dd4f6c0001034e4c": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a2dd4f6c0001034374": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6eadd4f6c00010346fc": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb715dd4f6c0001034e87": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac48dd4f6c000103491f": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea49add4f6c00010342d0": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb703dd4f6c0001034d25": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0275bd3200014f343e": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4e9d8cdd4f6c0001034104": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a7dd4f6c00010343a6": [
                        {
                            "amount": 100.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 100.0,
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
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4bdd4f6c0001034942": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb712dd4f6c0001034e4c": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a2dd4f6c0001034374": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6eadd4f6c00010346fc": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb715dd4f6c0001034e87": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac48dd4f6c000103491f": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea49add4f6c00010342d0": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb703dd4f6c0001034d25": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0275bd3200014f343e": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4e9d8cdd4f6c0001034104": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a7dd4f6c00010343a6": {
                "amount": 100.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 100.0,
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
                "id": "5e4eac4bdd4f6c0001034942",
                "productId": null
            },
            {
                "id": "5e4eac47dd4f6c0001034912",
                "productId": null
            },
            {
                "id": "5e4eb712dd4f6c0001034e4c",
                "productId": null
            },
            {
                "id": "5e4ea6a2dd4f6c0001034374",
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
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            },
            {
                "id": "5e4ea6eadd4f6c00010346fc",
                "productId": null
            },
            {
                "id": "5e4eb715dd4f6c0001034e87",
                "productId": null
            },
            {
                "id": "5e4eb559dd4f6c0001034b74",
                "productId": null
            },
            {
                "id": "5e4eac48dd4f6c000103491f",
                "productId": null
            },
            {
                "id": "5e4eac42dd4f6c00010348dd",
                "productId": null
            },
            {
                "id": "5e4eac46dd4f6c0001034904",
                "productId": null
            },
            {
                "id": "5e4ea49add4f6c00010342d0",
                "productId": null
            },
            {
                "id": "5e4eb703dd4f6c0001034d25",
                "productId": null
            },
            {
                "id": "5e689f0275bd3200014f343e",
                "productId": null
            },
            {
                "id": "5e4e9d8cdd4f6c0001034104",
                "productId": null
            },
            {
                "id": "5e4ea6a7dd4f6c00010343a6",
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
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-airport-cagliari.svg"
    },
    {
        "id": "5e569000fca08400016da28d",
        "creationDate": 1582732180090,
        "updateDate": 1582732180090,
        "tenantId": null,
        "href": null,
        "version": 2,
        "name": "Corfù",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-corfu.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-corfu.jpg",
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
                "value": "Corfù"
            },
            "it": {
                "locale": "it",
                "value": "Corfù"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E006",
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
        "ranking": 6,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb959dd4f6c0001035343": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-corfu.jpg"
    },
    {
        "id": "5e56906dfca08400016da2a5",
        "creationDate": 1582732159330,
        "updateDate": 1582732159330,
        "tenantId": null,
        "href": null,
        "version": 1,
        "name": "Creta",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-creta.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-creta.jpg",
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
                "value": "Creta"
            },
            "it": {
                "locale": "it",
                "value": "Creta"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E007",
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
        "ranking": 7,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb959dd4f6c0001035343": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb962dd4f6c0001035406": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            },
            {
                "id": "5e4eb962dd4f6c0001035406",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-creta.jpg"
    },
    {
        "id": "5e56935efca08400016da33f",
        "creationDate": 1582732126037,
        "updateDate": 1582732126037,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Kos",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-kos.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-kos.jpg",
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
                "value": "Kos"
            },
            "it": {
                "locale": "it",
                "value": "Kos"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E014",
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
        "ranking": 14,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb959dd4f6c0001035343": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-kos.jpg"
    },
    {
        "id": "5e5693dbfca08400016da35a",
        "creationDate": 1582732251135,
        "updateDate": 1582732251135,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Bahamas",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-bahamas.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-bahamas.jpg",
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
                "value": "Bahamas"
            },
            "it": {
                "locale": "it",
                "value": "Bahamas"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E001",
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
        "ranking": 1,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb999dd4f6c00010357f2": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb999dd4f6c00010357f2",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-bahamas.jpg"
    },
    {
        "id": "5e569434fca08400016da36d",
        "creationDate": 1582732340494,
        "updateDate": 1582732340494,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Berenice",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-berenice.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-berenice.jpg",
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
                "value": "Berenice"
            },
            "it": {
                "locale": "it",
                "value": "Berenice"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E002",
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
        "ranking": 2,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb96cdd4f6c00010354db": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb96cdd4f6c00010354db",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-berenice.jpg"
    },
    {
        "id": "5e56949ffca08400016da383",
        "creationDate": 1582732447775,
        "updateDate": 1582732447775,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Capo Verde",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-capoverde.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-capoverde.jpg",
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
                "value": "Capo Verde"
            },
            "it": {
                "locale": "it",
                "value": "Capo Verde"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E004",
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
        "ranking": 4,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb983dd4f6c0001035666": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb983dd4f6c0001035666",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-capoverde.jpg"
    },
    {
        "id": "5e5694ddfca08400016da391",
        "creationDate": 1582732509654,
        "updateDate": 1582732509654,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Cayo Largo",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-cayolargo.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-cayolargo.jpg",
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
                "value": "Cayo Largo"
            },
            "it": {
                "locale": "it",
                "value": "Cayo Largo"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E005",
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
        "ranking": 5,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb983dd4f6c0001035666": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb983dd4f6c0001035666",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-cayolargo.jpg"
    },
    {
        "id": "5e569528fca08400016da3a1",
        "creationDate": 1582732584643,
        "updateDate": 1582732584643,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Formentera",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-formentera.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-formentera.jpg",
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
                "value": "Formentera"
            },
            "it": {
                "locale": "it",
                "value": "Formentera"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E008",
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
        "ranking": 8,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb959dd4f6c0001035343": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-formentera.jpg"
    },
    {
        "id": "5e569576fca08400016da3b2",
        "creationDate": 1582732662524,
        "updateDate": 1582732662524,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Fuerteventura",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-fuerteventura.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-fuerteventura.jpg",
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
                "value": "Fuerteventura"
            },
            "it": {
                "locale": "it",
                "value": "Fuerteventura"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E009",
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
        "ranking": 9,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb96cdd4f6c00010354db": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb96cdd4f6c00010354db",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-fuerteventura.jpg"
    },
    {
        "id": "5e569709fca08400016da405",
        "creationDate": 1582733065536,
        "updateDate": 1582733065536,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Gran Canaria",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-grancanaria.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-grancanaria.jpg",
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
                "value": "Gran Canaria"
            },
            "it": {
                "locale": "it",
                "value": "Gran Canaria"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E010",
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
        "ranking": 10,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb96cdd4f6c00010354db": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb96cdd4f6c00010354db",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-grancanaria.jpg"
    },
    {
        "id": "5e56975cfca08400016da417",
        "creationDate": 1582733148194,
        "updateDate": 1582733148194,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Ibiza",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-ibiza.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-ibiza.jpg",
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
                "value": "Ibiza"
            },
            "it": {
                "locale": "it",
                "value": "Ibiza"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E011",
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
        "ranking": 11,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb959dd4f6c0001035343": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb962dd4f6c0001035406": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            },
            {
                "id": "5e4eb962dd4f6c0001035406",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-ibiza.jpg"
    },
    {
        "id": "5e5697eefca08400016da435",
        "creationDate": 1582733294325,
        "updateDate": 1582733294325,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Karpathos",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-karpathos.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-karpathos.jpg",
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
                "value": "Karpathos"
            },
            "it": {
                "locale": "it",
                "value": "Karpathos"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E012",
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
        "ranking": 12,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb959dd4f6c0001035343": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb962dd4f6c0001035406": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            },
            {
                "id": "5e4eb962dd4f6c0001035406",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-karpathos.jpg"
    },
    {
        "id": "5e569829fca08400016da442",
        "creationDate": 1582733353241,
        "updateDate": 1582733353241,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Kenya",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-kenya.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-kenya.jpg",
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
                "value": "Kenya"
            },
            "it": {
                "locale": "it",
                "value": "Kenya"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E013",
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
        "ranking": 13,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb983dd4f6c0001035666": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb983dd4f6c0001035666",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-kenya.jpg"
    },
    {
        "id": "5e569910fca08400016da472",
        "creationDate": 1582733584882,
        "updateDate": 1582733584882,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Madagascar",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-madagascar.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-madagascar.jpg",
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
                "value": "Madagascar"
            },
            "it": {
                "locale": "it",
                "value": "Madagascar"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E015",
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
        "ranking": 15,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb999dd4f6c00010357f2": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb999dd4f6c00010357f2",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-madagascar.jpg"
    },
    {
        "id": "5e569967fca08400016da485",
        "creationDate": 1582733671853,
        "updateDate": 1582733671853,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Marsa Alam",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-marsaalam.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-marsaalam.jpg",
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
                "value": "Marsa Alam"
            },
            "it": {
                "locale": "it",
                "value": "Marsa Alam"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E016",
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
        "ranking": 16,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb96cdd4f6c00010354db": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb96cdd4f6c00010354db",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-marsaalam.jpg"
    },
    {
        "id": "5e569a22fca08400016da4ac",
        "creationDate": 1582733858776,
        "updateDate": 1582733858776,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Mauritius",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-mauritius.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-mauritius.jpg",
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
                "value": "Mauritius"
            },
            "it": {
                "locale": "it",
                "value": "Mauritius"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E017",
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
        "ranking": 17,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb999dd4f6c00010357f2": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb999dd4f6c00010357f2",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-mauritius.jpg"
    },
    {
        "id": "5e569a5efca08400016da4b9",
        "creationDate": 1582733918383,
        "updateDate": 1582733918383,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Messico",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-messico.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-messico.jpg",
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
                "value": "Messico"
            },
            "it": {
                "locale": "it",
                "value": "Messico"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E018",
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
        "ranking": 18,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb983dd4f6c0001035666": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb983dd4f6c0001035666",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-messico.jpg"
    },
    {
        "id": "5e569cb9fca08400016da535",
        "creationDate": 1582734521151,
        "updateDate": 1582734521151,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Minorca",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-minorca.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-minorca.jpg",
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
                "value": "Minorca"
            },
            "it": {
                "locale": "it",
                "value": "Minorca"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E019",
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
        "ranking": 19,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb962dd4f6c0001035406": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb962dd4f6c0001035406",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-minorca.jpg"
    },
    {
        "id": "5e5ccfacc06520000163c90a",
        "creationDate": 1583364790812,
        "updateDate": 1583364790812,
        "tenantId": null,
        "href": null,
        "version": 6,
        "name": "Modifica Pratica",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Modifica Pratica"
            },
            "it": {
                "locale": "it",
                "value": "Modifica Pratica"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg",
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
                "value": "Modifica Pratica"
            },
            "it": {
                "locale": "it",
                "value": "Modifica Pratica"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "B001",
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
        "ranking": 0,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL",
        "cluster": "other",
        "composable": true,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {},
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {},
        "relatedTo": [],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg"
    },
    {
        "id": "5e5cd03ec06520000163c929",
        "creationDate": 1583364773654,
        "updateDate": 1583364773654,
        "tenantId": null,
        "href": null,
        "version": 18,
        "name": "Supplemento Singola",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Supplemento Singola"
            },
            "it": {
                "locale": "it",
                "value": "Supplemento Singola"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg",
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
                "value": "Supplemento Singola"
            },
            "it": {
                "locale": "it",
                "value": "Supplemento Singola"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "B002",
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
        "ranking": 0,
        "availabilityTotal": 0.0,
        "insertionRule": "ONLY_ONE_TRAVELER",
        "cluster": "other",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 250.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb712dd4f6c0001034e4c": [
                        {
                            "amount": 155.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6a2dd4f6c0001034374": [
                        {
                            "amount": 1499.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 250.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 259.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4ea6eadd4f6c00010346fc": [
                        {
                            "amount": 499.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb559dd4f6c0001034b74": [
                        {
                            "amount": 249.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 250.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 1199.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 250.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb7e7dd4f6c0001034ef5": [
                        {
                            "amount": 269.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 250.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 149.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb999dd4f6c00010357f2": {
                "amount": 250.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb712dd4f6c0001034e4c": {
                "amount": 155.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6a2dd4f6c0001034374": {
                "amount": 1499.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb983dd4f6c0001035666": {
                "amount": 250.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 259.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4ea6eadd4f6c00010346fc": {
                "amount": 499.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb559dd4f6c0001034b74": {
                "amount": 249.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb962dd4f6c0001035406": {
                "amount": 250.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 1199.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb96cdd4f6c00010354db": {
                "amount": 250.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb7e7dd4f6c0001034ef5": {
                "amount": 269.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb959dd4f6c0001035343": {
                "amount": 250.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 149.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb999dd4f6c00010357f2",
                "productId": null
            },
            {
                "id": "5e4eb712dd4f6c0001034e4c",
                "productId": null
            },
            {
                "id": "5e4ea6a2dd4f6c0001034374",
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
                "id": "5e4ea6eadd4f6c00010346fc",
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
                "id": "5e4eac46dd4f6c0001034904",
                "productId": null
            },
            {
                "id": "5e4eb96cdd4f6c00010354db",
                "productId": null
            },
            {
                "id": "5e4eb7e7dd4f6c0001034ef5",
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
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg"
    },
    {
        "id": "5e5cd097c06520000163c93c",
        "creationDate": 1583364757351,
        "updateDate": 1583364757351,
        "tenantId": null,
        "href": null,
        "version": 10,
        "name": "Supplemento Visto",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Supplemento Visto"
            },
            "it": {
                "locale": "it",
                "value": "Supplemento Visto"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg",
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
                "value": "Supplemento Visto"
            },
            "it": {
                "locale": "it",
                "value": "Supplemento Visto"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "B003",
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
        "ranking": 0,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL",
        "cluster": "other",
        "composable": true,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {},
                "pricingRuleType": "FIXED_PER_PERSON"
            }
        ],
        "costs": {},
        "relatedTo": [],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg"
    },
    {
        "id": "5e5cd0d9c06520000163c94a",
        "creationDate": 1589872537459,
        "updateDate": 1589872537459,
        "tenantId": null,
        "href": null,
        "version": 6,
        "name": "Penale",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "penale"
            },
            "it": {
                "locale": "it",
                "value": "penale"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg",
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
                "value": "Penale"
            },
            "it": {
                "locale": "it",
                "value": "Penale"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "B004",
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
        "ranking": 0,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL",
        "cluster": "other",
        "composable": true,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e7ba3dbd3aeae00017fe180": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e7ba3dbd3aeae00017fe180": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e7ba3dbd3aeae00017fe180",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg"
    },
    {
        "id": "5e66824b10a1390001269f43",
        "creationDate": 1583776331557,
        "updateDate": 1583776331557,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Mykonos",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-mykonos.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-mykonos.jpg",
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
                "value": "Mykonos"
            },
            "it": {
                "locale": "it",
                "value": "Mykonos"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E020",
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
        "ranking": 20,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb959dd4f6c0001035343": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-mykonos.jpg"
    },
    {
        "id": "5e66871010a139000126a03c",
        "creationDate": 1583777552070,
        "updateDate": 1583777552070,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Naxos",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-naxos.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-naxos.jpg",
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
                "value": "Naxos"
            },
            "it": {
                "locale": "it",
                "value": "Naxos"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E021",
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
        "ranking": 21,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb959dd4f6c0001035343": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-naxos.jpg"
    },
    {
        "id": "5e6687bb10a139000126a060",
        "creationDate": 1583777723945,
        "updateDate": 1583777723945,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Oman",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-oman.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-oman.jpg",
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
                "value": "Oman"
            },
            "it": {
                "locale": "it",
                "value": "Oman"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E022",
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
        "ranking": 22,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb999dd4f6c00010357f2": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb999dd4f6c00010357f2",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-oman.jpg"
    },
    {
        "id": "5e66881a10a139000126a074",
        "creationDate": 1583777818258,
        "updateDate": 1583777818258,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Maiorca",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-palma.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-palma.jpg",
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
                "value": "Maiorca"
            },
            "it": {
                "locale": "it",
                "value": "Maiorca"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E023",
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
        "ranking": 23,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb959dd4f6c0001035343": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb962dd4f6c0001035406": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            },
            {
                "id": "5e4eb962dd4f6c0001035406",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-palma.jpg"
    },
    {
        "id": "5e66886410a139000126a084",
        "creationDate": 1583777892948,
        "updateDate": 1583777892948,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Repubblica Dominicana",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-repdominicana.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-repdominicana.jpg",
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
                "value": "Repubblica Dominicana"
            },
            "it": {
                "locale": "it",
                "value": "Repubblica Dominicana"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E025",
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
        "ranking": 25,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb983dd4f6c0001035666": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb983dd4f6c0001035666",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-repdominicana.jpg"
    },
    {
        "id": "5e66896f10a139000126a0bb",
        "creationDate": 1583778159470,
        "updateDate": 1583778159470,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Rodi",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-rodi.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-rodi.jpg",
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
                "value": "Rodi"
            },
            "it": {
                "locale": "it",
                "value": "Rodi"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E026",
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
        "ranking": 26,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb959dd4f6c0001035343": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb962dd4f6c0001035406": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            },
            {
                "id": "5e4eb962dd4f6c0001035406",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-rodi.jpg"
    },
    {
        "id": "5e6689b310a139000126a0ca",
        "creationDate": 1583778227771,
        "updateDate": 1583778227771,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Santorini",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-santorini.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-santorini.jpg",
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
                "value": "Santorini"
            },
            "it": {
                "locale": "it",
                "value": "Santorini"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E027",
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
        "ranking": 27,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb959dd4f6c0001035343": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-santorini.jpg"
    },
    {
        "id": "5e6689f210a139000126a0d8",
        "creationDate": 1583778290585,
        "updateDate": 1583778290585,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Sharm El Sheik",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-sharm.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-sharm.jpg",
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
                "value": "Sharm El Sheik"
            },
            "it": {
                "locale": "it",
                "value": "Sharm El Sheik"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E029",
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
        "ranking": 29,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb96cdd4f6c00010354db": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb96cdd4f6c00010354db",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-sharm.jpg"
    },
    {
        "id": "5e668a3010a139000126a0e6",
        "creationDate": 1583778518729,
        "updateDate": 1583778518729,
        "tenantId": null,
        "href": null,
        "version": 1,
        "name": "Tenerife",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-tenerife.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-tenerife.jpg",
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
                "value": "Tenerife"
            },
            "it": {
                "locale": "it",
                "value": "Tenerife"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E031",
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
        "ranking": 30,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb96cdd4f6c00010354db": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb96cdd4f6c00010354db",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-tenerife.jpg"
    },
    {
        "id": "5e668ab110a139000126a101",
        "creationDate": 1583778481202,
        "updateDate": 1583778481202,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Varadero",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-varadero.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-varadero.jpg",
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
                "value": "Varadero"
            },
            "it": {
                "locale": "it",
                "value": "Varadero"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E32",
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
        "ranking": 32,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb983dd4f6c0001035666": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb983dd4f6c0001035666",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-varadero.jpg"
    },
    {
        "id": "5e668b2210a139000126a118",
        "creationDate": 1583778594536,
        "updateDate": 1583778594536,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "zanzibar",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-zanzibar.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-zanzibar.jpg",
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
                "value": "zanzibar"
            },
            "it": {
                "locale": "it",
                "value": "zanzibar"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E33",
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
        "ranking": 33,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb999dd4f6c00010357f2": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb999dd4f6c00010357f2",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-zanzibar.jpg"
    },
    {
        "id": "5e668b6d10a139000126a129",
        "creationDate": 1583778669085,
        "updateDate": 1583778669085,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Thailandia",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-thailandia.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-thailandia.jpg",
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
                "value": "Thailandia"
            },
            "it": {
                "locale": "it",
                "value": "Thailandia"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E034",
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
        "ranking": 34,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb999dd4f6c00010357f2": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb999dd4f6c00010357f2",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-thailandia.jpg"
    },
    {
        "id": "5e668bb910a139000126a13a",
        "creationDate": 1583778745457,
        "updateDate": 1583778745457,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Vietnam",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-vietnam.jpg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-vietnam.jpg",
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
                "value": "Vietnam"
            },
            "it": {
                "locale": "it",
                "value": "Vietnam"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "E035",
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
        "ranking": 35,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "destination",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 70.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb999dd4f6c00010357f2": {
                "amount": 70.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb999dd4f6c00010357f2",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-escludiuna-vietnam.jpg"
    },
    {
        "id": "5e6a3bd7834e4700016fb98b",
        "creationDate": 1590151487541,
        "updateDate": 1590151487541,
        "tenantId": null,
        "href": null,
        "version": 11,
        "name": "Rimanda data Partenza",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Prenota entro il 31 Marzo. Puoi cambiare gratis la settimana di partenza fino a 7 giorni prima la data del tuo viaggio."
            },
            "it": {
                "locale": "it",
                "value": "Prenota entro il 31 Marzo. Puoi cambiare gratis la settimana di partenza fino a 7 giorni prima la data del tuo viaggio."
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-cambiodata.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-cambiodata.svg",
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
                "value": "Rimanda data Partenza"
            },
            "it": {
                "locale": "it",
                "value": "Rimanda data Partenza"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "A001",
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
        "ranking": 1,
        "availabilityTotal": 0.0,
        "insertionRule": "ALWAYS",
        "cluster": "extra",
        "composable": true,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb962dd4f6c0001035406": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e67e29d75bd3200014f0c49": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb959dd4f6c0001035343": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb999dd4f6c00010357f2": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb962dd4f6c0001035406": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e67e29d75bd3200014f0c49": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb983dd4f6c0001035666": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb959dd4f6c0001035343": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb96cdd4f6c00010354db": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb999dd4f6c00010357f2",
                "productId": null
            },
            {
                "id": "5e4eb962dd4f6c0001035406",
                "productId": null
            },
            {
                "id": "5e67e29d75bd3200014f0c49",
                "productId": null
            },
            {
                "id": "5e4eb983dd4f6c0001035666",
                "productId": null
            },
            {
                "id": "5e4eb959dd4f6c0001035343",
                "productId": null
            },
            {
                "id": "5e4eb96cdd4f6c00010354db",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-cambiodata.svg"
    },
    {
        "id": "5e72322e8b87ab00011620b5",
        "creationDate": 1584957903409,
        "updateDate": 1584957903409,
        "tenantId": null,
        "href": null,
        "version": 2,
        "name": "Assicurazione Base",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Questa assicurazione inclusa ti fornirà assistenza, copertura spese mediche fino a 5.000€ e fino a 1.000€ per il bagaglio oltre ad un massimo di 310€ per acquisti di prima necessità."
            },
            "it": {
                "locale": "it",
                "value": "Questa assicurazione inclusa ti fornirà assistenza, copertura spese mediche fino a 5.000€ e fino a 1.000€ per il bagaglio oltre ad un massimo di 310€ per acquisti di prima necessità."
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-inclusa.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-inclusa.svg",
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
                "value": "Assicurazione Base"
            },
            "it": {
                "locale": "it",
                "value": "Assicurazione Base"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "002",
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
        "ranking": 1,
        "availabilityTotal": 0.0,
        "insertionRule": "ALWAYS",
        "cluster": "base-insurance",
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
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb999dd4f6c00010357f2": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4bdd4f6c0001034942": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac47dd4f6c0001034912": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac4cdd4f6c0001034950": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e689f0375bd3200014f345e": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac48dd4f6c000103491f": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac42dd4f6c00010348dd": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eac46dd4f6c0001034904": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb703dd4f6c0001034d25": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e67e29d75bd3200014f0c49": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb440dd4f6c0001034aff": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eac43dd4f6c00010348ea": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb999dd4f6c00010357f2": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4bdd4f6c0001034942": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac47dd4f6c0001034912": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac4cdd4f6c0001034950": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e689f0375bd3200014f345e": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb983dd4f6c0001035666": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac48dd4f6c000103491f": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac42dd4f6c00010348dd": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eac46dd4f6c0001034904": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb96cdd4f6c00010354db": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb703dd4f6c0001034d25": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e67e29d75bd3200014f0c49": {
                "amount": 0.0,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            },
            "5e4eb440dd4f6c0001034aff": {
                "amount": 0.0,
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
                "id": "5e4eac48dd4f6c000103491f",
                "productId": null
            },
            {
                "id": "5e4eac42dd4f6c00010348dd",
                "productId": null
            },
            {
                "id": "5e4eac46dd4f6c0001034904",
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
                "id": "5e4eb440dd4f6c0001034aff",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-inclusa.svg"
    },
    {
        "id": "5e9586463f0192e76a8341f3",
        "creationDate": 1585211993341,
        "updateDate": 1585211993341,
        "tenantId": null,
        "href": null,
        "version": 36,
        "name": "Fee agenzia",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": ""
            },
            "it": {
                "locale": "it",
                "value": ""
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-annullamento.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-annullamento.svg",
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
        "status": "",
        "slug": null,
        "customSlugs": null,
        "statusHistory": [],
        "names": {
            "en": {
                "locale": "en",
                "value": "Fee agenzia"
            },
            "it": {
                "locale": "it",
                "value": "Fee agenzia"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "FEE",
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
        "ranking": 1,
        "availabilityTotal": 0.0,
        "insertionRule": "AGENCY_CART",
        "cluster": "agency-fee",
        "composable": true,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "*": [
                        {
                            "amount": -50.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "*": {
                "amount": 40.98,
                "name": {
                    "locale": "it",
                    "value": "Euro (decimal)"
                }
            }
        },
        "relatedTo": [],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-assicurazione-annullamento.svg"
    },
    {
        "id": "5ec27ae4bee4e40001e6ffbc",
        "creationDate": 1589972156532,
        "updateDate": 1589972156532,
        "tenantId": null,
        "href": null,
        "version": 2,
        "name": "Penale x Voucher",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "penale per voucher"
            },
            "it": {
                "locale": "it",
                "value": "penale per voucher"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg",
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
                "value": "Penale x Voucher"
            },
            "it": {
                "locale": "it",
                "value": "Penale x Voucher"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "B005",
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
        "ranking": 0,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL",
        "cluster": "other",
        "composable": true,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb983dd4f6c0001035666": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ],
                    "5e4eb96cdd4f6c00010354db": [
                        {
                            "amount": 0.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb983dd4f6c0001035666": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e4eb96cdd4f6c00010354db": {
                "amount": 0.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb983dd4f6c0001035666",
                "productId": null
            },
            {
                "id": "5e4eb96cdd4f6c00010354db",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/ancillary-backoffice.svg"
    },
    {
        "id": "5ec798183e3fbc0001f40fe5",
        "creationDate": 1590139785284,
        "updateDate": 1590139785284,
        "tenantId": null,
        "href": null,
        "version": 2,
        "name": "Noleggio Auto",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Questo noleggio è per 6 giorni"
            },
            "it": {
                "locale": "it",
                "value": "Questo noleggio è per 6 giorni"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/sparkpost-icona-faq.png",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/sparkpost-icona-faq.png",
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
                "value": "Noleggio Auto"
            },
            "it": {
                "locale": "it",
                "value": "Noleggio Auto"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "C001",
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
        "ranking": 0,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "car-rental",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 195.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 192.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/sparkpost-icona-faq.png"
    },
    {
        "id": "5ec798d43e3fbc0001f40fe6",
        "creationDate": 1590139092860,
        "updateDate": 1590139092860,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Noleggio Auto 2",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Noleggio auto + caro"
            },
            "it": {
                "locale": "it",
                "value": "Noleggio auto + caro"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/sparkpost-icona-faq.png",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/sparkpost-icona-faq.png",
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
                "value": "Noleggio Auto 2"
            },
            "it": {
                "locale": "it",
                "value": "Noleggio Auto 2"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "C002",
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
        "ranking": 0,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL_NO_SAME_CLUSTER",
        "cluster": "car-rental",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 229.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 224.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/sparkpost-icona-faq.png"
    },
    {
        "id": "5ec799823e3fbc0001f40fe7",
        "creationDate": 1590139266288,
        "updateDate": 1590139266288,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": "Integrazione Assicurazione",
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "Proteggi i cristalli Furbo"
            },
            "it": {
                "locale": "it",
                "value": "Proteggi i cristalli Furbo"
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
                    "imageURL": "https://utravel.s3.amazonaws.com/sparkpost-icona-orologio.png",
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
                    "imageURL": "https://utravel.s3.amazonaws.com/sparkpost-icona-orologio.png",
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
                "value": "Integrazione Assicurazione"
            },
            "it": {
                "locale": "it",
                "value": "Integrazione Assicurazione"
            }
        },
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
        "manufacturerCode": "C004",
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
        "ranking": 0,
        "availabilityTotal": 0.0,
        "insertionRule": "MANUAL",
        "cluster": "extra",
        "composable": true,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": false,
            "ROLE_MERCHANT_PRICEBOX": false,
            "USER_SUPPLIER": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e4eb6f4dd4f6c0001034bfe": [
                        {
                            "amount": 104.0,
                            "name": {
                                "locale": "it",
                                "value": "Euro (decimal)"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e4eb6f4dd4f6c0001034bfe": {
                "amount": 145.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            }
        },
        "relatedTo": [
            {
                "id": "5e4eb6f4dd4f6c0001034bfe",
                "productId": null
            }
        ],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": "https://utravel.s3.amazonaws.com/sparkpost-icona-orologio.png"
    },
    {
        "id": "60229563b3cb1f0001bfe041",
        "creationDate": 1612879202932,
        "updateDate": 1612879202932,
        "tenantId": null,
        "href": null,
        "version": 0,
        "name": null,
        "descriptions": null,
        "erpCode": null,
        "brand": null,
        "externalCode": null,
        "externalParentCode": null,
        "sku": null,
        "articleId": null,
        "customSkus": null,
        "attributes": {},
        "published": false,
        "publicationDate": null,
        "productDescriptionCompleteness": false,
        "threshold": 0,
        "photoGallery": {
            "images": [],
            "thumbnails": [],
            "sequence": 0,
            "allImages": []
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
        "names": null,
        "seller": null,
        "numberOfComments": 0,
        "declareVariants": null,
        "photoAttributes": null,
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
        "ranking": 42,
        "availabilityTotal": 0.0,
        "insertionRule": "ONLY_ONE_TRAVELER",
        "cluster": "Bob's Cluster",
        "composable": false,
        "orderVisibilityMatrix": {
            "ROLE_ADMIN": true,
            "ROLE_MERCHANT_PRICEBOX": false
        },
        "pricingRules": [
            {
                "pricingParameterMap": {
                    "5e7baaffdbc33c00013ef99d": [
                        {
                            "amount": 41.0,
                            "name": {
                                "locale": "it",
                                "value": "Idk"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            },
            {
                "pricingParameterMap": {
                    "5e78e8396014c0000138b96b": [
                        {
                            "amount": 3.141592653589793,
                            "name": {
                                "locale": "it",
                                "value": "Idk"
                            }
                        }
                    ]
                },
                "pricingRuleType": "FIXED_PRICE"
            }
        ],
        "costs": {
            "5e78e8396014c0000138b96b": {
                "amount": 41.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            },
            "5e7baaffdbc33c00013ef99d": {
                "amount": 42.0,
                "name": {
                    "locale": "en",
                    "value": "Euro"
                }
            }
        },
        "relatedTo": [],
        "attributeDescription": null,
        "microCategory": null,
        "macroCategory": null,
        "department": null,
        "pricesComparison": null,
        "coverPhotoUrl": null
    }
]
```

## Errors

for more info on error - [Errors ](/1.0.0/errors.html) 