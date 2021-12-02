/*

  create-record.js

  Creates single record in a table. Field names, field values, and field types are
  passed in event object as delimited strings, then split into arrays, parsed, 
  and added to an object that is sent via api call.

  Pulls AIRTABLE_API_KEY and AIRTABLE_BASE_ID from context

  Required Paramaters: 
    * event.targetTable
    * event.fieldNames
    * event.fieldValues
    * event.fieldTypes

*/

const airtable = require("airtable");

exports.handler = function (context, event, callback) {

  // Instantiate airtable object
  const base = new airtable({apiKey: context['AIRTABLE_API_KEY']}).base(context['AIRTABLE_BASE_ID']);

  console.log("Event is ==> ", event);
  
  // Set the target table
  let targetTable = event.targetTable;
  
  // Create array of parameters by splitting event variables
  let fieldNames = event.fieldNames.split('|');
  let fieldValues = event.fieldValues.split('|');  
  let fieldTypes = event.fieldTypes.split('|');  
  
  // Object to be passed to airable to create the record
  let createObj = {};
  
  // Cycle through fieldNames to set proper data type
  for(let i=0;i<fieldNames.length;i++) {
    
    let v = fieldValues[i];
    
    console.log("Event is ==> ", event);
    console.log("fieldTypes[i] ", fieldTypes[i]);  
    
    if (event.fieldTypes && fieldTypes[i] !== 'string') {
      // Set variable type
      switch(fieldTypes[i]) {
        case ('integer'):
          [createObj[fieldNames[i]]] = [parseInt(v)]; 
          break;
        case ('boolean'):
          [createObj[fieldNames[i]]] = [(v.toLowerCase() === 'true')]; 
          break; 
        case ('float'):
          [createObj[fieldNames[i]]] = [parseFloat(v)]; 
          break;                    
      }
    } else {
      [createObj[fieldNames[i]]] = [v];  
    }
    
  } 
  
  // Make call to airtabe to create record
  base(targetTable).create(createObj, 
    (error, record) => {
    if (error) {
      console.error(error);
      throw error;
    } else {
      console.log("Record is ==> ", record);
      callback(null, record);
      }
  });

}