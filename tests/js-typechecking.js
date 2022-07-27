/**
 * @typedef { import("../dist/presentation-3").Manifest } Manifest
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
 * @type {import("../dist/presentation-3").Manifest}
 */
const manifest2 = {};
