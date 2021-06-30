
import bezier from './map/bezier'
import * as common from './common';
import polyline from './map/polyline'
import taper from './map/taper' 
const Line = { 
    map:{
        bezier,
        polyline,
        taper
    }, 
    site:{
        bezier:require('./site/bezier').default,
        polyline:require('./site/polyline').default,
        taper:require('./site/taper').default
    }, 
    tree:{
        bezier:require('./tree/bezier').default,
    }, 
    fish:{
        root:require('./fish/root').default,
        item:require('./fish/item').default
    },
    common

}
export default Line;