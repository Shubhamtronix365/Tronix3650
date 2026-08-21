# Tronix365 - 45-Day Embedded & IoT Internship Platform

A full-stack, production-ready event registration and seat management platform for the **45-Day Embedded & IoT Internship Program** by **Tronix365 Engineering Labs**.

This platform provides real-time seat availability tracking, dynamic tier pricing (Early Bird vs Standard), auto-chaining coupon validation, and payment gateway integration with PayU & Razorpay.

---

## 🌟 Key Features

### 🎨 Frontend (Client-Side)
- **Modern UI & Typography**: Styled with Google Font **Plus Jakarta Sans**, title-case navigation links, compact footer, and clean responsive design.
- **Real-Time Seat Tracking**: Server-Sent Events (SSE) stream live seat counts directly to the user's screen.
- **Dynamic 10-Seat Early Bird Pricing**:
  - **Super Early Bird**: First 10 registered students get **₹9,999** base fee.
  - **Standard Pass**: Registrations 11 to 150 get **₹14,999** base fee.
  - **Transparent Checkout**: 18% GST line item (+₹1,800 / +₹2,700) displayed clearly during billing before payment.
- **Integrated Payment Checkout**: Instant registration and payment processing via PayU & Razorpay.

### ⚙️ Backend (Server-Side)
- **FastAPI Framework**: Modular, high-speed Python APIs for registration, pricing, and seat management.
- **Database Sequence Reset & Auto-Increment**: Clean database reset tools that restart registration serial numbers back to `1`.
- **Chain-Reaction Coupon System**: Validating a 100% free/cash coupon code automatically generates a brand-new code in the database for the next user.
- **Automated Emails**: Instant email receipts sent upon successful enrollment.

---

## 📁 Project Structure

```text
Tronix3650/
|-- src/                      (All frontend React source code)
|   |-- components/           (Navbar, Hero, Highlights, Pricing, EnrollmentForm, PaymentModal, Footer)
|   |-- pages/                (Home, Success, Failure)
|   |-- index.css             (Tailwind & custom CSS styles)
|   |-- main.jsx              (React entry point)
|
|-- backend/                  (All backend Python FastAPI source code)
|   |-- app/
|   |   |-- models/           (SQLAlchemy database models: User, Seat, Coupon)
|   |   |-- routers/          (API endpoints: registration, payment, seats)
|   |   |-- services/         (Email & auxiliary services)
|   |   |-- database.py       (Database engine & Session configuration)
|   |   |-- main.py           (FastAPI app initialization)
|   |   |-- schemas.py        (Pydantic validation schemas)
|   |-- myenv/                (Python virtual environment)
|   |-- requirements.txt      (Backend Python dependencies)
|
|-- public/                   (Static assets, SVG logos, hero image)
|-- index.html                (HTML document & Google Fonts imports)
|-- package.json              (Frontend NPM dependencies)
|-- reset_seats.py            (Database reset script: clears DB & restarts serial at 1)
|-- generate_first_coupon.py  (Coupon generation script)
|-- test_early_bird.py        (Backend pricing test suite)
|-- tailwind.config.js        (Tailwind CSS theme configuration)
|-- vite.config.js            (Vite build configuration)
|-- .env                      (Environment variables)
|-- README.md                 (Project documentation)
```

---

## 🛠️ Tech Stack & Installed Packages

| Layer | Technology Used |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, Axios, React Router DOM, Plus Jakarta Sans |
| **Backend** | Python 3.14, FastAPI, Uvicorn, SQLAlchemy, Pydantic |
| **Database** | PostgreSQL (Production) / SQLite (Local Development) |
| **Payments** | PayU / Razorpay |
| **Real-Time** | Server-Sent Events (SSE) |

### 📦 Installed Frontend Packages (NPM)
- `axios` → API requests to FastAPI backend
- `react-router-dom` → Page routing (`/`, `/success`, `/failure`)
- `lucide-react` / `material-symbols` → Icons & UI elements

### 📦 Installed Backend Packages (Python)
- `fastapi` → Web API framework
- `uvicorn` → ASGI web server
- `sqlalchemy` → Database ORM
- `psycopg2-binary` → PostgreSQL database adapter
- `email-validator` → Email syntax and deliverability checks

---

## 🚀 Easy Setup & Run Instructions

### Step 1: Clone the Repository
```bash
git clone https://github.com/bhaveshburad729/Tronix3650.git
cd Tronix3650
```

### Step 2: Backend Setup (Python Virtual Environment)
1. Navigate to the backend directory and create/activate `myenv`:
   ```bash
   cd backend
   python -m venv myenv
   ```
2. Activate virtual environment:
   - **Windows (PowerShell)**:
     ```powershell
     .\myenv\Scripts\activate
     ```
   - **Linux/Mac**:
     ```bash
     source myenv/bin/activate
     ```
3. Install backend packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the backend API server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

### Step 3: Frontend Setup (React + Vite)
1. Open a new terminal at project root (`Tronix3650`):
   ```bash
   npm install
   ```
2. Start the frontend development server:
   ```bash
   npm run dev
   ```
3. Open your browser at `http://localhost:5173`.

---

## 🔑 Environment Variables (`.env`)

Create a `.env` file in the root folder:
```env
# Frontend API URL
VITE_API_URL=http://localhost:8000

# Database URL (Optional - defaults to SQLite for local development)
DATABASE_URL=postgresql://postgres:password@localhost:5432/tronix365

# Payment Gateway Keys
PAYU_KEY=your_payu_key
PAYU_SALT=your_payu_salt
PAYU_ENV=TEST
```

---

## 🛠️ Admin Commands & Scripts

### 1. Reset Database & Restart Serial ID from 1
Deletes all old registrations, clears seats, and restarts auto-increment IDs at `1`:
```bash
python reset_seats.py
```

### 2. Generate 1st Active Coupon Code
Generates a valid unused 100% free/cash coupon code:
```bash
python generate_first_coupon.py
```

### 3. Run Early Bird Pricing Test Suite
Verifies that the first 10 registered users receive ₹9,999 (+ GST) and the 11th user receives ₹14,999 (+ GST):
```bash
python test_early_bird.py
```

---

## 📞 Contact & Support

**Tronix365 Engineering Labs**  
- **Founder & CEO**: Mangesh Sanjay Adsule  
- 📍 **Address**: Tronix365, Near Datta Mandir, Sinhgad College Campus, Vadgaon Budruk, Pune, Maharashtra 411041  
- 📧 **Email**: admin@tronix365.in  
- 📱 **Phone**: +91 88301 53805  

---

&copy; 2026 Tronix365 Engineering Labs. All Rights Reserved.  
**Developed by BHAVESH BURAD**
