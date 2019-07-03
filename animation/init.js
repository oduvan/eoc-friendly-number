requirejs(['ext_editor_1', 'ext_editor_io', 'jquery_190', 'raphael_210'],
    function (ext, extIO, $, ra) {
        var io = new extIO({
            functions: {
                js: 'friendlyNumber',
                python: 'friendly_number'
            }
        });
        io.parseInputArguments = function (checkioInput) {
            var lang = this.getLanguage();
            if (lang === 'js') {
                var args = JSON.encode(checkioInput);
                return args.slice(1, args.length - 1);
            } else {
                var checkioInputStr = checkioInput[0];

                var pow = String(checkioInputStr).match(/(?:\de\+)(\d+)/);
                if (pow && pow.length > 1) {
                    checkioInputStr = "10**" + pow[1];
                }


                for(var kwarg in checkioInput[1]){
                    checkioInputStr += ', ' + kwarg + '=' + JSON.stringify(checkioInput[1][kwarg]);
                }
                return checkioInputStr;
            }
        };
        io.start();
    }
);
