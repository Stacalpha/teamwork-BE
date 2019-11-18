DELETE FROM "Employees"
WHERE "id" = $1::uuid OR "email" = $2;
