// --- Dicionário de Traduções ---
const translations = {
    pt: {
        donate_button: "Quero Ajudar",
        hero_title: "Adote um Adolescente do Sertão",
        hero_subtitle: "Ajude-nos a levar mais de 15 jovens para o Acamp PBT 2025. Uma experiência de fé, comunhão e transformação de vidas.",
        hero_cta: "FAÇA PARTE DESTA MISSÃO",
        mission_title: "Nossa Missão no Sertão",
        mission_p1: `O sertão nordestino é o nosso campo missionário. Uma terra de gente forte, mas que representa um dos maiores desafios de evangelismo do Brasil. E nós estamos lá. Acreditamos que há Deus no sertão e, por isso, nossos corações estão dispostos a servir nossos amados irmãos.`,
        mission_p2: `Pensando nos nossos adolescentes que vivem essa realidade, o Plano B Teen criou a campanha "Adote um Adolescente do Sertão". Nosso objetivo é um só: abençoá-los e sermos abençoados por eles, trazendo-os para o ACAMP PBT 2025, de 19 a 23 de Novembro.`,
        mission_p3: "Esta campanha levantará as ofertas para custear a viagem e a inscrição de cada um deles. Mais do que uma viagem, é a chance de serem fortalecidos na fé e renovados em Cristo. Junte-se a nós nesta missão.",
        meet_title: "Conheça Nossos Irmãos",
        meet_subtitle: "Leia as histórias e veja os rostos por trás desta campanha.",
        help_title: "Como Você Pode Ajudar?",
        help_subtitle: "Toda ajuda é bem-vinda e fundamental para o sucesso desta missão.",
        pix_title: "Doe via PIX",
        pix_subtitle: "Oferte qualquer valor de forma rápida e segura.",
        pix_button: "Copiar Chave PIX",
        other_help_title: "Outras Formas de Ajudar",
        other_help_p1: `<strong class="font-gobold">Divulgando:</strong> Partilhe esta página com amigos e familiares. A sua voz amplifica a nossa missão.`,
        other_help_p2: `<strong class="font-gobold">Orando:</strong> Interceda por este projeto, pelos adolescentes e líderes. A oração é o nosso sustento.`,
        footer_copyright: "© 2025 Igreja Presbiteriana de Candeias. Todos os direitos reservados.",
        story_button: "Conhecer a história",
        copied_toast: "Chave PIX copiada!",
        age_unit: "anos",
        leader_role: "Líder"
    },
    en: {
        donate_button: "I Want to Help",
        hero_title: "Adopt a Teen from the Sertão",
        hero_subtitle: "Help us take over 15 young people to Acamp PBT 2025. An experience of faith, fellowship, and life transformation.",
        hero_cta: "BE PART OF THIS MISSION",
        mission_title: "Our Mission in the Sertão",
        mission_p1: "The northeastern Sertão is our mission field. A land of strong people, but one that represents one of the greatest evangelism challenges in Brazil. And we are there. We believe that there is God in the Sertão, and for that reason, our hearts are willing to serve our beloved brothers and sisters.",
        mission_p2: `Thinking of our teenagers who live this reality, Plano B Teen created the "Adopt a Teen from the Sertão" campaign. Our goal is one: to bless them and be blessed by them, bringing them to ACAMP PBT 2025, from November 19th to 23rd.`,
        mission_p3: "This campaign will raise funds to cover the travel and registration costs for each of them. More than a trip, it's a chance for them to be strengthened in their faith and renewed in Christ. Join us in this mission.",
        meet_title: "Meet Our Brothers and Sisters",
        meet_subtitle: "Read the stories and see the faces behind this campaign.",
        help_title: "How Can You Help?",
        help_subtitle: "All help is welcome and essential for the success of this mission.",
        pix_title: "Donate via PIX",
        pix_subtitle: "Offer any amount quickly and securely.",
        pix_button: "Copy PIX Key",
        other_help_title: "Other Ways to Help",
        other_help_p1: `<strong class="font-gobold">By Sharing:</strong> Share this page with friends and family. Your voice amplifies our mission.`,
        other_help_p2: `<strong class="font-gobold">By Praying:</strong> Intercede for this project, for the teenagers and leaders. Prayer is our sustenance.`,
        footer_copyright: "© 2025 Presbyterian Church of Candeias. All rights reserved.",
        story_button: "Read the story",
        copied_toast: "PIX Key copied!",
        age_unit: "years old",
        leader_role: "Leader"
    }
};

// --- Dados dos Jovens e Líderes ---
const profiles = [
    { 
        name: "Ravick", age: 16, image: "media/adolescentes_sertao/1ravick.png",
        story_pt: `Meu nome é Ravick, tenho 16 anos e moro em Exú, no sertão de Pernambuco, bem em cima da serra do Zé Gomes, onde faz muito frio (risos). Moro com meu pai e meu irmão, numa casa pequena no meio do mato. Sou de uma família de vaqueiros e roceiros, ajudo meu pai trabalhando na roça e como pedreiro, fazemos todo tipo de serviço braçal.\n\nPor aqui a roça é a nossa única opção, porque para outras oportunidades, que não precisem tanto do serviço braçal, tem que viajar para Crato - CE ou para São Paulo. Aqui o trabalho é constante e cansativo, mas em compensação a paz predomina porque não tem barulhos, a não ser o dos animais. Sou feliz aqui.\n\nSer um adolescente aqui no sertão é muito difícil, a maioria das pessoas tem a visão de que o catolicismo é a verdade, já que essa é a religião mais comum daqui e como as pessoas não tem estudo, elas acreditam sem questionar. São pessoas que desde pequenas são ensinadas que esse é o caminho e a verdade, o que torna o coração ainda mais duro e um ambiente difícil para evangelizar.`,
        story_en: `Meu nome é Ravick, tenho 16 anos e moro em Exú, no sertão de Pernambuco, bem em cima da serra do Zé Gomes, onde faz muito frio (risos). Moro com meu pai e meu irmão, numa casa pequena no meio do mato. Sou de uma família de vaqueiros e roceiros, ajudo meu pai trabalhando na roça e como pedreiro, fazemos todo tipo de serviço braçal.\n\nPor aqui a roça é a nossa única opção, porque para outras oportunidades, que não precisem tanto do serviço braçal, tem que viajar para Crato - CE ou para São Paulo. Aqui o trabalho é constante e cansativo, mas em compensação a paz predomina porque não tem barulhos, a não ser o dos animais. Sou feliz aqui.\n\nSer um adolescente aqui no sertão é muito difícil, a maioria das pessoas tem a visão de que o catolicismo é a verdade, já que essa é a religião mais comum daqui e como as pessoas não tem estudo, elas acreditam sem questionar. São pessoas que desde pequenas são ensinadas que esse é o caminho e a verdade, o que torna o coração ainda mais duro e um ambiente difícil para evangelizar.`
    },
    { 
        name: "Luiza", age: 14, image: "media/adolescentes_sertao/2Luiza.png",
        story_pt: `Oi, meu nome é Luiza e eu quero contar um pouco sobre minha vida cristã. Bom, minha conversão aconteceu depois que eu me batizei na igreja Presbiteriana de Exu, mas eu já tinha aceitado a Cristo antes disso, só que antes do batismo eu não entendia muito sobre. Como todos sabemos a vida cristão não é tão simples, porque temos que agir de uma forma diferente do que éramos antes.\n\nEu tenho cada dia mais tentado de uma forma boa buscar mais a Cristo, antes, dava a desculpa que não tinha tempo, mas agora sempre tiro um tempo para ler a bíblia e orar, e na escola, sempre que tenho oportunidade falo de Cristo para minhas amigas. Enfim, seguir e servir a Cristo não é tão simples, mas cada vez que sinto que me aproximo Dele me sinto melhor e mais feliz.`,
        story_en: `Oi, meu nome é Luiza e eu quero contar um pouco sobre minha vida cristã. Bom, minha conversão aconteceu depois que eu me batizei na igreja Presbiteriana de Exu, mas eu já tinha aceitado a Cristo antes disso, só que antes do batismo eu não entendia muito sobre. Como todos sabemos a vida cristão não é tão simples, porque temos que agir de uma forma diferente do que éramos antes.\n\nEu tenho cada dia mais tentado de uma forma boa buscar mais a Cristo, antes, dava a desculpa que não tinha tempo, mas agora sempre tiro um tempo para ler a bíblia e orar, e na escola, sempre que tenho oportunidade falo de Cristo para minhas amigas. Enfim, seguir e servir a Cristo não é tão simples, mas cada vez que sinto que me aproximo Dele me sinto melhor e mais feliz.`
    },
    { 
        name: "Anna Lilyan", age: 14, image: "media/adolescentes_sertao/3Anna.png",
        story_pt: `Oi, meu nome é Anna Lilyan e eu tenho 14 anos, faço parte da IPB de cacimba nova e desde pequena frequento a igreja com meus pais.\n\nHoje faço parte do ministério infantil ensinando também as crianças a seguir os caminhos de Deus assim como um dia fui ensinada. Sou grata a Deus por tudo que Ele fez, faz e ainda vai fazer na minha vida, e grata pelo privilégio que tenho de adorar a Ele...`,
        story_en: `Oi, meu nome é Anna Lilyan e eu tenho 14 anos, faço parte da IPB de cacimba nova e desde pequena frequento a igreja com meus pais.\n\nHoje faço parte do ministério infantil ensinando também as crianças a seguir os caminhos de Deus assim como um dia fui ensinada. Sou grata a Deus por tudo que Ele fez, faz e ainda vai fazer na minha vida, e grata pelo privilégio que tenho de adorar a Ele...`
    },
    { 
        name: "Raquel", age: 19, image: "media/adolescentes_sertao/4Raquel.png",
        story_pt: `Meu nome é Raquel Tavares e moro no sertão nordestino.\n\nViver o evangelho aqui não é fácil. A cidade em que vivo é muito marcada pela idolatria e pelo mundanismo, mas mesmo assim temos visto Deus agir de formas lindas.\n\nHoje eu tenho o privilégio de servir na minha igreja local, especialmente com o trabalho com crianças. Também participo do Projeto Alfha, onde usamos o futebol como ferramenta para evangelizar. Através dele, temos alcançado vidas e levado a Palavra para lugares onde talvez ela não chegaria de outra forma.\n\nMinha caminhada com Cristo começou cedo, mas foi ao longo dos anos que realmente entendi o que é viver para Ele. Ser cristã aqui é resistir, permanecer, mas também confiar e ver milagres acontecendo. Oro para que mais pessoas conheçam esse amor transformador e que a luz de Jesus continue brilhando no sertão.`,
        story_en: `Meu nome é Raquel Tavares e moro no sertão nordestino.\n\nViver o evangelho aqui não é fácil. A cidade em que vivo é muito marcada pela idolatria e pelo mundanismo, mas mesmo assim temos visto Deus agir de formas lindas.\n\nHoje eu tenho o privilégio de servir na minha igreja local, especialmente com o trabalho com crianças. Também participo do Projeto Alfha, onde usamos o futebol como ferramenta para evangelizar. Através dele, temos alcançado vidas e levado a Palavra para lugares onde talvez ela não chegaria de outra forma.\n\nMinha caminhada com Cristo começou cedo, mas foi ao longo dos anos que realmente entendi o que é viver para Ele. Ser cristã aqui é resistir, permanecer, mas também confiar e ver milagres acontecendo. Oro para que mais pessoas conheçam esse amor transformador e que a luz de Jesus continue brilhando no sertão.`
    },
    { 
        name: "Allana Beatryce", age: 14, image: "media/adolescentes_sertao/5Allana.png",
        story_pt: `Meu nome é Allana Beatryce e tenho 15 anos. Desde muito pequena fui criada na igreja pela minha mãe, inicialmente na Igreja Presbiteriana de Exu (da qual eu faço parte atualmente), mas um tempo depois comecei a frequentar outra igreja. Porém, após um período eu retonei para a Igreja Presbiteriana com a minha avó.\n\nApesar de ser cristã de berço, o momento em que eu verdadeiramente me converti foi em um acampamento da Igreja Presbiteriana de Bodocó/Exu que eu fui com os meus tios, em 2019. Naquele acampamento eu finalmente pude entender sinceramente o amor de Cristo por mim e me senti realmente abraçada por aquele povo e pelo Senhor.\n\nFiz o discipulado de batismo com o nosso líder de jovens na época (atual missionário da igreja) Daniel, e me batizei em 2022, aos 12 anos e a partir desse momento, comecei a servir na igreja. Já congrego há 6 anos e atualmente faço parte do Ministério de Louvor, Ministério Infantil e faço parte da liderança de jovens (como secretária)\n\nApesar dos desafios do sertão (como a forte influência do catolicismo e a pobreza), creio que Deus pode transformar a realidade desse povo tão forte, e planejo ser um de seus instrumentos para isso. Tenho o sonho de cursar medicina e assim, poder usar meus dons, talentos e futura profissão para a obra do Senhor.`,
        story_en: `Meu nome é Allana Beatryce e tenho 15 anos. Desde muito pequena fui criada na igreja pela minha mãe, inicialmente na Igreja Presbiteriana de Exu (da qual eu faço parte atualmente), mas um tempo depois comecei a frequentar outra igreja. Porém, após um período eu retonei para a Igreja Presbiteriana com a minha avó.\n\nApesar de ser cristã de berço, o momento em que eu verdadeiramente me converti foi em um acampamento da Igreja Presbiteriana de Bodocó/Exu que eu fui com os meus tios, em 2019. Naquele acampamento eu finalmente pude entender sinceramente o amor de Cristo por mim e me senti realmente abraçada por aquele povo e pelo Senhor.\n\nFiz o discipulado de batismo com o nosso líder de jovens na época (atual missionário da igreja) Daniel, e me batizei em 2022, aos 12 anos e a partir desse momento, comecei a servir na igreja. Já congrego há 6 anos e atualmente faço parte do Ministério de Louvor, Ministério Infantil e faço parte da liderança de jovens (como secretária)\n\nApesar dos desafios do sertão (como a forte influência do catolicismo e a pobreza), creio que Deus pode transformar a realidade desse povo tão forte, e planejo ser um de seus instrumentos para isso. Tenho o sonho de cursar medicina e assim, poder usar meus dons, talentos e futura profissão para a obra do Senhor.`
    },
    { 
        name: "Thayna", age: 14, image: "media/adolescentes_sertao/6Thayna.png",
        story_pt: `Meu nome é Thayna, tenho 14 anos, cresci na igreja, mas foi na pré-adolescência que descobri Jesus como meu melhor amigo.\n\nEssa descoberta mudou minha vida de forma profunda. Eu amo a arte, amo o lugar onde vivo, com sua história e sua energia, e amo minha cultura. Ser jovem cristã nessa geração é um desafio. É difícil manter a fé forte em um mundo que parece estar sempre mudando e que muitas vezes não entende ou não aceita a nossa perspectiva. É difícil não se deixar levar pelas pressões sociais e pelas tentações do mundo. Amo entregar minha juventude a Cristo e viver com jovens que tem o mesmo propósito que eu!`,
        story_en: `Meu nome é Thayna, tenho 14 anos, cresci na igreja, mas foi na pré-adolescência que descobri Jesus como meu melhor amigo.\n\nEssa descoberta mudou minha vida de forma profunda. Eu amo a arte, amo o lugar onde vivo, com sua história e sua energia, e amo minha cultura. Ser jovem cristã nessa geração é um desafio. É difícil manter a fé forte em um mundo que parece estar sempre mudando e que muitas vezes não entende ou não aceita a nossa perspectiva. É difícil não se deixar levar pelas pressões sociais e pelas tentações do mundo. Amo entregar minha juventude a Cristo e viver com jovens que tem o mesmo propósito que eu!`
    },
    { 
        name: "Luan", age: 16, image: "media/adolescentes_sertao/7Luan.png",
        story_pt: `Meu nome é Luan Almeida, tenho 16 anos e moro com a minha mãe em Ipubi, no sertão de Pernambuco. Meu primeiro contato com a igreja foi através da minha vó, que me levava para os cultos quando eu ainda era pequeno. com 14 anos, eu me converti na Igreja Presbiteriana de Cacimba Nova.\n\nPor morar numa região onde o catolicismo predomina, ser cristão aqui torna-se uma grande dificuldade, principalmente pela minha família por parte de pai, que são todos católicos e não aceitam que eu faça parte de outra religião. Mas, mesmo assim eu entendi que Cristo é o Senhor e Salvador da minha vida e a importância de fazer parte do corpo de Cristo. Mesmo em meio as dificuldades, escolhi fazer parte da Igreja Presbiteriana do Brasil.\n\nTenho vários sonhos, mas o que eu mais quero é que minha família por parte de pai finalmente aceite minha religião.`,
        story_en: `Meu nome é Luan Almeida, tenho 16 anos e moro com a minha mãe em Ipubi, no sertão de Pernambuco. Meu primeiro contato com a igreja foi através da minha vó, que me levava para os cultos quando eu ainda era pequeno. com 14 anos, eu me converti na Igreja Presbiteriana de Cacimba Nova.\n\nPor morar numa região onde o catolicismo predomina, ser cristão aqui torna-se uma grande dificuldade, principalmente pela minha família por parte de pai, que são todos católicos e não aceitam que eu faça parte de outra religião. Mas, mesmo assim eu entendi que Cristo é o Senhor e Salvador da minha vida e a importância de fazer parte do corpo de Cristo. Mesmo em meio as dificuldades, escolhi fazer parte da Igreja Presbiteriana do Brasil.\n\nTenho vários sonhos, mas o que eu mais quero é que minha família por parte de pai finalmente aceite minha religião.`
    },
    { 
        name: "João Felipe", age: 12, image: "media/adolescentes_sertao/8Joao.png",
        story_pt: `Olá, eu sou o João Felipe, tenho 12 anos, moro em Malhada, com meus pais e meus irmãos.\n\nCom 11 anos eu me converti e passei a entender que a vida de um jovem no sertão como um crente tem muitas dificuldades, como ir contra o que a grande maioria acredita ser verdade, a distância entre a minha casa e a Igreja, entre outras coisas. Mas, isso não me impede de ir pra igreja.`,
        story_en: `Olá, eu sou o João Felipe, tenho 12 anos, moro em Malhada, com meus pais e meus irmãos.\n\nCom 11 anos eu me converti e passei a entender que a vida de um jovem no sertão como um crente tem muitas dificuldades, como ir contra o que a grande maioria acredita ser verdade, a distância entre a minha casa e a Igreja, entre outras coisas. Mas, isso não me impede de ir pra igreja.`
    },
    { 
        name: "Jayane", age: 18, image: "media/adolescentes_sertao/9Jayane.png",
        story_pt: `Olá, me chamo Jayane, tenho 18 anos e sou do sertão do Pernambuco, Moreilândia.\n\nFaço parte da Igreja Presbiteriana de Brasil em Moreilândia há mais ou menos 4 anos. A minha caminhada começou quando meu tio voltou pra nossa cidade e começou a me chamar para participar de alguns cultos e alguns eventos, comecei a participar mais dos assuntos da igreja, a fazer discipulados e voltando de um culto eu decidi que queria me batizar e falei sobre esse meu desejo pra ele e me batizei, e continuo firme na igreja!`,
        story_en: `Olá, me chamo Jayane, tenho 18 anos e sou do sertão do Pernambuco, Moreilândia.\n\nFaço parte da Igreja Presbiteriana de Brasil em Moreilândia há mais ou menos 4 anos. A minha caminhada começou quando meu tio voltou pra nossa cidade e começou a me chamar para participar de alguns cultos e alguns eventos, comecei a participar mais dos assuntos da igreja, a fazer discipulados e voltando de um culto eu decidi que queria me batizar e falei sobre esse meu desejo pra ele e me batizei, e continuo firme na igreja!`
    },
    { 
        name: "Laiane", age: 21, image: "media/adolescentes_sertao/10Laiane.png",
        story_pt: `Meu nome é Laiane, tenho 21 anos e sou membro da Igreja Presbiteriana do Brasil em Moreilândia.\n\nSou filha de pastor e tive o privilégio de nascer em um lar cristão, sendo criada nos caminhos do Senhor desde pequena. A igreja sempre fez parte da minha vida, e foi nela que aprendi a amar a Deus, a servir e a viver para a glória dele.`,
        story_en: `Meu nome é Laiane, tenho 21 anos e sou membro da Igreja Presbiteriana do Brasil em Moreilândia.\n\nSou filha de pastor e tive o privilégio de nascer em um lar cristão, sendo criada nos caminhos do Senhor desde pequena. A igreja sempre fez parte da minha vida, e foi nela que aprendi a amar a Deus, a servir e a viver para a glória dele.`
    },
    { 
        name: "Bruno", age: 17, image: "media/adolescentes_sertao/11Bruno.png",
        story_pt: `Meu nome é Bruno Santos de Sá, tenho 17 anos e faço parte da Igreja Presbiteriana de Moreilandia. Conheci a Deus por meio do Projeto Alfha, através do Pastor Marcos, que reunia os meninos da nossa comunidade em um campo de futebol. Ali, entre uma bola e outra, ele falava sobre o amor de Jesus. Foi naquele campo simples que tive meu primeiro encontro com Cristo.\n\nAlgum tempo depois, comecei a namorar com a Laiane. Ela também foi um instrumento de Deus na minha vida, sempre pregando pra mim, me incentivando a buscar mais ao Senhor. Através dela, comecei a frequentar a igreja e, com o coração transformado, tomei a decisão mais importante da minha vida: me batizei e entreguei minha vida a Jesus.`,
        story_en: `Meu nome é Bruno Santos de Sá, tenho 17 anos e faço parte da Igreja Presbiteriana de Moreilandia. Conheci a Deus por meio do Projeto Alfha, através do Pastor Marcos, que reunia os meninos da nossa comunidade em um campo de futebol. Ali, entre uma bola e outra, ele falava sobre o amor de Jesus. Foi naquele campo simples que tive meu primeiro encontro com Cristo.\n\nAlgum tempo depois, comecei a namorar com a Laiane. Ela também foi um instrumento de Deus na minha vida, sempre pregando pra mim, me incentivando a buscar mais ao Senhor. Através dela, comecei a frequentar a igreja e, com o coração transformado, tomei a decisão mais importante da minha vida: me batizei e entreguei minha vida a Jesus.`
    },
    { 
        name: "Alysson", age: 18, image: "media/adolescentes_sertao/12Alysson.png",
        story_pt: `Em 2011, minha mãe se entregou a Cristo e passou a me levar à igreja. Eu ia apenas por ela, sem real interesse. Com a pandemia, deixei de ir mas, "infelizmente", minha mãe me fez voltar. Dessa vez, algo mudou: o coração de pedra foi quebrado, e entreguei minha vida a Cristo. Todo pensamento niilista se dissipou. Afundei no mar dos pecados, e Ele veio a mim sobre as águas.\n\nDesde então, enfrento desafios: (1) falta de suporte, (2) conflitos religiosos - vivemos numa região majoritariamente católica romana - que geram (3) desrespeito, especialmente dos mais velhos, que rejeitam até a palavra "crente". Mas não os culpo. Muitos lutam contra o (4) analfabetismo, pois deixaram a escola cedo para trabalhar, tornando-se vulneráveis a enganos.\n\nAinda assim, seguimos firmes, cumprindo o Ide (Mt 28:19), certos de que Ele venceu e está conosco até o fim (Mt 28:20).`,
        story_en: `Em 2011, minha mãe se entregou a Cristo e passou a me levar à igreja. Eu ia apenas por ela, sem real interesse. Com a pandemia, deixei de ir mas, "infelizmente", minha mãe me fez voltar. Dessa vez, algo mudou: o coração de pedra foi quebrado, e entreguei minha vida a Cristo. Todo pensamento niilista se dissipou. Afundei no mar dos pecados, e Ele veio a mim sobre as águas.\n\nDesde então, enfrento desafios: (1) falta de suporte, (2) conflitos religiosos - vivemos numa região majoritariamente católica romana - que geram (3) desrespeito, especialmente dos mais velhos, que rejeitam até a palavra "crente". Mas não os culpo. Muitos lutam contra o (4) analfabetismo, pois deixaram a escola cedo para trabalhar, tornando-se vulneráveis a enganos.\n\nAinda assim, seguimos firmes, cumprindo o Ide (Mt 28:19), certos de que Ele venceu e está conosco até o fim (Mt 28:20).`
    },
    { 
        name: "Ítalo", age: 17, image: "media/adolescentes_sertao/13Italo.png",
        story_pt: `Meu nome é ítalo, tenho 17 anos e sou membro da Igreja Presbiteriana de Candeias, em Moreilândia. Cresci em um lar católico romano e, por isso, sempre estive familiarizado apenas com os ensinamentos dessa tradição. Durante a adolescência, fui bastante influenciado por amigos que me conduziam a festas, bebidas e outros ambientes que me afastavam da vida espiritual. Nunca havia parado para refletir seriamente sobre minha fé.\n\nFoi no final de 2023 que minha história começou a mudar. Ao conhecer minha namorada, também fui apresentado ao verdadeiro evangelho. Através do testemunho dela, passei a me interessar pelas coisas de Cristo e permiti que Deus transformasse minha vida.\n\nHoje, recém-batizado na Igreja Presbiteriana, tenho o privilégio de servir ao Senhor de diversas formas. Faço parte do projeto Alfha, where evangelizamos crianças por meio do esporte, e também auxilio no ministério infantil da minha igreja local. É uma alegria poder compartilhar o amor de Cristo com outros, assim como um dia compartilharam comigo.`,
        story_en: `Meu nome é ítalo, tenho 17 anos e sou membro da Igreja Presbiteriana de Candeias, em Moreilândia. Cresci em um lar católico romano e, por isso, sempre estive familiarizado apenas com os ensinamentos dessa tradição. Durante a adolescência, fui bastante influenciado por amigos que me conduziam a festas, bebidas e outros ambientes que me afastavam da vida espiritual. Nunca havia parado para refletir seriamente sobre minha fé.\n\nFoi no final de 2023 que minha história começou a mudar. Ao conhecer minha namorada, também fui apresentado ao verdadeiro evangelho. Através do testemunho dela, passei a me interessar pelas coisas de Cristo e permiti que Deus transformasse minha vida.\n\nHoje, recém-batizado na Igreja Presbiteriana, tenho o privilégio de servir ao Senhor de diversas formas. Faço parte do projeto Alfha, where evangelizamos crianças por meio do esporte, e também auxilio no ministério infantil da minha igreja local. É uma alegria poder compartilhar o amor de Cristo com outros, assim como um dia compartilharam comigo.`
    },
    { 
        name: "Maria Luiza", age: 17, image: "media/adolescentes_sertao/14MariaLu.png",
        story_pt: `Meu nome é Maria Luiza, tenho 17 anos.\n\nMinha conversão não foi tão fácil, minha mãe não queria, além disso, minha família toda é católica. Mas desde de criança sentia a necessidade de ter Cristo, porém não tinha quem me ajudasse a conhece-lo, então, só fui indo, frequentei seitas, achando estar certa. Mas a minha conversão aconteceu há dois anos atrás.\n\nDesde de lá venho seguindo e servindo a Cristo. Um dos desafios, acredito que seja especificamente na escola, por julgamento de colegas e em algumas aulas. Outro desafio, seria a falta de suporte, vivemos numa região católica romana. Mesmo com dificuldades seguimos firmes em Cristo pregando o evangelho.`,
        story_en: `Meu nome é Maria Luiza, tenho 17 anos.\n\nMinha conversão não foi tão fácil, minha mãe não queria, além disso, minha família toda é católica. Mas desde de criança sentia a necessidade de ter Cristo, porém não tinha quem me ajudasse a conhece-lo, então, só fui indo, frequentei seitas, achando estar certa. Mas a minha conversão aconteceu há dois anos atrás.\n\nDesde de lá venho seguindo e servindo a Cristo. Um dos desafios, acredito que seja especificamente na escola, por julgamento de colegas e em algumas aulas. Outro desafio, seria a falta de suporte, vivemos numa região católica romana. Mesmo com dificuldades seguimos firmes em Cristo pregando o evangelho.`
    },
    { 
        name: "Gilmaria", age: "Líder", image: "media/adolescentes_sertao/15Gilmaria.png",
        story_pt: `Olá, eu me chamo Gilmaria, tenho 31 anos. Conheci a Cristo quando tinha 11 anos, através de uma moça chamada Edilene que veio morar perto da minha casa. Ela me chamou pra ir a escola Bíblica Dominical e a partir desse dia eu comecei ir pra igreja, mas somente no mês de julho, em 2004, eu entreguei a minha vida a Cristo e no dia 04 de dezembro de 2004, fiz o batismo e a profissão de Fé.`,
        story_en: `Olá, eu me chamo Gilmaria, tenho 31 anos. Conheci a Cristo quando tinha 11 anos, através de uma moça chamada Edilene que veio morar perto da minha casa. Ela me chamou pra ir a escola Bíblica Dominical e a partir desse dia eu comecei ir pra igreja, mas somente no mês de julho, em 2004, eu entreguei a minha vida a Cristo e no dia 04 de dezembro de 2004, fiz o batismo e a profissão de Fé.`
    },
    { 
        name: "Ana Carla", age: "Líder", image: "media/adolescentes_sertao/16AnaCarla.png",
        story_pt: `Olá, meu nome é Ana Carla e estou aqui para contar um pouco sobre a minha caminhada como uma cristã. Meu primeiro contato com a vida cristã foi em São Paulo enquanto morava lá e ao decorrer deste período eu fui convidada por uma amiga para conhecer a sua igreja. Sempre que possível, eu estava presente nos cultos. Entretanto, ao me mudar para Exu-Pe (de onde sou natural), perdi o contato. Anos se passaram e até que na pandemia fui evangelizada por um parente da família e Deus tocou no coração que sem Ele eu não poderia viver. Me converti, as dificuldades apareceram na minha vida cristã, mas mesmo com tudo, Deus sempre me mostrava que ele era tudo que eu precisava. Em maio de 2022 ocorreu meu batismo. Logo após este dia, sirvo a Deus com amor, sempre que possível falo dele em sala de aula para os alunos (pois sou professora) e mesmo que as dificuldades apareçam eu continuo a persistir, sei que nada disso é simples, mas sei que com ele tudo consigo, isso é o que preenche o vazio que um dia existiu dentro de mim.`,
        story_en: `Olá, meu nome é Ana Carla e estou aqui para contar um pouco sobre a minha caminhada como uma cristã. Meu primeiro contato com a vida cristã foi em São Paulo enquanto morava lá e ao decorrer deste período eu fui convidada por uma amiga para conhecer a sua igreja. Sempre que possível, eu estava presente nos cultos. Entretanto, ao me mudar para Exu-Pe (de onde sou natural), perdi o contato. Anos se passaram e até que na pandemia fui evangelizada por um parente da família e Deus tocou no coração que sem Ele eu não poderia viver. Me converti, as dificuldades apareceram na minha vida cristã, mas mesmo com tudo, Deus sempre me mostrava que ele era tudo que eu precisava. Em maio de 2022 ocorreu meu batismo. Logo após este dia, sirvo a Deus com amor, sempre que possível falo dele em sala de aula para os alunos (pois sou professora) e mesmo que as dificuldades apareçam eu continuo a persistir, sei que nada disso é simples, mas sei que com ele tudo consigo, isso é o que preenche o vazio que um dia existiu dentro de mim.`
    },
    { 
        name: "José Silva", age: "Líder", image: "media/adolescentes_sertao/17Jose.png",
        story_pt: `No sertão, onde o sol queima a terra e a vida, é uma luta diária, encontramos a verdadeira essência do ser humano. Como disse um sábio matuto: "A vida é como um rio, cheia de pedras e correntezas, mas quem não se deixa levar pela corrente, encontra a paz na margem."\n\nMinha jornada começou em meio às sombras da dependência do álcool, onde a esperança parecia distante. Eu, um homem perdido, fui encontrado por Cristo através do amor. O nascimento de minha filha, Láyza, foi um divisor de águas. Em um momento de desespero, o médico teve que escolher entre a vida de minha esposa, Liziane, e a de nossa filha. A escolha pela vida é sempre um ato de fé.\n\nDesde então, enfrentei desafios, mas também descobri a força que vem de Deus. Com cada medicação e cada fralda, sinto que o amor é o que nos sustenta. Pregar no sertão não é fácil não, quebramos carro, moto, mas o bem material não vale o que carrego no coração. Sou um matuto simples de poucas palavras, mas nem um intelectual não conhecendo o dono dela não entende não!`,
        story_en: `No sertão, onde o sol queima a terra e a vida, é uma luta diária, encontramos a verdadeira essência do ser humano. Como disse um sábio matuto: "A vida é como um rio, cheia de pedras e correntezas, mas quem não se deixa levar pela corrente, encontra a paz na margem."\n\nMinha jornada começou em meio às sombras da dependência do álcool, onde a esperança parecia distante. Eu, um homem perdido, fui encontrado por Cristo através do amor. O nascimento de minha filha, Láyza, foi um divisor de águas. Em um momento de desespero, o médico teve que escolher entre a vida de minha esposa, Liziane, e a de nossa filha. A escolha pela vida é sempre um ato de fé.\n\nDesde então, enfrentei desafios, mas também descobri a força que vem de Deus. Com cada medicação e cada fralda, sinto que o amor é o que nos sustenta. Pregar no sertão não é fácil não, quebramos carro, moto, mas o bem material não vale o que carrego no coração. Sou um matuto simples de poucas palavras, mas nem um intelectual não conhecendo o dono dela não entende não!`
    },
];

let currentLang = 'pt';

function translatePage(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    const langSwitcher = document.getElementById('lang-switcher');
    langSwitcher.textContent = lang === 'en' ? 'PT' : 'EN';
}

document.addEventListener('DOMContentLoaded', function() {
    const profilesGrid = document.getElementById('profiles-grid');
    const modal = document.getElementById('story-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalContent = document.querySelector('.modal-content');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalStory = document.getElementById('modal-story');
    const langSwitcher = document.getElementById('lang-switcher');

    function getAgeText(profile, lang) {
        if (typeof profile.age === 'number') {
            return `${profile.age} ${translations[lang].age_unit}`;
        }
        return translations[lang].leader_role;
    }

    function renderProfiles() {
        profilesGrid.innerHTML = ''; 
        profiles.forEach(profile => {
            const card = document.createElement('div');
            card.className = 'profile-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300';
            
            card.innerHTML = `
                <img src="${profile.image}" alt="Foto de ${profile.name}" class="w-full h-64 object-contain bg-pbt-purple-light cursor-pointer">
                <div class="p-4">
                    <h3 class="text-xl font-bold text-pbt-purple font-gobold">${profile.name}</h3>
                    <p class="text-gray-500">${getAgeText(profile, currentLang)}</p>
                    <button class="read-story-btn mt-4 w-full bg-pbt-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-pbt-green-dark transition-colors font-gobold">
                        ${translations[currentLang].story_button}
                    </button>
                </div>
            `;
            
            card.dataset.name = profile.name;
            card.dataset.age = profile.age; // Armazena o número ou a string 'Líder'
            card.dataset.image = profile.image;
            card.dataset.story_pt = profile.story_pt;
            card.dataset.story_en = profile.story_en;

            profilesGrid.appendChild(card);
        });
    }

    function openModal(data) {
        // Recria o texto da idade com base no idioma atual
        const profileForModal = { age: isNaN(data.age) ? data.age : Number(data.age) };
        const ageTextForModal = getAgeText(profileForModal, currentLang);

        modalTitle.textContent = `${data.name}, ${ageTextForModal}`;
        modalImage.src = data.image;
        modalImage.alt = `Foto de ${data.name}`;
        modalStory.textContent = currentLang === 'en' ? data.story_en : data.story_pt;
        
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-95');
    }

    function closeModal() {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('pointer-events-none');
        }, 300);
    }

    profilesGrid.addEventListener('click', function(e) {
        const card = e.target.closest('.profile-card');
        if (card && (e.target.tagName === 'IMG' || e.target.closest('.read-story-btn'))) {
            openModal(card.dataset);
        }
    });

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => e.target === modalOverlay && closeModal());
    document.addEventListener('keydown', (e) => e.key === 'Escape' && closeModal());

    langSwitcher.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        translatePage(currentLang);
        renderProfiles(); 
    });

    const copyPixBtn = document.getElementById('copy-pix-btn');
    const pixKey = document.getElementById('pix-key').textContent;
    const toast = document.getElementById('toast');

    copyPixBtn.addEventListener('click', function() {
        try {
            const tempInput = document.createElement('input');
            document.body.appendChild(tempInput);
            tempInput.value = pixKey;
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            toast.textContent = translations[currentLang].copied_toast;
            toast.classList.remove('opacity-0');
            copyPixBtn.innerHTML = translations[currentLang].copied_toast;

            setTimeout(() => {
                toast.classList.add('opacity-0');
                copyPixBtn.innerHTML = translations[currentLang].pix_button;
            }, 2000);

        } catch (err) {
            console.error('Falha ao copiar a chave PIX:', err);
            alert('Não foi possível copiar a chave. Por favor, copie manualmente.');
        }
    });

    renderProfiles();
});
