# Get All Ancillary ReladedTo
Query get all ancillary product reladedTo


## URL
### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/ancillary/?relatedTo={{PRODUCT_ID}}&cartId={{CART_ID}}"
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
```

## URL Parameters
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| ancillaryProductId | String | unique identifier of the ancillary product id | True | RequestParam |
| cartId | String | unique identifier of the cart id | True | PathVaribale |
| language | String | unique identifier of language, defaultValue = "it" | False | RequestHeader |

### URL Parameters Presentation
```
{{URI}}/rest/picnik-rest/ancillary/?relatedTo={{PRODUCT_ID}}&cartId={{CART_ID}}"
``` 


## CURL
```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/ancillary/?relatedTo=5e4e9d8cdd4f6c0001034104&cartId=5e53fbd4fca08400016d1ba6' \
--header 'X-Domain: utravel' \
--header 'Cookie: stentle=cEx2ZG1haXZ2b2VpT1VDS0pOQmJXdz09OnFBV011VFhVcmU4VzY4TytNUDdUUXc9PQ'
```

### CURL Response Example
```
{
    "airport": [
        {
            "id": "5e4be68ddd4f6c000102b388",
            "name": "Verona",
            "description": "\"Oh Romeo Romeo\" partiamo da qui Romeo",
            "cluster": "airport",
            "ranking": 4,
            "composable": false,
            "image": "https://utravel.s3.amazonaws.com/ancillary-airport-verona.svg",
            "priceText": "100",
            "isIncluded": false,
            "pricingRule": "FIXED_PER_PERSON"
        },
        {
            "id": "5e4be74edd4f6c000102b3b0",
            "name": "Bologna",
            "description": "Voliamo alto sopra le due torri",
            "cluster": "airport",
            "ranking": 5,
            "composable": false,
            "image": "https://utravel.s3.amazonaws.com/ancillary-airport-bologna.svg",
            "priceText": "100",
            "isIncluded": false,
            "pricingRule": "FIXED_PRICE"
        },
        {
            "id": "5e4be7aadd4f6c000102b3c4",
            "name": "Torino",
            "description": "Giochiamo in casa nostra",
            "cluster": "airport",
            "ranking": 6,
            "composable": false,
            "image": "https://utravel.s3.amazonaws.com/ancillary-airport-torino.svg",
            "priceText": "100",
            "isIncluded": false,
            "pricingRule": "FIXED_PER_PERSON"
        },
        {
            "id": "5e4be7eedd4f6c000102b3d2",
            "name": "Napoli",
            "description": "“Vide 'o mare quant'è bello” soprattutto in aereo",
            "cluster": "airport",
            "ranking": 7,
            "composable": false,
            "image": "https://utravel.s3.amazonaws.com/ancillary-airport-napoli.svg",
            "priceText": "100",
            "isIncluded": false,
            "pricingRule": "FIXED_PER_PERSON"
        },
        {
            "id": "5e4be825dd4f6c000102b3df",
            "name": "Bari",
            "description": "Vieni a volare in Puglia",
            "cluster": "airport",
            "ranking": 8,
            "composable": false,
            "image": "https://utravel.s3.amazonaws.com/ancillary-airport-bari.svg",
            "priceText": "100",
            "isIncluded": false,
            "pricingRule": "FIXED_PER_PERSON"
        },
        {
            "id": "5e4be9e2dd4f6c000102b43b",
            "name": "Catania",
            "description": "Arancino o arancina? Tranquilli, vi facciamo volare tutti!",
            "cluster": "airport",
            "ranking": 9,
            "composable": false,
            "image": "https://utravel.s3.amazonaws.com/ancillary-airport-catania.svg",
            "priceText": "100",
            "isIncluded": false,
            "pricingRule": "FIXED_PER_PERSON"
        },
        {
            "id": "5e4beb7fdd4f6c000102b491",
            "name": "Cagliari",
            "description": "Eja, hai capito bene!",
            "cluster": "airport",
            "ranking": 10,
            "composable": false,
            "image": "https://utravel.s3.amazonaws.com/ancillary-airport-cagliari.svg",
            "priceText": "100",
            "isIncluded": false,
            "pricingRule": "FIXED_PER_PERSON"
        }
    ]
}
```

## Errors
for more info on error - [Errors ](/1.0.0/errors.html)