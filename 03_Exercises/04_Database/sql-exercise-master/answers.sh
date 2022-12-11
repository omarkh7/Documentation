1-SELECT name FROM students;
2-SELECT * FROM students WHERE Age>'30';
3-SELECT name FROM students WHERE Gender='F' AND Age='30';
4-SELECT Points FROM students WHERE name='Alex';
5-INSERT INTO students  VALUES(7,'Omar',24,'M',800);
6-UPDATE students SET Points=400 WHERE id=2;
7-UPDATE students SET Points=100 WHERE id=1;

Creating Table:

CREATE TABLE graduates(
ID INT identity(1,1) NOT NULL PRIMARY KEY,
Name TEXT NOT NULL UNIQUE,
Age INT,
Gender TEXT,
Points INT,
Graduation TEXT
)
10-INSERT INTO graduates (ID,Name,Age,Gender,Points)SELECT * FROM students WHERE ID=4;
11-UPDATE graduates SET Graduation='08/09/2018' WHERE ID=4;
12-DELETE FROM students WHERE ID=4;

Joins:

14-
SELECT e.ID, e.Name, e.Company,c.Date
FROM employees e
INNER JOIN companies c ON e.Company=c.Name

15-
SELECT e.Name
FROM employees e
INNER JOIN companies c ON e.Company=c.Name
WHERE Date<2000

16-
SELECT e.Company
FROM employees e
INNER JOIN companies c ON e.Company=c.Name
WHERE Role='Graphic Designer'
