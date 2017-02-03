import { Livro } from './../model/livro';
import { Http } from '@angular/http';

export const livros: Livro[] = [
    {
        id: 1,
        nome: 'Harry Potter e a Criança Amaldiçoada',
        urlImg: 'https://upload.wikimedia.org/wikipedia/en/f/fe/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg'
    },
    {
        id: 2,
        nome: 'Por que fazemos o que fazemos?: Aflições vitais sobre trabalho, carreira e realização',
        urlImg: 'http://statics.livrariacultura.net.br/products/capas_lg/096/46331096.jpg'
    },
    {
        id: 3,
        nome: 'Não se enrola, não',
        urlImg: 'http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9378102&qld=90&l=430&a=-1'
    },
    {
        id: 4,
        nome: 'Enclausurado',
        urlImg: 'http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9370264&qld=90&l=430&a=-1'
    },
    {
        id: 5,
        nome: 'A menina que roubava livros',
        urlImg: 'http://statics.livrariacultura.net.br/products/capas_lg/015/1859015.jpg'
    },
    {
        id: 6,
        nome: 'A Guerra dos Tronos, As Crônicas de Gelo e Fogo, Livro um',
        urlImg: 'https://catalisecritica.files.wordpress.com/2011/05/a-guerra-dos-tronos.jpg'
    }
]