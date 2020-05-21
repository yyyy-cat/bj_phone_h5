// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
	"plugins": {
		"postcss-import": {},
		"postcss-url": {},
		// to edit target browsers: use "browserslist" field in package.json
		"autoprefixer": {},
		"postcss-pxtorem": {
			rootValue: 192,
			propList: [
				"width",
				"max-width",
				"min-width",
				"height",
				"max-height",
				"min-height",
				"padding",
				"padding-left",
				"padding-right",
				"padding-top",
				"padding-bottom",
				"margin",
				"margin-right",
				"margin-left",
				"margin-top",
				"margin-bottom",
				"box-shadow",
				"line-height",
				"letter-spacing",
				"left",
				"right",
				"top",
				"bottom",
				"border-radius"
			],
			minPixelValue: 1,
			mediaQuery: true
		}
	}
};
