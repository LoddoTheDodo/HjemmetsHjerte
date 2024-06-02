const image = document.getElementById( 'productImg' );
const btn = document.getElementsByClassName( 'btn' );

btn[0].addEventListener( 'click', function (){
    image.src = './img/1%20-%20Copy.jpg'
    for ( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[1].addEventListener( 'click', function (){
    image.src = './img/2%20-%20Copy.jpg'
    for ( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[2].addEventListener( 'click', function (){
    image.src = './img/3%20-%20Copy.jpg'
    for ( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );