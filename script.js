// Referências aos elementos de áudio e controle
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const currentTrackDisplay = document.getElementById('current-track');
const albumCover = document.getElementById('album-cover');
const volumeSlider = document.getElementById('volume-slider');



// Lista de faixas
const tracks = [  
    
    { src: './pregar/CAMILA BARROS _ O TEMPO ESTÁ ACABANDO _ LAGOINHA ALPHAVILLE.mp3', cover: './fotos/camila.jpg', title: ' O TEMPO ESTÁ ACABANDO' },
    { src: './pregar/Vou chegar mais longe _ Silmar Coelho.mp3', cover: './fotos/silmar1.jpg', title: ' Vou chegar mais longe _ Silmar Coelho' },
    { src: './pregar/Coragem para viver - Pr. Silmar Coelho.mp3', cover: './fotos/silmar2.jpg', title: ' Coragem para viver - Pr. Silmar Coelho ' },
    { src: './pregar/Pr.  Silmar Coelho - Não desista.mp3', cover: './fotos/silmar3.webp', title: ' Não desista _ Silmar Coelho' },
    { src: './pregar/DE ONDE VEIO A MADEIRA DA CRUZ.mp3', cover: './fotos/adelry.jpg', title: 'DE ONDE VEIO A MADEIRA DA CRUZ' },
    { src: './pregar/Pr Jackson Antônio - VOCÊ VAI FLORESCER - 2017 (de arrepiar).mp3', cover: './fotos/jackson.jpeg', title: 'VOCÊ VAI FLORESCER' },
    { src: './pregar/Pr Jackson Antônio - 2018 (Mensagem Impactante 🔥).mp3', cover: './fotos/jackson1.jpg', title: 'O tamanho do nosso Deus' },
    { src: './pregar/Um Culto Inesquecível! - Pr Gilmar Santos - As Atuações do Espírito na Igreja Primitiva!.mp3', cover: './fotos/pr gilmar santos.jpg', title: 'A Atuação do Espírito Santo' },
    { src: './pregar/QUANTO VALE UM AMIGO, PASTOR MARCO FELICIANO.mp3', cover: './fotos/pr marco feliciano.jpg', title: ' QUANTO VALE UM AMIGO' },
    { src: './pregar/PR ISAIAS DE OLIVEIRA  (VIVENDO O PROPOSITO).mp3', cover: './fotos/pr isaias.jpg', title: '(VIVENDO O PROPOSITO)' },
    { src: './pregar/4 Dimensões do maná.m4a', cover: './fotos/geziel.jpg', title: '(4 Dimensões do maná)' },
    { src: './pregar/Pr Abilio Santana - Aviva a Tua Obra Ó Senhor! - Gideões! 2017.mp3', cover: './fotos/abilio.jpg', title: ' Aviva a Tua Obra Ó Senhor' },
    { src: './pregar/ANJO, PÃO, BRASA E BOTIJA DE ÁGUA - PR ABILIO SANTANA (COMPLETO).mp3', cover: './fotos/1.jpg', title: ' ANJO, PÃO, BRASA E BOTIJA DE ÁGUA' },
    { src: './pregar/Dagom ou Jeová pregação.mp3', cover: './fotos/ablio2.jpg', title: 'Dagom ou Jeová ' },
    { src: './pregar/Pastor Geziel Apocalipse.mp3', cover: './fotos/geziel.jpg', title: 'Apocalipse ' },
    { src: './pregar/Geziel gomes Óleo Sobre a cabeça.mp3', cover: './fotos/pastor geziel gomes.jpg', title: 'Óleo Sobre a cabeça ' },
    { src: './pregar/ORAR EM LÍNGUAS, É ORAR A VONTADE DE DEUS - PR SUZANO SELMO (128 kbps).mp3', cover: './fotos/orar.jpg', title: 'ORAR EM LÍNGUAS, É ORAR A VONTADE DE DEUS' },
    { src: './pregar/Palavras tem poder _ Silmar Coelho (128 kbps).mp3', cover: './fotos/Silmar-Coelho.jpg', title: 'Palavras tem poder _ Silmar Coelho' },



]



let currentTrackIndex = 0;
let isPlaying = false;


// Função para carregar uma nova faixa
function loadTrack(index) {
    const track = tracks[index];
    if (track) {
        audioPlayer.src = track.src;
        albumCover.src = track.cover;
        currentTrackDisplay.textContent = `Tocando: ${track.title}`;
        audioPlayer.load();
        if (isPlaying) {
            audioPlayer.play();
        }
    }
}

// Função para tocar/pausar a faixa atual
function playPauseTrack() {
    if (isPlaying) {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    } else {
        audioPlayer.play();
        playButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

// Função para avançar para a próxima faixa
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
}

// Função para voltar para a faixa anterior
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
}

// Controle de volume
function adjustVolume() {
    audioPlayer.volume = volumeSlider.value;
}

// Eventos de clique para os botões de controle
playButton.addEventListener('click', playPauseTrack);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);
volumeSlider.addEventListener('input', adjustVolume);

// Evento para tocar a próxima faixa quando a atual terminar
audioPlayer.addEventListener('ended', nextTrack);

// Carrega a primeira música ao iniciar a página
window.addEventListener('load', () => {
    loadTrack(currentTrackIndex);

initButton.addEventListener('click', () => {
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    initButton.remove();
});
document.body.appendChild(initButton);
});

// Lista de arquivos na pasta 'fundo'
const fundos = [
  
    
    "Fundos/culto-evangelico.jpeg",
    "Fundos/orar.jpg",
    "Fundos/adoração.jpg",
    "Fundos/biblia.jpg",
    "Fundos/comunhão.jpg",
  
    
    
    


    
   
    // Adicione mais fundos aqui...
];

let fundoIndex = 0;
const fundoElement = document.getElementById('fundo-dinamico');

// Função para mudar o fundo
function mudarFundo() {
    const arquivo = fundos[fundoIndex];
    const extensao = arquivo.split('.').pop().toLowerCase();

    if (extensao === 'mp4' || extensao === 'webm' || extensao === 'ogg') {
        // Se for um vídeo
        const video = document.createElement('video');
        video.id = 'video-fundo';
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.innerHTML = `<source src="${arquivo}" type="video/${extensao}">`;

        // Remove o vídeo anterior
        fundoElement.innerHTML = '';
        fundoElement.appendChild(video);

        // Garantir que o vídeo esteja carregado antes de exibir
        video.addEventListener('loadeddata', () => {
            video.style.opacity = '1';
        });

        video.style.opacity = '0';
    } else {
        // Se for uma imagem ou GIF
        fundoElement.style.backgroundImage = `url('${arquivo}')`;
    }

    // Atualiza o índice para o próximo fundo
    fundoIndex = (fundoIndex + 1) % fundos.length;
}

// Mudar o fundo a cada 45 segundos
setInterval(mudarFundo, 45000);

// Iniciar com o primeiro fundo
mudarFundo();  