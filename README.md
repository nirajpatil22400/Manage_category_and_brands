
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

### Category Follow-

#### 1. View Categories (Read) 🧐

- The main interface is the "Manage Category" page, which allows users to view, filter, and page through existing categories.

  <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/7d8192a9-fb58-444b-bd89-d7c85e686d61" />

### 2. Add New Category (Create) ➕

- Users can add new categories by navigating to the "Add New Category" page via the "Add New Create" button.

  <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/23426798-3f6a-47c7-b430-98f37a7a06ed" />

  <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/4aad3201-f3a4-42d2-ab41-faf948b7143e" />

### 3. Update Category (Update) ✏️

- Existing categories can be modified by clicking the "Edit" button next to the category name in the table.

  <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/d5874108-b948-4f77-90e5-f01ade7cb8fd" />

  <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/036a0c60-3962-480a-96ee-28cb6265ec87" />

  <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/f2b6cad0-2a77-4a14-99a8-de7e38f024ff" />

### 4. Delete Category (Delete) 🗑️

- Users can remove a category by clicking the "Delete" button next to the desired item.

   <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/9f8e243f-2ec6-4034-af4e-35d707c20ef4" />

   <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/bfc8c4e6-8ff7-467c-a210-6a7589e6e7c2" />


### Brand Follow-

#### 1. Initial View and Existing Data (Read) 🧐
     
   - The initial "Manage Brands" view displays existing brands in a table format and shows the pagination options.
 
     <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/5a618439-664c-47ea-9d60-0f46f96c16f1" />

#### Add a New Brand (Create) ➕

   - This process demonstrates navigating to the creation page, submitting a new brand, and confirming the successful addition.

     <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/db459ac7-5b50-44ec-99ba-829ac025f42f" />

        - Navigation:	User clicks the "Add New Brand" button, leading to the "Add New Category" page (note the generic heading, but the context is brand creation).
          <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/fbbdacec-7cd8-44bf-86c9-a6bbc9534d02" />
        - Input:	The user enters "Apple" into the Name field.
          <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/b96a3ab6-a4aa-47fc-bf7c-748d2e029c6f" />
        - Confirmation:	After clicking Add, a popup appears confirming "Brand added".
          <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/b1b14ab9-dfb5-43a9-9f4a-b2431f58daa5" />
        - Verification:	The user is redirected back to the "Manage Brands" table, and Apple now appears as the 5th brand. The pagination changes to 1 - 5 of 5.
     

