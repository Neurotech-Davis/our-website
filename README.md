# How to run the project
1. clone repo locally
2. enter "npm install" in terminal once in root directory
3. then enter "npm run dev" in terminal 

# How did we Deploy to Firebase & Use a Custom Domain
**Setting Up Firebase Account**
1. Created account with our club gmail
2. Created a new project & gave it a name

**Deploying to Firebase**

Followed this guide with some modifications: https://anish-gyawali.medium.com/deploying-a-react-app-with-github-actions-and-firebase-hosting-a-beginners-guide-2f1b9f477ac3
All commands run in root directory
1. ran $ npm install -g firebase-tools
2. checked firebase was installed $ firebase --version
3. logged out our firebase account $ firebase login:ci
4. followed authentication process to obtain token & added it to our github action secrets
5. initiated firebase project $ firebase init
6. selected option for “hosting: configure files for firebase hosting and (optionally) set up Github Action deploys”
7. selected the same project created in **Setting up Firebase Account**
8. for our public directory, typed "build"
9. for configuring as a single-page app, typed "Y"
10. for setting up automatic builds and deploys with Github, typed "N"


**Using a Custom Domain**
1. Created a Porkbun account
2. Bought our domain: neurotechdavis.com
3. Setup DNS to match firebase information
