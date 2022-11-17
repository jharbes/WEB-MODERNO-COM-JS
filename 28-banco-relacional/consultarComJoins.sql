select * from prefeitos;

select * from `cidades`;

/*
Os comandos presentes nesse arquivo foram utilizados no workbench pois o retorno
gerado no VSCode não estava de acordo com o esperado.
*/

select * from `cidades` c inner join prefeitos p on c.id=p.cidade_id;

select * from `cidades` c left join prefeitos p on c.id=p.cidade_id;