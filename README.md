# Direct Help

**[Direct Help](https://direct-help.vercel.app/uk)**

## Description:
Direct Help is a volunteer-driven project created to support Ukrainian military personnel.
The website is designed for transparent donation collection, managing assistance requests, attracting new partners, and publishing reports on delivered aid.
The site supports three languages 🌍 — Ukrainian, English, and German — to engage international audiences.

## Design and Layout:
The interface is fully responsive 🖥️📱, optimized for screen widths from 375px to 1440px. It features animations, carousels, custom UI components, and Stripe integration for a modern user experience.

## This project is created with:
- Next.js 15 (App Router + Turbopack)
- React 19
- TypeScript
- Tailwind CSS 4
- react-hook-form + zod (for forms and validation)
- nodemailer (for email notifications)
- Stripe (for payment processing)
- next-intl (for localization)
- Embla Carousel (for image sliders)
- ESLint (code linting)
- React Select (custom selects)

## Pages and Features:

### 🏠 Home Page
![-GoogleChrome2025-05-1616-38-37-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/a576d3e3-761f-4040-a58c-ad579ac73a29)
![-GoogleChrome2025-05-1616-38-37-ezgif com-video-to-gif-converter (2)](https://github.com/user-attachments/assets/ebd6e472-4a0e-42b5-b699-a8aad7967c5d)
![-GoogleChrome2025-05-1616-38-37-ezgif com-video-to-gif-converter (3)](https://github.com/user-attachments/assets/a8ccdebc-f68f-47ad-92a6-2b0084be6168)
![-GoogleChrome2025-05-1616-38-37-ezgif com-video-to-gif-converter (4)](https://github.com/user-attachments/assets/cf74019d-e540-4009-851f-432b8c2200d9)
### 💌 Support
![-GoogleChrome2025-05-1616-40-04-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/640ceebb-0b58-4624-84fb-226e9c3357d7)
### 🤝 New Partners
![-GoogleChrome2025-05-1616-41-18-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/286158fe-2ba6-4fcf-94b9-19bcac7dc445)
### 💳 Donate
![-GoogleChrome2025-05-1616-42-36-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/110a6113-0e18-4c69-a795-d83f9a660eac)
### 📦 Reporting
![-GoogleChrome2025-05-1616-43-33-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/d0535979-9499-4455-81e8-f17f7d43458c)
### ℹ️ About
![-GoogleChrome2025-05-1616-44-31-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/204c0b52-fe9e-4326-88b6-0ee5016a3692)
## Getting Started (Local Development)
### 🔧 Install dependencies:
```
git clone https://github.com/kazymirT/direct-help.git
cd direct-help
npm install
```
### ▶️ Start development server:
``` npm run dev ```
#### Visit the app at:
```👉 http://localhost:3000 ```

## Production Build
```
npm run build
npm run start
```
#### App will be served at:
``` 👉 http://localhost:3000 ```

## Scripts:
| Command         | Description               |
| --------------- | ------------------------- |
| `npm run dev`   | Run development server    |
| `npm run build` | Build the project         |
| `npm run start` | Start production server   |
| `npm run lint`  | Lint the code with ESLint |

## 🌐 Environment Variables (.env)

To run the project properly, create a `.env` file at the root of the project with the following variables:

```env
Email configuration (via nodemailer)
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASSWORD=

EMAIL_SEND_FROM=   # Sender email address
EMAIL_SEND_TO=     # Destination email address for form submissions

Stripe (donation payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```
⚠️ Without these variables, email forms and Stripe payments will not work.

