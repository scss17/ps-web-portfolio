
//=================
//=== VARIABLES ===
//=================

const socialMedia = [
    {'name': 'linkedin', 'url': 'https://www.linkedin.com/in/ps-campos', 'iconClass': 'fab fa-linkedin'},
    {'name': 'github', 'url': 'https://github.com/scss17', 'iconClass': 'fab fa-github'},
    {'name': 'kaggle', 'url': 'https://www.kaggle.com/scss17', 'iconClass': 'fab fa-kaggle'},
    {'name': 'medium', 'url': 'https://pscampos17.medium.com/', 'iconClass': 'fab fa-medium'}, 
    {'name': 'upwork', 'url': 'https://www.upwork.com/freelancers/~014a7e0cab666bf715', 'iconClass': 'fa-brands fa-square-upwork'},
	{'name': 'superprof', 'url': 'https://www.superprof.mx/clases-virtuales-programacion-aprende-html-css-sql-python-enseno-desde-cero-adapto-tus-necesidades.html', 'iconClass': 'fa-solid fa-link'}
];

// HTML elements
const socialMediaContainer = document.querySelector('.social-media-icons');

//=================
//=== FUNCTIONS ===
//=================

const displaySocialMediaButtons = (socialMedia) => {
	// Define base classes for the social media button
	const baseClases = ["btn", "btn-lg", "btn-outline-dark", "me-3", "rounded-circle"];
	
	socialMedia.forEach(element => {
		// Create the anchor alement
		const anchor = document.createElement('a');
		anchor.href = element.url;
		anchor.target = '_blank'; // Opens the linked document in a new window or tab

		// Add classes
		anchor.classList.add(...baseClases, `social-icon-${element.name}`);

		// Create the icon element
		const icon = document.createElement("i");
        const iconClasses = element.iconClass.split(" "); 
        icon.classList.add(...iconClasses);

        // Apend elements
        anchor.appendChild(icon);
        socialMediaContainer.appendChild(anchor);
	});
};


if(socialMediaContainer) {
	displaySocialMediaButtons(socialMedia);
} else {
	console.error("Error: Could not find the container with class '.social-media-icons'");
};