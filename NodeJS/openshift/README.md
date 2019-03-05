# Node.js, MongoDB and Nuxt.js (or another frontend framework) ready for Openshift
I have so much to say and
1. I have no time to write it all right now
2. I will most likely forget about all these things when I have time to write them
3. Sigh...

Real quick tho: This repo is designed to run out of the box on openshift. Create a new project, then add through the catalog a "Node.js + MongoDB" item to your project. Make sure to change the github repo of the NodeJS app before creating it. You can put this repo if you want to test it out! Later youll have to go to advanced settings and change the directory to /backend for the nodejs app. After that, go to builds, select your nodejs thingy, and click "Start build". Wait until its finished and voila, thats the backend done!

For the frontend, youll have to create a new item through the catalog, this time nodejs only. Go to advanced settigns again and change it to /frontend, click start build, and voila you now have friontend as well.

(I wrote this down so i dont forget. I hope ill get into more detail later...!)