var express = require('express');
var http = require('http');
var request = require('request');
var helper = require( './helper' );
var _ = require('lodash');

function callAPI( params, req, res )
{
    var apiURL = helper.buildParams( params );

    // now call the API
    request(apiURL, function(err, response) {
        if (err) {
            res.status(500).send('Error');
            return;
        }

        var data = JSON.parse(response.body);

        var results = _.chain(data.businesses)
            .map(function(coffee) {
                return{
                    title: coffee.name,
                    text: coffee.location.address[0]
                }
            })
            .value();

        return res.json(results);
    });
}

module.exports = function(req, res) {

    var params = {
        term:'coffee',
        location: req.query.text,
        sort:1,
        distance:1
    };

    callAPI( params, req, res)
};

