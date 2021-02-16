(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{387:function(e,n,a){"use strict";a.r(n);var t=a(42),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"search-categories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-categories"}},[e._v("#")]),e._v(" Search Categories")]),e._v(" "),a("p",[e._v("Search categories")]),e._v(" "),a("h2",{attrs:{id:"url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[e._v("#")]),e._v(" URL")]),e._v(" "),a("h3",{attrs:{id:"http-verb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-verb"}},[e._v("#")]),e._v(" Http Verb "),a("Badge",{attrs:{text:"GET",vertical:"middle"}})],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{{URI}}/rest/picnik-rest/categories?pageNumber=?&limit=?\n")])])]),a("h2",{attrs:{id:"headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[e._v("#")]),e._v(" Headers")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("X-Domain:{{X-DOMAIN}}\nAccept-Language:{{ACCEPT-LANGUAGE}}\n")])])]),a("h2",{attrs:{id:"payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[e._v("#")]),e._v(" Payload")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameters")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Required")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("None")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h3",{attrs:{id:"payload-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload-example"}},[e._v("#")]),e._v(" Payload Example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\nNone\n}\n")])])]),a("h3",{attrs:{id:"url-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-parameters"}},[e._v("#")]),e._v(" URL Parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameters")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Required")]),e._v(" "),a("th",[e._v("Postion")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("pageNumber")]),e._v(" "),a("td",[e._v("Integer")]),e._v(" "),a("td",[e._v("identifier of the page number")]),e._v(" "),a("td",[e._v("True")]),e._v(" "),a("td",[e._v("RequestParam")])]),e._v(" "),a("tr",[a("td",[e._v("limit")]),e._v(" "),a("td",[e._v("Integer")]),e._v(" "),a("td",[e._v("identifier of the limit page number")]),e._v(" "),a("td",[e._v("True")]),e._v(" "),a("td",[e._v("RequestParam")])])])]),e._v(" "),a("h3",{attrs:{id:"url-parameters-presentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-parameters-presentation"}},[e._v("#")]),e._v(" URL Parameters Presentation")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{{URI}}/rest/picnik-rest/categories?pageNumber=?&limit=?\n")])])]),a("h2",{attrs:{id:"curl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#curl"}},[e._v("#")]),e._v(" CURL")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl --location --request GET 'http://localhost:8080/rest/picnik-rest/categories?pageNumber=1&limit=10' \\\n--header 'X-Domain: utravel' \\\n--header 'Accept-Language: en'\n")])])]),a("h3",{attrs:{id:"curl-response-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#curl-response-example"}},[e._v("#")]),e._v(" CURL Response Example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "data": {\n        "totalItems": 18,\n        "startIndex": 1,\n        "itemsPerPage": 10,\n        "currentItemCount": 10,\n        "items": [\n            {\n              "id": "555210b1a44d28823dda21ce",\n              "key": "fashion",\n              "type": "department",\n              "gender": null,\n              "parentKey": null,\n              "department": null,\n              "parentFeed": null,\n              "departmentFeed": null,\n              "active": null,\n              "locale": {\n                  "url": "fashion",\n                  "name": "fashion",\n                  "nav": null\n              }\n            },\n            {\n              "id": "5dc99f50ef261b3d909bc113",\n              "key": "travel",\n              "type": "department",\n              "gender": null,\n              "parentKey": null,\n              "department": null,\n              "parentFeed": null,\n              "departmentFeed": null,\n              "active": null,\n              "locale": {\n                  "url": "travel",\n                  "name": "travel",\n                  "nav": null\n              }\n            },\n            {\n              "id": "5dc99ff7e49eaa0001b03c77",\n              "key": "blind-package",\n              "type": "root",\n              "gender": "male",\n              "parentKey": "travel",\n              "department": "travel",\n              "parentFeed": {\n                  "id": "5dc99f50ef261b3d909bc113",\n                  "key": "travel",\n                  "type": "department",\n                  "gender": null,\n                  "parentKey": null,\n                  "department": null,\n                  "parentFeed": null,\n                  "departmentFeed": null,\n                  "active": null,\n                  "locale": {\n                      "url": "travel",\n                      "name": "travel",\n                      "nav": null\n                  }\n              },\n              "departmentFeed": {\n                  "id": "5dc99f50ef261b3d909bc113",\n                  "key": "travel",\n                  "type": "department",\n                  "gender": null,\n                  "parentKey": null,\n                  "department": null,\n                  "parentFeed": null,\n                  "departmentFeed": null,\n                  "active": null,\n                  "locale": {\n                      "url": "travel",\n                      "name": "travel",\n                      "nav": null\n                  }\n              },\n              "active": true,\n              "locale": {\n                  "url": "blind-package",\n                  "name": "Blind package",\n                  "nav": null\n              }\n            },            \n            {\n                "id": "5e2852c1b855858a93ece8e3",\n                "key": "blind",\n                "type": "child",\n                "gender": "male",\n                "parentKey": "blind-package",\n                "department": "travel",\n                "parentFeed": {\n                    "id": "5dc99ff7e49eaa0001b03c77",\n                    "key": "blind-package",\n                    "type": "root",\n                    "gender": "male",\n                    "parentKey": "travel",\n                    "department": "travel",\n                    "parentFeed": {\n                        "id": "5dc99f50ef261b3d909bc113",\n                        "key": "travel",\n                        "type": "department",\n                        "gender": null,\n                        "parentKey": null,\n                        "department": null,\n                        "parentFeed": null,\n                        "departmentFeed": null,\n                        "active": null,\n                        "locale": {\n                            "url": "travel",\n                            "name": "travel",\n                            "nav": null\n                        }\n                    },\n                    "departmentFeed": {\n                        "id": "5dc99f50ef261b3d909bc113",\n                        "key": "travel",\n                        "type": "department",\n                        "gender": null,\n                        "parentKey": null,\n                        "department": null,\n                        "parentFeed": null,\n                        "departmentFeed": null,\n                        "active": null,\n                        "locale": {\n                            "url": "travel",\n                            "name": "travel",\n                            "nav": null\n                        }\n                    },\n                    "active": true,\n                    "locale": {\n                        "url": "blind-package",\n                        "name": "Blind package",\n                        "nav": null\n                    }\n                },\n                "departmentFeed": {\n                    "id": "5dc99f50ef261b3d909bc113",\n                    "key": "travel",\n                    "type": "department",\n                    "gender": null,\n                    "parentKey": null,\n                    "department": null,\n                    "parentFeed": null,\n                    "departmentFeed": null,\n                    "active": null,\n                    "locale": {\n                        "url": "travel",\n                        "name": "travel",\n                        "nav": null\n                    }\n                },\n                "active": true,\n                "locale": {\n                    "url": "blind",\n                    "name": "Blind",\n                    "nav": null\n                }\n            }\n        ]\n    }\n}\n')])])]),a("h2",{attrs:{id:"errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),a("p",[e._v("for more info on error - "),a("RouterLink",{attrs:{to:"/1.0.0/errors.html"}},[e._v("Errors ")])],1)])}),[],!1,null,null,null);n.default=r.exports}}]);