# Magic: The Gathering Coding Exercise
This project was created as a coding exercise using a Magic the Gathering (MTG) API and Create React App.

It's not affiliated with Wizards of the Coast.

## Table of Contents
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Starting the Project](#starting-the-project)
- [Running Unit Tests](#running-unit-tests)
- [Generating Coverage Reports](#generating-coverage-reports)
- [API Information](#api-information)
- [TODO](#todo)
  * [Features](#features)
  * [CSS](#css)
  * [Translation](#translation)
  * [ADA](#ada)
  * [Testing](#testing)
  * [Build Process](#build-process)

## Demo
* https://tranquil-taiga-57459.herokuapp.com/

## Dependencies
* `Node 12.13.1`
* `npm 6.12.1`

## Getting Started
1. Clone the repo
2. `npm install`

## Starting the Project
1. `npm run start`
2. Open your browser of choice
3. Go to localhost:3000

## Running Unit Tests
* `npm run test`

## Generating Coverage Reports
* `npm run coverage`

## API Information
This project uses an API that's not affiliated with Wizards of the Coast. The API information and documentation is below:

* Location: https://api.magicthegathering.io/v1/cards
* Documentation:
    * https://docs.magicthegathering.io/
    * https://docs.magicthegathering.io/#api_v1cards_list

## TODO
### Features
* Add a counter to display the current number of cards on the page
* Include a way to add cards to a deck or a favorites list


### CSS
* Restrict image dimensions on the card images so they're all uniform. (The API returns larger images for some cards, rather than the standard size used by most of the cards.)
* Create Global CSS file for utility classes and other styles that are truly common
* Add a CSS pre or post processor to help with variables, vendor prefixes, etc.
* Finish styling the select field component to it more closely matches the input field above it

### Translation
* Add a language dropdown in the header to allow users to switch languages
* Create a language file of key value pairs that can be swapped out for translation

### ADA
* Add screen reader notification when results are still loading

### Testing
* Create e2e automation using selenium or something similar
* Mock fetchData utility

### Build Process
* Include prettier.js in the project
* Add nginx proxy so we can access the header information from the API on a deployed server
* Eject the project from create-react-app so the build can be modified to exclude the src/index.js from the test results
* Include prettier.js in the project
* Integrate Travis CI with repo to help catch any regressions
* Add nginx proxy so we can access the header information from the API on a deployed server

