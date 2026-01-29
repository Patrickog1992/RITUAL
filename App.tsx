import React, { useState } from 'react';
import { Flame, ShieldCheck, Lock, Star, AlertTriangle, Clock, Gift, Check } from 'lucide-react';
import { Button } from './components/Button';
import { TestimonialCard } from './components/TestimonialCard';
import { FAQItem } from './components/FAQItem';
import { RitualPage } from './components/RitualModal';
import { SocialProofPopup } from './components/SocialProofPopup';

const App = () => {
  const [view, setView] = useState<'landing' | 'ritual'>('landing');

  const handleOpenRitual = () => {
    window.scrollTo(0, 0);
    setView('ritual');
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    setView('landing');
  };

  if (view === 'ritual') {
    return (
      <>
        <SocialProofPopup />
        <RitualPage onBack={handleBack} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0a0a] text-gray-200 font-poppins pb-24">
      
      <SocialProofPopup />

      {/* Warning Bar */}
      <div className="bg-red-900/30 text-red-200 text-[10px] md:text-xs py-3 px-4 text-center border-b border-red-900/50 uppercase tracking-widest font-semibold leading-relaxed">
        ATENÇÃO: O início do ano marca a abertura de um novo ciclo energético. No dia <span className="text-white font-bold underline decoration-red-500">10 de janeiro</span> o Ritual da Chama de 5 Noites atua com força ampliada, acelerando o retorno de um amor perdido ou a atração irresistível de um novo amor, despertando desejo e conexão intensa.
      </div>

      <main className="max-w-2xl mx-auto px-5 pt-8">
        
        {/* Headline */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4 leading-tight">
            Sussurre o nome da pessoa desejada nesta chama sagrada… e em até 5 noites, ela vai ficar totalmente obcecada por você ou alguém novo surgirá, tomado por um desejo impossível de ignorar.
          </h1>
        </header>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-orange-900/50 mb-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img 
            src="https://i.imgur.com/rJhARQH.jpg" 
            alt="Vela Sagrada" 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
          />
        </div>

        {/* Hook */}
        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-gray-300">
          <p className="font-medium text-white">
            Ele ou ela vai se revirar na cama à noite, incapaz de tirar você da cabeça. E, na quinta noite, vai rastejar de volta para você — ou surgir na sua vida com uma intensidade inexplicável — como se a vida dele(a) dependesse disso.
          </p>

          <p>Eu não imploro para ninguém.</p>
          <p>Eu não corro atrás de homens ou mulheres.</p>
          <p>E com certeza não fico sentada(o) chorando, me perguntando por que a pessoa que eu quero “precisa de espaço”.</p>
          <p className="text-orange-200 font-semibold italic border-l-4 border-orange-600 pl-4 bg-orange-900/10 py-2">
            Porque eu encontrei algo mais antigo. Mais sombrio. Algo contra o qual nenhum coração humano consegue lutar.
          </p>
          
          <p>
            Tudo o que fiz foi entregar o nome da pessoa que eu queria trazer de volta — ou atrair pela primeira vez — a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.
          </p>
          <p>Ela sussurrou o nome dele ou dela no fogo.</p>
          <p>E em menos de 48 horas, minha realidade começou a mudar.</p>
          <p>Mensagens. Sinais. Atenção inesperada. Conexões surgindo do nada.</p>
          <p>Implorando. Chorando. Rastejando de volta — ou se aproximando com uma intensidade que eu nunca tinha vivido antes — como alguém que perdeu completamente o controle.</p>
        </div>

        {/* Section: The Last Time */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">A Última Vez Que Ele (Ou Ela) Se Afastou…</h2>
          <p className="text-center italic text-gray-400 mb-4">Ou quando ninguém especial parecia aparecer na minha vida…</p>
          <p>A pessoa achou que podia simplesmente sumir. Ou o universo parecia me ignorar.</p>
          <p>Me deixar no vácuo.</p>
          <p>Agir como se o que eu sentia não tivesse significado nada.</p>
          <p>Ahhh… que fofo.</p>
          <p>Entreguei o nome — ou a intenção clara de atrair o amor certo — à Sacerdotisa Azara. Ela acendeu a vela sagrada em seu templo de fogo, pronunciou o nome ou abriu o caminho energético, e deixou o fogo fazer o trabalho.</p>
        </div>

        {/* Priestess Image */}
        <div className="my-8 rounded-xl overflow-hidden shadow-2xl border border-orange-900/50 relative">
          <img 
            src="https://i.imgur.com/kkGFDp4.jpg" 
            alt="Sacerdotisa Ritual" 
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
            Sacerdotisa Azara
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
          <div>
            <h3 className="text-orange-400 font-bold uppercase text-sm mb-1">Na manhã seguinte?</h3>
            <p className="italic text-gray-300">Uma mensagem do nada. Um encontro inesperado. Ou alguém dizendo: “Tive o sonho mais estranho com você. Não consigo parar de pensar em você.”</p>
          </div>
          <div>
            <h3 className="text-orange-400 font-bold uppercase text-sm mb-1">Na terceira noite?</h3>
            <p className="italic text-gray-300">37 ligações perdidas. Mensagens sem parar. Ou uma conexão tão intensa que parecia destino: “Me desculpa… não sei o que está acontecendo comigo. Eu preciso te ver.”</p>
          </div>
          <div>
            <h3 className="text-orange-400 font-bold uppercase text-sm mb-1">Na quinta noite?</h3>
            <p className="italic text-gray-300">Ele ou ela estava na minha porta. Ou totalmente presente na minha vida. Olhos vermelhos. Voz tremendo. Jurando que nunca mais iria embora.</p>
          </div>
          <p className="font-bold text-white pt-2">
            Disse que sentia o peito em chamas e que eu era a única coisa capaz de apagar aquele fogo.
            <br/><br/>
            Tudo isso em menos de 5 noites.
          </p>
        </div>

        {/* Why it Works */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">Por Que Isso Funciona (E Por Que Todo o Resto Falha)</h2>
          <p>A maioria das pessoas faz tudo errado.</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-400 marker:text-red-500">
            <li>Choram abraçadas ao travesseiro.</li>
            <li>Imploram atenção.</li>
            <li>Stalkeiam redes sociais.</li>
            <li>Ou simplesmente esperam o “amor aparecer”.</li>
          </ul>
          
          <p className="italic text-gray-500">Ouvem amigos dizendo: “Dá tempo ao tempo.”</p>
          <p className="text-white font-bold text-lg">Deixa eu te contar a verdade:</p>
          <p>O amor não volta por espaço. E não aparece por acaso.</p>
          <p>Ele volta — ou surge — quando algo se agarra à alma e não solta mais.</p>
          <p className="bg-gradient-to-r from-orange-900/40 to-transparent p-4 border-l-4 border-orange-500 rounded-r-lg">
            E é exatamente isso que essa chama faz.
          </p>
          <p>Ela não pede. Não convence. Ela queima o seu nome — ou a sua energia — no espírito da pessoa certa até você ser tudo em que ela consegue pensar.</p>
        </div>

        {/* Persian Temple Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">O Segredo Proibido dos Templos de Fogo da Pérsia</h2>
          <div className="rounded-xl overflow-hidden shadow-2xl mb-6">
             <img src="https://i.imgur.com/RfnM0Aw.jpg" alt="Templo Persa" className="w-full h-auto" />
          </div>
          <div className="space-y-6 text-gray-300">
            <p>Isso não é um truque moderno de “manifestação”.</p>
            <p>Não são velas de loja barata nem pensamentos positivos.</p>
            <p>É um ritual de fogo antigo que remonta a mais de 3.000 anos, às sacerdotisas zoroastristas da Pérsia.</p>
            <p>Elas sabiam algo que foi escondido das pessoas por séculos:</p>
            <p className="font-bold text-white">Todo ser humano tem um ponto na alma que pode ser incendiado. E quando é aceso, ele queima por uma única pessoa — e apenas uma.</p>
            <p>Rainhas e reis usavam isso para manter seus amores leais. Tão leais que abandonavam amantes, largavam guerras pela metade e atravessavam reinos inteiros apenas para estar perto de quem incendiou sua alma novamente.</p>
            <p>Os sacerdotes odiavam isso. Chamavam de perigoso. Tentaram enterrar esse conhecimento. Mas os sussurros nunca cessaram.</p>
            <p>Porque toda pessoa que usava sabia a verdade:</p>
            <div className="text-center p-6 bg-orange-950/30 rounded-lg border border-orange-800">
              <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="italic font-serif text-lg text-orange-100">Uma vez que o nome entra na chama sagrada, a alma fica ligada a você. E esse fogo nunca se apaga.</p>
            </div>
          </div>
        </div>

        {/* The Switch */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center uppercase">As pessoas acham que estão no controle de tudo</h2>
          <p className="text-center font-bold text-red-500">Não estão!!</p>
          <p>Todo ser humano tem um interruptor escondido dentro de si.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-green-900/20 p-4 rounded border border-green-900/50">
               <h4 className="font-bold text-green-400 mb-2 uppercase text-xs">Quando está ligado?</h4>
               <p className="text-sm">Não consegue pensar. Não dorme. Não para de imaginar você.</p>
             </div>
             <div className="bg-gray-800 p-4 rounded border border-gray-700">
               <h4 className="font-bold text-gray-400 mb-2 uppercase text-xs">Quando está desligado?</h4>
               <p className="text-sm">Fica frio. Distante. Some.</p>
             </div>
          </div>

          <p>O Ritual da Chama de 5 Noites liga esse interruptor novamente.</p>
          <p className="font-bold text-orange-200">Por isso as pessoas chamam de "ritual das pessoas em CHAMAS!"</p>
          <p>Porque quando o nome toca na chama, essa pessoa vai se queimar por você. E SOMENTE POR VOCÊ.</p>
        </div>

        {/* 5 Nights Breakdown */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">O Que Acontece Ao Longo das 5 Noites</h2>
          <div className="rounded-xl overflow-hidden shadow-2xl mb-8">
             <img src="https://i.imgur.com/EcmtW16.jpg" alt="Vela acesa na escuridão" className="w-full h-auto" />
          </div>
          
          <div className="space-y-6 text-gray-300">
            <p>Isso não são meses de espera. Não são anos de terapia. Não é “manifestar por seis meses e torcer para dar certo”.</p>
            <p>A Sacerdotisa Azara sussurra o nome na chama sagrada e, em até 5 noites, o mundo da pessoa vira de cabeça para baixo.</p>
            
            <div className="space-y-4 mt-8">
              {[
                { n: 1, title: "A Primeira Faísca", desc: "No momento em que o nome entra na chama, algo muda. A pessoa vai se sentir inquieta naquela noite. Vai se revirar às 3 da manhã sem saber por quê. Seu rosto vai piscar na mente dela. Sentirá uma dor estranha no peito que não consegue explicar." },
                { n: 2, title: "O Calor Aumenta", desc: "Começa a pensar em você mais. Muito mais. Vai se pegar olhando fotos antigas suas. Revivendo conversas. A ideia de você com outra pessoa vai deixá-la enjoada." },
                { n: 3, title: "O Fogo se Espalha", desc: "Agora não consegue mais se livrar de você. Vai sonhar com você de forma tão real que acorda confusa. Os amigos vão perceber que algo está errado. Vai mandar uma mensagem fraca só para “testar o terreno”, porque não aguenta mais a pressão." },
                { n: 4, title: "O Incêndio", desc: "Está perdendo o controle. Não consegue focar no trabalho. Não sente prazer em nada. Todas as outras pessoas parecem sem graça perto de você. O fogo queimou tudo. Só você restou na mente dela." },
                { n: 5, title: "Rendição Total", desc: "Ela quebra. O orgulho? Sumiu. As defesas? Viraram cinzas. Liga. Manda mensagem. Aparece. Chora, pede desculpas e jura que nunca mais vai te deixar. Diz coisas como: “Não sei o que aconteceu comigo, mas não consigo viver sem você.”" }
              ].map((night) => (
                <div key={night.n} className="bg-black/40 p-5 rounded-lg border-l-4 border-orange-600">
                  <h3 className="font-bold text-orange-500 mb-2">Noite {night.n}: {night.title}</h3>
                  <p className="text-sm">{night.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 italic text-gray-400">Ou… se não havia ninguém específico, alguém novo surge, dominado por esse mesmo fogo.</p>
          </div>
        </div>

        {/* Warning Interruption */}
        <div className="mt-12 bg-red-950/20 p-6 rounded-xl border border-red-900/50 text-center">
          <div className="flex justify-center mb-4"><AlertTriangle className="text-red-500 w-10 h-10" /></div>
          <h3 className="text-xl font-bold text-red-400 mb-4">Mas Preciso Te Avisar…</h3>
          <p className="text-gray-300 mb-4">Isso não é brincadeira. Quando a Sacerdotisa Azara realiza esse ritual, as pessoas não apenas voltam.</p>
          <p className="font-bold text-white mb-4">Elas grudam. Elas se tornam obcecadas. Elas não se cansam de você.</p>
          <p className="text-sm text-red-300 italic">Se você não está pronta(o) para essa pessoa te desejar a cada segundo de todos os dias… não faça isso.</p>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Histórias Reais de Pessoas Que Usaram a Chama</h2>
          
          <TestimonialCard 
            name="Juliana M."
            image="https://i.imgur.com/Sza1ZfT.png"
            text="Eu estava bloqueada há 6 meses. Fiz o ritual na terça. Na sexta ele apareceu no meu trabalho chorando. Eu tô em choque."
            time="Há 2 dias"
            likes={428}
          />
          <TestimonialCard 
            name="Carla D."
            image="https://i.imgur.com/GJZpDHa.png"
            text="Gente, funciona mesmo. Ele largou a atual e veio me pedir em namoro. Disse que não conseguia dormir pensando em mim."
            time="Há 5 horas"
            likes={891}
          />
          <TestimonialCard 
            name="Renata S."
            image="https://i.imgur.com/sqYjS4V.png"
            text="A Sacerdotisa Azara é um anjo. Ele voltou tão carinhoso, parece outro homem. O fogo realmente muda eles."
            time="Há 1 dia"
            likes={356}
          />
          <TestimonialCard 
            name="Amanda B."
            image="https://i.imgur.com/oOLHMGS.jpg"
            text="Nunca vi nada igual. Ele era orgulhoso demais, nunca pedia desculpas. Depois do ritual, virou um gatinho na minha mão. Gratidão eterna!"
            time="Há 4 horas"
            likes={623}
          />
        </div>

        {/* History Section */}
        <div className="mt-16 space-y-6">
           <h2 className="text-2xl font-bold text-white text-center">A História Proibida Que Tentaram Enterrar</h2>
           <p>Acha que eu inventei isso? Não.</p>
           <p>Esse ritual é mais antigo que a igreja. Mais antigo que a terapia. Mais antigo que qualquer conselho de relacionamento que você já ouviu.</p>
           <p>Pessoas usam o fogo para ligar corações há milhares de anos. Em templos persas antigos. Em câmaras escondidas. Em cerimônias secretas passadas de geração em geração.</p>
           <p className="italic text-orange-200">Porque quem aprendia isso sabia de uma coisa: Todo ser humano tem um ponto fraco na alma. Todo ser humano pode ser ligado. Todo ser humano pode ser incendiado por alguém.</p>

           <div className="mt-8">
             <h3 className="text-xl font-bold text-orange-400 mb-4 text-center">Rainhas e Reis Que Fizeram Amores Rastejarem</h3>
             <img src="https://i.imgur.com/1sAIPUI.jpg" alt="Pintura Antiga Rainha" className="w-full h-auto rounded-lg shadow-lg mb-4" />
             <p>Existem histórias — sussurradas, apagadas dos livros de história — sobre rainhas e reis que usaram a chama sagrada para trazer seus amores de volta.</p>
             <p className="mt-4">Uma rainha — ou um rei — mandou realizar o ritual enquanto a pessoa amada estava longe, envolvida em outra relação, em outra vida, em outro caminho.</p>
             <div className="bg-gray-900 p-4 border-l-2 border-orange-500 my-4">
                <p className="font-bold text-white">Cinco noites depois?</p>
                <p className="text-sm">Ela ou ele abandonou o amante. Abandonou a distração. Abandonou tudo o que achava importante. Voltou correndo, pálido(a) e tremendo(a), sussurrando: “Não consigo respirar sem você.”</p>
             </div>
             <p>Os generais chamaram de loucura. Os sacerdotes chamaram de bruxaria. Quem usou a chama chamou de poder.</p>
           </div>
        </div>

        {/* Historical Context 2 */}
        <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">Tentaram Destruir Isso</h2>
            <p>Quando os sacerdotes perceberam o que as guardiãs do fogo faziam com a chama sagrada? Entraram em pânico.</p>
            <p>Chamaram de mal. Disseram que ameaçava a ordem natural.</p>
            <p className="font-bold">Por quê?</p>
            <p>Porque funcionava.</p>
            <p>Porque pessoas “lógicas” desmoronavam como crianças. Porque pessoas “fortes” choravam como bebês. Porque pessoas “fiéis” abandonavam tudo para rastejar de volta a quem incendiou sua alma.</p>
            <p>Então proibiram. Queimaram os textos. Espalharam as sacerdotisas e guardiões.</p>
            <p>Mas sussurros nunca morrem. O conhecimento sobreviveu. Passado em segredo, de guardiã para guardião, de geração em geração.</p>
            <p className="text-orange-400 font-bold">E agora está aqui. Pronto para ligar a alma da pessoa que você deseja à sua.</p>
        </div>

        {/* Azara Bio */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800">
           <h2 className="text-2xl font-bold text-white mb-4 text-center">Quem É a Sacerdotisa Azara?</h2>
           <img src="https://i.imgur.com/S0BPoDO.jpg" alt="Sacerdotisa Azara" className="w-full h-auto rounded-lg mb-6 shadow-xl" />
           <div className="space-y-4 text-gray-300">
             <p>A Sacerdotisa Azara é descendente direta dos guardiões do fogo zoroastristas da antiga Pérsia.</p>
             <p>A família dela guarda a chama sagrada há mais de 1.500 anos. Quando os templos foram destruídos, eles fugiram com as brasas, mantendo a tradição viva em segredo.</p>
             <p>Hoje, ela realiza o ritual da chama em seu templo particular para um número limitado de pessoas por semana.</p>
             <p>Ela não faz isso por dinheiro. É o chamado dela. O propósito dela. Garantir que esse poder antigo não se perca no mundo.</p>
             <p className="text-orange-200 font-medium">Mas o ritual a drena. Cada um exige dias de preparação e recuperação. Por isso ela só pode ajudar um número limitado de pessoas.</p>
           </div>
        </div>

        {/* How It Works Steps */}
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Como Funciona</h2>
            <div className="space-y-4">
                {[
                    { step: 1, text: "Você clica no botão abaixo e preenche um formulário curto com o nome da pessoa desejada ou solicita a abertura para um novo amor." },
                    { step: 2, text: "A Sacerdotisa Azara realiza o Ritual da Chama de 5 Noites em seu templo." },
                    { step: 3, text: "Você segue com a sua vida enquanto a chama faz o trabalho." },
                    { step: 4, text: "Em até 5 noites, veja o fogo agir." }
                ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start bg-gray-900 p-4 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center font-bold text-white">
                            {item.step}
                        </div>
                        <p className="text-sm md:text-base pt-1">{item.text}</p>
                    </div>
                ))}
            </div>
            <p className="mt-6 text-center font-bold text-white">É isso. Você não precisa fazer nada além de estar pronta(o) quando o universo se mover.</p>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">Quanto Vale a Obsessão Dessa Pessoa Para Você?</h2>
            <p>Seja honesta(o).</p>
            <p>Quanto você pagaria para acabar com a humilhação de ser ignorada(o)?</p>
            <p>Para cortar qualquer outra pessoa da vida dela de vez?</p>
            <p>Para vê-la de joelhos, implorando por outra chance?</p>
            <p>Pessoas gastam milhares em terapia e coaches que não funcionam. Perdem meses com estratégias de “nenhum contato” que não levam a lugar nenhum.</p>
            <p>Nada disso liga o interruptor da obsessão dessa pessoa.</p>
            <p>Nada disso queima seu nome na alma dela.</p>
            <p className="font-bold text-orange-500 text-xl">Mas isso faz.</p>
        </div>

        {/* BONUS SECTION */}
        <div className="mt-12 bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-orange-500/30">
            <div className="text-center mb-8">
                <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Oferta por tempo limitado</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2">🎁 BÔNUS EXCLUSIVOS</h2>
                <p className="text-sm text-orange-200">PARA QUEM FAZER O RITUAL HOJE</p>
                <div className="mt-2 text-xs bg-red-900/40 text-red-200 inline-block px-3 py-1 rounded border border-red-900/50">
                     ⚠️ ATENÇÃO: Estes bônus não são vendidos separadamente.
                </div>
            </div>

            <div className="space-y-4">
                {[
                    { title: "BÔNUS #1 – Ativação do Vínculo Energético Noturno", price: "R$97", desc: "Ativação extra durante as 5 noites do ritual, fortalecendo o vínculo enquanto a pessoa dorme, intensificando sonhos, pensamentos involuntários e o chamado emocional." },
                    { title: "BÔNUS #2 – Ritual de Corte de Terceiras Pessoas", price: "R$127", desc: "Ritual silencioso para esfriar qualquer interferência externa, afastando rivais e conexões paralelas sem confronto ou conflitos." },
                    { title: "BÔNUS #3 – Selamento da Chama (Anti-Arrependimento)", price: "R$147", desc: "Após a quinta noite, a chama é selada para evitar esfriamento, afastamentos futuros ou recaídas emocionais." },
                    { title: "BÔNUS #4 – Abertura para Amor Novo", price: "R$97", desc: "Ativação energética para atrair uma nova pessoa alinhada, com conexão intensa desde o primeiro contato." },
                    { title: "BÔNUS #5 – Proteção Energética da Chama", price: "R$87", desc: "Blindagem contra inveja, interferências externas e energias negativas que possam enfraquecer o ritual." },
                    { title: "BÔNUS #6 – Prioridade Máxima no Templo", price: "R$67", desc: "Seu ritual é iniciado imediatamente, na mesma noite, sem fila de espera." }
                ].map((bonus, idx) => (
                    <div key={idx} className="bg-gray-900/60 p-4 rounded-xl border border-gray-800 flex gap-4 items-start relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-orange-900/80 text-orange-200 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                            Valor: {bonus.price}
                        </div>
                        <div className="mt-1 text-orange-500 bg-orange-900/20 p-2 rounded-full">
                            <Flame className="w-4 h-4" />
                        </div>
                        <div>
                            <h4 className="font-bold text-orange-100 text-sm md:text-base mb-1">{bonus.title}</h4>
                            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{bonus.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-green-900/20 p-4 rounded-xl border border-green-800/50 text-center space-y-2">
                <p className="text-gray-400 text-sm line-through">VALOR TOTAL REAL: R$819</p>
                <p className="text-green-400 font-bold uppercase text-sm md:text-base">FAZENDO HOJE O RITUAL DO FOGO VOCÊ GANHA TOTALMENTE GRÁTIS:</p>
                <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-6 text-xs md:text-sm font-bold text-white">
                    <span className="flex items-center justify-center gap-1"><Check className="w-4 h-4 text-green-500" /> TODOS OS 6 BÔNUS</span>
                    <span className="flex items-center justify-center gap-1"><Check className="w-4 h-4 text-green-500" /> ATIVAÇÃO IMEDIATA</span>
                    <span className="flex items-center justify-center gap-1"><Check className="w-4 h-4 text-green-500" /> PRIORIDADE NO TEMPLO</span>
                </div>
            </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="mt-6 bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-orange-500/30 text-center shadow-[0_0_50px_rgba(255,69,0,0.15)] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
             
             <h2 className="text-3xl font-bold text-white mb-2">Seu Preço Hoje</h2>
             <p className="text-sm text-gray-400 mb-6">A Sacerdotisa Azara não faz isso por lucro. Mas precisamos cobrir os custos de manter este site e o templo dela. Então concordamos em um valor acessível para qualquer pessoa, independentemente da situação.</p>
             
             <div className="space-y-2 mb-8 text-red-500 line-through text-lg font-medium opacity-70">
                <p>Não R$500.</p>
                <p>Não R$200.</p>
                <p>Nem mesmo R$100.</p>
             </div>

             <div className="bg-orange-900/20 py-6 rounded-xl border border-orange-500/20 mb-8">
                <p className="text-gray-300 mb-2">Hoje, você pode ter o Ritual da Chama de 5 Noites realizado por apenas</p>
                <div className="text-6xl font-extrabold text-green-500 tracking-tighter drop-shadow-lg">
                    R$37
                </div>
                <p className="text-green-500 font-bold mt-2">Trinta e sete reais.</p>
                <p className="text-xs text-gray-500 mt-1">Menos que um jantar fora.</p>
             </div>

             <p className="font-medium text-white mb-8">Pelo poder de fazer essa pessoa queimar por você para sempre.</p>

             <Button className="w-full text-xl py-6 shadow-green-500/40" subtext="Acesso imediato ao formulário do ritual" onClick={handleOpenRitual}>
                 ACENDA A CHAMA
             </Button>
        </div>

        {/* Urgency Section */}
        <div className="mt-16 space-y-6">
             <h2 className="text-2xl font-bold text-red-500 flex items-center gap-2 justify-center">
                 <Clock className="w-6 h-6" />
                 Mas Você Precisa Agir Agora
             </h2>
             <img src="https://i.imgur.com/gLqf1pr.jpg" alt="Vela apagando" className="w-full h-auto rounded-lg opacity-80" />
             <div className="bg-orange-900/30 border border-orange-900/50 p-2 rounded text-center mb-4">
                 <p className="text-sm text-orange-300 font-bold uppercase tracking-widest">Vagas limitadas</p>
             </div>
             <p>A Sacerdotisa Azara só consegue realizar um número limitado de rituais por semana. A energia dela não é infinita. Quando as vagas acabam, acabam — até ela se recuperar.</p>
             <p className="font-bold">Se você fechar esta página e voltar amanhã, sua vaga pode já ter sido tomada.</p>
             <p>Cada noite que você espera é mais uma noite em que essa pessoa se afasta.</p>
             <p>Mais uma noite em que outra pessoa crava as garras mais fundo nela.</p>
             <p>Mais uma noite que você perde.</p>
             
             <div className="bg-black p-6 rounded border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4 text-center">E Aqui Está a Verdade Mais Sombria…</h3>
                <p className="mb-4">Esta página pode não ficar no ar.</p>
                <p className="mb-4">Eles já tentaram enterrar esse ritual antes. Terapeutas, coaches de relacionamento, toda a indústria de “autoajuda” — eles adorariam ver isso desaparecer.</p>
                <p className="mb-4">Porque quando as pessoas têm esse poder, ninguém tem chance.</p>
                <p className="mb-6">Não posso prometer que esta página estará aqui amanhã.</p>
                
                <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                        <span className="text-2xl">👉</span>
                        <span className="font-bold text-orange-200">Se você agir agora, a Sacerdotisa Azara começará seu ritual ainda hoje à noite.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-2xl">👉</span>
                        <span className="text-gray-400">Se você esperar, talvez nunca mais veja esta página — ou essa pessoa — novamente.</span>
                    </li>
                </ul>
                
                <div className="mt-8 text-center">
                    <Button onClick={handleOpenRitual}>EU QUERO, ESTOU PRONTA(O)</Button>
                </div>
             </div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 bg-white text-gray-900 p-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] text-gray-100 opacity-50 transform rotate-12">
                <ShieldCheck className="w-48 h-48" />
            </div>
            <div className="relative z-10">
                <h2 className="text-3xl font-black mb-4 flex items-center gap-3 justify-center">
                    <ShieldCheck className="w-8 h-8 text-green-600" />
                    O RISCO É 100% MEU
                </h2>
                <div className="space-y-4 font-medium text-lg">
                    <p>Você tem 7 dias completos para ver os resultados.</p>
                    <p>Se essa pessoa não estiver queimando de obsessão por você…</p>
                    <p>Se essa pessoa não voltar rastejando, implorando pelo seu perdão…</p>
                    <p>Se você não ficar completamente chocado(a) com o nível de desespero dessa pessoa por você…</p>
                    <p>Basta enviar um e-mail e você recebe cada centavo de volta. Sem perguntas. Sem complicações.</p>
                    <p className="font-bold pt-4 border-t border-gray-200 mt-4">Ou você recupera essa pessoa, totalmente devota a você, ou recebe seu dinheiro de volta.</p>
                    <p className="text-green-700 font-bold uppercase tracking-wider">Não há risco.</p>
                </div>
                <div className="mt-8">
                     <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border-green-800" onClick={handleOpenRitual}>
                        GARANTIR O RITUAL
                     </Button>
                </div>
            </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 mb-20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Perguntas Frequentes</h2>
            <div className="space-y-2">
                <FAQItem 
                    question="E se essa pessoa estiver com outra pessoa?" 
                    answer="Ótimo. Essa outra pessoa é apenas um espaço vazio. A chama não compete — ela apaga. A conexão dela com essa pessoa esfria. O toque parece errado. A voz irrita. Ela olha e sente apenas vazio. E então corre de volta para você."
                />
                <FAQItem 
                    question="E se essa pessoa me bloqueou em tudo?" 
                    answer="Melhor ainda. O bloqueio não protege. Ele prende a pessoa dentro da própria cabeça com o fogo. Ela ficará tão obcecada que dará um jeito de falar com você — uma conta nova, um e-mail, aparecendo pessoalmente. O bloqueio vira a prisão dela, e você é a única saída."
                />
                <FAQItem 
                    question="E se já se passaram meses ou anos?" 
                    answer="Não importa. O tempo não apaga essa chama. A conexão entre vocês ainda existe como uma brasa enterrada. Esse ritual é o vento que transforma essa brasa em incêndio. Quanto mais tempo passou, mais forte as memórias batem quando voltam."
                />
                <FAQItem 
                    question="E se essa pessoa jurou que nunca voltaria?" 
                    answer="Pessoas dizem muitas coisas. Palavras grandes. Mas palavras não significam nada quando a alma está em chamas. Na quinta noite, ela nem vai lembrar do que jurou. Estará ocupada demais implorando para você aceitá-la de volta."
                />
                <FAQItem 
                    question="E se eu não acreditar nisso?" 
                    answer="Você não precisa acreditar. O fogo não liga para crença. Ele queima de qualquer forma. Tudo o que você precisa fazer é entregar o nome à Sacerdotisa Azara. Ela cuida do resto."
                />
                <FAQItem 
                    question="Isso é permanente?" 
                    answer="Sim. Por isso eu avisei. Não é temporário. Uma vez que o nome entra na chama, o vínculo é selado. Não faça isso se não tiver certeza de que quer essa pessoa ligada a você."
                />
            </div>
            
            <div className="mt-12 text-center">
                 <Button onClick={handleOpenRitual}>QUERO AGORA</Button>
            </div>
        </div>

      </main>

      <footer className="max-w-2xl mx-auto px-5 text-center text-gray-600 text-xs py-8">
          <div className="flex justify-center gap-4 mb-4">
              <ShieldCheck className="w-4 h-4" />
              <Lock className="w-4 h-4" />
              <Star className="w-4 h-4" />
          </div>
          <p>&copy; {new Date().getFullYear()} Templo da Chama Sagrada. Todos os direitos reservados.</p>
          <p className="mt-2">Este site é destinado apenas para fins de entretenimento e espirituais.</p>
      </footer>
    </div>
  );
};

export default App;