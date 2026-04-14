import { slugify } from "../lib/slug";

const service_data = [
	{
		title: "Customer support",
		icon: "/assets/images/v3/icon1.png",
		description: "Clients engagement platform that offers tools for ticketing.",
		link: `/service/${slugify("Customer support")}`,
	},
	{
		title: "Project management",
		icon: "/assets/images/v3/icon2.png",
		description:
			"A project and task management tool that helps plan, organize.",
		link: `/service/${slugify("Project management")}`,
	},
	{
		title: "Email marketing",
		icon: "/assets/images/v3/icon3.png",
		description: "A widely used email marketing platform with some features.",
		link: `/service/${slugify("Email marketing")}`,
	},
	{
		title: "Human resources",
		icon: "/assets/images/v3/icon4.png",
		description: "An all-in-one HR, payroll, and benefits platform designed.",
		link: `/service/${slugify("Human resources")}`,
	},
	{
		title: "Accounting and finance",
		icon: "/assets/images/v3/icon5.png",
		description:
			"Accounting software that helps with invoicing financial report.",
		link: `/service/${slugify("Accounting and finance")}`,
	},
	{
		title: "Cyber Security",
		icon: "/assets/images/v3/icon6.png",
		description: "Security platform that provide protection from cyber threat.",
		link: `/service/${slugify("Cyber Security")}`,
	},
	{
		title: "Security features",
		icon: "/assets/images/v3/icon7.png",
		description: "Security is a crucial aspect of our app security measures.",
		link: `/service/${slugify("Security features")}`,
	},
	{
		title: "Integration support",
		icon: "/assets/images/v3/icon8.png",
		description: "Ability to connect with other financial tools of accounting.",
		link: `/service/${slugify("Integration support")}`,
	},
	{
		title: "Currency conversion",
		icon: "/assets/images/v3/icon9.png",
		description: "Our finance app also offers all currency conversion tools.",
		link: `/service/${slugify("Currency conversion")}`,
	},
];

export default service_data