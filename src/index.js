module.exports = function multiply(first, second) {
    // your solution
    var c ;
    var ans = '';
    var o = 0;
    var ret = '' ;
    var nols = '';

    function reverse(str) {
        var ret = '';

        for ( var i = str.length - 1 ; i >= 0 ; i-- )
            ret += str[i];

        return ret;
    }

    function sum_long(s,f){
        var o = 0;
        ans = '';

        if ( f.length < s.length )
        {
            var tmp = f;
            f = s;
            s = tmp;
        }

        while ( f.length != s.length)
        {
            s += '0';
        }

        for ( var i = 0 ; i < s.length ; i ++ )
        {
            var g = ( +f[i] + +s[i] + o ) % 10 ;
            o = Math.floor( ( +f[i] + +s[i] + o ) / 10 );
            ans += g ;
        }

        if ( o > 0 )
            ans += o;

        return ans
    }

    if ( first.length < second.length )
    {
        var tmp = first;
        first = second;
        second = tmp;
    }

    var a = reverse( first );
    var b = reverse( second );

    for ( var i = 0 ; i < b.length ; i ++ )
    {
        ans = '';
        ans = nols;
        nols += 0;

        for ( var j = 0 ; j < a.length; j++ )
        {
            c =( ( +b[i] * +a[j] ) + o ) % 10;
            o = Math.floor( ( +b[i] * +a[j] + o) / 10 );
            ans += c;
        }

        if( o > 0 )
            ans += o;

        o = 0;
        ret = sum_long(ret,ans);
    }

    ans = reverse(ret);
    return ans;
}




