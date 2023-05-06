CREATE TABLE tb_usuario (
                            id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                            email VARCHAR(255) NOT NULL UNIQUE,
                            senha VARCHAR(255) NOT NULL,
                            roles VARCHAR(255)
);

INSERT INTO tb_usuario (email, senha, roles) VALUES ('exemplo@email.com', '$2a$10$rwL4pmIlL1OBZy0pGMrmAuwAbAd6MOdV/es8mfk6SYzBphku1EFZO', 'ROLE_USER');
