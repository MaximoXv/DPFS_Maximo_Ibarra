window.onload = () => {
    const form = document.querySelector("._register");
    const errorList = document.querySelector("._errors");
  
    form.onsubmit = (e) => {
      errorList.innerHTML = "";
  
      const email = form.email.value.trim();
      const password = form.password.value.trim();
      const fullname = form.fullname.value.trim();
      const direction = form.direction.value.trim();
      const phonenumber = form.phonenumber.value.trim();
      const confirmPassword = form.confirmPassword.value.trim();
      const terminosCondiciones = form.terminosCondiciones.checked;
  
      let errors = [];

      if (validator.isEmpty(fullname)) {
        errors.push("Debe ingresar su nombre completo");
    }else if(!validator.isLength(fullname, {min: 4})){
        errors.push("El nombre debe tener al menos 4 caracteres");

    }
    if (validator.isEmpty(direction)) {
        errors.push("Debe ingresar su dirección");
    }
    if (validator.isEmpty(phonenumber)) {
        errors.push("Debe ingresar su numero de telefono");
    }else if(!validator.isNumeric(phonenumber)){
        errors.push("Solo debe ingresar numeros en el numero de telefono");
    }else if(!validator.isLength(phonenumber, { min: 10 })){
        errors.push("El telefono debe tener al menos 10 numeros");

    }
      if (validator.isEmpty(email)) {
        errors.push("Debes ingresar un email");
      }else if (!validator.isEmail(email)) {
        errors.push("El formato de email no es correcto");
      }
  
      if (validator.isEmpty(password)) {
        errors.push("Debe ingresar una contraseña");
      }else if (!validator.isLength(password, { min: 8 })) {
        errors.push("La contraseña debe tener al menos 8 caracteres");
      }
      if (validator.isEmpty(confirmPassword)) {
        errors.push("Debe confirmar la contraseña");
      }else if (!validator.isLength(confirmPassword, { min: 8 })) {
        errors.push("La contraseña debe tener al menos 8 caracteres");
      }else if(confirmPassword != password){
        errors.push("La contraseña debe coincidir");
      }
      console.log(terminosCondiciones);
      

    if (!terminosCondiciones) {
        errors.push("Debe aceptar los terminos y condiciones");
    }


  
      if (errors.length > 0) {
        errorList.classList.add("display-error");
        e.preventDefault();
        errors.forEach((err) => {
          errorList.innerHTML += `<span>${err}</span>`;
        });
      }
    };
  };