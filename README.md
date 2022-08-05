# linz.id.au

_The special sauce behind [linz.id.au](https://linz.id.au/)_

Actually nothing too special - single HTML + Sass + TypeScript page, built using [Parcel](https://parceljs.org/)

Uses [Bootstrap Icons
](https://icons.getbootstrap.com/) for the socials

Deployed to [Azure Static Web Apps](https://azure.microsoft.com/en-au/services/app-service/static/) using [GitHub Actions](https://github.com/features/actions)

## Dependencies

### System dependencies

* [NodeJS v16+](https://nodejs.org/)

### Install project dependencies

```sh
npm i
```

## Running locally

```sh
npm start
```

Will be available on http://localhost:1234/

## Deployment process

Pushes to `develop` branch will be automatically deployed to https://yellow-smoke-042698a1e-develop.westus2.1.azurestaticapps.net/

Pushes to `main` branch will be automatically deployed to https://linz.id.au/
