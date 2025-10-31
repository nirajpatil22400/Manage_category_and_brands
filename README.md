E-Commerce Inventory CRUD Management System🚀 Project OverviewThis is a Full-Stack Application designed for managing Inventory Categories and Brands.
It implements complete CRUD (Create, Read, Update, Delete) functionality.
The architecture is a Single Page Application (SPA) using Angular and a RESTful API backend.
Purpose: To demonstrate professional development using a modern, type-safe stack.
🛠️ Technical Stack & Architectural SpecificsFrontend Technologies (Client - Angular)Framework: Angular (Component-based SPA architecture).
Language: TypeScript (Ensures static typing and robust code).
UI Components: Angular Material (Professional UI components).
Styling: Tailwind CSS (Utility-first framework for rapid, responsive design).
Preprocessor: Sass (SCSS) (Used for modular and advanced styling, confirmed by custom-theme.scss inclusion).
CLI: Angular CLI v20.3.6 (Manages development, build, and testing processes).
Backend Technologies (Server)Runtime: Node.js (Asynchronous, event-driven architecture).
Framework: Express.js (Minimalist framework for API routing).
Database: MongoDB (Flexible NoSQL document database).
ORM/ODM: Mongoose (Assumed layer for data modeling and validation).
Key Functionality: RESTful EndpointsResourceOperationHTTP MethodEndpoint (Example)Category/BrandCreatePOST/api/categoriesCategory/BrandRead AllGET/api/brandsCategory/BrandRead By IDGET/api/categories/:idCategory/BrandUpdatePUT/api/brands/:idCategory/BrandDeleteDELETE/api/categories/:id⚙️ Installation and Setup GuidePrerequisitesNode.js (v18.x or higher)npm (Node Package Manager)MongoDB (A running instance)Angular CLI (npm install -g @angular/cli)
Step 1: Clone the RepositoryBashgit clone <your-repository-url>
cd <your-repository-name>
Step 2: Backend Setup (Server)Navigate to the server directory:Bashcd server
Install dependencies:Bashnpm install
Configuration (.env): Create a .env file with the following:Code snippetMONGO_URI="mongodb://localhost:27017/inventory_crud_db"
PORT=3000
Step 3: Frontend Setup (Client)Navigate to the project root (where package.json is located):Bashcd ..
Install dependencies:Bashnpm install
▶️ Running the ApplicationThe API and the client must be run in separate terminal windows.
Step 1: Start the Backend API ServerTerminal 1 (in server/):Bashnpm start
# Server starts on http://localhost:3000/
Step 2: Start the Frontend Angular ClientTerminal 2 (in project root):Bashng serve --open
# Client starts on http://localhost:4200/
The Angular client will automatically communicate with the backend API to handle all CRUD operations.
