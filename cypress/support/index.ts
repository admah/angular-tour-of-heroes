// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// When a command from ./commands is ready to use, import with `import './commands'` syntax
// import './commands';

import "@cypress/code-coverage/support";

/**
 * @hack we have to import `zone.js/dist/zone-testing`.
 * This is due to implicit call to `resetFakeAsyncZone()`
 * in `@angular/core/testing`.
 * Cf. https://github.com/jscutlery/test-utils/issues/2
 */
import "zone.js/dist/zone";
/* @hack fixes "Mocha has already been patched with Zone" error. */
(globalThis as unknown)["Mocha"]["__zone_patch__"] = false;
import "zone.js/dist/zone-testing";
