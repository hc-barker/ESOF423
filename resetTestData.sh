#! /usr/bin/mongo

// clear all site specific data (except login users)
db.members.drop();
db.activities.drop();
db.reports.drop();

// Insert a test user that uses all user data fields and some test activities for them to be a part of.
db.activities.insertMany([{"name" : "activity1"}, {"name" : "activity2"}, {"name" : "activity3"}]);
db.members.insertOne({"race" : [ "other" ], "activities" : [ "5c9903eb1ef86c1b0575202c" ], "firstname" : "First ", "middlename" : "MIddle", "lastname" : "Last", "birthdate" : ISODate("1900-01-01T00:00:00Z"), "startdate" : ISODate("2019-04-01T06:00:00Z"), "clientID" : 999, "phone" : 5555555555, "mailingaddr" : "PO box 666", "mailingcity" : "Billings", "mailingstate" : "Montana", "mailingzip" : 59101, "physcity" : "Billings", "physstate" : "MT", "physzip" : 59101, "gender" : "female", "income" : 1, "disabled" : true, "veteran" : true});
db.reports.insertMany([{"name" : "All Members"}, {"name" : "Members With No Activities"}]);
