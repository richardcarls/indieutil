## Notice: Development Abandoned

# indieutil
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)[![license](https://img.shields.io/npm/l/rollup.svg)(https://github.com/richardcarls/indieutil/blob/master/LICENSE)]

#### Universal JavaScript utility library for the IndieWeb.

This module doesn't exist yet! The primary use of the module will be it's `fetch()`
method; parsing a URL for structured data, preferring Microformats2, and returning
the data in a friendly format with optional transformation steps.

Ideally, the parsing would be able to make use of other structured data schemas when
Microformats2 is not present, such as jsonld, schema.org, or OpenGraph properties. I
would also like to see both Microformats2 and "JF2" return formats supported, as well
as the different types like entry, cite, event, recipe, etc.
