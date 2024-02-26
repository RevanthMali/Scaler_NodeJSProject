A simple URL shortener service that allows users to Shorten long URLs into Smaller Ones.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
 - [Prerequisites](#prerequisites)
 - [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Demo](#Demo)


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

## Demo

Here are some of the demo Screenshots of this Project: 


1. Provide the long URL in body:
 
![Screenshot 2024-02-26 223828](https://github.com/RevanthMali/Scaler_NodeJSProject/assets/118295254/45ea9a26-d391-4f59-ac39-e5088b3ce98f)

2. Paste the Generated ShortId in GET request and to check the working of this URL paste it in your Browser

![Screenshot 2024-02-26 223955](https://github.com/RevanthMali/Scaler_NodeJSProject/assets/118295254/aae553f7-e4d9-4a6a-b2b2-fa76096fe8a9)

3. To get the analytics of the particular Visited URL add the id at the end of analytics route like this:

![Screenshot 2024-02-26 224021](https://github.com/RevanthMali/Scaler_NodeJSProject/assets/118295254/2bf06694-a190-43b8-8e83-8a1b4b5a7856)

4. Finally these visited URLs and Visit History are stored in MongoDB:

 ![Screenshot 2024-02-26 224211](https://github.com/RevanthMali/Scaler_NodeJSProject/assets/118295254/944a8738-b5b8-46b3-84b0-c9a44762a3b9)

