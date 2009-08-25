exports.testValidatable = require("./validatable/all-tests");

if (require.main == module.id)
    require('test/runner').run(exports);