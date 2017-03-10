module.exports = function multiply(first, second) {
    // your solution

    function reverse( str ) {
        var ret = '';

        for ( var i = str.length - 1 ; i >= 0 ; i-- )
            ret += str[i];

        return ret;
    }

    function sum_long( a , b ){
        var overflow = 0;
        var ret = '';

        if ( a.length < b.length )
        {
            var tmp = a;
            a = b;
            b = tmp;
        }

        while ( a.length != b.length)
        {
            b += '0';
        }

        for ( var i = 0 ; i < b.length ; i ++ )
        {
            var number = ( +a[i] + +b[i] + overflow ) % 10 ;
            overflow = Math.floor( ( +a[i] + +b[i] + overflow ) / 10 );
            ret += number ;
        }

        if ( overflow > 0 )
            ret += overflow;

        return ret;
    }

    function mult_long( a , b) {
        var str = '';
        var zeros = '';
        var overflow = 0;
        var ret = '';

        for ( var i = 0; i < b.length; i++ ) {
            str = '';
            str = zeros;
            zeros += 0;

            for ( var j = 0; j < a.length; j++ ) {
                var number = ( ( +b[i] * +a[j] ) + overflow ) % 10;
                overflow = Math.floor(( +b[i] * +a[j] + overflow) / 10);
                str += number;
            }

            if (overflow > 0)
                str += overflow;

            overflow = 0;
            ret = sum_long(ret, str);
        }
        return ret;
    }

    if ( first.length < second.length )
    {
        var tmp = first;
        first = second;
        second = tmp;
    }

    first = reverse( first );
    second = reverse( second );

    return  reverse( mult_long( first , second ) );

}




