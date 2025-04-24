window.onload = () => {
    const form = document.querySelector("form");
    const errorList = document.querySelector("._errors");
  
    form.onsubmit = (e) => {
      errorList.innerHTML = "";
  
      const email = form.email.value.trim();
      const password = form.password.value.trim();
  
      let errors = [];

      if (validator.isEmpty(email)) {
        errors.push("Debes ingresar un email");
      }else if (!validator.isEmail(email)) {
        errors.push("El formato de email no es correcto");
      }
  
      if (validator.isEmpty(password)) {
        errors.push("Debes ingresar una contraseña");
      }else if (!validator.isLength(password, { min: 7 })) {
        errors.push("La contraseña debe tener al menos 8 caracteres");
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