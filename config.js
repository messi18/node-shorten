exports.config = {
	mysqlHost:"localhost",
	mysqlUser:"root",
	mysqlPassword:"",
	mysqlDB:"shorten",

	redisHost:'localhost',
	redisPort:6379,

	site:'http://localhost:3000',
	port:3000,
	linkMinLength:18,
	linkBits:6,
	topN:10
}