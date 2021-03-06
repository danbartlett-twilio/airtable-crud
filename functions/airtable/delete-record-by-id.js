/*

  delete-record-by-id.js

  Deletes a single record in a table.
  
  Pulls AIRTABLE_API_KEY and AIRTABLE_BASE_ID from context

  Required Paramaters: 
    * event.targetRecordId

*/

const airtable = require("airtable");

exports.handler = function (context, event, callback) {

  // Instantiate airtable object
  const base = new airtable({apiKey: context['AIRTABLE_API_KEY']}).base(context['AIRTABLE_BASE_ID']);
  
  console.log("event is ==> ", event);

  // Pass table and record id to delete
  base(event.targetTable).destroy(event.targetRecordId, function(err, deletedRecord) {
    if (err) { console.error(err); return; }
    callback(null, deletedRecord); 
    console.log('Deleted record', deletedRecord.id);
  });
  
};
