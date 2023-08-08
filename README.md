# Full Stack AI Text to Image Generation App 
### Powered by OpenAI API's DALL-E model
Generate visually stunning AI images with your own prompts! Share it to the site, browse through generated images by other users, and download the images. (demo here)

## Application Architecture
| Architecture | Tools|
| --- | --- |
| Frontend | React.js, Vite, TailwindCSS
| Backend | MongoDB (database), Cloudinary(cloud image storage), Express.js (APIs)
| AI | OpenAI API
            
## Running the app 💻
### setting up .env file within server directory
register for MongoDB database, Cloudinary, and OpenAI API (paid service) to replace the following access keys
structure your .env file: 
```
OPENAI_API_KEY=""
MONGODB_URL=""

CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

### server 
npm run start
### client
npm run dev
