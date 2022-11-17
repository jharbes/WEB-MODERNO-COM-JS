-- primeiramente vamos alterar a table empresas para que o cnpj fique em varchar e nao em int

alter table empresas modify cnpj varchar(14);

insert into empresas
    (nome,cnpj)
values
    ('Bradesco',95694186000132),
    ('Vale',27887140000146),
    ('Cielo',01598317000134); -- mesmo o campo cnpj sendo um varchar ele aceita os valores do cnpj sem as aspas

desc empresas;