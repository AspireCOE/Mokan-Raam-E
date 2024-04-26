create database notes;

use notes;

create table note(
    id int Primary key auto_increment,
    title varchar(255) not null,
    content text not null,
);

Insert into note(title, content) values ("First","About nodejs + mysql connection"),
                                        ("second","About mysql query");