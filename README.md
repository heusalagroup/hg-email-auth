# @heusalagroup/hg-email-auth

Simple stateless HTTP REST microservice to verify the ownership of an email address.

### Build the server

```
npm run build
```

### Start the server in production mode

```
npm run start-prod
```

...and open http://0.0.0.0:3000

### Using Docker compose

```
docker-compose build
docker-compose up
```

...and open the REST API at http://localhost:3500

Email messages are readable from http://localhost:8025 (e.g. nothing is really sent)

***Warning!*** Make sure to modify `BACKEND_JWT_SECRET` and other settings from the `docker-compose.yml` before production use!

### Using the API using `curl`

#### Initiating the authentication

```shell
curl -X POST -H 'Content-Type: application/json' -d '{"email":"me@example.com"}' 'http://localhost:3500/authenticateEmail'
```

You'll get a response like this:

````json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDc4NjU4NjEsImF1ZCI6Im1lQGV4YW1wbGUuY29tIn0.7XqKdwNMOhj-6J_32T_SXYnrPqksQIgqlwSCQEVsw1Q",
  "email": "me@example.com"
}
````

This will send an email to `me@example.com` with a secret one time code.

Now, open [http://localhost:8025](http://localhost:8025) and read the code from email message the service sent. For me, it was `6767`.

#### Submitting the validation code

For the next request you'll need to create JSON body where the token property is the response from the previous call:

````json
{
  "token": PREVIOUS_RESPONSE, 
  "code": "6767"
}
````

Then submit that code back to the service:

```shell
curl -X POST -H 'Content-Type: application/json' -d '{"token": { "token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDc4NjU4NjEsImF1ZCI6Im1lQGV4YW1wbGUuY29tIn0.7XqKdwNMOhj-6J_32T_SXYnrPqksQIgqlwSCQEVsw1Q", "email": "me@example.com" }, "code": "6767"}' 'http://localhost:3500/verifyEmailCode'
```

You'll get a response like this:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Nzk0MDE4MjEsInN1YiI6Im1lQGV4YW1wbGUuY29tIn0.Mv1_uz6Oir2P1zUKbOgQ_vKFtFnV6fFkK0vT0vMIviU",
  "email": "me@example.com",
  "verified": true
}
```

#### Validating tokens

In case you'll need to verify this token's validity later, you can call `POST /verifyEmailToken`.

The input JSON:

```json
{
  "token": PREVIOUS_TOKEN
}
```

```shell
curl -X POST -H 'Content-Type: application/json' -d '{"token": {"token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Nzk0MDE4MjEsInN1YiI6Im1lQGV4YW1wbGUuY29tIn0.Mv1_uz6Oir2P1zUKbOgQ_vKFtFnV6fFkK0vT0vMIviU", "email": "me@example.com", "verified": true}}' 'http://localhost:3500/verifyEmailToken'
```

The successful response will be:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Nzk0MDIzMTcsInN1YiI6Im1lQGV4YW1wbGUuY29tIn0.jRv6M6IM81J670rzETtvV93MHUUD0236Uh7xZhMt5O4",
  "email": "me@example.com",
  "verified": true
}
```

Unsuccessful response will be: 

```json
{
  "error": "Access denied",
  "code": 403
}
```

### License

Copyright (c) Heusala Group. All rights reserved. Licensed under the MIT License (the "[License](./LICENSE)");

