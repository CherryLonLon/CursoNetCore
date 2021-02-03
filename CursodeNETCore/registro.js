		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script>
			$(document).ready(function() {
				$('#myForm').on('submit', MostrarDatos);
			});

			function MostrarDatos() {
				var nombre = $('#nombre').val();
				var apellidos = $('#apellidos').val();
				var edad = $('#edad').val();
				var fechaNacimiento = $('#fechaNacimiento').val();
				var usuario = $('#usuario').val();
				var psw = $('#psw').val();

			
				alert(
					'nombre: ' + nombre + '\n' +
					'apellidos: ' + apellidos + '\n' +
					'edad: ' + edad + '\n' +
					'fechaNacimiento: ' + fechaNacimiento + '\n' +
					'usuario: ' + usuario + '\n' +
					'psw: ' + psw
				);

			}
			
		</script>