// Import required modules
import { criarTexto, erroComandoMsg, consoleErro } from '../lib/util.js';
import api from '@victorsouzaleal/lbot-api-comandos';
import * as socket from '../baileys/socket.js';
import { tiposMensagem } from '../baileys/mensagem.js';
import duration from 'format-duration-time';
import { comandosInfo } from '../comandos/comandos.js';

let awaitingResponse = {}; // Store user responses per chat

export const downloads = async (c, mensagemBaileys, botInfo) => {
    const comandos_info = comandosInfo(botInfo);
    const { prefixo } = botInfo;
    const { texto_recebido, comando, id_chat } = mensagemBaileys;
    const comandoSemPrefixo = comando.replace(prefixo, "");

    try {
        if (!awaitingResponse[id_chat]) {
            // Send poll for user to choose a download option
            await socket.responderEnquete(c, id_chat, "Select an option:", {
                opcoes: ["YouTube MP3", "YouTube MP4", "Facebook", "Instagram", "Twitter", "TikTok", "Image"],
                multiselecionar: false
            });
            awaitingResponse[id_chat] = true;
        } else {
            awaitingResponse[id_chat] = false;
            let userChoice = texto_recebido.toLowerCase().trim();

            switch (userChoice) {
                case "youtube mp3":
                    if (!texto_recebido) return await socket.responderTexto(c, id_chat, erroComandoMsg(comando, botInfo), mensagemBaileys);
                    const { resultado: resultadoYTMP3 } = await api.Downloads.obterYTMP3(texto_recebido);
                    await socket.responderArquivoBuffer(c, tiposMensagem.audio, id_chat, resultadoYTMP3, '', mensagemBaileys, 'audio/mpeg');
                    break;

                case "youtube mp4":
                    const { resultado: resultadoYTMP4 } = await api.Downloads.obterYTMP4(texto_recebido);
                    await socket.responderArquivoBuffer(c, tiposMensagem.video, id_chat, resultadoYTMP4, '', mensagemBaileys, 'video/mp4');
                    break;

                case "facebook":
                    const { resultado: resultadoFB } = await api.Downloads.obterMidiaFacebook(texto_recebido);
                    await socket.responderArquivoUrl(c, tiposMensagem.video, id_chat, resultadoFB.sd, '', mensagemBaileys, 'video/mp4');
                    break;

                case "instagram":
                    const { resultado: resultadoIG } = await api.Downloads.obterMidiaInstagram(texto_recebido);
                    resultadoIG.forEach(async (midia) => {
                        if (midia.tipo == "imagem") {
                            await socket.responderArquivoBuffer(c, tiposMensagem.imagem, id_chat, midia.buffer, '', mensagemBaileys);
                        } else if (midia.tipo == "video") {
                            await socket.responderArquivoBuffer(c, tiposMensagem.video, id_chat, midia.buffer, '', mensagemBaileys, 'video/mp4');
                        }
                    });
                    break;

                case "twitter":
                    const { resultado: resultadoTW } = await api.Downloads.obterMidiaTwitter(texto_recebido);
                    resultadoTW.midias.forEach(async (midia) => {
                        if (midia.tipo == "imagem") {
                            await socket.responderArquivoUrl(c, tiposMensagem.imagem, id_chat, midia.url, resultadoTW.texto, mensagemBaileys);
                        } else if (midia.tipo == "video") {
                            await socket.responderArquivoUrl(c, tiposMensagem.video, id_chat, midia.url, resultadoTW.texto, mensagemBaileys, "video/mp4");
                        }
                    });
                    break;

                case "tiktok":
                    const { resultado: resultadoTK } = await api.Downloads.obterMidiaTiktok(texto_recebido);
                    await socket.responderTexto(c, id_chat, criarTexto(comandos_info.downloads.tk.msgs.espera, resultadoTK.autor_perfil, resultadoTK.descricao), mensagemBaileys);
                    if (resultadoTK.tipo == "video") {
                        await socket.responderArquivoUrl(c, tiposMensagem.video, id_chat, resultadoTK.url, '', mensagemBaileys, "video/mp4");
                    } else {
                        for (const imagem_url of resultadoTK.url) {
                            await socket.enviarArquivoUrl(c, tiposMensagem.imagem, id_chat, imagem_url, "");
                        }
                    }
                    break;

                case "image":
                    const { resultado: resultadoImg } = await api.Imagens.obterImagens(texto_recebido);
                    let maxImagem = resultadoImg.length < 5 ? resultadoImg.length : 5;
                    for (let i = 0; i < maxImagem; i++) {
                        let indexAleatorio = Math.floor(Math.random() * (resultadoImg.length > 30 ? 30 : resultadoImg.length));
                        let imagemEscolhida = resultadoImg[indexAleatorio].url;
                        await socket.enviarArquivoUrl(c, tiposMensagem.imagem, id_chat, imagemEscolhida, '');
                        resultadoImg.splice(indexAleatorio, 1);
                    }
                    break;

                default:
                    await socket.responderTexto(c, id_chat, "Invalid option. Please select from the poll.");
                    awaitingResponse[id_chat] = true; // Keep awaiting response
                    break;
            }
        }
    } catch (err) {
        consoleErro(err, "DOWNLOADS");
        await socket.responderTexto(c, id_chat, "An error occurred while processing your request.");
    }
}
