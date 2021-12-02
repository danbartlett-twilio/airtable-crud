# Twilio Functions Airtable CRUD for Studio 

**Dan Bartlett** @dbartlett

---

### Project Overview

In my first 6 months at Twilio, I found myself using Airtable for persistance when building demos -- especially in Studio. After adding different parts of Airtable CRUD for different projects, I created a library that I could re-use. These functions make it easy to add a data layer to your demos AND use Airtable to show changing data in real time during demos. With these functions you can be accessing Airtable from Twilio in just a few minutes...

Several SEs have found these functions in my [SMS Demo Platform](https://github.com/danbartlett-twilio/oidp) so I figured that I would pull them out into their own project and add some documentation. 

You should be able to just add your Airtable API Key and Base ID to the .env file to get going with a **twilio serverless:deploy**. You can call these functions directly from their deployed URL, from other functions, or from Studio. You can also use these functions as a basis to write your own functions. You could just copy and paste the functions directy into your own serverless project to easily add Airtable CRUD.

The functions are all commented to explain what is going on. Each function receives the "targetTable" parameter which sets the table you are working on for that function execution and then additional parameters depending on the function. This makes it simple from Studio, for example, to configure multiple different calls from your Studio Flow.

I have included details below on how to use these Twilio Functions from Studio "Run Function" Widgets.

How you find this helpful!
<p>&nbsp;</p>

### Setup Instructions

**Prerequisites**
* Twilio CLI - [CLI Quickstart](https://www.twilio.com/docs/twilio-cli/quickstart)
* Twilio Serverless Plugin - [Install](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started)
<p>&nbsp;</p>

**Initial Setup**

* Clone the repo
* Copy env.sample to .env and add your Airtable API Key and Base ID 
<p>&nbsp;</p>

**Deploy**

Make sure you're in the folder and deploy using ```twilio serverless:deploy```
<p>&nbsp;</p>


### CRUD Examples from Studio RUN FUNCTION Widget

**Create -- /airtable/create-record.js**

Creates single record in a table. Field names, field values, and field types are passed in event object as delimited strings (delimeter = |), then split into arrays, parsed, and added to an object that is sent via api call.

![create-record](https://code.hq.twilio.com/storage/user/4367/files/7e712700-3c14-11ec-986f-dfce1256c069)
<p>&nbsp;</p>

**Read -- /airtable/get-record-by-field.js**

Retrieves a single record using a unique attribute value from a table column. If there are more than one matching record, then the first record is returned!

![get-record-by-field](https://code.hq.twilio.com/storage/user/4367/files/8335db00-3c14-11ec-9288-b370b3f9411e)
<p>&nbsp;</p>

**Read -- /airtable/get-record-by-id.js**

Retrieves a single record from a table using the airtable record_id. Used in Studio, you would need to first get the airtable record id from another widget or source.  
<p>&nbsp;</p>

**Read -- /airtable/get-records.js**

Retrieves multiple records from a table. Optional to add number of records to return plus, sort field and direction.

![get-records](https://code.hq.twilio.com/storage/user/4367/files/8c26ac80-3c14-11ec-8c0f-3d1aaf8c524e)
<p>&nbsp;</p>

**Update -- /airtable/update-record.js**

Updates a single record in a table. Field names, field values, and field types of record that is to be updated are passed in event object as delimited strings (delimeter = |), then split into arrays, parsed, and added to an object that is sent via api call.

![update-record](https://code.hq.twilio.com/storage/user/4367/files/c5f7b300-3c14-11ec-8965-905fe66f8609)
<p>&nbsp;</p>

**Delete -- /airtable/delete-record-by-id.js**

Deletes a single record in a table using the airtable record id.

![delete-record-by-id](https://code.hq.twilio.com/storage/user/4367/files/cc862a80-3c14-11ec-9387-b0baecb57e7d)
