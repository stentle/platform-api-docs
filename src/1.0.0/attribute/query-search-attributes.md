# Search Attributes

Search Attribute endpoint

## URL
### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/attributes?limit={{LIMIT_PER_PAGE}}&pageNumber={{PAGE_NUMBER}}
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```

## Query String
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | 
| pageNumber | int | pagination parameter | Yes | 
| pageSize | int | pagination parameter | Yes |
| attributeCode | String | code of the attribute to search | | 
| department | String | department code | |

## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | 
| data ||Object| Response content|
|| totalItems | Integer | Number of total Items| 
|| startIndex | Integer | Index | 
|| itemsPerPage | Integer | Number of items Per Page |
|| currentItemCount | Integer | Number of current Items Counted  |
|| items | Object | All items that the attribute contains |

### Response Example
::: details Example
```json
{
    "data": {
        "totalItems": 87,
        "startIndex": 1,
        "itemsPerPage": 5,
        "currentItemCount": 5,
        "items": [
            {
                "id": "5f9c5479b9d8210001468064",
                "attributeCode": "sizeScale",
                "attributeKey": "EU",
                "attributeLocaleName": "sizeScale",
                "localeName": "EU",
                "names": {
                    "en": {
                        "locale": null,
                        "value": "EU"
                    },
                    "it": {
                        "locale": null,
                        "value": "EU"
                    }
                },
                "department": [
                    "fashion"
                ],
                "departmentFeeds": [
                    {
                        "id": "555210b1a44d28823dda21ce",
                        "key": "fashion",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "fashion",
                            "name": "fashion",
                            "nav": null
                        }
                    }
                ]
            },
            {
                "id": "5f9c547ab9d8210001468065",
                "attributeCode": "sizeScale",
                "attributeKey": "no-size",
                "attributeLocaleName": "sizeScale",
                "localeName": "No Size",
                "names": {
                    "en": {
                        "locale": null,
                        "value": "No Size"
                    },
                    "it": {
                        "locale": null,
                        "value": "No Size"
                    }
                },
                "department": [
                    "fashion"
                ],
                "departmentFeeds": [
                    {
                        "id": "555210b1a44d28823dda21ce",
                        "key": "fashion",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "fashion",
                            "name": "fashion",
                            "nav": null
                        }
                    }
                ]
            },
            {
                "id": "5f9c547ab9d8210001468066",
                "attributeCode": "sizeScale",
                "attributeKey": "US",
                "attributeLocaleName": "sizeScale",
                "localeName": "US",
                "names": {
                    "en": {
                        "locale": null,
                        "value": "US"
                    },
                    "it": {
                        "locale": null,
                        "value": "US"
                    }
                },
                "department": [
                    "fashion"
                ],
                "departmentFeeds": [
                    {
                        "id": "555210b1a44d28823dda21ce",
                        "key": "fashion",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "fashion",
                            "name": "fashion",
                            "nav": null
                        }
                    }
                ]
            },
            {
                "id": "5f9c547ab9d8210001468067",
                "attributeCode": "size",
                "attributeKey": "no-size",
                "attributeLocaleName": "size",
                "localeName": "No Size",
                "names": {
                    "en": {
                        "locale": "size",
                        "value": "No Size"
                    },
                    "it": {
                        "locale": "taglia",
                        "value": "No Size"
                    }
                },
                "department": [
                    "fashion"
                ],
                "departmentFeeds": [
                    {
                        "id": "555210b1a44d28823dda21ce",
                        "key": "fashion",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "fashion",
                            "name": "fashion",
                            "nav": null
                        }
                    }
                ]
            },
            {
                "id": "5f9c547ab9d8210001468068",
                "attributeCode": "size",
                "attributeKey": "26",
                "attributeLocaleName": "size",
                "localeName": "26",
                "names": {
                    "en": {
                        "locale": "size",
                        "value": "26"
                    },
                    "it": {
                        "locale": "taglia",
                        "value": "26"
                    }
                },
                "department": [
                    "fashion"
                ],
                "departmentFeeds": [
                    {
                        "id": "555210b1a44d28823dda21ce",
                        "key": "fashion",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "fashion",
                            "name": "fashion",
                            "nav": null
                        }
                    }
                ]
            }
        ]
    }
}
```
:::

## CURL
CURL call example.

```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/attributes?limit=5&pageNumber=1' \
--header 'X-Domain: landoffashion' \
--header 'Accept-Language: en' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=Qnpva2xpc01PalRlb3ZFN1VCbUY1dz09OlA2ZWZVSGVTUVNpZ3dJN3RyVFdhSVE9PQ'
``` 

### CURL Response Example
::: details Example
```json
{
    "data": {
        "totalItems": 87,
        "startIndex": 1,
        "itemsPerPage": 5,
        "currentItemCount": 5,
        "items": [
            {
                "id": "5f9c5479b9d8210001468064",
                "attributeCode": "sizeScale",
                "attributeKey": "EU",
                "attributeLocaleName": "sizeScale",
                "localeName": "EU",
                "names": {
                    "en": {
                        "locale": null,
                        "value": "EU"
                    },
                    "it": {
                        "locale": null,
                        "value": "EU"
                    }
                },
                "department": [
                    "fashion"
                ],
                "departmentFeeds": [
                    {
                        "id": "555210b1a44d28823dda21ce",
                        "key": "fashion",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "fashion",
                            "name": "fashion",
                            "nav": null
                        }
                    }
                ]
            },
            {
                "id": "5f9c547ab9d8210001468065",
                "attributeCode": "sizeScale",
                "attributeKey": "no-size",
                "attributeLocaleName": "sizeScale",
                "localeName": "No Size",
                "names": {
                    "en": {
                        "locale": null,
                        "value": "No Size"
                    },
                    "it": {
                        "locale": null,
                        "value": "No Size"
                    }
                },
                "department": [
                    "fashion"
                ],
                "departmentFeeds": [
                    {
                        "id": "555210b1a44d28823dda21ce",
                        "key": "fashion",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "fashion",
                            "name": "fashion",
                            "nav": null
                        }
                    }
                ]
            },
            {
                "id": "5f9c547ab9d8210001468066",
                "attributeCode": "sizeScale",
                "attributeKey": "US",
                "attributeLocaleName": "sizeScale",
                "localeName": "US",
                "names": {
                    "en": {
                        "locale": null,
                        "value": "US"
                    },
                    "it": {
                        "locale": null,
                        "value": "US"
                    }
                },
                "department": [
                    "fashion"
                ],
                "departmentFeeds": [
                    {
                        "id": "555210b1a44d28823dda21ce",
                        "key": "fashion",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "fashion",
                            "name": "fashion",
                            "nav": null
                        }
                    }
                ]
            },
            {
                "id": "5f9c547ab9d8210001468067",
                "attributeCode": "size",
                "attributeKey": "no-size",
                "attributeLocaleName": "size",
                "localeName": "No Size",
                "names": {
                    "en": {
                        "locale": "size",
                        "value": "No Size"
                    },
                    "it": {
                        "locale": "taglia",
                        "value": "No Size"
                    }
                },
                "department": [
                    "fashion"
                ],
                "departmentFeeds": [
                    {
                        "id": "555210b1a44d28823dda21ce",
                        "key": "fashion",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "fashion",
                            "name": "fashion",
                            "nav": null
                        }
                    }
                ]
            },
            {
                "id": "5f9c547ab9d8210001468068",
                "attributeCode": "size",
                "attributeKey": "26",
                "attributeLocaleName": "size",
                "localeName": "26",
                "names": {
                    "en": {
                        "locale": "size",
                        "value": "26"
                    },
                    "it": {
                        "locale": "taglia",
                        "value": "26"
                    }
                },
                "department": [
                    "fashion"
                ],
                "departmentFeeds": [
                    {
                        "id": "555210b1a44d28823dda21ce",
                        "key": "fashion",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "fashion",
                            "name": "fashion",
                            "nav": null
                        }
                    }
                ]
            }
        ]
    }
}
```
:::

## Errors
- Error types resource not found
```
{
    "type": "0",
    "title": "Generic error",
    "status": 500,
    "detail": "Internal Server Error",
    "trace": "..."
}
```
for more info on error - [Errors ](/1.0.0/errors.html) 
