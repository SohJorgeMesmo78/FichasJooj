export const PERSONAGEM_DATA = {
  nome: 'Kosj',
  raca: 'Povo Lagarto',
  classe: 'Monge (Caminho do Eu Astral)',
  nivel: 5,
  antecedente: 'Forasteiro',
  alinhamento: 'Caótico Neutro',
  dano: 1,
  vida_dados: [8, 5, 5, 5, 8],
  inspiracao: 0,
  estados: {
    bracosAstrais: false,
  },
  ki_gasto: 3,
  vida_temporaria: 0,
  moedas: {
    pc: 0,
    pp: 0,
    pe: 0,
    po: 0,
    pl: 0,
  },
  dados_vida_atual: 0,
  atributos: [
    { name: 'Força', score: 7 },
    { name: 'Destreza', score: 12 },
    { name: 'Constituição', score: 10 },
    { name: 'Inteligência', score: 8 },
    { name: 'Sabedoria', score: 16 },
    { name: 'Carisma', score: 9 },
  ],
  pericias: [
    { name: 'Acrobacia', attr: 'Destreza', treinado: true },
    { name: 'Arcanismo', attr: 'Inteligência', treinado: false },
    { name: 'Atletismo', attr: 'Força', treinado: true },
    { name: 'Atuação', attr: 'Carisma', treinado: false },
    { name: 'Enganação', attr: 'Carisma', treinado: false },
    { name: 'Furtividade', attr: 'Destreza', treinado: true },
    { name: 'História', attr: 'Inteligência', treinado: false },
    { name: 'Intimidação', attr: 'Carisma', treinado: false },
    { name: 'Intuição', attr: 'Sabedoria', treinado: true },
    { name: 'Investigação', attr: 'Inteligência', treinado: false },
    { name: 'Lidar com Animais', attr: 'Sabedoria', treinado: false },
    { name: 'Medicina', attr: 'Sabedoria', treinado: false },
    { name: 'Natureza', attr: 'Inteligência', treinado: false },
    { name: 'Percepção', attr: 'Sabedoria', treinado: true, maestria: true },
    { name: 'Persuasão', attr: 'Carisma', treinado: false },
    { name: 'Prestidigitação', attr: 'Destreza', treinado: false },
    { name: 'Religião', attr: 'Inteligência', treinado: false },
    { name: 'Sobrevivência', attr: 'Sabedoria', treinado: true },
  ],
  features: [
    {
      name: 'Defesa sem Armadura',
      action: 'P',
      summary: 'Sua CA é 10 + DES + SAB (sem armadura/escudo).',
      description:
        'A partir do 1° nível, quando você não estiver vestindo nenhuma armadura nem empunhando um escudo, sua Classe de Armadura será 10 + seu modificador de Destreza + seu modificador de Sabedoria.',
    },
    {
      name: 'Artes Marciais',
      action: 'P/BA',
      summary:
        'Usa DES para ataques; dano d6; ataque bônus se atacar com arma de monge.',
      description:
        'No 1° nível, sua prática nas artes marciais concede a você maestria nos estilos de combate que utilizam golpes desarmados e armas de monge. Benefícios:\n- Você pode usar Destreza ao invés de Força para ataques e dano.\n- Você pode rolar um d6 no lugar do dano normal.\n- Quando você usa a ação de Ataque desarmado ou arma de monge, pode realizar um golpe desarmado com uma ação bônus.',
    },
    {
      name: 'Movimento Sem Armadura',
      action: 'P',
      summary: 'Deslocamento aumenta em 3m (10 ft) sem armadura/escudo.',
      description:
        'A partir do 2° nível, seu deslocamento aumenta em 3 metros enquanto você não estiver usando armadura nem empunhando um escudo. Esse bônus aumenta em níveis superiores. No 9° nível, ganha habilidade de se mover por superfícies verticais e líquidos.',
    },
    {
      name: 'Braços da Forma Astral',
      action: 'BA',
      summary:
        'Gasta 1 Ki p/ invocar braços. Dano energia; use SAB para testes de FOR; alcance +1,5m (5 ft).',
      description:
        'Como uma ação bônus, você pode gastar 1 ponto de ki para invocar os braços de sua forma astral. Cada criatura a sua escolha a até 3m deve ser bem-sucedida em salvaguarda de Destreza ou sofrerá dano de energia (2 dados de Artes Marciais). Dura 10 min. Permite usar SAB para testes e salvaguardas de FOR, e para ataques desarmados com alcance superior em 1,5m.',
    },
    {
      name: 'Defletir Projéteis',
      action: 'R',
      summary:
        'Reduz dano de projétil em 1d10 + DES + nível. Se zerar, pode pegar e jogar (1 Ki).',
      description:
        'A partir do 3° nível, você pode usar sua reação para defletir ou apanhar o projétil. Dano reduzido em 1d10 + su modificador de Destreza + seu nível de monge. Se reduzir a 0, pode apanhar o projétil e gastar 1 ponto de ki para realizar um ataque à distância como parte da mesma reação.',
    },
    {
      name: 'Queda Lenta',
      action: 'R',
      summary:
        'Usa sua reação para reduzir dano da queda em 5x seu nível de monge.',
      description:
        'A partir do 4º nível, você pode usar a sua reação quando cai para reduzir qualquer dano de queda que sofrer em um valor igual a 5x seu nível de monge.',
    },
    {
      name: 'Ataque Extra',
      action: 'P',
      summary: 'Ataca duas vezes ao invés de uma na ação de Ataque.',
      description:
        'Você pode atacar duas vezes, ao invés de uma, sempre que realizar a ação de Ataque no seu turno.',
    },
    {
      name: 'Ataque Atordoante',
      action: 'P/BA',
      summary: 'Gasta 1 Ki p/ atordoar alvo atingido (Salva CON).',
      description:
        'Ao atingir uma criatura com um ataque de arma corpo-a-corpo, você pode gastar 1 ponto de ki para fazer um ataque atordoante. O alvo deve ser bem sucedido num teste de resistência de Constituição ou ficará atordoado até o final do seu próximo turno.',
    },
  ],
  talentos: [
    {
      name: 'Especialista em Perícia (Nível 4)',
      action: 'P',
      summary: '+1 em Atributo, 1 nova Proficiência, 1 Maestria.',
      description:
        'Você aprimorou sua proficiência com uma perícia em particular, garantindo a você os seguintes benefícios:\n- Aumente o valor de um atributo a sua escolha em 1 (Destreza).\n- Você adquire proficiência em uma perícia a sua escolha (Furtividade).\n- Você ganha maestria com uma perícia (Percepção), o que implica que seu bônus de proficiência é dobrado para qualquer teste de habilidade feito com essa perícia.',
    },
  ],
  equipamentos: [
    {
      name: 'Pacote de explorador',
      description:
        'Pacote de Explorador. Inclui uma mochila, um saco de dormir, um kit de refeição, uma caixa de fogo, 10 tochas, 10 dias de rações e um cantil. O kit também tem 15 metros de corda de cânhamo amarrada ao lado dele.',
      value: '10 po',
    },
    { name: 'Fetiche de animal', value: '-' },
    { name: 'Roupas de viajante', value: '2 po' },
    { name: 'Caneca', value: '2 po' },
    { name: 'Besta', value: '35 po' },
  ],
  kiAbilities: [
    {
      name: 'Rajada de Golpes',
      cost: '1 Ki',
      action: 'BA',
      summary:
        'Imediatamente após a ação de Ataque, faz dois golpes desarmados.',
      description:
        'Imediatamente após você realizar a ação de Ataque no seu turno, você pode gastar 1 ponto de ki para realizar dois golpes desarmados como uma ação bônus.',
    },
    {
      name: 'Defesa Paciente',
      cost: '1 Ki',
      action: 'BA',
      summary: 'Usa a ação de Esquivar (Dodge).',
      description:
        'Você pode gastar 1 ponto de ki para realizar a ação de Esquivar como uma ação bônus no seu turno.',
    },
    {
      name: 'Passo do Vento',
      cost: '1 Ki',
      action: 'BA',
      summary: 'Usa Desengajar ou Disparar; distância de salto dobra.',
      description:
        'Você pode gastar 1 ponto de ki para realizar a ação de Desengajar ou Disparar como uma ação bônus no seu turno, e sua distância de salto é dobrada durante esse turno.',
    },
    {
      name: 'Defletir Projéteis (Ataque)',
      cost: '1 Ki',
      action: 'R',
      summary: 'Se reduzir dano a 0, gasta 1 Ki p/ arremessar de volta.',
      description:
        'Se você reduzir o dano de um ataque à distância para 0 e o projétil couber em sua mão, você pode gastar 1 ponto de ki para realizar um ataque à distância com a arma ou munição que você acabou de pegar, como parte da mesma reação.',
    },
    {
      name: 'Braços da Forma Astral',
      cost: '1 Ki',
      action: 'BA',
      summary: 'Invoca braços espectrais (10 min). SAB p/ FOR e DES.',
      description:
        'Como uma ação bônus, gaste 1 ponto de ki para invocar braços espectrais por 10 min. Criaturas a até 3m devem passar em salvaguarda de DES ou sofrer dano de energia (2 dados de Artes Marciais).\n\nUse Sabedoria para testes e salvaguardas de Força.\nAlcance aumentado em 1,5m para ataques desarmados.\nAtaques desarmados podem usar Sabedoria para ataque/dano e causam dano de energia.',
    },
    {
      name: 'Ataque Atordoante',
      cost: '1 Ki',
      action: 'P',
      summary: 'Gasta 1 Ki p/ atordoar alvo atingido (Salva CON).',
      description:
        'Ao atingir com ataque corpo-a-corpo, gaste 1 pt de chi (Ki). O alvo deve passar em salvaguarda de CON ou ficará atordoado até o final do seu próximo turno.',
    },
  ],
};
