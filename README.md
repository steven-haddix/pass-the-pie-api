<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://iheartsvg.com/wp-content/uploads/2019/11/im-just-here-for-the-pie-1024x1024.png" width="320" alt="Nest Logo" /></a>
</p>

## Description

A simple Rest API for giving and receiving pie based currencies. Written in NodeJS/NestJS/TypeORM.

## Running the app
Currently, the preferred way to develop the app is via `docker compose`. All of the configuration files are setup to point to docker resources. The app can be ran and developed locally, but you will need to change the `.env` and `ormconfig.json` to point to `localhost` instead of `postgres`.

```bash
# development
$ docker compose up
```

## Resources/Ports

| Resource        | Port           |
| ------------- |-------------|
| REST API     | [:3001/api](http://localhost:3001/api) |
| Swagger Docs | [:3001/docs](http://localhost:3001/docs) |

## TODO
- Document running TypeORM commands in Docker
- Document Postgres migration/init processes
- Publish swagger docs to Github Page
- Complete data model for use scoring
- Implement teams/groups
- Auth at some point?


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
