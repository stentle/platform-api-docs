# Errors
--------------------------------------------------------

Stentle uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the 5xx range indicate an error with Stentle's servers (these are rare).

Some 4xx errors that could be handled programmatically (e.g., a card is declined) include an error code that briefly explains the error reported.

### Handling errors

Our Client libraries raise exceptions for many reasons, such as a failed charge, invalid parameters, authentication errors, and network unavailability. We recommend writing code that gracefully handles all possible API exceptions.


### HTTP status code summary
> ```200``` - OK	Everything worked as expected. <br/>
> ```400``` - Bad Request	The request was unacceptable, often due to missing a required parameter.<br/>
> ```401``` - Unauthorized	No valid API key provided.<br/>
> ```402``` - Request Failed	The parameters were valid but the request failed.<br/>
> ```403``` - Forbidden	The API key doesn't have permissions to perform the request.<br/>
> ```404``` - Not Found	The requested resource doesn't exist.<br/>
> ```409``` - Conflict	The request conflicts with another request (perhaps due to using the same idempotent key).<br/>
> ```429``` - Too Many Requests	Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.<br/>
> ```500, 502, 503, 504``` - Server Errors	Something went wrong on Stentle's end. (These are rare.)<br/>

##