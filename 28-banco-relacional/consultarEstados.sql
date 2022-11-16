select * from estados;

select nome,sigla from estados;

select sigla,nome as 'Nome do Estado' from estados; -- altera o nome para 'Nome do Estado' na saida dos dados

select sigla,nome as 'Nome do Estado' from estados -- altera o nome bem como filtra apenas estados da regiao sul
where regiao='Sul';