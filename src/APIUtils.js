const API_BASE_URL = 'https://crudcrud.com/api/0ff21e245a234f8c9b7e898a4e326757/person';

const request = (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    ).catch(e => {
      console.log('request error :', e);
    });
};

export function saveEmployee(data) {
  return request({
    url: API_BASE_URL,
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export function getAllEmployees() {
  return request({
    url: API_BASE_URL,
    method: 'GET'
  });
}

export function updateEmployee(data, id) {
  return request({
    url: API_BASE_URL + '/' + id,
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

export function deleteEmployee(id) {
  return request({
    url: API_BASE_URL + "/" + id,
    method: 'DELETE'
  });
}