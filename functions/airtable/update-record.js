/*

  update-record.js

  Updates a single record in a table. Field names, field values, and field types 
  of record that is to be updated are passed in event object as delimited strings, 
  then split into arrays, parsed, and added to an object that is sent via api call.
  
  Fields names, field values, fie to update are passed
  in

  Pulls AIRTABLE_API_KEY and AIRTABLE_BASE_ID from context

  Required Paramaters: 
    * event.targetTable
    * event.record_id  
    * event.fieldNames
    * event.fieldValues
    * event.fieldTypes

*/

const airtable = require("airtable");

exports.handler = function (context, event, callback) {

  // Instantiate airtable object
  const base = new airtable({apiKey: context['AIRTABLE_API_KEY']}).base(context['AIRTABLE_BASE_ID']);
  
  console.log("Event is ==> ", event);
  
  let targetTable = event.targetTable;

  // This is the airtable record id!
  let record_id = event.record_id;

  let fieldNames = event.fieldNames.split('|');
  let fieldValues = event.fieldValues.split('|');  
  let fieldTypes = event.fieldTypes.split('|');    
  
  let updateObj = {};

  // Cycle through fieldNames to set proper data type
  for(let i=0;i<fieldNames.length;i++) {
    
    let v = fieldValues[i];
    
    // console.log("Event is ==> ", event);
    // console.log("fieldTypes[i] ", fieldTypes[i]);     

    if (event.fieldTypes && fieldTypes[i] !== 'string') {
      switch(fieldTypes[i]) {
        case ('integer'):
          [updateObj[fieldNames[i]]] = [parseInt(v)]; 
          break;
        case ('boolean'):
          [updateObj[fieldNames[i]]] = [(v.toLowerCase() === 'true')]; 
          break;
        case ('float'):
          [createObj[fieldNames[i]]] = [parseFloat(v)]; 
          break;                              
        }
    } else {
      [updateObj[fieldNames[i]]] = [v];  
    }

  } 
   
  // console.log("updateObj is ==> ", updateObj);   
   
  // Make call to airtabe to update the record
  base(targetTable).update(
    record_id,
    updateObj,
    (error, record_id) => {
      if (error) {
        console.error(error, record_id);
        throw error;
      } else {
        callback(null, "Success!");
        }
  });

}