const BtnModal = document.querySelector('.btn_modal');
const Fechar = document.querySelector('.fechar');
const  Modal = document.querySelector('.modal');
const Iframe = document.getElementById("iframe");
const Link = Iframe.src;

function OpenModal (){
	Modal.classList.add('ativo');
	Iframe.setAttribute("src",Link);

}
function CloseModal (){
	Modal.classList.remove('ativo');
	Iframe.setAttribute("src","");
}

