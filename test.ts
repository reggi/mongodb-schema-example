import validate from "./schema.validator";

validate({
  operations: [
    {
      name: 'failPoint',
      object: 'testRunner'
    }
  ]
})
