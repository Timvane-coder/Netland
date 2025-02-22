//REQUERINDO MÓDULOS
import { criarTexto, erroComandoMsg, consoleErro } from '../lib/util.js'
import api from '../api/api.js'
import * as socket from '../baileys/socket.js'
import { tiposMensagem } from '../baileys/mensagem.js'
import duration from 'format-duration-time'
import { comandosInfo } from '../comandos/comandos.js'

export const downloads = async (c, mensagemBaileys, botInfo) => {
    // Atribuição de valores
    const comandos_info = comandosInfo(botInfo)
    const { prefixo } = botInfo
    const {
        texto_recebido,
        comando,
        args,
        mensagem,
        id_chat
    } = mensagemBaileys
    const comandoSemPrefixo = comando.replace(prefixo, "")

    // Comandos de downloads
    try {
        switch (comandoSemPrefixo) {
            case "mp3":  // Antigo "play"
                try {
                    if (!args.length) return await socket.responderTexto(c, id_chat, erroComandoMsg(comando, botInfo), mensagem)
                    let usuarioTexto = texto_recebido
                    const { resultado: resultadoInfoVideo } = await api.Downloads.obterInfoVideoYT(usuarioTexto)
                    
                    if (resultadoInfoVideo.isLiveContent) 
                        return await socket.responderTexto(c, id_chat, comandos_info.downloads.mp3.msgs.erro_live, mensagem)
                    
                    else if (resultadoInfoVideo.lengthSeconds > 300) 
                        return await socket.responderTexto(c, id_chat, comandos_info.downloads.mp3.msgs.limite, mensagem)
                    
                    const mensagemEspera = criarTexto(comandos_info.downloads.mp3.msgs.espera, resultadoInfoVideo.title, resultadoInfoVideo.durationFormatted)
                    await socket.responderTexto(c, id_chat, mensagemEspera, mensagem)

                    const { resultado: resultadoYTMP3 } = await api.Downloads.obterYTMP3(usuarioTexto)
                    await socket.responderArquivoBuffer(c, tiposMensagem.audio, id_chat, resultadoYTMP3, '', mensagem, 'audio/mpeg')
                } catch (err) {
                    if (!err.erro) throw err
                    await socket.responderTexto(c, id_chat, criarTexto(comandos_info.outros.erro_api, comando, err.erro), mensagem)
                }
                break

            case "mp4":  // Antigo "yt"
                try {
                    if (!args.length) return await socket.responderTexto(c, id_chat, erroComandoMsg(comando, botInfo), mensagem)
                    let usuarioTexto = texto_recebido
                    const { resultado: resultadoInfoVideo } = await api.Downloads.obterInfoVideoYT(usuarioTexto)
                    
                    if (resultadoInfoVideo.isLiveContent) 
                        return await socket.responderTexto(c, id_chat, comandos_info.downloads.mp4.msgs.erro_live, mensagem)
                    
                    else if (resultadoInfoVideo.lengthSeconds > 300) 
                        return await socket.responderTexto(c, id_chat, comandos_info.downloads.mp4.msgs.limite, mensagem)
                    
                    const mensagemEspera = criarTexto(comandos_info.downloads.mp4.msgs.espera, resultadoInfoVideo.title, resultadoInfoVideo.durationFormatted)
                    await socket.responderTexto(c, id_chat, mensagemEspera, mensagem)

                    const { resultado: resultadoYTMP4 } = await api.Downloads.obterYTMP4(usuarioTexto)
                    await socket.responderArquivoBuffer(c, tiposMensagem.video, id_chat, resultadoYTMP4, '', mensagem, 'video/mp4')
                } catch (err) {
                    if (!err.erro) throw err
                    await socket.responderTexto(c, id_chat, criarTexto(comandos_info.outros.erro_api, comando, err.erro), mensagem)
                }
                break

            case "fb":
                try {
                    if (!args.length) return await socket.responderTexto(c, id_chat, erroComandoMsg(comando, botInfo), mensagem)
                    let usuarioURL = texto_recebido
                    const { resultado: resultadoFB } = await api.Downloads.obterMidiaFacebook(usuarioURL)
                    
                    if (resultadoFB.duration_ms > 180000) 
                        return await socket.responderTexto(c, id_chat, comandos_info.downloads.fb.msgs.limite, mensagem)
                    
                    const mensagemEspera = criarTexto(comandos_info.downloads.fb.msgs.espera, resultadoFB.title, duration.default(resultadoFB.duration_ms).format('m:ss'))
                    await socket.responderTexto(c, id_chat, mensagemEspera, mensagem)
                    await socket.responderArquivoUrl(c, tiposMensagem.video, id_chat, resultadoFB.sd, '', mensagem, 'video/mp4')
                } catch (err) {
                    if (!err.erro) throw err
                    await socket.responderTexto(c, id_chat, criarTexto(comandos_info.outros.erro_api, comando, err.erro), mensagem)
                }
                break

            case "ig":
                try {
                    if (!args.length) return await socket.responderTexto(c, id_chat, erroComandoMsg(comando, botInfo), mensagem)
                    let linkMidia = texto_recebido
                    await socket.responderTexto(c, id_chat, comandos_info.downloads.ig.msgs.espera, mensagem)
                    const { resultado: resultadoIG } = await api.Downloads.obterMidiaInstagram(linkMidia)
                    
                    resultadoIG.forEach(async midia => {
                        if (midia.tipo == "imagem") 
                            await socket.responderArquivoBuffer(c, tiposMensagem.imagem, id_chat, midia.buffer, '', mensagem)
                        if (midia.tipo == "video") 
                            await socket.responderArquivoBuffer(c, tiposMensagem.video, id_chat, midia.buffer, '', mensagem, 'video/mp4')
                    })
                } catch (err) {
                    if (!err.erro) throw err
                    await socket.responderTexto(c, id_chat, criarTexto(comandos_info.outros.erro_api, comando, err.erro), mensagem)
                }
                break

            default:
                await socket.responderTexto(c, id_chat, criarTexto(comandos_info.outros.erro_comando_codigo, comando), mensagem)
        }
    } catch (err) {
        err.message = `${comando} - ${err.message}`
        consoleErro(err, "DOWNLOADS")
    }
      
