git clone https://github.com/devratdave/gopay_payments_application
npm install
Run postgres either locally or on the cloud (neon.tech)
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
Create .env files
Update .env files everywhere with the right db url
Go to packages/db
npx prisma migrate dev
Go to apps/user-app , run npm run dev