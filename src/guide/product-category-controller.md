# ProductCategoryController <Badge text="ProductCategoryController" type="middle"/>
--------------------------------------------------------
Constructor Detail 
```
public ProductCategoryController ()
```
## searchCategories <Badge text="searchCategories" /> 
Method Detail for searchCategories


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/categories?pageNumber=?&limit=?"
``` 

```
Headers
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
```

#### Payload
```
pageNumber:1
limit:10
```

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| httpResponse_p | HttpServletResponse | parameter to check the response | True | Param |
| httpRequest_p | HttpServletRequest | parameter to check the request data | True | Param |
| pageNumber | Integer | identifier of the page number | True | RequestParam |
| limit | Integer | identifier of the limit page number | True | RequestParam |
| active | boolean | TODO | False | RequestParam |
| hideChildless | boolean | TODO | False | RequestParam |
| key | String | name of product category | False | RequestParam |
| type | String | TODO | False | RequestParam |
| gender | String | Gender male/female | False | RequestParam |
| parentKey | String | name of parent key | False | RequestParam |
| department | String | department of product category | False | RequestParam |
| parentId | String | unique name of parent id | False | RequestParam |

#### <Badge text="CURL Call" type="warning"/>

```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/categories?pageNumber=1&limit=10' \
--header 'X-Domain: utravel' \
--header 'Accept-Language: en'
```

#### <Badge text="Returns" type="warning"/>
```
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
                "id": "5dc99ff7e49eaa0001b03c78",
                "key": "open-package",
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
                    "url": "open-package",
                    "name": "Open package",
                    "nav": null
                }
            },
            {
                "id": "5dc9a15fe49eaa0001b03c7a",
                "key": "explore",
                "type": "child",
                "gender": "male",
                "parentKey": "open-package",
                "department": "travel",
                "parentFeed": {
                    "id": "5dc99ff7e49eaa0001b03c78",
                    "key": "open-package",
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
                        "url": "open-package",
                        "name": "Open package",
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
                    "url": "explore",
                    "name": "Explore",
                    "nav": null
                }
            },
            {
                "id": "5dc9a15fe49eaa0001b03c7b",
                "key": "crew",
                "type": "child",
                "gender": "male",
                "parentKey": "open-package",
                "department": "travel",
                "parentFeed": {
                    "id": "5dc99ff7e49eaa0001b03c78",
                    "key": "open-package",
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
                        "url": "open-package",
                        "name": "Open package",
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
                    "url": "crew",
                    "name": "Crew",
                    "nav": null
                }
            },
            {
                "id": "5dc9a15fe49eaa0001b03c7c",
                "key": "vip",
                "type": "child",
                "gender": "male",
                "parentKey": "open-package",
                "department": "travel",
                "parentFeed": {
                    "id": "5dc99ff7e49eaa0001b03c78",
                    "key": "open-package",
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
                        "url": "open-package",
                        "name": "Open package",
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
                    "url": "vip",
                    "name": "VIP",
                    "nav": null
                }
            },
            {
                "id": "5dc9a15fe49eaa0001b03c7d",
                "key": "flash",
                "type": "child",
                "gender": "male",
                "parentKey": "open-package",
                "department": "travel",
                "parentFeed": {
                    "id": "5dc99ff7e49eaa0001b03c78",
                    "key": "open-package",
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
                        "url": "open-package",
                        "name": "Open package",
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
                    "url": "flash",
                    "name": "Flash",
                    "nav": null
                }
            },
            {
                "id": "5dc9a15fe49eaa0001b03c7e",
                "key": "city",
                "type": "child",
                "gender": "male",
                "parentKey": "open-package",
                "department": "travel",
                "parentFeed": {
                    "id": "5dc99ff7e49eaa0001b03c78",
                    "key": "open-package",
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
                        "url": "open-package",
                        "name": "Open package",
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
                    "url": "city",
                    "name": "City",
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

##### <Badge text="error" type="warning"/>

for more info on error - [Errors ](errors.html) 


## createProductCategory <Badge text="createProductCategory" /> 

Method Detail for createProductCategory


```
Method
RequestMethod.POST
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/categories"
``` 

```
Headers
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```

#### Payload
> Body, don't forget to modify/change id
```
{
    "_id" : "5dc99f50ef261b3d909bc000",
    "key" : "traveltest",
    "type" : "department",
    "declare_variants" : [ 
        "duration", 
        "start"
    ],
    "photo_attributes" : [ 
        "duration"
    ]
}
```

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| productCategory | RequestBody | parameter to request a body of product category | True | Param |
| httpServletResponse | HttpServletResponse | parameter to check the response | True | Param |
| httpServletRequest | HttpServletRequest | parameter to check the request data | True | Param |
| principal | TODO | parameter to check user auth and rights | True | Param |


#### <Badge text="CURL Call" type="warning"/>

```
curl --location --request POST 'http://localhost:8080/rest/picnik-rest/categories' \
--header 'X-Domain: utravel' \
--header 'Accept-Language: en' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=U2Y1MWFMOXk2QkxrNytNSnoyUUdOdz09OkM5amZCQWt3RkNWMXFhODhPaEFyMEE9PQ' \
--data-raw '{
    "_id" : "5dc99f50ef261b3d909bc000",
    "key" : "traveltest1",
    "type" : "department",
    "declare_variants" : [ 
        "duration", 
        "start"
    ],
    "photo_attributes" : [ 
        "duration"
    ]
}'
```

#### <Badge text="Returns" type="warning"/>
```
{
    "data": {
        "id": "602141e3b3cb1f0001bfe040",
        "key": "traveltest",
        "type": "DEPARTMENT",
        "gender": null,
        "active": null,
        "imageList": null,
        "parentId": null,
        "parentFeed": null,
        "ranking": 0,
        "localeName": "traveltest1",
        "english": null,
        "italian": null,
        "parentKey": null,
        "declareVariants": null,
        "declareAttributes": null,
        "photoAttributes": null,
        "taxes": null,
        "products": null,
        "sizeScaleCode": null,
        "department": null
    }
}
```

##### <Badge text="error" type="warning"/>
- ResourceCreationException <Badge text="ResourceCreationException" type="error"/> - Error types resource not found

for more info on error - [Errors ](errors.html) 


## updateCategory <Badge text="updateCategory" /> 

Method Detail for updateCategory


```
Method
RequestMethod.PUT
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/categories/{{CATEGORY_ID}}"
``` 

```
Headers
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```

#### Payload
> Body, don't forget to modify/change id
```
{
    "id": "555210b1a44d28823dda21ceg",
    "key": "citytest",
    "type": "CHILDteese",
    "gender": "female",
    "active": true,
    "imageList": null,
    "parentId": null
}
```

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| categoryId | String | unique parameter category ID | True | Param |
| updatedProductCategory | RequestBody | parameter to request a body of product category | True | Param |
| httpServletResponse | HttpServletResponse | parameter to check the response | True | Param |
| principal | TODO | parameter to check user auth and rights | True | Param |


#### <Badge text="CURL Call" type="warning"/>

```
curl --location --request PUT 'http://localhost:8080/rest/picnik-rest/categories/555210b1a44d28823dda21ce' \
--header 'X-Domain: utravel' \
--header 'Accept-Language: en' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=U2Y1MWFMOXk2QkxrNytNSnoyUUdOdz09OkM5amZCQWt3RkNWMXFhODhPaEFyMEE9PQ' \
--data-raw '{

        "id": "555210b1a44d28823dda21ce",
        "key": "citytest",
        "type": "CHILDteese",
        "gender": "female",
        "active": true,
        "imageList": null,
        "parentId": null

}'
```

#### <Badge text="Returns" type="warning"/>
```
{
    "data": {
        "id": "555210b1a44d28823dda21ce",
        "key": "citytest",
        "type": "DEPARTMENT",
        "gender": "female",
        "active": true,
        "imageList": null,
        "parentId": null,
        "parentFeed": null,
        "ranking": 0,
        "localeName": "citytest",
        "english": null,
        "italian": null,
        "parentKey": null,
        "declareVariants": [
            "size",
            "color"
        ],
        "declareAttributes": null,
        "photoAttributes": null,
        "taxes": null,
        "products": null,
        "sizeScaleCode": null,
        "department": null
    }
}
```

##### <Badge text="error" type="warning"/>
- ResourceUpdateException <Badge text="ResourceUpdateException" type="error"/> - Error types resource update 
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more info on error - [Errors ](errors.html) 


## getCategoryById <Badge text="getCategoryById" /> 

Method Detail for getCategoryById


```
Method
RequestMethod.GET
``` 

```
URL to be used in Postman: "{{URI}}/rest/picnik-rest/categories/{{CATEGORY_ID}}"
``` 

```
Headers
X-Domain:{{X-DOMAIN}}
Accept-Language:{{ACCEPT-LANGUAGE}}
Content-Type:application/json
```

#### Payload
> ID of Product_Category
```
CATEGORY_ID=5dc9a15fe49eaa0001b03c7e
```

##### <Badge text="Parameters" type="warning"/>
| Parameters | Type | Description | Required | Postion |
| ------ | ------ | ------ | ------ | ------ |
| categoryId | String | unique parameter category ID | True | Param |
| httpServletResponse | HttpServletResponse | parameter to check the response | True | Param |


#### <Badge text="CURL Call" type="warning"/>

```
curl --location --request GET 'http://localhost:8080/rest/picnik-rest/categories/5dc9a15fe49eaa0001b03c7e' \
--header 'X-Domain: utravel' \
--header 'Accept-Language: en' \
--header 'Content-Type: application/json' \
--header 'Cookie: stentle=U2Y1MWFMOXk2QkxrNytNSnoyUUdOdz09OkM5amZCQWt3RkNWMXFhODhPaEFyMEE9PQ'
```

#### <Badge text="Returns" type="warning"/>
```
{
    "data": {
        "id": "5dc9a15fe49eaa0001b03c7e",
        "key": "city",
        "type": "CHILD",
        "gender": "male",
        "active": true,
        "imageList": null,
        "parentId": null,
        "parentFeed": {
            "id": "5dc99ff7e49eaa0001b03c78",
            "key": "open-package",
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
                "url": "open-package",
                "name": "Open package",
                "nav": null
            }
        },
        "ranking": 0,
        "localeName": "City",
        "english": {
            "url": "city",
            "name": "City",
            "nav": null
        },
        "italian": {
            "url": "city",
            "name": "City",
            "nav": null
        },
        "parentKey": "open-package",
        "declareVariants": null,
        "declareAttributes": null,
        "photoAttributes": null,
        "taxes": null,
        "products": null,
        "sizeScaleCode": null,
        "department": "travel"
    }
}
```

##### <Badge text="error" type="warning"/>
- ResourceNotFoundException <Badge text="ResourceNotFoundException" type="error"/> - Error types resource not found

for more info on error - [Errors ](errors.html) 