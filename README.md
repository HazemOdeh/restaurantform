# Restaurant Form 🍽️📝

A modern, full-featured restaurant registration and management application built with React, TypeScript, and Vite. This application provides a comprehensive onboarding experience for restaurants with multi-step forms, authentication, bilingual support, and robust form validation.

## 🌟 Features

- **Multi-step Registration Form**: Comprehensive restaurant onboarding with intuitive step-by-step process
- **Authentication System**: Secure login and signup functionality with form validation
- **Bilingual Support**: Full internationalization with English and Arabic language support (i18n)
- **Form Validation**: Schema-based validation using Yup for robust data integrity
- **File Upload**: Support for documents and images with drag-and-drop interface
- **Responsive Design**: Mobile-first, fully responsive UI built with Tailwind CSS
- **Google Maps Integration**: Location selection with interactive map modal
- **Working Hours Management**: Customizable working hours configuration
- **Phone Number Input**: International phone number support with country codes
- **Multi-Select Components**: Advanced multi-select dropdowns for categories and options

## 📂 Project Structure

```
restaurant/
├── public/                          # Static assets
│
├── src/
│   ├── components/
│   │   ├── hooks/
│   │   │   ├── useLogin.tsx        # Login form logic hook
│   │   │   └── useSignUp.tsx       # Signup form logic hook
│   │   │
│   │   ├── pages/
│   │   │   ├── FirstSection.tsx    # Restaurant basic info form
│   │   │   ├── SecondSection.tsx   # Additional details form
│   │   │   ├── GoogleMapsModal.tsx # Location picker modal
│   │   │   ├── WorkingHoursModal.tsx # Hours configuration
│   │   │   └── auth/
│   │   │       ├── Login.tsx       # Login page component
│   │   │       └── Signup.tsx      # Signup page component
│   │   │
│   │   ├── schemas/
│   │   │   ├── loginSchema.ts      # Login validation schema
│   │   │   └── signupSchema.ts     # Signup validation schema
│   │   │
│   │   ├── shared/
│   │   │   ├── FileInput.tsx       # File upload component
│   │   │   ├── MultipleSelect.tsx  # Multi-select dropdown
│   │   │   ├── PhoneNumberInput.tsx # Phone input with country codes
│   │   │   └── TextInput.tsx       # Reusable text input
│   │   │
│   │   └── types/
│   │       ├── login.tsx           # Login type definitions
│   │       └── signup.tsx          # Signup type definitions
│   │
│   ├── locales/
│   │   ├── ar.json                 # Arabic translations
│   │   └── en.json                 # English translations
│   │
│   ├── assets/                     # Images and static files
│   ├── App.tsx                     # Application router setup
│   ├── i18n.ts                     # i18next configuration
│   ├── index.css                   # Global styles
│   └── main.tsx                    # Application entry point
│
├── index.html                      # HTML entry point
├── package.json                    # Dependencies and scripts
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── eslint.config.js                # ESLint configuration
└── README.md                       # Project documentation
```

## ▶️ How to Run

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/HazemOdeh/restaurantform.git
cd restaurantform
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The app will hot-reload when you make changes

### Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production (TypeScript compilation + Vite build)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality checks
```

## 🛠️ Technology Stack

### Core Technologies

- **React 19.0.0** - Modern UI library with latest features
- **TypeScript 5.7.2** - Type safety and enhanced developer experience
- **Vite 6.2.0** - Next-generation frontend tooling for fast development

### Form Management & Validation

- **Formik 2.4.6** - Powerful form state management
- **Yup 1.6.1** - Schema-based form validation

### UI & Styling

- **Tailwind CSS 4.0.14** - Utility-first CSS framework
- **Lucide React 0.483.0** - Beautiful icon library
- **React Icons 5.5.0** - Additional icon sets

### Internationalization

- **i18next 24.2.3** - Internationalization framework
- **react-i18next 15.4.1** - React bindings for i18next
- **i18next-browser-languagedetector 8.0.4** - Automatic language detection

### Specialized Components

- **React Phone Input 2 2.15.1** - International phone number input
- **React Multi Select Component 4.3.4** - Advanced multi-select dropdowns
- **React Router 7.5.0** - Client-side routing

### Development Tools

- **ESLint 9.21.0** - Code quality and consistency
- **TypeScript ESLint 8.24.1** - TypeScript-specific linting rules
- **Vite Plugin React SWC 3.8.0** - Fast refresh with SWC compiler

## 🏗️ Design Patterns & Architecture

### 1. Custom Hooks Pattern

- **useLogin** and **useSignUp**: Encapsulate authentication logic
- Separation of business logic from UI components
- Reusable form handling and state management

### 2. Schema-Driven Validation

- Centralized validation schemas in `schemas/` directory
- Type-safe validation with Yup
- Consistent error handling across forms

### 3. Component Composition Pattern

- Modular shared components (`TextInput`, `FileInput`, etc.)
- Reusable across different forms and pages
- Single Responsibility Principle

### 4. Type Safety Pattern

- Comprehensive TypeScript type definitions
- Type-safe props and state management
- Reduced runtime errors with compile-time checks

### 5. Internationalization Pattern

- Centralized translation files
- Runtime language switching
- Browser language detection

### 6. Multi-Step Form Pattern

- Progressive disclosure with `FirstSection` and `SecondSection`
- Step-by-step data collection
- Enhanced user experience

### 7. Modal Pattern

- Isolated modal components for specific tasks
- GoogleMapsModal for location selection
- WorkingHoursModal for schedule configuration

### 8. Configuration-Based Components

- Phone input with country code configuration
- Multi-select with customizable options
- Flexible and maintainable

## 📱 Components Documentation

### Authentication Components

#### Login.tsx

Secure login page with form validation.

- **Features**: Email/password authentication, form validation, error handling
- **Validation**: Email format, required fields
- **Integration**: Uses `useLogin` custom hook

#### Signup.tsx

User registration page with comprehensive form fields.

- **Features**: Multi-field registration, password confirmation, terms acceptance
- **Validation**: Schema-based validation with `signupSchema`
- **Integration**: Uses `useSignUp` custom hook

### Form Section Components

#### FirstSection.tsx

Initial restaurant registration form collecting basic information.

- **Fields**: Restaurant name, category, contact information
- **Features**: File upload, phone input, validation
- **Progressive**: First step in multi-step form

#### SecondSection.tsx

Advanced restaurant details and configuration.

- **Fields**: Additional details, working hours, location
- **Integration**: Google Maps and working hours modals
- **Completion**: Final step before submission

### Modal Components

#### GoogleMapsModal.tsx

Interactive location picker with map integration.

- **Features**: Map-based location selection, search functionality
- **User Experience**: Visual location selection
- **Integration**: Returns coordinates to parent form

#### WorkingHoursModal.tsx

Working hours configuration interface.

- **Features**: Day-by-day schedule setting
- **Flexibility**: Custom hours for each day of the week
- **Validation**: Time format validation

### Shared Components

#### TextInput.tsx

Reusable text input component with label and error handling.

- **Features**: Label, placeholder, error display
- **Formik Integration**: Works seamlessly with Formik
- **Customizable**: Flexible styling and configuration

#### FileInput.tsx

File upload component with drag-and-drop support.

- **Features**: Drag-and-drop, file preview, multiple file support
- **Validation**: File type and size validation
- **User Feedback**: Visual upload status

#### PhoneNumberInput.tsx

International phone number input with country codes.

- **Features**: Country selection, format validation
- **Integration**: React Phone Input 2 library
- **User-Friendly**: Automatic formatting

#### MultipleSelect.tsx

Multi-select dropdown component for categories and options.

- **Features**: Search, multiple selection, custom options
- **Integration**: React Multi Select Component
- **Accessible**: Keyboard navigation support

## ⚙️ Configuration

### i18n Configuration

```typescript
// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Automatic language detection and translation management
```

### TypeScript Configuration

Multiple TypeScript configurations for different environments:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node/build tool settings

### Tailwind CSS

Modern utility-first styling with Tailwind CSS 4.0 using the Vite plugin for optimal performance.

## 🎨 Styling Approach

### Tailwind CSS

- **Utility-first**: Rapid UI development with utility classes
- **Responsive**: Built-in breakpoints for all devices
- **Customizable**: Extended with custom colors and spacing
- **Dark Mode Ready**: Support for theme switching

## 🚀 Key Features Breakdown

### Multi-Step Forms

- Step-by-step data collection
- Form state persistence
- Progress indication
- Validation at each step

### Form Validation

- Schema-based validation with Yup
- Real-time error feedback
- Field-level validation
- Custom validation rules

### Internationalization

- English and Arabic support
- RTL layout for Arabic
- Browser language detection
- Runtime language switching

### File Management

- Drag-and-drop file upload
- File preview functionality
- Multiple file support
- Size and type validation

## 📊 Data Flow

```
User Input
    ↓
Formik Form Management
    ↓
Yup Schema Validation
    ↓
Custom Hooks (useLogin/useSignUp)
    ↓
API Integration (Future)
    ↓
Success/Error Handling
    ↓
UI Feedback
```

## ✅ Strengths

- **Type Safety**: Full TypeScript implementation prevents runtime errors
- **Internationalization**: Complete bilingual support with easy language switching
- **Form Validation**: Robust schema-based validation ensures data integrity
- **Reusability**: Modular component architecture for easy maintenance
- **User Experience**: Intuitive multi-step forms with clear feedback
- **Performance**: Optimized with Vite and React 19 features
- **Accessibility**: ARIA labels and semantic HTML throughout
- **Responsive**: Works seamlessly on all devices

## 🧪 Development Guidelines

### Code Quality

- ESLint configured with React and TypeScript rules
- Consistent code formatting
- Component-level TypeScript interfaces
- Comprehensive type definitions

### Component Standards

- Functional components with hooks
- Props interfaces for type safety
- Clear component responsibilities
- Reusable component extraction

### File Organization

- Feature-based folder structure
- Separated concerns (hooks, schemas, types)
- Consistent naming conventions
- Logical component grouping

### Best Practices

- Custom hooks for complex logic
- Schema-based validation
- i18n for all user-facing text
- Responsive design first

## 👥 Authors

- **Hazem Odeh** - Full Stack Developer

## 🙏 Acknowledgments

- React Team for the amazing library and ecosystem
- Formik for simplifying form management
- Tailwind CSS for rapid UI development
- i18next for internationalization capabilities
- Vite for blazing fast development experience

---

**Built with ❤️ using React + TypeScript + Vite**

```

```
