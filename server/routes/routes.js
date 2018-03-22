const apiRoutes = require("./apis/route");
const authRoutes = require("./authentication/route");

const initilize  = (server) => {
		server.use("/api/*",mwLogger);
		server.use("/api", apiRoutes);
		server.use("/auth",authRoutes);
};

module.exports = {
		init = initilize
}
