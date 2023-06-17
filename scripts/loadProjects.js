let data = [
    {
        "name": "The Spaceship",
        "link": "https://gamejolt.com/games/the_spaceship/461761",
        "description": "The Spaceship é um shooter 2D onde você controla uma pequena espaço-nave em meio a um perigoso cinturão de asteroides. Cuidado com os aliens!",
        "image": "https://m.gjcdn.net/game-screenshot/1500/2734889-ll-ruqvpxky-v4.webp",
        "status": "Encerrado",
        "type": "Jogo"
    }, {
        "name": "Nether Extra Update",
        "link": "https://www.curseforge.com/minecraft/mc-mods/nether-extra-update",
        "description": "Nether EU é um mod de Minecraft lançado para aprimorar a atualização 1.16 do jogo, conhecida como Nether Update.",
        "image": "imgs/nethereu.png",
        "status": "Encerrado",
        "type": "Jogo"
    }, {
        "name": "IC P4",
        "link": "",
        "description": "Projeto de iniciação científica orientado pelo Prof. Daniel Macêdo Batista no IME-USP com objetivo de utilizar a linguagem P4 para criação de switches inteligentes usando Raspberry Pi.",
        "image": "imgs/p4logo.jpeg",
        "status": "Em desenvolvimento",
        "type": "Pesquisa"
    },
];

let statusColors = {
    "Encerrado": "rojo",
    "Lançado": "lime-green",
    "Em desenvolvimento": "glaucous"
}

let typeColors = {
    "Jogo": "majorelle-blue",
    "Pesquisa": "flax"
}

function loadProjects() {
    let secProj = document.getElementById("section-projects");

    data.forEach(item => {
        let templateCard = document.getElementById("template-card-project");
        let node = document.importNode(templateCard.content, true);
        
        let imgSrc = document.createAttribute("src");
        let imgAlt = document.createAttribute("alt");
        
        imgSrc.value = item["image"];
        imgAlt.value = item["name"];
        
        let a = node.getElementById("card-project");
        let img = node.getElementById("image-project");
        let h2 = node.getElementById("title-project");
        let p = node.getElementById("description-project");
        let status = node.getElementById("status-project");
        let type = node.getElementById("type-project");
        
        
        h2.innerHTML = item["name"];
        p.innerHTML = item["description"];
        status.innerHTML = item["status"];
        type.innerHTML = item["type"];

        a.setAttribute('href', item["link"]);
        img.setAttribute("src", item["image"]);
        img.setAttribute("alt", item["name"]);
        status.setAttribute("style", "background-color: var(--" + statusColors[item["status"]] + ");");
        type.setAttribute("style", "background-color: var(--" + typeColors[item["type"]] + ");");
        
        secProj.appendChild(node);
    });

    /*fetch('./scripts/projects.json')
        .then(response => response.json())
            .then(data => {*/
    /*})
        .catch(error => {
            console.error('Error:', error);
        });*/
}