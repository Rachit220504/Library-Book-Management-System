# Library-Book-Management-System

This project is a web-based Library Management System (LMS) designed to automate library functions such as book management, user management, and book circulation. Developed using PHP, MySQL, and a responsive front-end with CSS frameworks, it provides a comprehensive solution for library operations.

Table of Contents
Features
Technology Stack
Installation Instructions
Usage
Contributing
Features
1. User Management
User Management: Registration, login, and profile management
User Profile: Manage and update personal user information.
2. Authentication & Authorization
Secure Login: Password encryption and session management for secure access.
3. Book Management
CRUD Operations: Add, update, and delete book records.
Search & Filter: Search books by title, author, keywords, and category.
Real-time Availability: Tracks the availability status of each book.
4. Circulation Management
Issuing & Returning: Library staff can issue and return books using the book's ISBN.
Overdue Management: Automated overdue tracking and fine calculation.
Reports: Generates detailed circulation reports including overdue fines.
Technology Stack
Frontend: HTML5, CSS3, JavaScript, Bootstrap for responsive design
Backend: PHP for server-side logic, MySQL for database management
Web Server: XAMPP (Apache, MySQL, PHP)
Installation Instructions
Prerequisites:
Install XAMPP for Apache and MySQL.
Clone the repository:
git clone git clone https://github.com/Shivam-KumarSingh/library-management-system.git
Create a MySQL database
Go to phpMyAdmin and create a database.
Configure the database connection in the config.php file with your local database credentials.
Steps to Run:
Start Apache and MySQL in XAMPP.
Place the project folder in the htdocs directory (inside the XAMPP installation folder).
Open the project in your browser:
http://localhost/DBMS_PROJ/
Usage
Administrator: Manages all aspects of the system including users and books.
Librarian: Manages book circulation (issue and return).
Student: Searches for available books and manages their borrowing history.
Key Functionalities:
Issue a Book: Enter the ISBN to issue a book.
Return a Book: Track due dates and calculate overdue fines.
User Profiles: Admin can add new users and assign roles.
Contributing
We welcome contributions! To contribute:

Fork the repository.
Create a new branch:
git checkout -b feature/your-feature-name
Commit your changes:
git commit -m "Add your feature"
Push the changes:
git push origin feature/your-feature-name
Open a pull request.
Contact
Feel free to reach out if you have any questions or suggestions. You can contact us at rachitchandekar2204@gmail.com
