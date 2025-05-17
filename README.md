
# Authentication System

A robust Node.js authentication system featuring email verification, password reset functionality, and secure session management using JWT tokens.

## 🚀 Features

- **User Authentication**
  - Secure signup with email verification
  - JWT-based authentication
  - HTTP-only cookies for enhanced security
  - Password hashing using bcryptjs
  - Logout functionality

- **Email Services**
  - Email verification system
  - Password reset functionality
  - Custom email templates
  - Integration with Mailtrap for testing

- **Security**
  - Password hashing
  - Secure session management
  - HTTP-only cookies
  - Token-based authentication
  - Rate limiting

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Email Service**: Mailtrap
- **Other Tools**: bcryptjs, cookie-parser

## 📝 API Endpoints

### Authentication Routes
```
POST /api/auth/signup - Register new user
POST /api/auth/signin - User login
POST /api/auth/logout - User logout
```

## 🔧 Project Structure
```
Backend/
├── controller/
│   └── auth.controller.js    # Authentication logic
├── db/
│   └── connectDB.js         # Database connection
├── mailtrap/
│   ├── emailTemplates.js    # Email templates
│   ├── emails.js           # Email sending logic
│   └── mailtrap.config.js  # Mailtrap configuration
├── models/
│   └── user.model.js       # User schema
├── routes/
│   └── auth.routes.js      # Route definitions
├── utils/
│   └── generateTokenAndSetCookie.js
└── server.js               # Main server file
```

## ⚙️ Setup and Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   MAILTRAP_TOKEN=your_mailtrap_api_token
   ```

3. Start the development server:
   ```bash
   npm run start
   ```

## 💻 Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server port (default: 3000) |
| MONGODB_URI | MongoDB connection string |
| JWT_SECRET | Secret key for JWT tokens |
| MAILTRAP_TOKEN | Mailtrap API token for email testing |

## 🔐 User Model

```javascript
{
  name: String,
  email: String,
  password: String,
  lastLogin: Date,
  isVerified: Boolean,
  resetPasswordToken: String,
  resetPasswordExpiresAt: Date,
  verificationToken: String,
  verificationExpiresAt: Date
}
```

## 📧 Email Templates

The system includes pre-designed email templates for:
- Email verification
- Password reset requests
- Password reset confirmation

## 🛡️ Security Features

- Passwords are hashed using bcryptjs
- JWT tokens for authentication
- HTTP-only cookies for token storage
- Email verification for new accounts
- Secure password reset flow
- Token expiration management

## 📄 License

ISC

