// let rolamento = 0

// function rolar() {
//     if (scrollY > rolamento) {
//         document.getElementById("nav").style.marginTop='20px';
//     } else {
//         document.getElementById("nav").style.marginTop='00px';
//     }
// }

function calcularpedido() {
    // entrada de dados


        // sanduba = document.getElementById('sanduba').value;
        // coca = document.getElementById('coca').value;
        // fritas = document.getElementById('fritas').value;

        // quantsand = document.getElementById('quantsand').value;
        // quantcoc = document.getElementById('quantcoc').value;
        // quantfri = document.getElementById('quantfri').value;


        tibbers = document.getElementById('tibbers').value;

        mol = document.getElementById('mol').value;

        mas = document.getElementById('mas').value;

        cas = document.getElementById('cas').value;

        cam = document.getElementById('cam').value;

        bone = document.getElementById('bone').value;

        cal = document.getElementById('cal').value

          
    // processamento
        // tibbers
            if (tibbers == "tpreto"){
                imagem1 = 'img/produtos/tibbers 1.jpg';
                value1 = 28.00;           
            }
            else if (tibbers == "tazul") {
                imagem1 = 'img/produtos/tibbers 2.jpg';
                value1 = 28.00;
            }else {
                value1 = 0.00;
            }
        
        // moletom
            if (mol == "mmarrom") {
                imagem2 = 'img/produtos/Colorways-Pullover-Gold-front-v1-copy-2560x3200.png';
                value2 = 60.00;
            } else if (mol == "mcinza") {
                imagem2 = 'img/produtos/Colorways-Pullover-Bone-v1-copy-2560x3200.png';
                value2 = 60.00;
            } else if (mol == "mlim") {
                imagem2 = 'img/produtos/Colorways-Pullover-Jade-front-v2-copy-2560x3200.png';
                value2 = 75.00;
            } else {
                value2 = 0.00;
            }
        
        // mascara
            if (mas == "mpreto") {
                imagem3 = 'img/produtos/Baron-Mask-front-v2-copy-2560x3200.png';
                value3 = 14.90;
                
            } else if (mas == "mbranco") {
                imagem3 = 'img/produtos/Floral-Mask-front-v1-copy-2560x3200.png'
                value3 = 14.90;
            } else {
                value3 = 0.00;
            }

        // casaco
            if (cas == 'cnormal') {
                imagem4 = 'img/produtos/Track-Jacket-front-v2-2560x3200.png'
                value4 = 70.00;                
            } else if (cas == 'cpremium') {
                imagem4 = 'img/produtos/Premium-ZipUp-Hoodie-front-v1-copy-2560x3200.png'
                value4 = 80.00;
            } else {
                value4 = 0.00;
            }

        // camiseta
            if (cam == 'camlaranja') {
                imagem5 = 'img/produtos/Unisex-Tee-Gold-front-v3-copy-2560x3200.png'
                value5 = 32.00;              
            } else if (cam == 'campreto') {
                imagem5 = 'img/produtos/Unisex-Tee-Jade-front-v3-2560x3200.png'
                value5 = 32.00;
            } else {
                value5 = 0.00;
            }

        // bone
            if (bone == 'bonepreto') {
                imagem6 = 'img/produtos/Baron-Mask-front-v2-copy-2560x3200.png'
                value6 = 24.00;
            } else if (bone == 'boneazul') {
                imagem6 = 'img/produtos/Floral-Hat-front-v2-copy-2560x3200.png'
                value6 = 24.00;
            } else {
                value6 = 0.00;
            }

        // calsa
            if (cal == 'calnormal') {
                imagem7 = 'img/produtos/Joggers-front-v2-copy-2560x3200.png'            
                value7 = 52.00;    
            } else if (cal == 'calpremium') {
                imagem7 = 'img/produtos/Track-Pants-front-R-v2-copy-2560x3200.png';
                value7 = 56.00;
            } else {
                value7 = 0.00
            }



            total = value1 + value2 + value3 + value4 + value5 + value6 + value7 ;

        // finalização



            // document.getElementById('fotosanduba').src = imagem;
            document.getElementById('fototibbers').src = imagem1;
            document.getElementById('fotomol').src = imagem2;
            document.getElementById('fotomas').src = imagem3;
            document.getElementById('fotocas').src = imagem4;
            document.getElementById('fotocam').src = imagem5;
            document.getElementById('fotobone').src = imagem6;
            document.getElementById('fotocal').src = imagem7;
            document.getElementById('totale').value = total;toFixed(2); 

            
}