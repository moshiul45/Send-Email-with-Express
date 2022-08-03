# Send Email

It is a basic express.js project for sending email.

## Installation

Get the project into your local machine

```bash
git clone https://github.com/moshiul45/Send-Email-with-Express.git
npm install
```

## Run the Project Locally

Get the project into your local machine

```bash
nodemon start
```

## .ENV

```
VERIFIER_EMAIL = Sender Email

#You will get this credentials from GooglePlayground

CLIENT_ID =

CLEINT_SECRET =

REDIRECT_URI =

REFRESH_TOKEN =
```

## Generate API for GMAIL

```
GO TO : https://console.cloud.google.com/

Create New Project > Select the Project
Go to APIs & Services > OAuth consent screen

#Set the following fields
    - App name
    - User support Email
    - Developer contact Information - Email Addresses

Save & Continue and Finally back to the dashboard

Click credentials from side pannel > Create Credentials > OAuth Client ID
Select Application type > Web Application
    - Set Name
    - Authorized redirect URIs : https://developers.google.com/oauthplayground
Click Create

Click the Name you set under OAuth 2.0 Client IDs [Client ID, Secret Key will be visible]

go to https://developers.google.com/oauthplayground
Enter "https://mail.google.com" under Step 1 scope
Click Setting Icon in the right up corner & select "Use your own OAuth credentials" and set "Client ID & Secret Key"
Click Authorize API
```
