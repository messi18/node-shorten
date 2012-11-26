##Introduction

A url shorten web site powered by node.js and express.js. A online demo is at [fnil.me](http://fnil.me).

##Setup

First,i am using mysql(data storage) and redis(cache),so you have to configure mysql/redis in `config.js`:

     exports.config = {
      	mysqlHost:"localhost",
    	mysqlUser:"root",
    	mysqlPassword:"",
    	mysqlDB:"shorten",
		
    	redisHost:'localhost',
	    redisPort:6379,

	    site:'http://localhost:3000',
    	linkMinLength:10,
    	linkBits:6
    }
	
Including user,password,database,redis host/port etc.Create the table using `sql/st_links.sql` before startup:

     msyql> source st_links.sql;
	 
Second,you must install [node.js](http://nodejs.org), then install node modules by:

	 sudo npm install -d

At last,startup the http server:

	 sh start.sh

The site is online `http://localhost:3000`.

##Chrome extension

You can install the chrome extension at folder `extensions/chrome`, it will use fnil.me's API to short URL in current chrome tab address bar.


