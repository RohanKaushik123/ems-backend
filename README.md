# EMS Backend

Employee Management System Backend built with Node.js and Express.

## Features

- RESTful API for employee management
- CRUD operations for employee data
- Request logging middleware
- Easy-to-use routing structure
- Modular controller architecture

## Project Structure

```
ems-backend/
├── index.js                    # Application entry point
├── package.json               # Project dependencies
├── controllers/
│   └── employeeController.js   # Business logic for employees
├── routes/
│   └── employeeRoutes.js       # API route definitions
├── middleware/
│   └── loggerMiddleware.js     # Request logging middleware
├── data/
│   └── employees.js            # Sample employee data
└── .gitignore                 # Git ignore rules
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RohanKaushik123/ems-backend.git
cd ems-backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node index.js
```

The server will start on `http://localhost:3000` (or your configured port).

## Available Scripts

- `node index.js` - Run the development server
- `npm test` - Run tests (if configured)
- `npm run dev` - Run with nodemon for development (install separately)

## API Endpoints

### Employees

- `GET /api/employees` - Get all employees
- `GET /api/employees/:id` - Get employee by ID
- `POST /api/employees` - Create new employee
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee

## Technologies Used

- **Express.js** - Web framework
- **Node.js** - JavaScript runtime
- **Middleware** - Custom logging and request handling

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please reach out to [RohanKaushik123](https://github.com/RohanKaushik123)