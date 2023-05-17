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

- Structure:

  - Index

    - ThemeContext
      - FontContext
        - App
          - Navbar
            - Left Group
              - Dictionary Icon
            - Right Group
              - Font selection
              - Theme selection
          - Body
            - 1st group: Search bar
            - 2nd group:
              - Case 1 (OK response):
                - 1st group: Word display/pronounciation/sound button
                - 2nd group: Definition(s)
                - 3rd group: Source
              - Case 2 (BAD response):
                - Validation message for submitting word not found in dictionary API.
              - Case 3 (blank form):
                - Validation message for submitting blank form in search bar.

  - Notes:

    - Index/ThemeContext:
      - Create theme file which contains theme array. This array will contain (2) objects, each of which will contain the theme specifications for the dark and light themes.
      - Create theme context file which contains all related methods and theme content to be distributed as context to sub-components from the App level up.
    - Index/FontContext:
      - Create font file which contains font array. The array will contain (3) objects, each of which will contain the font specifications for the different selections.
      - Create font context file which contains all related methods and font context to be distributed as context to sub-component from the App level up.
    - Index/App
      - API Fetch method will reside at App level.
    - Index/App/Navbar/Right Group/Font selection:
      - Drop down list allowing use to choose font from list of (3).
      - List: Sans Serif, Serif, Mono
    - Index/App/Navbar/Right Group/Theme selection:
      - Drop down list allowing use to choose theme from list of (2).
      - List: Light, Dark
    - Index/App/Body/

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
