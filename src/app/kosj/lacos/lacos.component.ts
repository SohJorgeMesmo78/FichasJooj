import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Personagem {
  nome: string;
  laco: string;
  apelidos: string[];
  currentApelidoIndex: number;
  foto: string;
  idadeConheceu: number;
  historia: string;
}

interface GrupoLacos {
  titulo: string;
  personagens: Personagem[];
}

@Component({
  selector: 'app-lacos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lacos.component.html',
  styleUrl: './lacos.component.scss',
})
export class LacosComponent implements OnInit, OnDestroy {
  showModal = false;
  selectedPersonagem: Personagem | null = null;

  grupos: GrupoLacos[] = [
    {
      titulo: 'Grupo',
      personagens: [
        {
          nome: "Rob'Ertun",
          laco: 'Melhor amigo',
          apelidos: ['Grande'],
          currentApelidoIndex: 0,
          foto: "assets/lacos/grupo/Rob'Ertun.png",
          idadeConheceu: 20,
          historia:
            'Grande foi quem me encontrou quando eu falhei sozinho. Um gigante no meio do deserto, mais interessado em ruínas do que em pessoas. Ele fala com pedras como se fossem velhas amigas e trata perigos como pequenos inconvenientes. Foi ele quem me tirou da areia quando eu não era forte o suficiente… e, desde então, seguimos juntos. Eu não entendo metade do que ele procura. E ele provavelmente não entende metade do que eu sou. Mas, de alguma forma, isso nunca pareceu importar.',
        },
        {
          nome: 'Muustir Nazire',
          laco: 'Amigo',
          apelidos: ['Chave', 'Branco'],
          currentApelidoIndex: 0,
          foto: 'assets/lacos/grupo/Muustir_Nazire.png',
          idadeConheceu: 20,
          historia:
            'boa, agora preciso de aajuda pra escvrever sobre alguns personagens, que não estão na  minha historia, são os personagens dos outros jogadores, um dos jogadores é o "Rob`Ertun ", que conhecemos como, grande, ele já escrevemos a historia, os outros vamos escrever agora, o primeiro é "Muustir Nazire ", quando eu conheci ele, ele parecia só um humano, mas depois descobri que ele é um dragão, assim como eu (ele é um dragão de verdade, diferente do kosj, mas o kosj ve eles como iguais), ele é a primeira oportunidade que o kosj teve de',
        },
        {
          nome: 'Ferian Eventide',
          laco: 'Amigo',
          apelidos: ['Mágico', 'Mago', 'Cabelo vermelho'],
          currentApelidoIndex: 0,
          foto: 'assets/lacos/grupo/Ferian Eventide.png',
          idadeConheceu: 20,
          historia:
            'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin pede. Donec elat.',
        },
        {
          nome: 'Zangado',
          laco: 'Amigo',
          apelidos: ['Triste', 'Bêbado', 'Barba', 'da lança'],
          currentApelidoIndex: 0,
          foto: 'assets/lacos/grupo/Zangado.png',
          idadeConheceu: 20,
          historia:
            'Phasellus hendrerit elementum eros. Pellentesque eget nisi. Vivamus fringilla sodales urna. Donec accumsan, ligula id imperdiet varius, est sem tincidunt ante, ac vestibulum arcu tellus sed neque.',
        },
      ],
    },
    {
      titulo: 'Tribo',
      personagens: [
        {
          nome: 'Duke',
          laco: 'Pai',
          apelidos: ['Pai', 'Líder'],
          currentApelidoIndex: 0,
          foto: 'assets/lacos/tribo/Duke.png',
          idadeConheceu: 0,
          historia:
            'Duke é o líder da tribo. Meu pai. Foi ele quem decidiu que eu viveria quando muitos achavam que eu não deveria. Forte como os líderes devem ser, ele governa pela força, como sempre foi entre os homens-lagarto. Nunca me tratou como especial. Nunca me tratou como fraco. Apenas como algo que ainda não tinha provado seu valor. Não sei se ele viu potencial em mim… ou apenas se recusou a descartar o próprio sangue. Mas foi por causa dele que tive a chance de continuar respirando. E, naquele lugar, isso já significava tudo.',
        },
        {
          nome: 'Sora',
          laco: 'Mãe',
          apelidos: ['Mãe'],
          currentApelidoIndex: 0,
          foto: 'assets/lacos/tribo/Sora.png',
          idadeConheceu: 0,
          historia:
            'Sora foi quem cuidou de mim quando eu não conseguia nem me manter em pé. Não sei se é minha mãe de sangue. Entre nós, isso nunca fez muita diferença. Foi ela quem me alimentou, me observou e insistiu para que eu tentasse acompanhar os outros — mesmo quando eu claramente não conseguia. Enquanto a tribo via fraqueza, ela via algo que ainda podia crescer. Nunca disse muito. Nunca precisou. Mas foi ao lado dela que aprendi as primeiras coisas sobre sobreviver… e talvez as primeiras sobre continuar tentando, mesmo quando ninguém espera que você consiga.',
        },
        {
          nome: 'Muansi',
          laco: 'Irmão',
          apelidos: ['Irmão', 'Braço'],
          currentApelidoIndex: 0,
          foto: 'assets/lacos/tribo/Muansi.png',
          idadeConheceu: 1,
          historia:
            'Muansi é meu irmão. Eu nasci primeiro. Mas, entre nós, isso nunca significou ser o melhor. Enquanto eu caía, ele avançava. Enquanto eu aprendia, ele já sabia. Forte, rápido e preciso, sempre foi tudo o que a tribo esperava de um verdadeiro caçador… e talvez de um líder. Eu era o primogênito. Ele era o forte. E, para Muansi, isso parecia errado. Como se eu ocupasse um lugar que não era meu. Ele me observava como quem enxerga um erro que não deveria existir. Mas, no dia em que finalmente fui embora… foi ele quem abriu o caminho. Até hoje, não sei se aquilo foi desprezo… ou a única forma que ele encontrou de me deixar ir.',
        },
      ],
    },
    {
      titulo: 'Monastério',
      personagens: [
        {
          nome: 'Mirel',
          laco: 'Mestre',
          apelidos: ['Mestre', 'Velho', 'Gigante'],
          currentApelidoIndex: 0,
          foto: 'assets/lacos/monasterio/Mirel.png',
          idadeConheceu: 16,
          historia:
            'Mirel foi quem me encontrou quando eu ainda não era forte o suficiente para sobreviver sozinho. Um velho no deserto… ou pelo menos foi isso que eu pensei que ele era. Foi ele quem me mostrou que aquilo que vemos nem sempre é o que realmente existe. Que o corpo é apenas uma casca. E que há algo maior além dele. No mosteiro, ele me ensinou a lutar, a respirar, a cair e levantar… mas, acima de tudo, a olhar para dentro. Ele nunca duvidou de mim. Mesmo quando eu duvidei. Mirel não tentou me moldar em algo que eu não era. Apenas me mostrou o caminho para entender o que eu sempre fui. E, antes de eu partir, me deixou algo que carrego até hoje: "Minha casca não define quem eu sou."',
        },
      ],
    },
  ];

  private intervalId: any;

  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.body.className = 'kosj-theme';
    }
    if (typeof window !== 'undefined') {
      this.startNicknameCycle();
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  openModal(p: Personagem) {
    this.selectedPersonagem = p;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedPersonagem = null;
  }

  private startNicknameCycle() {
    this.intervalId = setInterval(() => {
      this.grupos.forEach((grupo) => {
        grupo.personagens.forEach((p) => {
          if (p.apelidos.length > 1) {
            p.currentApelidoIndex =
              (p.currentApelidoIndex + 1) % p.apelidos.length;
          }
        });
      });
    }, 2000);
  }
}
