const headers = {
	'content-type': 'application/json',
    'x-hasura-admin-secret': '3rRzwtdjpUicLI1gVtpshZ8I9etzMJkePKnHmnFlcjyAptOIp1YdXdDC7PLGirWT'
};

const getOrdersQuery = {
    "operationName": "MyQuery",
    "database_name":"public",
    "query": `query MyQuery {
        orders(where: {id: {_eq: 1}}) {
          id
          order_name
          items {
            items
            id
          }
        }
      }
      `,
    "variables": {}
};

export const optionsForGetOrders = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(getOrdersQuery)
};