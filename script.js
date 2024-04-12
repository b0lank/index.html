
fetch("https://sandbox.plaid.com/link/token/create", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        client_id: '661564445b0a98001c90c46f',
        secret: '682cd92b65af55ee7738e82d39ecf3',
        user: {
          client_user_id: 'user-id',
          phone_number: '+1 415 5550123'
        },
        client_name: 'Personal Finance App',
        products: ['transactions'],
        transactions: {
          days_requested: 730
        },
        country_codes: ['US'],
        language: 'en',
        webhook: 'https://sample-web-hook.com',
        redirect_uri: 'https://domainname.com/oauth-page.html',
        account_filters: {
          depository: {
            account_subtypes: ['checking', 'savings']
          },
          credit: {
            account_subtypes: ['credit card']
          }
        }
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));



const handler = Plaid.create({
        token: 'GENERATED_LINK_TOKEN',
        onSuccess: (public_token, metadata) => {},
        onLoad: () => {},
        onExit: (err, metadata) => {},
        onEvent: (eventName, metadata) => {},
      });