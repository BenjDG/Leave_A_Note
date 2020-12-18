require("dotenv").config();

module.exports = {
	development: {
		username: process.env.LOCAL_DEV_USERNAME,
		password: process.env.LOCAL_DEV_PASSWORD,
		database: process.env.LOCAL_DEV_DATABASE,
		host: "127.0.0.1",
		dialect: "mysql",
	},
	test: {
		username: process.env.LOCAL_TEST_USERNAME,
		password: process.env.LOCAL_TEST_PASSWORD,
		database: process.env.LOCAL_TEST_DATABASE,
		host: "127.0.0.1",
		dialect: "mysql",
	},
	production: {
		use_env_variable: "JAWSDB_URL",
		dialect: "mysql",
	},
};
