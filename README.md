# Twilio Functions Library for Airtable CRUD for Studio 

**Dan Bartlett** @dbartlett

---

### Project Overview

I have found myself using Airtable for persistance when building demos -- especially in Studio. After adding different parts of Airtable CRUD for different projects, I created a library that I could re-use. These functions make it easy to add a data layer to your POCs and demos AND use Airtable to show changing data in real time during demos. With these functions you can be accessing Airtable from Twilio in just a few minutes...

***Deployed Functions***

![deployed-functions](https://user-images.githubusercontent.com/78064764/144476245-c9e6bde3-76d5-4246-af77-aa852357558e.png)
<p>&nbsp;</p>

You should be able to just add your Airtable API Key and Base ID to the .env file to get going with a **twilio serverless:deploy**. You can call these functions directly from their deployed URL, from other functions, or from Studio. You can also use these functions as a basis to write your own functions. You could just copy and paste the functions directy into your own serverless project to easily add Airtable CRUD.

The functions are all commented to explain what is going on. Each function receives the "targetTable" parameter which sets the table you are working on for that function execution and then additional parameters depending on the function. This makes it simple from Studio, for example, to configure multiple different calls from your Studio Flow.

I have included details below on how to use these Twilio Functions with Studio "Run Function" Widgets.

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


### CRUD Examples for Studio RUN FUNCTION Widget

**Create -- /airtable/create-record.js**

Creates single record in a table. Field names, field values, and field types are passed in event object as delimited strings (delimeter = |), then split into arrays, parsed, and added to an object that is sent via api call.

![create](https://user-images.githubusercontent.com/78064764/144476281-7de53586-cff4-4c71-a8bf-c2f39b8173a0.png)
<p>&nbsp;</p>

**Read -- /airtable/get-record-by-field.js**

Retrieves a single record using a unique attribute value from a table column. If there are more than one matching record, then the first record is returned!

![read](https://user-images.githubusercontent.com/78064764/144476319-cfbe6123-1cb8-4cbe-aebf-b81770805987.png)
<p>&nbsp;</p>

**Read -- /airtable/get-record-by-id.js**

Retrieves a single record from a table using the airtable record_id. Used in Studio, you would need to first get the airtable record id from another widget or source.  
<p>&nbsp;</p>

**Read -- /airtable/get-records.js**

Retrieves multiple records from a table. Optional to add number of records to return plus, sort field and direction.

![read2](https://user-images.githubusercontent.com/78064764/144476346-df71f637-a167-411f-b9d7-a773b99db6fa.png)
<p>&nbsp;</p>

**Update -- /airtable/update-record.js**

Updates a single record in a table. Field names, field values, and field types of record that is to be updated are passed in event object as delimited strings (delimeter = |), then split into arrays, parsed, and added to an object that is sent via api call.

![update](https://user-images.githubusercontent.com/78064764/144476382-0c96c997-7beb-4839-a5b9-5554daef0f0c.png)
<p>&nbsp;</p>

**Delete -- /airtable/delete-record-by-id.js**

Deletes a single record in a table using the airtable record id.

![delete](https://user-images.githubusercontent.com/78064764/144476409-652bf8cf-1bfe-422e-a425-6e3c28bb3b04.png)

