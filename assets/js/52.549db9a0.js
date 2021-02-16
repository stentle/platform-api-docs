(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{409:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" Update")]),t._v(" "),a("p",[t._v("Upload a csv to import")]),t._v(" "),a("h2",{attrs:{id:"url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),a("h3",{attrs:{id:"http-verb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-verb"}},[t._v("#")]),t._v(" Http Verb "),a("Badge",{attrs:{text:"POST",vertical:"middle"}})],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("{{URI}}/rest/picnik-rest/csv?folder=attribute\n")])])]),a("h2",{attrs:{id:"headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("X-Domain:{{X-DOMAIN}}\nAccept-Language:{{ACCEPT-LANGUAGE}}\nX-Country-Code: {{X-COUNTRY-CODE}}\n")])])]),a("h2",{attrs:{id:"payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[t._v("#")]),t._v(" Payload")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("file")]),t._v(" "),a("td",[t._v("form-data")]),t._v(" "),a("td",[t._v("need a path to the csv file")]),t._v(" "),a("td",[t._v("True")])])])]),t._v(" "),a("h3",{attrs:{id:"payload-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload-example"}},[t._v("#")]),t._v(" Payload Example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("{\n file: fileExample.csv\n}\n")])])]),a("h4",{attrs:{id:"query-string-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-string-parameters"}},[t._v("#")]),t._v(" Query String Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("folder")]),t._v(" "),a("td",[t._v("attribute")]),t._v(" "),a("td",[t._v("Reference of the folder to take CSV file")]),t._v(" "),a("td",[t._v("True")])])])]),t._v(" "),a("h3",{attrs:{id:"url-parameters-presentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-parameters-presentation"}},[t._v("#")]),t._v(" URL Parameters Presentation")]),t._v(" "),a("p",[t._v("'folder=?' is the destination folder of the uploaded file")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("{{URI}}/rest/picnik-rest/csv?folder=attribute\n")])])]),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Level1")]),t._v(" "),a("th",[t._v("Level 2")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("data")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("Response content")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("UUID")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("UUID to track the status of the uploaded file")])])])]),t._v(" "),a("h3",{attrs:{id:"response-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-example"}},[t._v("#")]),t._v(" Response Example")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Response")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ed2b1f9e-f1cd-4107-a158-022d4b986b8b"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"curl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#curl"}},[t._v("#")]),t._v(" CURL")]),t._v(" "),a("p",[t._v("CURL call example. Get the status of CSV.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl --location --request POST 'http://localhost:8080/rest/picnik-rest/csv?folder=attribute' \\\n--header 'Accept-Language: en' \\\n--header 'X-Domain: landoffashion' \\\n--header 'X-Country-Code: it' \\\n--header 'Cookie: stentle=ZnY1eERCM2plWjZhelhMOU5rSmZqdz09OmkwUEtEYzhkZHBLRzBZUEdnUHpLM2c9PQ' \\\n--form 'file=@\"/Users/stentle/Downloads/Alpitour_Volo-Linea.csv\"'\n")])])]),a("h3",{attrs:{id:"curl-response-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#curl-response-example"}},[t._v("#")]),t._v(" CURL Response Example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n"ed2b1f9e-f1cd-4107-a158-022d4b986b8b"\n}\n')])])]),a("h2",{attrs:{id:"errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[t._v("#")]),t._v(" Errors")]),t._v(" "),a("p",[t._v("for more info on error - "),a("RouterLink",{attrs:{to:"/1.0.0/errors.html"}},[t._v("Errors ")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);