let imgSrc = [
    "Dogue-Alemão_Fotos_9.jpg",
    "pastor_alemao-p.jpg",
    "american-pit-bull-terrier-relaxante-no-chao-de-madeira_60359-479.jpg",
    "poodle1.jpg",
    "dogoargentino.jpg",
    "fila-brasileiro-500-500-2.jpeg",
    "labrador-preto-sentado.jpg",
    "golden-retriever-dog-g3c6c2254d_1920.jpeg",
    "husky-siberiano-1.jpg"
    ];
    
    let capImgs = document.getElementsByTagName("img");
    let geradorImgs = 0;
    let geradorPosicao = 0;
    let cont = 0;
    let tmp;
    
    
    
    
    
    let posicao = ()=>{
    
        geradorPosicao = Math.round((Math.random()*8));
        geradorImgs = Math.round((Math.random()*8));
    
        if(geradorPosicao == geradorImgs){
            posicao();
        }
    
    }
    
    let tempoTroca = ()=>{
        cont += 1;
        
        if(cont >= 180 || cont >= 360){
            cont = 0;
            clearInterval(tmp);
            tmp = setInterval(tempoTroca,15);
            posicao();
        }else{
            capImgs[geradorImgs].style.transform="rotateY("+cont+"deg)";
            if(cont == 89 || cont == 179)
               capImgs[geradorImgs].src = "imgs/"+imgSrc[geradorPosicao];
        }
    }
    
    
    tmp = setInterval(tempoTroca,15);