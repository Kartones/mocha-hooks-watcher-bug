## STR

1. Run

```bash
./node_modules/mocha/bin/mocha.js --watch
```

On first run, all tests will pass:

```bash
  Failing on watch reload
mochaHooks beforeEach(): [ 'testItem1', 'testItem2' ]
    ✔ should return two items

  Always working
mochaHooks beforeEach(): [ 'testItem1', 'testItem2' ]
    ✔ should return two items


  2 passing (2ms)
```

2. Edit any test file, for example adding a new line, and save.

## Expected

Both tests still pass when watch mode reloads and re-runs.

## Actual

Although `mochaHooks`' `beforeEach()` is called and initializes module variable `a`, when the test runs after a watch reload, `a` looks as if empty (cached maybe?) and contains no "initialized items".

```bash
  Failing on watch reload
mochaHooks beforeEach(): [ 'testItem1', 'testItem2' ]
    1) should return two items

  Always working
mochaHooks beforeEach(): [ 'testItem1', 'testItem2' ]
    ✔ should return two items


  1 passing (13ms)
  1 failing

  1) Failing on watch reload
       should return two items:

      AssertionError [ERR_ASSERTION]: Expected values to be loosely deep-equal:

[]

should loosely deep-equal

[
  'testItem1',
  'testItem2'
]
      + expected - actual

      -[]
      +[
      +  "testItem1"
      +  "testItem2"
      +]

      at Context.<anonymous> (test/failing.test.js:8:12)
      at process.processImmediate (node:internal/timers:478:21)



ℹ [mocha] waiting for changes...

```
