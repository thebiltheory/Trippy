/**
 * @function trippyGet api call to als endpointde
 * @param {url} endpoint for example purpose response.json
 */
export const trippyGet = (endpoint) => {
  const headers = new Headers();
  const init = {
    method: 'GET',
    status: 200,
    statusText: 'Yep, found it!',
    headers,
    mode: 'no-cors',
    cache: 'default',
  };

  const request = new Request(endpoint, init);

  return fetch(request)
    .then((response) => {
      return response.json();
    });
};
