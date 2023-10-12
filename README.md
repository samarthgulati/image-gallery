# Image Gallery Voting
A simple one page web app that displays a list of images with buttons to vote up or down the image, and a count of votes of each type the image has received.

The front-end uses create-react-app for initial boilerplate code.
The back-end uses Node server through Express, and MongoDB through Mongoose. 

Docker setup and DB configuration were referred from (mern-crud)[https://github.com/cefjoeii/mern-crud] repository.

The front-end is not yet wired to the back-end, and reads a list of images from a static json file.
It can be run independently by running `npm install` in the client folder, followed by `npm run start`
This should load up the interface on `http://localhost:4200`

![ImageGalleryVoting](https://github.com/samarthgulati/image-gallery/assets/8597017/3829c74c-ff55-4dae-9d7a-8ab4182f63b2)


Each of the buttons show the current count of votes for each type, and user's current selection with a color change.
User can also unset their vote by clicking on their selection again.

The back-end currently hosts the static build files of `client` folder and has 2 api endpoints defined for two models of MongoDB.
Each model is setup to send all the data in the model on a GET request and replace all the data on a POST.
While the back-end was operational in serving the images via GET through docker instance, the POST didn't work as expected.
To debug local setup took a while with MongoDB installation requiring XCode, which in turn required a MacOS version update.
More performant row-wise syncing of data with DB, support for multiple users, and adding Socket IO for multi-user access is TBD.

Docker container can be started using `docker compose up -d`
