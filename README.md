[![Build Status](https://travis-ci.org/hc-barker/ESOF423.svg?branch=master)](https://travis-ci.org/hc-barker/ESOF423)
[![Coverage Status](https://coveralls.io/repos/github/hc-barker/ESOF423/badge.svg?branch=master)](https://coveralls.io/github/hc-barker/ESOF423?branch=master)

# ESOF423
Senior Center App

Overall goal of the Senior Center App is to provide an interface for senior centers to capture information about their members. Such as:

~Basic information

~Membership status

~Attendance

~Special diets/medical issues/disabilities

~Home delivered meals vs. center meals

~Activities

~Services

~Emergency contacts

Administrators will be able to manage volunteers, create reports to be accuarate for grant writing, add new members and activities/services, run reports, manage forms and have full access to and ability to edit all areas.

Volunteers can ckech people in for meals and activities, print forms, update basic information. -This postion would have limited access to edit and view specific information about members.

Members can register themselves with the center and add activities/meals.

# Installation
For the zero feature release, all that is needed is to clone the repository to a server with apache and mongodb, then use the provided html pages as the index page of your site. This will be updated as more configuration is required in future sprints. 

sudo apt install mongod

systemctl start mongod.service

npm install

pm2 posthandler.js
