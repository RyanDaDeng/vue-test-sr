# Vue Mapbox

This is a simple Mapbox demo code to filter different geo locations by a given geo json data.

Note: The solution I built is based on VueMapBox. In real life, I recommend using MapBox.js as 1st option as it documents more comprehensive.

## Online Demo on netlify

- https://agitated-sammet-9bb657.netlify.app


<img src="https://github.com/RyanDaDeng/vue-test-sr/blob/main/public/demo.png" width="900" height="700" />

## Main packages used

````json
    {
        "bootstrap": "^4.5.3",
        "bootstrap-vue": "^2.21.2",
        "mapbox-gl": "^2.0.1",
        "vue": "^2.6.12",
        "vue-mapbox": "^0.4.1",
        "vuex": "^3.6.0",
        "cypress": "^6.2.1", // only used for e2e testing demo
    }
````

## Installation Steps

1. Add your mapbox access token in `.env` file. (the project has contained a default token for you already)

2. Install NPM packages
```
npm install
```

3. Run server:

```
npm run serve
```


## Testing

### E2E testing

The project only contains one simple test that test if the show/hide location can be checked.

1. run the following bash command

```
./node_modules/.bin/cypress open
```

### Component Testing // todo


## CI/CD

The project will be deployed to netlify for every time there is a new commit.

The deployment will be failed if the unit test is failed.

ref: https://community.netlify.com/t/support-guide-testing-your-netlify-builds/1456