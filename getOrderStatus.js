const headers = {
	'content-type': 'application/json',
    'x-hasura-admin-secret': '3rRzwtdjpUicLI1gVtpshZ8I9etzMJkePKnHmnFlcjyAptOIp1YdXdDC7PLGirWT'
};

const getOrderStatusQuery = {
    "operationName": "MyQuery3",
    "database_name":"public",
    "query": `query MyQuery3 {
        tracking_order {
          id
          order_id
          track_status
        }
      }
      `,
    "variables": {}
};

export const optionsForGetOrderStatus = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(getOrderStatusQuery)
};