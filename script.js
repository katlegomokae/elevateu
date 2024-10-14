function generateResume() {
    // Get input values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value.split(',');
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    // AI-like suggestions (simple logic)
    const skillSuggestions = generateSkillSuggestions(jobTitle);
    const experienceSuggestions = generateExperienceSuggestions(jobTitle);

    // Create the resume layout
    let resume = `
        <div class="resume-section">
            <h2>${name}</h2>
            <p>${email} | ${phone}</p>
        </div>

        <div class="resume-section">
            <h2>Professional Summary</h2>
            <p>${summary || 'Enthusiastic and detail-oriented professional seeking a position as a ' + jobTitle + '.'}</p>
        </div>

        <div class="resume-section">
            <h2>Skills</h2>
            <ul>
                ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
                ${skillSuggestions.length > 0 ? skillSuggestions.map(suggestion => `<li>${suggestion}</li>`).join('') : ''}
            </ul>
        </div>

        <div class="resume-section">
            <h2>Work Experience</h2>
            <p>${experience || 'Your most relevant experience will be displayed here.'}</p>
            <ul>
                ${experienceSuggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
            </ul>
        </div>

        <div class="resume-section">
            <h2>Education</h2>
            <p>${education || 'Your educational background will be displayed here.'}</p>
        </div>
    `;

    // Display the resume
    const resumeOutput = document.getElementById('resume-output');
    resumeOutput.innerHTML = resume;
    resumeOutput.style.display = 'block';
}

// AI Suggestions (Simplified for example)
function generateSkillSuggestions(jobTitle) {
    const skillMap = {
        'Web Developer': ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        'Graphic Designer': ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Creativity'],
        'Marketing Specialist': ['SEO', 'Google Analytics', 'Content Marketing', 'Social Media Management']
    };

    return skillMap[jobTitle] || [];
}

function generateExperienceSuggestions(jobTitle) {
    const experienceMap = {
        'Web Developer': [
            'Developed responsive websites using HTML, CSS, and JavaScript.',
            'Collaborated with cross-functional teams to design and optimize web functionality.'
        ],
        'Graphic Designer': [
            'Created visually engaging graphics for clients across various industries.',
            'Collaborated with marketing teams to develop branding materials.'
        ],
        'Marketing Specialist': [
            'Developed and implemented SEO strategies to increase website traffic.',
            'Managed social media accounts to boost brand engagement and visibility.'
        ]
    };

    return experienceMap[jobTitle] || ['No specific suggestions available for this job title.'];
}
