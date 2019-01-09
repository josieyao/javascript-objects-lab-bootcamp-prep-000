/*describe('Objects', function() {
  it('defines a `recipes` object', function() {
    expect(typeof recipes).toEqual('object')
  })*/

var recipes = {};

/*  describe('updateObjectWithKeyAndValue(object, key, value)', function() {
    it('returns an object with the orignal key value pairs and the new key value pair', function() {
      var obj = { prop: 1 }

      expect(updateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
      })
    })

    it('it does not modify the original object, but rather returns a clone with the new data', function() {
      var obj = { prop: 1 }

      updateObjectWithKeyAndValue(obj, 'prop2', 2)

      expect(obj['prop2']).toBe(undefined)
    })
  })*/

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
