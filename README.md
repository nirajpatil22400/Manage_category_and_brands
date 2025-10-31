
## E-Commerce Inventory CRUD Management System

## 🚀 Project Overview 

  - This is a Full-Stack Application designed for managing Inventory Categories and Brands.

 - It implements complete CRUD (Create, Read, Update, Delete) functionality, adhering to RESTful API principles.
 
 - The architecture is a Single Page Application (SPA) using Angular and a Node.js/Express.js API backend.
   
 - Purpose: To demonstrate professional development using a modern, type-safe stack.
 
 - 🛠️ Technical Stack & Architectural Specifics## Frontend Technologies (Client - Angular)
   
 - Framework: Angular (Component-based SPA architecture).
   
 - Language: TypeScript (Ensures static typing and robust code quality).
   
 - UI Components: Angular Material (Professional, high-quality UI components).
   
 - Styling: Tailwind CSS (Utility-first framework for rapid, responsive design).
   
 - Preprocessor: Sass (SCSS) (Used for modular and advanced styling, confirmed by custom-theme.scss inclusion).
   
 - CLI: Angular CLI v20.3.6 (Manages development, build, and testing).## Backend Technologies (Server)
   
 - Runtime: Node.js (Asynchronous, event-driven architecture).
   
 - Framework: Express.js (Minimalist framework for API routing).
   
 - Database: MongoDB (Flexible NoSQL document database).
   
 - ORM/ODM: Mongoose (Assumed layer for data modeling and validation).
 
 ## Key Functionality: 
 
 - RESTful EndpointsResourceOperationHTTP MethodEndpoint (Example)Category/BrandCreatePOST/api/categoriesCategory/BrandRead AllGET/api/brandsCategory/BrandRead By IDGET/api/categories/:idCategory/BrandUpdatePUT/api/brands/:idCategory/BrandDeleteDELETE/api/categories/:id
 
 - ⚙️ Installation and Setup Guide## PrerequisitesNode.js (v18.x or higher)npm (Node Package Manager)MongoDB (A running instance)Angular CLI (npm install -g @angular/cli)
   
#### Step 1: Clone the RepositoryBashgit clone <your-repository-url>

- cd your-repository-name

#### Step 2: Backend Setup (Server)Navigate to the server directory:Bashcd server 

- Install dependencies:Bashnpm install

- Configuration (.env): Create a .env file in the server/ directory:MONGO_URI="mongodb://localhost:27017/inventory_crud_db"

- PORT=3000

#### Step 3: Frontend Setup (Client)Navigate to the project root:Bashcd ..

- Install dependencies:Bashnpm install
  
- ▶️ Running the ApplicationThe API and the client must be run in two separate terminal windows.## Step 1: Start the Backend API ServerTerminal 1 (in server/ directory):Bashnpm start

-Server starts on http://localhost:3000/

#### Step 4: Start the Frontend Angular ClientTerminal 2 (in project root/client directory):Bashng serve --open

- Client starts on http://localhost:4200/

- The Angular client automatically communicates with the backend API to handle all CRUD operations.

### Follow-

#### 1. View Categories (Read) 🧐

- The main interface is the "Manage Category" page, which allows users to view, filter, and page through existing categories.

  <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/7d8192a9-fb58-444b-bd89-d7c85e686d61" />

