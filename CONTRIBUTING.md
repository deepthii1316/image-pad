# Contributing to Image Pad

Thank you for your interest in contributing to Image Pad! This document provides guidelines for development and contribution.

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/image-pad.git
   cd image-pad
   ```

2. **Install Dependencies**
   ```bash
   npm run install-all
   ```

3. **Setup Environment Variables**
   - Copy `backend/.env.example` to `backend/.env`
   - Add your Cloudinary credentials
   - Setup MongoDB URI

4. **Run Development Servers**
   ```bash
   # Terminal 1 - Backend
   npm run dev:backend
   
   # Terminal 2 - Frontend
   npm run dev:frontend
   ```

## Code Style

- Use ES6+ features
- Follow existing code patterns
- Use meaningful variable and function names
- Add comments for complex logic

## Pull Request Process

1. Create a new branch for your feature
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test thoroughly

3. Commit your changes with clear messages
   ```bash
   git commit -m "Add feature: description"
   ```

4. Push to your fork and submit a pull request

5. Ensure all checks pass

## Reporting Issues

- Use the GitHub issue tracker
- Provide clear description and steps to reproduce
- Include error messages and screenshots if applicable

## Questions?

Feel free to open an issue for questions or discussions!
