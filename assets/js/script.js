//esta función le agrega color al fondo del navbar para que se pueda visualizar sobre el texto de las secciones de la página 
$(window).scroll(function(){
    if($("#navbar").offset().top > 500){
        $("#navbar").addClass("bg-black");
    }else{
        $("#navbar").removeClass("bg-black");
    }
});
//esta función despliega el alerta de correo enviado
$(function(){
    $('#enviarCorreo').click(function () {
		alert('El correo fue enviado correctamente...');
	});   
	});
    