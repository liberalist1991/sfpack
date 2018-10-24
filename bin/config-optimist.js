module.exports = function(optimist) {
	optimist
		.boolean("help").alias("help", "h").alias("help", "?").describe("help")
		.string("config").alias("config", "c").describe("config sfpack.config.js")
		.string("entry").describe("entry")
		.string("dist").describe("dist")
		.string("publicPath").alias("publicPath", "p").describe("publicPath")
		.boolean("watch").describe("watch false")
};