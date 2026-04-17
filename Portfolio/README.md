# Bhavya Sharma - UI/UX Designer Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript to showcase Bhavya Sharma's work as a UI/UX designer.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **Contact Form**: Functional contact form with validation
- **Navigation**: Smooth scrolling navigation with active state indicators
- **Performance**: Optimized for fast loading and smooth interactions

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Me**: Personal information and statistics
3. **Education**: Academic background and achievements
4. **Experience**: Professional experience timeline
5. **Projects**: Portfolio of design projects
6. **Skills**: Technical and design skills with progress bars
7. **Achievements**: Awards and certifications
8. **Contact**: Contact form and information

## File Structure

```
Portfolio/
|-- index.html          # Main HTML file
|-- styles.css          # CSS styling
|-- script.js           # JavaScript functionality
|-- README.md           # This file
```

## Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, for testing)

### Running the Portfolio

1. **Clone or download the files** to your local machine
2. **Open `index.html`** in your web browser
3. **Alternatively**, use a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
4. **Navigate to** `http://localhost:8000` in your browser

## Customization

### Personal Information

Update the following information in `index.html`:

- **Contact Details**: Email, phone, location in the contact section
- **Social Links**: Update href attributes in social media links
- **Hero Section**: Modify the introduction text and subtitle
- **About Section**: Update personal description and statistics

### Education & Experience

Edit the education and experience cards in their respective sections:

```html
<!-- Education Card Example -->
<div class="education-card">
    <div class="education-header">
        <h3>Your Degree</h3>
        <span class="education-date">2020 - 2024</span>
    </div>
    <div class="education-body">
        <h4>Your Institution</h4>
        <p>Location</p>
        <div class="education-details">
            <p>Grade/Percentage</p>
        </div>
    </div>
</div>
```

### Projects

Update project cards with your actual projects:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image here -->
        <img src="path/to/your/image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">View Project</a>
        </div>
    </div>
</div>
```

### Skills

Update the skill bars and tags:

```html
<!-- Skill Bar Example -->
<div class="skill-item">
    <span class="skill-name">Skill Name</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

### Colors and Styling

Modify the CSS variables in `styles.css` to customize colors:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    --text-dark: #2d3748;
    --text-light: #718096;
    --bg-light: #f7fafc;
    --bg-white: #ffffff;
}
```

## JavaScript Features

The portfolio includes several interactive features:

- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth scroll to sections when clicking navigation links
- **Scroll Animations**: Elements animate in when they come into view
- **Parallax Effects**: Subtle parallax scrolling in the hero section
- **Form Validation**: Contact form with client-side validation
- **Hover Effects**: Interactive hover states on cards and buttons
- **Typing Effect**: Animated typing effect for the hero title

## Browser Support

This portfolio is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### GitHub Pages

1. Push the files to a GitHub repository
2. Go to repository settings
3. Enable GitHub Pages
4. Select the main branch as source

### Netlify

1. Create a free Netlify account
2. Drag and drop the portfolio folder
3. Your site will be live instantly

### Vercel

1. Create a free Vercel account
2. Connect your GitHub repository
3. Deploy with one click

## Performance Optimization

- **Minify CSS and JavaScript** for production
- **Optimize images** before adding them to the portfolio
- **Use a CDN** for external resources (fonts, icons)
- **Enable Gzip compression** on your server

## Contributing

Feel free to fork this repository and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or inquiries, please reach out to Bhavya Sharma at bhavsharma227@gmail.com

---

**Note**: This portfolio is designed to be easily customizable. Feel free to modify colors, layouts, and content to match your personal brand and style.
