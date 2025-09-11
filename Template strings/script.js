var lista = 
[
    {imagem: "twitter-image-removebg-preview.png", logo: "Twitter", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."},
    {imagem: "download-removebg-preview.png", logo: "Instagram", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."},
    {imagem: "logo-youtube.png", logo: "YouTube", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."}
]

for(var i = 0; i < lista.length; i ++){
    var card= 
        `<div class="card">   
            <div class="card-img">
                <img src="${lista[i].imagem}" class="imagem">
            </div>
            <div class="logo">${lista[i].logo}</div>
            <div class="texto">${lista[i].texto}</div>
            <div class="card-botao">
                <button class="btn">
                    Read More
                </button>
            </div>
        </div>`
    document.getElementById("lista-cards").innerHTML += card
}