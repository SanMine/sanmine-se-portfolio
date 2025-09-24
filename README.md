# Sai San Mine - Cybersecurity Engineer Portfolio

A modern, responsive personal portfolio website built with React and Vite, showcasing cybersecurity expertise and software engineering skills.

## 🚀 Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations using Framer Motion
- **Interactive Navigation**: State-based navigation with smooth scrolling effects
- **Dynamic Components**: 
  - Typing animation on home page
  - Animated skill progress bars
  - Interactive project portfolio with modal views
  - Certificate viewer modals
  - Contact form with validation
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance Optimized**: Fast loading with optimized assets and caching

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with custom properties, Flexbox, Grid
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Warbler Display (Adobe Fonts), Inter (Google Fonts)
- **Deployment**: Vercel

## 📱 Sections

1. **Home**: Hero section with typing animation and call-to-action
2. **About**: Personal information, skills with animated progress bars
3. **Resume**: Education, experience timeline, and downloadable certificates
4. **Portfolio**: Project showcase with filtering and detailed modals
5. **Services**: Cybersecurity services and expertise areas
6. **Testimonials**: Client and mentor testimonials
7. **Contact**: Contact form, information, and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/saisanmine/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Sidebar.jsx      # Navigation sidebar
│   ├── Home.jsx         # Hero section
│   ├── About.jsx        # About page with skills
│   ├── Resume.jsx       # Experience and education
│   ├── Portfolio.jsx    # Project showcase
│   ├── Services.jsx     # Services offered
│   ├── Testimonials.jsx # Client testimonials
│   ├── Contact.jsx      # Contact form and info
│   └── *.css            # Component stylesheets
├── App.jsx              # Main app component
├── App.css              # Global styles
└── main.jsx             # Entry point

public/
├── certificates/        # Certificate PDF files
├── images-guide.md      # Image replacement guide
└── vercel.json          # Vercel deployment config
```

## 🎨 Customization

### Replace Placeholder Images

1. See `/public/images-guide.md` for detailed instructions
2. Replace placeholder images with actual photos:
   - Profile photos (`placeholder-profile.jpg`, `placeholder-about.jpg`)
   - Project screenshots (`placeholder-project*.jpg`)
   - Testimonial photos (`placeholder-testimonial*.jpg`)

### Update Certificate PDFs

1. See `/public/certificates/README.md` for instructions
2. Replace placeholder PDFs with actual certificates
3. Update file paths in `Resume.jsx` if needed

### Modify Content

1. Update personal information in component files
2. Edit project details in `Portfolio.jsx`
3. Customize services in `Services.jsx`
4. Update contact information in `Contact.jsx`

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy with default settings

### Custom Domain Setup

After purchasing `sanmine-portfolio.com`:

1. Go to Vercel dashboard → Project → Settings → Domains
2. Add custom domain: `sanmine-portfolio.com`
3. Add www subdomain: `www.sanmine-portfolio.com`
4. Update DNS records as instructed by Vercel
5. SSL certificate will be automatically provisioned

### Environment Variables

For production deployment, you may want to add:

```bash
VITE_CONTACT_FORM_ENDPOINT=your-form-endpoint
VITE_GA_ID=your-google-analytics-id
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- Components use functional components with hooks
- CSS follows BEM methodology where applicable
- Responsive design with mobile-first approach
- Semantic HTML for accessibility

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sai San Mine**
- Email: saisanmine.nov@gmail.com
- GitHub: [@saisanmine](https://github.com/saisanmine)
- LinkedIn: [Sai San Mine](https://linkedin.com/in/saisanmine)

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Notes

- All images are currently placeholders and should be replaced with actual photos
- Certificate PDFs are placeholders and should be replaced with real documents
- Contact form currently shows success message only (no backend integration)
- Social media links should be updated with actual profiles

---

Built with ❤️ by Sai San Mine+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
