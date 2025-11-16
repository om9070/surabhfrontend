📝 **Comprehensive Frontend Project Handover Document**

### 1. Project Overview

- **Project Name:** 10quaters
- **Purpose:** Convert Figma designs to React components and integrate with respective APIs. This project aims to deliver a seamless user experience by adhering to design specifications and ensuring robust API interactions.
- **Tech Stack:**
  - **Framework:** Next.js 14, chosen for its server-side rendering capabilities and ease of use with React.
  - **Styling:** Tailwind CSS, providing utility-first CSS for rapid UI development.
  - **State Management:** Zustand, selected for its minimalistic and scalable state management.
  - **Other Tools:**
    - **Axios:** For handling HTTP requests and managing API interactions.
    - **Formik:** Utilized for form management and validation.
    - **Lucide Icons:** For consistent and scalable iconography.

### 2. Project Setup

- **Repository URL:** [GitHub Repository](https://github.com/your-org/project-name)
- **Setup Instructions:**
  1. **Clone the repository:**
     ```bash
     git clone https://github.com/your-org/project-name.git
     ```
  2. **Navigate to the project directory:**
     ```bash
     cd project-name
     ```
  3. **Install dependencies:**
     ```bash
     npm install
     ```
  4. **Run the development server:**
     ```bash
     npm run dev
     ```
     - The application will be available at `http://localhost:3000`.

### 3. Project Structure

- **/app**: Contains pages and routes using Next.js App Router. Each page corresponds to a route in the application.
- **/components**: Houses reusable UI components, ensuring consistency across the application.
- **/lib**: Includes utility functions and API calls, centralizing logic for reuse and maintainability.
- **/types**: Contains TypeScript types and interfaces, promoting type safety and reducing runtime errors.
- **/stores**: Manages state using Zustand, providing a global state accessible throughout the application.
- **/hooks**: Custom React hooks for various functionalities, encapsulating logic for reuse.
- **/api**: API-related code and configurations, handling data fetching and server communication.
- **/validation**: Validation logic for forms and data, ensuring data integrity and user input validation.
- **/configs**: Configuration files for different environments, allowing easy switching between development, staging, and production.
- **/public**: Static assets like images and fonts, accessible directly via URLs.

### 4. Completed Features

#### a. Frontfacing Website

- **Pages:** Homepage, For Brands, Categories, Brands, Stores, Contacts, Join, and Login.
- **Design:** Implemented as per Figma designs, ensuring pixel-perfect accuracy and responsiveness.

#### b. Dashboard

- **Features:**
  - Login and Signup with API integration, providing secure authentication.
  - Brands Creation and Editing, allowing dynamic content management.
  - User Profile Creation and Editing, enabling personalized user experiences.

#### c. Customize Shop

- **Customization:** UI for styles, categories, sales, and more as per Figma designs, offering a tailored shopping experience.

#### d. Storefront UI

- **Customization:** Shop storefront sale, who we are, and get in touch sections as per Figma designs, enhancing brand storytelling.

#### e. Checkout

- **Steps:**
  - Login/Signup, Billing info, Payment Delivery, and Confirmation as per Figma designs, streamlining the purchase process.

### 5. Design References

- **Design link:** [Adobe XD Design](https://xd.adobe.com/view/3f97803d-a8fa-4c8f-b840-0caff747f536-6ac4/)
- **Design System:** Adheres to ShadCN design principles, ensuring a cohesive and modern aesthetic.

### 6. Additional Notes

- **Axios:** Instance includes auth token handling, simplifying secure API requests.
- **Design:** Components follow ShadCN design principles, ensuring a cohesive and modern aesthetic.
- **Forms:** Implemented using Formik, providing robust form handling and validation.
- **Data Fetching:** Utilizes Tanstack Query for efficient data management, ensuring optimal performance and user experience.

### 7. Contact Information

- **For questions, contact:** humluchetu@gmail.com
