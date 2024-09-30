# How to run the project
1. clone repo locally
2. enter "npm install" in terminal once in root directory
3. then enter "npm run dev" in terminal 

# How did we Deploy to Firebase & Use a Custom Domain
**Setting Up Firebase Account**

[firebase console](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://console.firebase.google.com/&ved=2ahUKEwj4kYjW4OuIAxX0DzQIHZ6vE14QFnoECAkQAQ&usg=AOvVaw2FZlXJ-vssrAqr1uc6tr-x)
1. created firebase console account with our club gmail
2. created a new project & gave it a name
3. under build, clicked on 'hosting' and then clicked 'get started'
5. clicked next for all steps

**Deploying to Firebase**

Followed this [guide with some modifications](https://anish-gyawali.medium.com/deploying-a-react-app-with-github-actions-and-firebase-hosting-a-beginners-guide-2f1b9f477ac3)

All commands ran in terminal at root directory
1. ran ```$ npm install -g firebase-tools```
2. checked firebase was installed ```$ firebase --version```
3. logged into our firebase console account ```$ firebase login:ci```
4. followed authentication process to obtain token & added it to our github action secrets
5. initiated firebase project ```$ firebase init```
6. selected option for “hosting: configure files for firebase hosting and (optionally) set up Github Action deploys”
7. selected the same project created in **Setting up Firebase Account**
8. for our public directory, typed "build"
9. for configuring as a single-page app, typed "Y"
10. for setting up automatic builds and deploys with Github, typed "N"

***Setting Up Github Actions (Guide Modifications Here)***

11. ignored 'build' folder - don't need it just a formality for the steps above
12. ran ```$ npm run build```
13. changed firebase.json line 3 ("public":"build") to "public":"<name of folder created in step 2>"
   (in our case the folder was called 'dist')
14. created a new directory called .gitub ```$ mkdir .github```
15. inside .gitub created a directory called workflows ```$ cd .github; mkdir workflows```
16. inside workflows created a github actions file called main ```$ cd workflows; touch main.yml```
17. copied the main.yml file in step 5 in the guide to the new main.yml file created
18. modified part of the 'Archive Production Artifact' and 'Download Artifact' sections in main.yml
 - replaced 'build' to with folder name from step 2 ('dist')
  (changes were 'with: name: dist path: dist')
 - replaced version of action to 'v3'
  (changes were 'uses: actions/upload-artifact@v3' and 'uses: actions/download-artifact@v3')
19. Checked last line of main.yml file secret name matched the secret created in **Deploying to Firebase** step 4
20. uploaded changes to github ```$ git add .; git commit -m "changes"; git push```
21. our push manually triggered github actions to run starting a build & deploying website to firebase :)

**Viewing the Website**
1. logged into firebase console & selected same project
2. clicked on 'hosting' and then scrolled to 'domains' section
3. clicked on one of the urls & website appeared (refreshed the website a couple times)

**Using a Custom Domain**

Followed these two [guide1](https://blog.stackademic.com/connect-domain-firebase-hosting-0c05a0af808b) and [guide2](https://kb.porkbun.com/article/68-how-to-edit-dns-records)

1. created a Porkbun account
2. bought our domain: neurotechdavis.com
3. in porkbun, hovered over domain name to select DNS (porkbun dns section)
4. logged into firebase console & selected the same project
5. clicked on hosting, scrolled to 'domains' section, and clicked on 'add custom domain'
6. typed our domain, pressed continue, and added records required onto porkbun dns section
7. deleted records with 'pixie.porkbun.com' or 'pixie-parking.porkbun.com' (only had records firebase wanted listed on porkbun dns section)
8. waited overnight for records to get approved
9. once approved said 'connected' next domain in firebase console & the website could be seen from our custom domain
