const propiedades_venta = [
    {
      nombre: 'Departamento de lujo en zona exclusiva',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 
   4,
      banos: 4,
      costo: 5000,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Apartamento acogedor en la montaña' ,
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 
   2,
      banos: 1,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgW/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',   
  
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: 
   3,
      banos: 3,
      costo: 4500,
      smoke: false,
      pets: true
  
    }
  ];

  const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones:   
   2,
      banos: 2,
      costo: 2000,   
  
      humo: false,
      mascotas: true
    },
    {
      nombre: 'Casa familiar con patio',
      src: 'https://images.unsplash.com/photo-1580587730164-ba0d4e0f8eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhc2F8ZW5ufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Cómoda casa familiar con patio trasero ideal para reuniones.',
      ubicacion: '567 Park Avenue, Suburbia, CA 90210',
      habitaciones: 4,
      banos: 3,
      costo: 2500,
      humo: true,
      mascotas: true
    },
    {
      nombre: 'Departamento estudio amoblado',
      src: 'https://images.unsplash.com/photo-1504446284080-7c791179f17c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0dWRpbyUyMGFlYXQzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      descripcion: 'Estudio moderno y funcional, ideal para una persona.',
      ubicacion: '890 Elm Street, Downtown, CA 94107',
      habitaciones: 1,
      banos: 1,
      costo: 1800,
      humo: false,
      mascotas: false
    },
    {
      nombre: 'Loft industrial con terraza privada',
      src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZnQlMjBpbnRlc3JpYWwlMjBzdHVkaW8yfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=80',
      descripcion: 'Amplio loft con techos altos y terraza privada.',
      ubicacion: '1234 Industrial Way, City Center, CA 90001',
      habitaciones: 1,
      banos: 1.5,
      costo: 2200,
      humo: true,
      mascotas: false,
    }
  ];

  const contenedorAlquiler = document.getElementById('contenedor-alquiler');
    propiedadesAlquiler.slice(0, 3).forEach(propiedad => {
      const elementoPropiedad = generarElementoPropiedad(propiedad);
      contenedorAlquiler.appendChild(elementoPropiedad);
    });

    /*function generarElementoPropiedad(propiedad) {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');
    
      card.innerHTML = `
        <div class="card">
          <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento">
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5> 
    
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} 
     Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p> 
    
            <p class="${propiedad.humo ? 'text-success' : 'text-danger'}">
              <i class="fas fa-smoking"></i> ${propiedad.humo ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${propiedad.mascotas ? 'text-success' : 'text-danger'}">
              <i class="fas fa-paw"></i> ${propiedad.mascotas ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      `;
    
      return card;
    }*/
      function generarElementoPropiedad(propiedad) {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
    
        card.innerHTML = `
            <div class="card">
                <p>
                    ${propiedad.humo ? '<i class="fas fa-smoking"></i> Permitido fumar' : ''}
                </p>
                <p>
                    ${propiedad.mascotas ? '<i class="fas fa-paw"></i> Mascotas permitidas' : ''}
                </p>
            </div>
        `;
    
        return card;
    }
    
    function generarPropiedades(contenedorId, propiedades) {
      const contenedor = document.getElementById(contenedorId);
      contenedor.innerHTML = ""; // Clear existing content
    
      propiedades.slice(0, 3).forEach(propiedad => {
        const elementoPropiedad = generarElementoPropiedad(propiedad);
        contenedor.appendChild(elementoPropiedad);
      });
    }
    
    generarPropiedades('contenedor-ventas', propiedades_venta);
    
    generarPropiedades('contenedor-alquiler', propiedades_alquiler);