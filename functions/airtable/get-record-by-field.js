/*

  get-record-by-field.js

  Retrieves a single record using a unique attribute value from a table column. 
  If there are more than one matching record, then the first record is returned!

  Pulls AIRTABLE_API_KEY and AIRTABLE_BASE_ID from context

  Required Paramaters: 
    * event.targetTable
    * event.filterFieldName
    * event.filterFieldValue

*/

const airtable = require("airtable");

exports.handler = function (context, event, callback) {

  // Instantiate airtable object
  const base = new airtable({apiKey: context['AIRTABLE_API_KEY']}).base(context['AIRTABLE_BASE_ID']);

  console.log("event is ==> ", event);

  base(event.targetTable).select({      
      maxRecords: 1,
      filterByFormula: "({" + event.filterFieldName + "} = '" + event.filterFieldValue + "')"
  }).firstPage(function (err, records)
      {
        if(err) {
            console.log(err);
            callback("error retrieving record",null);
        }        
        // Take only the first record returned
        if (records.length > 0) {
          let r = records[0].fields;
          r.id = records[0].id; // ADD Airtable ID
          callback(null, r);
        } else {
          callback(null, "");
        }
      }
  );

  
};
