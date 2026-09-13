# MATCHFOUND Backend API

🎮 Gaming Friend Finder Backend - Node.js + Express + PostgreSQL

## 📋 Setup Instructions

### 1. **Install Dependencies**
```bash
npm install
```

### 2. **Setup PostgreSQL Database**

#### Windows (Using PostgreSQL installer):
- Install PostgreSQL from https://www.postgresql.org/download/windows/
- Run pgAdmin (comes with installer)
- Create new database `matchfound_db`
- Run the SQL setup script:
```bash
psql -U postgres -f db_setup.sql
```

#### macOS (Using Homebrew):
```bash
brew install postgresql
brew services start postgresql
createdb matchfound_db
psql matchfound_db < db_setup.sql
```

#### Linux (Ubuntu/Debian):
```bash
sudo apt-get install postgresql postgresql-contrib
sudo -u postgres createdb matchfound_db
psql -U postgres -d matchfound_db -f db_setup.sql
```

### 3. **Configure Environment Variables**
Copy `.env.example` to `.env` and update:
```bash
cp .env.example .env
```

Then edit `.env`:
```
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/matchfound_db
JWT_SECRET=your_super_secret_key_here_123456
NODE_ENV=development
```

### 4. **Start Backend Server**

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

Server should run at `http://localhost:5000`

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - สมัครสมาชิก
- `POST /api/auth/login` - เข้าสู่ระบบ

### Users
- `GET /api/users/search?game=Valorant&rank=Immortal` - ค้นหาผู้เล่น
- `GET /api/users/:id` - ดูโปรไฟล์
- `PUT /api/users/:id` - อัปเดตโปรไฟล์
- `POST /api/users/:id/friend-request` - ส่งคำขอเป็นเพื่อน

### Chat
- `GET /api/chat/:userId` - ดึงประวัติแชท
- `POST /api/chat/send` - ส่งข้อความ

## 🔌 Socket.io Events

- `join_room` - เข้าห้องแชท
- `send_message` - ส่งข้อความแบบ real-time
- `receive_message` - รับข้อความแบบ real-time

## 🧪 Test API with cURL

```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Search users
curl http://localhost:5000/api/users/search?game=Valorant
```

## 📦 File Structure
```
backend/
├── server.js              # Main server file
├── package.json           # Dependencies
├── .env.example           # Environment config template
├── .gitignore            # Git ignore file
├── db_setup.sql          # PostgreSQL schema
├── config/
│   └── database.js       # Database connection
├── middleware/
│   └── auth.js           # JWT authentication
├── routes/
│   ├── auth.js           # Authentication routes
│   ├── users.js          # User management
│   └── chat.js           # Chat routes
└── README.md
```

## 🚀 Next Steps

1. ✅ Backend setup complete
2. **Connect Frontend** - Update frontend to use API endpoints
3. **Add Game APIs** - Integrate Riot/Blizzard APIs for rank verification
4. **Real-time Chat** - Test Socket.io chat
5. **Deploy** - Deploy to Heroku or AWS

## 🛠️ Troubleshooting

**Connection refused error:**
- Make sure PostgreSQL is running
- Check DATABASE_URL in .env

**CORS error:**
- Update Socket.io CORS origin in server.js
- Set frontend URL in CORS middleware

**Port already in use:**
- Change PORT in .env
- Or kill process: `lsof -ti:5000 | xargs kill -9`

## 📚 Resources
- Express.js: https://expressjs.com
- PostgreSQL: https://www.postgresql.org
- Socket.io: https://socket.io
- JWT: https://jwt.io
