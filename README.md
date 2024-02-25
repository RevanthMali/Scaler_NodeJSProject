A simple URL shortener service that allows users to Shorten long URLs into Smaller Ones.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
 - [Prerequisites](#prerequisites)
 - [Installation](#installation)
- [Usage](#usage)
- [Routes](#Routes)


## Overview

This URL shortener project provides a convenient way to generate short aliases for long URLs. Users can create and manage short URLs, and the application redirects visitors to the original URL when a short alias is accessed. 
Note: This project includes only backend  part of the application.

## Features

- Shorten long URLs to a Shorter ones(like (bitly.com)).
- Redirect visitors from short aliases to the original URLs.
- Track visit history for each short URL.

## Getting Started

### Prerequisites

- NodeJS
- MongoDB
- ExpressJS

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RevanthMali/Scaler_NodeJSProject.git
   cd URl_Shortener ` 

2.  Install dependencies:
    
    `npm install` 
    `npm install express`
    `npm install mongoose`
 
3. Start the server:
    
    `npm start` 
    

## Usage

1.  Access the URL shortener service through the provided Routes.
    
2.  Create short URLs by providing a long URL and a desired short alias.
    
3.  Access short URLs to be redirected to the original long URL.
    

## Routes
		
-   `GET /:shortId`: Redirects to the original URL associated with the provided shortId.
- 
    Example: `GET /ShortId`
    
-  `GET /url/analytics/shortId`: `give the analytics of the particular Visited URLs(like no.of Visits and Visit History)`

-   `POST /url`: Shortens a long URL and returns the Short-Id for that URL.
- `URL should be sent in body like this:`
-  Example:
    `{
      "url": "https://www.example.com",
    }`
    
`Tip`: `As it is a Backend Application Test  the API endpoints in POSTMAN for better experience`
