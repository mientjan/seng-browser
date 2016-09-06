// require all test files
var testsContext = require.context('./', true, /Spec\.ts/);
testsContext.keys().forEach(testsContext);
// require all source files
var sourcesContext = require.context('../src/', true, /\.ts$/);
sourcesContext.keys().forEach(sourcesContext);
