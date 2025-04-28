window.onload = () => {
    const form = document.querySelector("._form");
  
    form.onsubmit = (e) => {
      // Limpiar errores anteriores
      const errorMessages = form.querySelectorAll("p.error");
      errorMessages.forEach(p => {
        p.textContent = "";
        p.classList.remove("_display-flex");
        p.classList.add("_display-none");
      });
  
      const name = form.name.value.trim();
      const branch_id = form.branch_id.value;
      const model = form.model.value.trim();
      const description = form.description.value.trim();
      const price = form.price.value.trim();
      const stock = form.stock.value.trim();
      const season_id = form.season_id.value;
      const age_id = form.age_id.value;
      const genre_id = form.genre_id.value;

      const selectedColors = [...form.querySelectorAll('input[name="colors"]:checked')].map(check => check.value);
    const selectedSizes = [...form.querySelectorAll('input[name="sizes"]:checked')].map(check => check.value);

    const imageInput = form.querySelector('input[name="image"]');
      const imageFile = imageInput.files[0];

      const visibility = form.visibility.value;



      const errors = {};
  
      // Validaciones
      if (validator.isEmpty(name)) {
        errors.name = "Debe ingresar el nombre del producto";
      } else if (!validator.isLength(name, { min: 5 })) {
        errors.name = "El nombre debe tener al menos 5 caracteres";
      }
  
      if (validator.isEmpty(branch_id)) {
        errors.branch_id = "Debe seleccionar una marca";
      }

      if (validator.isEmpty(model)) {
        errors.model = "Debe ingresar el modelo del producto";
      } else if (!validator.isLength(model, { min: 6 })) {
        errors.model = "El modelo debe tener al menos 6 caracteres";
      }

      if (validator.isEmpty(description)) {
        errors.description = "Debe ingresar la descripción del producto";
      } else if (!validator.isLength(description, { min: 20 })) {
        errors.description = "La descripción debe tener al menos 20 caracteres";
      }

      if (validator.isEmpty(price)) {
        errors.price = "Debe ingresar el precio del producto";
      } else if(!validator.isNumeric(price)){
        errors.price = "Solo debe ingresar numeros en el precio";
      } else if (!validator.isLength(price, { min: 5 })) {
        errors.price = "El precio debe tener al menos 5 numeros";
      }

      if (validator.isEmpty(stock)) {
        errors.stock = "Debe ingresar el stock del producto";
      } else if(!validator.isNumeric(stock)){
        errors.stock = "Solo debe ingresar numeros en el stock";
      } else if (!validator.isLength(stock, { min: 1 })) {
        errors.stock = "El stock debe tener al menos 1 numero";
      }

      if (validator.isEmpty(season_id)) {
        errors.season_id = "Debe seleccionar una temporada";
      }

      if (validator.isEmpty(age_id)) {
        errors.age_id = "Debe seleccionar una edad";
      }

      if (validator.isEmpty(genre_id)) {
        errors.genre_id = "Debe seleccionar una genero";
      }

      if (selectedColors.length < 1) {
        errors.colors = "Debe seleccionar al menos un color";
      }
  
      if (selectedSizes.length < 1) {
        errors.sizes = "Debe seleccionar al menos un talle";
      }

      if (imageFile) {
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp", "image/gif"];
        if (!allowedTypes.includes(imageFile.type)) {
          errors.image = "El formato de imagen no es válido";
        }
  
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (imageFile.size > maxSize) {
          errors.image = "La imagen no debe superar los 5 MB";
        }
      }

      if (validator.isEmpty(visibility)) {
        errors.visibility = "Debe seleccionar una visibilidad";
      }
  
      // Mostrar errores
      if (Object.keys(errors).length > 0) {
        e.preventDefault();
  
        for (const field in errors) {
          const input = form.querySelector(`[name="${field}"]`);

          if (!input && (field === "colors" || field === "sizes")) {
            input = form.querySelector(`[name="${field}"]`);
          }

          if (!input && field === "image") {
            input = form.querySelector('input[name="image"]');
          }

          const errorP = input.closest("._form-group, ._form-double-group").querySelector("p.error");
          if (errorP) {
            errorP.textContent = errors[field];
            errorP.classList.remove("_display-none");
            errorP.classList.add("_display-flex");
          }
        }
      }
    };
  };