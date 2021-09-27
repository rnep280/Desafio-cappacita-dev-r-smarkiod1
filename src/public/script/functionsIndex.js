let paginaFilme = 0;
let todosFilmes;

$(document).ready(function(){

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/popularMovies",
        dataType: 'json',    
        data: {},
        statusCode:{ //tratando respostas
            500:(response)=>{
                console.log(response);
                alert ('Erro de servidor!');
            },
            401:(response)=>{
                console.log(response);
                alert ('Problemas de acesso!');
            },
            404: (response)=>{
                console.log(response);
                alert('Títulos não encontrados!');
            },
            200:(response)=>{
                console.log(response);
                todosFilmes = response.result.results;
                const filmes = response.result.results.slice(0, 4);
                let contador = 1;
                
                filmes.forEach(element => {
                    $("#card"+contador).text("");
                    $("#card"+contador).prepend("<a href='#' name='"+element.id+"' onclick='filmeSelecionado.call(this)'>"+element.title+"</a>");
                    $("#img"+contador).attr("name", element.id);
                    $("#img"+contador).attr("src", "https://image.tmdb.org/t/p/w200"+element.poster_path);
                    $("#img"+contador).click(function(){
                        filmeSelecionado.call(this);
                    });
                    contador++;
                    
                });
            }
        }
    });
});


function filmeSelecionado(){
    window.location.href = "http://localhost:8080/detalhes?id="+this.name;
}


function proximo(){
    let filmes;
    paginaFilme++;
    
    if (paginaFilme > 3){
        $("#btnProximo").attr("disabled", true);
        paginaFilme = 3;
    }else{
        filmes = todosFilmes.slice((paginaFilme + 1)*4, 4*(paginaFilme + 1)*2);
        let contador = 1;
        
        console.log(todosFilmes);
        filmes.forEach(element => {
            $("#card"+contador).text("");
            $("#card"+contador).prepend("<a href='#' name='"+element.id+"' onclick='filmeSelecionado.call(this)'>"+element.title+"</a>");
            $("#img"+contador).attr("name", element.id);
            $("#img"+contador).attr("src", "https://image.tmdb.org/t/p/w200"+element.poster_path);
            $("#img"+contador).click(function(){
                filmeSelecionado.call(this);
            });
            contador++;
            
        });
        
    }
    $("#btnAnterior").attr("disabled", false);
}

function anterior(){
    paginaFilme--;
    let filmes;

    if (paginaFilme <= 0){
        $("#btnAnterior").attr("disabled", true);
        paginaFilme = 0;
        filmes = todosFilmes.slice(0, 4);
        let contador = 1;
        
        console.log(todosFilmes);
        filmes.forEach(element => {
            $("#card"+contador).text("");
            $("#card"+contador).prepend("<a href='#' name='"+element.id+"' onclick='filmeSelecionado.call(this)'>"+element.title+"</a>");
            $("#img"+contador).attr("name", element.id);
            $("#img"+contador).attr("src", "https://image.tmdb.org/t/p/w200"+element.poster_path);
            $("#img"+contador).click(function(){
                filmeSelecionado.call(this);
            });
            contador++;
            
        });
    }else{
        filmes = todosFilmes.slice((paginaFilme + 1)*4, 4*(paginaFilme + 1)*2);
        let contador = 1;
        
        console.log(todosFilmes);
        filmes.forEach(element => {
            $("#card"+contador).text("");
            $("#card"+contador).prepend("<a href='#' name='"+element.id+"' onclick='filmeSelecionado.call(this)'>"+element.title+"</a>");
            $("#img"+contador).attr("name", element.id);
            $("#img"+contador).attr("src", "https://image.tmdb.org/t/p/w200"+element.poster_path);
            $("#img"+contador).click(function(){
                filmeSelecionado.call(this);
            });
            contador++;
            
        });
        
    }
    $("#btnProximo").attr("disabled", false);
}