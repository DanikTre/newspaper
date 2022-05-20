export const VIEW = Object.freeze({
  MAIN: "MAIN",
  CARD: "CARD",
  ART: "ART",
  LOGIN: "LOGIN",
  REDIRECT: "REDIRECT",
});

export const PATHS = Object.freeze({
  [VIEW.MAIN]: "/main",
  [VIEW.CARD]: "/card/:id",
  [VIEW.ART]: "/art/:id",
  [VIEW.LOGIN]: "/login",
  [VIEW.REDIRECT]: "/",
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
