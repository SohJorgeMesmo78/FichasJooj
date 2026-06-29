export interface KairoCapitulo {
  numero: number;
  titulo: string;
  subtitulo: string;
  estacao: 'verao' | 'primavera' | 'inverno' | 'outono';
  paragrafos: string[];
}

export const KAIRO_HISTORIA: KairoCapitulo[] = [
  {
    numero: 1,
    titulo: 'Capítulo 1',
    subtitulo: 'O Pecado do Eclipse',
    estacao: 'primavera',
    paragrafos: [
      'Em Feywild, as leis não são escritas em papel, são moldadas em magia e tradição. A Corte de Verão, guiada pela paixão inflamável, e a Corte de Inverno, regida pela frieza calculista, mantinham um distanciamento hostil há milênios. Mas a mãe de Nailo, uma nobre cavaleira do Verão, e seu pai, um estrategista do Inverno, cometeram o maior dos crimes: eles se apaixonaram.',
      'A união deles foi um segredo mantido a duras penas, até o dia em que Nailo nasceu. O choro da criança ecoou pela floresta mágica, e sua pele irradiava uma energia que oscilava entre o calor reconfortante e a brisa gélida. Ele era a prova viva de que a separação das cortes era uma mentira política. Quando os espiões feéricos descobriram o bebê, a notícia correu como fogo seco. A criança foi apelidada de "O Eclipse" — uma anomalia que ameaçava o status quo. Ambas as rainhas exigiram que a "mancha" fosse apagada. Sem exércitos ou aliados, os pais de Nailo abandonaram seus postos, seus títulos e fugiram para os ermos sombrios da Agrestia das Fadas.',
    ],
  },
  {
    numero: 2,
    titulo: 'Capítulo 2',
    subtitulo: 'A Infância nas Sombras',
    estacao: 'verao',
    paragrafos: [
      'Durante dez anos, a vida de Nailo foi uma eterna mudança. Ele não conhecia grandes castelos de cristal ou os bailes eternos do Verão. Seu mundo eram acampamentos escondidos, cavernas camufladas e o amor incondicional de pais que viviam com os ouvidos atentos a qualquer galho quebrado.',
      'Apesar da vida dura e do medo constante, Nailo encontrou seu refúgio na Primavera. Seus pais faziam de tudo para blindá-lo do terror da perseguição, ensinando-o a ver a beleza nas pequenas coisas e a tirar alegria de qualquer situação. Ele aprendeu a se mover em silêncio absoluto observando a postura defensiva do pai e herdou o sorriso invencível da mãe. Em seus momentos de distração, quando se sentia seguro o suficiente para rir solto, seus olhos e a magia ao seu redor brilhavam em um tom de amarelo extremamente vivo e chamativo que contrastava com a escuridão da floresta em que se escondiam.',
    ],
  },
  {
    numero: 3,
    titulo: 'Capítulo 3',
    subtitulo: 'A Fenda Antiga',
    estacao: 'inverno',
    paragrafos: [
      'O fim da paz provisória chegou na noite do décimo aniversário de Nailo. Os cães de caça da Corte de Inverno e os batedores implacáveis do Verão os encurralaram simultaneamente em um desfiladeiro. Sem saída, seus pais sacaram as armas, trocando um último olhar de cumplicidade. A ordem para o filho foi clara: <em>Corra e não olhe para trás.</em>',
      'Nailo correu desesperado, com o som do combate e dos feitiços explodindo às suas costas. Em seu pânico, o chão cedeu. Ele rolou por uma encosta de terra escura e caiu dentro de uma fenda profunda, aterrissando no chão empoeirado de ruínas antigas e esquecidas até mesmo pelas fadas. O som das garras dos cães se aproximava rapidamente do buraco acima dele.',
      'Tateando no escuro, sua mão esbarrou em algo: um pergaminho antigo (scroll) coberto por hieróglifos incompreensíveis. Preso a ele, havia um pequeno pedaço de papel desgastado com três palavras soltas em élfico antigo. Com as criaturas rosnando e começando a descer pela fenda, Nailo, tremendo, leu as palavras em voz alta. Ao acertar a pronúncia da última sílaba mágica, o pergaminho se despedaçou em chispas de luz, e o mundo ao redor do menino foi engolido pelo vazio.',
    ],
  },
  {
    numero: 4,
    titulo: 'Capítulo 4',
    subtitulo: 'A Promessa de Dedinho',
    estacao: 'outono',
    paragrafos: [
      'O silêncio substituiu os rosnados. Nailo abriu os olhos e se viu em uma pequena sala de pedra fria. O chão estava coberto de símbolos arcanos desenhados a giz, papéis antigos voavam levemente e uma corrente colossal prendia a figura central da sala. No meio de um círculo ritualístico, encontrava-se um Djinni azul gigantesco. Mesmo sentado, a criatura era monumental — se Nailo ficasse de pé ao seu lado, mal bateria na altura do peito do ser elemental. Mais ao canto, jogada no chão como lixo, repousava uma adaga.',
      'A criança da Primavera, assustada com o que havia acontecido a segundos atrás, e confusa com o que estava acontecendo agora, se apresentou. Limpando a poeira das calças, o Djinni, surpreso, quebrou o silêncio.',
      '— A companhia não me desagrada — retumbou a voz profunda da entidade.',
      'Durante a conversa, o Djinni tentou explicar o nó mágico de seu tormento. Um feiticeiro antigo o havia selado dentro do semiplano contido naquela adaga, mas cometeu o requinte de crueldade de jogar a própria adaga para dentro da prisão. Um paradoxo mágico perfeito. Era impossível que a magia fosse quebrada de dentro para fora com os recursos que tinham ali, e na situação que eles se encontravam.',
      '— Mas você não faz parte dessa equação, criança — explicou o Gênio, apontando para uma porta negra no fundo da sala. — Você não está selado. Pode simplesmente passar por aquela porta e ir embora.',
      'Nailo olhou para a porta, depois para as correntes pesadas, e caminhou até o gigante azul. Ignorando as regras complexas da magia arcana, he esticou a mãozinha e levantou o dedo mindinho em direção ao peito do Djinni.',
      '— Eu prometo de dedinho que mesmo que eu saia, eu irei voltar para te tirar daqui. Ninguém merece ficar aprisionado assim sem motivo.',
      'O Gênio arregalou os olhos. Em Feywild, uma promessa infantil carregava um peso cósmico imensurável. O conceito de confiança e amizade havia se perdido há séculos para o elemental, mas ali, diante de uma criança sorridente, o pacto arcano mais improvável da história foi forjado através de um mindinho estendido.',
      'O Djinni riu, uma risada rouca e genuína que fez a sala tremer, e aceitou a promessa, infundindo a primeira faísca de poder arcano na alma do garoto.',
      'Nailo pegou a adaga do chão, caminhou até a porta negra e abriu a maçaneta. Antes de atravessar o umbral que o levaria para longe do plano da adaga, ele olhou por cima do ombro, sorriu largo e disse:',
      '— Até mais.',
    ],
  },
  {
    numero: 5,
    titulo: 'Capítulo 5',
    subtitulo: 'O "Azulão" e a Floresta',
    estacao: 'verao',
    paragrafos: [
      'Assim que a porta negra bateu às suas costas, Kairo se viu no meio de uma planície vasta, espremida entre as encostas de uma grande montanha e a floresta densa e mística de *Mythos*. Foi só quando o silêncio da noite o abraçou que o garoto arregalou os olhos: em meio a toda a confusão e promessas, ele havia esquecido de perguntar o nome da entidade milenar que acabou de salvar sua vida. A partir daquele dia, o ser todo-poderoso seria chamado apenas de "Gênio", "Amigão" ou "Azulão".',
      'Os primeiros anos na floresta foram de sobrevivência crua. Sem a proteção dos pais, Kairo dependia dos estrondos mágicos de seu Raio Místico — canalizados pela adaga — para abater animais. O trauma da perda cobrou seu preço. Durante muito tempo, as noites de transe feérico de Kairo eram conturbadas, e he acordava flutuando violentamente entre as estações: dias de Inverno profundo, onde a tristeza gélida não o deixava sair da caverna, seguidos de dias de Verão, onde a fúria flamejante o fazia destruir árvores com magia.',
      'Porém, a resiliência falou mais alto. Kairo percebeu que ceder à dor seria esquecer o que seus pais haviam se sacrificado para proteger. Após meses meditando, ele conseguiu ancorar sua alma. Decidiu que enfrentaria o mundo com o mesmo sorriso invencível de sua mãe, mas também com o olhar calculista de seu pai, estabilizando-se no centro em sua forma de Primavera.',
    ],
  },
  {
    numero: 6,
    titulo: 'Capítulo 6',
    subtitulo: 'O Valor do Ouro e a Máscara de Inverno',
    estacao: 'primavera',
    paragrafos: [
      'A floresta, embora familiar, tornou-se solitária demais para um Eladrin da Primavera. As luzes de Ozenes, uma cidade portuária ao longe, o atraíram. Antes de se aventurar pelas ruas, Kairo passou dias escondido nos telhados, observando a dinâmica humana. Ele notou que as pessoas entregavam pequenos discos dourados umas às outras em troca de peixe e pão. Confuso, ele entrou no semiplano da adaga e perguntou ao Azulão. O Gênio, com um suspiro cansado, explicou o conceito civilizado de "dinheiro".',
      'Com a lição anotada, Kairo traçou um plano. Ele entrou em transe, forçando sua mente a assumir a frieza do Inverno. Na manhã seguinte, com cabelos lisos, brancos e pele pálida, o garoto sorrateiro roubou duas moedas de ouro de mercadores desatentos, escondendo-se antes do pôr do sol. No outro dia, he acordou em sua radiante forma de Primavera: cabelos verdes esvoaçantes e pele brilhante. Kairo entrou na taverna local e, achando que duas moedas de ouro eram o equivalente a uma fortuna inesgotável, pediu tudo o que tinha direito. Ele devorou porções infinitas de peixe fatiado e bolinhos de arroz.',
      'Quando a conta chegou, o choque: as moedas não cobriam o banquete. Para não ser jogado no mar, o jovem precisou lavar pratos e limpar mesas por semanas. O castigo, no entanto, foi sua maior escola. Trabalhando ali, Kairo aprendeu a ler as pessoas, a ouvir boatos e a entender como Ozenes funcionava. Logo, ele passou a fazer pequenos bicos carregando cargas para os mercadores no cais, intercalando com dias ocasionais de "Inverno" para realizar furtos precisos quando o dinheiro faltava. Um ladrão de cabelos brancos roubou à noite, e um trabalhador sorridente de cabelos verdes gastava o dinheiro de dia.',
    ],
  },
  {
    numero: 7,
    titulo: 'Capítulo 7',
    subtitulo: 'Goblins, Solidão e o Tomo Arcano',
    estacao: 'primavera',
    paragrafos: [
      'Aos poucos, carregar caixotes perdeu a graça, e Kairo se registrou na Guilda local para missões de escolta e proteção nas estradas. Foi assim que ele conheceu seu maior obstáculo: os Goblins. Passando semanas emboscado nas matas ao redor da cidade e observando os acampamentos dessas criaturas, a inteligência de Kairo brilhou. Sem professor algum, apenas ouvindo e deduzindo, ele aprendeu o idioma Goblin na marra, o que o tornou um aventureiro muito mais eficiente.',
      'O Gênio assistia a tudo isso de dentro da lâmina. A entidade milenar, que a princípio via Kairo apenas como um bilhete de saída aleatório, começou a perceber o verdadeiro potencial do garoto. Ele levava jeito para a coisa. Contudo, o Azulão também notou algo que o sorriso da Primavera tentava esconder: nos momentos de silêncio, a solidão de Kairo era ensurdecedora.',
      'Em uma de suas visitas à adaga, o Gênio materializou um livro de couro escuro e o jogou no colo de Kairo.',
      '— Você tem sido útil, criança. Mas está canalizando magia como um amador — resmungou o Gênio, disfarçando qualquer traço de empatia com seu tom pragmático de sempre. — Use isso. Tem algumas anotações que podem evitar que você morra de forma estúpida e me deixe preso aqui para sempre.',
      'Aquele era o seu *Livro das Sombras*. Ao folhear as páginas rúnicas, Kairo encontrou feitiços novos, mas um em especial chamou sua atenção: *Encontrar Familiar*. Naquela mesma noite, em seu quarto alugado em Ozenes, Kairo conjurou a magia. Das sombras e da luz feérica, surgiu **Shift**. O pequeno companheiro animal — que mudava de forma dependendo do dia, ora um lagarto sorrateiro, ora um falcão ágil — tornou-se seu companheiro.',
      'Agora, aos 20 anos, armado com seu sorriso extravagante, seu fiel familiar Shift, a magia trovejante de um Gênio que virou um amigo rabugento e uma promessa de dedinho que ecoava pelo multiverso, Kairo estava pronto para deixar Ozenes e abraçar seu destino.',
    ],
  },
];
