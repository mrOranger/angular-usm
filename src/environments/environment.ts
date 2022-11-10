// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:8000/users/',
  API_URL_AUTH_LOGIN: 'http://localhost:8000/api/auth/login',
  API_URL_AUTH_SIGNUP: 'http://localhost:8000/api/auth/signup',
  API_URL_AUTH_LOGOUT: 'http://localhost:8000/api/auth/logout',
  errorMessages: {
    unauthorized: {
      code: 401,
      title: "Non autorizzato!",
      body: "Non sei autorizzato ad accedere a questa risorsa."
    },
    notFound: {
      code: 404,
      title: "404 - Not Found",
      body: "Non abbiamo trovato questa risorsa nel server."
    },
    serverError: {
      code: 500,
      title: "Errore interno al Server",
      body: "Si è verificato un errore interno al Server, perfavore contatta l'assistenza."
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
