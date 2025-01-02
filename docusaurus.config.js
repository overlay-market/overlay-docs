module.exports = {
	title: "Overlay",
	tagline: "Trade data streams",
	url: "https://docs.overlay.market",
	baseUrl: "/",
	favicon: "img/OVL-favicon.ico",
	organizationName: "overlay", // Usually your GitHub org/user name.
	projectName: "overlay-docs", // Usually your repo name.
	themeConfig: {
	  prism: {
		additionalLanguages: ["ejs"],
		theme: require("prism-react-renderer/themes/vsDark")
	  },
	  navbar: {
		title: "Overlay",
		logo: {
		  alt: 'Overlay logo',
		  src: 'img/logo.png',
		  srcDark: 'img/logo-white.png'
		},
			items: [
				// {
				// 	type: "localeDropdown",
				// 	position: "right",
				// },
				{
					href: "https://github.com/overlay-market",
					label: "GitHub",
					position: "right",
				},
				{
					href: "https://twitter.com/OverlayProtocol",
					label: "Twitter",
					position: "right",
				},
			],
		},
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en", "zh-CN"],
		localeConfigs: {
			en: {
				htmlLang: "en-GB",
			},
			// 'zh-CN': {
			// 	htmlLang: "zh-CN",
			// }
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					routeBasePath: "/", // Serve the docs at the site's root
					/* other docs plugin options */
				},
				blog: false, // Optional: disable the blog plugin
				// ...
			},
		],
	],
};
