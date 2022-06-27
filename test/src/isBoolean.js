import test from 'ava';
import {isBoolean} from '../../src';
import {isArray, isObject} from '../../src';

const macro = ( t, n, v ) => {
	t.deepEqual( isBoolean( n ), v );
};

macro.title = (title, n, v) => title ?? `isBoolean(${isArray(n) || isObject(n) || typeof n === "string" ? JSON.stringify(n) : n}) === ${v}`;

test(macro,  0, false );
test(macro,  NaN, false );
test(macro,  Infinity, false );
test(macro,  -Infinity, false );

test(macro, 1, false );
test(macro, 2, false );
test(macro, 0.000001, false );
test(macro, 1.2121289e127, false );
test(macro, Math.pow(2, 31) - 1, false );
test(macro, Math.pow(2, 31), false );
test(macro, Math.pow(2, 32), false );
test(macro, Math.pow(2, 32) - 1, false );
test(macro, Math.pow(2, 53) - 1, false );
test(macro, Math.PI, false );
test(macro, Math.E, false );

test(macro, -1, false );
test(macro, -2, false );
test(macro, -0.000001, false );
test(macro, -1.2121289e127, false );
test(macro, -(Math.pow(2, 31) - 1), false );
test(macro, -Math.pow(2, 31), false );
test(macro, -Math.pow(2, 32), false );
test(macro, -(Math.pow(2, 32) - 1), false );
test(macro, -(Math.pow(2, 53) - 1), false );
test(macro, -Math.PI, false );
test(macro, -Math.E, false );


test(macro,  [], false );
test(macro,  [0], false );
test(macro,  [1], false );

test(macro,  true, true );
test(macro,  false, true );

test(macro,  new Date(), false );

test(macro,  Number, false );
test(macro,  Array, false );
test(macro,  Boolean, false );
test(macro,  Date, false );
test(macro,  Function, false );
test(macro,  Object, false );
test(macro,  RegExp, false );
test(macro,  String, false );
test(macro,  function () {}, false );
test(macro,  () => {}, false );

test(macro,  {}, false );
test(macro,  { 0 : 0 }, false );
test(macro,  { 1 : 1 }, false );

test(macro,  /a/, false );

test(macro,  "", false );
test(macro,  "0", false );
test(macro,  "1", false );
test(macro,  "-1", false );
test(macro,  "NaN", false );
test(macro,  "Infinity", false );
test(macro,  "-Infinity", false );
test(macro,  "+Infinity", false );

test(macro,  null, false );

test(macro,  undefined, false );
