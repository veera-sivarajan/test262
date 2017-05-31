// This file was procedurally generated from the following sources:
// - src/dstr-assignment-for-await/obj-id-init-fn-name-gen.case
// - src/dstr-assignment-for-await/default/async-func-decl.template
/*---
description: Assignment of function `name` attribute (GeneratorExpression) (for-await-of statement in an async function declaration)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [generators, destructuring-binding, async-iteration]
flags: [generated, async]
includes: [propertyHelper.js]
info: |
    IterationStatement :
      for await ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    5. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]

    AssignmentProperty : IdentifierReference Initializeropt
    [...] 6. If Initializeropt is present and v is undefined, then
       [...]
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          i. Let hasNameProperty be HasOwnProperty(v, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(v, P).

---*/
let xGen, gen;

let iterCount = 0;
async function fn() {
  for await ({ xGen = function* x() {}, gen = function*() {} } of [{}]) {
    assert.notSameValue(xGen.name, 'xGen');

    assert.sameValue(gen.name, 'gen');
    verifyNotEnumerable(gen, 'name');
    verifyNotWritable(gen, 'name');
    verifyConfigurable(gen, 'name');


    iterCount += 1;
  }
}

let promise = fn();

promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);
