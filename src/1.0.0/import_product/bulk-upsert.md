# Bulk Upsert

Bulk Upsert of products details

## URL

### Http Verb <Badge text="POST" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/imported-products
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```

## Payload
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | 
| productImporterRequestDto  | ProductImporterRequestDto | List of ProductImport DTO elements | Yes | 

### Payload Example
```
{
  "updatePriceStrategy": true,
  "evaluateAcquisitionPrice": false,
  "priceStrategy": "PRICE_STOCK",
  "availabilityStrategy": "STOCK_AND_PRODUCT",
  "productImportDtoList": [
    {
      "rowNumber": 1,
      "product": {
        "article": "FR-D847AH000LTC9999-ex1",
        "description": "Stivaletto donna short. IT 02-16 10:50",
        "name": "D ASHEELY          XX",
        "descriptions": {
          "it": "Stivaletto donna short.  02-16 10:50"
        },
        "names": {
          "it": "D ASHEELY   IT XX"
        },
        "attributes": {
          "sizeScale": "BD",
          "color": "pink",
          "size": "10",
          "season": "fw19/20",
          "storename": "baldinini",
          "village": "franciacorta"
        },
        "ean": "FR-8058279585171-ex1",
        "brand": "champion",
        "stories": {
          "en": "story en",
          "it": "story xx"
        },
        "notes": {
          "en": "100% Leather Goat Nubuk Care and cleaning: specific products in store",
          "it": "notes changed"
        },
        "images": [
          {
            "imageUrl": "http://abc-xxxx.com",
            "type": "cover",
            "active": false
          },
          {
            "imageUrl": "http://abc-xxxx-2.com",
            "type": "details",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          }
        ],
        "macroCategory": "man",
        "microCategory": "scarpe-e-borse-man",
        "acquisitionPrice": 77,
        "currency": "EUR",
        "sellingPrice": 88,
        "retailPrice": 200.99,
        "unitQuantity": 0,
        "ranking": -1,
        "isVariant": false
      },
      "stocks": [
        {
          "stockQuantity": 9,
          "warehouse": {
            "id": null,
            "name": null,
            "company": null,
            "type": null,
            "slug": "land-of-fashion-franciacorta-01"
          }
        }
      ],
      "merchant": null
    },
    {
      "rowNumber": 2,
      "product": {
        "article": "FR-D847AH000LTC9999-ex1",
        "description": "Stivaletto donna short. IT 02-16 10:50",
        "name": "D ASHEELY",
        "descriptions": {
          "it": "Stivaletto donna short.  02-16 10:50"
        },
        "names": {
          "it": "D ASHEELY"
        },
        "attributes": {
          "sizeScale": "EU",
          "color": "black",
          "size": "36",
          "season": "fw19",
          "storename": "geox",
          "village": "franciacorta_x"
        },
        "ean": "FR-8058279585188-ex1",
        "brand": "geox",
        "stories": {
          "en": "",
          "it": ""
        },
        "notes": {
          "en": "100% Leather Goat Nubuk Care and cleaning: specific products in store",
          "it": "CAPRA NABUCATA \nCura e pulizia: prodotti specifici in Store"
        },
        "images": [
          {
            "imageUrl": "http://abc.com",
            "type": "cover",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          }
        ],
        "macroCategory": "woman",
        "microCategory": "scarpe-e-borse-woman",
        "acquisitionPrice": 88,
        "currency": "EUR",
        "sellingPrice": 99,
        "retailPrice": 100.99,
        "unitQuantity": 0,
        "ranking": -1,
        "isVariant": false
      },
      "stocks": [
        {
          "stockQuantity": 3,
          "warehouse": {
            "id": null,
            "name": null,
            "company": null,
            "type": null,
            "slug": "land-of-fashion-franciacorta-01"
          }
        }
      ],
      "merchant": null
    }
  ],
  "headersList": {
    "Cookie": [
      "stentle=QUkzc3pBQVVKT29HNUN2cW8zV0xqZz09OnBaalZLSzFXTC9FZDM5U1lnb2NRQXc9PQ;Path=/rest;Expires=Wed, 03-Mar-2021 14:22:10 GMT;Max-Age=1209600;HttpOnly"
    ],
    "file": [
      "17c38f2c-fa57-4dbf-b4ec-202372ec4409_lof_geox_products_fov_2_change_value_row1_2.xlsx"
    ],
    "uuid": [
      "17c38f2c-fa57-4dbf-b4ec-202372ec4409"
    ],
    "tenant": [
      "landoffashion/land-of-fashion-franciacorta-01"
    ]
  },
  "uuid": {
    "present": true
  },
  "itemList": [
    {
      "rowNumber": 1,
      "product": {
        "article": "FR-D847AH000LTC9999-ex1",
        "description": "Stivaletto donna short. IT 02-16 10:50",
        "name": "D ASHEELY          XX",
        "descriptions": {
          "it": "Stivaletto donna short.  02-16 10:50"
        },
        "names": {
          "it": "D ASHEELY   IT XX"
        },
        "attributes": {
          "sizeScale": "BD",
          "color": "pink",
          "size": "10",
          "season": "fw19/20",
          "storename": "baldinini",
          "village": "franciacorta"
        },
        "ean": "FR-8058279585171-ex1",
        "brand": "champion",
        "stories": {
          "en": "story en",
          "it": "story xx"
        },
        "notes": {
          "en": "100% Leather Goat Nubuk Care and cleaning: specific products in store",
          "it": "notes changed"
        },
        "images": [
          {
            "imageUrl": "http://abc-xxxx.com",
            "type": "cover",
            "active": false
          },
          {
            "imageUrl": "http://abc-xxxx-2.com",
            "type": "details",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          }
        ],
        "macroCategory": "man",
        "microCategory": "scarpe-e-borse-man",
        "acquisitionPrice": 77,
        "currency": "EUR",
        "sellingPrice": 88,
        "retailPrice": 200.99,
        "unitQuantity": 0,
        "ranking": -1,
        "isVariant": false
      },
      "stocks": [
        {
          "stockQuantity": 9,
          "warehouse": {
            "id": null,
            "name": null,
            "company": null,
            "type": null,
            "slug": "land-of-fashion-franciacorta-01"
          }
        }
      ],
      "merchant": null
    },
    {
      "rowNumber": 2,
      "product": {
        "article": "FR-D847AH000LTC9999-ex1",
        "description": "Stivaletto donna short. IT 02-16 10:50",
        "name": "D ASHEELY",
        "descriptions": {
          "it": "Stivaletto donna short.  02-16 10:50"
        },
        "names": {
          "it": "D ASHEELY"
        },
        "attributes": {
          "sizeScale": "EU",
          "color": "black",
          "size": "36",
          "season": "fw19",
          "storename": "geox",
          "village": "franciacorta_x"
        },
        "ean": "FR-8058279585188-ex1",
        "brand": "geox",
        "stories": {
          "en": "",
          "it": ""
        },
        "notes": {
          "en": "100% Leather Goat Nubuk Care and cleaning: specific products in store",
          "it": "CAPRA NABUCATA \nCura e pulizia: prodotti specifici in Store"
        },
        "images": [
          {
            "imageUrl": "http://abc.com",
            "type": "cover",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          }
        ],
        "macroCategory": "woman",
        "microCategory": "scarpe-e-borse-woman",
        "acquisitionPrice": 88,
        "currency": "EUR",
        "sellingPrice": 99,
        "retailPrice": 100.99,
        "unitQuantity": 0,
        "ranking": -1,
        "isVariant": false
      },
      "stocks": [
        {
          "stockQuantity": 3,
          "warehouse": {
            "id": null,
            "name": null,
            "company": null,
            "type": null,
            "slug": "land-of-fashion-franciacorta-01"
          }
        }
      ],
      "merchant": null
    }
  ]
}
```

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | 
| data ||Object| Response content|
|| ResponseEntity ImportResponse | List of ImportResponse | List of responses for every element | 

### Response Example
::: details Example
```json
{
    "fail": [
        "row-num,error-details,title.it,title,price,currency,brand,description.it,description,article-id,ean,stock-quantity,macro-category,micro-category,stories.en,stories.it,notes.en,notes.it,attribute.sizeScale,attribute.color,attribute.size,attribute.season,attribute.storename,attribute.village,image-url,image-url-2,image-url-3,image-url-4,image-url-5,image-url-6,image-url-7,image-url-8,image-url-9,image-url-10,image-url-11,image-url-12,image-url-13,image-url-14,image-url-15,image-url-16,image-url-17,image-url-18,image-url-19,image-url-20,cost",
        "1,\"[micro-Category,Invalid field micro-Category value 'scarpe-e-borse-man', brand,Invalid field brand value 'champion', sizeScale,Invalid attribute with key 'sizeScale' and value 'BD', storename,Invalid attribute with key 'storename' and value 'baldinini']\",\"D ASHEELY   IT XX\",\"D ASHEELY          XX\",\"88.0\",\"EUR\",\"champion\",\"Stivaletto donna short.  02-16 10:50\",\"Stivaletto donna short. IT 02-16 10:50\",\"FR-D847AH000LTC9999-ex1\",\"FR-8058279585171-ex1\",\"9.0\",\"man\",\"scarpe-e-borse-man\",\"story en\",\"story xx\",\"100% Leather Goat Nubuk Care and cleaning: specific products in store\",\"notes changed\",\"BD\",\"pink\",\"10\",\"fw19/20\",\"baldinini\",\"franciacorta\",\"http://abc-xxxx.com\",\"http://abc-xxxx-2.com\",\"\",",
        "2,\"[micro-Category,Invalid field micro-Category value 'scarpe-e-borse-woman', brand,Invalid field brand value 'geox', storename,Invalid attribute with key 'storename' and value 'geox', village,Invalid attribute with key 'village' and value 'franciacorta_x']\",\"D ASHEELY\",\"D ASHEELY\",\"99.0\",\"EUR\",\"geox\",\"Stivaletto donna short.  02-16 10:50\",\"Stivaletto donna short. IT 02-16 10:50\",\"FR-D847AH000LTC9999-ex1\",\"FR-8058279585188-ex1\",\"3.0\",\"woman\",\"scarpe-e-borse-woman\",\"\",\"\",\"100% Leather Goat Nubuk Care and cleaning: specific products in store\",\"CAPRA NABUCATA \nCura e pulizia: prodotti specifici in Store\",\"EU\",\"black\",\"36\",\"fw19\",\"geox\",\"franciacorta_x\",\"http://abc.com\",\"\",\"\","
    ],
    "success": []
}
```
:::

## CURL
CURL call example. Get the status of CSV.
```
curl --location --request POST 'http://localhost:8080/rest/picnik-rest/imported-products' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: it' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=ODV3SUhLWU4xS0JlL004SWdSSGZaQT09OmN6OGN0L1FPNllIcDl0dEtxdmhsNEE9PQ' \
--data-raw '{
  "updatePriceStrategy": true,
  "evaluateAcquisitionPrice": false,
  "priceStrategy": "PRICE_STOCK",
  "availabilityStrategy": "STOCK_AND_PRODUCT",
  "productImportDtoList": [
    {
      "rowNumber": 1,
      "product": {
        "article": "FR-D847AH000LTC9999-ex1",
        "description": "Stivaletto donna short. IT 02-16 10:50",
        "name": "D ASHEELY          XX",
        "descriptions": {
          "it": "Stivaletto donna short.  02-16 10:50"
        },
        "names": {
          "it": "D ASHEELY   IT XX"
        },
        "attributes": {
          "sizeScale": "BD",
          "color": "pink",
          "size": "10",
          "season": "fw19/20",
          "storename": "baldinini",
          "village": "franciacorta"
        },
        "ean": "FR-8058279585171-ex1",
        "brand": "champion",
        "stories": {
          "en": "story en",
          "it": "story xx"
        },
        "notes": {
          "en": "100% Leather Goat Nubuk Care and cleaning: specific products in store",
          "it": "notes changed"
        },
        "images": [
          {
            "imageUrl": "http://abc-xxxx.com",
            "type": "cover",
            "active": false
          },
          {
            "imageUrl": "http://abc-xxxx-2.com",
            "type": "details",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          }
        ],
        "macroCategory": "man",
        "microCategory": "scarpe-e-borse-man",
        "acquisitionPrice": 77,
        "currency": "EUR",
        "sellingPrice": 88,
        "retailPrice": 200.99,
        "unitQuantity": 0,
        "ranking": -1,
        "isVariant": false
      },
      "stocks": [
        {
          "stockQuantity": 9,
          "warehouse": {
            "id": null,
            "name": null,
            "company": null,
            "type": null,
            "slug": "land-of-fashion-franciacorta-01"
          }
        }
      ],
      "merchant": null
    },
    {
      "rowNumber": 2,
      "product": {
        "article": "FR-D847AH000LTC9999-ex1",
        "description": "Stivaletto donna short. IT 02-16 10:50",
        "name": "D ASHEELY",
        "descriptions": {
          "it": "Stivaletto donna short.  02-16 10:50"
        },
        "names": {
          "it": "D ASHEELY"
        },
        "attributes": {
          "sizeScale": "EU",
          "color": "black",
          "size": "36",
          "season": "fw19",
          "storename": "geox",
          "village": "franciacorta_x"
        },
        "ean": "FR-8058279585188-ex1",
        "brand": "geox",
        "stories": {
          "en": "",
          "it": ""
        },
        "notes": {
          "en": "100% Leather Goat Nubuk Care and cleaning: specific products in store",
          "it": "CAPRA NABUCATA \nCura e pulizia: prodotti specifici in Store"
        },
        "images": [
          {
            "imageUrl": "http://abc.com",
            "type": "cover",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          }
        ],
        "macroCategory": "woman",
        "microCategory": "scarpe-e-borse-woman",
        "acquisitionPrice": 88,
        "currency": "EUR",
        "sellingPrice": 99,
        "retailPrice": 100.99,
        "unitQuantity": 0,
        "ranking": -1,
        "isVariant": false
      },
      "stocks": [
        {
          "stockQuantity": 3,
          "warehouse": {
            "id": null,
            "name": null,
            "company": null,
            "type": null,
            "slug": "land-of-fashion-franciacorta-01"
          }
        }
      ],
      "merchant": null
    }
  ],
  "headersList": {
    "Cookie": [
      "stentle=QUkzc3pBQVVKT29HNUN2cW8zV0xqZz09OnBaalZLSzFXTC9FZDM5U1lnb2NRQXc9PQ;Path=/rest;Expires=Wed, 03-Mar-2021 14:22:10 GMT;Max-Age=1209600;HttpOnly"
    ],
    "file": [
      "17c38f2c-fa57-4dbf-b4ec-202372ec4409_lof_geox_products_fov_2_change_value_row1_2.xlsx"
    ],
    "uuid": [
      "17c38f2c-fa57-4dbf-b4ec-202372ec4409"
    ],
    "tenant": [
      "landoffashion/land-of-fashion-franciacorta-01"
    ]
  },
  "uuid": {
    "present": true
  },
  "itemList": [
    {
      "rowNumber": 1,
      "product": {
        "article": "FR-D847AH000LTC9999-ex1",
        "description": "Stivaletto donna short. IT 02-16 10:50",
        "name": "D ASHEELY          XX",
        "descriptions": {
          "it": "Stivaletto donna short.  02-16 10:50"
        },
        "names": {
          "it": "D ASHEELY   IT XX"
        },
        "attributes": {
          "sizeScale": "BD",
          "color": "pink",
          "size": "10",
          "season": "fw19/20",
          "storename": "baldinini",
          "village": "franciacorta"
        },
        "ean": "FR-8058279585171-ex1",
        "brand": "champion",
        "stories": {
          "en": "story en",
          "it": "story xx"
        },
        "notes": {
          "en": "100% Leather Goat Nubuk Care and cleaning: specific products in store",
          "it": "notes changed"
        },
        "images": [
          {
            "imageUrl": "http://abc-xxxx.com",
            "type": "cover",
            "active": false
          },
          {
            "imageUrl": "http://abc-xxxx-2.com",
            "type": "details",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          }
        ],
        "macroCategory": "man",
        "microCategory": "scarpe-e-borse-man",
        "acquisitionPrice": 77,
        "currency": "EUR",
        "sellingPrice": 88,
        "retailPrice": 200.99,
        "unitQuantity": 0,
        "ranking": -1,
        "isVariant": false
      },
      "stocks": [
        {
          "stockQuantity": 9,
          "warehouse": {
            "id": null,
            "name": null,
            "company": null,
            "type": null,
            "slug": "land-of-fashion-franciacorta-01"
          }
        }
      ],
      "merchant": null
    },
    {
      "rowNumber": 2,
      "product": {
        "article": "FR-D847AH000LTC9999-ex1",
        "description": "Stivaletto donna short. IT 02-16 10:50",
        "name": "D ASHEELY",
        "descriptions": {
          "it": "Stivaletto donna short.  02-16 10:50"
        },
        "names": {
          "it": "D ASHEELY"
        },
        "attributes": {
          "sizeScale": "EU",
          "color": "black",
          "size": "36",
          "season": "fw19",
          "storename": "geox",
          "village": "franciacorta_x"
        },
        "ean": "FR-8058279585188-ex1",
        "brand": "geox",
        "stories": {
          "en": "",
          "it": ""
        },
        "notes": {
          "en": "100% Leather Goat Nubuk Care and cleaning: specific products in store",
          "it": "CAPRA NABUCATA \nCura e pulizia: prodotti specifici in Store"
        },
        "images": [
          {
            "imageUrl": "http://abc.com",
            "type": "cover",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          },
          {
            "imageUrl": "",
            "type": "details",
            "active": false
          }
        ],
        "macroCategory": "woman",
        "microCategory": "scarpe-e-borse-woman",
        "acquisitionPrice": 88,
        "currency": "EUR",
        "sellingPrice": 99,
        "retailPrice": 100.99,
        "unitQuantity": 0,
        "ranking": -1,
        "isVariant": false
      },
      "stocks": [
        {
          "stockQuantity": 3,
          "warehouse": {
            "id": null,
            "name": null,
            "company": null,
            "type": null,
            "slug": "land-of-fashion-franciacorta-01"
          }
        }
      ],
      "merchant": null
    }
  ]
}'
``` 

### CURL Response Example
::: details Example
```
{
    "fail": [
        "row-num,error-details,title.it,title,price,currency,brand,description.it,description,article-id,ean,stock-quantity,macro-category,micro-category,stories.en,stories.it,notes.en,notes.it,attribute.sizeScale,attribute.color,attribute.size,attribute.season,attribute.storename,attribute.village,image-url,image-url-2,image-url-3,image-url-4,image-url-5,image-url-6,image-url-7,image-url-8,image-url-9,image-url-10,image-url-11,image-url-12,image-url-13,image-url-14,image-url-15,image-url-16,image-url-17,image-url-18,image-url-19,image-url-20,cost",
        "1,\"[micro-Category,Invalid field micro-Category value 'scarpe-e-borse-man', brand,Invalid field brand value 'champion', sizeScale,Invalid attribute with key 'sizeScale' and value 'BD', storename,Invalid attribute with key 'storename' and value 'baldinini']\",\"D ASHEELY   IT XX\",\"D ASHEELY          XX\",\"88.0\",\"EUR\",\"champion\",\"Stivaletto donna short.  02-16 10:50\",\"Stivaletto donna short. IT 02-16 10:50\",\"FR-D847AH000LTC9999-ex1\",\"FR-8058279585171-ex1\",\"9.0\",\"man\",\"scarpe-e-borse-man\",\"story en\",\"story xx\",\"100% Leather Goat Nubuk Care and cleaning: specific products in store\",\"notes changed\",\"BD\",\"pink\",\"10\",\"fw19/20\",\"baldinini\",\"franciacorta\",\"http://abc-xxxx.com\",\"http://abc-xxxx-2.com\",\"\",",
        "2,\"[micro-Category,Invalid field micro-Category value 'scarpe-e-borse-woman', brand,Invalid field brand value 'geox', storename,Invalid attribute with key 'storename' and value 'geox', village,Invalid attribute with key 'village' and value 'franciacorta_x']\",\"D ASHEELY\",\"D ASHEELY\",\"99.0\",\"EUR\",\"geox\",\"Stivaletto donna short.  02-16 10:50\",\"Stivaletto donna short. IT 02-16 10:50\",\"FR-D847AH000LTC9999-ex1\",\"FR-8058279585188-ex1\",\"3.0\",\"woman\",\"scarpe-e-borse-woman\",\"\",\"\",\"100% Leather Goat Nubuk Care and cleaning: specific products in store\",\"CAPRA NABUCATA \nCura e pulizia: prodotti specifici in Store\",\"EU\",\"black\",\"36\",\"fw19\",\"geox\",\"franciacorta_x\",\"http://abc.com\",\"\",\"\","
    ],
    "success": []
}
```
::: 

## Errors

for more info on error - [Errors ](/1.0.0/errors.html) 
