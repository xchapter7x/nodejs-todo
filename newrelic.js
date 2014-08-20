/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */

 var BoundServicesHelper = require("cloudfoundry-services");
 var newRelic = new BoundServicesHelper("newrelic", new RegExp("universal-.*","g") );
 var newRelicCreds = newRelic.findFirstCredential();

exports.config = {
  /**
   * Array of application names.
   */
  app_name : ['universal-spy-todo'],
  /**
   * Your New Relic license key.
   */
  license_key : newRelicCreds.licenseKey,
  logging : {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level : 'info'
  }
};
