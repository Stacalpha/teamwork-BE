[![Coverage Status](https://coveralls.io/repos/github/Stacalpha/teamwork-BE/badge.svg?branch=develop)](https://coveralls.io/github/Stacalpha/teamwork-BE?branch=develop)
[![Build Status](https://travis-ci.com/Stacalpha/teamwork-BE.svg?branch=develop)](https://travis-ci.com/Stacalpha/teamwork-BE)
[![Maintainability](https://api.codeclimate.com/v1/badges/5cab39101ca645468e12/maintainability)](https://codeclimate.com/github/Stacalpha/teamwork-BE/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5cab39101ca645468e12/test_coverage)](https://codeclimate.com/github/Stacalpha/teamwork-BE/test_coverage)

# teamwork-BE
Backend for Teamwork application. Capstone project for DevC training with Andela.

# Naming Convention.
https://github.com/andela/bestpractices/wiki/Git-naming-conventions-and-best-practices

# User Stories
https://docs.google.com/document/d/1ADcZ54o1s2aBtZ0dZ7fs_liFew1zTg10JqZxgRuNqm4/edit

200 OK - Response to a successful GET, PUT, PATCH or DELETE. Can also be used for a POST that doesn't result in a creation.
201 Created - Response to a POST that results in a creation. Should be combined with a Location header pointing to the location of the new resource
204 No Content - Response to a successful request that won't be returning a body (like a DELETE request)
304 Not Modified - Used when HTTP caching headers are in play
400 Bad Request - The request is malformed, such as if the body does not parse
401 Unauthorized - When no or invalid authentication details are provided. Also useful to trigger an auth popup if the API is used from a browser
403 Forbidden - When authentication succeeded but authenticated user doesn't have access to the resource
404 Not Found - When a non-existent resource is requested
405 Method Not Allowed - When an HTTP method is being requested that isn't allowed for the authenticated user
410 Gone - Indicates that the resource at this end point is no longer available. Useful as a blanket response for old API versions
415 Unsupported Media Type - If incorrect content type was provided as part of the request
422 Unprocessable Entity - Used for validation errors
429 Too Many Requests - When a request is rejected due to rate limiting
