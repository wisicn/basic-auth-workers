# basic-auth-workers
This is a [Basic HTTP Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication) implementation using Cloudflare Workers.

Please refer to the [Cloudflare documentation](https://developers.cloudflare.com/workers/configuration/environment-variables/) to set up the environment variables.

| Variable Name | Type | Value | Notes |
| ------- | ------- | ------- | ------- |
| AUTH_HEADER_KEY | Text | authorization | The name of the HTTP authentication header, should always be Authorization |
| AUTH_HEADER_VALUE | Secret | your_own_secret | Should be in the formate of ```<type> <credentials>``` |

[Find a tool](https://www.google.com/search?q=http+basic+authentication+tool&newwindow=1) to help you to generate the ```AUTH_HEADER_VALUE```
