const prepare = require('mocha-prepare');

prepare((done: () => void) => {
  setTimeout(() => {
    console.log('### mocha-prepare ###');
    done()
  }, 1000)
});
