use bd_bank_card_details;

drop table if exists users;
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    status enum("active","inactive") not null default "active"
);


## password encriptada: $2a$12$PaVWuZeybCPzK76LuhcEPegMZe/Pd4W7OLR0MwsRADVHRNvBt8hbK
## 0123456789

insert into users (full_name, email, password) values ("Carlos Abramonte","car.abr.04@gmail.com","$2a$12$PaVWuZeybCPzK76LuhcEPegMZe/Pd4W7OLR0MwsRADVHRNvBt8hbK");

select * from users;

############################################################################################################################
############################################################################################################################
############################################################################################################################


drop table if exists detail_card;
CREATE TABLE detail_card (
    id INT PRIMARY KEY AUTO_INCREMENT,
    card_number VARCHAR(16) NOT NULL UNIQUE,
    cvv CHAR(4) NOT NULL,
    expiration_month CHAR(2) NOT NULL,
    expiration_year CHAR(4) NOT NULL,
    card_type ENUM('visa/mastercard', 'amex') NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

describe detail_Card;

insert into detail_card(card_number,cvv,expiration_month,expiration_year,card_type,user_id) values ("0956274736502530","123","05","2056","visa/mastercard",1);
insert into detail_card(card_number,cvv,expiration_month,expiration_year,card_type,user_id) values ("6407274736502530","1234","07","2046","amex",1);

select * from  detail_card;