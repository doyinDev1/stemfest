const prod = {
	url: {
		API_URL: `https://stemfest.9ijakids.com/stemfest-backend02/public/api`,
	},
};

// added cors proxy for dev environment
const dev = {
	url: {
		API_URL:
			'https://afternoon-ridge-35420.herokuapp.com/https://stemfest.9ijakids.com/stemfest-backend02/public/api',
	},
};

export const Config = process.env.NODE_ENV === 'development' ? dev : prod;
