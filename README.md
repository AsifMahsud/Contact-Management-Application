# Contact Management Application with Vue.js (medium)

It is your first day at a new job as a front-end engineer and you have been given a task to finish a contact management application.

## Setup

This app was created with [Vue CLI](https://cli.vuejs.org/).

Follow these steps for correct application setup :

1. `npm install` – install dependencies
2. `npm test` – run all tests (should fail unless you fix the app)
3. `npm run test:watch` – run all tests in  watch mode
4. `npm run serve` – serve the app at [http://localhost:8080/](http://localhost:8080/) (or at another port it `8080` is unavailable)

----

## Introduction

All parts of the application have been written by the previous engineer except the following functionalities:

* Importing the contacts from `contacts.json`
* Binding data variable contact to contact imported from `contacts.json`
* Creating a data variable called query initialized to the empty string
* Two way binding data variable query to input field with the `id="search"`
* Creating a search function to search through contacts by firstname and lastname
* Displaying contacts using `app-contacts` component and search results

## Problem Statement
You are expected to implement the following functionalities:

1. Set variable contacts to be equal to `jsonContacts`.
2. Create a data variable called `query` and initialize it to the empty string.
3. Bind the `query` variable to the input field with the `id="search"`
4. Create the computed getter function: `search()` > This function filters contacts by their first and last names, email and phone number based on a data variable named query and returns an array of the filtered contacts.
5. Bind the results of search to be displayed in `app-contacts` component.

# Good luck!
