import React, { useState } from 'react';
import { Flame, ShieldCheck, Lock, Star, AlertTriangle, Clock } from 'lucide-react';
import { Button } from './components/Button';
import { TestimonialCard } from './components/TestimonialCard';
import { FAQItem } from './components/FAQItem';
import { RitualPage } from './components/RitualModal';
import { SocialProofPopup } from './components/SocialProofPopup';

const App = () => {
  const [view, setView] = useState<'landing' | 'ritual'>('landing');

  // Get current date formatted in Portuguese (e.g., "24 de Outubro")
  const today = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });

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
        ATENÇÃO: O fim de ano é um período raro de transição energética. Durante essa virada, e no dia <span className="text-white font-bold underline decoration-red-500">{today}</span>, o Ritual da Chama de 5 Noites atua com intensidade maior, acelerando o retorno e a obsessão.
      </div>

      <main className="max-w-2xl mx-auto px-5 pt-8">
        
        {/* Headline */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4 leading-tight">
            Sussurre o nome dele nesta chama sagrada… e em até 5 noites ele vai ficar totalmente obcecado por você
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
            Ele vai se revirar na cama à noite, incapaz de tirar você da cabeça. E, na quinta noite, vai rastejar de volta para você como se a vida dele dependesse disso.
          </p>

          <p>Eu não imploro para homens.</p>
          <p>Eu não corro atrás deles.</p>
          <p>E com certeza não fico sentada chorando, me perguntando por que ele “precisa de espaço”.</p>
          <p className="text-orange-200 font-semibold italic border-l-4 border-orange-600 pl-4 bg-orange-900/10 py-2">
            Porque eu encontrei algo mais antigo. Mais sombrio. Algo contra o qual ele não consegue lutar.
          </p>
          
          <p>
            Tudo o que fiz foi entregar o nome dele a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.
          </p>
          <p>Ela sussurrou o nome dele no fogo.</p>
          <p>E em menos de 48 horas, ele estava explodindo meu celular.</p>
          <p>Implorando. Chorando. Rastejando de volta como um homem que perdeu completamente o controle.</p>
        </div>

        {/* Section: The Last Time */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">A Última Vez Que Ele Se Afastou…</h2>
          <p>Ele achou que podia simplesmente sumir.</p>
          <p>Me deixar no vácuo.</p>
          <p>Agir como se o que tivemos não tivesse significado nada.</p>
          <p>Ahhh que fofo.</p>
          <p>Entreguei o nome dele à Sacerdotisa Azara. Ela acendeu a vela sagrada em seu templo de fogo, pronunciou o nome dele na chama e deixou o fogo fazer o trabalho.</p>
        </div>

        {/* Priestess Image */}
        <div className="my-8 rounded-xl overflow-hidden shadow-2xl border border-orange-900/50 relative">
          <img 
            src="https://i.imgur.com/kkGFDp4.jpg" 
            alt="Sacerdotisa Ritual" 
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
            Sacerdotisa
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
          <div>
            <h3 className="text-orange-400 font-bold uppercase text-sm mb-1">Na manhã seguinte?</h3>
            <p className="italic text-gray-300">Uma mensagem do nada: “Tive o sonho mais estranho com você. Não consigo parar de pensar em você.”</p>
          </div>
          <div>
            <h3 className="text-orange-400 font-bold uppercase text-sm mb-1">Na terceira noite?</h3>
            <p className="italic text-gray-300">37 ligações perdidas. Mensagens sem parar: “Me desculpa. Não sei o que está acontecendo comigo. Eu preciso te ver.”</p>
          </div>
          <div>
            <h3 className="text-orange-400 font-bold uppercase text-sm mb-1">Na quinta noite?</h3>
            <p className="italic text-gray-300">Ele estava na minha porta. Olhos vermelhos. Voz tremendo. Jurando que nunca mais me deixaria.</p>
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
          <p>A maioria das mulheres faz tudo errado.</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-400 marker:text-red-500">
            <li>Elas choram abraçadas ao travesseiro.</li>
            <li>Mandam mensagens patéticas de “só passando para saber como você está”.</li>
            <li>Stalkeiam as redes sociais dele, morrendo por dentro toda vez que ele posta algo.</li>
            <li>Ouvem amigas dizendo: “Dá espaço, ele volta.”</li>
          </ul>
          
          <p className="text-white font-bold text-lg">Deixa eu te contar a verdade: ele não volta.</p>
          <p>Homens não voltam por causa de “espaço”.</p>
          <p>Não voltam porque você implorou.</p>
          <p>Não voltam porque você “deu tempo para ele pensar”.</p>
          <p className="bg-gradient-to-r from-orange-900/40 to-transparent p-4 border-l-4 border-orange-500 rounded-r-lg">
            Eles voltam quando algo se agarra à alma deles e não solta mais.
            <br/><br/>
            E é exatamente isso que essa chama faz.
          </p>
          <p>Ela não pede. Não convence. Ela queima o seu nome no espírito dele até você ser tudo em que ele consegue pensar.</p>
        </div>

        {/* Persian Temple Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">O Segredo Proibido dos Templos de Fogo da Pérsia</h2>
          <div className="rounded-xl overflow-hidden shadow-2xl mb-6">
             <img src="https://i.imgur.com/RfnM0Aw.jpg" alt="Templo Persa" className="w-full h-auto" />
          </div>
          <div className="space-y-6 text-gray-300">
            <p>Isso não é um truque moderno de “manifestação”.</p>
            <p>Não são velas de loja barata e pensamentos positivos.</p>
            <p>É um ritual de fogo antigo que remonta a mais de 3.000 anos, às sacerdotisas zoroastristas da Pérsia.</p>
            <p>Elas sabiam algo que foi escondido das mulheres por séculos:</p>
            <p className="font-bold text-white">Todo homem tem um ponto na alma que pode ser incendiado. E quando é aceso, ele queima por uma mulher — e apenas uma.</p>
            <p>Rainhas usavam isso para manter seus reis leais. Tão leais que abandonavam amantes, largavam guerras pela metade e atravessavam reinos inteiros apenas para estar perto dela novamente.</p>
            <p>Os sacerdotes odiavam isso.</p>
            <p>Chamavam de perigoso. Tentaram enterrar esse conhecimento. Mas os sussurros nunca cessaram.</p>
            <p>Porque toda mulher que usava sabia a verdade:</p>
            <div className="text-center p-6 bg-orange-950/30 rounded-lg border border-orange-800">
              <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="italic font-serif text-lg text-orange-100">Uma vez que o nome dele entra na chama sagrada, a alma dele fica ligada a você. E esse fogo nunca se apaga.</p>
            </div>
          </div>
        </div>

        {/* The Switch */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">Os Homens Acham Que Estão no Controle</h2>
          <p>Não estão.</p>
          <p>Todo homem tem um interruptor escondido dentro dele. Chame de circuito da obsessão. Instinto primitivo. O que quiser.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-green-900/20 p-4 rounded border border-green-900/50">
               <h4 className="font-bold text-green-400 mb-2 uppercase text-xs">Quando está ligado?</h4>
               <p className="text-sm">Ele não consegue pensar direito. Não consegue dormir. Não para de te imaginar. O corpo inteiro dele anseia por você.</p>
             </div>
             <div className="bg-gray-800 p-4 rounded border border-gray-700">
               <h4 className="font-bold text-gray-400 mb-2 uppercase text-xs">Quando está desligado?</h4>
               <p className="text-sm">Ele fica frio. Distante. Some.</p>
             </div>
          </div>

          <p>O que a maioria das mulheres não sabe:</p>
          <p className="font-bold text-orange-200">O Ritual da Chama de 5 Noites liga esse interruptor novamente. E, uma vez ligado, ele permanece ligado.</p>
          <p>Por isso as mulheres chamam de “ritual do Homem em Chamas”.</p>
          <p>Porque quando o nome dele toca a chama, ele queima por você. E somente por você.</p>
        </div>

        {/* 5 Nights Breakdown */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">O Que Acontece Ao Longo das 5 Noites</h2>
          <div className="rounded-xl overflow-hidden shadow-2xl mb-8">
             <img src="https://i.imgur.com/EcmtW16.jpg" alt="Vela acesa na escuridão" className="w-full h-auto" />
          </div>
          
          <div className="space-y-6 text-gray-300">
            <p>Isso não são meses de espera. Não são anos de terapia. Não é “manifestar por seis meses e torcer para dar certo”.</p>
            <p>A Sacerdotisa Azara sussurra o nome dele na chama sagrada e, em até 5 noites, o mundo dele vira de cabeça para baixo.</p>
            
            <div className="space-y-4 mt-8">
              {[
                { n: 1, title: "A Primeira Faísca", desc: "No momento em que o nome dele entra na chama, algo muda. Ele vai se sentir inquieto naquela noite. Vai se revirar às 3 da manhã sem saber por quê. Seu rosto vai piscar na mente dele. Ele sentirá uma dor estranha no peito que não consegue explicar." },
                { n: 2, title: "O Calor Aumenta", desc: "Ele começa a pensar em você mais. Muito mais. Vai se pegar olhando fotos antigas suas. Revivendo conversas. A ideia de você com outro homem vai deixá-lo enjoado." },
                { n: 3, title: "O Fogo se Espalha", desc: "Agora ele não consegue mais se livrar de você. Vai sonhar com você de forma tão real que acorda confuso. Os amigos vão perceber que algo está errado. Ele vai mandar uma mensagem fraca só para “testar o terreno”, porque não aguenta mais a pressão." },
                { n: 4, title: "O Incêndio", desc: "Ele está perdendo o controle. Não consegue focar no trabalho. Não sente prazer em nada. Todas as outras mulheres parecem sem graça perto de você. O fogo queimou tudo. Só você restou na mente dele." },
                { n: 5, title: "Rendição Total", desc: "Ele quebra. O orgulho? Sumiu. As defesas? Viraram cinzas. Ele liga. Ele manda mensagem. Ele aparece. Chora, pede desculpas e jura que nunca mais vai te deixar. Diz coisas como: “Não sei o que aconteceu comigo, mas não consigo viver sem você.”" }
              ].map((night) => (
                <div key={night.n} className="bg-black/40 p-5 rounded-lg border-l-4 border-orange-600">
                  <h3 className="font-bold text-orange-500 mb-2">Noite {night.n}: {night.title}</h3>
                  <p className="text-sm">{night.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Warning Interruption */}
        <div className="mt-12 bg-red-950/20 p-6 rounded-xl border border-red-900/50 text-center">
          <div className="flex justify-center mb-4"><AlertTriangle className="text-red-500 w-10 h-10" /></div>
          <h3 className="text-xl font-bold text-red-400 mb-4">Mas Preciso Te Avisar…</h3>
          <p className="text-gray-300 mb-4">Isso não é brincadeira. Não é um “trabalho energético” inofensivo.</p>
          <p className="font-bold text-white mb-4">Quando a Sacerdotisa Azara realiza esse ritual, os homens não apenas voltam. Eles grudam. Eles se tornam obcecados. Eles não se cansam de você.</p>
          <p className="text-sm text-red-300 italic">Se você não está pronta para ele te desejar a cada segundo de todos os dias… não faça isso.</p>
        </div>

        {/* CTA 1 - REMOVED */}

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Histórias Reais de Mulheres Que Usaram a Chama</h2>
          <p className="text-center text-gray-400 mb-8">Veja o que elas estão dizendo...</p>
          
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
           <p>Mulheres usam o fogo para ligar homens há milhares de anos. Em templos persas antigos. Em câmaras escondidas. Em cerimônias secretas passadas de mãe para filha.</p>
           <p className="italic text-orange-200">Porque toda mulher que aprendia isso sabia de uma coisa: Homens são fracos. Homens podem ser controlados. Homens podem ser ligados. E o fogo era como elas faziam isso.</p>

           <div className="mt-8">
             <h3 className="text-xl font-bold text-orange-400 mb-4 text-center">Rainhas Que Fizeram Reis Rastejarem</h3>
             <img src="https://i.imgur.com/1sAIPUI.jpg" alt="Pintura Antiga Rainha" className="w-full h-auto rounded-lg shadow-lg mb-4" />
             <p>Existem histórias — sussurradas, apagadas dos livros de história — sobre rainhas que usaram a chama sagrada para trazer seus reis de volta.</p>
             <p className="mt-4">Uma rainha mandou realizar o ritual enquanto seu rei estava em guerra, com outra mulher em sua tenda.</p>
             <div className="bg-gray-900 p-4 border-l-2 border-orange-500 my-4">
                <p className="font-bold text-white">Cinco noites depois?</p>
                <p className="text-sm">Ele abandonou a amante. Abandonou a guerra. Abandonou o exército. Cavalgou de volta até ela, pálido e tremendo, sussurrando: “Não consigo respirar sem você.”</p>
             </div>
             <p>Os generais chamaram de loucura. Os sacerdotes chamaram de bruxaria. Ela chamou de poder.</p>
           </div>
        </div>

        {/* Historical Context 2 */}
        <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">Tentaram Destruir Isso</h2>
            <p>Quando os sacerdotes perceberam o que as mulheres faziam com a chama sagrada? Entraram em pânico.</p>
            <p>Chamaram de mal. Disseram que ameaçava a ordem natural.</p>
            <p className="font-bold">Por quê?</p>
            <p>Porque funcionava.</p>
            <p>Porque homens “lógicos” desmoronavam como crianças. Porque homens “fortes” choravam como bebês. Porque homens “fiéis” abandonavam tudo para rastejar de volta a uma mulher.</p>
            <p>Então proibiram. Queimaram os textos. Espalharam as sacerdotisas.</p>
            <p>Mas sussurros nunca morrem. O conhecimento sobreviveu. Passado em segredo de guardiã para guardiã.</p>
            <p className="text-orange-400 font-bold">E agora está aqui. Pronto para ligar a alma do seu homem à sua.</p>
        </div>

        {/* Azara Bio */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800">
           <h2 className="text-2xl font-bold text-white mb-4 text-center">Quem É a Sacerdotisa Azara?</h2>
           <img src="https://i.imgur.com/S0BPoDO.jpg" alt="Sacerdotisa Azara" className="w-full h-auto rounded-lg mb-6 shadow-xl" />
           <div className="space-y-4 text-gray-300">
             <p>A Sacerdotisa Azara é descendente direta dos guardiões do fogo zoroastristas da antiga Pérsia.</p>
             <p>A família dela guarda a chama sagrada há mais de 1.500 anos. Quando os templos foram destruídos, eles fugiram com as brasas, mantendo a tradição viva em segredo.</p>
             <p>Hoje, ela realiza o ritual da chama em seu templo particular para um número limitado de mulheres por semana.</p>
             <p>Ela não faz isso por dinheiro. É o chamado dela. O propósito dela. Garantir que esse poder antigo não se perca no mundo.</p>
             <p className="text-orange-200 font-medium">Mas o ritual a drena. Cada um exige dias de preparação e recuperação. Por isso ela só pode ajudar um número limitado de mulheres.</p>
           </div>
        </div>

        {/* How It Works Steps */}
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Como Funciona</h2>
            <div className="space-y-4">
                {[
                    { step: 1, text: "Você clica no botão abaixo e preenche um formulário curto com o nome dele e alguns detalhes da sua situação." },
                    { step: 2, text: "A Sacerdotisa Azara realiza o Ritual da Chama de 5 Noites em seu templo, sussurrando o nome dele no fogo sagrado a cada noite." },
                    { step: 3, text: "Você segue com a sua vida enquanto a chama faz o trabalho na alma dele." },
                    { step: 4, text: "Em até 5 noites, veja ele rastejar de volta." }
                ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start bg-gray-900 p-4 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center font-bold text-white">
                            {item.step}
                        </div>
                        <p className="text-sm md:text-base pt-1">{item.text}</p>
                    </div>
                ))}
            </div>
            <p className="mt-6 text-center font-bold text-white">É isso. Você não precisa fazer nada além de estar pronta quando ele quebrar.</p>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">Quanto Vale a Obsessão Dele Para Você?</h2>
            <p>Seja honesta.</p>
            <p>Quanto você pagaria para acabar com a humilhação de ser ignorada?</p>
            <p>Para cortar a outra mulher da vida dele de vez?</p>
            <p>Para vê-lo de joelhos, implorando por outra chance?</p>
            <p>Mulheres gastam milhares em terapia e coaches que não funcionam. Perdem meses com estratégias de “nenhum contato” que não levam a lugar nenhum.</p>
            <p>Nada disso liga o interruptor da obsessão dele.</p>
            <p>Nada disso queima seu nome na alma dele.</p>
            <p className="font-bold text-orange-500 text-xl">Mas isso faz.</p>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="mt-12 bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-orange-500/30 text-center shadow-[0_0_50px_rgba(255,69,0,0.15)] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
             
             <h2 className="text-3xl font-bold text-white mb-2">Seu Preço Hoje</h2>
             <p className="text-sm text-gray-400 mb-6">A Sacerdotisa Azara não faz isso por lucro. Mas precisamos cobrir os custos de manter este site e o templo dela.</p>
             
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

             <p className="font-medium text-white mb-8">Pelo poder de fazer ele queimar por você para sempre.</p>

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
             <p>A Sacerdotisa Azara só consegue realizar um número limitado de rituais por semana. A energia dela não é infinita. Quando as vagas acabam, acabam — até ela se recuperar.</p>
             <p className="font-bold">Se você fechar esta página e voltar amanhã, sua vaga pode já ter sido tomada.</p>
             <p>Cada noite que você espera é mais uma noite em que ele se afasta. Mais uma noite em que ela crava as garras mais fundo nele. Mais uma noite que você perde.</p>
             
             <div className="bg-black p-6 rounded border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4 text-center">E Aqui Está a Verdade Mais Sombria…</h3>
                <p className="mb-4">Esta página pode não ficar no ar.</p>
                <p className="mb-4">Eles já tentaram enterrar esse ritual antes. Terapeutas, coaches de relacionamento, toda a indústria de “autoajuda” — eles adorariam ver isso desaparecer.</p>
                <p className="mb-4">Porque quando mulheres têm esse poder, os homens não têm chance.</p>
                <p className="mb-6">Não posso prometer que esta página estará aqui amanhã.</p>
                
                <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                        <span className="text-2xl">👉</span>
                        <span className="font-bold text-orange-200">Se você agir agora, a Sacerdotisa Azara começará seu ritual ainda hoje à noite.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-2xl">👉</span>
                        <span className="text-gray-400">Se você esperar, talvez nunca mais veja esta página — ou ele — novamente.</span>
                    </li>
                </ul>
                
                <div className="mt-8 text-center">
                    <Button onClick={handleOpenRitual}>EU QUERO, ESTOU PRONTA</Button>
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
                    <p>Se ele não estiver queimando de obsessão por você…</p>
                    <p>Se ele não voltar rastejando, implorando pelo seu perdão…</p>
                    <p>Se você não ficar completamente chocada com o nível de desespero dele por você…</p>
                    <p>Basta enviar um e-mail e você recebe cada centavo de volta. Sem perguntas. Sem complicações.</p>
                    <p className="font-bold pt-4 border-t border-gray-200 mt-4">Ou você recupera ele, totalmente devoto a você, ou recebe seu dinheiro de volta.</p>
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
                    question="E se ele estiver com outra mulher?" 
                    answer="Ótimo. Ela é apenas um espaço vazio. A chama não compete com ela — ela apaga. A conexão dele com ela esfria. O toque dela parece errado. A voz dela irrita. Ele olha para ela e sente apenas vazio. E então corre de volta para você."
                />
                <FAQItem 
                    question="E se ele me bloqueou em tudo?" 
                    answer="Melhor ainda. O bloqueio não o protege. Ele o prende dentro da própria cabeça com o fogo. Ele ficará tão obcecado que dará um jeito de falar com você — uma conta nova, um e-mail, aparecendo pessoalmente. O bloqueio vira a prisão dele, e você é a única saída."
                />
                <FAQItem 
                    question="E se já se passaram meses ou anos?" 
                    answer="Não importa. O tempo não apaga essa chama. A conexão entre vocês ainda existe como uma brasa enterrada. Esse ritual é o vento que transforma essa brasa em incêndio. Quanto mais tempo passou, mais forte as memórias batem quando voltam."
                />
                <FAQItem 
                    question="E se ele jurou que nunca voltaria?" 
                    answer="Homens dizem muitas coisas. Palavras grandes. Mas palavras não significam nada quando a alma dele está em chamas. Na quinta noite, ele nem vai lembrar do que jurou. Estará ocupado demais implorando para você aceitá-lo de volta."
                />
                <FAQItem 
                    question="E se eu não acreditar nisso?" 
                    answer="Você não precisa acreditar. O fogo não liga para crença. Ele queima de qualquer forma. Tudo o que você precisa fazer é entregar o nome dele à Sacerdotisa Azara. Ela cuida do resto."
                />
                <FAQItem 
                    question="Isso é permanente?" 
                    answer="Sim. Por isso eu avisei. Não é temporário. Uma vez que o nome dele entra na chama, o vínculo é selado. Não faça isso se não tiver certeza de que quer ele ligado a você."
                />
            </div>
        </div>

      </main>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-orange-900 p-4 z-50 md:hidden">
          <Button onClick={handleOpenRitual} className="py-3 text-base shadow-none w-full">
              QUERO AGORA
          </Button>
      </div>

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