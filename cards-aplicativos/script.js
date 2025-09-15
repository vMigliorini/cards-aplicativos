var logo = ["<i class='fa-brands fa-x-twitter'></i>", 
    "<i class='fa-brands fa-instagram'></i>",
    "<i class='fa-brands fa-youtube'></i>"
]
var titulo = [
    "Twitter",
    "Instagram",
    "Youtube"
]
var link = [
    "https://x.com/home",
    "https://www.instagram.com/",
    "https://www.youtube.com/?app=desktop&hl=pt"
]
var card = [
    "card-twitter",
    "card-instagram",
    "card-youtube"
]
for(var i = 0;  i < 3; i++){
    var template = `
            <div class="${card[i]}">
                <div class="logo">
                    ${logo[i]}
                </div>
                <div class="titulo">
                    ${titulo[i]}
                </div>
                <div class="descricao">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing
                </div>
                <a href=${link[i]} style="text-decoration: none;">
                    <div class="button" >
                        <button class="button-card">Acessar</button>
                    </div>
                </a>
            </div>`
    document.getElementById("usuarios").innerHTML += template
}