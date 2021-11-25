function validarUsuario(){

    if ($("#useremail").val() != "" && $("#password").val()!="") {
//alert("validar")
        $.ajax({
            url:"http://132.226.250.48:8080/api/user/"+ $("#useremail").val() + "/" + $("#password").val(),
            type:"GET",
            success:function(respuesta){

                if (respuesta.name === "NO DEFINIDO") {
                    alert("La cuenta o la contraseña no concuerdan");
                    document.location.href="login.html";

                }
                else{
                    alert("Bienvenido " + respuesta.name + " a la aplicación");
                   // let user = document.getElementById("userlogin").value=respuesta.name
                    document.location.href="index.html";
                }
            }
        });
    }
}

function userAdd(){

    //    console.log($("#username").val())
    
    if ($("#username").val() != "" && $("#useremail").val() != "" && $("#password").val()!="" && $("#passwordrepeat").val() != "") {

        if ($("#password").val() === $("#passwordrepeat").val()){
            console.log("va a validar")

            if(!userVal()) {

                let dataJSON = {
                    email:$("#useremail").val(),
                    name:$("#username").val(),
                    password:$("#password").val()
                }
        
                let dataToSend = JSON.stringify(dataJSON);

                $.ajax({
                    url:"http://132.226.250.48:8080/api/user/new",
                    type:"POST",
                    data:dataToSend,
                    contentType:"application/JSON",
                    datatype:"JSON",
                    success:function(respuesta){
                        console.log(respuesta)
                        alert("Usuario creado satisfactoriamente ya puede ingresar a la aplicacion");
                        document.location.href="index.html";
                    }
                });
            }
            else{
                alert("Verifique porque el usuario ya se encuentra registrado");
                document.location.href="login.html";            
            }
        }
        else {
            alert("Verifique porque La contraseña y la confirmación no son iguales");
            document.location.href="registro.html";            
        }
    }
    else {
        alert("Por favor digitar toda la información solicitada");            
        document.location.href="registro.html";            
    }
    
}

function userVal(){

    $.ajax({
        url:"http://132.226.250.48:8080/api/user/" + $("#useremail").val(),
        type:"GET",
        success:function(respuesta){

            return(respuesta)
        }
    }).fail( function( jqXHR, textStatus, errorThrown ) {
        alert( 'Error!!' );
    });
}
    