--data for employees table
INSERT INTO employees (id, first_name, last_name)
VALUES (1, "John", "Doe"),
       (2, "Adam", "Cruz"),
       (3, "Chris", "Deng"),
       (4, "Bryan", "Swarthout"),
       (5, "Michael", "McEwen"),
       (6, "Sammi", "Moore"),
       (7, "Night", "Wing"),
       (8, "Bat", "Man");


--data for products table
INSERT INTO products (id, Item, Price)
VALUES (1, "Chicken", 10),
       (2, "Beef", 15);

--data for user table

INSERT INTO users (id, first_name, last_name, email, password, balance, ProductID)
VALUES (1, "Chris", "Deng", "test@test.com", "password123", 500, 1);