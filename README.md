# Yelp Integration for InstaCoffee via Mixmax :)

Please note that recommendation starts within the Zipcode and movers further out until 10,000 meters

The keys are provided as of now, with your own keys please export the following:

`oauth_consumer_key`,
`oauth_token`,
`consumerSecret`,
`tokenSecret`,
and `PORT`

To run it locally:

Install using `npm install`

Run using `npm start`

To simulate locally how Mixmax calls the typeahead URL (to return a JSON list of typeahead results), run:
`curl https://localhost:9443/typeahead?text=94102`


To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), run:
`curl https://localhost:9443/resolver?text=94102`

