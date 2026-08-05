const MONSTERS_DB = [
    {
        id:1,name:"Great Jagras",type:"Grande Monstro",species:"Wyvern Canídeo",emoji:"🦎",
        description:"O primeiro grande monstro que você enfrenta. Engole presas inteiras e fica com a barriga inchada, ficando mais lento mas com ataques mais amplos.",
        weaknesses:{fire:3,water:0,thunder:2,ice:1,dragon:1,poison:2,paralysis:2,sleep:2,blast:1},
        breakableParts:["Cabeça","Corpo","Patas Dianteiras"],
        locations:["Floresta Ancestral"],
        strategy:["Fogo é a maior fraqueza — use armas de fogo.","Quando a barriga está cheia, ele fica mais lento — aproveite para atacar.","Ataque a barriga inchada para forçá-lo a vomitar e ficar vulnerável.","Um dos monstros mais fáceis — bom para praticar combos.","Ele foge quando está fraco — siga e finalize."]
    },
    {
        id:2,name:"Kulu-Ya-Ku",type:"Grande Monstro",species:"Wyvern Pássaro",emoji:"🐔",
        description:"Um wyvern pássaro inteligente que pega pedras para usar como arma e escudo. Quando segura uma pedra, seus ataques mudam.",
        weaknesses:{fire:1,water:3,thunder:1,ice:2,dragon:0,poison:2,paralysis:2,sleep:2,blast:1},
        breakableParts:["Cabeça","Patas Dianteiras"],
        locations:["Floresta Ancestral","Deserto de Wildspire"],
        strategy:["Água é a maior fraqueza.","Use o Estilingue para acertar a pedra que ele segura — isso faz ele soltar.","Quando está sem a pedra, ele é muito mais vulnerável.","Foque na cabeça para atordoar.","Monstro relativamente fácil — bom para aprender mecânicas."]
    },
    {
        id:3,name:"Pukei-Pukei",type:"Grande Monstro",species:"Wyvern Pássaro",emoji:"🦜",
        description:"Um wyvern colorido que acumula veneno e o cospe em ataques. Sua cauda e língua são armas venenosas.",
        weaknesses:{fire:2,water:1,thunder:3,ice:1,dragon:0,poison:0,paralysis:2,sleep:2,blast:1},
        breakableParts:["Cabeça","Asas","Cauda (cortável)"],
        locations:["Floresta Ancestral","Deserto de Wildspire"],
        strategy:["Trovão é a maior fraqueza.","Leve Antídotos — ele causa veneno com frequência.","Corte a cauda para reduzir alcance dos ataques venenosos.","Quando ele infla as bochechas, está preparando um ataque de veneno — vá para o lado.","Ele é imune a veneno, então não use armas de veneno contra ele."]
    },
    {
        id:4,name:"Barroth",type:"Grande Monstro",species:"Wyvern Brutus",emoji:"🦏",
        description:"Um wyvern que se cobre de lama para proteção. Com lama, é fraco a água. Sem lama, é fraco a fogo.",
        weaknesses:{fire:2,water:3,thunder:1,ice:1,dragon:0,poison:2,paralysis:3,sleep:1,blast:1},
        breakableParts:["Cabeça","Corpo","Patas","Cauda"],
        locations:["Deserto de Wildspire"],
        strategy:["COM lama: use Água para removê-la. SEM lama: use Fogo.","Paralisia é muito eficaz — imobiliza ele para dano livre.","A investida frontal é muito forte — esquive para o lado, nunca para trás.","Quebre a coroa de lama na cabeça para reduzir defesa.","Waterblight ajuda muito contra ele."]
    },
    {
        id:5,name:"Jyuratodus",type:"Grande Monstro",species:"Wyvern Piscino",emoji:"🐟",
        description:"Um peixe-wyvern que vive na lama. Semelhante ao Barroth, a lama muda suas fraquezas elementais.",
        weaknesses:{fire:1,water:1,thunder:3,ice:0,dragon:0,poison:1,paralysis:2,sleep:2,blast:1},
        breakableParts:["Cabeça","Corpo","Cauda"],
        locations:["Deserto de Wildspire"],
        strategy:["Trovão é a maior fraqueza em geral.","COM lama: use Água. SEM lama: use Trovão.","Ele mergulha na lama — espere ele sair para atacar.","Use Arco ou Bowgun se quiser manter distância da lama.","Waterblight Resistance ajuda a não ser afetado pela lama."]
    },
    {
        id:6,name:"Tobi-Kadachi",type:"Grande Monstro",species:"Wyvern Canídeo",emoji:"⚡",
        description:"Um wyvern ágil que escala árvores e acumula eletricidade estática no pelo para ataques elétricos devastadores.",
        weaknesses:{fire:2,water:3,thunder:0,ice:1,dragon:1,poison:2,paralysis:2,sleep:2,blast:1},
        breakableParts:["Cabeça","Costas","Cauda (cortável)"],
        locations:["Floresta Ancestral"],
        strategy:["Água é a maior fraqueza, seguida de Fogo.","Leve Nullberries para curar Thunderblight.","Quando ele escala árvores, fique atento ao ataque de mergulho.","Cortar a cauda reduz o alcance dos ataques elétricos.","Ele é relativamente frágil — seja agressivo."]
    },
    {
        id:7,name:"Anjanath",type:"Grande Monstro",species:"Wyvern Brutus",emoji:"🦖",
        description:"Um T-Rex feroz que cospe fogo. É um dos primeiros grandes desafios do jogo.",
        weaknesses:{fire:0,water:3,thunder:2,ice:2,dragon:1,poison:2,paralysis:2,sleep:2,blast:1},
        breakableParts:["Cabeça","Corpo","Patas","Cauda (cortável)"],
        locations:["Floresta Ancestral"],
        strategy:["Água é a maior fraqueza — priorize armas de água.","Quando a crista nasal e cauda inflam, ele fica mais perigoso mas vulnerável.","Fique nas pernas traseiras para evitar mordidas e rajadas de fogo.","A cauda pode ser cortada — reduz alcance de ataques giratórios.","Cuidado com a investida — percorre distância enorme."]
    },
    {
        id:8,name:"Rathian",type:"Grande Monstro",species:"Wyvern Voador",emoji:"💚",
        description:"A Rainha da Terra. Parceira do Rathalos, ela prefere combate no solo com ataques venenosos de cauda.",
        weaknesses:{fire:0,water:1,thunder:2,ice:1,dragon:3,poison:0,paralysis:2,sleep:2,blast:1},
        breakableParts:["Cabeça","Asas","Corpo","Cauda (cortável)"],
        locations:["Floresta Ancestral","Deserto de Wildspire"],
        strategy:["Dragão é a maior fraqueza.","A cauda causa VENENO — corte-a o mais rápido possível!","Flash Pods derrubam ela quando estiver voando.","O backflip com a cauda é o ataque mais perigoso — esquive para o lado.","Leve Antídotos obrigatoriamente.","Quebre a cabeça para reduzir dano de fogo."]
    },
    {
        id:9,name:"Rathalos",type:"Grande Monstro",species:"Wyvern Voador",emoji:"🔥",
        description:"O Rei dos Céus. Domina os ares e ataca com rajadas de fogo devastadoras e garras venenosas.",
        weaknesses:{fire:0,water:1,thunder:2,ice:1,dragon:3,poison:1,paralysis:2,sleep:2,blast:1},
        breakableParts:["Cabeça","Asas","Costas","Cauda (cortável)"],
        locations:["Floresta Ancestral","Altiplano Coralino"],
        strategy:["Dragão é a maior fraqueza elemental.","Use Flash Pods quando ele voar para forçá-lo a pousar.","A cauda pode ser cortada — reduz alcance de ataques giratórios.","Leve Antídotos para o veneno das garras.","Foque na cabeça para atordoar e nas asas para derrubar.","Cuidado com a rajada de fogo tripla — esquive para o lado."]
    },
    {
        id:10,name:"Diablos",type:"Grande Monstro",species:"Wyvern Voador",emoji:"🦴",
        description:"O tirano do deserto. Extremamente agressivo, ataca com investidas devastadoras e mergulhos subterrâneos.",
        weaknesses:{fire:0,water:2,thunder:1,ice:3,dragon:1,poison:2,paralysis:3,sleep:2,blast:2},
        breakableParts:["Chifres (x2)","Costas","Asas","Cauda"],
        locations:["Deserto de Wildspire"],
        strategy:["Gelo é a fraqueza número 1.","Use Screamer Pod quando ele mergulhar na areia — sai atordoado!","Quebre os dois chifres para reduzir dano das investidas.","Evite ficar na frente dele — investidas frontais são mortais.","Paralisia funciona muito bem — grandes janelas de dano.","Temporal Mantle ajuda muito na sobrevivência."]
    },
    {
        id:11,name:"Diablos Negra",type:"Grande Monstro",species:"Wyvern Voador",emoji:"🖤",
        description:"Versão feminina enfurecida do Diablos. Muito mais agressiva e com ataques mais poderosos que o original.",
        weaknesses:{fire:0,water:2,thunder:1,ice:3,dragon:1,poison:2,paralysis:3,sleep:2,blast:2},
        breakableParts:["Chifres (x2)","Costas","Asas","Cauda"],
        locations:["Deserto de Wildspire"],
        strategy:["Mesmas fraquezas do Diablos normal — Gelo é o melhor.","Screamer Pods funcionam, mas ela se recupera mais rápido.","Ela é MUITO mais agressiva — tenha paciência e não seja ganancioso.","Lance Mines e Traps são essenciais.","Paralisia continua sendo muito eficaz.","Quebre os chifres — é prioridade máxima."]
    },
    {
        id:12,name:"Legiana",type:"Grande Monstro",species:"Wyvern Voador",emoji:"❄️",
        description:"A Rainha do Gelo dos Vales Coralinos. Ataca com rajadas de ar gelado que reduzem sua velocidade.",
        weaknesses:{fire:3,water:1,thunder:2,ice:0,dragon:1,poison:2,paralysis:2,sleep:1,blast:1},
        breakableParts:["Cabeça","Asas","Costas","Cauda"],
        locations:["Altiplano Coralino"],
        strategy:["Fogo é a maior fraqueza — armas de fogo são ideais.","Leve Nullberries para Iceblight.","Flash Pods derrubam ela quando estiver voando.","As asas são pontos fracos grandes — foque nelas.","Ela foge bastante — acompanhe no mapa.","O grito sônico é irritante — Earplugs ajuda."]
    },
    {
        id:13,name:"Odogaron",type:"Grande Monstro",species:"Wyvern Canídeo",emoji:"🐺",
        description:"Uma fera veloz e letal do Vale Apodrecido. Ataca com garras afiadas e causa sangramento.",
        weaknesses:{fire:1,water:1,thunder:2,ice:3,dragon:1,poison:2,paralysis:3,sleep:2,blast:1},
        breakableParts:["Cabeça","Patas Dianteiras","Costas","Cauda"],
        locations:["Vale Apodrecido","Altiplano Coralino"],
        strategy:["Gelo é a maior fraqueza, seguido de Trovão.","Leve Astera Jerky para curar sangramento instantaneamente.","Paralisia é extremamente eficaz — ele é muito rápido.","Quando enfurecido (olhos brilhando), ataques ficam mais rápidos.","Use armadilhas de choque para janelas de dano.","Ele pode ser adormecido com carne crua."]
    },
    {
        id:14,name:"Paolumu",type:"Grande Monstro",species:"Wyvern Voador",emoji:"🎈",
        description:"Um wyvern fofo que infla o saco de ar no pescoço para flutuar e atacar com rajadas de vento.",
        weaknesses:{fire:3,water:1,thunder:1,ice:1,dragon:0,poison:2,paralysis:2,sleep:2,blast:2},
        breakableParts:["Cabeça","Saco de Ar","Asas","Cauda"],
        locations:["Altiplano Coralino"],
        strategy:["Fogo é a maior fraqueza.","Ataque o saco de ar inflado para derrubá-lo do ar.","Flash Pods funcionam quando ele está voando.","Quando desinflado, ele fica muito mais vulnerável.","Relativamente fácil — seja agressivo quando ele estiver no chão.","Cuidado com as rajadas de vento — empurram para longe."]
    },
    {
        id:15,name:"Radobaan",type:"Grande Monstro",species:"Wyvern Brutus",emoji:"🦴",
        description:"Um wyvern que se cobre de ossos como armadura. Rola como uma bola para atacar e se proteger.",
        weaknesses:{fire:1,water:1,thunder:1,ice:2,dragon:3,poison:2,paralysis:2,sleep:3,blast:1},
        breakableParts:["Cabeça","Corpo","Patas","Cauda"],
        locations:["Vale Apodrecido"],
        strategy:["Dragão é a maior fraqueza, seguido de Sono.","Quebre a armadura de ossos para expor pontos fracos.","Armas de impacto (martelo, hunting horn) são ótimas para quebrar ossos.","Quando ele rola, esquive para o lado — não tente bloquear.","Sono funciona muito bem — use armas de sono para bombas gratuitas.","Depois de perder a armadura, ele fica muito mais frágil."]
    },
    {
        id:16,name:"Lavasioth",type:"Grande Monstro",species:"Wyvern Piscino",emoji:"🌋",
        description:"Um peixe-wyvern que nada na lava. Sua armadura de lite endurecida deflecte ataques.",
        weaknesses:{fire:0,water:3,thunder:1,ice:2,dragon:0,poison:2,paralysis:2,sleep:2,blast:1},
        breakableParts:["Cabeça","Corpo","Cauda"],
        locations:["Fenda do Ancião"],
        strategy:["Água é a maior fraqueza.","A armadura de lava endurecida deflecte ataques — espere ele mergulhar para amolecer.","Armas de fogo/explosão ajudam a quebrar a armadura endurecida.","Fireproof Mantle é essencial nesta luta.","Cool Drink obrigatório na Fenda do Ancião.","Quando a lava está fresca (laranja), ele recebe mais dano."]
    },
    {
        id:17,name:"Uragaan",type:"Grande Monstro",species:"Wyvern Brutus",emoji:"💎",
        description:"Um wyvern massivo com mandíbula de aço. Rola como uma bola e deixa minas explosivas pelo caminho.",
        weaknesses:{fire:0,water:3,thunder:1,ice:1,dragon:2,poison:3,paralysis:2,sleep:2,blast:1},
        breakableParts:["Cabeça","Corpo","Cauda"],
        locations:["Fenda do Ancião"],
        strategy:["Água é a maior fraqueza.","Veneno é surpreendentemente eficaz contra ele.","Cuidado com as minas explosivas que ele deixa ao rolar.","Quebre a mandíbula para reduzir dano dos ataques de cabeçada.","Cool Drink obrigatório na Fenda do Ancião.","Quando ele rola, esquive para o lado e ataque quando parar."]
    },
    {
        id:18,name:"Dodogama",type:"Grande Monstro",species:"Wyvern Canídeo",emoji:"🧡",
        description:"Um wyvern adorável que cospe rochas cristalizadas explosivas. Apesar de fofo, seus ataques são poderosos.",
        weaknesses:{fire:0,water:2,thunder:3,ice:2,dragon:1,poison:2,paralysis:2,sleep:2,blast:0},
        breakableParts:["Cabeça","Corpo","Cauda"],
        locations:["Fenda do Ancião"],
        strategy:["Trovão é a maior fraqueza.","Quando as bochechas estão cheias de cristais, ataque para fazê-lo soltar.","As rochas explosivas no chão podem ser detonadas — cuidado!","Ele é relativamente lento — aproveite para atacar pelas costas.","Cool Drink obrigatório na Fenda do Ancião.","Imune a Fogo e Explosão — não use esses elementos."]
    },
    {
        id:19,name:"Bazelgeuse",type:"Grande Monstro",species:"Wyvern Voador",emoji:"💣",
        description:"O Bombardeiro B-52. Aparece sem aviso em qualquer caçada, soltando escamas explosivas mortais.",
        weaknesses:{fire:0,water:1,thunder:3,ice:2,dragon:1,poison:2,paralysis:2,sleep:2,blast:0},
        breakableParts:["Cabeça","Asas","Corpo","Cauda"],
        locations:["Todas as áreas (invasor)"],
        strategy:["Trovão é a maior fraqueza, seguido de Gelo.","Escamas brilhantes no chão EXPLODEM — não fique perto!","Quando enfurecido, escamas ficam vermelhas e explodem mais forte.","Use Dung Pods para expulsá-lo se invadir sua caçada.","Faça ele bombardear o monstro que você está caçando — dano grátis!","Quando cansado (babando), escamas caem sem explodir."]
    },
    {
        id:20,name:"Tzitzi-Ya-Ku",type:"Grande Monstro",species:"Wyvern Pássaro",emoji:"📸",
        description:"Um wyvern pássaro que usa órgãos luminosos na cabeça para cegar presas com um flash poderoso.",
        weaknesses:{fire:1,water:1,thunder:2,ice:3,dragon:0,poison:2,paralysis:2,sleep:2,blast:1},
        breakableParts:["Cabeça","Patas Dianteiras"],
        locations:["Altiplano Coralino"],
        strategy:["Gelo é a maior fraqueza.","Quando ele abre as cristas luminosas, VIRE DE COSTAS ou esquive — o flash atordoa!","Fique atrás ou nas laterais para evitar o flash.","Quebre as cristas luminosas para reduzir a eficácia do flash.","Monstro relativamente fácil — bom para farmar materiais.","O flash dele pode atordoar outros monstros — use a seu favor!"]
    },
    {
        id:21,name:"Great Girros",type:"Grande Monstro",species:"Wyvern Canídeo",emoji:"🐍",
        description:"O líder dos Girros no Vale Apodrecido. Seus ataques causam paralisia e ele comanda um bando de Girros menores.",
        weaknesses:{fire:2,water:3,thunder:1,ice:1,dragon:0,poison:1,paralysis:0,sleep:3,blast:1},
        breakableParts:["Cabeça","Corpo","Patas Dianteiras","Cauda"],
        locations:["Vale Apodrecido"],
        strategy:["Água é a maior fraqueza.","Sono é muito eficaz — use para plantar bombas.","Ele é IMUNE a Paralisia — não use armas de paralisia.","Leve Nullberries para curar paralisia.","Os Girros menores são irritantes — elimine alguns primeiro.","Relativamente frágil — seja agressivo."]
    },
    {
        id:22,name:"Nergigante",type:"Dragão Ancião",species:"Dragão Ancião",emoji:"🦔",
        description:"O Devorador de Dragões Anciões. Incrivelmente agressivo, com espinhos que endurecem durante a luta.",
        weaknesses:{fire:1,water:1,thunder:3,ice:1,dragon:2,poison:2,paralysis:1,sleep:1,blast:2},
        breakableParts:["Chifres","Asas","Cauda","Espinhos (todas as partes)"],
        locations:["Vale Apodrecido","Fenda do Ancião"],
        strategy:["Trovão é a maior fraqueza.","Ataque espinhos BRANCOS antes que endureçam (ficam pretos).","Espinhos pretos deflectem ataques — quebre enquanto brancos.","O dive bomb é o ataque mais perigoso — use Superman Dive (corra + esquiva).","Seja agressivo — espinhos endurecem se você ficar longe.","Não precisa de Elderseal alto, mas ajuda."]
    },
    {
        id:23,name:"Teostra",type:"Dragão Ancião",species:"Dragão Ancião",emoji:"🦁",
        description:"O Imperador das Chamas. Envolve-se em uma aura de fogo e pode causar a devastadora Supernova.",
        weaknesses:{fire:0,water:3,thunder:1,ice:2,dragon:2,poison:2,paralysis:1,sleep:1,blast:0},
        breakableParts:["Cabeça","Asas","Cauda"],
        locations:["Deserto de Wildspire","Fenda do Ancião"],
        strategy:["Água é a maior fraqueza. Gelo e Dragão também funcionam.","Use Elderseal alto para suprimir a aura de fogo.","A Supernova é telegrafada — ele voa e brilha. Corra e Superman Dive!","Fireproof Mantle reduz dano de fogo.","Cool Drink obrigatório em áreas quentes.","Foque na cabeça para atordoar."]
    },
    {
        id:24,name:"Kushala Daora",type:"Dragão Ancião",species:"Dragão Ancião",emoji:"🌪️",
        description:"O Dragão de Aço. Controla o vento, criando barreiras que deflectem ataques e projéteis.",
        weaknesses:{fire:2,water:0,thunder:3,ice:0,dragon:2,poison:3,paralysis:1,sleep:1,blast:1},
        breakableParts:["Cabeça","Asas","Cauda"],
        locations:["Floresta Ancestral","Fenda do Ancião"],
        strategy:["Trovão e Veneno são as maiores fraquezas.","Veneno DESATIVA a aura de vento — priorize armas de veneno!","Elderseal também remove a aura de vento.","Windproof 5 ou Kushala set bonus anula o vento.","Flash Pods derrubam ele quando voa.","Foque na cabeça quando estiver no chão."]
    },
    {
        id:25,name:"Vaal Hazak",type:"Dragão Ancião",species:"Dragão Ancião",emoji:"💀",
        description:"O Dragão do Miasma. Manipula efflúvio mortal que drena a vida máxima dos caçadores.",
        weaknesses:{fire:3,water:1,thunder:1,ice:1,dragon:2,poison:1,paralysis:1,sleep:1,blast:2},
        breakableParts:["Cabeça","Corpo","Asas","Cauda"],
        locations:["Vale Apodrecido"],
        strategy:["Fogo é a maior fraqueza — use armas de fogo.","O efflúvio corta sua vida pela metade — Effluvium Resistance 3 é ESSENCIAL.","Leve Nullberries como backup.","Elderseal reduz a aura de efflúvio.","Foque na cabeça e peito — pontos mais fracos.","O beam de efflúvio tem alcance enorme mas é estreito — vá para o lado."]
    },
    {
        id:26,name:"Kirin",type:"Dragão Ancião",species:"Dragão Ancião",emoji:"🦄",
        description:"O Unicórnio Trovejante. Invoca raios devastadores do céu apesar da aparência elegante.",
        weaknesses:{fire:3,water:1,thunder:0,ice:2,dragon:1,poison:1,paralysis:1,sleep:2,blast:1},
        breakableParts:["Chifre"],
        locations:["Altiplano Coralino"],
        strategy:["Fogo é a maior fraqueza, seguido de Gelo.","Thunderproof Mantle é essencial.","O chifre é o único ponto fraco — mire na cabeça SEMPRE.","Quando eletrificado (brilhando), ataques em outras partes ricocheteiam.","Raios são telegrafados por marcas azuis no chão — saia da área!","Alterne Thunderproof + Vitality Mantle."]
    },
    {
        id:27,name:"Zorah Magdaros",type:"Dragão Ancião",species:"Dragão Ancião",emoji:"🌋",
        description:"Um dragão ancião colossal do tamanho de uma montanha. A caçada é um evento épico em escala massiva.",
        weaknesses:{fire:0,water:2,thunder:1,ice:2,dragon:3,poison:1,paralysis:1,sleep:1,blast:1},
        breakableParts:["Magmacores (3)","Cabeça","Peito"],
        locations:["Evento Especial"],
        strategy:["Dragão é a maior fraqueza.","Destrua os 3 Magmacores nas costas dele — são os objetivos principais.","Use os canhões e balistas do navio/barreira.","O Dragonator causa dano MASSIVO — use quando ele se aproximar da barreira.","NPC's vão ajudar — siga as instruções do Almirante.","Lute contra Nergigante quando ele aparecer nas costas do Zorah."]
    },
    {
        id:28,name:"Xeno'jiiva",type:"Dragão Ancião",species:"Dragão Ancião",emoji:"👽",
        description:"O boss final do jogo base. Um dragão ancião recém-nascido com poder energético imenso e ataques de laser devastadores.",
        weaknesses:{fire:1,water:1,thunder:1,ice:1,dragon:2,poison:3,paralysis:2,sleep:1,blast:1},
        breakableParts:["Cabeça","Asas","Patas","Cauda (cortável)"],
        locations:["Confluência dos Fatos"],
        strategy:["Veneno é surpreendentemente a maior fraqueza!","Dragão também funciona bem.","As patas brilhantes são pontos fracos — ataque quando estiverem brilhando.","O beam de energia é devastador — vá para o lado quando ele mirar.","Quando voa, use Flash Pods para derrubar.","A luta é longa — leve muita cura e Max Potions.","Foque nas patas para derrubar e abrir a cabeça para ataques."]
    },
    {
        id:29,name:"Deviljho",type:"Grande Monstro",species:"Wyvern Brutus",emoji:"🦎",
        description:"O Devorador Faminto. Um monstro massivo eternamente faminto que invade qualquer caçada e até usa outros monstros como arma.",
        weaknesses:{fire:1,water:1,thunder:3,ice:2,dragon:3,poison:2,paralysis:2,sleep:2,blast:2},
        breakableParts:["Cabeça","Corpo","Cauda"],
        locations:["Todas as áreas (invasor)"],
        strategy:["Trovão e Dragão são as maiores fraquezas.","Quando enfurecido (brilho vermelho), fica mais forte mas mais vulnerável a Dragão.","Dung Pods para expulsá-lo se invadir sua caçada.","Ele pega outros monstros com a boca e usa como arma — saia do caminho!","Armadilhas funcionam, mas duram menos tempo.","Leve muita cura — os ataques dele doem MUITO."]
    },
    {
        id:30,name:"Kulve Taroth",type:"Dragão Ancião",species:"Dragão Ancião",emoji:"👑",
        description:"A Dragoa Dourada. Coberta em manto de ouro, é caçada em um Siege de 16 jogadores para obter armas raras.",
        weaknesses:{fire:1,water:1,thunder:3,ice:2,dragon:1,poison:1,paralysis:2,sleep:1,blast:1},
        breakableParts:["Chifres Dourados","Manto de Ouro","Peito","Cauda"],
        locations:["Caverna do Ancião (Siege)"],
        strategy:["Trovão é a maior fraqueza.","O objetivo principal é QUEBRAR os chifres dourados — isso dá as melhores recompensas.","Use Part Breaker para quebrar mais rápido.","Fases diferentes: perseguição → combate → chifres.","Bombardier Mantle + Mega Barrel Bombs nos chifres quando ela dormir.","É um Siege — coopere com outros jogadores para maximizar recompensas."]
    },
    {
        id:31,name:"Lunastra",type:"Dragão Ancião",species:"Dragão Ancião",emoji:"🔵",
        description:"A Imperatriz das Chamas. Parceira do Teostra, com chamas azuis mais perigosas e uma Supernova ainda pior.",
        weaknesses:{fire:0,water:1,thunder:1,ice:3,dragon:1,poison:1,paralysis:1,sleep:1,blast:1},
        breakableParts:["Cabeça","Asas","Cauda"],
        locations:["Deserto de Wildspire","Fenda do Ancião"],
        strategy:["Gelo é a maior fraqueza — mas mesmo assim é apenas 3 estrelas.","A Supernova dela é PIOR que a do Teostra — causa dano contínuo numa área.","Windproof NÃO funciona contra o vento da Supernova dela.","Use Astera Jerky durante a Supernova para curar o dano contínuo.","Fireproof Mantle + Temporal Mantle para sobreviver.","As chamas azuis no chão causam dano — evite pisar nelas.","Cool Drink ajuda mas não é suficiente sozinho."]
    },
    {
        id:32,name:"Behemoth",type:"Dragão Ancião",species:"Dragão Ancião",emoji:"👹",
        description:"Crossover com Final Fantasy XIV. Um monstro colossal com mecânicas de MMO: tanking, DPS e Ecliptic Meteor.",
        weaknesses:{fire:1,water:1,thunder:2,ice:2,dragon:3,poison:2,paralysis:2,sleep:1,blast:1},
        breakableParts:["Chifres","Cauda (cortável)","Patas"],
        locations:["Fenda do Ancião (Missão Especial)"],
        strategy:["Dragão é a maior fraqueza.","MECÂNICA PRINCIPAL: Ecliptic Meteor mata TUDO — esconda atrás dos cometas!","Não destrua os cometas que caem — são seu escudo contra o Ecliptic Meteor.","Um jogador deve 'tankar' (manter a atenção) usando Enmity.","Enmity é obtido atacando a cabeça — o tank deve focar na cabeça.","Use Wide-Range para curar o time inteiro.","Jump emote no timing certo também evita Ecliptic Meteor (muito difícil)."]
    },
    {
        id:33,name:"Leshen",type:"Grande Monstro",species:"Relíquia",emoji:"🌿",
        description:"Crossover com The Witcher 3. Uma criatura anciã da floresta que controla natureza, corvos e Jagras.",
        weaknesses:{fire:3,water:0,thunder:1,ice:0,dragon:1,poison:1,paralysis:1,sleep:0,blast:1},
        breakableParts:["Chifres","Corpo"],
        locations:["Floresta Ancestral (Missão Especial)"],
        strategy:["Fogo é a maior fraqueza — absolutamente essencial.","Use Igni (sinal de Witcher) para derrubá-lo e remover controle dos Jagras.","Elimine os Revoltures (corvos) que ele invoca — causam dano constante.","Quando ele teleporta, procure a aura verde para saber onde reaparece.","A versão Ancient Leshen é MUITO mais difícil — leve um time completo.","Leve muita cura — o dano constante dos minions drena sua vida."]
    }
];
