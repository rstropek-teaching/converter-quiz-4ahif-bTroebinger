if(parseInt(process.argv[2], 10)){
    if(process.argv[3].isLengthUnit){
        if(process.argv[4] === 'to'){
            if(process.argv[5].isLengthUnit){
                var convertedVar = convertLengthFloat(process.argv[2], process.argv[3], process.argv[5]);
                console.log(process.argv[2] +" "+ process.argv[3] +" are "+ convertedVar +" "+ process.argv[5]);
            }else{
                console.error("Invalid Parameters");
            }
        }else{
            console.error("Invalid Parameters");
        }
    }else if(process.argv[3].isWeightUnit){
        if(process.argv[4] === 'to'){
            if(process.argv[4].isWeightUnit){
                var convertedVar = convertWeightFloat(process.argv[2], process.argv[3], process.argv[5]);
                console.log(process.argv[2] +" "+ process.argv[3] +" are "+ convertedVar +" "+ process.argv[5]);
            }else{
                console.error("Invalid Parameters");
            }
        }else{
            console.error("Invalid Parameters");
        }
    }else{
        console.error("Invalid Parameters");
    }
}else{
    console.error("Invalid Parameters");
}

function isLengthUnit(n){
    if(typeof n === 'string' || n instanceof String){
        switch(n){
            case m:
                return true;
                break;
            case cm:
                return true;
                break;
            case mm:
                return true;
                break;
            default:
                return false;
        }
    }
}

function isWeightUnit(n){
    if(typeof n === 'string' || n instanceof String){
        switch(n){
            case kg:
                return true;
                break;
            case g:
                return true;
                break;
            default:
                return false;
        }
    }
}

function convertLengthFloat(what, from, to){
    switch(from){
        case m:
            switch(to){
                case m:
                    return what;
                    break;
                case cm:
                    return what * 100;
                    break;
                case mm:
                    return what * 1000;
                    break;
            }
            break;
        case cm:
            switch(to){
                case m:
                    return what / 100;
                    break;
                case cm:
                    return what;
                    break;
                case mm:
                    return what * 10;
                    break;
            }
            break;
        case mm:
            switch(to){
                case m:
                    return what / 1000;
                    break;
                case cm:
                    return what / 10;

                case mm:
                    return what;
                    break;
            }
    }
}
function convertWeightFloat(what, from, to){
    switch(from){
        case kg:
            return what * 1000;
            break;
        case g:
            return what / 1000;
    }
}