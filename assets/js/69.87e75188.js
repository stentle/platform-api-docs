(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{426:function(e,r,t){"use strict";t.r(r);var a=t(42),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Stentle uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the 5xx range indicate an error with Stentle's servers (these are rare).")]),e._v(" "),t("p",[e._v("Some 4xx errors that could be handled programmatically (e.g., a card is declined) include an error code that briefly explains the error reported.")]),e._v(" "),t("h3",{attrs:{id:"handling-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handling-errors"}},[e._v("#")]),e._v(" Handling errors")]),e._v(" "),t("p",[e._v("Our Client libraries raise exceptions for many reasons, such as a failed charge, invalid parameters, authentication errors, and network unavailability. We recommend writing code that gracefully handles all possible API exceptions.")]),e._v(" "),t("h3",{attrs:{id:"http-status-code-summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-status-code-summary"}},[e._v("#")]),e._v(" HTTP status code summary")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("200")]),e._v(" - OK\tEverything worked as expected. "),t("br"),e._v(" "),t("code",[e._v("400")]),e._v(" - Bad Request\tThe request was unacceptable, often due to missing a required parameter."),t("br"),e._v(" "),t("code",[e._v("401")]),e._v(" - Unauthorized\tNo valid API key provided."),t("br"),e._v(" "),t("code",[e._v("402")]),e._v(" - Request Failed\tThe parameters were valid but the request failed."),t("br"),e._v(" "),t("code",[e._v("403")]),e._v(" - Forbidden\tThe API key doesn't have permissions to perform the request."),t("br"),e._v(" "),t("code",[e._v("404")]),e._v(" - Not Found\tThe requested resource doesn't exist."),t("br"),e._v(" "),t("code",[e._v("409")]),e._v(" - Conflict\tThe request conflicts with another request (perhaps due to using the same idempotent key)."),t("br"),e._v(" "),t("code",[e._v("429")]),e._v(" - Too Many Requests\tToo many requests hit the API too quickly. We recommend an exponential backoff of your requests."),t("br"),e._v(" "),t("code",[e._v("500, 502, 503, 504")]),e._v(" - Server Errors\tSomething went wrong on Stentle's end. (These are rare.)"),t("br")])]),e._v(" "),t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])])])}),[],!1,null,null,null);r.default=s.exports}}]);