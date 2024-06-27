export function draggable(node: any, data: any) {
    let state = data;

    node.draggable = true;
    node.style.cursor = 'move';

    function handle_dragstart(event: any) {
        event.dataTransfer.setData('text/plain', state);
    }

    node.addEventListener('dragstart', handle_dragstart);

    return {
        update(new_data: any) {
            state = new_data;
        },
        destroy() {
            node.removeEventListener('dragstart', handle_dragstart);
        }
    };
}

export function dropzone(node, options) {
    let state = {
        dropEffect: 'move',
        dragover_class: 'droppable',
        ...options
    }

    function handle_dragenter(event) {
        event.target.classList.add(state.dragover_class);
    }

    function handle_dragleave(event) {
        event.target.classList.remove(state.dragover_class);
    }

    function handle_dragover(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = state.dropEffect;
    }
    
    function handle_drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        event.target.classList.remove(state.dragover_class);
        state.on_dropzone(data, event);
    }

    node.addEventListener('dragenter', handle_dragenter);
    node.addEventListener('dragleave', handle_dragleave);
    node.addEventListener('dragover', handle_dragover);
    node.addEventListener('drop', handle_drop);

    return {
        update(options) {
            state = {
                dropEffect: 'move',
                dragover_class: 'droppable',
                ...options
            }
        },
        destroy() {
            node.removeEventListener('dragenter', handle_dragenter);
            node.removeEventListener('dragleave', handle_dragleave);
            node.removeEventListener('dragover', handle_dragover);
            node.removeEventListener('drop', handle_drop);
        }
    }
}