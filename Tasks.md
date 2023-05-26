Insure Landing Page - Tasks

- Progress

  - (x) Setup
  - (x) Develop site
    - (x) Navbar
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
              - Font selection (drop-down)
              - Theme selection (slider)
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
    - Index/FontContext (done):
      - Create font file which contains font array. The array will contain (3) objects, each of which will contain the font specifications for the different selections.
      - Create font context file which contains all related methods and font context to be distributed as context to sub-component from the App level up.
    - Index/App
      - API Fetch method will reside at App level.
    - Index/App/Navbar/Right Group/Font selection (done):
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

- Develop site
  - Organize assets, components, and contexts in the src file.
  - Add basic/empty component files, reflecting structure defined in the structure section above.
  - Build order:
    1. Navbar
    - Start with navbar as this will serve as test bed for both the Theme and Font contexts and their associated functionality.
    - Build separate sub-components for the font drop-down menu and the theme slider.
      - Use the theme slider I built previously in the markdown-editor app and adjust styling.
    2. FontContext
    - Build out font array, followed by FontContext file.
    - Save user font setting in LocalStorage.
    - Apply FontContext methods to the font selection in navbar.
    - Test functionality using the font selector by applying font styling to font selector text.
    - NOTE: Following the design flow (from left to right) in the Figma file, I started with the FontContext first. The functionality of the font dropdown menu works, but styling the actual dropdown is fucked so I am delaying this for later.
    3. ThemeContext
    - Follow similar steps as FontContext above, but for themes.
