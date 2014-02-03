Enhanced Java Script
=======
EJS enhances JS with new possibilities.

Loop `for ... from ...`
-----------------------

This version of `for` loop works the same as `for ... in` loop but does not iterate over inherited properties.

Example:

	var a = {property: 'value'};
	for (var i from a) console.log(i);
	// Logs `'value'` even if `Object` prototype has properties added by some framework or library.
	
	var a = ['value'];
	for (var i from a) console.log(i);
	// Logs `'value'` even if `Array` prototype has properties added.

Bonuses: 
If you have used `hasOwnProperty` in every `for ... in` loop, now you do not have to check it.
If you have used special function (ie. angular `forEach` or jQuery `each`) to perform iteration, 
now you can use simple loop instruction. And you can use `break` and `continue` again.
If you have used `for (var i = 0; i < a.length; i++)` to iterate over array, you can now just use `for (var i from a)`.


Instalation
===========

TODO

1. Install node
2. Install sweet.js
3. Install ejs
4. Install grunt plugin.
