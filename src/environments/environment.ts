// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebaseConfig: {
      apiKey: "AIzaSyCk60LIO08N01j-m4zmreNnCzm8ebBZwLE",
      authDomain: "studentregister-da87b.firebaseapp.com",
      databaseURL: "https://studentregister-da87b.firebaseio.com",
      projectId: "studentregister-da87b",
      storageBucket: "studentregister-da87b.appspot.com",
      messagingSenderId: "32549295104"
    }
};
