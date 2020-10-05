# Udacity React-Native Mobile Flashcards
 
## Table of contents
 
* [Overview](#overview)
* [Instructions](#instructions)
* [Resources](#resources)
 
## Overview
 
This project is the final one in the Udacity React Nanodegree and has been built and tested for use on an Android device.
It replicates the flashcard method of studying. When opened it will default to a list of decks available to study,
if there are no current decks it will populate the list with dummy data.
 
The user can click on a deck in the list to navigate to a screen where they can take a quiz on the topic, add a card/question
to the deck or delete the deck. When a quiz is taken they can view the answer to each question and report correctly or incorrectly
guessing the answer. Once completed the user is shown their score against the number of cards and their result is recorded.
 
The Results screen shows a results card for each quiz that has been completed. It highlights the top score and when
it was recorded, also, how many times the quiz has been taken. There is also a daily notification to study that is cleared and
reset for the next day when a quiz is completed.
 
The user can also navigate to the new Deck screen and enter a new Deck title, if the title already exists then they will be prompted
to choose another. Otherwise, it's saved into the deck list and displayed on the list screen.
 
The project uses: React-Native, Redux, AsyncStorage, and styled components. It has primarily been built for Android as I don't
currently have access to Mac software or hardware. I also added the extra features of being able to delete a card or whole deck,
with validation from the user, and a whole extra data set to hold and display results data from the completion of quizzes.
 
 
## Instructions
 
* Once the files have been copied over use `yarn add` or `npm i` to install all dependencies.
* Then, `yarn start` or `npm start` to run the expo server.
* If running on an Android device download the Expo app onto the device.
* Once a QR code has appeared in Expo choose 'Tunnel' to run the app on an Android device and scan the QR code. Alternatively
choose to run the app on an emulator.

 
## Resources

[gitHub](https://github.com/ayushmaz/mobile-flashcards/blob/master/reducers/index.js) - solution to delete a deck from current state (25/09/2020)

[Pixabay](https://pixabay.com/illustrations/geometry-mathematics-cube-1023846/) - Image used for background (30/09/2020)

[MDN](https://developer.mozilla.org/en-US/) - for general definitions and use of syntax

[stack-overflow](https://stackoverflow.com/) - for general help and use of syntax

[Redux Docs](https://redux.js.org/) - for looking up best practices and syntax

[React Native Docs](https://reactnative.dev/docs/getting-started) - for looking up best practices and syntax