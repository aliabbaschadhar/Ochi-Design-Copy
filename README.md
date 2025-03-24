# Ochi Design Website Clone

This project is a frontend clone of the [Ochi Design](https://ochi-design-copy.vercel.app/) website, created for educational purposes to demonstrate modern web development techniques and showcase frontend skills.

> **Disclaimer**: This project is a clone created solely for learning purposes and is not affiliated with Ochi Design.

## ✨ Features

- **Smooth Animations** - Interactive animated components throughout the site
- **Interactive Elements** - Animated eyeballs that follow cursor movement
- **Responsive Design** - Optimized for different screen sizes
- **Dynamic UI Components** - Hover effects and transitions for enhanced user experience
- **Modern Styling** - Clean, professional design with Tailwind CSS

## 🛠️ Technologies Used

- **React** - UI component library
- **Vite** - Fast, modern frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Icon components

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ochi-design-clone.git
   cd ochi-design-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📂 Project Structure

```
ochi-design-copy/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and fonts
│   │   ├── Images/      # Image assets and SVG components
│   │   └── fonts/       # Custom fonts
│   ├── components/      # React components
│   │   ├── Navbar.jsx   # Navigation bar with hover effects
│   │   ├── LandingPage.jsx # Hero section with animated text
│   │   ├── About.jsx    # About section with interactive elements
│   │   ├── Eyes.jsx     # Interactive eyeballs section
│   │   ├── EyeBall.jsx  # Individual eyeball component with cursor tracking
│   │   ├── Featured.jsx # Featured projects section with cards
│   │   ├── Card.jsx     # Individual project card component
│   │   ├── Reviews.jsx  # Client review section
│   │   ├── ReviewComponent.jsx # Individual review component
│   │   ├── Button.jsx   # Reusable button component with animations
│   │   ├── Marquee.jsx  # Scrolling text component
│   │   ├── BeforeFooter.jsx # Pre-footer section with logos
│   │   ├── StartProject.jsx # Call-to-action section
│   │   └── Footer.jsx   # Footer component
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles and font imports
└── package.json         # Dependencies and scripts
```

## 🔍 Key Components

- **Navbar** - Fixed navigation with hover effects
- **EyeBall Component** - Interactive eyeballs that follow the user's cursor
- **Featured Projects** - Interactive cards with hover animations
- **Reviews** - Expandable client review cards
- **Button Component** - Reusable animated button

## 🎨 Custom Features

- **Custom Fonts** - Using FoundersGrotesk and NeueMontreal fonts
- **Cursor Tracking** - Interactive elements that follow cursor movement
- **Hover Animations** - Enhanced user experience with subtle hover effects
- **Dynamic Cards** - Project cards with scale animations
- **Expandable Reviews** - Client testimonials that expand with animation

## 🧪 Development

### Customization

You can customize various aspects of the project:

- Update colors in `tailwind.config.js`
- Modify animations in component files
- Change content in each component file
- Add new assets in the `assets` folder

### Adding New Sections

To add a new section:

1. Create a new component in the `components` folder
2. Export it from `src/components/index.js`
3. Import and add it to `App.jsx`

## 📝 License

This project is for educational purposes only. All design credits go to [Ochi Design](https://ochi.design/).

## 🙏 Acknowledgements

- [Ochi Design](https://ochi.design/) for the original design inspiration
- The creators of React, Vite, Tailwind CSS, and Framer Motion
- Various online tutorials and resources that helped in understanding these technologies
