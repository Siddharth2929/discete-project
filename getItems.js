const headers = {
	'content-type': 'application/json',
    'x-hasura-admin-secret': '3rRzwtdjpUicLI1gVtpshZ8I9etzMJkePKnHmnFlcjyAptOIp1YdXdDC7PLGirWT'
};

const getItemsQuery = {
    "operationName": "MyQuery2",
    "database_name":"public",
    "query": `query MyQuery2 {
        items {
          items
          id
          order {
            id
            order_name
          }
        }
      }
      `,
    "variables": {}
};

export const optionsForGetItems = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(getItemsQuery)
};