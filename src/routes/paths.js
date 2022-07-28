export const VIEW = Object.freeze({
  MAIN: "MAIN",
  CARD: "CARD",
  ART: "ART",
  TEST: "TEST",
  LOGIN: "LOGIN",
  REDIRECT: "REDIRECT",
});

export const PATHS = Object.freeze({
  [VIEW.MAIN]: "/newspaper/main",
  [VIEW.CARD]: "/newspaper/card/:id",
  [VIEW.ART]: "/newspaper/art/:id",
  [VIEW.TEST]: "/newspaper/test",
  [VIEW.LOGIN]: "/newspaper/login",
  [VIEW.REDIRECT]: "/newspaper/",
});

export const getPath = (view) => PATHS[view];

export const injectPathParams = (route, params) => {
  let newRoute = route;
  Object.keys(params).forEach(function (key) {
    const regex = new RegExp(`:${key}`, "g");
    newRoute = newRoute.replace(regex, params[key]);
  });
  return newRoute;
};
