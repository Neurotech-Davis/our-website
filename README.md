# How to run the project
1. clone repo locally
2. enter "npm install" in terminal once in root directory
3. then enter "npm run dev" in terminal 

# How did we Deploy to Firebase & Use a Custom Domain
**Setting Up Firebase Account**
[firebase console](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://console.firebase.google.com/&ved=2ahUKEwj4kYjW4OuIAxX0DzQIHZ6vE14QFnoECAkQAQ&usg=AOvVaw2FZlXJ-vssrAqr1uc6tr-x)
1. Created firebase console account with our club gmail
2. Created a new project & gave it a name
3. Went to Hosting & clicked get started
4. Clicked next for all steps

**Deploying to Firebase**

Followed this guide with some modifications: https://anish-gyawali.medium.com/deploying-a-react-app-with-github-actions-and-firebase-hosting-a-beginners-guide-2f1b9f477ac3

All commands ran in terminal at root directory
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

***Modifications***
1. ignored 'build' folder - don't need it just a formality for the steps above
2. ran $ npm run build
3. changed firebase.json line 3 ("public":"build") to "public":"<name of folder created in step 2>"
   (in our case the folder was called 'dist')
4. created a new directory called .gitub $ mkdir .github
5. inside .gitub created a directory called workflows $ cd .github; mkdir workflows
6. inside workflows created a github actions file called main $ cd workflows; touch main.yml
7. copied the yml file in step 5 in the guide
8. modified part of the 'Archive Production Artifact' and 'Download Artifact' sections
 1. replaced 'build' to with folder name from step 2 ('dist')
  (changes were 'with: name: dist path: dist')
 2. replaced version of action to 'v3'
  (changes were 'uses: actions/upload-artifact@v3' and 'uses: actions/download-artifact@v3')
9. Checked last line of main.yml file secret name matched the secret created in **Deploying to Firebase** step 4
9. uploaded changes to github $ git add .; git commit -m "changes"; git push
10. our push manually triggered github actions to run starting a build & deploying website to firebase :)


**Using a Custom Domain**
1. Created a Porkbun account
2. Bought our domain: neurotechdavis.com
3. In porkbun, hovered over domain name to select DNS
4. Setup DNS to match firebase information
5. 
