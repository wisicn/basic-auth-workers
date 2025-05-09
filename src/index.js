export default {
  async fetch(request, env, ctx) {
    /**
     * @param {string} PRESHARED_AUTH_HEADER_KEY Custom header to check for key
     * @param {string} PRESHARED_AUTH_HEADER_VALUE Hard coded key value
     */
    const PRESHARED_AUTH_HEADER_KEY = `${env.AUTH_HEADER_KEY}`;
    const PRESHARED_AUTH_HEADER_VALUE = `${env.AUTH_HEADER_VALUE}`;
    const psk = request.headers.get(PRESHARED_AUTH_HEADER_KEY);

    if (psk === PRESHARED_AUTH_HEADER_VALUE) {
      // Correct preshared header key supplied. Now create a new request without the PSK header
      const newHeaders = new Headers(request.headers);
      newHeaders.delete(PRESHARED_AUTH_HEADER_KEY);
      //return fetch(request);
      return fetch(new Request(request, {
        headers: newHeaders
      }));
    }

    // Incorrect key supplied. Reject the request.
    return new Response("Deny Access", {
      status: 401,
      headers: {
        "WWW-Authenticate": "Basic realm=\"You must login\""
      }
    });
  },
};
