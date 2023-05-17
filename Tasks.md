Insure Landing Page - Tasks

- Progress

  - () Setup
  - () Develop site
    - () Navbar
    - () Header section w/ text & image
    - () Body section
    - () Footer
  - () Wrap up
    - () Code review
    - () Github pages

- Organization

  - Structure:

    - Index
      - ThemeContext
      - Font Context
      - App
        - Navbar
          - Left Group
            - Dictionary Icon
          - Right Group
            - Font selector
            - Dark mode selector
        - Body
          - 1st group: Search bar
          - 2nd group:
            - Case 1 (OK response):
              - 1st group: Word display/pronounciation/sound button
              - 2nd group: Definition(s)
              - 3rd group: Source
            - Case 2 (BAD response):
              - Validation message for submitting word not found in dictionary API.
            - Case 3 (blank form)
              - Validation message for submitting blank form in search bar.

  - Notes:
    - Theme Context:
      - Create theme file which contains theme array. This array will contain two objects, each of which will contain the theme specifications for the dark and light themes.
    - App/Navbar:
      - The navbar doesn't change significantly from desktop to tablet to mobile.

- Setup

  - Create-react-app using npm. Delete unecessesary files.
  - Bring in project files.
  - Install dependencies
    - ESlint
    - Styled Components
    - add prettier config file
  - Move assets to src folder
    - Organize asset data in assets_data file. Import images to pass to components.
  - Create main component folders and files, create basic component for each.
    - Navbar
    - Main body
  - Add GlobalStyles to App.js to pass basic styling.
    - Pass margin/padding 0px along with color variables.

- Develop site
  - Add color and font variables to GlobalStyles.
  - Navbar
  - Body
