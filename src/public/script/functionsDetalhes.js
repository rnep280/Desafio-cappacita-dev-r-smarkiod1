$(document).ready(function(){
    
    let hash;
    let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
    }



    
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/movies/?id="+hash[1],
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
                
                $("#texto").prepend("<span style='font-size: 30px;color:white'><b>Título: </b>"+response.result.title+"</span><span style='font-size:20px;color:white'></br></br><b>Sinopse:</b> "+response.result.overview+"</br></br><b>Crítica: </b>"+response.result.vote_average+"</span>");
                $("#imgPrincipal").attr("src", "https://image.tmdb.org/t/p/w300"+response.result.poster_path);
            
                
            }
        }
    });

    
               

});
