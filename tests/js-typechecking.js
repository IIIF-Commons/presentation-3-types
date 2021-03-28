/**
 * @typedef { import("../index.d").Manifest } Manifest
 */

/**
 * @type {Manifest}
 */
const manifest = {};


/**
 * @param manifest {Manifest}
 */
function doSomethingWithManifest(manifest) {
  console.log(manifest.label);
}

/**
 * @type {import("../index.d").Manifest}
 */
const manifest2 = {};
