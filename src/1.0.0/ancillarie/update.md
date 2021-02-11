# Update

Update ancillary product endpoint

 ## URL
 ### Http Verb <Badge text="PUT" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/ancillary/{id}
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
Content-Type:application/json
```

## Payload
| Parameters | Type | Description | Required |
| ------ | ------ | ------ | ------ | ------ |
| id | String | unique identifier of the ancillary product id | True | 
| ancillaryProduct | Object | unique identifier of the ancillary product | True |

### URL Parameters
| Parameters | Type | Description | Required |
| ------ | ------ | ------ | ------ | ------ |
| id | String | unique identifier of the ancillary product id | True | 

### URL Parameters Presentation
```
{{URI}}/rest/picnik-rest/ancillary/{id}
``` 

### Payload Example
```
{
	"insertionRule": "ONLY_ONE_TRAVELER",
	"cluster": "Bob's Cluster",
	"ranking": 42,
	"composable": false,
	"orderVisibilityMatrix": {
		"ROLE_ADMIN": true,
		"ROLE_MERCHANT_PRICEBOX": false
	},
	"relatedTo": [
		{
			"id": "{{PRODUCT_ID}}"
		},
		{
			"id": "{{VARIANT_ID}}"
		}
	],
	"pricingRules": [
	    {
	        "pricingParameterMap" : {
	            "{{PRODUCT_ID}}" : [ 
	                {
	                    "amount" : 41.0,
	                    "name" : {
	                        "locale" : "it",
	                        "value" : "Idk"
	                    }
	                }
	            ]
	        },
	        "pricingRuleType" : "FIXED_PRICE"
	    },
	    {
	    	"pricingParameterMap": {
	    		"{{VARIANT_ID}}" : [ 
	                {
	                    "amount" : 3.14159265358979323846264,
	                    "name" : {
	                        "locale" : "it",
	                        "value" : "Idk"
	                    }
	                }
	            ]
	    	},
	    	"pricingRuleType": "FIXED_PRICE"
	    }
	],
	"costs": {
		"{{PRODUCT_ID}}": {
			"amount": 42.0,
			"name": {
				"value": "Euro",
				"locale": "en"
			}
		},
		"{{VARIANT_ID}}": {
			"amount": 41.0,
			"name": {
				"value": "Euro",
				"locale": "en"
			}
		}
	},
	"photoGallery": {},
	"prices": {
		"currency": {
			"id": "{{CURRENCY_ID}}"
		}
	}
}
```

## Response
```
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | ------ |
| data ||Object| Response content|
||id|string| ancillary product Id|
||creationDate|Date|Key|
||updateDate|Date|Type|
||tenantId|string|todo|
||href|string||
||version|double||
||erpCode|string||
||parentFeed|string||
||brand|||
||externalCode|||
||externalParentCode|||
||sku|||
||customSkus|||
||published|Array||
||publicationDate|||
||productDescriptionCompleteness|||
||threshold|||
||photoGallery|Object||
||videoGallery|string||
||documentArchive|string||
||...|...|....|
||coverPhotoUrl|||
```
### Response Example
```
{
    "id": "5e28643984b38d00016a83ea",
    "creationDate": 1612879648524,
    "updateDate": 1612879648524,
    "tenantId": null,
    "href": null,
    "version": 17,
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
        "currency": {
            "id": "{{CURRENCY_ID}}",
            "creationDate": 1612879648527,
            "updateDate": 1612879648527,
            "tenantId": null,
            "href": null,
            "code": null,
            "decimalDigit": null,
            "name": null,
            "namePlural": null,
            "rounding": null,
            "symbol": null,
            "uiCode": null,
            "isoNumber": null,
            "symbolNative": null
        },
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
```
## CURL
CURL call example. Update a ancillary product.
```
curl --location --request POST 'http://localhost:8080/rest/picnik-rest/ancillary' \
--header 'X-Domain: utravel' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=U2Y1MWFMOXk2QkxrNytNSnoyUUdOdz09OkM5amZCQWt3RkNWMXFhODhPaEFyMEE9PQ' \
--data-raw '{
	"insertionRule": "ONLY_ONE_TRAVELER",
	"cluster": "Bob'\''s Cluster",
	"ranking": 42,
	"composable": false,
	"orderVisibilityMatrix": {
		"ROLE_ADMIN": true,
		"ROLE_MERCHANT_PRICEBOX": false
	},
	"relatedTo": [
		{
			"id": "5e7baaffdbc33c00013ef99d"
		},
		{
			"id": "5e78e8396014c0000138b96b"
		}
	],
	"pricingRules": [
	    {
	        "pricingParameterMap" : {
	            "5e7baaffdbc33c00013ef99d" : [ 
	                {
	                    "amount" : 41.0,
	                    "name" : {
	                        "locale" : "it",
	                        "value" : "Idk"
	                    }
	                }
	            ]
	        },
	        "pricingRuleType" : "FIXED_PRICE"
	    },
	    {
	    	"pricingParameterMap": {
	    		"5e78e8396014c0000138b96b" : [ 
	                {
	                    "amount" : 3.14159265358979323846264,
	                    "name" : {
	                        "locale" : "it",
	                        "value" : "Idk"
	                    }
	                }
	            ]
	    	},
	    	"pricingRuleType": "FIXED_PRICE"
	    }
	],
	"costs": {
		"5e7baaffdbc33c00013ef99d": {
			"amount": 42.0,
			"name": {
				"value": "Euro",
				"locale": "en"
			}
		},
		"5e78e8396014c0000138b96b": {
			"amount": 41.0,
			"name": {
				"value": "Euro",
				"locale": "en"
			}
		}
	},
	"photoGallery": {},
	"prices": {
		"currency": {
			"id": "{{CURRENCY_ID}}"
		}
	}
}'
```

### CURL Response Example
```
{
    "id": "5e28643984b38d00016a83ea",
    "creationDate": 1612879648524,
    "updateDate": 1612879648524,
    "tenantId": null,
    "href": null,
    "version": 17,
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
        "currency": {
            "id": "{{CURRENCY_ID}}",
            "creationDate": 1612879648527,
            "updateDate": 1612879648527,
            "tenantId": null,
            "href": null,
            "code": null,
            "decimalDigit": null,
            "name": null,
            "namePlural": null,
            "rounding": null,
            "symbol": null,
            "uiCode": null,
            "isoNumber": null,
            "symbolNative": null
        },
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
```
## Errors

for more info on error - [Errors ](/1.0.0/errors.html)