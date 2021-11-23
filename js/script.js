let rolamento

function rolar() {
    if (scrollY > rolamento) {
        document.getElementById("nav").style.marginTop='20px';
    } else {
        document.getElementById("nav").style.marginTop='00px';
    }
}

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
            if (tib == "tpreto"){
                imagem = "img/tibbers 1";
                valuesand = 14.90;           
                
            }
            else if (sanduba == "quarterao") {
                imagem = "img/quarterao.jpg";
                valuesand = 13.90;
            }
            else if (sanduba == "fish") {
                imagem = "img/mcfish.jpg";
                valuesand = 12.90;
            } else {
                valuesand = 0.00;
            }
        
        // coca
            if (coca == "refriPequeno") {
                valuecoc = 5.90;
            } else if (coca == "refriMedio") {
                valuecoc = 6.90;
            } else if (coca == "refriGrande") {
                valuecoc = 7.90;
            } else {
                valuecoc = 0.00;
            }
        
        // fritas
            if (fritas == "Pequena") {
                valuefri = 4.90;
                
            } else if (fritas == "Media") {
                valuefri = 5.90;
            } else if (fritas == "Grande") {
                valuefri = 6.90;
            } else {
                valuefri = 0.00;
            }

        // quantidade

             if (quantsand == '0') {
                 alert('a quantidade mínima é 1')
             } else 
             if (quantcoc == '0') {
                 alert('a quantidade mínima é 1')
             } else 
             if (quantfri == '0') {
                alert('a quantidade mínima é 1')
             } else 
            

            total = valuesand * quantsand + valuecoc * quantcoc + valuefri * quantfri;

        // finalização



            document.getElementById('fotosanduba').src = imagem;
            document.getElementById('totale').value = total.toFixed(2); 

            
}