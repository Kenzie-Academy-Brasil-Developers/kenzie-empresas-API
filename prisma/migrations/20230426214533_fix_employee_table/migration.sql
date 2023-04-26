-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_employees" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "company_id" TEXT,
    "department_id" TEXT,
    CONSTRAINT "employees_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "employees_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_employees" ("company_id", "department_id", "email", "id", "is_admin", "name", "password") SELECT "company_id", "department_id", "email", "id", "is_admin", "name", "password" FROM "employees";
DROP TABLE "employees";
ALTER TABLE "new_employees" RENAME TO "employees";
CREATE UNIQUE INDEX "employees_id_key" ON "employees"("id");
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
