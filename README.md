# Yelp Integration for the zipcode
Please note that recommendation starts closest to the Zipcode and movers further till 10000 meters

The keys are as of now provided, please export following 

process.env.oauth_consumer_key
process.env.oauth_token
process.env.consumerSecret
process.env.tokenSecret 
process.env.PORT

Running locally

Install using `npm install`

Run using `npm start`

To simulate locally how Mixmax calls the typeahead URL (to return a JSON list of typeahead results), run:
`curl https://localhost:9443/typeahead?text=94102`


To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), run:
`curl https://localhost:9443/resolver?text=94102`

