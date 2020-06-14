window.dom = {
    create(str){
        const container = document.createElement('template');
        container.innerHTML = str.trim();
        return container.content.firstChild;
    },
    after(node, node2){
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node, node2){
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, child){
        parent.appendChild(child);
    },
    wrap(child, parent){
        this.before(child, parent);
        this.append(parent, child);
    },
    remove(node){
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node){
         const array = [];
         let tmp = node.firstChild;
         while(tmp){
            array.push(dom.remove(tmp));
            tmp = node.firstChild;
         }
         return array;
    },
    attr(node, name, value){
        if(arguments.length === 3){
            node.setAttribute(name, value);
        }else if(arguments.length === 2){
            return node.getAttribute(name);            
        }
    },
    text(node, str){
        if(arguments.length === 2){
            node.innerText = str;
        }else if(arguments.length === 1){
            return node.innerText;
        }
    },
    html(node, str){
        if(arguments.length === 2){
            node.innerHTML = str;
        }else if(arguments.length === 1){
            return node.innerHTML;
        }
    },
    style(node, name, value){
        if(arguments.length === 3){
            node.style[name] = value;
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name];
            }else if (name instanceof Object){
                const object = name;
                for(let key in object){
                    node.style[key] = object[key];
                }
            }
        }
    },
    class: {
        add(node, className){
            node.classList.add(className);
        },
        remove(node, className){
            node.classList.remove(className);
        },
        has(node, className){
           return node.classList.contains(className);
        }
    },
    on(node, eventName, fn){
        node.addEventListener(eventName, fn);
    },
    off(node, eventName, fn){
        node.removeEventListener(eventName, fn);
    },
    find(selector, scope){
        if(arguments.length === 1){
            const arr = selector.split('>');
            const length = arr.length;
            if(length > 1){
                selector = arr[length-1];
                scope = this.find(arr[length-2])[0];
            }
        }
        return (scope || document).querySelectorAll(selector);
    },
    parent(node){
        return node.parentNode;
    },
    children(node){
        return node.children;
    },
    siblings(node){
        return Array.from(node.parentNode.children).filter(n => n!==node);
    },
    next(node){
        let tmp = node.nextSibling;
        while(tmp && tmp.nodetype === 3){
            tmp = tmp.nextSibling;
        }
        return tmp;
    },
    previous(node){
        let tmp = node.previousSibling;
        while(tmp && tmp.nodetype === 3){
            tmp = tmp.previousSibling;
        }
        return tmp;
    },
    each(nodeList, fn){
        for(let i=0; i<nodeList.length; i++){
            fn.call(null, nodeList[i]);
        }
    },
    index(node){
        const list = this.children(node.parentNode);
        for(let i=0; i<list.length; i++){
           if(list[i] === node){
                return i;
           }
        }
        return -1;
    }
};
