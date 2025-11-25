
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

const toolset = [
	{
		'title': 'Programming Languages',
		'icons': ["fa-solid", "fa-code"],
		'items': [
			{ 'name': 'Python', 'path': "img/logos/programming_languages/python.svg" },
			{ 'name': 'R', 'path': "img/logos/programming_languages/r.svg" },
			{ 'name': 'SQL', 'path': "img/logos/programming_languages/sql.svg" },
			{ 'name': 'C++', 'path': "img/logos/programming_languages/cplusplus.svg" },
			{ 'name': 'C#', 'path': "img/logos/programming_languages/csharp.svg" },
			{ 'name': 'JavaScript', 'path': "img/logos/programming_languages/javascript.svg" },
			{ 'name': 'TypeScript', 'path': "img/logos/programming_languages/typescript.svg" },
		],
	},
	{
		'title': 'Databases',
		'icons': ["fa-solid", "fa-database"],
		'items': [
			{ 'name': 'MySQL', 'path': "img/logos/databases/mysql.svg" },
			{ 'name': 'SQLServer', 'path': "img/logos/databases/sqlserver.svg" },
			{ 'name': 'PostgreSQL', 'path': "img/logos/databases/postgresql.svg" },
			{ 'name': 'Oracle', 'path': "img/logos/databases/oracle.svg" },
			{ 'name': 'MongoDb', 'path': "img/logos/databases/mongodb.svg" },
		],
	},
	{
		'title': 'Web Development',
		'icons': ["fa-solid", "fa-globe"],
		'items': [
			{ 'name': 'HTML5', 'path': "img/logos/web_development/html5.svg" },
			{ 'name': 'CSS3', 'path': "img/logos/web_development/css.svg" },
			{ 'name': 'React', 'path': "img/logos/web_development/react.svg" },
			{ 'name': 'Node.js', 'path': "img/logos/web_development/nodedotjs.svg" },
			{ 'name': 'Bootstrap', 'path': "img/logos/web_development/bootstrap.svg" },
			{ 'name': 'Prisma', 'path': "img/logos/web_development/prisma.svg" },
		],
	},
	{
		'title': 'Data Analysis',
		'icons': ["fa-solid", "fa-chart-bar"],
		'items': [
			{ 'name': 'NumPy', 'path': "img/logos/data_analysis/numpy.svg" },
			{ 'name': 'Pandas', 'path': "img/logos/data_analysis/pandas.svg" },
			{ 'name': 'ScikitLearn', 'path': "img/logos/data_analysis/scikitlearn.svg" },
			{ 'name': 'TensorFlow', 'path': "img/logos/data_analysis/tensorflow.svg" },
			{ 'name': 'Tidyverse', 'path': "img/logos/data_analysis/tidyverse.svg" },
		],
	},
	{
		'title': 'Data Visualization',
		'icons': ["fa-solid", "fa-chart-pie"],
		'items': [
			{ 'name': 'Power BI', 'path': "img/logos/data_visualization/powerbi.svg" },
			{ 'name': 'Tableau', 'path': "img/logos/data_visualization/tableau.svg" },
			{ 'name': 'Plotly', 'path': "img/logos/data_visualization/plotly.svg" },
			//{ 'name': 'Matplotlib', 'path': "img/logos/data_visualization/matplotlib.svg" },
			//{ 'name': 'Seaborn', 'path': "img/logos/data_visualization/seaborn.svg" },
			//{ 'name': 'ggplot2', 'path': "img/logos/data_visualization/ggplot2.svg" },
		],
	},
	{
		'title': 'Other Tools',
		'icons': ["fa-solid", "fa-toolbox"],
		'items': [
			{ 'name': 'Git', 'path': "img/logos/other_tools/git.svg" },
			{ 'name': 'GitHub', 'path': "img/logos/other_tools/github.svg" },
			{ 'name': 'Anaconda', 'path': "img/logos/other_tools/anaconda.svg" },
			{ 'name': 'Jupyter', 'path': "img/logos/other_tools/jupyter.svg" },
			{ 'name': 'Docker', 'path': "img/logos/other_tools/docker.svg" },
			{ 'name': 'LaTex', 'path': "img/logos/other_tools/latex.svg" },
		],
	}
];


// HTML elements
const socialMediaContainers = document.querySelectorAll('.social-media-icons');
const accordionSoftSkills = document.getElementById('accordionSoftSkills');

const educationContainer = document.querySelector('.education-container');
const certificationContainer = document.querySelector('.certification-container');
const projectsContainer = document.querySelector('.projects-container');
const toolContainer = document.querySelector('.tool-container-outer');

//=================
//=== FUNCTIONS ===
//=================

const displayTools = (tools) => {
	tools.forEach(tool => {

		// Create Outer Boostrap Column
		const innerDiv = document.createElement('div');
		innerDiv.classList.add("tool-container-inner", "col-12", "col-md-4", "my-5");

		// Create header container
		const headerDiv = document.createElement('div');
		headerDiv.classList.add("tool-container-header", "text-center", "mb-4");

		// Create elements
		const h4 = document.createElement('h4');
		h4.classList.add("subtitle");
		h4.innerHTML = `
			<span><i class="${tool.icons.join(' ')} me-2"></i></span>
			${tool.title}
			`;

		headerDiv.appendChild(h4);
		innerDiv.appendChild(headerDiv);

		// Create Tool List Container 
		const toolListDiv = document.createElement('div');
		const toolClass = tool.title.toLowerCase().split(" ").join('-');
		toolListDiv.classList.add("tools", toolClass);

		const listDiv = document.createElement('div');
		listDiv.classList.add("d-flex", "flex-wrap", "gap-4", "justify-content-center");

		// Get the logos
		tool.items.forEach(logo => {
			const logoWrapper = document.createElement('a');
			logoWrapper.classList.add('tool-logo-wrapper');

			logoWrapper.setAttribute('data-bs-toggle', 'tooltip');
			logoWrapper.setAttribute('title', logo.name);

			const logoImg = document.createElement('img');
			logoImg.src = logo.path;
			logoImg.alt = `${logo.name} Logo`;
			logoImg.classList.add('tool-logo-image', 'img-fluid');

			// Append the image to the wrapper
			logoWrapper.appendChild(logoImg);

			// Append the wrapper to the list container
			listDiv.appendChild(logoWrapper);
		});

		// Assemble the list
		toolListDiv.appendChild(listDiv);
		innerDiv.appendChild(toolListDiv);

		// Append the entire category column to the outer container
		toolContainer.appendChild(innerDiv);
	});
};

displayTools(toolset);

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

//! Bootstrap Tooltip is not longer used
//const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
//const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', (e) => {
	const form = document.getElementById('contact-form');
	const formURL = "https://formspree.io/f/xdkvgrvy";

	// Get the Bootstrap Modal instance
	const successModal = new bootstrap.Modal(document.getElementById('successModal'));
	const failModal = new bootstrap.Modal(document.getElementById('failModal'));

	if (form) {
		form.addEventListener('submit', async (submitEvent) => {

			// Validation check
			if (!form.checkValidity()) {
				submitEvent.preventDefault();
				submitEvent.stopPropagation();

				// Apply the validation styles
				form.classList.add('was-validated');
				return;
			}

			// Prevent the default browser submission
			submitEvent.preventDefault();

			// Apply validation styles
			form.classList.add('was-validated');

			// Disable button during submission to prevent double-clicks
			const submitButton = form.querySelector('button[type="submit"]');
			submitButton.disabled = true;

			// Create a form object 
			const formData = new FormData(form);

			try {
				// Send the request to Formspree
				const response = await fetch(formURL, {
					method: 'POST',
					body: formData,
					headers: {
						'Accept': 'application/json'
					}
				});

				if (response.ok) {
					// Show modal
					successModal.show();

					// Clear the form
					form.reset();
					form.classList.remove('was-validated');
				} else {
					failModal.show();
					console.error('Form submission failed:', await response.json());
				}
			} catch {
				// Handle network errors
				failModal.show();
				console.error('Network error:', error);
			} finally {
				submitButton.disabled = false;
			}
		});
	};
});