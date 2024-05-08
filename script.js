/*comenzaremos agregando nuestras variables las cuales ayudarana  que le demos una mejor funcion*/ 
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let painting = false;
/* Obtiene el elemento canvas y su contexto 2D, e inicializa una bandera para controlar cuándo se está pintando */
function startDraw(e) {
    painting = true;
    draw(e);
    /* Inicia el dibujo cuando el mouse presiona el canvas, y comienza a dibujar en la posición del evento */
}
function endDraw() {
    painting = false;
    ctx.beginPath();
    /* Finaliza el dibujo cuando se suelta el mouse y comienza un nuevo camino en el canvas para futuros trazos */
}
function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;/*le damos el ancho al pincel*/
    ctx.lineCap = 'round';/*linea del draw*/
    ctx.strokeStyle = 'black';/*color del pincel*/
    ctx.lineTo(e.clientX, e.clientY);/*posiciones */
    ctx.stroke();/*punto inicial */
    ctx.beginPath();/*comienza una ruta */
    ctx.moveTo(e.clientX, e.clientY);
    /* dibuja deacuerdo al mause */
}
// Eventos para controlar el dibujo
// canvas.addEventListener('mousedown', startDraw);
// canvas.addEventListener('mouseup', endDraw);
// canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousemove', startDraw);/*hace que al moverse el mause dibuje  */

