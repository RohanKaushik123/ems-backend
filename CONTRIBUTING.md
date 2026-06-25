# Contributing to EMS Backend

Thank you for your interest in contributing to the EMS Backend project! This document provides guidelines and instructions for contributing.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the required template
- Follow the JavaScript/Node.js styleguides
- Document new code with JSDoc comments
- End all files with a newline
- Avoid platform-dependent code

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Create a branch: `git checkout -b feature/YourFeature`
4. Make your changes
5. Test your changes
6. Commit with clear messages
7. Push to your fork
8. Open a Pull Request

## Coding Standards

- Use 2 spaces for indentation
- Use camelCase for variable and function names
- Use UPPER_SNAKE_CASE for constants
- Write meaningful variable and function names
- Add comments for complex logic
- Follow ESLint rules

## Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## Project Structure Guidelines

When adding new features, follow the existing structure:

```
├── controllers/     - Business logic
├── routes/         - API routes
├── middleware/     - Express middleware
├── data/           - Data files
└── tests/          - Test files
```

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## Questions?

Feel free to ask questions by opening an issue with the `question` label.

Thank you for contributing! 🎉
