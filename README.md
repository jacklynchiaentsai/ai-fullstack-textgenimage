# Full Stack AI Text to Image Generation App 
### Powered by OpenAI API's DALL-E model
Generate visually stunning AI images with your own prompts! Share it to the site, browse through generated images by other users, and download the images.   
([demo](https://www.youtube.com/watch?v=XzxFDBnQzyY))


## Application Architecture
| Architecture | Technologies|
| --- | --- |
| Frontend | React.js, Vite, TailwindCSS
| Backend | MongoDB (database), Cloudinary(cloud image storage), Express.js (APIs)
| AI | OpenAI API
            
## Running the app 💻
### 1) setting up .env file within server directory
register for MongoDB database, Cloudinary, and OpenAI API (paid service) to replace the following access keys    
structure your .env file like the following: 
```
OPENAI_API_KEY=""
MONGODB_URL=""

CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

### 2) server side 
on your terminal:
```
cd server
npm run start
```
### 3) client side
on your terminal:
```
cd client
npm run dev
```
## Acknowledgements
[Thank you to Javascript Mastery for the tutorial help!](https://www.jsmastery.pro)
