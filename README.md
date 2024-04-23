1. git clone https://github.com/devratdave/gopay_payments_application
2. npm install
3. Run postgres either locally or on the cloud (neon.tech)
4. docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
5. Create .env files
6. Update .env files everywhere with the right db url
7. Go to packages/db
8. npx prisma migrate dev
9. Go to apps/user-app , run npm run dev