# Implementation Plan for AI Non-Alcoholic Beverage Recommendation Feature

- [x] Step 1: Create User Input Form
  - **Task**: Implement an accessible form for users to enter favorite alcoholic beverages and select preferred NA beverage types.
  - **Files**:
    - `code/src/pages/RecommendationPage.js`: Add form UI, state management, and validation logic.  
      Pseudocode:  
      ```js
      // ...existing code...
      // Render input for favorite alcoholic beverages (text or select)
      // Render checkboxes or selects for NA beverage types
      // Validate required fields on submit
      // ...existing code...
      ```
    - `code/src/components/FormInput.js`: Create reusable, accessible input components.
      Pseudocode:
      ```js
      // ...existing code...
      // Render label, input, and error message with ARIA attributes
      // ...existing code...
      ```
  - **Dependencies**: React, basic form validation library (optional)

- [x] Step 2: Integrate AI Recommendation Engine
  - **Task**: Connect frontend to backend endpoint that calls OpenAI API with user preferences.
  - **Files**:
    - `code/src/pages/RecommendationPage.js`: Add API call logic on form submit.
      Pseudocode:
      ```js
      // ...existing code...
      // On submit, POST preferences to backend endpoint
      // Show loading indicator
      // ...existing code...
      ```
    - `code/routes/recommendation.js`: New Express route to handle POST requests.
      Pseudocode:
      ```js
      // ...existing code...
      // Receive preferences, call OpenAI API, return recommendations
      // Handle errors and timeouts
      // ...existing code...
      ```
    - `code/controllers/recommendationController.js`: Business logic for formatting prompt and parsing AI response.
      Pseudocode:
      ```js
      // ...existing code...
      // Build prompt for OpenAI
      // Call OpenAI API
      // Parse and format response
      // ...existing code...
      ```
    - `code/config/openai.js`: Store OpenAI API config and helper functions.
      Pseudocode:
      ```js
      // ...existing code...
      // Export OpenAI API key and client setup
      // ...existing code...
      ```
  - **Dependencies**: Express, OpenAI SDK

- [x] Step 3: Display Recommendations
  - **Task**: Show AI-generated NA beverage recommendations with all required info in an accessible, responsive UI.
  - **Files**:
    - `code/src/pages/RecommendationPage.js`: Render recommendations list.
      Pseudocode:
      ```js
      // ...existing code...
      // For each recommendation: show name, type, image, ingredients, calories, health info, buy link
      // Use semantic HTML and ARIA roles
      // ...existing code...
      ```
    - `code/src/components/RecommendationCard.js`: Reusable card component for each recommendation.
      Pseudocode:
      ```js
      // ...existing code...
      // Render drink details, image, and links with accessible markup
      // ...existing code...
      ```
  - **Dependencies**: None beyond React

- [x] Step 4: Localization Support
  - **Task**: Ensure all user-facing strings are in English and ready for future localization.
  - **Files**:
    - `code/src/locales/en.json`: Store all UI strings.
      Pseudocode:
      ```json
      {
        "form.title": "Find Your Non-Alcoholic Drink Match",
        "form.submit": "Get Recommendations",
        // ...other strings...
      }
      ```
    - `code/src/pages/RecommendationPage.js`: Replace hardcoded strings with locale references.
      Pseudocode:
      ```js
      // ...existing code...
      // Use locale strings for all UI text
      // ...existing code...
      ```
  - **Dependencies**: i18n library (e.g., react-i18next) if not already present

- [x] Step 5: Accessibility Enhancements
  - **Task**: Ensure all UI is keyboard navigable and screen reader friendly.
  - **Files**:
    - `code/src/components/FormInput.js`, `code/src/components/RecommendationCard.js`, `code/src/pages/RecommendationPage.js`: Add ARIA attributes, roles, and keyboard handlers as needed.
      Pseudocode:
      ```js
      // ...existing code...
      // Add aria-labels, roles, and tabIndex where appropriate
      // ...existing code...
      ```
  - **Dependencies**: None

- [x] Step 6: Performance Optimization
  - **Task**: Ensure recommendations are generated and displayed within 5 seconds.
  - **Files**:
    - `code/controllers/recommendationController.js`: Add timeout logic for OpenAI API calls.
      Pseudocode:
      ```js
      // ...existing code...
      // Set timeout for API call, return error if exceeded
      // ...existing code...
      ```
    - `code/src/pages/RecommendationPage.js`: Show loading indicator and handle slow responses.
      Pseudocode:
      ```js
      // ...existing code...
      // Display spinner if waiting > 1s
      // ...existing code...
      ```
  - **Dependencies**: None

- [x] Step 7: Build and Run the App
  - **Task**: Build frontend and backend, then run locally.
  - **Files**: N/A (use existing scripts)
  - **Dependencies**: Node.js, npm/yarn

- [ ] Step 8: Write Unit and UI Tests
  - **Task**: Add tests for form validation, API integration, and UI rendering.
  - **Files**:
    - `code/tests/RecommendationPage.test.js`: Test user input, API calls, and rendering.
    - `code/tests/RecommendationCard.test.js`: Test display of recommendation details.
    - `code/tests/recommendationController.test.js`: Test backend logic and OpenAI integration (mocked).
  - **Dependencies**: Jest, React Testing Library, Supertest

- [ ] Step 9: Run All Unit and UI Tests
  - **Task**: Execute all tests to ensure feature works as expected.
  - **Files**: N/A
  - **Dependencies**: Jest, React Testing Library