$(function(){

    var sliderModule = (function (slider){
        var pb = {}
        pb.el = $('#slider');
        pb.items = {
            panel: pb.el.find('li')
        }

        // Variables necesarias
        var sliderInterval,
            currentSlider = 0,
            nexSlider = 1,
            lengthSlider = pb.items.panel.length;

        // inicialize
        pb.init = function(){

            var output = '';
           // Activamos nuestros slider
           sliderInit();

           for(var i = 0; i < lengthSlider; i++){
               if(i == 0){
                   output = '<li class="active"></li>';
               }
               else{
                   output += '<li></li>'; 
               }
           }

           
           // Controles de los slider
           $('#slider-controls').html(output).on('click', 'li', function(e){
               var $this = $(this);

               if(currentSlider !== $this.index()){
                changePanel($this.index());
               }
               
           });
        }

        var sliderInit = function(){
            sliderInterval = setInterval(pb.startSlider, 60000)
        }

        pb.startSlider = function(){
            var panels = pb.items.panel,
            controls = $('#slider-controls li');

            if(nexSlider >= lengthSlider){
                nexSlider = 0;
                currentSlider = lengthSlider - 1;
            }
           
        // Efectos
            controls.removeClass('active').eq(currentSlider).addClass('active');
            panels.eq(currentSlider).fadeOut('slow');
            panels.eq(nexSlider).fadeIn('slow');    
        // Acatualizamos los datos
            currentSlider = nexSlider;
            nexSlider += 1;
        }

        // Funciones para los controladores del slider
        var changePanel = function(id){
            clearInterval(sliderInterval);

            var panels = pb.items.panel,
                controls = $('#slider-controls li');
            // comprobar los paneles
            if(id >= lengthSlider){
                id = 0
            }
            else if(id < 0){
                id = lengthSlider -1;
            }

            // Efectos
            controls.removeClass('active').eq(id).addClass('active');
            panels.eq(currentSlider).fadeOut('slow');
            panels.eq(id).fadeIn('slow');

            // Actualizamos los datos
            currentSlider = id;
            nexSlider = id + 1;

            // Reactivamos el slider
            sliderInit();
        }

        return pb;
    }());

    sliderModule.init();

    /**
     * Empaquetamiento
     */

    var sliderModuleE = (function (){
        var pbE = {}
        pbE.el = $('#sliderE');
        pbE.items = {
            panel: pbE.el.find('li')
        }

         // Variables necesarias
         var sliderInterval,
         currentSlider = 0,
         nexSlider = 1,
         lengthSlider = pbE.items.panel.length;

          // inicialize
        pbE.init = function(){

            var output = '';
           // Activamos nuestros slider
           sliderInit();

           for(var i = 0; i < lengthSlider; i++){
               if(i == 0){
                   output = '<li class="active"></li>';
               }
               else{
                   output += '<li></li>'; 
               }
           }

           
           // Controles de los slider
           $('#slider-controlsE').html(output).on('click', 'li', function(e){
               var $this = $(this);

               if(currentSlider !== $this.index()){
                changePanel($this.index());
               }
               
           });
        }

        var sliderInit = function(){
            sliderInterval = setInterval(pbE.startSlider, 60000)
        }

        pbE.startSlider = function(){
            var panels = pbE.items.panel,
            controls = $('#slider-controlsE li');

            if(nexSlider >= lengthSlider){
                nexSlider = 0;
                currentSlider = lengthSlider - 1;
            }
           
        // Efectos
            controls.removeClass('active').eq(currentSlider).addClass('active');
            panels.eq(currentSlider).fadeOut('slow');
            panels.eq(nexSlider).fadeIn('slow');    
        // Acatualizamos los datos
            currentSlider = nexSlider;
            nexSlider += 1;
        }

        // Funciones para los controladores del slider
        var changePanel = function(id){
            clearInterval(sliderInterval);

            var panels = pbE.items.panel,
                controls = $('#slider-controlsE li');
            // comprobar los paneles
            if(id >= lengthSlider){
                id = 0
            }
            else if(id < 0){
                id = lengthSlider -1;
            }

            // Efectos
            controls.removeClass('active').eq(id).addClass('active');
            panels.eq(currentSlider).fadeOut('slow');
            panels.eq(id).fadeIn('slow');

            // Actualizamos los datos
            currentSlider = id;
            nexSlider = id + 1;

            // Reactivamos el slider
            sliderInit();
        }

        return pbE;



    }());

    sliderModuleE.init();

    /**
     * copresion heridad israeli
     */
    
    var sliderModuleI = (function (){
        var pbI = {}
        pbI.el = $('#sliderI');
        pbI.items = {
            panel: pbI.el.find('li')
        }

         // Variables necesarias
         var sliderInterval,
         currentSlider = 0,
         nexSlider = 1,
         lengthSlider = pbI.items.panel.length;

          // inicialize
        pbI.init = function(){

            var output = '';
           // Activamos nuestros slider
           sliderInit();

           for(var i = 0; i < lengthSlider; i++){
               if(i == 0){
                   output = '<li class="active"></li>';
               }
               else{
                   output += '<li></li>'; 
               }
           }

           
           // Controles de los slider
           $('#slider-controlsI').html(output).on('click', 'li', function(e){
               var $this = $(this);

               if(currentSlider !== $this.index()){
                changePanel($this.index());
               }
               
           });
        }

        var sliderInit = function(){
            sliderInterval = setInterval(pbI.startSlider, 60000)
        }

        pbI.startSlider = function(){
            var panels = pbI.items.panel,
            controls = $('#slider-controlsI li');

            if(nexSlider >= lengthSlider){
                nexSlider = 0;
                currentSlider = lengthSlider - 1;
            }
           
        // Efectos
            controls.removeClass('active').eq(currentSlider).addClass('active');
            panels.eq(currentSlider).fadeOut('slow');
            panels.eq(nexSlider).fadeIn('slow');    
        // Acatualizamos los datos
            currentSlider = nexSlider;
            nexSlider += 1;
        }

        // Funciones para los controladores del slider
        var changePanel = function(id){
            clearInterval(sliderInterval);

            var panels = pbI.items.panel,
                controls = $('#slider-controlsI li');
            // comprobar los paneles
            if(id >= lengthSlider){
                id = 0
            }
            else if(id < 0){
                id = lengthSlider -1;
            }

            // Efectos
            controls.removeClass('active').eq(id).addClass('active');
            panels.eq(currentSlider).fadeOut('slow');
            panels.eq(id).fadeIn('slow');

            // Actualizamos los datos
            currentSlider = id;
            nexSlider = id + 1;

            // Reactivamos el slider
            sliderInit();
        }

        return pbI;


    }());

    sliderModuleI.init();

     /**
     * Inserción Itra Osea
     */

    var sliderModuleIntra = (function (){
        var pbIntra = {}
        pbIntra.el = $('#sliderIntra');
        pbIntra.items = {
            panel: pbIntra.el.find('li')
        }

         // Variables necesarias
         var sliderInterval,
         currentSlider = 0,
         nexSlider = 1,
         lengthSlider = pbIntra.items.panel.length;

          // inicialize
        pbIntra.init = function(){

            var output = '';
           // Activamos nuestros slider
           sliderInit();

           for(var i = 0; i < lengthSlider; i++){
               if(i == 0){
                   output = '<li class="active"></li>';
               }
               else{
                   output += '<li></li>'; 
               }
           }

           
           // Controles de los slider
           $('#slider-controlsIntra').html(output).on('click', 'li', function(e){
               var $this = $(this);

               if(currentSlider !== $this.index()){
                changePanel($this.index());
               }
               
           });
        }

        var sliderInit = function(){
            sliderInterval = setInterval(pbIntra.startSlider, 60000)
        }

        pbIntra.startSlider = function(){
            var panels = pbIntra.items.panel,
            controls = $('#slider-controlsIntra li');

            if(nexSlider >= lengthSlider){
                nexSlider = 0;
                currentSlider = lengthSlider - 1;
            }
           
        // Efectos
            controls.removeClass('active').eq(currentSlider).addClass('active');
            panels.eq(currentSlider).fadeOut('slow');
            panels.eq(nexSlider).fadeIn('slow');    
        // Acatualizamos los datos
            currentSlider = nexSlider;
            nexSlider += 1;
        }

        // Funciones para los controladores del slider
        var changePanel = function(id){
            clearInterval(sliderInterval);

            var panels = pbIntra.items.panel,
                controls = $('#slider-controlsIntra li');
            // comprobar los paneles
            if(id >= lengthSlider){
                id = 0
            }
            else if(id < 0){
                id = lengthSlider -1;
            }

            // Efectos
            controls.removeClass('active').eq(id).addClass('active');
            panels.eq(currentSlider).fadeOut('slow');
            panels.eq(id).fadeIn('slow');

            // Actualizamos los datos
            currentSlider = id;
            nexSlider = id + 1;

            // Reactivamos el slider
            sliderInit();
        }

        return pbIntra;



    }());

    sliderModuleIntra.init();
});