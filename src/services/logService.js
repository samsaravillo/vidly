import Raven from "raven-js";

function init() {
  //can use looging service like sentry.io
  // reven is a library and need to install
  // Raven.config("ADD YOUR OWN API KEY", {
  //   release: "1-0-0",
  //   environment: "development-test"
  // }).install();
}

function log(error) {
  // Raven.captureException(error);
}

export default {
  init,
  log
};
