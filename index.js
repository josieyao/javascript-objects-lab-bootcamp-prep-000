/*describe('Objects', function() {
  it('defines a `recipes` object', function() {
    expect(typeof recipes).toEqual('object')
  })*/

var recipes = {};



var obj= { prop: 1 }
function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

var obj = { prop: 1 }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

var newObj = Object.assign({}, obj);
 function deleteFromObjectByKey(object, key){
   delete newObj[key];
   return newObj;
 }
 
 function destructivelyDeleteFromObjectByKey(object, key){
   delete object[key];
   return object;
 }
