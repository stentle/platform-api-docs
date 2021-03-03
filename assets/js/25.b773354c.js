(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{382:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" Update")]),t._v(" "),s("p",[t._v("Update Attribute endpoint")]),t._v(" "),s("h2",{attrs:{id:"url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),s("h3",{attrs:{id:"http-verb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-verb"}},[t._v("#")]),t._v(" Http Verb "),s("Badge",{attrs:{text:"PUT",vertical:"middle"}})],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{{URI}}/rest/picnik-rest/attributes/{{ATTRIBUTE_ID}}\n")])])]),s("h2",{attrs:{id:"headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("X-Domain:{{X-DOMAIN}}\nAccept-Language:{{ACCEPT-LANGUAGE}}\nContent-Type:application/json\n")])])]),s("h2",{attrs:{id:"payload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[t._v("#")]),t._v(" Payload")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("updatedAttribute")]),t._v(" "),s("td",[t._v("Attribute")]),t._v(" "),s("td",[t._v("Attribute object with data to be inserted")]),t._v(" "),s("td",[t._v("Yes")])])])]),t._v(" "),s("h3",{attrs:{id:"payload-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payload-example"}},[t._v("#")]),t._v(" Payload Example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "attributeCode": "tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso",\n    "departments": [\n        "electronic"\n    ],\n    "id": "58c17b9a4c2acf0001e5d4c7",\n    "italian": {\n        "attribute": "Tempo di riscaldamento per raggiungere il 60% del flusso luminoso",\n        "name": "Raggiunge istantaneamente la massima intensità luminosa"\n    }\n}\n')])])]),s("h2",{attrs:{id:"url-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-parameters"}},[t._v("#")]),t._v(" URL Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("attributeID")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Attribute id of the record to be updated with the following data")]),t._v(" "),s("td",[t._v("Yes")])])])]),t._v(" "),s("h2",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Level1")]),t._v(" "),s("th",[t._v("Level 2")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("data")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("Response content")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Unique identification attribute id")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("creationDate")]),t._v(" "),s("td",[t._v("Int")]),t._v(" "),s("td",[t._v("Creation Date")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("updateDate")]),t._v(" "),s("td",[t._v("Int")]),t._v(" "),s("td",[t._v("Update Date")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("tenantId")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Tenant Id")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("href")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Url of attribute")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("attributeCode")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Name of attribute code")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("departments")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Department")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("key")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Key of Attribute")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Name of Attribute")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("active")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("Attribute is avalable")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("attributeLocaleName")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Attriubte Local Name")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("localeName")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Attribute Local Name")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("english")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("Description in EN for name & attribute")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("italian")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("Description in IT for name & attribute")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("russian")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("Description in RU for name & attribute")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("french")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("Description in FR for name & attribute")])])])]),t._v(" "),s("h3",{attrs:{id:"response-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-example"}},[t._v("#")]),t._v(" Response Example")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Example")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5f886b4a09608a000122720e"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"creationDate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1602775882146")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateDate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1602775882102")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tenantId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"href"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributeCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"departments"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electronic"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"US"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributeLocaleName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"localeName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"english"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"US"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attribute"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"italian"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Raggiunge istantaneamente la massima intensità luminosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attribute"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tempo di riscaldamento per raggiungere il 60% del flusso luminoso"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"russian"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attribute"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"french"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attribute"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"curl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#curl"}},[t._v("#")]),t._v(" CURL")]),t._v(" "),s("p",[t._v("CURL call example. Creating a category.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('curl --location --request PUT \'http://localhost:8080/rest/picnik-rest/attributes/5f886b4a09608a000122720e\' \\\n--header \'X-Domain: landoffashion\' \\\n--header \'Accept-Language: it\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Cookie: stentle=a0pvREtPSS81MVkvWml1QmpQTXRpdz09Om9ZOTk0ekRlSXMvUDNEQUhBdjB1RWc9PQ\' \\\n--data-raw \'{\n    "attributeCode": "tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso",\n    "departments": [\n        "electronic"\n    ],\n    "id": "58c17b9a4c2acf0001e5d4c7",\n    "italian": {\n        "attribute": "Tempo di riscaldamento per raggiungere il 60% del flusso luminoso",\n        "name": "Raggiunge istantaneamente la massima intensità luminosa"\n    }\n}\'\n')])])]),s("h3",{attrs:{id:"curl-response-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#curl-response-example"}},[t._v("#")]),t._v(" CURL Response Example")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Example")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5f886b4a09608a000122720e"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"creationDate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1602775882146")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateDate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1602775882102")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tenantId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"href"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributeCode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tempo-di-riscaldamento-per-raggiungere-il-60%-del-flusso-luminoso"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"departments"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electronic"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"US"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributeLocaleName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"localeName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"english"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"US"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attribute"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"italian"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Raggiunge istantaneamente la massima intensità luminosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attribute"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tempo di riscaldamento per raggiungere il 60% del flusso luminoso"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"russian"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attribute"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"french"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attribute"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[t._v("#")]),t._v(" Errors")]),t._v(" "),s("ul",[s("li",[t._v("Resource Update Exception")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "type": "0",\n    "title": "Generic error",\n    "status": 500,\n    "detail": "Internal Server Error",\n    "trace": ....\n}\n')])])]),s("p",[t._v("for more info on error - "),s("RouterLink",{attrs:{to:"/1.0.0/errors.html"}},[t._v("Errors ")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);