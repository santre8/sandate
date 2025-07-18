import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Carmen Sandate",
	subtitle: "Data Analytics | Optimization | Machine Learning",
	lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		{ name: "Home", url: "/" },
		{ name: "About Me", url: "/about/" },
		{ name: "Work Experience", url: "/experience/" },
		{ name: "Education", url: "/education/" },
		{ name: "Projects", url: "/archive/" },
		//{
		//	name: "Resume",
		//	url: "/Resume_MCST.pdf", // Asegúrate de subirlo a /public/
		//	external: false,
		//},
		//{
		//		name: "GitHub",
		//		url: "https://github.com/saicaca", // O tu GitHub correcto
		//		external: true,
		//	},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/Foto.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Carmen Sandate",
	bio: "Data Analyst | Experienced in Data Analysis, Optimization, and Process Improvement | MSc in Chemical Engineering",
	links: [
		{
			name: "LinkedIn",
			icon: "fa6-brands:linkedin", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://www.linkedin.com/in/carmen-sandate-84b7919a",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/santre8",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:sandatetrejo8@hotmail.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
