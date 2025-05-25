# Project Memory

## docs/specs/ai-na-beverage-recommendation.md
Functional specification for the AI-powered non-alcoholic beverage recommendation feature. Details user journey, requirements, acceptance criteria, and considerations for implementing personalized NA drink suggestions using OpenAI APIs.

## docs/specs/another-spec-file.md
Functional specification for another feature. Details user journey, requirements, acceptance criteria, and considerations for implementation.

## docs/specs/yet-another-spec-file.md
Functional specification for yet another feature. Details user journey, requirements, acceptance criteria, and considerations for implementation.

## docs/plans/initial-implementation-plan.md
Outline of the initial implementation plan for the project, including setup instructions, technology stack decisions, and initial task assignments.

## docs/plans/sprint-1-plan.md
Detailed plan for the first sprint, including user stories, tasks, and deadlines.

## docs/plans/sprint-2-plan.md
Detailed plan for the second sprint, building upon the first sprint's work and addressing any remaining tasks or new features.

## docs/proposal.md
Initial project proposal outlining the project's purpose, goals, and potential impact. Includes brainstorming notes and initial feature ideas.

## docs/memory.md
Documentation of project architecture and file purposes. This file.

## code/README.md
Instructions for navigating and understanding the codebase, including information on the folder structure, key files, and how to run the project locally.

## code/src/
Main source folder for the application code.

## code/src/index.js
Entry point for the React application.

## code/src/App.js
Main App component that serves as the root component for the React application.

## code/src/components/
Folder for reusable React components.

## code/src/pages/
Folder for React components that represent entire pages or views in the application.

## code/src/utils/
Folder for utility functions and helpers used throughout the application.

## code/src/styles/
Folder for global styles and CSS files.

## code/server.js
Entry point for the Node.js server.

## code/routes/
Folder for Express route handlers.

## code/routes/recommendation.js
Express route for handling POST requests to /api/recommendation. Forwards user preferences to the controller and returns AI-generated recommendations.

## code/controllers/
Folder for route controllers that handle the business logic of the application.

## code/controllers/recommendationController.js
Controller for the recommendation route. Validates input, builds prompt, calls OpenAI API, and formats/parses the AI response.

## code/models/
Folder for database models and schemas.

## code/views/
Folder for server-side rendered views (if applicable).

## code/public/
Folder for static assets like images, fonts, and other files served directly by the web server.

## code/config/
Folder for configuration files and environment variables.

## code/config/openai.js
OpenAI API configuration and helper function for generating beverage recommendations. Exports a function to call OpenAI with user preferences and return formatted results.

## code/tests/
Folder for test files and testing utilities.

## code/scripts/
Folder for custom scripts, such as database seeding or migration scripts.

## code/docs/
Folder for additional documentation, if needed.

## code/src/pages/RecommendationPage.js
React page for the AI beverage recommendation feature. Contains the user input form for favorite alcoholic beverages and NA beverage type selection, with validation and accessibility support. Now includes ARIA roles and tabIndex for accessibility.

## code/src/components/FormInput.js
Reusable, accessible input component for forms. Renders label, input, and error message with ARIA attributes for accessibility. Now includes tabIndex for keyboard navigation.

## code/src/components/RecommendationCard.js
Reusable card component for each recommendation. Renders drink details, image, and links with accessible markup. Now includes ARIA roles, tabIndex, and improved keyboard/screen reader support.

## code/src/locales/en.json
Store all UI strings for English localization.

## code/src/i18n.js
i18n initialization and configuration for react-i18next, loading en.json.





