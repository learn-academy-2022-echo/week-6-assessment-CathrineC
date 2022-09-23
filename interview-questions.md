# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 
    Let me break down the questions:

    How can I fix this mistake? 
        To fix this is simply to add another column in the Cohort for the foreign key. To add a column first, we just need to type the following on the terminal: rail g migration add_column_students_to_cohort. Second, on the migration file we need to type on the terminal: add_column :Students, :cohort_id, :integer. Third, we have to migrate by typing on the terminal: rails db:migrate.

    What is the name of the foreign key? 
        The foreign key column will be the id of the model Cohort which is cohort_id.

    Would the foreign key be on the Cohort model or the Student model? 
        The foreign key will be added to the model Students to associate many students to a cohort.

Researched answer: 
    In addition to my answer above, I found through sources online that if the developer hasn't migrated the database, the column can be added manually in the schema.rb file and then migrate by typing on the terminal: rails db:migrate.

2. Which RESTful routes must always be passed params? Why?

Your answer: 
    In the projects that I worked on, the RESTful routes that needs params are:
        -SHOW because it shows a specific item in the database so the method that's used in it whcih is .find uses params with the key id.
        -CREATE because it is adding a specific item in the database so the method that's used in it whcih is .create uses params with the key of the columns where the data will be added.
        -EDIT same with SHOW it identifies a specific item to be edited in the database so the method that's used in it whcih is .find uses params with the key id.
        -UPDATE same with CREATE it is updating a specific item in the database so the method that's used in it whcih is .update uses params with the key of the columns to which data that is being updated.
        -DESTROY same with SHOW and EDIT it identifies a specific item to be deleted in the database so the method that's used in it whcih is .find uses params with the key id.

Researched answer: 
    A great way to answer this is from an online source where it says that those that reference just a single resource, the identifier for the resource will be available within the corresponding controller action as params[:id]. This means that anything that needs to retrieve a specific item will always need an a specific id.

3. Name three rails generator commands. What is created by each?

Your answer: 
    In the projects that I worked on, are

    - rail generate model Student :name :grade
        > this generator command creates a database for Students with columns name and grade

    - rail generate migration add_column_students_to_teacher
        > this generator command is the first step to add a column into an existing model

    - rail generate controller Student
        > this generator command creates a controller that will access the model

Researched answer: 
    I read online that if you simply type in rail generate, it will give you a list of available generators. This means a developer doesn't need to make an ectra effort to lookk for what is available to use. There's also a source that shows how to create a controller generator and specifying the action it can do. This is done by typing in: rails generate controller action1 action2.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
> The name of the controller method is INDEX. This will list all the available data in the Student database

action: "POST" location: /students
> The name of the controller method is CREATE. This will add a new student to the database.

action: "GET" location: /students/new
> The name of the controller method is NEW. This will display an HTML form to create a new student. 

action: "GET" location: /students/2
> The name of the controller method is SHOW. This will show the information about student with id 2.

action: "GET" location: /students/2/edit
> The name of the controller method is EDIT. This will display an HTML form to edit a student with id 2.

action: "PATCH" location: /students/2
> The name of the controller method is UPDATE. This will update the information about student with id 2.

action: "DELETE" location: /students/2
> The name of the controller method is DESTROY. This will remove the information about student with id 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    TO-DO LIST APP USER STORIES:
    1. As a user, I can see all the titles of my to-do list listed on the home page of my application.
    2. As a user, I can click one to-do list title and be routed to the show page where I can see the title, date, time, description, and status of my to-do list item.
    3. As a user, I can click on a link to navigate back from Show Page to the Home page.
    4. On the Home Page, as a user, I can click on a button that will direct me to Add New To-Do List Item page.
    5. As a user, I can see a form where I create a New To-Do List Item.
    6. As a user, I can click on a button that will post my New To-Do List Item.
    7. As a user, I can click on a link to navigate back from New Page to the Home page.
    8. On the Show Page, I can click on a button that will delete at item on my To-Do List.
    9. On the Home Page, as a user, I can click on a button that will direct me to Edit To-Do List Item page.
    10. On the Edit Page, As a user, I can click on a button that will update my To-Do List Item.