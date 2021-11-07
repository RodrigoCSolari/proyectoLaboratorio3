
const htmlQuestions=[
    {
        language: "html",
        type: "code",
        difficulty: 1,
        question: "Completa el codigo correcto de una estructura basica html5",
        body:{
            0:{
                text: "&lt;!DOCTYPE html&gt;<br>&lt;",
                value: "html"
            },
            1:{
                text: "&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;head&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Document&lt;&frasl;",
                value: "title"
            },
            2:{
                text: "&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;head&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;",
                value: "body"
            },
            3:{
                text: "&gt;<br>&lt;&excl;&ndash;&ndash;&nbsp;este es un comentario&nbsp;",
                value: "-->"
            },
            4:{
                text: "<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&frasl;body&gt;<br>&lt;&frasl;html&gt;<br>",
                value: ""
            }
        }
    },
    {
        language: "html",
        type: "checkbox",
        difficulty: 1,
        question: "Selecciona las etiquetas html vacias (void)",
        body:{
            0:{
                text: "&lt;h5&gt;",
                value: "false"
            },
            1:{
                text: "&lt;img&gt;",
                value: "true"
            },
            2:{
                text: "&lt;br&gt;",
                value: "true"
            },
            3:{
                text: "&lt;ul&gt;",
                value: "false"
            }
        }
    },
    {
        language: "html",
        type: "boolean",
        difficulty: 1,
        question: "Html es un Lenguaje de programacion interpretado",
        body:{
            0:{
                text:"",
                value:false
            }
        }
    },
    {
        language: "html",
        type: "order",
        difficulty: 1,
        question: "Ordena de externas a internas las etiquetas de una tabla",
        body:{
            0:{
                text: "&lt;td&gt;",
                value: "4"
            },
            1:{
                text: "&lt;tbody&gt;",
                value: "2"
            },
            2:{
                text: "&lt;table&gt;",
                value: "1"
            },
            3:{
                text: "&lt;tr&gt;",
                value: "3"
            }
        }
    },
    {
        language: "html",
        type: "radio",
        difficulty: 1,
        question: "Que significa la sigla HTML",
        body:{
            0:{
                text: "HyperTransform Markup Language",	
                value: "false"
            },
            1:{
                text: "HyperText Mega Language",	
                value: "false"		
            },
            2:{
                text: "HyperText Markup Language",		
                value: "true"		
            },
            3:{
                text: "HyperTransform Mega Language",		
                value: "false"
            }            
        }
    }
];

const cssQuestions=[
    {
        language: "css",
        type: "code",
        difficulty: 1,
        question: "Completa el codigo css para que todos los div tengan un ancho maximo de 600 pixels y margen inferior de 20 pixels",
        body:{
            0:{
                text: "&lt;style&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;",
                value: "div{"
            },
            1:{
                text: "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                value: "max-"
            },
            2:{
                text: "width: 600px;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin-",
                value: "bottom"
            },
            3:{
                text: ": 20px;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&lt;&frasl;style&gt;",
                value: ""
            }
        }
    },
    {
        language: "css",
        type: "checkbox",
        difficulty: 1,
        question: "Selecciona las propiedades principales del box model",
        body:{
            0:{
                text: "padding",
                value: "true"
            },
            1:{
                text: "border",
                value: "true"
            },
            2:{
                text: "inside",
                value: "false"
            },
            3:{
                text: "margin",
                value: "true"
            }
        }
    },
    {
        language: "css",
        type: "boolean",
        difficulty: 1,
        question: "La tendencia actual dicta que primero se debe definir el estilo para telefonos",
        body:{
            0:{
                text:"",
                value:true
            }
        }
    },
    {
        language: "css",
        type: "order",
        difficulty: 1,
        question: "Ordena los tipos de selectores de menos especificos a mas especificos",
        body:{
            0:{
                text: "class",
                value: "2"
            },
            1:{
                text: "id",
                value: "3"
            },
            2:{
                text: "tag",
                value: "1"
            }
        }
    },
    {
        language: "css",
        type: "radio",
        difficulty: 1,
        question: "Selector que signifique: &lt;ul&gt; con clase first que esta dentro de un &lt;li&gt; con id big",
        body:{
            0:{
                text: "ul.first li#big",	
                value: "false"
            },
            1:{
                text: "li.big ul#first",	
                value: "false"		
            },
            2:{
                text: "li#big ul.first",		
                value: "true"		
            },
            3:{
                text: "ul#first li.big",		
                value: "false"
            }            
        }
    }
];

const jsQuestions=[
    {
        language: "js",
        type: "code",
        difficulty: 1,
        question: "Completa el codigo js para mostrar por consola 'hola mundo' al hacer click sobre un elemento con id 'btn01'",
        body:{
            0:{
                text: "&lt;script&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;let btn = document.getElement",
                value: "ById"
            },
            1:{
                text: "('btn01');<br>&nbsp;&nbsp;&nbsp;&nbsp;btn.add",
                value: "Event"
            },
            2:{
                text: " Listener('",
                value: "click"
            },
            3:{
                text: "',()=&gt;{mostrarMsj});<br>&nbsp;&nbsp;&nbsp;&nbsp;const mostrarMsj = () =&gt; {console.",
                value: "log"
            },
            4:{
                text: "('hola mundo')};<br>&lt;&frasl;script&gt;",
                value: ""
            }
        }
    },
    {
        language: "js",
        type: "checkbox",
        difficulty: 1,
        question: "Selecciona los metodos nativos de js que crean ventanas emergentes (modales)",
        body:{
            0:{
                text: "prompt",
                value: "true"
            },
            1:{
                text: "msgbox",
                value: "false"
            },
            2:{
                text: "alert",
                value: "true"
            },
            3:{
                text: "confirm",
                value: "true"
            }
        }
    },
    {
        language: "js",
        type: "boolean",
        difficulty: 1,
        question: "En un closure se permite acceder al ámbito de una función exterior desde una función interior",
        body:{
            0:{
                text:"",
                value:true
            }
        }
    },
    {
        language: "js",
        type: "order",
        difficulty: 1,
        question: "Ordena de principio a final la funcionalidad de los parametros de un for",
        body:{
            0:{
                text: "modificacion del valor en cada repetición",
                value: "3"
            },
            1:{
                text: "inicialización",
                value: "1"
            },
            2:{
                text: "condición",
                value: "2"
            }
        }
    },
    {
        language: "js",
        type: "radio",
        difficulty: 1,
        question: "Selecciona la forma invalida de realizar comentarios en js",
        body:{
            0:{
                text: "&lt;&excl;&ndash;&ndash;&nbsp;&ndash;&ndash;&gt;",	
                value: "true"
            },
            1:{
                text: "//",	
                value: "false"		
            },
            2:{
                text: "/* */",		
                value: "false"		
            }       
        }
    }
];
