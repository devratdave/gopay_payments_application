-- CreateEnum
CREATE TYPE "OnRampStatus" AS ENUM ('Success', 'Failure', 'Processing');

-- CreateTable
CREATE TABLE "OnRampTransactions" (
    "id" TEXT NOT NULL,
    "status" "OnRampStatus" NOT NULL,
    "token" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "OnRampTransactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Balance" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "locked" INTEGER NOT NULL,

    CONSTRAINT "Balance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OnRampTransactions_token_key" ON "OnRampTransactions"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Balance_userId_key" ON "Balance"("userId");

-- AddForeignKey
ALTER TABLE "OnRampTransactions" ADD CONSTRAINT "OnRampTransactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Balance" ADD CONSTRAINT "Balance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
