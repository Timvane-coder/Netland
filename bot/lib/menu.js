
export const menuPrincipal  = (botInfo)=> { 
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>---〖🔎 *MAIN MENU*〗
|
|- Enter one of the commands below:
|
|- *${prefixo}menu* 0  ❓ Information
|- *${prefixo}menu* 1  🖼️  sticker
|- *${prefixo}menu* 2  ⚒️ Utilities
|- *${prefixo}menu* 3  📥 Downloads
|- *${prefixo}menu* 4  👨‍👩‍👧‍👦 Group
|- *${prefixo}menu* 5  🕹️ Fun
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

export const menuFigurinhas = (botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guide ❔: *${prefixo}command* guide
|
|>---〖🖼️ *Stickers*〗
|
|- *${prefixo}s* - Transforms an IMAGE/VIDEO into a *sticker*.
|- *${prefixo}s* 1 - Transforms an IMAGE into a *circular sticker*.
|- *${prefixo}sname* pack, author - Renames the sticker.
|- *${prefixo}simg* - Turn a NON-ANIMATED STICKER into a *picture*.
|- *${prefixo}ssf* - Turn an IMAGE into a *sticker without background*.
|- *${prefixo}emojimix* 💩+😀 - Turn 2 emojis into *sticker*
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

export const menuInfoSuporte = (botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guide ❔: *${prefixo}command* guide
|
|>---〖❓ *INFO/SUPORT*〗
|
|- *${prefixo}info* - Bot information and owner contact.
|- *${prefixo}report* Report a problem to the owner.
|- *${prefixo}mydata* - Displays your usage data.
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

export const menuDownload = (botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guide ❔: *${prefixo}comand* guide
|
|>---〖📥 *DOWNLOADS*〗
|
|- *${prefixo}mp3* name- Downloads a song from database and sends it.
|- *${prefixo}mp4* name -Downloads a video from database and sends it. 
|- *${prefixo}fb* link - Downloads a video from Facebook and sends it.
|- *${prefixo}ig* link - Downloads a video from Instagram and sends it.
|- *${prefixo}tw* link - Downloads a video from Twitter and sends it.
|- *${prefixo}tk* link - Downloads a video from TikTok and sends it.
|- *${prefixo}img* theme - Downloads an image and sends it.
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

export const menuUtilidades = (botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guide ❔: *${prefixo}command* guide
|
|>---〖⚒️ *UTILITIES*〗
|
|--〖🔎 *QUERIES/TEXT* 〗
|
|- *${prefixo}AI* phrase - Receives a response from the AI.
|- *${prefixo}brasileirao* - Displays the table and current round of the Brasileirão.
|- *${prefixo}animes* - Displays the latest anime releases.
|- *${prefixo}mangas* - Displays the latest manga release.
|- *${prefixo}filmes* - Displays the current movie trends.
|- *${prefixo}series* - Displays the current series trends.
|- *${prefixo}links* link - Shortens the entered link.
|- *${prefixo}lyrics* lyrics - Sends the lyrics of the entered song.
|- *${prefixo}traduz* idioma text- Translates a text into the chosen language.
|- *${prefixo}pesquisa* text - Performs a quick search on the internet.
|- *${prefixo}clima* weather city - Displays the current temperature.
|- *${prefixo}noticias* - Gets current news.
|- *${prefixo}moeda* type value - Converts the value of a given currency to another.
|- *${prefixo}calc* expression - Calculates any calculation you want to make.
|- *${prefixo}rastreio* código - POST OFFICE tracking.
|- *${prefixo}ddd* - Reply to someone to see the state/region.
|- *${prefixo}tabela* -  Shows a table with characters for creating nicknames.
|
|--〖🔊 *AUDIO*〗
|
|- *${prefixo}ouvir* - Respond to an audio message to transform it into text.
|- *${prefixo}audio* Respond to an audio message with this command to edit it.
|- *${prefixo}voz* language text - Transforms text into audio.
|
|--〖🖼️ *IMAGES*〗
|
|- *${prefixo}upimg* - Uploads an image and returns the link.
|- *${prefixo}criarimg* frase - Creates an image according to the phrase using AI.
|- *${prefixo}rbg* - Removes the background from an IMAGE.
|
|--〖❔ *RECOGNITION*〗
|
|- *${prefixo}qualmusica* - Respond to an audio/video to identify the song.
|- *${prefixo}qualanime* -  Identify the anime by a photo of a scene.
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

export const menuGrupo = (admin, botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    if(admin){
        return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guide ❔: *${prefixo}command* guide
|
|>---〖👨‍👩‍👧‍👦 *GROUP*〗
|
|--〖🛠️ *GERAL*〗
|
|- *${prefixo}status* - Views the features turned on/off.
|- *${prefixo}regras* - Displays the group description with the rules.
|- *${prefixo}adms* - Lists all administrators.
|- *${prefixo}fotogrupo* - Altera foto do grupo
|- *${prefixo}mt* mensagem - Marca todos MEMBROS/ADMINS com uma mensagem.
|- *${prefixo}mm* mensagem - Marca os MEMBROS com uma mensagem.
|- *${prefixo}dono* - Mostra dono do grupo.
|
|--〖🎚️ *CONTROL ACTIVITY*〗
|
|- *${prefixo}contador* - Turns the activity counter (Messages) on/off.
|- *${prefixo}atividade* Shows the user's activity in the group. 
|- *${prefixo}imarcar* 1-50 - Marks all inactive users with less than 1 to 50 messages.
|- *${prefixo}ibanir* 1-50 - Bans all inactive users with less than 1 to 50 messages.
|- *${prefixo}topativos* 1-50 - Marks the most active members in a ranking of 1-50 people.
|
|--〖🚫 *BLOQUEIO DE COMANDOS*〗
|
|- *${prefixo}bcmd* [comando1 comando2 etc] - Bloqueia os comandos escolhidos no grupo.
|- *${prefixo}dcmd* [comando1 comando2 etc] - Desbloqueia os comandos escolhidos no grupo.
|
|--〖🗒️ *LISTA NEGRA*〗
|
|- *${prefixo}listanegra* - Exibe a lista negra do grupo.
|- *${prefixo}addlista* +55 (21) 9xxxx-xxxx - Adiciona o número na lista negra do grupo.
|- *${prefixo}remlista* +55 (21) 9xxxx-xxxx - Remove o número na lista negra do grupo.
|
|--〖🧰 *RECURSOS*〗 
|
|- *${prefixo}mutar* - Ativa/desativa o uso de comandos.
|- *${prefixo}autosticker* - Ativa/desativa a criação automática de stickers.
|- *${prefixo}alink* - Ativa/desativa o anti-link.
|- *${prefixo}bv* - Ativa/desativa o bem-vindo.
|- *${prefixo}afake* - Ativa/desativa o anti-fake.
|- *${prefixo}aflood* - Ativa/desativa o anti-flood.
|
|--〖⌨️ *ADMINISTRATIVO*〗
|
|- *${prefixo}add* +55 (21) 9xxxx-xxxx - Adiciona ao grupo.
|- *${prefixo}ban* @marcarmembro - Bane do grupo.
|- *${prefixo}restrito* - Abre/Restringe o grupo só para ADMS.
|- *${prefixo}promover* @marcarmembro - Promove a ADM.
|- *${prefixo}rebaixar* @marcaradmin - Rebaixa a MEMBRO.
|- *${prefixo}link* - Exibe o link do grupo.
|- *${prefixo}rlink* - Redefine o link do grupo.
|- *${prefixo}apg* - Apaga uma mensagem do grupo.
|- *${prefixo}bantodos* - Bane todos os membros.
|
|--〖👁️ *REVELAR MENSAGENS*〗
|
|- *${prefixo}revelar* - Revela o contéudo de uma mensagem de visualização única.
|
|--〖📊 *ENQUETE*〗
|
|- *${prefixo}enquete* pergunta,opcao1,opcao2,etc.. - Abre uma enquete com uma pergunta e as opçôes.
|
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
    } else {
        return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guia ❔: *${prefixo}comando* guia
|
|>---〖👨‍👩‍👧‍👦 *GRUPO*〗
|
|--〖🛠️ *GERAL*〗
|- *${prefixo}regras* - Exibe a descrição do grupo com as regras.
|- *${prefixo}adms* - Lista todos administradores.
|- *${prefixo}dono* - Mostra dono do grupo.
|
|--〖📊 *ENQUETE*〗
|- *${prefixo}enquete* pergunta,opcao1,opcao2,etc.. - Abre uma enquete com uma pergunta e as opçôes.
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
    }
}

export const menuDiversao = (grupo, botInfo )=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    if(grupo){
        return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guide ❔: *${prefixo}command* guide
|
|>---〖🕹️ *JOKES*〗
|
|- *${prefixo}ppt* rock, paper, scissors - Play rock, paper, or scissors.
|- *${prefixo}caracoroa* - Decide on a coin toss.
|
|>---〖🧩 *FUN*〗
|
|- *${prefixo}mascote* - Show the mascot
|- *${prefixo}simi* frase - Receives a response from SimSimi.
|- *${prefixo}viadometro* - Measures a person's level of faggotness.
|- *${prefixo}detector* - Detects lies using advanced AI.
|- *${prefixo}gado* - Mention a member or reply to him to find out.
|- *${prefixo}casal* - Randomly selects a couple
|- *${prefixo}fch* - Generates a phrase against humanity.
|- *${prefixo}chance* - Calculates the chance of something happening.
|- *${prefixo}bafometro* - Measures a person's alcohol level.
|- *${prefixo}top5* tema - Ranking dos Top 5 com o tema que você escolher.
|- *${prefixo}par* @pessoa1 @pessoa2 - Mede o nivel de compatibilidade entre 2 pessoas.
|- *${prefixo}roletarussa* - Expulsa um membro aleatório do grupo.
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
    } else {
        return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guide ❔: *${prefixo}comand* guide
|
|>---〖🕹️ *GAMES*〗
|
|- *${prefixo}ppt* 
|- *${prefixo}caracoroa* - Decide no cara ou coroa.
|
|>---〖🧩 *DIVERSÃO*〗
|
|- *${prefixo}mascote* - Exibe o mascote.
|- *${prefixo}simi* frase - Recebe uma resposta do SimSimi.
|- *${prefixo}chance* - Calcula a chance de algo acontecer.
|- *${prefixo}fch* - Gera uma frase contra a humanidade.
|
|
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
    }
}

export const menuAdmin = (botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|>---〖⚙️ *ADMINISTRAÇÃO*〗
|
|>- Guide ❔: *${prefixo}comnand* guide
|
|--〖🎨 *CUSTOMIZATION*〗
|
|- *${prefixo}nomebot* nome - Changes the bot's name and updates menus
|- *${prefixo}nomeadm* nome - Changes the administrator's name and updates menus
|- *${prefixo}nomesticker* nome - Changes the sticker pack name
|- *${prefixo}prefixo* simbolo - Changes the command prefix
|- *${prefixo}fotobot* - Changes the BOT's photo
|- *${prefixo}estado* online, offline or maintenance - Changes the current bot status.
|
|--〖🛠️ *GENERAL*〗
|
|- *${prefixo}infobot* - Complete BOT information
|- *${prefixo}ping* - System information and response time.
|- *${prefixo}bloquear* @usuario  -Blocks the mentioned user.
|- *${prefixo}desbloquear* @usuario  - Unblocks the mentioned user.
|- *${prefixo}listablock*  - Lists all blocked users.
|- *${prefixo}bcgrupos* mensagem - Makes an announcement with a message only for GROUPS.
|- *${prefixo}desligar* - Turns off the bot.
|
|--〖👤 *USERS*〗
|
|- *${prefixo}verdados* @usuario - Shows the data of the user registered in the bot.
|- *${prefixo}usuarios* tipo - Shows all users of the chosen type.
|- *${prefixo}tipos* - Shows all available user types.
|- *${prefixo}novotipo* type, title, commands - Creates a new user type.
|- *${prefixo}tipotitulo* type, title - Changes the title of a user type.
|- *${prefixo}deltipo* tipo - type - Deletes a user type.
|- *${prefixo}usuariotipo* tipo @usuario - Changes the user account type.
|- *${prefixo}limpartipo* tipo - type - Clears all users of this type and turns them into regular users.
|
|--〖🚫 *BLOQUEIO DE COMANDOS*〗 
|
|- *${prefixo}bcmdglobal* comando1 comando2 - Blocks the chosen commands globally.
|- *${prefixo}dcmdglobal* comando1 comando2 - Blocks the chosen commands globally.
|
|--〖👤 *LIMITE DIÁRIO COMANDOS*〗
|
|- *${prefixo}limitediario* - Ativa/desativa o limite diario de comandos por dia de acordo com tipo de usuário.
|- *${prefixo}tipocomandos* tipo qtd-comandos - Muda o limite de comandos por dia de um tipo de usuário.
|- *${prefixo}rtodos* - Reseta os comandos diários de todos usuários.
|- *${prefixo}r* @usuario - Reseta os comandos diários de um usuário.
|
|--〖👤 *TAXA COMANDOS POR MINUTO*〗
|
|- *${prefixo}taxacomandos* qtd-comandos - Ativa/desativa a taxa de comandos por minuto.
|
|--〖👁️ *REVELAR MENSAGENS*〗
|
|- *${prefixo}autorevelar* - Ativa/desativa a revelação automatica de mensagens de visualização única.
|- *${prefixo}revelar* - Revela o contéudo de uma mensagem de visualização única.
|
|--〖🎚️ *CONTROLE*〗
|
|- *${prefixo}pvliberado* - Ativa/desativa os comandos em mensagens privadas.
|- *${prefixo}autostickerpv* - Ativa/desativa a criação automática de stickers no privado.
|
|--〖👨‍👩‍👧‍👦 *GRUPOS*〗
|
|- *${prefixo}grupos* - Mostra os grupos atuais.
|- *${prefixo}linkgrupo* numero - Mostra o link do grupo selecionado.
|- *${prefixo}sair* - Sai do grupo.
|- *${prefixo}sairgrupos* - Sai de todos os grupos.
|- *${prefixo}entrargrupo* link-grupo - BOT entra no grupo.
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

