#! /usr/bin/mongo

// Clear all user accounts
db.users.drop();

// Insert fallback user "admin" with password "password"
db.users.insertOne({"groups" : [ ], "username" : "admin", "password" : "$2b$10$Uof6fmUQ56gwCaxjoaSqhOCAsICQuRcIY3q5Q2n7iuMfXOf.zjRWG"});
