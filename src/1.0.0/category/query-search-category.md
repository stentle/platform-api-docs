# Search Categories
Search categories


## URL
### Http Verb <Badge text="GET" vertical="middle"/>

```
{{URI}}/rest/picnik-rest/categories?pageNumber=?&limit=?
``` 

## Headers
```
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
```

## Query String
| Parameters | Type | Description | Required | 
| ------ | ------ | ------ | ------ | 
| pageNumber | Integer | identifier of the page number | Yes | 
| limit | Integer | identifier of the limit page number | Yes | 


## Response
| Level1 | Level 2| Type | Description |
| ------ | ------ | ------ | ------ | 
| data ||Object| Response content|
|| totalItems | Integer | Number of total Items| 
|| startIndex | Integer | Index | 
|| itemsPerPage | Integer | Number of items Per Page |
|| currentItemCount | Integer | Number of current Items Counted  |
|| items | Object | All items that the category contains |

### Response Example
::: details Example
```json
{
    "data": {
        "totalItems": 18,
        "startIndex": 1,
        "itemsPerPage": 10,
        "currentItemCount": 10,
        "items": [
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
            },
            {
              "id": "5dc99f50ef261b3d909bc113",
              "key": "travel",
              "type": "department",
              "gender": null,
              "parentKey": null,
              "department": null,
              "parentFeed": null,
              "departmentFeed": null,
              "active": null,
              "locale": {
                  "url": "travel",
                  "name": "travel",
                  "nav": null
              }
            },
            {
              "id": "5dc99ff7e49eaa0001b03c77",
              "key": "blind-package",
              "type": "root",
              "gender": "male",
              "parentKey": "travel",
              "department": "travel",
              "parentFeed": {
                  "id": "5dc99f50ef261b3d909bc113",
                  "key": "travel",
                  "type": "department",
                  "gender": null,
                  "parentKey": null,
                  "department": null,
                  "parentFeed": null,
                  "departmentFeed": null,
                  "active": null,
                  "locale": {
                      "url": "travel",
                      "name": "travel",
                      "nav": null
                  }
              },
              "departmentFeed": {
                  "id": "5dc99f50ef261b3d909bc113",
                  "key": "travel",
                  "type": "department",
                  "gender": null,
                  "parentKey": null,
                  "department": null,
                  "parentFeed": null,
                  "departmentFeed": null,
                  "active": null,
                  "locale": {
                      "url": "travel",
                      "name": "travel",
                      "nav": null
                  }
              },
              "active": true,
              "locale": {
                  "url": "blind-package",
                  "name": "Blind package",
                  "nav": null
              }
            },            
            {
                "id": "5e2852c1b855858a93ece8e3",
                "key": "blind",
                "type": "child",
                "gender": "male",
                "parentKey": "blind-package",
                "department": "travel",
                "parentFeed": {
                    "id": "5dc99ff7e49eaa0001b03c77",
                    "key": "blind-package",
                    "type": "root",
                    "gender": "male",
                    "parentKey": "travel",
                    "department": "travel",
                    "parentFeed": {
                        "id": "5dc99f50ef261b3d909bc113",
                        "key": "travel",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "travel",
                            "name": "travel",
                            "nav": null
                        }
                    },
                    "departmentFeed": {
                        "id": "5dc99f50ef261b3d909bc113",
                        "key": "travel",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "travel",
                            "name": "travel",
                            "nav": null
                        }
                    },
                    "active": true,
                    "locale": {
                        "url": "blind-package",
                        "name": "Blind package",
                        "nav": null
                    }
                },
                "departmentFeed": {
                    "id": "5dc99f50ef261b3d909bc113",
                    "key": "travel",
                    "type": "department",
                    "gender": null,
                    "parentKey": null,
                    "department": null,
                    "parentFeed": null,
                    "departmentFeed": null,
                    "active": null,
                    "locale": {
                        "url": "travel",
                        "name": "travel",
                        "nav": null
                    }
                },
                "active": true,
                "locale": {
                    "url": "blind",
                    "name": "Blind",
                    "nav": null
                }
            }
        ]
    }
}
```
:::


## CURL
```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/categories?pageNumber=1&limit=10' \
--header 'X-Domain: utravel' \
--header 'Accept-Language: en'
```

### CURL Response Example
::: details Example
```json
{
    "data": {
        "totalItems": 18,
        "startIndex": 1,
        "itemsPerPage": 10,
        "currentItemCount": 10,
        "items": [
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
            },
            {
              "id": "5dc99f50ef261b3d909bc113",
              "key": "travel",
              "type": "department",
              "gender": null,
              "parentKey": null,
              "department": null,
              "parentFeed": null,
              "departmentFeed": null,
              "active": null,
              "locale": {
                  "url": "travel",
                  "name": "travel",
                  "nav": null
              }
            },
            {
              "id": "5dc99ff7e49eaa0001b03c77",
              "key": "blind-package",
              "type": "root",
              "gender": "male",
              "parentKey": "travel",
              "department": "travel",
              "parentFeed": {
                  "id": "5dc99f50ef261b3d909bc113",
                  "key": "travel",
                  "type": "department",
                  "gender": null,
                  "parentKey": null,
                  "department": null,
                  "parentFeed": null,
                  "departmentFeed": null,
                  "active": null,
                  "locale": {
                      "url": "travel",
                      "name": "travel",
                      "nav": null
                  }
              },
              "departmentFeed": {
                  "id": "5dc99f50ef261b3d909bc113",
                  "key": "travel",
                  "type": "department",
                  "gender": null,
                  "parentKey": null,
                  "department": null,
                  "parentFeed": null,
                  "departmentFeed": null,
                  "active": null,
                  "locale": {
                      "url": "travel",
                      "name": "travel",
                      "nav": null
                  }
              },
              "active": true,
              "locale": {
                  "url": "blind-package",
                  "name": "Blind package",
                  "nav": null
              }
            },            
            {
                "id": "5e2852c1b855858a93ece8e3",
                "key": "blind",
                "type": "child",
                "gender": "male",
                "parentKey": "blind-package",
                "department": "travel",
                "parentFeed": {
                    "id": "5dc99ff7e49eaa0001b03c77",
                    "key": "blind-package",
                    "type": "root",
                    "gender": "male",
                    "parentKey": "travel",
                    "department": "travel",
                    "parentFeed": {
                        "id": "5dc99f50ef261b3d909bc113",
                        "key": "travel",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "travel",
                            "name": "travel",
                            "nav": null
                        }
                    },
                    "departmentFeed": {
                        "id": "5dc99f50ef261b3d909bc113",
                        "key": "travel",
                        "type": "department",
                        "gender": null,
                        "parentKey": null,
                        "department": null,
                        "parentFeed": null,
                        "departmentFeed": null,
                        "active": null,
                        "locale": {
                            "url": "travel",
                            "name": "travel",
                            "nav": null
                        }
                    },
                    "active": true,
                    "locale": {
                        "url": "blind-package",
                        "name": "Blind package",
                        "nav": null
                    }
                },
                "departmentFeed": {
                    "id": "5dc99f50ef261b3d909bc113",
                    "key": "travel",
                    "type": "department",
                    "gender": null,
                    "parentKey": null,
                    "department": null,
                    "parentFeed": null,
                    "departmentFeed": null,
                    "active": null,
                    "locale": {
                        "url": "travel",
                        "name": "travel",
                        "nav": null
                    }
                },
                "active": true,
                "locale": {
                    "url": "blind",
                    "name": "Blind",
                    "nav": null
                }
            }
        ]
    }
}
```
:::

## Errors
for more info on error - [Errors ](/1.0.0/errors.html)