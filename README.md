# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shivangi0109/lotide`

**Require it:**

`const _ = require('@shivangi0109/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: which return first element in an array
* `tail(array)`: which return every element except the head of an array
* `middle(array)`: which return single middle element when array is odd, and two middle element when array is even
* `countLetters(string)`: which take in a sentence (as a string) and return a count of each of the letters in that sentence
* `countOnly(array, object)`: which take in a collection of items and return counts for a specific subset of those items
* `findKey(object, callback)`: which takes in an object and a callback and return the first key for which the callback returns a truthy value
* `findKeyByValue(object, value)`: which takes in an object and a value and return the first key which contains the given value
* `flatten(array)`: which return flattened array. Note that this implementation handles one level of nesting
* `letterPositions(string)`: which will return all the indices (zero-based positions) in the string where each character is found
* `map(array, callback)`: implement map
* `takeUntil(array, callback)`:  which will keep collecting items from a provided array until the callback provided returns a truthy value
* `without(array1, array2)`: which return array1 elements avoiding array2 elements, if array2 element is same as the array1 element
* `eqArrays(array1, array2)`: which checks for array's equality and return boolean
* `eqObjects(object1, object2)`: which checks for object's equality and return boolean