# Get Specific Product

Select specific product with given ID

 ## URL
 ### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/products/{id_p}
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
Content-Type:application/json
```


## URL Parameters
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | 
| idp | String | unique identifier of product | Yes | 

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ |  ------ |
| data ||Object| Response content|
|| id | String| Unique identifier of product Id| 
|| creationDate | String| Creation date | 
|| updateDate | String| Update date| 
|| tenantId | Todo| Todo | 
|| href | Todo| Todo | 
|| version | Int | Todo | 
|| name | Todo| Todo | 
|| descriptions | Object | Description in EN & IT for locale & value |
|| erpCode | Todo| Todo | 
|| brand | Object | Todo |
|| externalCode | Todo| Todo | 
|| externalParentCode | Todo| Todo | 
|| sku | String | Sku of product | 
|| articleId | String | Todo | 
|| customSkus | Todo| Todo | 
|| attributes | Object | Todo | 
|| published | Boolean| Todo | 
|| publicationDate | Boolean| Todo | 
|| ... | ... | data continue | 
|| department | String| Department belong|  
|| pricesComparison | Todo| Todo | 


### Response Example
::: details Example
```json
{
    "data": {
        "id": "5f9ff98230c49e0001e08d6e",
        "creationDate": 1604319618787,
        "updateDate": 1604319619926,
        "tenantId": null,
        "href": null,
        "version": 8,
        "name": null,
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "HANDBAG DECORATED ON ALL 4 SIDES WITH APPLICATIONS AND DRAWINGS THAT SEE AS ​​THE PROTAGONISTS DOGS IN THE SPACE"
            },
            "it": {
                "locale": "it",
                "value": "BORSA A MANO DECORATA SU TUTTI E 4 I LATI CON APPLICAZIONI E DISEGNI CHE VEDE COME PROTAGONISTI I CANI NELLO SPAZIO"
            }
        },
        "erpCode": null,
        "brand": {
            "id": "5f7ddc6129edfc7a1b53e82f",
            "key": "braccialini",
            "name": "Braccialini",
            "shortDescription": null,
            "longDescription": null,
            "departments": [
                "fashion"
            ],
            "categories": null
        },
        "externalCode": null,
        "externalParentCode": null,
        "sku": "000000000314",
        "articleId": "FR-B13261",
        "customSkus": null,
        "attributes": {},
        "published": true,
        "publicationDate": 1604404135179,
        "productDescriptionCompleteness": false,
        "threshold": 0,
        "photoGallery": {
            "images": [
                {
                    "id": "755b20b3-5192-4a92-a81a-d0c4e024ea7c",
                    "type": "cover",
                    "imageURL": "https://stentle-image.s3.amazonaws.com/landoffashion/B13261_1.jpg",
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
                    "id": "755b20b3-5192-4a92-a81a-d0c4e024ea7c",
                    "type": "cover",
                    "imageURL": "https://stentle-image.s3.amazonaws.com/landoffashion/B13261_1.jpg",
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
                "creationDate": 1613745614297,
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
                        "creationDate": 1613745614298,
                        "updateDate": 1613745614298,
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
                    "creationDate": 1613745614299,
                    "updateDate": 1613745614299,
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
            }
        ],
        "productCatalogMultipliers": {},
        "productCatalogPrices": {},
        "productCatalogScheduledPrices": {},
        "status": "AUTHORIZED",
        "slug": "braccialini-woman-000000000314",
        "customSlugs": null,
        "statusHistory": [
            {
                "status": "DRAFT",
                "date": 1604319618787
            },
            {
                "status": "AUTHORIZED",
                "date": 1604319619926
            }
        ],
        "names": {
            "en": {
                "locale": "en",
                "value": "ALL ROUND BAG"
            },
            "it": {
                "locale": "it",
                "value": "BORSA ALL ROUND"
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
        "parentId": "5f9ff98230c49e0001e08d6e",
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
                "value": "ECO-LEATHER / WET CLOTH"
            },
            "it": {
                "locale": "it",
                "value": "ECOPELLE / PANNO UMIDO"
            }
        },
        "prices": {
            "sellingPrice": 219.0,
            "sellingPriceNoTax": 179.51,
            "finalSellingPriceNoTax": 179.51,
            "acquisitionPrice": 219.0,
            "acquisitionPriceNoTax": -1.0,
            "retailPrice": 314.0,
            "retailPriceNoTax": 257.38,
            "overriddenFinalPrice": null,
            "currencyCode": "EUR",
            "currencySymbol": "€",
            "discount": "30%",
            "strikedSellingPrice": -1.0,
            "salesDiscount": "0",
            "currency": {
                "id": "55f9a3535f15ead1260c34fe",
                "creationDate": 1613745614314,
                "updateDate": 1613745614314,
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
            "finalSellingPrice": 219.0
        },
        "ranking": 0,
        "availabilityTotal": 0.0,
        "hasVariants": true,
        "errorList": [],
        "attributeList": [
            {
                "id": "5f9c547ab9d82100014680a6",
                "creationDate": 1604080762497,
                "updateDate": 1604080761949,
                "tenantId": null,
                "href": null,
                "attributeCode": "season",
                "departments": [
                    "fashion"
                ],
                "key": "fw19/20",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Fall-Winter 2019/2020",
                    "attribute": null
                },
                "italian": {
                    "name": "Autunno-Inverno 2019/2020",
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
                "id": "5f9c547ab9d82100014680ab",
                "creationDate": 1604080762517,
                "updateDate": 1604080761951,
                "tenantId": null,
                "href": null,
                "attributeCode": "storename",
                "departments": [
                    "fashion"
                ],
                "key": "braccialini",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Braccialini",
                    "attribute": "store"
                },
                "italian": {
                    "name": "Braccialini",
                    "attribute": "negozi"
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
                "id": "5f9c547ab9d82100014680b6",
                "creationDate": 1604080762561,
                "updateDate": 1604080761955,
                "tenantId": null,
                "href": null,
                "attributeCode": "village",
                "departments": [
                    "fashion"
                ],
                "key": "franciacorta",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Franciacorta",
                    "attribute": null
                },
                "italian": {
                    "name": "Franciacorta",
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
            "id": "5f9fed5930c49e0001e08bdc",
            "key": "scarpe-e-borse-woman",
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
            "parentKey": "woman",
            "declareVariants": null,
            "declareAttributes": null,
            "photoAttributes": null,
            "taxes": null,
            "products": null,
            "sizeScaleCode": null,
            "department": "fashion"
        },
        "macroCategory": {
            "id": "5f9fed5930c49e0001e08bd6",
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
                "url": "woman",
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
::: 
## CURL
CURL call example. Creating a category.
```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/products/5f9ff98230c49e0001e08d6e' \
--header 'Content-Type: application/json' \
--header 'X-Domain: landoffashion' \
--header 'Cookie: stentle=ME5iOUo3SmdZY3pCKzlHdTZXMlV4dz09OkhNMVRLaWQ0dVNWSm9PWTVNam1Xd0E9PQ'
```

### CURL Response Example
::: details Example
```json
{
    "data": {
        "id": "5f9ff98230c49e0001e08d6e",
        "creationDate": 1604319618787,
        "updateDate": 1604319619926,
        "tenantId": null,
        "href": null,
        "version": 8,
        "name": null,
        "descriptions": {
            "en": {
                "locale": "en",
                "value": "HANDBAG DECORATED ON ALL 4 SIDES WITH APPLICATIONS AND DRAWINGS THAT SEE AS ​​THE PROTAGONISTS DOGS IN THE SPACE"
            },
            "it": {
                "locale": "it",
                "value": "BORSA A MANO DECORATA SU TUTTI E 4 I LATI CON APPLICAZIONI E DISEGNI CHE VEDE COME PROTAGONISTI I CANI NELLO SPAZIO"
            }
        },
        "erpCode": null,
        "brand": {
            "id": "5f7ddc6129edfc7a1b53e82f",
            "key": "braccialini",
            "name": "Braccialini",
            "shortDescription": null,
            "longDescription": null,
            "departments": [
                "fashion"
            ],
            "categories": null
        },
        "externalCode": null,
        "externalParentCode": null,
        "sku": "000000000314",
        "articleId": "FR-B13261",
        "customSkus": null,
        "attributes": {},
        "published": true,
        "publicationDate": 1604404135179,
        "productDescriptionCompleteness": false,
        "threshold": 0,
        "photoGallery": {
            "images": [
                {
                    "id": "755b20b3-5192-4a92-a81a-d0c4e024ea7c",
                    "type": "cover",
                    "imageURL": "https://stentle-image.s3.amazonaws.com/landoffashion/B13261_1.jpg",
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
                    "id": "755b20b3-5192-4a92-a81a-d0c4e024ea7c",
                    "type": "cover",
                    "imageURL": "https://stentle-image.s3.amazonaws.com/landoffashion/B13261_1.jpg",
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
                "creationDate": 1613745614297,
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
                        "creationDate": 1613745614298,
                        "updateDate": 1613745614298,
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
                    "creationDate": 1613745614299,
                    "updateDate": 1613745614299,
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
            }
        ],
        "productCatalogMultipliers": {},
        "productCatalogPrices": {},
        "productCatalogScheduledPrices": {},
        "status": "AUTHORIZED",
        "slug": "braccialini-woman-000000000314",
        "customSlugs": null,
        "statusHistory": [
            {
                "status": "DRAFT",
                "date": 1604319618787
            },
            {
                "status": "AUTHORIZED",
                "date": 1604319619926
            }
        ],
        "names": {
            "en": {
                "locale": "en",
                "value": "ALL ROUND BAG"
            },
            "it": {
                "locale": "it",
                "value": "BORSA ALL ROUND"
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
        "parentId": "5f9ff98230c49e0001e08d6e",
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
                "value": "ECO-LEATHER / WET CLOTH"
            },
            "it": {
                "locale": "it",
                "value": "ECOPELLE / PANNO UMIDO"
            }
        },
        "prices": {
            "sellingPrice": 219.0,
            "sellingPriceNoTax": 179.51,
            "finalSellingPriceNoTax": 179.51,
            "acquisitionPrice": 219.0,
            "acquisitionPriceNoTax": -1.0,
            "retailPrice": 314.0,
            "retailPriceNoTax": 257.38,
            "overriddenFinalPrice": null,
            "currencyCode": "EUR",
            "currencySymbol": "€",
            "discount": "30%",
            "strikedSellingPrice": -1.0,
            "salesDiscount": "0",
            "currency": {
                "id": "55f9a3535f15ead1260c34fe",
                "creationDate": 1613745614314,
                "updateDate": 1613745614314,
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
            "finalSellingPrice": 219.0
        },
        "ranking": 0,
        "availabilityTotal": 0.0,
        "hasVariants": true,
        "errorList": [],
        "attributeList": [
            {
                "id": "5f9c547ab9d82100014680a6",
                "creationDate": 1604080762497,
                "updateDate": 1604080761949,
                "tenantId": null,
                "href": null,
                "attributeCode": "season",
                "departments": [
                    "fashion"
                ],
                "key": "fw19/20",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Fall-Winter 2019/2020",
                    "attribute": null
                },
                "italian": {
                    "name": "Autunno-Inverno 2019/2020",
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
                "id": "5f9c547ab9d82100014680ab",
                "creationDate": 1604080762517,
                "updateDate": 1604080761951,
                "tenantId": null,
                "href": null,
                "attributeCode": "storename",
                "departments": [
                    "fashion"
                ],
                "key": "braccialini",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Braccialini",
                    "attribute": "store"
                },
                "italian": {
                    "name": "Braccialini",
                    "attribute": "negozi"
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
                "id": "5f9c547ab9d82100014680b6",
                "creationDate": 1604080762561,
                "updateDate": 1604080761955,
                "tenantId": null,
                "href": null,
                "attributeCode": "village",
                "departments": [
                    "fashion"
                ],
                "key": "franciacorta",
                "name": null,
                "active": true,
                "attributeLocaleName": null,
                "localeName": null,
                "english": {
                    "name": "Franciacorta",
                    "attribute": null
                },
                "italian": {
                    "name": "Franciacorta",
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
            "id": "5f9fed5930c49e0001e08bdc",
            "key": "scarpe-e-borse-woman",
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
            "parentKey": "woman",
            "declareVariants": null,
            "declareAttributes": null,
            "photoAttributes": null,
            "taxes": null,
            "products": null,
            "sizeScaleCode": null,
            "department": "fashion"
        },
        "macroCategory": {
            "id": "5f9fed5930c49e0001e08bd6",
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
                "url": "woman",
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
:::

## Errors
- The resource was not found

```
{
    "type": "0",
    "title": "Generic error",
    "status": 401,
    "detail": "Unauthorized",
    "stackTrace": .....
}
```

for more info on error - [Errors ](/1.0.0/errors.html) 