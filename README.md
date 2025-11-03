
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
    
#### 3. Testing Pagination Features (Read) 🔢

  - The application supports viewing a larger dataset and customizing the number of items shown per page.
    
    <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/21923102-0733-4916-b006-3a1d6a15d327" />
    
  - Pagination Options :	More brands have been added, and the total count is now 18. The user opens the "Items per page" dropdown, which shows options like 5, 10, 25, and 100.
    
  - Default View (10 items) :	The view is now set to 10 items per page, showing the first 1 - 10 of 18 brands.
    
    <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/425dcab3-df30-481b-9f5b-c01c566649ea" />
    
  - Navigate to Next Page (5 items)	: The user changes Items per page to 5. The view shows the first page: 1 - 5 of 18.
    
    <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/2e56b0d2-b62e-46db-a1a5-cccc7d519f8c" />
    
  - Second Page	The user clicks the Next Page arrow (or button, implicitly), advancing the view to the second page of results: 6 - 10 of 18.

#### 4. Update an Existing Brand (Update) ✏️

  - This section details the steps for modifying the name of an existing brand.
    
    - 1. Initiate Edit	From the Manage Brands table, the user clicks the Edit button next to the "Samsung" brand (which is currently lowercase/title case).
         
         <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/304f4d32-95bd-45f1-b967-ce7fb7e72f32" />
         
    - 2. Open Update Form	The user is taken to the "Update Brand" page. The input field is pre-filled with the current brand name, "Samsung"
         
         <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/73d29eca-2003-49b6-83a5-e55786f709cc" />
         
    - 3. Modify Name	The user changes the name in the input field from "Samsung" to the new value, "SAMSUNG" (uppercase).
         
         <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/d2332820-d8b2-4ebe-b7a7-3fbe68cd96a3" />
         
    - 4. Submit Update	The user clicks the Update button.
         
         <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/d200eb4b-5b30-4edd-9a6e-9a9d6caaa02b" />
         
    - 5. Confirmation	A success message, "Brand updated.", appears in a popup dialog.
         
         <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/0b0333d0-ea34-42ac-81aa-7b61f95318c6" />
         
    - 6. Verification	The user returns to the Manage Brands table. The brand name in the table is successfully updated to "SAMSUNG", confirming the edit operation.
         
         <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/581564b8-d2d5-40ab-9edd-34ddaeefb801" />

#### 5. Filter and Search Brands 🔎

 - The "Manage Brands" page includes a filter bar that allows users to search the table data based on brand name or ID.
   
   - 1. Identify Filter Bar	The filter bar, labeled Filter, is highlighted at the top of the brand list. The table shows a large list of items (1-5 of 18) before filtering.
        
        <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/45517fad-c370-4405-a8a0-8b9190199452" />
        
   - 2. Apply Search Term	The user enters the search term "Apple" into the filter bar.
        
        <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/db2a77d5-746c-441f-a354-f0f01369021b" />
        
   - 3. Filter Results	The table instantly filters the results, showing only the records that match the term. The table now only displays the "Apple" brand, and the pagination correctly updates to 1 - 1 of 1 item.
        
        <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/3293510a-6735-4712-a2a6-4e6d709d4c42" />

#### 6. Delete a Brand (Delete) 🗑️

 - This section details the steps required to permanently remove a brand from the application's database.
   
  - 1. Initiate Deletion	The user locates the brand they wish to delete (e.g., MI) in the Manage Brands table and clicks the corresponding Delete button.
       
       <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/20c51027-13fe-4317-819e-e1e2f19e7e60" />
       
  - 2. Confirmation	A confirmation dialog appears, displaying the message: "Brand Deleted".
       
       <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/31378ad9-fc01-4910-8fb7-6e45e96a853c" />
      
  - 3. Verification of Removal	The brand table automatically refreshes. The deleted brand (MI) is no longer present in the list.
       
       <img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/6d181503-0d54-4c86-be0c-4bae154ae3cf" />
      
  - 4. Data Count Update	The pagination count updates from 1 - 5 of 18 (as implied before deletion) to 1 - 5 of 17, confirming that one total record was successfully removed from the system.
# Inventory-management
