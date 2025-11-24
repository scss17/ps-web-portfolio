
//=================
//=== VARIABLES ===
//=================

const socialMedia = [
	{ 'name': 'Linkedin', 'url': 'https://www.linkedin.com/in/ps-campos', 'iconClass': 'fab fa-linkedin' },
	{ 'name': 'Github', 'url': 'https://github.com/scss17', 'iconClass': 'fab fa-github' },
	{ 'name': 'Kaggle', 'url': 'https://www.kaggle.com/scss17', 'iconClass': 'fab fa-kaggle' },
	{ 'name': 'Medium', 'url': 'https://medium.com/@pscampos/', 'iconClass': 'fab fa-medium' },
	{ 'name': 'Upwork', 'url': 'https://www.upwork.com/freelancers/~014a7e0cab666bf715', 'iconClass': 'fa-brands fa-square-upwork' },
	{ 'name': 'Superprof', 'url': 'https://www.superprof.mx/clases-virtuales-programacion-aprende-html-css-sql-python-enseno-desde-cero-adapto-tus-necesidades.html', 'iconClass': 'fa-solid fa-link' }
];

const softSkills = [
	{ 'title': 'Industrial Engineer and Data Science Enthusiast', 'links': [{ 'text': 'Check out my Notebooks', 'link': 'https://www.kaggle.com/scss17/code' }], 'text': ["I studied Industrial Engineering, where statistics captivated my interest from the start. In those earlier days, data science was a relatively unexplored topic in my country, and my toolkit was modest, primarily comprising Microsoft Excel and Minitab for daily tasks. When the pandemic hit routines, it gave me an opportunity to pause and contemplate my future pursuits.", "During this reflective period, I decided to take charge of my trajectory and start a self-taught journey into data science. Through books, online courses, and various resources, I discovered the potential within the tech field. Soon I realized that programming was an indispensable skill in our increasingly demanding and rapidly evolving professional landscape."] },
	{ 'title': 'Bookworm and a Casual Writer', 'links': [{ 'text': 'Visit my Blog', 'link': 'https://medium.com/@pscampos.ortiz' }], 'text': ["One of my greatest joys in life is reading. From fiction to science books, I find inspiration to explore new perspectives and gain a deeper understanding of life.", "If I remember correctly, I started writing when I was 18 years old. I always considered myself introspective, so writing has helped me better assimilate reality and channel emotions hard to cope with, as well as awaken my creative side.", "I have produced some interesting results, and I even decided to start a blog with my poems and short stories. Unfortunately, I have only written in Spanish so far, but if you are curious, feel free to explore my blog."] },
	{ 'title': 'Dedicated Volunteer Educator with a Passion for Teaching', 'links': [], 'text': ["During my time at the university, I volunteered as an educator, teaching a variety of subjects, including computer science, Excel, music, English, and French. This experience proved to be extremely rewarding, bringing a profound sense of purpose to my life. Since then, I have developed a passion for teaching and sharing my knowledge with others.", "I dedicate my spare time to being an online instructor. This not only allows me to pursue my passion for teaching but also serves as a rewarding way to generate a secondary income."] },
	{ 'title': 'An Amateur Musician and occasional Dancer', 'links': [{ 'text': 'Enroll to my Course', 'link': '' }], 'text': ['Music has always held a special place in my heart. I have been playing the guitar for about 14 years now. During my high school days, I even had a band with my friends. We were surprisingly good, and we even performed in a local restaurant for a couple of memorable months.', "Interestingly, dancing wasn't initially my forte. Back in the day, I avoided it, believing I lacked the skill and grace. However, curiosity got the better of me, and I enrolled in Latin dance classes. To my surprise, I discovered a newfound passion, and I attended those classes for three consecutive years. Dancing is now an integral part of who I am."] },
];

const education = [
	{
		'title': 'Education',
		'icons': ['fa-solid', 'fa-school'],
		'items': [
			{
				'program': 'Information and Computer Systems Diploma (ICS)',
				'dates': 'September 2023 – August 2025',
				'location': 'Camosun College – Victoria, BC',
				'link': 'https://camosun.ca/programs-courses/find-program/information-and-computer-systems-technologist-diploma',
			},
			{
				'program': 'B.S. in Industrial Engineering with minor in Systems Engineering',
				'dates': 'January 2014 – May 2019',
				'location': 'Tecnológico de Monterrey – Chihuahua, Mexico',
				'link': 'https://tec.mx/en/innovation-and-transformation/bs-in-industrial-engineering'
			}
		]
	}
];

const certifications = [
	{
		'title': 'Certifications',
		'icons': ['fa-solid', 'fa-certificate'],
		'items': [
			{
				'title': 'Data Science Professional Certificate (V2)',
				'issuer': 'IBM via Coursera',
				'dates': 'May 2023',
				'description': 'Proficiency in data science, including data analysis, Python, and machine learning.',
				'links': [
					{ 'text': 'Certificate Overview', 'link': 'https://www.coursera.org/professional-certificates/ibm-data-science' },
					{ 'text': 'View Credential', 'link': 'https://www.coursera.org/account/accomplishments/professional-cert/SHEG54YL25F2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof' },
				],
			},
			{
				'title': 'Google Data Analytics',
				'issuer': 'Google via Coursera',
				'dates': 'Mar 2023',
				'description': 'Google Data Analytics Certificate holders complete eight hands-on courses, preparing for entry-level roles. Proficient in tools like spreadsheets, SQL, Tableau, and R, they excel in data preparation, analysis, and sharing for informed decision-making.',
				'links': [
					{ 'text': 'Certificate Overview', 'link': 'https://www.coursera.org/professional-certificates/google-data-analytics' },
					{ 'text': 'View Credential', 'link': 'https://www.coursera.org/account/accomplishments/professional-cert/6JWQ2ATHZ8CN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof' },
				],
			},
			{
				'title': 'Data Analysis with R',
				'issuer': 'Duke University via Coursera',
				'dates': 'Feb 2023',
				'description': 'In this program, students become skilled in using R for data analysis and crafting reproducible reports. They understand statistical inference informed decision-making.',
				'links': [
					{ 'text': 'Certificate Overview', 'link': 'https://www.coursera.org/specializations/statistics' },
					{ 'text': 'View Credential', 'link': 'https://www.coursera.org/account/accomplishments/specialization/2BUVF53KYE8V?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n' },
				],
			},
		]
	}
];

const projects = [
	{
		'title': 'Web Design',
		'description': "Created a webpage showcasing a visual art student's watercolor paintings for sale",
		'img': 'img/project-paintingalone.jpg',
		'link': 'https://github.com/scss17/Paintingalone-Web-Page'
	},
	{
		'title': 'SQL',
		'description': "Analyze Sakila DVD Rental database with SQL, utilize database management systems, and present insights through visualizations",
		'img': 'img/project-dvd-rentals.jpg',
		'link': 'https://github.com/scss17/Sakila-DVD-Rental-Data'
	},
	{
		'title': 'Data Science',
		'description': "Analyzed Motivate's bike-share data to unveil usage patterns in major U.S. cities—Chicago, NYC, and Washington, DC.",
		'img': 'img/project-motivate-bike-share.jpg',
		'link': 'https://www.kaggle.com/code/scss17/motivate-bike-share-data'
	},
	{
		'title': 'Data Science',
		'description': "Analyzed smart device usage for Bellabeat, extracting insights to inform marketing strategy and enhance customer experience",
		'img': 'img/project-fitness-tracker.jpg',
		'link': 'https://www.kaggle.com/code/scss17/fitbit-fitness-tracker-data'
	},
];

// HTML elements
const socialMediaContainers = document.querySelectorAll('.social-media-icons');
const accordionSoftSkills = document.getElementById('accordionSoftSkills');

const educationContainer = document.querySelector('.education-container');
const certificationContainer = document.querySelector('.certification-container');
const projectsContainer = document.querySelector('.projects-container');

//=================
//=== FUNCTIONS ===
//=================

const displayProjects = (projects) => {
	projects.forEach(project => {

		// Outer Bootstrap column
		const outerContainer = document.createElement('div');
		outerContainer.classList.add("col-12", "col-md-6", "col-lg-3", "mb-5");

		// Flip card structure
		const cardContainer = document.createElement('div');
		cardContainer.classList.add("flip-card");

		const cardInner = document.createElement('div');
		cardInner.classList.add("flip-card-inner");

		// Front of the card
		const front = document.createElement('div');
		front.classList.add("flip-card-front");

		const img = document.createElement('img');
		img.src = project.img;
		img.alt = `Project: ${project.title}`;
		img.classList.add('img-fluid');

		front.appendChild(img);

		// Back of the card
		const back = document.createElement('div');
		back.classList.add("flip-card-back");   // ← FIXED CLASS

		const h4 = document.createElement('h4');
		h4.classList.add('fw-bolder');
		h4.textContent = project.title;

		const p = document.createElement('p');
		p.textContent = project.description;

		const a = document.createElement('a');
		a.href = project.link;

		const i = document.createElement('i');
		i.classList.add("bi", "bi-link");
		a.appendChild(i);

		back.appendChild(h4);
		back.appendChild(p);
		back.appendChild(a);

		// Assemble card
		cardInner.appendChild(front);
		cardInner.appendChild(back);

		cardContainer.appendChild(cardInner);
		outerContainer.appendChild(cardContainer);

		projectsContainer.appendChild(outerContainer);
	});
};

const renderCategory = (container, category, buildCardBody) => {
	// Create Title
	const h3 = document.createElement('h3');
	h3.classList.add('mb-3', 'ms-4');

	const iconSpan = document.createElement('span');
	const icon = document.createElement('i');
	icon.classList.add(...category.icons);

	iconSpan.appendChild(icon);
	h3.appendChild(iconSpan);
	h3.append(` ${category.title}`);

	container.appendChild(h3);

	// Render each item
	category.items.forEach(item => {
		const cardDiv = document.createElement('div');
		cardDiv.classList.add('card', 'rounded-5', 'mb-4');

		const cardBody = buildCardBody(item);
		cardDiv.appendChild(cardBody);

		container.appendChild(cardDiv);
	});
};

const buildEducationCard = (institution) => {
	const body = document.createElement('div');
	body.classList.add('card-body');

	const title = document.createElement('h5');
	title.classList.add('card-title', 'fw-bold');
	title.textContent = institution.program;

	const details = document.createElement('div');
	details.classList.add('ps-2', 'mt-2');

	const dates = document.createElement('h6');
	dates.classList.add('card-subtitle', 'mb-2', 'text-body-secondary');

	const datesIcon = document.createElement('i');
	datesIcon.classList.add('fa-regular', 'fa-calendar');

	dates.appendChild(datesIcon);
	dates.append(` ${institution.dates}`);

	const location = document.createElement('p');
	location.textContent = institution.location;

	const link = document.createElement('a');
	link.href = institution.link;
	link.classList.add('card-link');
	link.textContent = 'Program Overview';
	link.target = '_blank';

	details.append(dates, location, link);

	body.append(title, details);
	return body;
};

const buildCertificationCard = (cert) => {
	const body = document.createElement('div');
	body.classList.add('card-body');

	const title = document.createElement('h5');
	title.classList.add('card-title', 'fw-bold');
	title.textContent = cert.title;

	const details = document.createElement('div');
	details.classList.add('ps-2', 'mt-2');

	const dates = document.createElement('h6');
	dates.classList.add('card-subtitle', 'mb-2', 'text-body-secondary');

	const datesIcon = document.createElement('i');
	datesIcon.classList.add('fa-regular', 'fa-calendar');

	dates.appendChild(datesIcon);
	dates.append(` ${cert.dates}`);

	const desc = document.createElement('p');
	desc.textContent = cert.description;

	details.append(dates, desc);

	cert.links.forEach(l => {
		const a = document.createElement('a');
		a.href = l.link;
		a.target = '_blank';
		a.classList.add('card-link');
		a.textContent = l.text;
		details.append(a);
	});

	body.append(title, details);
	return body;
};

const displaySocialMediaButtons = (socialMedia, socialMediaContainer) => {
	// Define base classes for the social media button
	const baseClasses = ["btn", "btn-lg", "btn-outline-dark", "me-3", "mb-2", "rounded-circle"];

	socialMedia.forEach(element => {
		// Create the anchor element
		const anchor = document.createElement('a');
		anchor.href = element.url;
		anchor.target = '_blank'; // Opens the linked document in a new window or tab

		// Add classes
		anchor.classList.add(...baseClasses, `social-icon-${element.name.toLowerCase()}`);
		//! This might be removed later
		//anchor.setAttribute('data-bs-toggle', 'tooltip');
		//anchor.setAttribute('data-bs-title', element.name)

		// Create the icon element
		const icon = document.createElement("i");
		const iconClasses = element.iconClass.split(" ");
		icon.classList.add(...iconClasses);

		// Append elements
		anchor.appendChild(icon);
		socialMediaContainer.appendChild(anchor);
	});
};

const displayAccordionContent = (softSkills) => {
	// Iterate through the array and create components
	softSkills.forEach((element, index) => {
		// Create dynamic ids
		const targetId = `collapse-${index}`;

		// Set the first item to 'show' as default 
		const isFirstItem = index === 0;

		// Create accordion item
		const accItem = document.createElement('div');
		accItem.classList.add('accordion-item');

		// Create accordion header
		const accHeader = document.createElement('h2');
		accHeader.classList.add('accordion-header')

		// Create accordion button
		const accButton = document.createElement('button');
		accButton.classList.add('accordion-button');

		if (!isFirstItem) {
			accButton.classList.add('collapsed');
		}

		// Set key attributes fot the accordion
		accButton.setAttribute('type', 'button');
		accButton.setAttribute('data-bs-toggle', 'collapse');
		accButton.setAttribute('data-bs-target', `#${targetId}`);
		accButton.setAttribute('aria-expanded', isFirstItem ? 'true' : 'false');
		accButton.setAttribute('aria-controls', targetId);

		// Add the content title
		accButton.textContent = element?.title;

		// Create a collapse content container
		const accCollapseDiv = document.createElement('div');
		accCollapseDiv.setAttribute('id', targetId);
		accCollapseDiv.classList.add('accordion-collapse', 'collapse');
		accCollapseDiv.setAttribute('data-bs-parent', '#accordionSoftSkills');

		if (isFirstItem) {
			accCollapseDiv.classList.add('show');
		}

		// Create a body content
		const accBody = document.createElement('div');
		accBody.classList.add('accordion-body');

		// Add the content text
		element.text.forEach(p => {
			// Create p element and attributes
			const pContent = document.createElement('p');
			pContent.textContent = p;
			pContent.classList.add('text-start');

			// Append text element to the container
			accBody.appendChild(pContent);
		});

		// Add links if exists
		element.links.forEach(link => {
			// Create anchor element and attributes
			const aContent = document.createElement('a');
			aContent.href = link.link;
			aContent.textContent = link.text;
			aContent.classList.add('text-center', 'd-block');

			// Append anchor element to the container
			accBody.appendChild(aContent);
		});

		// Append the elements in order
		accCollapseDiv.appendChild(accBody);
		accHeader.appendChild(accButton);
		accItem.appendChild(accHeader);
		accItem.appendChild(accCollapseDiv);

		// Append everything to the main container
		accordionSoftSkills.appendChild(accItem);
	});
};


if (socialMediaContainers) {
	socialMediaContainers.forEach(container => {
		displaySocialMediaButtons(socialMedia, container);
	})
	//displaySocialMediaButtons(socialMedia);
} else {
	console.error("Error: Could not find the container with class '.social-media-icons'");
};

displayAccordionContent(softSkills);
education.forEach(category =>
	renderCategory(educationContainer, category, buildEducationCard)
);

certifications.forEach(category =>
	renderCategory(certificationContainer, category, buildCertificationCard)
);

displayProjects(projects);

//const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
//const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))