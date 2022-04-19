/*

  get-record-by-id.js

  Retrieves a single record from a table using the airtable record_id.

  Pulls AIRTABLE_API_KEY and AIRTABLE_BASE_ID from context

  Required Paramaters: 
    * event.targetRecordId

*/

const airtable = require("airtable");

exports.handler = function (context, event, callback) {

  // Instantiate airtable object
  const base = new airtable({apiKey: context['AIRTABLE_API_KEY']}).base(context['AIRTABLE_BASE_ID']);
  
  console.log("event is ==> ", event);

  base(event.targetTable).find(event.targetRecordId, function(err, record) {
    if (err) { console.error(err); return; }
    callback(null, record); 
    console.log('Retrieved', record.id);
  });
  
};
