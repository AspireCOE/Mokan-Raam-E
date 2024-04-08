create database Aspire;
show databases;
use Aspire;
CREATE TABLE Programmer (
    name VARCHAR(8) NOT NULL,
    dob DATE NOT NULL,
    doj DATE NOT NULL,
    sex VARCHAR(1) NOT NULL,
    prof1 VARCHAR(8),
    prof2 VARCHAR(8),
    salary INT NOT NULL
);

INSERT INTO Programmer (name, dob, doj, sex, prof1, prof2, salary)
VALUES ('somdutt', '1966-04-21', '1992-04-21', 'm', 'pascal', 'basic', 3200);
INSERT INTO Programmer VALUES ('mary', '1973-05-11','1994-06-05', 'f' ,'cobol','medium',5000);
INSERT INTO Programmer VALUES ('lily', '1971-02-01','1993-06-25', 'f' ,'Hindi','medium',5000);
INSERT INTO Programmer VALUES ('Jackson', '1972-05-19','1994-02-02', 'm' ,'spain','medium',4000);
INSERT INTO Programmer VALUES ('david', '1969-11-25', '1995-07-09', 'm' ,'greek','hard',4500);
INSERT INTO Programmer VALUES ('elly', '1970-10-05', '1996-05-14', 'f' ,'arabic','hard',3500);
INSERT INTO Programmer VALUES ('grey', '1977-11-25', '1992-12-13', 'm' ,'spain','basic',5500);
INSERT INTO Programmer VALUES ('heman', '1971-08-12', '1994-08-19', 'n' ,'arabic','hard',6500);
INSERT INTO Programmer VALUES ('praba', '1969-12-01', '1993-04-22', 'f' ,'Hindi','basic',3000);


CREATE TABLE Software (
    name VARCHAR(8) NOT NULL,
    title VARCHAR(20) NOT NULL,
    dev_in VARCHAR(8) NOT NULL,
    scost int,
    dcost INT,
    sold INT
);

INSERT INTO Software (name, title, dev_in, scost, dcost, sold)
VALUES ('somdutt', 'parachutes', 'basic', 399.95, 6000, 43);

INSERT INTO Software VALUES ('lily','Shopping','medium',405.85,5200,55),
							('Jackson','laptop','hard',555.28,9500,34),
							('david','Jacket','medium',350.69,3500,41),
							('elly','Scanner','medium',405.85,5200,55),
							('lily','Shoes','medium',600.40,6800,25);

CREATE TABLE Studies (
    name VARCHAR(8) NOT NULL,
    splace VARCHAR(9) NOT NULL,
    course VARCHAR(5) NOT NULL,
    ccost VARCHAR(5) NOT NULL
);

INSERT INTO Studies (name, splace, course, ccost)
VALUES ('somdutt', 'sabhari', 'pgdca', '4500'),
       ('devdutt', 'bdps', 'dcs', '5000'),
       ('Jackson', 'fgpa', 'ece', '6000'),
       ('david', 'dsps', 'eee', '3000'),
       ('lily', 'uion', 'cse', '4000');
       
-- Query I **************************************************************************************************************

SELECT AVG(scost) AS average_selling_cost
FROM Software
WHERE dev_in = 'pascal';

SELECT name, FLOOR(DATEDIFF('2024-01-01', dob) / 365.25) AS age
FROM Programmer;

SELECT MAX(sold) AS max_copies_sold
FROM Software;

SELECT name, dob
FROM Programmer
WHERE EXTRACT(MONTH FROM dob) = 1;

SELECT MIN(ccost) AS lowest_course_fee
FROM Studies;

SELECT COUNT(*)
FROM Studies
WHERE course = 'pgdca';

SELECT SUM(scost * sold) AS revenue
FROM Software
WHERE dev_in = 'c';

SELECT *
FROM Software
WHERE name = 'ramesh';

SELECT COUNT(*)
FROM Studies
WHERE splace = 'sabhari';

SELECT *
FROM Software
WHERE sold > 20000;

SELECT title, CEIL(dcost / scost) AS copies_to_recover_cost
FROM Software;

SELECT MAX(scost) AS costliest_software_price
FROM Software
WHERE dev_in = 'basic';

SELECT name, title, dev_in, scost, dcost, sold
FROM Software
WHERE sold * scost >= dcost;

SELECT COUNT(*)
FROM Software
WHERE dev_in = 'dbase';

SELECT COUNT(*)
FROM Studies
WHERE splace = 'paragathi';

SELECT COUNT(*)
FROM Studies
WHERE ccost BETWEEN '5000' AND '10000';

SELECT AVG(ccost) AS average_course_fee
FROM Studies;

SELECT *
FROM Programmer
WHERE prof1 = 'c' OR prof2 = 'c';

SELECT COUNT(*)
FROM Programmer
WHERE prof1 IN ('cobol', 'pascal') OR prof2 IN ('cobol', 'pascal');

SELECT COUNT(*)
FROM Programmer
WHERE prof1 NOT IN ('pascal', 'c') AND prof2 NOT IN ('pascal', 'c');

SELECT MAX(EXTRACT(YEAR FROM CURDATE()) - EXTRACT(YEAR FROM dob)) AS oldest_male_age
FROM Programmer
WHERE sex = 'm';

SELECT MAX(YEAR(CURRENT_DATE) - YEAR(dob)) AS oldest_male_age
FROM Programmer
WHERE sex = 'm';

SELECT AVG(YEAR(CURRENT_DATE) - YEAR(dob)) AS average_female_age
FROM Programmer
WHERE sex = 'female';

SELECT name, TIMESTAMPDIFF(YEAR, doj, CURDATE()) AS experience_in_years
FROM Programmer
ORDER BY experience_in_years DESC;

SELECT name, dob
FROM Programmer
WHERE MONTH(dob) = MONTH(CURDATE());

SELECT COUNT(*)
FROM Programmer
WHERE sex = 'female';

SELECT DISTINCT prof1 AS language
FROM Programmer
WHERE sex = 'male'
UNION
SELECT DISTINCT prof2
FROM Programmer
WHERE sex = 'male';

SELECT AVG(salary) AS average_salary
FROM Programmer;

SELECT COUNT(*)
FROM Programmer
WHERE salary BETWEEN 2000 AND 4000;

SELECT *
FROM Programmer
WHERE prof1 NOT IN ('clipper', 'cobol', 'pascal')
AND prof2 NOT IN ('clipper', 'cobol', 'pascal');

SELECT COUNT(*)
FROM Programmer
WHERE sex = 'female'
AND (prof1 = 'c' OR prof2 = 'c')
AND TIMESTAMPDIFF(YEAR, dob, CURDATE()) > 24;

SELECT *
FROM Programmer
WHERE TIMESTAMPDIFF(YEAR, doj, CURDATE()) < 1;

SELECT *
FROM Programmer
WHERE TIMESTAMPDIFF(YEAR, doj, CURDATE()) = 2;

SELECT name, (dcost - (scost * sold)) AS amount_to_be_recovered
FROM Software
WHERE dcost > (scost * sold);

SELECT *
FROM Software
WHERE sold = 0;

SELECT scost
FROM Software
WHERE name = 'mary';

SELECT DISTINCT splace
FROM Studies;

SELECT COUNT(DISTINCT course) AS number_of_courses
FROM Studies;

SELECT name
FROM Programmer
WHERE LENGTH(name) - LENGTH(REPLACE(name, 'a', '')) = 2;

SELECT name
FROM Programmer
WHERE LENGTH(name) <= 5;

SELECT COUNT(*)
FROM Programmer
WHERE sex = 'female'
AND (prof1 = 'cobol' OR prof2 = 'cobol')
AND TIMESTAMPDIFF(YEAR, doj, CURDATE()) > 2;

SELECT MIN(LENGTH(name)) AS shortest_name_length
FROM Programmer;

SELECT AVG(dcost) AS average_development_cost
FROM Software
WHERE dev_in = 'cobol';

SELECT name, sex, dob, doj
FROM Programmer
WHERE DAY(LAST_DAY(dob)) = DAY(dob);

SELECT SUM(salary) AS total_salary_paid
FROM Programmer
WHERE sex = 'male' AND (prof1 != 'cobol' AND prof2 != 'cobol');

SELECT title, scost, dcost, (scost - dcost) AS cost_difference
FROM Software
ORDER BY cost_difference DESC;

SELECT name, dob, doj
FROM Programmer
WHERE MONTH(dob) = MONTH(doj);

-- Query II **************************************************************************************************************

-- 1 
SELECT dev_in , COUNT(dev_in) as Number_of_packages 
FROM Software
GROUP BY dev_in;

-- 2 
SELECT name , COUNT(*) as Number_of_packages 
FROM Software
GROUP BY name;

-- 3
SELECT sex, COUNT(*) as  Count_of_Persons
FROM Programmer
GROUP BY sex;

-- 4
SELECT dev_in, MAX(dcost) as COSTLIEST_packages ,MAX(sold) as HIGEST_selling
FROM Software 
GROUP BY dev_in;

-- 5
 SELECT YEAR(dob) as BIRTH_year, COUNT(*) as Number_of_peoples
 FROM Programmer
 GROUP BY BIRTH_year;
 
 -- 6
SELECT YEAR(doj) as JOINED_year, COUNT(*) as Number_of_peoples
FROM Programmer
GROUP BY JOINED_year;

-- 7
 SELECT MONTH(dob) as BIRTH_month, COUNT(*) as Number_of_peoples
 FROM Programmer
 GROUP BY BIRTH_month; 
 
-- 8
 SELECT MONTH(doj) as JOINED_month, COUNT(*) as Number_of_peoples
 FROM Programmer
 GROUP BY JOINED_month; 
 
-- 9
SELECT prof1 as Language, COUNT(*) as Count_of_persons
FROM Programmer 
GROUP BY Language;

-- 10
SELECT prof2 as Language, COUNT(*) as Count_of_persons
FROM Programmer 
GROUP BY Language;

-- 11
SELECT salary , COUNT(*) as Count_of_persons
FROM Programmer 
GROUP BY salary;

-- 12
SELECT splace, COUNT(*) as Count_of_student
FROM Studies
GROUP BY splace;

-- 13
SELECT course, COUNT(*) as Count_of_student
FROM Studies
GROUP BY course;

-- 14
SELECT dev_in, SUM(dcost) as Total_development_cost
FROM Software
GROUP BY dev_in;

-- 15
SELECT dev_in, SUM(scost) as Total_selling_cost
FROM Software
GROUP BY dev_in;

-- 16
SELECT dev_in, SUM(scost) as Cost_of_package_developed
FROM Software
GROUP BY dev_in;

-- 17
SELECT dev_in, SUM(scost*sold) as Toatl_sales_value
FROM Software
GROUP BY dev_in;

-- 18
SELECT name, COUNT(*) as Number_of_package
FROM Software
GROUP BY name; 

-- 19
SELECT name, SUM(scost * sold) as Sale_cost_package
FROM Software
GROUP BY name; 

-- 20
SELECT name, MAX(dev_in) as Costly, MIN(dev_in) as Cheapest
FROM Software 
GROUP BY name;

-- 21
SELECT dev_in as Language,
	   AVG(dcost) as AVG_dcost,
       AVG(scost) as AVG_scost, 
	   AVG(sold) as AVG_sold,
       AVG(scost / sold) as AVG_price_per_copy
FROM Software
GROUP BY Language;

--  22
SELECT splace as Institute, COUNT(distinct course) as Count_course, AVG(ccost) as AVG_ccost
FROM Studies
GROUP BY Institute;

-- 23
SELECT splace as Institute, COUNT(*) as Number_of_student
FROM Studies
GROUP BY Institute;

-- 24
select name as Programmer_name,sex as Gender 
FROM programmer;

-- 25 
SELECT name as Programmer_name,title as Package
From Software;

-- 26
SELECT dev_in as Language,  COUNT(*) as Number_of_package 
FROM Software 
GROUP BY dev_in;

-- 27
SELECT dev_in as Language,  COUNT(*) as Number_of_package 
FROM Software 
WHERE dcost < 1000
GROUP BY dev_in;

-- 28
SELECT dev_in as Language,  AVG(scost)-AVG(dcost) as AVG_diff_sc
FROM Software 
GROUP BY dev_in;

-- 29
SELECT name, SUM(scost) as Total_scost,
	   SUM(dcost) as Total_dcost,
       dcost-(scost*sold) as Amount_tobe_recovered
FROM Software
WHERE dcost>(scost*sold)
GROUP BY dev_in;

-- 30   
SELECT MAX(salary) as HighestSal, MIN(salary) as LowestSal,AVG(salary) as AVGSal
FROM Programmer
WHERE salary>2000;

-- Query III **************************************************************************************************************

-- 1
 SELECT name
 FROM Programmer
 WHERE (prof1 = 'c' or prof2 = 'c') 
 ORDER BY salary DESC LIMIT 1 ;
 
-- 2
 SELECT name
 FROM Programmer
 WHERE (prof1 = 'cobol' or prof2 = 'cobol') AND sex='f'
 ORDER BY salary DESC LIMIT 1 ;
 
-- 3
SELECT prof1 AS Language, name
FROM Programmer
WHERE (prof1, salary) IN (
    SELECT prof1, MAX(salary)
    FROM Programmer
    GROUP BY prof1 );
    
-- 4
SELECT name 
FROM Programmer
ORDER BY doj LIMIT 1;

-- 5
SELECT name 
FROM Programmer
ORDER BY doj DESC LIMIT 1;

-- 6
 SELECT prof1 as Language
 FROM Programmer
 GROUP BY Language
 HAVING COUNT(*) = 1;
 
-- 7
SELECT name
FROM Programmer
WHERE (prof1 = 'dbase' or prof2 = 'dbase')
ORDER BY dob
LIMIT 1;

-- 8
SELECT splace as Institute, COUNT(*) as Number_of_Student
FROM Studies
GROUP BY splace
ORDER BY Number_of_student DESC LIMIT 1;

-- 9
SELECT name FROM Programmer WHERE (prof1 = 'dbase' or prof2 = 'dbase') ORDER BY dob LIMIT 1;

-- 10
SELECT name 
FROM Programmer 
WHERE sex='f' AND prof1 NOT IN ('C', 'C++', 'Oracle' ,'Dbase')
			  AND prof2 NOT IN ('C', 'C++', 'Oracle' ,'Dbase')
              AND Salary>3000;
              
-- 11
SELECT course as Course_Name
FROM Studies
ORDER BY ccost DESC
LIMIT 1;

-- 12
SELECT course as Course_Name
FROM Studies
GROUP BY course
ORDER BY COUNT(*) DESC
LIMIT 1;

-- 13
SELECT splace AS institute_name, course
FROM Studies
GROUP BY institute_name, course
HAVING AVG(ccost) < (SELECT AVG(ccost) FROM Studies);

-- 14
SELECT splace AS institute_name
FROM Studies
ORDER BY ccost DESC LIMIT 1;

SELECT splace AS institute_name
FROM Studies
GROUP BY institute_name
HAVING MAX(ccost) = (SELECT MAX(ccost) FROM Studies);

-- 15
SELECT course
FROM Studies
GROUP BY course
HAVING COUNT(*) < (SELECT AVG(cnt) FROM (SELECT COUNT(*) as cnt FROM Studies GROUP BY course) as subquery);  -- Error Code: 1248. Every derived table must have its own alias	0.000 sec

-- 16
SELECT splace as Institute
FROM Studies
WHERE course IN (SELECT course
				FROM Studies
				GROUP BY course
				HAVING COUNT(*) < (SELECT AVG(cnt) FROM (SELECT COUNT(*) as cnt FROM Studies GROUP BY course) as subquery));

-- 17
SELECT course
FROM Studies
GROUP BY course
HAVING ABS(AVG(ccost) - (SELECT AVG(ccost) FROM Studies)) <= 1000;

-- 18
SELECT title as Package
FROM Software
ORDER BY dcost DESC
LIMIT 1; 

-- 19
SELECT title as Package
FROM Software
ORDER BY scost 
LIMIT 1;

-- 20
SELECT name
FROM Software
ORDER BY sold
LIMIT 1; 

-- 21
SELECT dev_in AS language
FROM Software
ORDER BY (scost * sold) DESC
LIMIT 1;

-- 22
SELECT sold
FROM Software
ORDER BY (scost - dcost) ASC
LIMIT 1;

-- 23
SELECT title as Package
FROM Software
WHERE dev_in = 'PASCAL'
ORDER BY scost DESC
LIMIT 1;

-- 24 
SELECT dev_in AS language
FROM Software
GROUP BY language
ORDER BY COUNT(*) DESC
LIMIT 1;

-- 25 
SELECT name
FROM Software
GROUP BY name
ORDER BY COUNT(*) DESC
LIMIT 1;

--  26 
SELECT name
FROM Software
ORDER BY scost DESC
LIMIT 1;

-- 27 
SELECT name
FROM Software
GROUP BY name
HAVING SUM(sold) < (SELECT AVG(sold) FROM Software);

-- 28
SELECT p.name
FROM Programmer p
JOIN (
    SELECT MAX(salary) AS max_salary_male
    FROM Programmer
    WHERE sex = 'male'
) AS max_salary_male
ON p.sex = 'female' AND p.salary > max_salary_male;

-- 29 
SELECT prof1 AS language
FROM Programmer
GROUP BY language
ORDER BY COUNT(*) DESC
LIMIT 1;

-- 30 
SELECT name
FROM Software
GROUP BY name
HAVING SUM(scost) > (2 * SUM(dcost));

-- 31
SELECT name, dev_in , MIN(scost) AS cheapest_package_cost
FROM Software
GROUP BY name, dev_in;

-- 32
SELECT name
FROM Programmer
WHERE sex = 'male' AND dob = (SELECT MIN(dob) FROM Programmer WHERE sex = 'male' AND YEAR(dob) = 1965);

-- 33
SELECT name, MAX(dev_in) AS highest_selling_language, MIN(dev_in) AS lowest_selling_language
FROM Software
GROUP BY name;

-- 34
SELECT name
FROM Programmer
WHERE sex = 'female' AND YEAR(doj) = 1992
ORDER BY dob ASC
LIMIT 1;

-- 35
SELECT YEAR(dob) AS birth_year
FROM Programmer
GROUP BY birth_year
ORDER BY COUNT(*) DESC
LIMIT 1;

-- 36
SELECT MONTH(doj) AS join_month
FROM Programmer
GROUP BY join_month
ORDER BY COUNT(*) DESC
LIMIT 1;

-- 37
SELECT prof1 AS language
FROM Programmer
GROUP BY language
ORDER BY COUNT(*) DESC
LIMIT 1;

-- 38 
SELECT name
FROM Programmer
WHERE sex = 'male'
AND salary < (SELECT AVG(salary) FROM Programmer WHERE sex = 'female');

-- Query IV ****************************************************************************************************

-- 1 
SELECT *
FROM Programmer
WHERE salary IN (
    SELECT salary
    FROM Programmer
    GROUP BY salary
    HAVING COUNT(*) > 1
);

-- 2
SELECT *
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'male' AND salary > 3000
);

-- 3
SELECT *
FROM Software
WHERE dev_in = 'PASCAL' AND name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'female'
);

-- 4
SELECT *
FROM Programmer
WHERE YEAR(doj) < 1990;

-- 5
SELECT *
FROM Software
WHERE dev_in = 'C' AND name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'female' AND splace = 'PRAGATHI'
);

-- 6
SELECT p.name AS programmer_name, s.splace AS institute, COUNT(*) AS number_of_packages, SUM(s.sold) AS total_copies_sold, SUM(s.sold * s.scost) AS total_sales_value
FROM Programmer p
JOIN Software s ON p.name = s.name
GROUP BY p.name, s.splace;

-- 7
SELECT *
FROM Software
WHERE dev_in = 'DBASE' AND name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'male' AND splace = (
        SELECT splace
        FROM Studies
        GROUP BY splace
        ORDER BY COUNT(*) DESC
        LIMIT 1
    )
);

-- 8
SELECT *
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE (sex = 'male' AND YEAR(dob) < 1965) OR (sex = 'female' AND YEAR(dob) > 1975)
);

-- 9
SELECT *
FROM Software
WHERE dev_in NOT IN (
    SELECT prof1
    FROM Programmer
    UNION
    SELECT prof2
    FROM Programmer
);

-- 10
SELECT *
FROM Software
WHERE dev_in NOT IN (
    SELECT prof1
    FROM Programmer
    UNION
    SELECT prof2
    FROM Programmer
);

-- 11
SELECT *
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'male' AND splace = 'SABHARI'
);

-- 12
SELECT name
FROM Programmer
WHERE name NOT IN (
    SELECT DISTINCT name
    FROM Software
);

-- 13
SELECT SUM(dcost) AS total_cost
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE splace = 'APPLE'
);

-- 14
SELECT name
FROM Programmer
GROUP BY doj
HAVING COUNT(*) > 1;

-- 15
SELECT name
FROM Programmer
GROUP BY prof2
HAVING COUNT(*) > 1;

-- 16
SELECT splace AS institute, SUM(sold * scost) AS total_sales_value
FROM Software
GROUP BY institute;

-- 17
SELECT splace AS institute
FROM Studies
WHERE name IN (
    SELECT name
    FROM Software
    ORDER BY scost DESC
    LIMIT 1
);

-- 18
SELECT language
FROM (
    SELECT prof1 AS language FROM Programmer
    UNION
    SELECT prof2 FROM Programmer
) AS languages
WHERE language NOT IN (
    SELECT dev_in
    FROM Software
);

-- 19
SELECT p.name AS programmer_name, p.salary, s.course
FROM Programmer p
JOIN Software s ON p.name = s.name
WHERE s.sold = (
    SELECT MAX(sold)
    FROM Software
);

-- 20
SELECT p.name AS programmer_name, s.ccost / p.salary AS months_to_recover_cost
FROM Programmer p
JOIN Studies s ON p.name = s.name;

-- 21
SELECT *
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE YEAR(CURDATE()) - YEAR(doj) < 3
);

-- 22
SELECT AVG(p.salary) AS average_salary
FROM Programmer p
JOIN Software s ON p.name = s.name
GROUP BY p.name
HAVING SUM(s.sold * s.scost) > 50000;

-- 23
SELECT COUNT(*)
FROM Software
WHERE name IN (
    SELECT name
    FROM Studies
    WHERE ccost = (
        SELECT MIN(ccost)
        FROM Studies
    )
);

-- 24
SELECT COUNT(*)
FROM Software
WHERE name = (
    SELECT name
    FROM Software
    ORDER BY scost ASC
    LIMIT 1
);

-- 25
SELECT s.splace AS institute
FROM Studies s
JOIN Software sw ON s.name = sw.name
WHERE sw.name = (
    SELECT name
    FROM Software
    ORDER BY scost ASC
    LIMIT 1
);

-- 26
SELECT COUNT(*)
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'female' AND salary > (
        SELECT MAX(salary)
        FROM Programmer
        WHERE sex = 'male'
    )
);

-- 27
SELECT COUNT(*)
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE splace = 'BDPS'
    ORDER BY TIMESTAMPDIFF(YEAR, doj, CURDATE()) DESC
    LIMIT 1
);

-- 28
SELECT s.name AS programmer_name, st.splace AS institute
FROM Studies st
LEFT JOIN Software s ON st.name = s.name
UNION
SELECT p.name AS programmer_name, st.splace AS institute
FROM Programmer p
LEFT JOIN Studies st ON p.name = st.name
WHERE p.name NOT IN (
    SELECT name
    FROM Software
);


SELECT prof1 AS proficiency, COUNT(*) AS number_of_programmers, (
    SELECT COUNT(*)
    FROM Software
    WHERE dev_in = prof1
) AS number_of_packages_developed
FROM Programmer
GROUP BY prof1;

-- 29
SELECT name, COUNT(*) AS number_of_packages_developed
FROM Software
GROUP BY name;

-- 30
SELECT p.*
FROM Programmer p
JOIN Studies s ON p.name = s.name
WHERE s.splace = 'S.S.I.L';   