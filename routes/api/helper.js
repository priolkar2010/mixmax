var oAUTH_CONSUMER_KEY = process.env.oauth_consumer_key || "BAjU7Q6SXUycuza4NS3P6A";
var oAUTH_TOKEN = process.env.oauth_token || "-J8zphoKIhofxaA_nDY145j39HPgQT1E";
var CONSUMER_KEY = process.env.consumerSecret || "VON8NtF2KgGAHI6TY2oKc1d7fBU";
var TOKEN_SECRET = process.env.tokenSecret || "aZFAXYlTpuH5_UabmMwfS7hF16Y";
var qs = require('querystring');
var _ = require('lodash');
var oauthSignature = require('oauth-signature');
var n = require('nonce')();

function buildParams( params )
{
    var httpMethod = 'GET';

    var url = 'http://api.yelp.com/v2/search';

    var required_parameters = {
        oauth_consumer_key: oAUTH_CONSUMER_KEY,
        oauth_token: oAUTH_TOKEN,
        oauth_nonce: n(),
        oauth_timestamp: n().toString().substr( 0, 10 ),
        oauth_signature_method: 'HMAC-SHA1',
        oauth_version: '1.0'
    };
    // combine all the parameters
    var parameters = _.assign( params, required_parameters );

    var consumerSecret = CONSUMER_KEY;
    var tokenSecret = TOKEN_SECRET;

    // Call Yelp's Oauth 1.0a server, the the signature is returned
    var signature = oauthSignature.generate( 'GET', url, parameters, consumerSecret, tokenSecret,
        { encodeSignature: false } );

    parameters.oauth_signature = signature;

    var paramURL = qs.stringify( parameters );

    var apiURL = url + '?' + paramURL;
    
    return apiURL;
}

module.exports.buildParams = buildParams;