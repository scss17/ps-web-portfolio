
//=================
//=== VARIABLES ===
//=================

const socialMedia = [
    {'name': 'linkedin', 'url': 'https://www.linkedin.com/in/ps-campos', 'iconClass': 'fab fa-linkedin'},
    {'name': 'github', 'url': 'https://github.com/scss17', 'iconClass': 'fab fa-github'},
    {'name': 'kaggle', 'url': 'https://www.kaggle.com/scss17', 'iconClass': 'fab fa-kaggle'},
    {'name': 'medium', 'url': 'https://medium.com/@pscampos/', 'iconClass': 'fab fa-medium'}, 
    {'name': 'upwork', 'url': 'https://www.upwork.com/freelancers/~014a7e0cab666bf715', 'iconClass': 'fa-brands fa-square-upwork'},
	{'name': 'superprof', 'url': 'https://www.superprof.mx/clases-virtuales-programacion-aprende-html-css-sql-python-enseno-desde-cero-adapto-tus-necesidades.html', 'iconClass': 'fa-solid fa-link'}
];

const softSkills = [
	{'title': 'Industrial Engineer and Data Science Enthusiast', 'links' : [{'text':'Check out my Notebooks', 'link':'https://www.kaggle.com/scss17/code'}], 'text': ["I studied Industrial Engineering, where statistics captivated my interest from the start. In those earlier days, data science was a relatively unexplored topic in my country, and my toolkit was modest, primarily comprising Microsoft Excel and Minitab for daily tasks. When the pandemic hit routines, it gave me an opportunity to pause and contemplate my future pursuits.", "During this reflective period, I decided to take charge of my trajectory and start a self-taught journey into data science. Through books, online courses, and various resources, I discovered the potential within the tech field. Soon I realized that programming was an indispensable skill in our increasingly demanding and rapidly evolving professional landscape."]},
	{'title': 'Bookworm and a Casual Writer', 'links' : [{'text': 'Visit my Blog', 'link': 'https://medium.com/@pscampos.ortiz'}], 'text': ["One of my greatest joys in life is reading. From fiction to science books, I find inspiration to explore new perspectives and gain a deeper understanding of life.", "If I remember correctly, I started writing when I was 18 years old. I always considered myself introspective, so writing has helped me better assimilate reality and channel emotions hard to cope with, as well as awaken my creative side.", "I have produced some interesting results, and I even decided to start a blog with my poems and short stories. Unfortunately, I have only written in Spanish so far, but if you are curious, feel free to explore my blog."]},
	{'title': 'Dedicated Volunteer Educator with a Passion for Teaching', 'links' : [], 'text': ["During my time at the university, I volunteered as an educator, teaching a variety of subjects, including computer science, Excel, music, English, and French. This experience proved to be extremely rewarding, bringing a profound sense of purpose to my life. Since then, I have developed a passion for teaching and sharing my knowledge with others.", "I dedicate my spare time to being an online instructor. This not only allows me to pursue my passion for teaching but also serves as a rewarding way to generate a secondary income."]},
	{'title': 'An Amateur Musician and occasional Dancer', 'links' : [{'text': 'Enroll to my Course', 'link':''}], 'text': ['Music has always held a special place in my heart. I have been playing the guitar for about 14 years now. During my high school days, I even had a band with my friends. We were surprisingly good, and we even performed in a local restaurant for a couple of memorable months.', "Interestingly, dancing wasn't initially my forte. Back in the day, I avoided it, believing I lacked the skill and grace. However, curiosity got the better of me, and I enrolled in Latin dance classes. To my surprise, I discovered a newfound passion, and I attended those classes for three consecutive years. Dancing is now an integral part of who I am."]},
]

// HTML elements
const socialMediaContainer = document.querySelector('.social-media-icons');
const accordionSoftSkills = document.getElementById('accordionSoftSkills');

//=================
//=== FUNCTIONS ===
//=================

const displaySocialMediaButtons = (socialMedia) => {
	// Define base classes for the social media button
	const baseClasses = ["btn", "btn-lg", "btn-outline-dark", "me-3", "mb-2", "rounded-circle"];
	
	socialMedia.forEach(element => {
		// Create the anchor element
		const anchor = document.createElement('a');
		anchor.href = element.url;
		anchor.target = '_blank'; // Opens the linked document in a new window or tab

		// Add classes
		anchor.classList.add(...baseClasses, `social-icon-${element.name}`);

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
		
		if(isFirstItem) {
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
			pContent.classList.add('text-start')

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


if(socialMediaContainer) {
	displaySocialMediaButtons(socialMedia);
} else {
	console.error("Error: Could not find the container with class '.social-media-icons'");
};

displayAccordionContent(softSkills);